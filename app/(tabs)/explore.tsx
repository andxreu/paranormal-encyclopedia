// app/(tabs)/explore.tsx
import React, { useState, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  useWindowDimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import { useAppTheme } from '@/contexts/ThemeContext';
import { categories, type Category } from '@/data/paranormal/categories';
import { getTotalTopicsCount, getCategoryTopicsCount } from '@/data/paranormal/index';
import { ParticleEffect } from '@/components/ParticleEffect';
import { HapticFeedback } from '@/utils/haptics';

// ──────────────────────────────────────────────────────────────
// Constants
// ──────────────────────────────────────────────────────────────
const REFRESH_DELAY = 1500;
const SPRING_CONFIG = {
  damping: 15,
  stiffness: 300,
} as const;

// ──────────────────────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────────────────────
interface CategoryGridCardProps {
  category: Category;
  onPress: () => void;
  cardWidth: number;
}

// ──────────────────────────────────────────────────────────────
// Category Card Component
// ──────────────────────────────────────────────────────────────
const CategoryGridCard: React.FC<CategoryGridCardProps> = React.memo(
  ({ category, onPress, cardWidth }) => {
    const { theme, textScale } = useAppTheme();
    const scale = useSharedValue(1);

    const categoryTopicCount = useMemo(() => {
      try {
        return getCategoryTopicsCount(category.id);
      } catch {
        return 0;
      }
    }, [category.id]);

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ scale: scale.value }],
    }));

    const handlePressIn = useCallback(() => {
      HapticFeedback.soft();
      scale.value = withSpring(0.95, SPRING_CONFIG);
    }, [scale]);

    const handlePressOut = useCallback(() => {
      scale.value = withSpring(1, SPRING_CONFIG);
    }, [scale]);

    return (
      <TouchableOpacity
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={1}
        style={[styles.cardWrapper, { width: cardWidth }]}
        accessibilityLabel={`${category.name} category`}
        accessibilityHint={category.description}
        accessibilityRole="button"
      >
        <Animated.View style={animatedStyle}>
          <LinearGradient
            colors={[category.color + '80', category.color + '40', theme.colors.cardBg]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.card, { borderColor: theme.colors.border }]}
          >
            <ParticleEffect count={4} color={category.color + '60'} />

            <View style={styles.cardContent}>
              <Text style={styles.cardIcon}>{category.icon}</Text>

              <Text
                style={[
                  styles.cardName,
                  { color: theme.colors.textPrimary, fontSize: 15 * textScale },
                ]}
              >
                {category.name}
              </Text>

              <Text
                style={[
                  styles.cardDescription,
                  { color: theme.colors.textSecondary, fontSize: 11 * textScale },
                ]}
                numberOfLines={2}
              >
                {category.description}
              </Text>

              <View
                style={[
                  styles.topicCount,
                  {
                    backgroundColor: theme.colors.cardBgTranslucent,
                    borderColor: theme.colors.border,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.topicCountText,
                    { color: theme.colors.textPrimary, fontSize: 10 * textScale },
                  ]}
                >
                  {categoryTopicCount} topics
                </Text>
              </View>
            </View>

            <View style={[styles.cardBorder, { borderColor: category.color + '60' }]} />
            <View style={[styles.cardGlow, { backgroundColor: category.color }]} />
          </LinearGradient>
        </Animated.View>
      </TouchableOpacity>
    );
  }
);

CategoryGridCard.displayName = 'CategoryGridCard';

