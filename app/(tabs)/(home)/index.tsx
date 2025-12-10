
import React, { useEffect, useState, useCallback } from "react";
import { ScrollView, StyleSheet, View, RefreshControl } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
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

export default function HomeScreen() {
  const { theme } = useAppTheme();
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
  bottomSpacer: {
    height: 40,
  },
});
