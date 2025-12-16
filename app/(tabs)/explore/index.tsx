
// app/(tabs)/explore/index.tsx
import React, { useState, useCallback, useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  FadeIn,
} from 'react-native-reanimated';

import { CategoryCard } from '@/components/CategoryCard';
import { ParticleField } from '@/components/ParticleField';
import { categories } from '@/data/paranormal/categories';
import { useAppTheme } from '@/contexts/ThemeContext';
import { HapticFeedback } from '@/utils/haptics';

// ──────────────────────────────────────────────────────────────
// Constants
// ──────────────────────────────────────────────────────────────
const REFRESH_DELAY = 1000;
const FADE_IN_DURATION = 600;

// ──────────────────────────────────────────────────────────────
// Main Component
// ──────────────────────────────────────────────────────────────
export default function ExploreScreen() {
  const { theme, textScale } = useAppTheme();

  const [refreshing, setRefreshing] = useState(false);

  const fadeOpacity = useSharedValue(0);

  // Fade in on mount
  React.useEffect(() => {
    fadeOpacity.value = withTiming(1, {
      duration: FADE_IN_DURATION,
      easing: Easing.inOut(Easing.ease),
    });
  }, [fadeOpacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: fadeOpacity.value,
  }));

  /**
   * Handle pull-to-refresh
   */
  const onRefresh = useCallback(async () => {
    try {
      HapticFeedback.medium();
      setRefreshing(true);

      // Simulate refresh
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

  /**
   * Memoized gradient colors
   */
  const gradientColors = useMemo(
    () => theme.colors.backgroundGradient,
    [theme.colors.backgroundGradient]
  );

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={gradientColors}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        {/* Animated Background Particles */}
        <ParticleField count={15} />

        <SafeAreaView style={styles.safeArea} edges={['top']}>
          <Animated.View style={[styles.animatedContainer, animatedStyle]}>
            {/* Header */}
            <View style={styles.header}>
              <View style={styles.headerContent}>
                <Text
                  style={[
                    styles.headerTitle,
                    {
                      color: theme.colors.textPrimary,
                      fontSize: 36 * textScale,
                    },
                  ]}
                >
                  Explore
                </Text>
                <Text
                  style={[
                    styles.headerSubtitle,
                    {
                      color: theme.colors.textSecondary,
                      fontSize: 14 * textScale,
                    },
                  ]}
                >
                  Discover paranormal mysteries
                </Text>
              </View>
            </View>

            {/* Scrollable Content */}
            <ScrollView
              style={styles.scrollView}
              contentContainerStyle={styles.contentContainer}
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
              {/* Categories Section */}
              <Animated.View entering={FadeIn.delay(200).duration(400)} style={styles.section}>
                <Text
                  style={[
                    styles.sectionTitle,
                    {
                      color: theme.colors.textPrimary,
                      fontSize: 18 * textScale,
                    },
                  ]}
                >
                  All Categories
                </Text>
                <Text
                  style={[
                    styles.sectionSubtitle,
                    {
                      color: theme.colors.textSecondary,
                      fontSize: 13 * textScale,
                    },
                  ]}
                >
                  {categories.length} categories to explore
                </Text>
              </Animated.View>

              {/* Categories Grid */}
              <View style={styles.categoriesGrid}>
                {categories.map((category, index) => (
                  <Animated.View
                    key={category.id}
                    entering={FadeIn.delay(300 + index * 50).duration(400)}
                  >
                    <CategoryCard category={category} />
                  </Animated.View>
                ))}
              </View>

              {/* Bottom Spacer for Tab Bar */}
              <View style={styles.bottomSpacer} />
            </ScrollView>
          </Animated.View>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}

// ──────────────────────────────────────────────────────────────
// Styles
// ──────────────────────────────────────────────────────────────
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },
  headerContent: {
    flex: 1,
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
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 120,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'SpaceMono',
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 13,
    fontFamily: 'SpaceMono',
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  bottomSpacer: {
    height: 40,
  },
});
