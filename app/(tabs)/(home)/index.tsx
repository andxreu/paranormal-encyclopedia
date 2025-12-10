
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View, Alert } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { HeroBanner } from "@/components/HeroBanner";
import { SectionHeader } from "@/components/SectionHeader";
import { DailyMystery } from "@/components/DailyMystery";
import { CategoryCard } from "@/components/CategoryCard";
import { FloatingOracleButton } from "@/components/FloatingOracleButton";
import { categories } from "@/data/paranormal/categories";
import { getRandomFact } from "@/data/paranormal/facts";
import { storage } from "@/utils/storage";
import { useAppTheme } from "@/contexts/ThemeContext";

export default function HomeScreen() {
  const theme = useAppTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initializeData();
  }, []);

  const initializeData = async () => {
    try {
      console.log('Initializing data...');
      
      // Cache categories and facts for offline use
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

  const handleOraclePress = () => {
    console.log('Oracle button pressed');
    const randomFact = getRandomFact();
    Alert.alert('🔮 The Oracle Speaks', randomFact.fact);
  };

  const handleMysteryPress = () => {
    console.log('Daily mystery pressed');
    Alert.alert('Daily Mystery', 'The Voynich Manuscript remains one of history\'s greatest unsolved mysteries.');
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
          <HeroBanner />

          <SectionHeader
            title="Daily Mystery"
            subtitle="Discover something new each day"
          />
          <DailyMystery onPress={handleMysteryPress} />

          <SectionHeader
            title="Categories"
            subtitle="Explore the paranormal realm"
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

        <FloatingOracleButton onPress={handleOraclePress} />
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