// ──────────────────────────────────────────────────────────────
// Main Explore Screen Component
// ──────────────────────────────────────────────────────────────
export default function ExploreScreen() {
  const { theme, textScale } = useAppTheme();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [refreshing, setRefreshing] = useState(false);
  const { width } = useWindowDimensions();

  const cardWidth = useMemo(() => {
    const isTablet = width >= 768;
    const columns = isTablet ? 3 : 2;

    const horizontalPadding = 32; // matches contentContainer padding (16 + 16)
    const gap = 12;

    const computed = (width - horizontalPadding - gap * (columns - 1)) / columns;
    return Math.max(140, Math.floor(computed)); // guard against tiny widths / split-screen
  }, [width]);

  const totalTopics = useMemo(() => {
    try {
      return getTotalTopicsCount();
    } catch {
      return 0;
    }
  }, []);

  const handleCategoryPress = useCallback(
    (category: Category) => {
      try {
        HapticFeedback.light();

        const categoryParam = String(category.id);

        // Use group-qualified path to avoid route ambiguity on iOS
        router.push({
          pathname: '/(tabs)/explore/[category]',
          params: { category: categoryParam },
        });
      } catch (error) {
        console.error('[Explore] Navigation error:', error);
      }
    },
    [router]
  );

  const handleSearchPress = useCallback(() => {
    try {
      HapticFeedback.light();

      // You have BOTH app/search.tsx and app/(tabs)/search.tsx.
      // This forces the tabs version.
      router.push('/(tabs)/search');
    } catch (error) {
      console.error('[Explore] Navigation error:', error);
    }
  }, [router]);

  const onRefresh = useCallback(async () => {
    try {
      HapticFeedback.medium();
      setRefreshing(true);

      await new Promise((resolve) => setTimeout(resolve, REFRESH_DELAY));

      HapticFeedback.success();
      console.log('[Explore] ✓ Refresh completed');
    } catch (error) {
      console.error('[Explore] ✗ Error refreshing:', error);
      HapticFeedback.error();
    } finally {
      setRefreshing(false);
    }
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={theme.colors.backgroundGradient}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <SafeAreaView style={styles.safeArea} edges={['top']}>
          {/* Header with Search Button */}
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <View>
                <Text
                  style={[
                    styles.headerTitle,
                    { color: theme.colors.textPrimary, fontSize: 36 * textScale },
                  ]}
                >
                  Explore
                </Text>
                <Text
                  style={[
                    styles.headerSubtitle,
                    { color: theme.colors.textSecondary, fontSize: 14 * textScale },
                  ]}
                >
                  {totalTopics} topics
                </Text>
              </View>

              <TouchableOpacity
                onPress={handleSearchPress}
                style={[
                  styles.searchButton,
                  { backgroundColor: theme.colors.cardBg, borderColor: theme.colors.border },
                ]}
                activeOpacity={0.7}
                accessibilityLabel="Search"
                accessibilityRole="button"
              >
                <Text style={styles.searchIcon}>🔍</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Categories Grid */}
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={[
              styles.contentContainer,
              {
                // Keep content clear of floating tab bar / home indicator
                paddingBottom: Math.max(120, 80 + insets.bottom),
              },
            ]}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                tintColor={theme.colors.violet}
                colors={[theme.colors.violet, theme.colors.indigo, theme.colors.gold]}
                progressBackgroundColor={theme.colors.cardBg}
              />
            }
          >
            <View style={styles.grid}>
              {categories.map((category) => (
                <CategoryGridCard
                  key={category.id}
                  category={category}
                  onPress={() => handleCategoryPress(category)}
                  cardWidth={cardWidth}
                />
              ))}
            </View>

            <View style={styles.bottomSpacer} />
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}

// ──────────────────────────────────────────────────────────────
// Styles
// ──────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  container: { flex: 1 },
  gradient: { flex: 1 },
  safeArea: { flex: 1 },

  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    marginTop: 6,
  },

  searchButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  searchIcon: { fontSize: 22 },

  scrollView: { flex: 1 },
  contentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 120,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },

  cardWrapper: { marginBottom: 12 },
  card: {
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    minHeight: 185,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 24,
    elevation: 8,
    overflow: 'hidden',
  },

  cardContent: {
    alignItems: 'center',
    zIndex: 2,
  },
  cardIcon: {
    fontSize: 52,
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  cardName: {
    fontSize: 15,
    fontWeight: '800',
    textAlign: 'center',
    fontFamily: 'SpaceMono',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  cardDescription: {
    fontSize: 11,
    textAlign: 'center',
    fontFamily: 'SpaceMono',
    lineHeight: 15,
    marginBottom: 10,
  },

  topicCount: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
  },
  topicCountText: {
    fontSize: 10,
    fontWeight: '700',
    fontFamily: 'SpaceMono',
  },

  cardBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 18,
    borderWidth: 2,
    opacity: 0.4,
  },
  cardGlow: {
    position: 'absolute',
    top: -50,
    right: -50,
    width: 100,
    height: 100,
    borderRadius: 50,
    opacity: 0.15,
  },

  bottomSpacer: { height: 20 },
});
