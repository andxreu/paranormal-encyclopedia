
// app/(tabs)/explore/[category]/index.tsx
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, RefreshControl, InteractionManager } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  Easing,
  FadeIn,
} from 'react-native-reanimated';

import { useAppTheme } from '@/contexts/ThemeContext';
import { getCategoryById, type Category } from '@/data/paranormal/categories';
import { getCategoryTopics } from '@/data/paranormal/index';
import { ParticleEffect } from '@/components/ParticleEffect';
import { HapticFeedback } from '@/utils/haptics';

// ──────────────────────────────────────────────────────────────
// Constants
// ──────────────────────────────────────────────────────────────
const FADE_IN_DURATION = 600;
const REFRESH_DELAY = 1000;

// ──────────────────────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────────────────────
interface Topic {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  icon?: string;
}

interface TopicCardProps {
  topic: Topic;
  categoryColor: string;
  onPress: () => void;
}

// ──────────────────────────────────────────────────────────────
// Helpers
// ──────────────────────────────────────────────────────────────
function asStringParam(value: string | string[] | undefined): string {
  if (!value) return '';
  return Array.isArray(value) ? String(value[0] ?? '') : String(value);
}

// ──────────────────────────────────────────────────────────────
// Topic Card
// ──────────────────────────────────────────────────────────────
const TopicCard: React.FC<TopicCardProps> = React.memo(({ topic, categoryColor, onPress }) => {
  const { theme, textScale } = useAppTheme();
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = useCallback(() => {
    HapticFeedback.soft();
    scale.value = withSpring(0.98, { damping: 15, stiffness: 300 });
  }, [scale]);

  const handlePressOut = useCallback(() => {
    scale.value = withSpring(1, { damping: 15, stiffness: 300 });
  }, [scale]);

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={1}
      accessibilityLabel={topic.name}
      accessibilityHint={`View details about ${topic.name}`}
      accessibilityRole="button"
      style={styles.topicCardWrapper}
    >
      <Animated.View style={animatedStyle}>
        <LinearGradient
          colors={[categoryColor + '40', categoryColor + '20', theme.colors.cardBg]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.topicCard, { borderColor: categoryColor + '60' }]}
        >
          <View style={styles.topicCardContent}>
            <View style={styles.topicTextContainer}>
              <Text style={[styles.topicName, { color: theme.colors.textPrimary, fontSize: 18 * textScale }]}>
                {topic.name}
              </Text>

              <Text
                style={[styles.topicDescription, { color: theme.colors.textSecondary, fontSize: 13 * textScale }]}
                numberOfLines={2}
              >
                {topic.description}
              </Text>
            </View>
          </View>

          <View style={[styles.topicCardBorder, { borderColor: categoryColor + '60' }]} pointerEvents="none" />
        </LinearGradient>
      </Animated.View>
    </TouchableOpacity>
  );
});

TopicCard.displayName = 'TopicCard';

