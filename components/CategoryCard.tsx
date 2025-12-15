
import React, { useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import { Category } from '@/data/paranormal/categories';
import { useAppTheme } from '@/contexts/ThemeContext';
import { ParticleEffect } from './ParticleEffect';
import { HapticFeedback } from '@/utils/haptics';

interface CategoryCardProps {
  category: Category;
  onPress?: () => void;
}

const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 2;

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, onPress }) => {
  const { theme } = useAppTheme();
  const router = useRouter();
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      opacity: opacity.value,
    };
  });

  const handlePressIn = useCallback(() => {
    HapticFeedback.soft();
    scale.value = withSpring(0.95, {
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

  const handlePress = useCallback(() => {
    try {
      HapticFeedback.light();
      console.log('NAV', `/explore/${category.id}`, { categoryId: category.id });
      
      if (onPress) {
        onPress();
      } else {
        router.push({
          pathname: `/explore/[category]`,
          params: { category: category.id }
        });
      }
    } catch (error) {
      console.error('[CategoryCard] Navigation error:', error);
    }
  }, [category.id, onPress, router]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={1}
      accessibilityLabel={`${category.name} category`}
      accessibilityHint={`Explore ${category.description}`}
      accessibilityRole="button"
    >
      <Animated.View style={animatedStyle}>
        <LinearGradient
          colors={[category.color + '60', category.color + '20', 'rgba(42, 27, 78, 0.4)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.gradient, { 
            boxShadow: `0px 0px 20px ${category.color}40`,
          }]}
        >
          <ParticleEffect count={3} color={category.color + '50'} />
          
          <View style={styles.content}>
            <Text style={styles.icon}>{category.icon}</Text>
            <Text style={styles.name}>{category.name}</Text>
          </View>
          <View style={[styles.glowBorder, { borderColor: category.color + '60' }]} />
        </LinearGradient>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: cardWidth,
    marginBottom: 12,
    borderRadius: 18,
    overflow: 'visible',
  },
  gradient: {
    height: cardWidth * 1.0,
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(139, 92, 246, 0.3)',
    borderRadius: 18,
    elevation: 8,
    overflow: 'hidden',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  icon: {
    fontSize: 48,
    marginBottom: 10,
    textShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
  },
  name: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'SpaceMono',
    textShadow: '0px 1px 3px rgba(0, 0, 0, 0.5)',
  },
  glowBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 18,
    borderWidth: 2,
    opacity: 0.3,
  },
});
