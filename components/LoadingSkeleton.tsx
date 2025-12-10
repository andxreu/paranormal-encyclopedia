
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { ShimmerSkeleton } from './ShimmerSkeleton';

const { width } = Dimensions.get('window');
const cardWidth = (width - 60) / 2;

export const CategoryCardSkeleton: React.FC = () => {
  return (
    <View style={styles.categoryCard}>
      <ShimmerSkeleton width={60} height={60} borderRadius={30} style={styles.icon} />
      <ShimmerSkeleton width="80%" height={16} borderRadius={8} style={styles.title} />
      <ShimmerSkeleton width="40%" height={12} borderRadius={6} />
    </View>
  );
};

export const MysteryCardSkeleton: React.FC = () => {
  return (
    <View style={styles.mysteryCard}>
      <View style={styles.mysteryHeader}>
        <ShimmerSkeleton width={40} height={40} borderRadius={20} />
        <ShimmerSkeleton width={100} height={14} borderRadius={7} />
      </View>
      <ShimmerSkeleton width="90%" height={18} borderRadius={9} style={styles.mysteryTitle} />
      <ShimmerSkeleton width="100%" height={14} borderRadius={7} />
      <ShimmerSkeleton width="80%" height={14} borderRadius={7} />
    </View>
  );
};

export const HomeLoadingSkeleton: React.FC = () => {
  return (
    <View style={styles.container}>
      <ShimmerSkeleton width="100%" height={220} borderRadius={24} style={styles.hero} />
      
      <ShimmerSkeleton width="100%" height={56} borderRadius={16} style={styles.searchBar} />
      
      <View style={styles.mysteriesSection}>
        <MysteryCardSkeleton />
        <MysteryCardSkeleton />
        <MysteryCardSkeleton />
      </View>
      
      <ShimmerSkeleton width={200} height={24} borderRadius={12} style={styles.sectionTitle} />
      
      <View style={styles.categoriesGrid}>
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <CategoryCardSkeleton key={index} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 60,
  },
  hero: {
    marginBottom: 28,
  },
  searchBar: {
    marginBottom: 20,
  },
  mysteriesSection: {
    gap: 12,
    marginBottom: 28,
  },
  mysteryCard: {
    backgroundColor: 'rgba(42, 27, 78, 0.6)',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(139, 92, 246, 0.3)',
  },
  mysteryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  mysteryTitle: {
    marginBottom: 6,
  },
  sectionTitle: {
    marginBottom: 16,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: cardWidth,
    height: cardWidth * 1.1,
    backgroundColor: 'rgba(42, 27, 78, 0.6)',
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(139, 92, 246, 0.3)',
  },
  icon: {
    marginBottom: 12,
  },
  title: {
    marginBottom: 4,
  },
});
