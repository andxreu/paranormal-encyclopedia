// app/(tabs)/(home)/index.tsx
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { ScrollView, StyleSheet, View, RefreshControl, TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  Easing,
  FadeIn,
  FadeOut,
} from 'react-native-reanimated';
import { SpaceHeader } from '@/components/SpaceHeader';
import { SearchBar } from '@/components/SearchBar';
import { TodaysMysteries } from '@/components/TodaysMysteries';
import { ContinueReading } from '@/components/ContinueReading';
import { SectionHeader } from '@/components/SectionHeader';
import { CategoryCard } from '@/components/CategoryCard';
import { LightningButton } from '@/components/LightningButton';
import { RandomFactModal } from '@/components/RandomFactModal';
import { OnboardingScreen } from '@/components/OnboardingScreen';
import { HomeLoadingSkeleton } from '@/components/LoadingSkeleton';
import { categories } from '@/data/paranormal/categories';
import { getRandomFact, ParanormalFact } from '@/data/paranormal/facts';
import { storage } from '@/utils/storage';
import { fuzzySearch } from '@/utils/fuzzySearch';
import { useAppTheme } from '@/contexts/ThemeContext';
import { useOnboarding } from '@/contexts/OnboardingContext';
import { HapticFeedback } from '@/utils/haptics';

// ──────────────────────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────────────────────
interface ResourceCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  route: string;
}

// ──────────────────────────────────────────────────────────────
// Constants
// ──────────────────────────────────────────────────────────────
const REFRESH_DELAY = 1500;
const CONFETTI_DURATION = 3000;
const FADE_IN_DURATION = 600;
const SPRING_CONFIG = {
  damping: 15,
  stiffness: 300,
} as const;

const resources: readonly ResourceCard[] = [
  {
    id: 'documented-accounts',
    title: 'Documented Accounts',
    description: 'Real historical records of paranormal events',
    icon: '🖋️',
    route: '/resources/documented-accounts',
  },
  {
    id: 'haunted-locations',
    title: 'Haunted Locations',
    description: 'Explore the world\'s most haunted places',
    icon: '🏚️',
    route: '/resources/haunted-locations',
  },
  {
    id: 'codex',
    title: 'The Codex',
    description: 'A hand-picked collection of intriguing cases and phenomena',
    icon: '📕',
    route: '/resources/codex',
  },
  {
    id: 'glossary',
    title: 'Glossary A-Z',
    description: 'Browse paranormal terms and definitions',
    icon: '📖',
    route: '/resources/glossary',
  },
] as const;

