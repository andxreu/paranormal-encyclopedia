
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppTheme } from '@/contexts/ThemeContext';
import { paranormalFacts, getFactsByCategory } from '@/data/paranormal/facts';
import { categories } from '@/data/paranormal/categories';

export default function ExploreScreen() {
  const theme = useAppTheme();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const displayFacts = selectedCategory 
    ? getFactsByCategory(selectedCategory)
    : paranormalFacts.slice(0, 20);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={theme.colors.backgroundGradient}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <SafeAreaView style={styles.safeArea} edges={['top']}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Explore Facts</Text>
            <Text style={styles.headerSubtitle}>
              {paranormalFacts.length} Paranormal Facts
            </Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.filterContainer}
            contentContainerStyle={styles.filterContent}
          >
            <TouchableOpacity
              style={[
                styles.filterButton,
                !selectedCategory && styles.filterButtonActive,
              ]}
              onPress={() => setSelectedCategory(null)}
            >
              <Text style={[
                styles.filterText,
                !selectedCategory && styles.filterTextActive,
              ]}>
                All
              </Text>
            </TouchableOpacity>
            {categories.map((category, index) => (
              <React.Fragment key={index}>
                <TouchableOpacity
                  style={[
                    styles.filterButton,
                    selectedCategory === category.id && styles.filterButtonActive,
                    { borderColor: category.color + '60' },
                  ]}
                  onPress={() => setSelectedCategory(category.id)}
                >
                  <Text style={styles.filterEmoji}>{category.icon}</Text>
                  <Text style={[
                    styles.filterText,
                    selectedCategory === category.id && styles.filterTextActive,
                  ]}>
                    {category.name}
                  </Text>
                </TouchableOpacity>
              </React.Fragment>
            ))}
          </ScrollView>

          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
          >
            {displayFacts.map((fact, index) => (
              <React.Fragment key={index}>
                <View style={[styles.factCard, { borderLeftColor: fact.color }]}>
                  <View style={styles.factHeader}>
                    <Text style={[styles.factCategory, { color: fact.color }]}>
                      {fact.categoryName}
                    </Text>
                  </View>
                  <Text style={styles.factText}>{fact.fact}</Text>
                </View>
              </React.Fragment>
            ))}
          </ScrollView>
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
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '900',
    color: '#FFFFFF',
    fontFamily: 'SpaceMono',
    textShadowColor: 'rgba(139, 92, 246, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#B0B0B0',
    fontFamily: 'SpaceMono',
    marginTop: 4,
  },
  filterContainer: {
    maxHeight: 60,
    marginBottom: 16,
  },
  filterContent: {
    paddingHorizontal: 20,
    gap: 10,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(42, 27, 78, 0.6)',
    borderWidth: 1,
    borderColor: 'rgba(139, 92, 246, 0.3)',
    gap: 6,
  },
  filterButtonActive: {
    backgroundColor: 'rgba(139, 92, 246, 0.4)',
    borderColor: 'rgba(139, 92, 246, 0.6)',
  },
  filterEmoji: {
    fontSize: 16,
  },
  filterText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#B0B0B0',
    fontFamily: 'SpaceMono',
  },
  filterTextActive: {
    color: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  factCard: {
    backgroundColor: 'rgba(42, 27, 78, 0.6)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(139, 92, 246, 0.3)',
    borderLeftWidth: 4,
    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.3)',
    elevation: 4,
  },
  factHeader: {
    marginBottom: 8,
  },
  factCategory: {
    fontSize: 11,
    fontWeight: '700',
    fontFamily: 'SpaceMono',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  factText: {
    fontSize: 14,
    color: '#FFFFFF',
    lineHeight: 22,
    fontFamily: 'SpaceMono',
  },
});