// ──────────────────────────────────────────────────────────────
// Main
// ──────────────────────────────────────────────────────────────
export default function CategoryScreen() {
  const params = useLocalSearchParams();
  const categoryId = asStringParam(params.category as any);

  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { theme, textScale } = useAppTheme();

  const [refreshing, setRefreshing] = useState(false);
  const [category, setCategory] = useState<Category | null>(null);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [showParticles, setShowParticles] = useState(false);

  const fadeOpacity = useSharedValue(0);
  const scale = useSharedValue(0.95);

  const loadCategoryData = useCallback(() => {
    if (!categoryId) {
      console.warn('[Category] No category param');
      setCategory(null);
      setTopics([]);
      return;
    }

    try {
      console.log('[Category] 🔥 Loading category:', categoryId);
      const categoryData = getCategoryById(String(categoryId));
      
      // ✅ PERFORMANCE FIX: Load topics asynchronously to not block UI
      InteractionManager.runAfterInteractions(() => {
        const categoryTopics = getCategoryTopics(String(categoryId)) as Topic[] | undefined;

        if (!categoryData) {
          console.warn('[Category] ❌ Not found:', categoryId);
          setCategory(null);
          setTopics([]);
          return;
        }

        setCategory(categoryData);
        setTopics(categoryTopics || []);

        // Defer particle effects to after content is loaded
        setTimeout(() => {
          setShowParticles(true);
        }, 300);

        console.log('[Category] ✓ Loaded:', categoryData.name, `(${categoryTopics?.length || 0} topics)`);
      });

      // Show category immediately (before topics load)
      if (categoryData) {
        setCategory(categoryData);
      }

      fadeOpacity.value = withTiming(1, { duration: FADE_IN_DURATION, easing: Easing.inOut(Easing.ease) });
      scale.value = withTiming(1, { duration: FADE_IN_DURATION, easing: Easing.out(Easing.ease) });
    } catch (error) {
      console.error('[Category] ❌ Error loading:', error);
      setCategory(null);
      setTopics([]);
    }
  }, [categoryId, fadeOpacity, scale]);

  useEffect(() => {
    setShowParticles(false);
    loadCategoryData();
  }, [loadCategoryData]);

  const handleTopicPress = useCallback(
    (topic: Topic) => {
      try {
        console.log('[Category] 🔥 Topic pressed:', topic.id);
        HapticFeedback.light();

        const pathname = '/(tabs)/explore/[category]/[topic]' as const;
        const params = {
          category: String(categoryId),
          topic: String(topic.id),
        };

        console.log('[Category] 🔥 Navigating to:', pathname, 'with params:', params);

        router.push({ pathname, params });
      } catch (error) {
        console.error('[Category] ❌ Navigation error:', error);
      }
    },
    [categoryId, router]
  );

  const handleBackPress = useCallback(() => {
    HapticFeedback.light();
    router.back();
  }, [router]);

  const onRefresh = useCallback(async () => {
    try {
      HapticFeedback.medium();
      setRefreshing(true);

      await new Promise((resolve) => setTimeout(resolve, REFRESH_DELAY));

      loadCategoryData();

      HapticFeedback.success();
    } catch (error) {
      console.error('[Category] Refresh error:', error);
      HapticFeedback.error();
    } finally {
      setRefreshing(false);
    }
  }, [loadCategoryData]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: fadeOpacity.value,
    transform: [{ scale: scale.value }],
  }));

  const gradientColors = useMemo(() => {
    if (!category?.color) return theme.colors.backgroundGradient;
    return [category.color + '20', ...theme.colors.backgroundGradient.slice(1)];
  }, [category?.color, theme.colors.backgroundGradient]);

  const renderTopicItem = useCallback(({ item }: { item: Topic }) => (
    <TopicCard
      topic={item}
      categoryColor={category?.color || theme.colors.violet}
      onPress={() => handleTopicPress(item)}
    />
  ), [category?.color, theme.colors.violet, handleTopicPress]);

  const renderListHeader = useCallback(() => (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton} accessibilityLabel="Go back" accessibilityRole="button">
          <Text style={[styles.backButtonText, { color: theme.colors.textPrimary, fontSize: 16 * textScale }]}>
            ← Back
          </Text>
        </TouchableOpacity>

        <View style={styles.headerContent}>
          <Text style={styles.categoryIcon}>{category?.icon}</Text>
          <Text style={[styles.categoryTitle, { color: theme.colors.textPrimary, fontSize: 32 * textScale }]}>
            {category?.name}
          </Text>
          <Text style={[styles.categoryDescription, { color: theme.colors.textSecondary, fontSize: 14 * textScale }]}>
            {category?.description}
          </Text>

          <View style={[styles.topicCountBadge, { backgroundColor: category?.color + '30', borderColor: category?.color + '60' }]}>
            <Text style={[styles.topicCountText, { color: theme.colors.textPrimary, fontSize: 12 * textScale }]}>
              {topics.length} {topics.length === 1 ? 'Topic' : 'Topics'}
            </Text>
          </View>
        </View>
      </View>
    </>
  ), [category, topics.length, theme, textScale, handleBackPress]);

  const renderListEmpty = useCallback(() => (
    <View style={styles.emptyState}>
      <Text style={[styles.emptyStateText, { color: theme.colors.textSecondary }]}>No topics available yet</Text>
    </View>
  ), [theme]);

  // ──────────────────────────────────────────────────────────────
  // Error
  // ──────────────────────────────────────────────────────────────
  if (!category) {
    return (
      <View style={styles.container}>
        <LinearGradient colors={theme.colors.backgroundGradient} style={styles.gradient} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
          <SafeAreaView style={styles.safeArea} edges={['top']}>
            <Animated.View entering={FadeIn.duration(300)} style={styles.errorContainer}>
              <Text style={styles.errorEmoji}>❌</Text>
              <Text style={[styles.errorText, { color: theme.colors.textPrimary }]}>Category not found</Text>
              <TouchableOpacity onPress={handleBackPress} style={styles.errorButton} activeOpacity={0.8}>
                <Text style={styles.errorButtonText}>Go Back</Text>
              </TouchableOpacity>
            </Animated.View>
          </SafeAreaView>
        </LinearGradient>
      </View>
    );
  }

  // ──────────────────────────────────────────────────────────────
  // Main
  // ──────────────────────────────────────────────────────────────
  return (
    <View style={styles.container}>
      <LinearGradient colors={gradientColors} style={styles.gradient} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
        <SafeAreaView style={styles.safeArea} edges={['top']}>
          <Animated.View style={[styles.animatedContainer, animatedStyle]}>
            {showParticles && (
              <View pointerEvents="none" style={StyleSheet.absoluteFill}>
                <ParticleEffect count={8} color={category.color + '30'} />
              </View>
            )}

            <FlatList
              data={topics}
              renderItem={renderTopicItem}
              keyExtractor={(item) => `topic-${item.id}`}
              ListHeaderComponent={renderListHeader}
              ListEmptyComponent={renderListEmpty}
              contentContainerStyle={[
                styles.contentContainer,
                { paddingBottom: Math.max(120, 80 + insets.bottom) },
              ]}
              showsVerticalScrollIndicator={false}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                  tintColor={category.color}
                  colors={[category.color, theme.colors.violet, theme.colors.indigo]}
                  progressBackgroundColor={theme.colors.cardBg}
                />
              }
            />
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
  container: { flex: 1 },
  gradient: { flex: 1 },
  safeArea: { flex: 1 },
  animatedContainer: { flex: 1 },

  header: { paddingHorizontal: 20, paddingTop: 10, paddingBottom: 20 },
  backButton: { paddingVertical: 8, paddingHorizontal: 4, marginBottom: 16 },
  backButtonText: { fontSize: 16, fontWeight: '600', fontFamily: 'SpaceMono' },

  headerContent: { alignItems: 'center' },
  categoryIcon: {
    fontSize: 64,
    marginBottom: 12,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  categoryTitle: {
    fontSize: 32,
    fontWeight: '900',
    fontFamily: 'SpaceMono',
    textAlign: 'center',
    marginBottom: 8,
    textShadowColor: 'rgba(139, 92, 246, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  categoryDescription: {
    fontSize: 14,
    fontFamily: 'SpaceMono',
    textAlign: 'center',
    marginBottom: 12,
    paddingHorizontal: 20,
    lineHeight: 20,
  },

  topicCountBadge: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 16, borderWidth: 1 },
  topicCountText: { fontSize: 12, fontWeight: '700', fontFamily: 'SpaceMono' },

  contentContainer: { paddingHorizontal: 16 },

  topicCardWrapper: { marginBottom: 12 },
  topicCard: {
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 24,
    elevation: 8,
    overflow: 'hidden',
  },
  topicCardContent: { zIndex: 2 },
  topicTextContainer: { marginBottom: 0 },
  topicName: {
    fontSize: 18,
    fontWeight: '800',
    fontFamily: 'SpaceMono',
    marginBottom: 6,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  topicDescription: { fontSize: 13, fontFamily: 'SpaceMono', lineHeight: 18 },

  topicCardBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 18,
    borderWidth: 2,
    opacity: 0.3,
  },

  emptyState: { paddingVertical: 60, alignItems: 'center' },
  emptyStateText: { fontSize: 16, fontFamily: 'SpaceMono', textAlign: 'center' },

  errorContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 32 },
  errorEmoji: { fontSize: 64, marginBottom: 20 },
  errorText: { fontSize: 18, fontFamily: 'SpaceMono', textAlign: 'center', marginBottom: 24, lineHeight: 26 },
  errorButton: {
    backgroundColor: 'rgba(139, 92, 246, 0.8)',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(139, 92, 246, 1)',
    shadowColor: '#8B5CF6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  errorButtonText: { fontSize: 16, fontWeight: '700', color: '#FFFFFF', fontFamily: 'SpaceMono' },
});
