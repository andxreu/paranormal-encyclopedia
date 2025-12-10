
import React, { memo, useCallback } from 'react';
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
const cardWidth = (width - 60) / 2;

export const CategoryCard = memo<CategoryCardProps>(({ category, onPress }) => {
  const { theme } = useAppTheme();
  const router = useRouter();
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
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
    HapticFeedback.light();
    if (onPress) {
      onPress();
    }
    router.push(`/explore/${category.id}` as never);
  }, [onPress, router, category.id]);

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
          colors={[category.color + '60', category.color + '20', theme.colors.glassBg]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.gradient, { 
            boxShadow: `0 0 20px ${category.color}40`,
          }]}
        >
          <ParticleEffect count={3} color={category.color + '50'} />
          
          <View style={styles.content}>
            <Text style={styles.icon}>{category.icon}</Text>
            <Text style={[styles.name, { color: theme.colors.textPrimary }]}>{category.name}</Text>
          </View>
          <View style={[styles.glowBorder, { borderColor: category.color + '80' }]} />
        </LinearGradient>
      </Animated.View>
    </TouchableOpacity>
  );
});

CategoryCard.displayName = 'CategoryCard';

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
    overflow: 'hidden',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
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
    textAlign: 'center',
    fontFamily: 'SpaceMono',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  glowBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 20,
    borderWidth: 2,
    opacity: 0.4,
  },
});
