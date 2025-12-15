
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import * as Haptics from 'expo-haptics';
import { useAppTheme } from '@/contexts/ThemeContext';
import { fuzzySearch, SearchResult } from '@/utils/fuzzySearch';

interface SearchBarProps {
  onResultPress?: (result: SearchResult) => void;
}

type RouteLike =
  | string
  | {
      pathname: string;
      params?: Record<string, any>;
    };

const toStringParams = (params?: Record<string, any>) => {
  if (!params) return undefined;
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(params)) out[k] = String(v);
  return out;
};

export const SearchBar: React.FC<SearchBarProps> = ({ onResultPress }) => {
  const { theme } = useAppTheme();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<SearchResult[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestionsHeight = useSharedValue(0);
  const suggestionsOpacity = useSharedValue(0);

  const updateSuggestions = useCallback(
    (query: string) => {
      if (query.trim().length > 1) {
        const results = fuzzySearch.search(query, 5);
        setSuggestions(results);
        setShowSuggestions(results.length > 0);

        suggestionsHeight.value = withTiming(
          results.length > 0 ? Math.min(results.length * 70, 280) : 0,
          { duration: 300, easing: Easing.inOut(Easing.ease) }
        );
        suggestionsOpacity.value = withTiming(results.length > 0 ? 1 : 0, {
          duration: 300,
          easing: Easing.inOut(Easing.ease),
        });
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
        suggestionsHeight.value = withTiming(0, { duration: 300, easing: Easing.inOut(Easing.ease) });
        suggestionsOpacity.value = withTiming(0, { duration: 300, easing: Easing.inOut(Easing.ease) });
      }
    },
    [suggestionsHeight, suggestionsOpacity]
  );

  useEffect(() => {
    updateSuggestions(searchQuery);
  }, [searchQuery, updateSuggestions]);

  const animatedSuggestionsStyle = useAnimatedStyle(() => {
    return {
      height: suggestionsHeight.value,
      opacity: suggestionsOpacity.value,
    };
  });

  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;
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

  const safeNavigate = (route: RouteLike) => {
    try {
      if (typeof route === 'string') {
        router.push(route as any);
        return;
      }

      router.push({
        pathname: route.pathname,
        params: toStringParams(route.params),
      } as any);
    } catch (error) {
      console.error('[SearchBar] Navigation error:', error, route);
    }
  };

  const handleSearchBarPress = () => {
    try {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      console.log('[SearchBar] Navigating to search screen');
      router.push('/(tabs)/search');
    } catch (error) {
      console.error('[SearchBar] Navigation error:', error);
    }
  };

  const handleResultPress = (result: SearchResult) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    console.log('[SearchBar] NAV', result.route, { result });

    setShowSuggestions(false);
    setSearchQuery('');

    if (onResultPress) {
      onResultPress(result);
      return;
    }

    if (!result.route || result.route === '/') return;

    // If your SearchResult is typed as string route, we handle it.
    // If it returns a structured route object in the future, we handle that too.
    safeNavigate(result.route as unknown as RouteLike);
  };

  const handleClear = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setSearchQuery('');
    setShowSuggestions(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.searchInputContainer}
        onPress={handleSearchBarPress}
        activeOpacity={0.7}
      >
        <Text style={styles.searchIcon}>🔍</Text>
        <Text style={styles.searchPlaceholder}>Search mysteries, facts, topics...</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    zIndex: 100,
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
  searchPlaceholder: {
    flex: 1,
    fontSize: 15,
    color: '#808080',
    fontFamily: 'SpaceMono',
  },
  clearButton: {
    padding: 4,
  },
  clearIcon: {
    fontSize: 18,
    color: '#808080',
  },
  suggestionsContainer: {
    marginTop: 8,
    backgroundColor: 'rgba(42, 27, 78, 0.95)',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(139, 92, 246, 0.4)',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 24,
    elevation: 8,
  },
  suggestionsList: {
    maxHeight: 280,
  },
  suggestionItem: {
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(139, 92, 246, 0.2)',
    overflow: 'hidden',
  },
  suggestionHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  suggestionIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  suggestionContent: {
    flex: 1,
  },
  suggestionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
    fontFamily: 'SpaceMono',
    marginBottom: 4,
  },
  suggestionDescription: {
    fontSize: 12,
    color: '#B0B0B0',
    fontFamily: 'SpaceMono',
  },
  suggestionAccent: {
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