// ──────────────────────────────────────────────────────────────
// Main Component
// ──────────────────────────────────────────────────────────────
export default function HomeScreen() {
  const { theme } = useAppTheme();
  const { isOnboardingComplete, isCheckingOnboarding, setOnboardingComplete } = useOnboarding();
  const router = useRouter();

  // State management
  const [isLoading, setIsLoading] = useState(true);
  const [showFactModal, setShowFactModal] = useState(false);
  const [currentFact, setCurrentFact] = useState<ParanormalFact | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Animation values
  const fadeOpacity = useSharedValue(0);

  /**
   * Memoize gradient colors to prevent recalculation
   */
  const gradientColors = useMemo(() => theme.colors.backgroundGradient, [theme.colors.backgroundGradient]);

  /**
   * Loads and caches app data
   */
  const loadData = useCallback(async () => {
    try {
      console.log('[Home] 📦 Loading app data...');
      
      // Save categories to storage
      await storage.saveCategories(categories);
      await storage.saveLastSync();
      
      // Initialize search index
      try {
        fuzzySearch.initialize();
        console.log('[Home] ✓ Fuzzy search initialized');
      } catch (searchError) {
        console.error('[Home] ⚠️ Search initialization failed:', searchError);
        // Non-critical error - continue loading
      }
      
      console.log('[Home] ✓ Data cached successfully');
      setIsLoading(false);
      setError(null);
      
      // Fade in content
      fadeOpacity.value = withTiming(1, {
        duration: FADE_IN_DURATION,
        easing: Easing.inOut(Easing.ease),
      });

      // Check for first launch after onboarding (for potential confetti animation)
      const firstLaunchAfterOnboarding = await storage.getData<boolean>('@first_launch_after_onboarding');
      if (firstLaunchAfterOnboarding === true) {
        await storage.saveData('@first_launch_after_onboarding', false);
        console.log('[Home] ✓ First launch after onboarding detected');
        // Confetti feature ready for future implementation
      }
    } catch (error) {
      console.error('[Home] ✗ Error loading data:', error);
      setError('Failed to load data. Please try again.');
      setIsLoading(false);
    }
  }, [fadeOpacity]);

  /**
   * Initializes the app on mount
   */
  const initializeApp = useCallback(async () => {
    try {
      console.log('[Home] 🚀 Initializing app...');
      
      if (!isOnboardingComplete) {
        console.log('[Home] Onboarding not complete, showing onboarding screen');
        setIsLoading(false);
        return;
      }

      await loadData();
    } catch (error) {
      console.error('[Home] ✗ Error initializing app:', error);
      setError('Failed to initialize app. Please restart.');
      setIsLoading(false);
    }
  }, [isOnboardingComplete, loadData]);

  /**
   * Initialize app when onboarding check completes
   */
  useEffect(() => {
    if (!isCheckingOnboarding) {
      initializeApp();
    }
  }, [isCheckingOnboarding, initializeApp]);

  /**
   * Handles onboarding completion
   */
  const handleOnboardingComplete = useCallback(async () => {
    try {
      console.log('[Home] ✓ Onboarding completed');
      await setOnboardingComplete(true);
      await storage.saveData('@first_launch_after_onboarding', true);
      setIsLoading(true);
      await loadData();
    } catch (error) {
      console.error('[Home] ✗ Error completing onboarding:', error);
      setError('Failed to complete onboarding. Please try again.');
    }
  }, [setOnboardingComplete, loadData]);

  /**
   * Handles lightning button press - shows random fact
   */
  const handleLightningPress = useCallback(() => {
    try {
      HapticFeedback.medium();
      console.log('[Home] ⚡ Lightning button pressed');
      const randomFact = getRandomFact();
      setCurrentFact(randomFact);
      setShowFactModal(true);
    } catch (error) {
      console.error('[Home] ✗ Error showing random fact:', error);
      // Fail gracefully - don't show error to user
    }
  }, []);

  /**
   * Handles search result selection
   */
  const handleSearchResultPress = useCallback((result: any) => {
    try {
      HapticFeedback.light();
      console.log('[Home] 🔍 Search result pressed:', result.title);
      if (result.route && result.route !== '/') {
        router.push(result.route as any);
      }
    } catch (error) {
      console.error('[Home] ✗ Error navigating to search result:', error);
      // Fail gracefully
    }
  }, [router]);

  /**
   * Handles resource card press
   */
  const handleResourcePress = useCallback((resource: ResourceCard) => {
    try {
      HapticFeedback.light();
      console.log('[Home] 📚 Resource pressed:', resource.id);
      router.push(resource.route as any);
    } catch (error) {
      console.error('[Home] ✗ Error navigating to resource:', error);
      // Fail gracefully
    }
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
      
      // Refresh data
      await storage.saveCategories(categories);
      await storage.saveLastSync();
      
      // Reinitialize search
      try {
        fuzzySearch.initialize();
      } catch (searchError) {
        console.error('[Home] ⚠️ Error reinitializing search:', searchError);
        // Non-critical - continue
      }
      
      HapticFeedback.success();
      console.log('[Home] ✓ Refresh completed');
    } catch (error) {
      console.error('[Home] ✗ Error refreshing:', error);
      HapticFeedback.error();
    } finally {
      setRefreshing(false);
    }
  }, []);

  /**
   * Handles retry after error
   */
  const handleRetry = useCallback(() => {
    setError(null);
    setIsLoading(true);
    initializeApp();
  }, [initializeApp]);

  /**
   * Animated style for fade-in effect
   */
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: fadeOpacity.value,
  }));

  // ──────────────────────────────────────────────────────────────
  // Loading State
  // ──────────────────────────────────────────────────────────────
  if (isCheckingOnboarding || isLoading) {
    return <HomeLoadingSkeleton />;
  }

  // ──────────────────────────────────────────────────────────────
  // Onboarding Screen
  // ──────────────────────────────────────────────────────────────
  if (!isOnboardingComplete) {
    return (
      <OnboardingScreen
        onComplete={handleOnboardingComplete}
      />
    );
  }

  // ──────────────────────────────────────────────────────────────
  // Error State
  // ──────────────────────────────────────────────────────────────
  if (error) {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={gradientColors}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <Animated.View 
            entering={FadeIn}
            exiting={FadeOut}
            style={styles.errorContainer}
          >
            <Text style={styles.errorIcon}>⚠️</Text>
            <Text style={styles.errorText}>{error}</Text>
            <TouchableOpacity
              onPress={handleRetry}
              style={styles.retryButton}
              activeOpacity={0.8}
              accessibilityLabel="Retry loading"
              accessibilityRole="button"
            >
              <Text style={styles.retryButtonText}>Retry</Text>
            </TouchableOpacity>
          </Animated.View>
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
        <Animated.View style={[styles.animatedContainer, animatedStyle]}>
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
            {/* Header */}
            <SpaceHeader />

            {/* Search */}
            <View style={styles.searchBarContainer}>
              <SearchBar onResultPress={handleSearchResultPress} />
            </View>

            {/* Today's Mysteries */}
            <TodaysMysteries />

            {/* Continue Reading */}
            <ContinueReading />

            {/* Categories Section */}
            <SectionHeader
              title="Explore Categories"
              subtitle="Discover the paranormal realm"
            />
            <View style={styles.categoriesGrid}>
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </View>

            {/* Resources Section */}
            <SectionHeader
              title="Resources"
              subtitle="Expand your paranormal knowledge"
            />
            <View style={styles.resourcesContainer}>
              {resources.map((resource) => (
                <ResourceCardComponent
                  key={resource.id}
                  resource={resource}
                  onPress={() => handleResourcePress(resource)}
                />
              ))}
            </View>

            <View style={styles.bottomSpacer} />
          </ScrollView>

          {/* Floating Action Button */}
          <LightningButton onPress={handleLightningPress} />

          {/* Random Fact Modal */}
          <RandomFactModal
            visible={showFactModal}
            fact={currentFact}
            onClose={() => setShowFactModal(false)}
          />
        </Animated.View>
      </LinearGradient>
    </View>
  );
}

