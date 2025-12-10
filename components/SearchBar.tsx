
import React, { useState, useCallback, useMemo, memo } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  Modal,
  Dimensions,
} from 'react-native';
import { BlurView } from 'expo-blur';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
} from 'react-native-reanimated';
import { useRouter } from 'expo-router';
import { useAppTheme } from '@/contexts/ThemeContext';
import { fuzzySearch, SearchResult } from '@/utils/fuzzySearch';
import { HapticFeedback } from '@/utils/haptics';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

interface SearchBarProps {
  onResultPress?: (result: SearchResult) => void;
}

interface SearchResultItemProps {
  result: SearchResult;
  onPress: () => void;
}

const SearchResultItem = memo<SearchResultItemProps>(({ result, onPress }) => {
  const { theme, textScale } = useAppTheme();
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePressIn = useCallback(() => {
    scale.value = withSpring(0.98);
  }, [scale]);

  const handlePressOut = useCallback(() => {
    scale.value = withSpring(1);
  }, [scale]);

  const getTypeIcon = (type: string): string => {
    switch (type) {
      case 'category': return '📁';
      case 'topic': return '📄';
      case 'glossary': return '📖';
      case 'codex': return '📜';
      case 'location': return '🏚️';
      case 'fact': return '💡';
      default: return '🔍';
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={1}
      accessibilityLabel={result.title}
      accessibilityRole="button"
    >
      <Animated.View style={[
        styles.resultItem,
        {
          backgroundColor: theme.colors.glassBg,
          borderColor: theme.colors.border,
        },
        animatedStyle,
      ]}>
        <Text style={styles.resultIcon}>{getTypeIcon(result.type)}</Text>
        <View style={styles.resultTextContainer}>
          <Text style={[styles.resultTitle, { color: theme.colors.textPrimary, fontSize: 15 * textScale }]} numberOfLines={1}>
            {result.title}
          </Text>
          <Text style={[styles.resultDescription, { color: theme.colors.textSecondary, fontSize: 12 * textScale }]} numberOfLines={2}>
            {result.description}
          </Text>
        </View>
        <Text style={[styles.resultType, { color: theme.colors.violet, fontSize: 10 * textScale }]}>
          {result.type}
        </Text>
      </Animated.View>
    </TouchableOpacity>
  );
});

SearchResultItem.displayName = 'SearchResultItem';

export const SearchBar = memo<SearchBarProps>(({ onResultPress }) => {
  const { theme, textScale, colorScheme } = useAppTheme();
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  const scale = useSharedValue(1);

  const results = useMemo(() => {
    if (!query || query.trim().length < 2) {
      return [];
    }
    return fuzzySearch.search(query, 15);
  }, [query]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handleFocus = useCallback(() => {
    HapticFeedback.soft();
    setIsFocused(true);
    setShowResults(true);
    scale.value = withSpring(1.02);
  }, [scale]);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
    scale.value = withSpring(1);
  }, [scale]);

  const handleResultPress = useCallback((result: SearchResult) => {
    HapticFeedback.light();
    setQuery('');
    setShowResults(false);
    
    setSearchHistory(prev => {
      const newHistory = [result.title, ...prev.filter(item => item !== result.title)].slice(0, 10);
      return newHistory;
    });

    if (result.route !== '/') {
      router.push(result.route as never);
    }
    
    onResultPress?.(result);
  }, [router, onResultPress]);

  const handleClear = useCallback(() => {
    HapticFeedback.soft();
    setQuery('');
    setShowResults(false);
  }, []);

  const handleClose = useCallback(() => {
    HapticFeedback.soft();
    setShowResults(false);
    setQuery('');
  }, []);

  return (
    <>
      <Animated.View style={[
        styles.container,
        {
          backgroundColor: theme.colors.glassBg,
          borderColor: isFocused ? theme.colors.violet : theme.colors.border,
          boxShadow: isFocused ? `0 0 20px ${theme.colors.violet}40` : 'none',
        },
        animatedStyle,
      ]}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={[
            styles.input,
            {
              color: theme.colors.textPrimary,
              fontSize: 15 * textScale,
            },
          ]}
          placeholder="Search mysteries, locations, terms..."
          placeholderTextColor={theme.colors.textSecondary}
          value={query}
          onChangeText={setQuery}
          onFocus={handleFocus}
          onBlur={handleBlur}
          returnKeyType="search"
          autoCapitalize="none"
          autoCorrect={false}
        />
        {query.length > 0 && (
          <TouchableOpacity onPress={handleClear} style={styles.clearButton}>
            <Text style={styles.clearIcon}>✕</Text>
          </TouchableOpacity>
        )}
      </Animated.View>

      <Modal
        visible={showResults && (results.length > 0 || query.length >= 2)}
        transparent
        animationType="fade"
        onRequestClose={handleClose}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={handleClose}
        >
          <BlurView
            intensity={colorScheme === 'dark' ? 80 : 60}
            tint={colorScheme}
            style={styles.blurView}
          >
            <View style={[styles.resultsContainer, { backgroundColor: theme.colors.background + 'E6' }]}>
              <View style={styles.resultsHeader}>
                <Text style={[styles.resultsTitle, { color: theme.colors.textPrimary, fontSize: 18 * textScale }]}>
                  Search Results
                </Text>
                <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
                  <Text style={[styles.closeIcon, { color: theme.colors.textPrimary }]}>✕</Text>
                </TouchableOpacity>
              </View>
              
              {results.length === 0 && query.length >= 2 ? (
                <View style={styles.noResults}>
                  <Text style={[styles.noResultsText, { color: theme.colors.textSecondary, fontSize: 14 * textScale }]}>
                    No results found for &quot;{query}&quot;
                  </Text>
                </View>
              ) : (
                <FlatList
                  data={results}
                  keyExtractor={(item, index) => `${item.id}-${index}`}
                  renderItem={({ item }) => (
                    <SearchResultItem
                      result={item}
                      onPress={() => handleResultPress(item)}
                    />
                  )}
                  contentContainerStyle={styles.resultsList}
                  showsVerticalScrollIndicator={false}
                />
              )}
            </View>
          </BlurView>
        </TouchableOpacity>
      </Modal>
    </>
  );
});

