
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
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
import { getCategoryById } from '@/data/paranormal/categories';
import { getCategoryTopics } from '@/data/paranormal';
import { getRandomFact } from '@/data/paranormal/facts';
import { ParticleEffect } from '@/components/ParticleEffect';
import { RandomFactModal } from '@/components/RandomFactModal';
import { LightningButton } from '@/components/LightningButton';
import { FloatingRankOrb } from '@/components/FloatingRankOrb';
import { GothicConfetti } from '@/components/GothicConfetti';
import { RankUpModal } from '@/components/RankUpModal';
import { HapticFeedback } from '@/utils/haptics';
import { storage } from '@/utils/storage';
import { recentTopicsService } from '@/utils/recentTopics';
import { gamificationService, VeilRank, Achievement } from '@/utils/gamification';

const { width } = Dimensions.get('window');

interface SectionCardProps {
  section: any;
  categoryColor: string;
  index: number;
}

const SectionCard: React.FC<SectionCardProps> = ({ section, categoryColor, index }) => {
  const { theme, textScale } = useAppTheme();
  const [expanded, setExpanded] = useState(true);
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePress = () => {
    HapticFeedback.soft();
    setExpanded(!expanded);
  };

  const handlePressIn = () => {
    scale.value = withSpring(0.98, {
      damping: 15,
      stiffness: 300,
    });
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, {
      damping: 15,
      stiffness: 300,
    });
  };

  return (
    <Animated.View
      entering={FadeIn.delay(index * 100).duration(400)}
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
            
            {expanded && (
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
};

export default function TopicDetailScreen() {
  const { category: categoryId, topic: topicId } = useLocalSearchParams<{ category: string; topic: string }>();
  const router = useRouter();
  const { theme, textScale } = useAppTheme();
  const [category, setCategory] = useState<any>(null);
  const [topic, setTopic] = useState<any>(null);
  const [showOracleModal, setShowOracleModal] = useState(false);
  const [oracleFact, setOracleFact] = useState<any>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showRankUpModal, setShowRankUpModal] = useState(false);
  const [newRank, setNewRank] = useState<VeilRank | null>(null);
  const [hasTrackedReading, setHasTrackedReading] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  const fadeOpacity = useSharedValue(0);
  const scale = useSharedValue(0.95);

  const loadTopicData = useCallback(async () => {
    if (!categoryId || !topicId) return;

    try {
      const categoryData = getCategoryById(categoryId as string);
      const categoryTopics = getCategoryTopics(categoryId as string);
      const topicData = categoryTopics.find((t: any) => t.id === topicId);

      setCategory(categoryData);
      setTopic(topicData);

      const favoriteStatus = await storage.isFavorite(`${categoryId}-${topicId}`);
      setIsFavorite(favoriteStatus);

      if (categoryData && topicData) {
        await recentTopicsService.addRecentTopic({
          categoryId: categoryId as string,
          topicId: topicId as string,
          title: topicData.name,
          categoryName: categoryData.name,
          categoryIcon: categoryData.icon,
          categoryColor: categoryData.color,
          progress: 0,
        });
      }

      fadeOpacity.value = withTiming(1, {
        duration: 600,
        easing: Easing.inOut(Easing.ease),
      });

      scale.value = withTiming(1, {
        duration: 600,
        easing: Easing.out(Easing.ease),
      });
    } catch (error) {
      console.error('Error loading topic data:', error);
    }
  }, [categoryId, topicId, fadeOpacity, scale]);

  useEffect(() => {
    loadTopicData();
  }, [loadTopicData]);

  const handleScroll = async (event: any) => {
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
    const scrollPercentage = (contentOffset.y / (contentSize.height - layoutMeasurement.height)) * 100;

    if (scrollPercentage > 70 && !hasTrackedReading && categoryId && topicId) {
      setHasTrackedReading(true);
      const articleId = `${categoryId}-${topicId}`;
      const result = await gamificationService.markArticleRead(articleId, 'topic', categoryId as string);

      if (result.newRank) {
        setNewRank(result.newRank);
        setShowRankUpModal(true);
      }

      if (result.achievements.length > 0 || result.newRank) {
        setShowConfetti(true);
        HapticFeedback.success();
      }
    }
  };

  const handleBackPress = () => {
    HapticFeedback.light();
    router.back();
  };

  const handleOraclePress = () => {
    HapticFeedback.medium();
    const randomFact = getRandomFact();
    setOracleFact(randomFact);
    setShowOracleModal(true);
  };

  const handleToggleFavorite = async () => {
    HapticFeedback.medium();
    const favoriteId = `${categoryId}-${topicId}`;
    if (isFavorite) {
      await storage.removeFavorite(favoriteId);
      setIsFavorite(false);
    } else {
      await storage.addFavorite(favoriteId);
      setIsFavorite(true);
    }
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeOpacity.value,
      transform: [{ scale: scale.value }],
    };
  });

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
            <Text style={[styles.errorText, { color: theme.colors.textPrimary }]}>Topic not found</Text>
          </SafeAreaView>
        </LinearGradient>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[category.color + '25', ...theme.colors.backgroundGradient.slice(1)]}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <SafeAreaView style={styles.safeArea} edges={['top']}>
          <Animated.View style={[styles.animatedContainer, animatedStyle]}>
            <ParticleEffect count={12} color={category.color + '25'} />
            
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
              
              {topic.sections?.map((section: any, index: number) => (
                <React.Fragment key={index}>
                  <SectionCard
                    section={section}
                    categoryColor={category.color}
                    index={index}
                  />
                </React.Fragment>
              ))}

              <View style={styles.bottomSpacer} />
            </ScrollView>

            <FloatingRankOrb />
            <LightningButton onPress={handleOraclePress} />

            <RandomFactModal
              visible={showOracleModal}
              fact={oracleFact}
              onClose={() => setShowOracleModal(false)}
            />

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
    textShadowColor: 'rgba(139, 92, 246, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
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
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  sectionCardWrapper: {
    marginBottom: 12,
  },
  sectionCard: {
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.3)',
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
  errorText: {
    fontSize: 18,
    fontFamily: 'SpaceMono',
    textAlign: 'center',
    marginTop: 40,
  },
});
