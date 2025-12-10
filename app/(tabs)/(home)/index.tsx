
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View, Alert } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { SpaceHeader } from "@/components/SpaceHeader";
import { SearchBar } from "@/components/SearchBar";
import { TodaysMysteries } from "@/components/TodaysMysteries";
import { SectionHeader } from "@/components/SectionHeader";
import { CategoryCard } from "@/components/CategoryCard";
import { LightningButton } from "@/components/LightningButton";
import { RandomFactModal } from "@/components/RandomFactModal";
import { categories } from "@/data/paranormal/categories";
import { getRandomFact, ParanormalFact } from "@/data/paranormal/facts";
import { storage } from "@/utils/storage";
import { useAppTheme } from "@/contexts/ThemeContext";

export default function HomeScreen() {
  const theme = useAppTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [showFactModal, setShowFactModal] = useState(false);
  const [currentFact, setCurrentFact] = useState<ParanormalFact | null>(null);

  useEffect(() => {
    initializeData();
  }, []);

  const initializeData = async () => {
    try {
      console.log('Initializing data...');
      
      await storage.saveCategories(categories);
      await storage.saveLastSync();
      
      console.log('Data cached successfully');
      setIsLoading(false);
    } catch (error) {
      console.error('Error initializing data:', error);
      setIsLoading(false);
    }
  };

  const handleCategoryPress = (categoryName: string) => {
    console.log('Category pressed:', categoryName);
    Alert.alert('Coming Soon', `${categoryName} section will be available soon!`);
  };

  const handleLightningPress = () => {
    console.log('Lightning button pressed');
    const randomFact = getRandomFact();
    setCurrentFact(randomFact);
    setShowFactModal(true);
  };

  const handleSearchResultPress = (result: any) => {
    console.log('Search result pressed:', result);
    if (result.type === 'fact') {
      Alert.alert('Paranormal Fact', result.fact);
    } else {
      Alert.alert(result.name, result.description);
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={theme.colors.backgroundGradient}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
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
                <CategoryCard
                  category={category}
                  onPress={() => handleCategoryPress(category.name)}
                />
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
