
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, RefreshControl } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
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
import { getCategoryById, Category } from '@/data/paranormal/categories';
import { getCategoryTopics } from '@/data/paranormal';
import { ParticleEffect } from '@/components/ParticleEffect';
import { HapticFeedback } from '@/utils/haptics';

// ──────────────────────────────────────────────────────────────
// Constants
// ──────────────────────────────────────────────────────────────
const { width } = Dimensions.get('window');
const CARD_STAGGER_DELAY = 80;
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
  categoryId: string;
  categoryColor: string;
  onPress: () => void;
  index: number;
}

// ──────────────────────────────────────────────────────────────
// Topic Card Component
// ──────────────────────────────────────────────────────────────
const TopicCard: React.FC<TopicCardProps> = React.memo(({ topic, categoryId, categoryColor, onPress, index }) => {
  const { theme, textScale } = useAppTheme();
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = useCallback(() => {
    HapticFeedback.soft();
    scale.value = withSpring(0.98, {
      damping: 15,
      stiffness: 300,
    });
  }, [scale]);

  const handlePressOut = useCallback(() => {
    scale.value = withSpring(1, {
      damping: 15,
      stiffness: 300,
    });
  }, [scale]);

  return (
    <Animated.View 
      entering={FadeIn.delay(index * CARD_STAGGER_DELAY).duration(400)} 
      style={styles.topicCardWrapper}
    >
      <TouchableOpacity
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={1}
        accessibilityLabel={topic.name}
        accessibilityHint={`View details about ${topic.name}`}
        accessibilityRole="button"
      >
        <Animated.View style={animatedStyle}>
          <LinearGradient
            colors={[categoryColor + '40', categoryColor + '20', theme.colors.cardBg]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.topicCard, { borderColor: categoryColor + '60' }]}
          >
            <ParticleEffect count={3} color={categoryColor + '40'} />
            
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
            
            <View style={[styles.topicCardBorder, { borderColor: categoryColor + '60' }]} />
          </LinearGradient>
        </Animated.View>
      </TouchableOpacity>
    </Animated.View>
  );
});

TopicCard.displayName = 'TopicCard';

