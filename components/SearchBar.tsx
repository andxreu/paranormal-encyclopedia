// components/SearchBar.tsx
import React, { useCallback, useMemo } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { useAppTheme } from '@/contexts/ThemeContext';
import { HapticFeedback } from '@/utils/haptics';

interface SearchBarProps {
  // kept for compatibility; not used in button-mode
  onResultPress?: (result: any) => void;
}

export const SearchBar: React.FC<SearchBarProps> = () => {
  const { theme, textScale } = useAppTheme();
  const router = useRouter();

  const colors = useMemo(
    () => ({
      bg: theme.colors.cardBg || 'rgba(42, 27, 78, 0.8)',
      border: theme.colors.border || 'rgba(139, 92, 246, 0.4)',
      placeholder: theme.colors.textSecondary || '#808080',
    }),
    [theme]
  );

  const handlePress = useCallback(() => {
    try {
      HapticFeedback.light();

      // Navigate to your search screen. If your route is different, update only this line.
      router.push('/(tabs)/search' as any);
    } catch (error) {
      console.error('[SearchBar] ❌ Navigation error:', error);
    }
  }, [router]);

  return (
    <View style={styles.container}>
      <Pressable
        onPress={handlePress}
        style={({ pressed }) => [
          styles.searchButton,
          {
            backgroundColor: colors.bg,
            borderColor: colors.border,
            opacity: pressed ? 0.85 : 1,
          },
        ]}
        accessibilityLabel="Search"
        accessibilityHint="Opens the search screen"
        accessibilityRole="button"
      >
        <Text style={styles.searchIcon}>🔍</Text>
        <Text
          style={[
            styles.searchLabel,
            { color: colors.placeholder, fontSize: 15 * (textScale ?? 1) },
          ]}
          numberOfLines={1}
        >
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
  searchButton: {
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
  searchLabel: {
    flex: 1,
    fontFamily: 'SpaceMono',
  },
});
