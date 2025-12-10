
import React, { useEffect, useState, useCallback, useMemo, memo } from "react";
import { ScrollView, StyleSheet, View, RefreshControl, TouchableOpacity, Text } from "react-native";
import { useRouter } from 'expo-router';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  Easing,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import { SpaceHeader } from "@/components/SpaceHeader";
import { SearchBar } from "@/components/SearchBar";
import { TodaysMysteries } from "@/components/TodaysMysteries";
import { SectionHeader } from "@/components/SectionHeader";
import { CategoryCard } from "@/components/CategoryCard";
import { GlowButton } from "@/components/GlowButton";
import { RandomFactModal } from "@/components/RandomFactModal";
import { OnboardingScreen } from "@/components/OnboardingScreen";
import { HomeLoadingSkeleton } from "@/components/LoadingSkeleton";
import { AnimatedGradientBackground } from "@/components/AnimatedGradientBackground";
import { ParticleField } from "@/components/ParticleField";
import { categories } from "@/data/paranormal/categories";
import { getRandomFact, ParanormalFact } from "@/data/paranormal/facts";
import { storage } from "@/utils/storage";
import { useAppTheme } from "@/contexts/ThemeContext";
import { useEnlightenedMode } from "@/contexts/EnlightenedModeContext";
import { HapticFeedback } from "@/utils/haptics";

interface ResourceCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  route: string;
}

const resources: ResourceCard[] = [
  {
    id: 'haunted-locations',
    title: 'Haunted Locations',
    description: 'Explore the world\'s most haunted places',
    icon: '👁️',
    route: '/resources/haunted-locations',
  },
  {
    id: 'codex',
    title: 'The Codex',
    description: 'Deep-dive articles on paranormal phenomena that baffle science',
    icon: '📖',
    route: '/resources/codex',
  },
  {
    id: 'glossary',
    title: 'Glossary A-Z',
    description: 'Browse paranormal terms and definitions',
    icon: '📜',
    route: '/resources/glossary',
  },
];

interface ResourceCardComponentProps {
  resource: ResourceCard;
  onPress: () => void;
}

const ResourceCardComponent = memo<ResourceCardComponentProps>(({ resource, onPress }) => {
  const { theme, textScale } = useAppTheme();
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

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
        <View style={[
          styles.resourceCardGradient,
          {
            backgroundColor: theme.colors.glassBg,
            borderColor: theme.colors.border,
            boxShadow: `0 8px 32px ${theme.colors.shadow}`,
          }
        ]}>
          <Text style={styles.resourceIcon}>{resource.icon}</Text>
          <Text style={[styles.resourceTitle, { color: theme.colors.textPrimary, fontSize: 18 * textScale }]}>
            {resource.title}
          </Text>
          <Text style={[styles.resourceDescription, { color: theme.colors.textSecondary, fontSize: 13 * textScale }]}>
            {resource.description}
          </Text>
          <View style={[styles.resourceBorder, { borderColor: theme.colors.violet + '60' }]} />
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
});

ResourceCardComponent.displayName = 'ResourceCardComponent';

