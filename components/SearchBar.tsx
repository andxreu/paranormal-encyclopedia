
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import * as Haptics from 'expo-haptics';
import { useAppTheme } from '@/contexts/ThemeContext';
import { paranormalFacts } from '@/data/paranormal/facts';
import { getAllTopics } from '@/data/paranormal/categories';

interface SearchBarProps {
  onResultPress?: (result: any) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onResultPress }) => {
  const theme = useAppTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  const suggestionsHeight = useSharedValue(0);
  const suggestionsOpacity = useSharedValue(0);

  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const lowerQuery = searchQuery.toLowerCase();
      
      const factResults = paranormalFacts
        .filter(fact =>
          fact.fact.toLowerCase().includes(lowerQuery) ||
          fact.categoryName.toLowerCase().includes(lowerQuery)
        )
        .slice(0, 3)
        .map(fact => ({ ...fact, type: 'fact' }));

      const topicResults = getAllTopics()
        .filter(topic =>
          topic.name.toLowerCase().includes(lowerQuery) ||
          topic.description.toLowerCase().includes(lowerQuery)
        )
        .slice(0, 3)
        .map(topic => ({ ...topic, type: 'topic' }));

      const results = [...factResults, ...topicResults].slice(0, 5);
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
  }, [searchQuery, suggestionsHeight, suggestionsOpacity]);

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

  const handleResultPress = (result: any) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setShowSuggestions(false);
    setSearchQuery('');
    onResultPress?.(result);
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
                key={index}
                style={styles.suggestionItem}
                onPress={() => handleResultPress(result)}
                activeOpacity={0.7}
              >
                {result.type === 'fact' ? (
                  <>
                    <View style={[styles.suggestionBadge, { backgroundColor: result.color + '40' }]}>
                      <Text style={[styles.suggestionBadgeText, { color: result.color }]}>
                        {result.categoryName}
                      </Text>
                    </View>
                    <Text style={styles.suggestionText} numberOfLines={2}>
                      {highlightText(result.fact, searchQuery)}
                    </Text>
                  </>
                ) : (
                  <>
                    <Text style={styles.suggestionTitle}>
                      {highlightText(result.name, searchQuery)}
                    </Text>
                    <Text style={styles.suggestionDescription} numberOfLines={1}>
                      {result.description}
                    </Text>
                  </>
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
  },
  suggestionBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: 6,
  },
  suggestionBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    fontFamily: 'SpaceMono',
    textTransform: 'uppercase',
  },
  suggestionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
    fontFamily: 'SpaceMono',
    marginBottom: 4,
  },
  suggestionText: {
    fontSize: 13,
    color: '#E0E0E0',
    lineHeight: 20,
    fontFamily: 'SpaceMono',
  },
  suggestionDescription: {
    fontSize: 12,
    color: '#B0B0B0',
    fontFamily: 'SpaceMono',
  },
  highlightedText: {
    color: '#FFD700',
    fontWeight: '700',
    backgroundColor: 'rgba(255, 215, 0, 0.2)',
  },
});
