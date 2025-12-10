
import React, { useEffect, useState, useCallback } from "react";
import { ScrollView, StyleSheet, View, RefreshControl, TouchableOpacity, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  Easing,
} from 'react-native-reanimated';
import { SpaceHeader } from "@/components/SpaceHeader";
import { SearchBar } from "@/components/SearchBar";
import { TodaysMysteries } from "@/components/TodaysMysteries";
import { SectionHeader } from "@/components/SectionHeader";
import { CategoryCard } from "@/components/CategoryCard";
import { LightningButton } from "@/components/LightningButton";
import { RandomFactModal } from "@/components/RandomFactModal";
import { OnboardingScreen } from "@/components/OnboardingScreen";
import { HomeLoadingSkeleton } from "@/components/LoadingSkeleton";
import { categories } from "@/data/paranormal/categories";
import { getRandomFact, ParanormalFact } from "@/data/paranormal/facts";
import { storage } from "@/utils/storage";
import { useAppTheme } from "@/contexts/ThemeContext";
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

export default function HomeScreen() {
  const { theme } = useAppTheme();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showFactModal, setShowFactModal] = useState(false);
  const [currentFact, setCurrentFact] = useState<ParanormalFact | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const fadeOpacity = useSharedValue(0);

  const loadData = useCallback(async () => {
    try {
      await storage.saveCategories(categories);
      await storage.saveLastSync();
      
      console.log('Data cached successfully');
      setIsLoading(false);
      
      fadeOpacity.value = withTiming(1, {
        duration: 600,
        easing: Easing.inOut(Easing.ease),
      });

      const firstLaunchAfterOnboarding = await storage.getData<boolean>('@first_launch_after_onboarding');
      if (firstLaunchAfterOnboarding !== false) {
        setShowConfetti(true);
        await storage.saveData('@first_launch_after_onboarding', false);
        setTimeout(() => setShowConfetti(false), 3000);
      }
    } catch (error) {
      console.error('Error loading data:', error);
      setIsLoading(false);
    }
  }, [fadeOpacity]);

  const initializeApp = useCallback(async () => {
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

  const handleOnboardingComplete = async () => {
    await storage.setOnboardingComplete(true);
    await storage.saveData('@first_launch_after_onboarding', true);
    setShowOnboarding(false);
    setIsLoading(true);
    await loadData();
  };

  const handleLightningPress = () => {
    HapticFeedback.medium();
    console.log('Lightning button pressed');
    const randomFact = getRandomFact();
    setCurrentFact(randomFact);
    setShowFactModal(true);
  };

  const handleSearchResultPress = (result: any) => {
    HapticFeedback.light();
    console.log('Search result pressed:', result);
  };

  const handleResourcePress = (resource: ResourceCard) => {
    HapticFeedback.light();
    console.log('Resource pressed:', resource.id);
    router.push(resource.route as any);
  };

  const onRefresh = async () => {
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
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeOpacity.value,
    };
  });

  if (showOnboarding) {
    return <OnboardingScreen onComplete={handleOnboardingComplete} />;
  }

  if (isLoading) {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={theme.colors.backgroundGradient}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <HomeLoadingSkeleton />
        </LinearGradient>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={theme.colors.backgroundGradient}
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
          </ScrollView>

          <LightningButton onPress={handleLightningPress} />

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

interface ResourceCardComponentProps {
  resource: ResourceCard;
  onPress: () => void;
}

const ResourceCardComponent: React.FC<ResourceCardComponentProps> = ({ resource, onPress }) => {
  const { theme, textScale } = useAppTheme();
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePressIn = () => {
    HapticFeedback.soft();
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
};

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
    boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.4)',
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