export default function HomeScreen(): React.ReactElement {
  const { theme } = useAppTheme();
  const { isEnlightened } = useEnlightenedMode();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showFactModal, setShowFactModal] = useState(false);
  const [currentFact, setCurrentFact] = useState<ParanormalFact | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const fadeOpacity = useSharedValue(0);
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const loadData = useCallback(async (): Promise<void> => {
    try {
      await storage.saveCategories(categories);
      await storage.saveLastSync();
      
      console.log('Data cached successfully');
      setIsLoading(false);
      
      fadeOpacity.value = withTiming(1, {
        duration: 600,
        easing: Easing.inOut(Easing.ease),
      });
    } catch (error) {
      console.error('Error loading data:', error);
      setIsLoading(false);
    }
  }, [fadeOpacity]);

  const initializeApp = useCallback(async (): Promise<void> => {
    try {
      console.log('Initializing app...');
      
      const onboardingComplete = await storage.isOnboardingComplete();
      if (!onboardingComplete) {
        setShowOnboarding(true);
        setIsLoading(false);
        return;
      }

      await loadData();
    } catch (error) {
      console.error('Error initializing app:', error);
      setIsLoading(false);
    }
  }, [loadData]);

  useEffect(() => {
    initializeApp();
  }, [initializeApp]);

  const handleOnboardingComplete = useCallback(async (): Promise<void> => {
    await storage.setOnboardingComplete(true);
    setShowOnboarding(false);
    setIsLoading(true);
    await loadData();
  }, [loadData]);

  const handleLightningPress = useCallback((): void => {
    HapticFeedback.medium();
    console.log('Glow button pressed');
    const randomFact = getRandomFact();
    setCurrentFact(randomFact);
    setShowFactModal(true);
  }, []);

  const handleSearchResultPress = useCallback((result: unknown): void => {
    HapticFeedback.light();
    console.log('Search result pressed:', result);
  }, []);

  const handleResourcePress = useCallback((resource: ResourceCard): void => {
    HapticFeedback.light();
    console.log('Resource pressed:', resource.id);
    router.push(resource.route as never);
  }, [router]);

  const onRefresh = useCallback(async (): Promise<void> => {
    HapticFeedback.medium();
    setRefreshing(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      await storage.saveCategories(categories);
      await storage.saveLastSync();
      HapticFeedback.success();
    } catch (error) {
      console.error('Error refreshing:', error);
      HapticFeedback.error();
    } finally {
      setRefreshing(false);
    }
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeOpacity.value,
    };
  });

  const containerStyle = useMemo(() => [
    styles.container,
    isEnlightened && styles.enlightenedContainer,
  ], [isEnlightened]);

  if (showOnboarding) {
    return <OnboardingScreen onComplete={handleOnboardingComplete} />;
  }

  if (isLoading) {
    return (
      <View style={styles.container}>
        <AnimatedGradientBackground>
          <HomeLoadingSkeleton />
        </AnimatedGradientBackground>
      </View>
    );
  }

  return (
    <View style={containerStyle}>
      <AnimatedGradientBackground>
        <ParticleField count={isEnlightened ? 40 : 20} />
        <Animated.View style={[styles.animatedContainer, animatedStyle]}>
          <Animated.ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
            onScroll={scrollHandler}
            scrollEventThrottle={16}
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
            <SpaceHeader />

            <View style={styles.searchBarContainer}>
              <SearchBar onResultPress={handleSearchResultPress} />
            </View>

            <TodaysMysteries />

            <SectionHeader
              title="Explore Categories"
              subtitle="Discover the paranormal realm"
            />
            <View style={styles.categoriesGrid}>
              {categories.map((category, index) => (
                <React.Fragment key={index}>
                  <CategoryCard category={category} />
                </React.Fragment>
              ))}
            </View>

            <SectionHeader
              title="Resources"
              subtitle="Expand your paranormal knowledge"
            />
            <View style={styles.resourcesContainer}>
              {resources.map((resource, index) => (
                <ResourceCardComponent
                  key={index}
                  resource={resource}
                  onPress={() => handleResourcePress(resource)}
                />
              ))}
            </View>

            <View style={styles.bottomSpacer} />
          </Animated.ScrollView>

          <GlowButton onPress={handleLightningPress} icon={isEnlightened ? '🔮' : '⚡'} />

          <RandomFactModal
            visible={showFactModal}
            fact={currentFact}
            onClose={() => setShowFactModal(false)}
          />
        </Animated.View>
      </AnimatedGradientBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  enlightenedContainer: {
    transform: [{ scaleX: -1 }],
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
    marginBottom: 16,
  },
  resourcesContainer: {
    gap: 12,
    marginBottom: 16,
  },
  resourceCard: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  resourceCardGradient: {
    padding: 20,
    borderWidth: 1,
    borderRadius: 20,
    elevation: 8,
  },
  resourceIcon: {
    fontSize: 48,
    marginBottom: 12,
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
    lineHeight: 20,
  },
  resourceBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 20,
    borderWidth: 2,
    opacity: 0.3,
  },
  bottomSpacer: {
    height: 40,
  },
});