// ──────────────────────────────────────────────────────────────
// Resource Card Component
// ──────────────────────────────────────────────────────────────
interface ResourceCardComponentProps {
  resource: ResourceCard;
  onPress: () => void;
}

const ResourceCardComponent: React.FC<ResourceCardComponentProps> = React.memo(({ resource, onPress }) => {
  const { theme, textScale } = useAppTheme();
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = useCallback(() => {
    HapticFeedback.soft();
    scale.value = withSpring(0.98, SPRING_CONFIG);
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
      style={styles.resourceCard}
      accessibilityLabel={resource.title}
      accessibilityHint={resource.description}
      accessibilityRole="button"
    >
      <Animated.View style={animatedStyle}>
        <LinearGradient
          colors={[theme.colors.violet + '40', theme.colors.indigo + '20', theme.colors.cardBg]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.resourceCardGradient, { borderColor: theme.colors.border }]}
        >
          <Text style={styles.resourceIcon}>{resource.icon}</Text>
          <Text style={[styles.resourceTitle, { color: theme.colors.textPrimary, fontSize: 18 * textScale }]}>
            {resource.title}
          </Text>
          <Text style={[styles.resourceDescription, { color: theme.colors.textSecondary, fontSize: 13 * textScale }]}>
            {resource.description}
          </Text>
          <View style={[styles.resourceBorder, { borderColor: theme.colors.violet + '60' }]} />
        </LinearGradient>
      </Animated.View>
    </TouchableOpacity>
  );
});

ResourceCardComponent.displayName = 'ResourceCardComponent';

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
  animatedContainer: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 60,
    paddingHorizontal: 16,
    paddingBottom: 120,
  },
  searchBarContainer: {
    marginTop: -10,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  resourcesContainer: {
    gap: 10,
    marginBottom: 12,
  },
  resourceCard: {
    borderRadius: 18,
    overflow: 'hidden',
  },
  resourceCardGradient: {
    padding: 18,
    borderWidth: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 24,
    elevation: 8,
  },
  resourceIcon: {
    fontSize: 44,
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  resourceTitle: {
    fontSize: 18,
    fontWeight: '800',
    fontFamily: 'SpaceMono',
    marginBottom: 8,
    textShadowColor: 'rgba(139, 92, 246, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  resourceDescription: {
    fontSize: 13,
    fontFamily: 'SpaceMono',
    lineHeight: 18,
  },
  resourceBorder: {
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
    height: 40,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  errorIcon: {
    fontSize: 64,
    marginBottom: 20,
  },
  errorText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'SpaceMono',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 24,
  },
  retryButton: {
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
  retryButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    fontFamily: 'SpaceMono',
  },
});