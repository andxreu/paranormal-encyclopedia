
import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
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
  runOnJS,
} from 'react-native-reanimated';
import { useAppTheme } from '@/contexts/ThemeContext';
import { getCategoryById, Category } from '@/data/paranormal/categories';
import { getCategoryTopics } from '@/data/paranormal';
import { ParticleEffect } from '@/components/ParticleEffect';
import { GothicConfetti } from '@/components/GothicConfetti';
import { RankUpModal } from '@/components/RankUpModal';
import { HapticFeedback } from '@/utils/haptics';
import { storage, FavoriteItem } from '@/utils/storage';
import { recentTopicsService } from '@/utils/recentTopics';
import { gamificationService, VeilRank } from '@/utils/gamification';

// ──────────────────────────────────────────────────────────────
// Constants
// ──────────────────────────────────────────────────────────────
const { width } = Dimensions.get('window');
const SCROLL_THRESHOLD_PERCENTAGE = 70; // Percentage scrolled before marking as read
const FADE_IN_DURATION = 600;
const SECTION_STAGGER_DELAY = 100;

// ──────────────────────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────────────────────
interface TopicSection {
  title: string;
  content: string;
}

interface Topic {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  icon?: string;
  sections: TopicSection[];
}

interface SectionCardProps {
  section: TopicSection;
  categoryColor: string;
  index: number;
}