// ──────────────────────────────────────────────────────────────
// Main Component
// ──────────────────────────────────────────────────────────────
export default function CategoryScreen() {
  const { category: categoryId } = useLocalSearchParams<{ category: string }>();
  const router = useRouter();
  const { theme, textScale } = useAppTheme();
  
  // State
  const [refreshing, setRefreshing] = useState(false);
  const [category, setCategory] = useState<Category | null>(null);
  const [topics, setTopics] = useState<Topic[]>([]);

  // Animation values
  const fadeOpacity = useSharedValue(0);
  const scale = useSharedValue(0.95);

  /**
   * Loads category and its topics
   */
  const loadCategoryData = useCallback(() => {
    if (!categoryId) {
      console.warn('⚠️ No category ID provided');
      return;
    }

    try {
      const categoryData = getCategoryById(categoryId as string);
      const categoryTopics = getCategoryTopics(categoryId as string);

      if (!categoryData) {
        console.warn('⚠️ Category not found:', categoryId);
        setCategory(null);
        setTopics([]);
        return;
      }

      setCategory(categoryData);
      setTopics(categoryTopics || []);

      // Animate in
      fadeOpacity.value = withTiming(1, {
        duration: FADE_IN_DURATION,
        easing: Easing.inOut(Easing.ease),
      });

      scale.value = withTiming(1, {
        duration: FADE_IN_DURATION,
        easing: Easing.out(Easing.ease),
      });

      console.log('✅ Category loaded:', categoryData.name, `(${categoryTopics?.length || 0} topics)`);
    } catch (error) {
      console.error('❌ Error loading category:', error);
      setCategory(null);
      setTopics([]);
    }
  }, [categoryId, fadeOpacity, scale]);

  useEffect(() => {
    loadCategoryData();
  }, [loadCategoryData]);

  /**
   * Handles topic selection
   */
  const handleTopicPress = useCallback((topic: Topic) => {
    try {
      HapticFeedback.light();
      console.log('NAV', `/explore/${categoryId}/${topic.id}`, { category: categoryId, topic: topic.id });
      router.push({
        pathname: `/explore/[category]/[topic]`,
        params: { category: categoryId as string, topic: topic.id }
      });
    } catch (error) {
      console.error('[CategoryScreen] Navigation error:', error);
    }
  }, [categoryId, router]);

  /**
   * Navigates back to previous screen
   */
  const handleBackPress = useCallback(() => {
    HapticFeedback.light();
    router.back();
  }, [router]);

  /**
   * Handles pull-to-refresh
   */
  const onRefresh = useCallback(async () => {
    try {
      HapticFeedback.medium();
      setRefreshing(true);
      
      // Simulate network delay for better UX
      await new Promise(resolve => setTimeout(resolve, REFRESH_DELAY));
      
      loadCategoryData();
      HapticFeedback.success();
      console.log('🔄 Category refreshed');
    } catch (error) {
      console.error('❌ Error refreshing:', error);
      HapticFeedback.error();
    } finally {
      setRefreshing(false);
    }
  }, [loadCategoryData]);

  /**
   * Animated style for container
   */
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: fadeOpacity.value,
    transform: [{ scale: scale.value }],
  }));

  /**
   * Memoized gradient colors
   */
  const gradientColors = useMemo(() => {
    if (!category?.color) return theme.colors.backgroundGradient;
    return [category.color + '20', ...theme.colors.backgroundGradient.slice(1)];
  }, [category?.color, theme.colors.backgroundGradient]);

  // ──────────────────────────────────────────────────────────────
  // Error State
  // ──────────────────────────────────────────────────────────────
  if (!category) {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={theme.colors.backgroundGradient}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <SafeAreaView style={styles.safeArea} edges={['top']}>
            <Animated.View 
              entering={FadeIn.duration(300)}
              style={styles.errorContainer}
            >
              <Text style={styles.errorEmoji}>❌</Text>
              <Text style={[styles.errorText, { color: theme.colors.textPrimary }]}>
                Category not found
              </Text>
              <TouchableOpacity 
                onPress={handleBackPress} 
                style={styles.errorButton}
                activeOpacity={0.8}
              >
                <Text style={styles.errorButtonText}>Go Back</Text>
              </TouchableOpacity>
            </Animated.View>
          </SafeAreaView>
        </LinearGradient>
      </View>
    );
  }

  // ──────────────────────────────────────────────────────────────
  // Main Content
  // ──────────────────────────────────────────────────────────────
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={gradientColors}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <SafeAreaView style={styles.safeArea} edges={['top']}>
          <Animated.View style={[styles.animatedContainer, animatedStyle]}>
            {/* Header */}
            <View style={styles.header}>
              <TouchableOpacity 
                onPress={handleBackPress} 
                style={styles.backButton}
                accessibilityLabel="Go back"
                accessibilityRole="button"
              >
                <Text style={[styles.backButtonText, { color: theme.colors.textPrimary, fontSize: 16 * textScale }]}>
                  ← Back
                </Text>
              </TouchableOpacity>
              
              <View style={styles.headerContent}>
                <Text style={styles.categoryIcon}>{category.icon}</Text>
                <Text style={[styles.categoryTitle, { color: theme.colors.textPrimary, fontSize: 32 * textScale }]}>
                  {category.name}
                </Text>
                <Text style={[styles.categoryDescription, { color: theme.colors.textSecondary, fontSize: 14 * textScale }]}>
                  {category.description}
                </Text>
                <View style={[styles.topicCountBadge, { backgroundColor: category.color + '30', borderColor: category.color + '60' }]}>
                  <Text style={[styles.topicCountText, { color: theme.colors.textPrimary, fontSize: 12 * textScale }]}>
                    {topics.length} {topics.length === 1 ? 'Topic' : 'Topics'}
                  </Text>
                </View>
              </View>
            </View>

            {/* Topics List */}
            <ScrollView
              style={styles.scrollView}
              contentContainerStyle={styles.contentContainer}
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
            >
              <ParticleEffect count={8} color={category.color + '30'} />
              
              {topics.length === 0 ? (
                <View style={styles.emptyState}>
                  <Text style={[styles.emptyStateText, { color: theme.colors.textSecondary }]}>
                    No topics available yet
                  </Text>
                </View>
              ) : (
                topics.map((topic, index) => (
                  <TopicCard
                    key={topic.id}
                    topic={topic}
                    categoryId={categoryId as string}
                    categoryColor={category.color}
                    onPress={() => handleTopicPress(topic)}
                    index={index}
                  />
                ))
              )}

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
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  backButton: {
    paddingVertical: 8,
    paddingHorizontal: 4,
    marginBottom: 16,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'SpaceMono',
  },
  headerContent: {
    alignItems: 'center',
  },
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
  topicCountBadge: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    borderWidth: 1,
  },
  topicCountText: {
    fontSize: 12,
    fontWeight: '700',
    fontFamily: 'SpaceMono',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  topicCardWrapper: {
    marginBottom: 12,
  },
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
  topicCardContent: {
    zIndex: 2,
  },
  topicTextContainer: {
    marginBottom: 0,
  },
  topicName: {
    fontSize: 18,
    fontWeight: '800',
    fontFamily: 'SpaceMono',
    marginBottom: 6,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  topicDescription: {
    fontSize: 13,
    fontFamily: 'SpaceMono',
    lineHeight: 18,
  },
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
  bottomSpacer: {
    height: 20,
  },
  emptyState: {
    paddingVertical: 60,
    alignItems: 'center',
  },
  emptyStateText: {
    fontSize: 16,
    fontFamily: 'SpaceMono',
    textAlign: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  errorEmoji: {
    fontSize: 64,
    marginBottom: 20,
  },
  errorText: {
    fontSize: 18,
    fontFamily: 'SpaceMono',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 26,
  },
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
  errorButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    fontFamily: 'SpaceMono',
  },
});