SearchBar.displayName = 'SearchBar';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
    borderWidth: 2,
    marginBottom: 20,
  },
  searchIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontFamily: 'SpaceMono',
    fontSize: 15,
  },
  clearButton: {
    padding: 4,
  },
  clearIcon: {
    fontSize: 18,
    color: '#999',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blurView: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultsContainer: {
    width: '90%',
    maxHeight: SCREEN_HEIGHT * 0.7,
    borderRadius: 20,
    padding: 20,
    elevation: 10,
  },
  resultsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  resultsTitle: {
    fontSize: 18,
    fontWeight: '800',
    fontFamily: 'SpaceMono',
  },
  closeButton: {
    padding: 8,
  },
  closeIcon: {
    fontSize: 24,
    fontWeight: '700',
  },
  resultsList: {
    gap: 12,
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    gap: 12,
  },
  resultIcon: {
    fontSize: 24,
  },
  resultTextContainer: {
    flex: 1,
  },
  resultTitle: {
    fontSize: 15,
    fontWeight: '700',
    fontFamily: 'SpaceMono',
    marginBottom: 4,
  },
  resultDescription: {
    fontSize: 12,
    fontFamily: 'SpaceMono',
    lineHeight: 16,
  },
  resultType: {
    fontSize: 10,
    fontWeight: '700',
    fontFamily: 'SpaceMono',
    textTransform: 'uppercase',
  },
  noResults: {
    padding: 40,
    alignItems: 'center',
  },
  noResultsText: {
    fontSize: 14,
    fontFamily: 'SpaceMono',
    textAlign: 'center',
  },
});