// ──────────────────────────────────────────────────────────────
// Section Card Component
// ──────────────────────────────────────────────────────────────
const SectionCard: React.FC<SectionCardProps> = React.memo(({ section, categoryColor, index }) => {
  const { theme, textScale } = useAppTheme();
  const [expanded, setExpanded] = useState(true);
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePress = useCallback(() => {
    HapticFeedback.soft();
    setExpanded(prev => !prev);
  }, []);

  const handlePressIn = useCallback(() => {
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

  if (!section?.title) {
    return null;
  }

  return (
    <Animated.View
      entering={FadeIn.delay(index * SECTION_STAGGER_DELAY).duration(400)}
      style={styles.sectionCardWrapper}
    >
      <TouchableOpacity
        onPress={handlePress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={1}
        accessibilityLabel={section.title}
        accessibilityHint={expanded ? 'Collapse section' : 'Expand section'}
        accessibilityRole="button"
        accessibilityState={{ expanded }}
      >
        <Animated.View style={animatedStyle}>
          <LinearGradient
            colors={[categoryColor + '30', categoryColor + '15', theme.colors.cardBg]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.sectionCard, { borderColor: categoryColor + '60' }]}
          >
            <View style={styles.sectionHeader}>
              <Text style={[styles.sectionTitle, { color: theme.colors.textPrimary, fontSize: 16 * textScale }]}>
                {section.title}
              </Text>
              <Text style={[styles.expandIcon, { color: categoryColor }]}>
                {expanded ? '▼' : '▶'}
              </Text>
            </View>
            
            {expanded && section.content && (
              <Animated.View entering={FadeIn.duration(300)}>
                <Text style={[styles.sectionContent, { color: theme.colors.textSecondary, fontSize: 14 * textScale }]}>
                  {section.content}
                </Text>
              </Animated.View>
            )}
            
            <View style={[styles.sectionCardBorder, { borderColor: categoryColor + '40' }]} />
          </LinearGradient>
        </Animated.View>
      </TouchableOpacity>
    </Animated.View>
  );
});

SectionCard.displayName = 'SectionCard';

// ──────────────────────────────────────────────────────────────
// Main Component
// ──────────────────────────────────────────────────────────────
export default function TopicDetailScreen() {
  const { category: categoryId, topic: topicId } = useLocalSearchParams<{ category: string; topic: string }>();
  const router = useRouter();
  const { theme, textScale } = useAppTheme();
  
  // State
  const [category, setCategory] = useState<Category | null>(null);
  const [topic, setTopic] = useState<Topic | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showRankUpModal, setShowRankUpModal] = useState(false);
  const [newRank, setNewRank] = useState<VeilRank | null>(null);
  const [hasTrackedReading, setHasTrackedReading] = useState(false);
  
  // Refs
  const scrollViewRef = useRef<ScrollView>(null);

  // Animation values
  const fadeOpacity = useSharedValue(0);
  const scale = useSharedValue(0.95);

  /**
   * Loads topic and category data
   */
  const loadTopicData = useCallback(async () => {
    if (!categoryId || !topicId) {
      console.warn('⚠️ Missing categoryId or topicId');
      return;
    }

    try {
      const categoryData = getCategoryById(categoryId as string);
      const categoryTopics = getCategoryTopics(categoryId as string);
      const topicData = categoryTopics?.find((t: any) => t?.id === topicId) as Topic | undefined;

      if (!categoryData || !topicData) {
        console.warn('⚠️ Category or topic not found:', { categoryId, topicId });
        setCategory(null);
        setTopic(null);
        return;
      }

      setCategory(categoryData);
      setTopic(topicData);

      // Check favorite status
      const favoriteId = `${categoryId}-${topicId}`;
      const favoriteStatus = await storage.isFavorite(favoriteId);
      setIsFavorite(favoriteStatus);

      // Add to recent topics
      await recentTopicsService.addRecentTopic({
        categoryId: categoryId as string,
        topicId: topicId as string,
        title: topicData.name || 'Untitled',
        categoryName: categoryData.name || 'Unknown',
        categoryIcon: categoryData.icon || '❓',
        categoryColor: categoryData.color || theme.colors.violet,
        progress: 0,
      });

      // Animate in
      fadeOpacity.value = withTiming(1, {
        duration: FADE_IN_DURATION,
        easing: Easing.inOut(Easing.ease),
      });

      scale.value = withTiming(1, {
        duration: FADE_IN_DURATION,
        easing: Easing.out(Easing.ease),
      });

      console.log('✅ Topic loaded:', topicData.name);
    } catch (error) {
      console.error('❌ Error loading topic data:', error);
      setCategory(null);
      setTopic(null);
    }
  }, [categoryId, topicId, fadeOpacity, scale, theme.colors.violet]);

  useEffect(() => {
    loadTopicData();
  }, [loadTopicData]);

  /**
   * Tracks reading progress and awards points
   */
  const trackReadingProgress = useCallback(async () => {
    if (!categoryId || !topicId || hasTrackedReading) return;

    try {
      setHasTrackedReading(true);
      const articleId = `${categoryId}-${topicId}`;
      const result = await gamificationService.markArticleRead(articleId, 'topic', categoryId as string);

      if (result?.newRank) {
        setNewRank(result.newRank);
        setShowRankUpModal(true);
      }

      if (result && (result.achievements?.length > 0 || result.newRank)) {
        setShowConfetti(true);
        HapticFeedback.success();
      }

      console.log('✅ Reading progress tracked');
    } catch (error) {
      console.error('❌ Error tracking reading:', error);
    }
  }, [categoryId, topicId, hasTrackedReading]);

  /**
   * Handles scroll events to track reading progress
   */
  const handleScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
    try {
      const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
      
      if (!contentOffset || !contentSize || !layoutMeasurement) return;
      
      const scrollHeight = contentSize.height - layoutMeasurement.height;
      if (scrollHeight <= 0) return;
      
      const scrollPercentage = (contentOffset.y / scrollHeight) * 100;

      if (scrollPercentage > SCROLL_THRESHOLD_PERCENTAGE && !hasTrackedReading) {
        runOnJS(trackReadingProgress)();
      }
    } catch (error) {
      console.error('❌ Error handling scroll:', error);
    }
  }, [hasTrackedReading, trackReadingProgress]);

  /**
   * Navigates back to previous screen
   */
  const handleBackPress = useCallback(() => {
    HapticFeedback.light();
    router.back();
  }, [router]);

  /**
   * Toggles favorite status
   */
  const handleToggleFavorite = useCallback(async () => {
    try {
      HapticFeedback.medium();
      
      if (!category || !topic || !categoryId || !topicId) {
        console.warn('⚠️ Missing category or topic data');
        return;
      }

      const favoriteId = `${categoryId}-${topicId}`;
      
      if (isFavorite) {
        await storage.removeFavorite(favoriteId);
        setIsFavorite(false);
        console.log('🗑️ Removed from favorites');
      } else {
        const favoriteItem: FavoriteItem = {
          id: favoriteId,
          type: 'topic',
          title: topic.name || 'Untitled',
          description: topic.description || 'No description',
          categoryId: categoryId as string,
          categoryName: category.name || 'Unknown',
          categoryColor: category.color || theme.colors.violet,
          categoryIcon: category.icon || '❓',
          timestamp: Date.now(),
        };
        await storage.addFavorite(favoriteItem);
        setIsFavorite(true);
        console.log('⭐ Added to favorites');
      }
    } catch (error) {
      console.error('❌ Error toggling favorite:', error);
    }
  }, [category, topic, categoryId, topicId, isFavorite, theme.colors.violet]);

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
    return [category.color + '25', ...theme.colors.backgroundGradient.slice(1)];
  }, [category?.color, theme.colors.backgroundGradient]);

  // ──────────────────────────────────────────────────────────────
  // Error State
  // ──────────────────────────────────────────────────────────────
  if (!category || !topic) {
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
                Topic not found
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
            {/* Particle Effect */}
            <ParticleEffect count={12} color={category.color + '25'} />
            
            {/* Header */}
            <View style={styles.header}>
              <View style={styles.headerTop}>
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

                <TouchableOpacity 
                  onPress={handleToggleFavorite} 
                  style={styles.iconButton}
                  accessibilityLabel={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                  accessibilityRole="button"
                  accessibilityState={{ selected: isFavorite }}
                >
                  <Text style={styles.iconButtonText}>{isFavorite ? '⭐' : '☆'}</Text>
                </TouchableOpacity>
              </View>
              
              <View style={styles.headerContent}>
                <Text style={[styles.topicTitle, { color: theme.colors.textPrimary, fontSize: 28 * textScale }]}>
                  {topic.name}
                </Text>
                <Text style={[styles.topicDescription, { color: theme.colors.textSecondary, fontSize: 14 * textScale }]}>
                  {topic.description}
                </Text>
                <View style={[styles.categoryBadge, { backgroundColor: category.color + '30', borderColor: category.color + '60' }]}>
                  <Text style={[styles.categoryBadgeText, { color: theme.colors.textPrimary, fontSize: 11 * textScale }]}>
                    {category.name}
                  </Text>
                </View>
              </View>
            </View>

            {/* Sections */}
            <ScrollView
              ref={scrollViewRef}
              style={styles.scrollView}
              contentContainerStyle={styles.contentContainer}
              showsVerticalScrollIndicator={false}
              onScroll={handleScroll}
              scrollEventThrottle={16}
            >
              <Text style={[styles.sectionsHeader, { color: theme.colors.textPrimary, fontSize: 18 * textScale }]}>
                Explore Sections
              </Text>
              
              {topic.sections?.map((section, index) => (
                <SectionCard
                  key={`section-${section.title}-${index}`}
                  section={section}
                  categoryColor={category.color}
                  index={index}
                />
              ))}

              <View style={styles.bottomSpacer} />
            </ScrollView>

            {/* Confetti & Modals */}
            <GothicConfetti
              visible={showConfetti}
              onComplete={() => setShowConfetti(false)}
            />

            <RankUpModal
              visible={showRankUpModal}
              rank={newRank}
              onClose={() => setShowRankUpModal(false)}
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
    zIndex: 2,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  backButton: {
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'SpaceMono',
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(139, 92, 246, 0.3)',
    borderWidth: 1,
    borderColor: 'rgba(139, 92, 246, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconButtonText: {
    fontSize: 18,
  },
  headerContent: {
    alignItems: 'center',
  },
  topicTitle: {
    fontSize: 28,
    fontWeight: '900',
    fontFamily: 'SpaceMono',
    textAlign: 'center',
    marginBottom: 8,
    paddingHorizontal: 20,
  },
  topicDescription: {
    fontSize: 14,
    fontFamily: 'SpaceMono',
    textAlign: 'center',
    marginBottom: 12,
    paddingHorizontal: 20,
    lineHeight: 20,
  },
  categoryBadge: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 14,
    borderWidth: 1,
  },
  categoryBadgeText: {
    fontSize: 11,
    fontWeight: '700',
    fontFamily: 'SpaceMono',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 120,
  },
  sectionsHeader: {
    fontSize: 18,
    fontWeight: '800',
    fontFamily: 'SpaceMono',
    marginBottom: 16,
  },
  sectionCardWrapper: {
    marginBottom: 12,
  },
  sectionCard: {
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 6,
    overflow: 'hidden',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'SpaceMono',
    flex: 1,
    marginRight: 12,
  },
  expandIcon: {
    fontSize: 14,
    fontWeight: '700',
  },
  sectionContent: {
    fontSize: 14,
    fontFamily: 'SpaceMono',
    lineHeight: 22,
    marginTop: 12,
  },
  sectionCardBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 16,
    borderWidth: 1.5,
    opacity: 0.3,
  },
  bottomSpacer: {
    height: 20,
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
