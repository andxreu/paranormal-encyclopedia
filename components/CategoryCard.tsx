
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Category } from '@/data/paranormal/categories';
import { useAppTheme } from '@/contexts/ThemeContext';

interface CategoryCardProps {
  category: Category;
  onPress?: () => void;
}

const { width } = Dimensions.get('window');
const cardWidth = (width - 60) / 2;

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, onPress }) => {
  const theme = useAppTheme();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <LinearGradient
        colors={[category.color + '60', category.color + '20', 'rgba(42, 27, 78, 0.4)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.gradient, { 
          boxShadow: `0px 0px 20px ${category.color}40`,
        }]}
      >
        <View style={styles.content}>
          <Text style={styles.icon}>{category.icon}</Text>
          <Text style={styles.name}>{category.name}</Text>
          <Text style={[styles.code, { color: category.color }]}>{category.code}</Text>
        </View>
        <View style={[styles.glowBorder, { borderColor: category.color + '60' }]} />
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: cardWidth,
    height: cardWidth * 1.1,
    marginBottom: 16,
    borderRadius: 20,
    overflow: 'visible',
  },
  gradient: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(139, 92, 246, 0.3)',
    borderRadius: 20,
    elevation: 8,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 52,
    marginBottom: 12,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  name: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'SpaceMono',
    marginBottom: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  code: {
    fontSize: 11,
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'SpaceMono',
    opacity: 0.9,
  },
  glowBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 20,
    borderWidth: 2,
    opacity: 0.3,
  },
});
