
// app/(tabs)/arcana.tsx
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from 'expo-router';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';
import { useAppTheme } from '@/contexts/ThemeContext';
import { gamificationService, VeilRank, Achievement, VEIL_RANKS } from '@/utils/gamification';
import { LightningButton } from '@/components/LightningButton';
import { RandomFactModal } from '@/components/RandomFactModal';
import { getRandomFact, ParanormalFact } from '@/data/paranormal/facts';
import { HapticFeedback } from '@/utils/haptics';
import { ParticleEffect } from '@/components/ParticleEffect';

// ──────────────────────────────────────────────────────────────
// Constants
// ──────────────────────────────────────────────────────────────
const { width } = Dimensions.get('window');
const ACHIEVEMENT_CARD_WIDTH = (width - 52) / 2;
const FADE_IN_DURATION = 600;
const ANIMATION_DELAYS = {
  header: 0,
  rankCard: 200,
  ascension: 400,
  achievements: 600,
} as const;

const ACHIEVEMENT_CATEGORIES = ['all', 'reading', 'exploration', 'dedication', 'mastery'] as const;

// ──────────────────────────────────────────────────────────────
// Main Arcana Screen Component
// ──────────────────────────────────────────────────────────────
export default function ArcanaScreen() {
  const { theme, textScale } = useAppTheme();
  
  // State
  const [currentRank, setCurrentRank] = useState<VeilRank>(VEIL_RANKS[0]);
  const [nextRank, setNextRank] = useState<VeilRank | null>(null);
  const [totalPoints, setTotalPoints] = useState(0);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [dailyStreak, setDailyStreak] = useState(0);
  const [showOracleModal, setShowOracleModal] = useState(false);
  const [oracleFact, setOracleFact] = useState<ParanormalFact | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  /**
   * Loads user progress and gamification data
   */
  const loadProgress = useCallback(async () => {
    try {
      console.log('[Arcana] Loading progress...');
      
      const progress = await gamificationService.getProgress();
      const rank = gamificationService.getCurrentRank(progress.totalPoints);
      const next = gamificationService.getNextRank(rank);
      
      setCurrentRank(rank);
      setNextRank(next);
      setTotalPoints(progress.totalPoints);
      setAchievements(progress.achievements);
      setDailyStreak(progress.dailyStreak);
      
      console.log('[Arcana] ✓ Progress loaded:', {
        rank: rank.name,
        points: progress.totalPoints,
        achievements: progress.achievements.filter(a => a.unlocked).length,
      });
    } catch (error) {
      console.error('[Arcana] ✗ Error loading progress:', error);
      // Fail gracefully with defaults
    }
  }, []);

  /**
   * Initialize on mount
   */
  useEffect(() => {
    loadProgress();
  }, [loadProgress]);

  /**
   * Reload progress when screen comes into focus
   */
  useFocusEffect(
    useCallback(() => {
      console.log('[Arcana] Screen focused, reloading progress...');
      loadProgress();
    }, [loadProgress])
  );

  /**
   * Handles oracle button press - shows random fact
   */
  const handleOraclePress = useCallback(() => {
    try {
      HapticFeedback.medium();
      console.log('[Arcana] ⚡ Oracle consulted');
      const randomFact = getRandomFact();
      setOracleFact(randomFact);
      setShowOracleModal(true);
    } catch (error) {
      console.error('[Arcana] ✗ Error showing oracle:', error);
      // Fail gracefully
    }
  }, []);

  /**
   * Calculates progress percentage to next rank
   */
  const getProgressPercentage = useCallback(() => {
    if (!nextRank) return 100;
    const currentMin = currentRank.minPoints;
    const nextMin = nextRank.minPoints;
    const progress = ((totalPoints - currentMin) / (nextMin - currentMin)) * 100;
    return Math.min(Math.max(progress, 0), 100);
  }, [currentRank, nextRank, totalPoints]);

  /**
   * Handles category filter selection
   */
  const handleCategorySelect = useCallback((category: string) => {
    HapticFeedback.light();
    setSelectedCategory(category);
    console.log('[Arcana] Category filter:', category);
  }, []);

  /**
   * Memoized filtered achievements
   */
  const filteredAchievements = useMemo(() => {
    return selectedCategory === 'all' 
      ? achievements 
      : achievements.filter(a => a.category === selectedCategory);
  }, [selectedCategory, achievements]);

  /**
   * Memoized achievement counts
   */
  const achievementCounts = useMemo(() => ({
    unlocked: achievements.filter(a => a.unlocked).length,
    total: achievements.length,
  }), [achievements]);

  /**
   * Memoized progress percentage
   */
  const progressPercentage = useMemo(() => getProgressPercentage(), [getProgressPercentage]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={theme.colors.backgroundGradient}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <SafeAreaView style={styles.safeArea} edges={['top']}>
          <ParticleEffect count={15} color={currentRank.color + '30'} />
          
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
          >
            {/* Header */}
            <Animated.View entering={FadeIn.duration(FADE_IN_DURATION)}>
              <Text style={[styles.header, { color: theme.colors.textPrimary, fontSize: 32 * textScale }]}>
                Order of the Veil
              </Text>
              <Text style={[styles.subtitle, { color: theme.colors.textSecondary, fontSize: 14 * textScale }]}>
                Your journey through the mysteries
              </Text>
            </Animated.View>

            {/* Rank Progress Card */}
            <Animated.View 
              entering={FadeInDown.delay(ANIMATION_DELAYS.rankCard).duration(FADE_IN_DURATION)} 
              style={styles.rankSection}
            >
              <LinearGradient
                colors={[currentRank.color + '40', currentRank.color + '20', theme.colors.cardBg]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.rankCard}
              >
                {/* Progress Circle */}
                <View style={styles.progressCircleContainer}>
                  <View style={[styles.progressCircleOuter, { borderColor: currentRank.color + '40' }]}>
                    <View style={[styles.progressCircleInner, { borderColor: currentRank.color }]}>
                      <Text style={styles.rankIcon}>{currentRank.icon}</Text>
                    </View>
                  </View>
                  <View style={[styles.progressBar, { width: `${progressPercentage}%`, backgroundColor: currentRank.color }]} />
                </View>

                <Text style={[styles.rankTitle, { color: currentRank.color, fontSize: 28 * textScale }]}>
                  {currentRank.name}
                </Text>
                
                <Text style={[styles.pointsText, { color: theme.colors.textPrimary, fontSize: 18 * textScale }]}>
                  {totalPoints} Points
                </Text>

                {nextRank && (
                  <Text style={[styles.nextRankText, { color: theme.colors.textSecondary, fontSize: 12 * textScale }]}>
                    {nextRank.minPoints - totalPoints} points to {nextRank.name}
                  </Text>
                )}

                {/* Stats Row */}
                <View style={styles.statsRow}>
                  <View style={styles.statItem}>
                    <Text style={[styles.statValue, { color: theme.colors.accent, fontSize: 24 * textScale }]}>
                      {dailyStreak}
                    </Text>
                    <Text style={[styles.statLabel, { color: theme.colors.textSecondary, fontSize: 11 * textScale }]}>
                      Day Streak
                    </Text>
                  </View>
                  <View style={styles.statItem}>
                    <Text style={[styles.statValue, { color: theme.colors.accent, fontSize: 24 * textScale }]}>
                      {achievementCounts.unlocked}/{achievementCounts.total}
                    </Text>
                    <Text style={[styles.statLabel, { color: theme.colors.textSecondary, fontSize: 11 * textScale }]}>
                      Achievements
                    </Text>
                  </View>
                </View>
              </LinearGradient>
            </Animated.View>

            {/* Ascension Path */}
            <Animated.View 
              entering={FadeInDown.delay(ANIMATION_DELAYS.ascension).duration(FADE_IN_DURATION)} 
              style={styles.section}
            >
              <Text style={[styles.sectionTitle, { color: theme.colors.textPrimary, fontSize: 20 * textScale }]}>
                Ascension Path
              </Text>
              <View style={styles.rankLadder}>
                {VEIL_RANKS.map((rank) => {
                  const isUnlocked = totalPoints >= rank.minPoints;
                  const isCurrent = rank.id === currentRank.id;
                  
                  return (
                    <View 
                      key={rank.id}
                      style={[
                        styles.rankItem,
                        { 
                          backgroundColor: isUnlocked ? rank.color + '20' : theme.colors.cardBg,
                          borderColor: isCurrent ? rank.color : (isUnlocked ? rank.color + '40' : theme.colors.border),
                          borderWidth: isCurrent ? 3 : 1,
                        }
                      ]}
                    >
                      <Text style={[styles.rankItemIcon, { opacity: isUnlocked ? 1 : 0.3 }]}>
                        {rank.icon}
                      </Text>
                      <View style={styles.rankItemInfo}>
                        <Text style={[
                          styles.rankItemName,
                          { 
                            color: isUnlocked ? rank.color : theme.colors.textSecondary,
                            fontSize: 16 * textScale,
                          }
                        ]}>
                          {rank.name}
                        </Text>
                        <Text style={[styles.rankItemPoints, { color: theme.colors.textSecondary, fontSize: 12 * textScale }]}>
                          {rank.minPoints} points
                        </Text>
                      </View>
                      {isCurrent && (
                        <View style={[styles.currentBadge, { backgroundColor: rank.color }]}>
                          <Text style={styles.currentBadgeText}>Current</Text>
                        </View>
                      )}
                    </View>
                  );
                })}
              </View>
            </Animated.View>

            {/* Achievements */}
            <Animated.View 
              entering={FadeInDown.delay(ANIMATION_DELAYS.achievements).duration(FADE_IN_DURATION)} 
              style={styles.section}
            >
              <Text style={[styles.sectionTitle, { color: theme.colors.textPrimary, fontSize: 20 * textScale }]}>
                Achievements
              </Text>

              {/* Category Filter */}
              <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
                style={styles.categoryFilter}
                contentContainerStyle={styles.categoryFilterContent}
              >
                {ACHIEVEMENT_CATEGORIES.map((cat) => (
                  <TouchableOpacity
                    key={cat}
                    onPress={() => handleCategorySelect(cat)}
                    style={[
                      styles.filterButton,
                      {
                        backgroundColor: selectedCategory === cat ? theme.colors.accent + '30' : theme.colors.cardBg,
                        borderColor: selectedCategory === cat ? theme.colors.accent : theme.colors.border,
                      }
                    ]}
                    accessibilityLabel={`${cat} category filter`}
                    accessibilityRole="button"
                  >
                    <Text style={[
                      styles.filterButtonText,
                      { 
                        color: selectedCategory === cat ? theme.colors.accent : theme.colors.textSecondary,
                        fontSize: 12 * textScale,
                      }
                    ]}>
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>

              {/* Achievements Grid */}
              <View style={styles.achievementsGrid}>
                {filteredAchievements.map((achievement) => (
                  <View 
                    key={achievement.id}
                    style={[
                      styles.achievementCard,
                      {
                        backgroundColor: achievement.unlocked ? theme.colors.accent + '15' : theme.colors.cardBg,
                        borderColor: achievement.unlocked ? theme.colors.accent + '60' : theme.colors.border,
                        opacity: achievement.unlocked ? 1 : 0.5,
                      }
                    ]}
                  >
                    <Text style={styles.achievementIcon}>{achievement.icon}</Text>
                    <Text style={[styles.achievementName, { color: theme.colors.textPrimary, fontSize: 13 * textScale }]}>
                      {achievement.name}
                    </Text>
                    <Text style={[styles.achievementDesc, { color: theme.colors.textSecondary, fontSize: 10 * textScale }]}>
                      {achievement.description}
                    </Text>
                    <View style={[styles.achievementPoints, { backgroundColor: theme.colors.accent + '20' }]}>
                      <Text style={[styles.achievementPointsText, { color: theme.colors.accent, fontSize: 10 * textScale }]}>
                        +{achievement.points} XP
                      </Text>
                    </View>
                    {achievement.unlocked && (
                      <View style={styles.unlockedBadge}>
                        <Text style={styles.unlockedBadgeText}>✓</Text>
                      </View>
                    )}
                  </View>
                ))}
              </View>
            </Animated.View>

            <View style={styles.bottomSpacer} />
          </ScrollView>

          {/* Oracle Button (Floating) */}
          <LightningButton onPress={handleOraclePress} />

          {/* Oracle Modal */}
          <RandomFactModal
            visible={showOracleModal}
            fact={oracleFact}
            onClose={() => setShowOracleModal(false)}
          />
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
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 140,
  },
  header: {
    fontSize: 32,
    fontWeight: '900',
    fontFamily: 'SpaceMono',
    textAlign: 'center',
    marginBottom: 8,
    textShadowColor: 'rgba(139, 92, 246, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'SpaceMono',
    textAlign: 'center',
    marginBottom: 24,
  },
  rankSection: {
    marginBottom: 32,
  },
  rankCard: {
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(139, 92, 246, 0.4)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 32,
    elevation: 12,
  },
  progressCircleContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  progressCircleOuter: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressCircleInner: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  progressBar: {
    position: 'absolute',
    bottom: -10,
    left: 0,
    height: 4,
    borderRadius: 2,
  },
  rankIcon: {
    fontSize: 56,
  },
  rankTitle: {
    fontSize: 28,
    fontWeight: '900',
    fontFamily: 'SpaceMono',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },
  pointsText: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'SpaceMono',
    marginBottom: 4,
  },
  nextRankText: {
    fontSize: 12,
    fontFamily: 'SpaceMono',
    marginBottom: 20,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 40,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: '900',
    fontFamily: 'SpaceMono',
  },
  statLabel: {
    fontSize: 11,
    fontFamily: 'SpaceMono',
    marginTop: 4,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    fontFamily: 'SpaceMono',
    marginBottom: 16,
  },
  rankLadder: {
    gap: 12,
  },
  rankItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    gap: 16,
  },
  rankItemIcon: {
    fontSize: 32,
  },
  rankItemInfo: {
    flex: 1,
  },
  rankItemName: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'SpaceMono',
    marginBottom: 2,
  },
  rankItemPoints: {
    fontSize: 12,
    fontFamily: 'SpaceMono',
  },
  currentBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
  },
  currentBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    fontFamily: 'SpaceMono',
    color: '#FFFFFF',
  },
  categoryFilter: {
    marginBottom: 16,
  },
  categoryFilterContent: {
    gap: 8,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
  },
  filterButtonText: {
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'SpaceMono',
  },
  achievementsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  achievementCard: {
    width: ACHIEVEMENT_CARD_WIDTH,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    alignItems: 'center',
    position: 'relative',
  },
  achievementIcon: {
    fontSize: 36,
    marginBottom: 8,
  },
  achievementName: {
    fontSize: 13,
    fontWeight: '700',
    fontFamily: 'SpaceMono',
    textAlign: 'center',
    marginBottom: 4,
  },
  achievementDesc: {
    fontSize: 10,
    fontFamily: 'SpaceMono',
    textAlign: 'center',
    marginBottom: 8,
    lineHeight: 14,
  },
  achievementPoints: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  achievementPointsText: {
    fontSize: 10,
    fontWeight: '700',
    fontFamily: 'SpaceMono',
  },
  unlockedBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#00e5ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  unlockedBadgeText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '900',
  },
  bottomSpacer: {
    height: 20,
  },
});
