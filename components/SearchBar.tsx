// components/SearchBar.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { useAppTheme } from '@/contexts/ThemeContext';
import { fuzzySearch, SearchResult } from '@/utils/fuzzySearch';
import { HapticFeedback } from '@/utils/haptics';

interface SearchBarProps {
  onResultPress?: (result: SearchResult) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onResultPress }) => {
  const { theme } = useAppTheme();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  // ✅ FIX: Simplified to just navigate to search screen on press
  const handleSearchBarPress = useCallback(() => {
    try {
      HapticFeedback.light();
      console.log('[SearchBar] Navigating to search screen');
      
      // ✅ FIX: Use string template for navigation
      router.push('/(tabs)/search' as any);
    } catch (error) {
      console.error('[SearchBar] Navigation error:', error);
    }
  }, [router]);

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[
          styles.searchInputContainer,
          {
            backgroundColor: theme.colors.cardBg || 'rgba(42, 27, 78, 0.8)',
            borderColor: theme.colors.border || 'rgba(139, 92, 246, 0.4)',
          }
        ]}
        onPress={handleSearchBarPress}
        activeOpacity={0.7}
        accessibilityLabel="Search"
        accessibilityHint="Open search screen"
        accessibilityRole="button"
      >
        <Text style={styles.searchIcon}>🔍</Text>
        <Text style={[styles.searchPlaceholder, { color: theme.colors.textSecondary || '#808080' }]}>
          Search mysteries, facts, topics...
        </Text>
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
  searchPlaceholder: {
    flex: 1,
    fontSize: 15,
    fontFamily: 'SpaceMono',
  },
});