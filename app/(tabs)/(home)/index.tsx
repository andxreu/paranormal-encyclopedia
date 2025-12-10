
import React from "react";
import { ScrollView, StyleSheet, View, Alert } from "react-native";
import { HeroBanner } from "@/components/HeroBanner";
import { SectionHeader } from "@/components/SectionHeader";
import { DailyMystery } from "@/components/DailyMystery";
import { CategoryCard } from "@/components/CategoryCard";
import { FloatingOracleButton } from "@/components/FloatingOracleButton";
import { categories } from "@/data/paranormal/categories";

export default function HomeScreen() {
  const handleCategoryPress = (categoryName: string) => {
    console.log('Category pressed:', categoryName);
    Alert.alert('Coming Soon', `${categoryName} section will be available soon!`);
  };

  const handleOraclePress = () => {
    console.log('Oracle button pressed');
    Alert.alert('🔮 The Oracle Speaks', 'The mysteries of the universe are vast and unknowable...');
  };

  const handleMysteryPress = () => {
    console.log('Daily mystery pressed');
    Alert.alert('Daily Mystery', 'The Voynich Manuscript remains one of history\'s greatest unsolved mysteries.');
  };

  return (
    <View style={styles.container}>
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

        <FloatingOracleButton onPress={handleOraclePress} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#08080B',
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
});
