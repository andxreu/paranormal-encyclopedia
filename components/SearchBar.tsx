
// components/SearchBar.tsx
import React, { useCallback } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { useAppTheme } from '@/contexts/ThemeContext';
import { HapticFeedback } from '@/utils/haptics';

interface SearchBarProps {
  onResultPress?: (result: any) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onResultPress }) => {
  const { theme } = useAppTheme();
  const router = useRouter();

  const handleSearchBarPress = useCallback(() => {
    try {
      console.log('[SearchBar] 🔥 PRESS DETECTED - Navigating to search');
      HapticFeedback.light();
      
      // ✅ CRITICAL FIX: Use explicit route path
      const pathname = '/(tabs)/search' as const;
      console.log('[SearchBar] 🔥 Pushing route:', pathname);
      
      router.push(pathname);
    } catch (error) {
      console.error('[SearchBar] ❌ Navigation error:', error);
    }
  }, [router]);

  return (
    <View style={styles.container}>
      <Pressable 
        style={({ pressed }) => [
          styles.searchInputContainer,
          {
            backgroundColor: theme.colors.cardBg || 'rgba(42, 27, 78, 0.8)',
            borderColor: theme.colors.border || 'rgba(139, 92, 246, 0.4)',
            opacity: pressed ? 0.7 : 1,
          }
        ]}
        onPress={handleSearchBarPress}
        accessibilityLabel="Search"
        accessibilityHint="Open search screen"
        accessibilityRole="button"
      >
        <Text style={styles.searchIcon}>🔍</Text>
        <Text style={[styles.searchPlaceholder, { color: theme.colors.textSecondary || '#808080' }]}>
          Search mysteries, facts, topics...
        </Text>
      </Pressable>
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
