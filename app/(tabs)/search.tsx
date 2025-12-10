
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppTheme } from '@/contexts/ThemeContext';
import { paranormalFacts } from '@/data/paranormal/facts';
import { getAllTopics } from '@/data/paranormal/categories';

export default function SearchScreen() {
  const theme = useAppTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setSearchResults([]);
      return;
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
            <Text style={styles.headerTitle}>Search</Text>
            <Text style={styles.headerSubtitle}>
              Discover paranormal mysteries
            </Text>
          </View>

          <View style={styles.searchContainer}>
            <View style={styles.searchInputContainer}>
              <Text style={styles.searchIcon}>🔍</Text>
              <TextInput
                style={styles.searchInput}
                placeholder="Search facts, topics, mysteries..."
                placeholderTextColor="#808080"
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
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyEmoji}>🔮</Text>
                <Text style={styles.emptyTitle}>Start Searching</Text>
                <Text style={styles.emptyText}>
                  Search through {paranormalFacts.length} paranormal facts and mysteries
                </Text>
              </View>
            ) : searchResults.length === 0 ? (
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyEmoji}>👻</Text>
                <Text style={styles.emptyTitle}>No Results Found</Text>
                <Text style={styles.emptyText}>
                  Try searching for something else
                </Text>
              </View>
            ) : (
              <>
                <Text style={styles.resultsCount}>
                  {searchResults.length} results found
                </Text>
                {searchResults.map((result, index) => (
                  <React.Fragment key={index}>
                    {result.type === 'fact' ? (
                      <View style={[styles.resultCard, { borderLeftColor: result.color }]}>
                        <Text style={[styles.resultType, { color: result.color }]}>
                          FACT • {result.categoryName}
                        </Text>
                        <Text style={styles.resultText}>
                          {highlightText(result.fact, searchQuery)}
                        </Text>
                      </View>
                    ) : (
                      <View style={styles.resultCard}>
                        <Text style={styles.resultType}>TOPIC</Text>
                        <Text style={styles.resultTitle}>
                          {highlightText(result.name, searchQuery)}
                        </Text>
                        <Text style={styles.resultDescription}>{result.description}</Text>
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
    color: '#FFFFFF',
    fontFamily: 'SpaceMono',
    textShadowColor: 'rgba(139, 92, 246, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#B0B0B0',
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
    backgroundColor: 'rgba(42, 27, 78, 0.8)',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'rgba(139, 92, 246, 0.4)',
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
    color: '#FFFFFF',
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
    color: '#FFFFFF',
    fontFamily: 'SpaceMono',
    marginBottom: 12,
  },
  emptyText: {
    fontSize: 14,
    color: '#B0B0B0',
    fontFamily: 'SpaceMono',
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 40,
  },
  resultsCount: {
    fontSize: 13,
    color: '#B0B0B0',
    fontFamily: 'SpaceMono',
    marginBottom: 16,
  },
  resultCard: {
    backgroundColor: 'rgba(42, 27, 78, 0.6)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(139, 92, 246, 0.3)',
    borderLeftWidth: 4,
    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.3)',
    elevation: 4,
  },
  resultType: {
    fontSize: 10,
    fontWeight: '700',
    fontFamily: 'SpaceMono',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
    color: '#8B5CF6',
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    fontFamily: 'SpaceMono',
    marginBottom: 6,
  },
  resultText: {
    fontSize: 14,
    color: '#FFFFFF',
    lineHeight: 22,
    fontFamily: 'SpaceMono',
  },
  resultDescription: {
    fontSize: 13,
    color: '#B0B0B0',
    lineHeight: 20,
    fontFamily: 'SpaceMono',
  },
  highlightedText: {
    color: '#FFD700',
    fontWeight: '700',
    backgroundColor: 'rgba(255, 215, 0, 0.2)',
  },
});
