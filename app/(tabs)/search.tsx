
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Clipboard, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppTheme } from '@/contexts/ThemeContext';
import { paranormalFacts } from '@/data/paranormal/facts';
import { getAllTopics } from '@/data/paranormal/categories';
import { storage } from '@/utils/storage';
import { HapticFeedback } from '@/utils/haptics';

export default function SearchScreen() {
  const { theme, textScale } = useAppTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  useEffect(() => {
    loadSearchHistory();
  }, []);

  const loadSearchHistory = async () => {
    const history = await storage.getSearchHistory();
    setSearchHistory(history);
  };

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }

    if (query.trim().length >= 2) {
      await storage.saveSearchHistory(query.trim());
      await loadSearchHistory();
    }

    const lowerQuery = query.toLowerCase();
    
    const factResults = paranormalFacts.filter(fact =>
      fact.fact.toLowerCase().includes(lowerQuery) ||
      fact.categoryName.toLowerCase().includes(lowerQuery)
    ).map(fact => ({ ...fact, type: 'fact' }));

    const topicResults = getAllTopics().filter(topic =>
      topic.name.toLowerCase().includes(lowerQuery) ||
      topic.description.toLowerCase().includes(lowerQuery)
    ).map(topic => ({ ...topic, type: 'topic' }));

    setSearchResults([...factResults.slice(0, 15), ...topicResults.slice(0, 15)]);
  };

  const handleCopyToClipboard = (text: string) => {
    HapticFeedback.success();
    Clipboard.setString(text);
    Alert.alert('Copied!', 'Text copied to clipboard');
  };

  const handleClearHistory = async () => {
    HapticFeedback.medium();
    await storage.clearSearchHistory();
    setSearchHistory([]);
  };

  const highlightText = (text: string, query: string) => {
    if (!query.trim()) {
      return text;
    }
    
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) => {
      if (part.toLowerCase() === query.toLowerCase()) {
        return (
          <Text key={index} style={styles.highlightedText}>
            {part}
          </Text>
        );
      }
      return part;
    });
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={theme.colors.backgroundGradient}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <SafeAreaView style={styles.safeArea} edges={['top']}>
          <View style={styles.header}>
            <Text style={[styles.headerTitle, { color: theme.colors.textPrimary, fontSize: 36 * textScale }]}>
              Search
            </Text>
            <Text style={[styles.headerSubtitle, { color: theme.colors.textSecondary, fontSize: 14 * textScale }]}>
              Discover paranormal mysteries
            </Text>
          </View>

          <View style={styles.searchContainer}>
            <View style={[styles.searchInputContainer, { backgroundColor: theme.colors.cardBg, borderColor: theme.colors.border }]}>
              <Text style={styles.searchIcon}>🔍</Text>
              <TextInput
                style={[styles.searchInput, { color: theme.colors.textPrimary, fontSize: 15 * textScale }]}
                placeholder="Search facts, topics, mysteries..."
                placeholderTextColor={theme.colors.textSecondary}
                value={searchQuery}
                onChangeText={handleSearch}
                autoCapitalize="none"
                autoCorrect={false}
              />
              {searchQuery.length > 0 && (
                <TouchableOpacity
                  onPress={() => handleSearch('')}
                  style={styles.clearButton}
                >
                  <Text style={styles.clearIcon}>✕</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>

          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
          >
            {searchQuery.trim() === '' ? (
              <>
                {searchHistory.length > 0 && (
                  <View style={styles.historySection}>
                    <View style={styles.historySectionHeader}>
                      <Text style={[styles.historySectionTitle, { color: theme.colors.textPrimary, fontSize: 16 * textScale }]}>
                        Recent Searches
                      </Text>
                      <TouchableOpacity onPress={handleClearHistory}>
                        <Text style={[styles.clearHistoryText, { color: theme.colors.violet, fontSize: 13 * textScale }]}>
                          Clear
                        </Text>
                      </TouchableOpacity>
                    </View>
                    {searchHistory.map((item, index) => (
                      <React.Fragment key={index}>
                        <TouchableOpacity
                          style={[styles.historyItem, { backgroundColor: theme.colors.cardBg, borderColor: theme.colors.border }]}
                          onPress={() => handleSearch(item)}
                          activeOpacity={0.7}
                        >
                          <Text style={styles.historyIcon}>🕐</Text>
                          <Text style={[styles.historyText, { color: theme.colors.textPrimary, fontSize: 14 * textScale }]}>
                            {item}
                          </Text>
                        </TouchableOpacity>
                      </React.Fragment>
                    ))}
                  </View>
                )}
                <View style={styles.emptyContainer}>
                  <Text style={styles.emptyEmoji}>🔮</Text>
                  <Text style={[styles.emptyTitle, { color: theme.colors.textPrimary, fontSize: 24 * textScale }]}>
                    Start Searching
                  </Text>
                  <Text style={[styles.emptyText, { color: theme.colors.textSecondary, fontSize: 14 * textScale }]}>
                    Search through {paranormalFacts.length} paranormal facts and mysteries
                  </Text>
                </View>
              </>
            ) : searchResults.length === 0 ? (
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyEmoji}>👻</Text>
                <Text style={[styles.emptyTitle, { color: theme.colors.textPrimary, fontSize: 24 * textScale }]}>
                  No Results Found
                </Text>
                <Text style={[styles.emptyText, { color: theme.colors.textSecondary, fontSize: 14 * textScale }]}>
                  Try searching for something else
                </Text>
              </View>
            ) : (
              <>
                <Text style={[styles.resultsCount, { color: theme.colors.textSecondary, fontSize: 13 * textScale }]}>
                  {searchResults.length} results found
                </Text>
                {searchResults.map((result, index) => (
                  <React.Fragment key={index}>
                    {result.type === 'fact' ? (
                      <View style={[styles.resultCard, { backgroundColor: theme.colors.cardBg, borderColor: theme.colors.border, borderLeftColor: result.color }]}>
                        <View style={styles.resultHeader}>
                          <Text style={[styles.resultType, { color: result.color, fontSize: 10 * textScale }]}>
                            FACT • {result.categoryName}
                          </Text>
                          <TouchableOpacity
                            onPress={() => handleCopyToClipboard(result.fact)}
                            style={styles.copyButton}
                          >
                            <Text style={styles.copyIcon}>📋</Text>
                          </TouchableOpacity>
                        </View>
                        <Text style={[styles.resultText, { color: theme.colors.textPrimary, fontSize: 14 * textScale }]}>
                          {highlightText(result.fact, searchQuery)}
                        </Text>
                      </View>
                    ) : (
                      <View style={[styles.resultCard, { backgroundColor: theme.colors.cardBg, borderColor: theme.colors.border }]}>
                        <View style={styles.resultHeader}>
                          <Text style={[styles.resultType, { color: theme.colors.violet, fontSize: 10 * textScale }]}>
                            TOPIC
                          </Text>
                          <TouchableOpacity
                            onPress={() => handleCopyToClipboard(`${result.name}: ${result.description}`)}
                            style={styles.copyButton}
                          >
                            <Text style={styles.copyIcon}>📋</Text>
                          </TouchableOpacity>
                        </View>
                        <Text style={[styles.resultTitle, { color: theme.colors.textPrimary, fontSize: 16 * textScale }]}>
                          {highlightText(result.name, searchQuery)}
                        </Text>
                        <Text style={[styles.resultDescription, { color: theme.colors.textSecondary, fontSize: 13 * textScale }]}>
                          {result.description}
                        </Text>
                      </View>
                    )}
                  </React.Fragment>
                ))}
              </>
            )}
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: '900',
    fontFamily: 'SpaceMono',
    textShadowColor: 'rgba(139, 92, 246, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  headerSubtitle: {
    fontSize: 14,
    fontFamily: 'SpaceMono',
    marginTop: 4,
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 2,
    paddingHorizontal: 16,
    paddingVertical: 14,
    boxShadow: '0px 4px 16px rgba(139, 92, 246, 0.3)',
    elevation: 6,
  },
  searchIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    fontFamily: 'SpaceMono',
  },
  clearButton: {
    padding: 4,
  },
  clearIcon: {
    fontSize: 18,
    color: '#808080',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  historySection: {
    marginBottom: 24,
  },
  historySectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  historySectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'SpaceMono',
  },
  clearHistoryText: {
    fontSize: 13,
    fontWeight: '600',
    fontFamily: 'SpaceMono',
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
    borderWidth: 1,
  },
  historyIcon: {
    fontSize: 18,
    marginRight: 12,
  },
  historyText: {
    fontSize: 14,
    fontFamily: 'SpaceMono',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
  },
  emptyEmoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'SpaceMono',
    marginBottom: 12,
  },
  emptyText: {
    fontSize: 14,
    fontFamily: 'SpaceMono',
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 40,
  },
  resultsCount: {
    fontSize: 13,
    fontFamily: 'SpaceMono',
    marginBottom: 16,
  },
  resultCard: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderLeftWidth: 4,
    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.3)',
    elevation: 4,
  },
  resultHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  resultType: {
    fontSize: 10,
    fontWeight: '700',
    fontFamily: 'SpaceMono',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  copyButton: {
    padding: 4,
  },
  copyIcon: {
    fontSize: 18,
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'SpaceMono',
    marginBottom: 6,
  },
  resultText: {
    fontSize: 14,
    lineHeight: 22,
    fontFamily: 'SpaceMono',
  },
  resultDescription: {
    fontSize: 13,
    lineHeight: 20,
    fontFamily: 'SpaceMono',
  },
  highlightedText: {
    color: '#FFD700',
    fontWeight: '700',
    backgroundColor: 'rgba(255, 215, 0, 0.2)',
  },
});
