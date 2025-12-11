
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

export const SearchBar: React.FC<SearchBarProps> = ({ onResultPress }) => {
  const { theme } = useAppTheme();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<SearchResult[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  const suggestionsHeight = useSharedValue(0);
  const suggestionsOpacity = useSharedValue(0);

  const updateSuggestions = useCallback((query: string) => {
    if (query.trim().length > 1) {
      const results = fuzzySearch.search(query, 5);
      setSuggestions(results);
      setShowSuggestions(results.length > 0);
      
      suggestionsHeight.value = withTiming(results.length > 0 ? Math.min(results.length * 70, 280) : 0, {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      });
      suggestionsOpacity.value = withTiming(results.length > 0 ? 1 : 0, {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      });
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
      suggestionsHeight.value = withTiming(0, {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      });
      suggestionsOpacity.value = withTiming(0, {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      });
    }
  }, [suggestionsHeight, suggestionsOpacity]);

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

  const handleResultPress = (result: SearchResult) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setShowSuggestions(false);
    setSearchQuery('');
    
    if (onResultPress) {
      onResultPress(result);
    } else if (result.route && result.route !== '/') {
      router.push(result.route as any);
    }
  };

  const handleClear = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setSearchQuery('');
    setShowSuggestions(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchInputContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search mysteries, facts, topics..."
          placeholderTextColor="#808080"
          value={searchQuery}
          onChangeText={setSearchQuery}
          autoCapitalize="none"
          autoCorrect={false}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity
            onPress={handleClear}
            style={styles.clearButton}
          >
            <Text style={styles.clearIcon}>✕</Text>
          </TouchableOpacity>
        )}
      </View>

      {showSuggestions && (
        <Animated.View style={[styles.suggestionsContainer, animatedSuggestionsStyle]}>
          <ScrollView 
            style={styles.suggestionsList}
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true}
          >
            {suggestions.map((result, index) => (
              <TouchableOpacity
                key={`suggestion-${result.type}-${index}`}
                style={styles.suggestionItem}
                onPress={() => handleResultPress(result)}
                activeOpacity={0.7}
              >
                <View style={styles.suggestionHeader}>
                  <Text style={styles.suggestionIcon}>{result.icon || '📄'}</Text>
                  <View style={styles.suggestionContent}>
                    <Text style={styles.suggestionTitle}>
                      {highlightText(result.title, searchQuery)}
                    </Text>
                    <Text style={styles.suggestionDescription} numberOfLines={1}>
                      {result.description}
                    </Text>
                  </View>
                </View>
                {result.color && (
                  <View style={[styles.suggestionAccent, { backgroundColor: result.color }]} />
                )}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Animated.View>
      )}
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
  suggestionsContainer: {
    marginTop: 8,
    backgroundColor: 'rgba(42, 27, 78, 0.95)',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(139, 92, 246, 0.4)',
    overflow: 'hidden',
    boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.4)',
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
