
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, InteractionManager } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  FadeIn,
} from 'react-native-reanimated';
import { useAppTheme } from '@/contexts/ThemeContext';
import { fuzzySearch, SearchResult } from '@/utils/fuzzySearch';
import { storage } from '@/utils/storage';
import { HapticFeedback } from '@/utils/haptics';

const CATEGORY_LABELS: Record<string, string> = {
  topics: 'Topics',
  locations: 'Haunted Locations',
  codex: 'Codex Articles',
  glossary: 'Glossary Terms',
  documented: 'Documented Accounts',
  categories: 'Categories',
};

const DEBOUNCE_MS = 200;

export default function SearchScreen() {
  const { theme, textScale } = useAppTheme();
  const router = useRouter();
  const inputRef = useRef<TextInput>(null);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const latestQueryRef = useRef<string>('');

  const [searchQuery, setSearchQuery] = useState('');
  const [categorizedResults, setCategorizedResults] = useState<Record<string, SearchResult[]>>({});
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const fadeOpacity = useSharedValue(0);

  useEffect(() => {
    // Fade in animation
    fadeOpacity.value = withTiming(1, {
      duration: 600,
      easing: Easing.inOut(Easing.ease),
    });

    // Load search history
    loadSearchHistory();

    // Initialize search index when screen mounts
    fuzzySearch.initialize().then(() => {
      console.log('[Search] ✓ Search index initialized');
    }).catch((error) => {
      console.error('[Search] ⚠️ Search initialization failed:', error);
    });

    // Auto-focus input after screen transition completes
    const task = InteractionManager.runAfterInteractions(() => {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    });

    return () => task.cancel();
  }, [fadeOpacity]);

  const loadSearchHistory = async () => {
    try {
      const history = await storage.getSearchHistory();
      setSearchHistory(history);
    } catch (error) {
      console.error('[Search] Error loading history:', error);
    }
  };

  const handleSearch = useCallback(async (query: string) => {
    setSearchQuery(query);
    latestQueryRef.current = query;

    // Clear previous debounce timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    // Empty query - clear results immediately
    if (query.trim() === '') {
      setCategorizedResults({});
      setIsSearching(false);
      return;
    }

    setIsSearching(true);

    // Debounce search
    debounceTimerRef.current = setTimeout(async () => {
      const currentQuery = query;

      try {
        // Save to history if query is long enough
        if (currentQuery.trim().length >= 2) {
          await storage.saveSearchHistory(currentQuery.trim());
          await loadSearchHistory();
        }

        // Perform search
        const results = await fuzzySearch.getCategorizedResults(currentQuery);

        // Stale query guard - only commit results if this is still the latest query
        if (latestQueryRef.current === currentQuery) {
          setCategorizedResults(results);
        } else {
          console.log('[Search] Discarding stale results for:', currentQuery);
        }
      } catch (error) {
        console.error('[Search] Error searching:', error);
        if (latestQueryRef.current === currentQuery) {
          setCategorizedResults({});
        }
      } finally {
        if (latestQueryRef.current === currentQuery) {
          setIsSearching(false);
        }
      }
    }, DEBOUNCE_MS);
  }, []);

  const handleResultPress = useCallback((result: SearchResult) => {
    HapticFeedback.light();
    console.log('[Search] Result pressed:', result.title);
    if (result.route && result.route !== '/') {
      router.push(result.route as any);
    }
  }, [router]);

  const handleClearHistory = useCallback(async () => {
    HapticFeedback.medium();
    await storage.clearSearchHistory();
    setSearchHistory([]);
  }, []);

  const handleHistoryItemPress = useCallback((item: string) => {
    HapticFeedback.soft();
    handleSearch(item);
  }, [handleSearch]);

  const highlightText = useCallback((text: string, query: string) => {
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
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: fadeOpacity.value,
  }));

  const totalResults = Object.values(categorizedResults).reduce((sum, arr) => sum + arr.length, 0);

  const renderResultItem = useCallback(({ item }: { item: SearchResult }) => (
    <TouchableOpacity
      style={[styles.resultCard, { backgroundColor: theme.colors.cardBg, borderColor: theme.colors.border }]}
      onPress={() => handleResultPress(item)}
      activeOpacity={0.7}
    >
      <View style={styles.resultHeader}>
        <View style={styles.resultIconContainer}>
          <Text style={styles.resultIcon}>{item.icon || '📄'}</Text>
        </View>
        <View style={styles.resultContent}>
          <Text style={[styles.resultTitle, { color: theme.colors.textPrimary, fontSize: 15 * textScale }]}>
            {highlightText(item.title, searchQuery)}
          </Text>
          <Text style={[styles.resultDescription, { color: theme.colors.textSecondary, fontSize: 13 * textScale }]} numberOfLines={2}>
            {highlightText(item.description, searchQuery)}
          </Text>
        </View>
      </View>
      {item.color && (
        <View style={[styles.resultAccent, { backgroundColor: item.color }]} />
      )}
    </TouchableOpacity>
  ), [theme, textScale, searchQuery, highlightText, handleResultPress]);

  const renderHistoryItem = useCallback(({ item }: { item: string }) => (
    <TouchableOpacity
      style={[styles.historyItem, { backgroundColor: theme.colors.cardBg, borderColor: theme.colors.border }]}
      onPress={() => handleHistoryItemPress(item)}
      activeOpacity={0.7}
    >
      <Text style={styles.historyIcon}>🕐</Text>
      <Text style={[styles.historyText, { color: theme.colors.textPrimary, fontSize: 14 * textScale }]}>
        {item}
      </Text>
    </TouchableOpacity>
  ), [theme, textScale, handleHistoryItemPress]);

  const renderCategorySection = useCallback(({ item }: { item: [string, SearchResult[]] }) => {
    const [category, results] = item;
    if (results.length === 0) return null;

    return (
      <Animated.View
        entering={FadeIn.duration(400)}
        style={styles.categorySection}
      >
        <View style={styles.categorySectionHeader}>
          <Text style={[styles.categoryTitle, { color: theme.colors.textPrimary, fontSize: 16 * textScale }]}>
            {CATEGORY_LABELS[category] || category}
          </Text>
          <Text style={[styles.categoryCount, { color: theme.colors.textSecondary, fontSize: 12 * textScale }]}>
            {results.length}
          </Text>
        </View>

        <FlatList
          data={results}
          renderItem={renderResultItem}
          keyExtractor={(item, index) => `${category}-${item.id}-${index}`}
          scrollEnabled={false}
        />
      </Animated.View>
    );
  }, [theme, textScale, renderResultItem]);

  const categoryEntries = Object.entries(categorizedResults).filter(([_, results]) => results.length > 0);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={theme.colors.backgroundGradient}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <SafeAreaView style={styles.safeArea} edges={['top']}>
          <Animated.View style={[styles.animatedContainer, animatedStyle]}>
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
                  ref={inputRef}
                  style={[styles.searchInput, { color: theme.colors.textPrimary, fontSize: 15 * textScale }]}
                  placeholder="Search everything..."
                  placeholderTextColor={theme.colors.textSecondary}
                  value={searchQuery}
                  onChangeText={handleSearch}
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType="search"
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

            {searchQuery.trim() === '' ? (
              <FlatList
                style={styles.scrollView}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                  searchHistory.length > 0 ? (
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
                    </View>
                  ) : (
                    <View style={styles.emptyContainer}>
                      <Text style={styles.emptyEmoji}>🔮</Text>
                      <Text style={[styles.emptyTitle, { color: theme.colors.textPrimary, fontSize: 24 * textScale }]}>
                        Start Searching
                      </Text>
                      <Text style={[styles.emptyText, { color: theme.colors.textSecondary, fontSize: 14 * textScale }]}>
                        Search through topics, locations, codex, glossary, and more
                      </Text>
                    </View>
                  )
                }
                data={searchHistory}
                renderItem={renderHistoryItem}
                keyExtractor={(item, index) => `history-${index}`}
              />
            ) : totalResults === 0 && !isSearching ? (
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
              <FlatList
                style={styles.scrollView}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                  <Text style={[styles.resultsCount, { color: theme.colors.textSecondary, fontSize: 13 * textScale }]}>
                    {isSearching ? 'Searching...' : `${totalResults} results found`}
                  </Text>
                }
                data={categoryEntries}
                renderItem={renderCategorySection}
                keyExtractor={([category]) => category}
              />
            )}
          </Animated.View>
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
  animatedContainer: {
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
    shadowColor: '#8B5CF6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
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
    paddingBottom: 120,
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
    marginBottom: 20,
  },
  categorySection: {
    marginBottom: 24,
  },
  categorySectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'SpaceMono',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  categoryCount: {
    fontSize: 12,
    fontFamily: 'SpaceMono',
    fontWeight: '600',
  },
  resultCard: {
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderLeftWidth: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 4,
    overflow: 'hidden',
  },
  resultHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  resultIconContainer: {
    marginRight: 12,
  },
  resultIcon: {
    fontSize: 28,
  },
  resultContent: {
    flex: 1,
  },
  resultTitle: {
    fontSize: 15,
    fontWeight: '700',
    fontFamily: 'SpaceMono',
    marginBottom: 4,
  },
  resultDescription: {
    fontSize: 13,
    lineHeight: 20,
    fontFamily: 'SpaceMono',
  },
  resultAccent: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 3,
    opacity: 0.8,
  },
  highlightedText: {
    color: '#FFD700',
    fontWeight: '700',
    backgroundColor: 'rgba(255, 215, 0, 0.2)',
  },
});
