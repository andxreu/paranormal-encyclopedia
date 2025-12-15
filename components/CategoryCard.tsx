
import React, { useCallback, useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useWindowDimensions, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

import type { Category } from '@/data/paranormal/categories';
import { useAppTheme } from '@/contexts/ThemeContext';
import { ParticleEffect } from './ParticleEffect';
import { HapticFeedback } from '@/utils/haptics';

interface CategoryCardProps {
  category: Category;
  onPress?: () => void;
}

const SPRING_CONFIG = { damping: 15, stiffness: 300 } as const;

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, onPress }) => {
  const { theme, textScale } = useAppTheme();
  const router = useRouter();
  const { width } = useWindowDimensions();

  // Responsive width (and rotates correctly)
  const cardWidth = useMemo(() => {
    const horizontalPadding = 16 * 2; // matches common screens
    const gap = 12;
    const available = width - horizontalPadding - gap;
    return Math.max(140, available / 2);
  }, [width]);

  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = useCallback(() => {
    HapticFeedback.soft();
    scale.value = withSpring(0.95, SPRING_CONFIG);
  }, [scale]);

  const handlePressOut = useCallback(() => {
    scale.value = withSpring(1, SPRING_CONFIG);
  }, [scale]);

  const handlePress = useCallback(() => {
    try {
      HapticFeedback.light();

      if (onPress) {
        onPress();
        return;
      }

      // ✅ Always use group-qualified route so iOS never "guesses wrong"
      router.push({
        pathname: '/(tabs)/explore/[category]',
        params: { category: String(category.id) },
      });
    } catch (error) {
      console.error('[CategoryCard] Navigation error:', error);
    }
  }, [category.id, onPress, router]);

  return (
    <TouchableOpacity
      style={[styles.container, { width: cardWidth }]}
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
          colors={[
            category.color + '60',
            category.color + '20',
            theme.colors.cardBgTranslucent || 'rgba(42, 27, 78, 0.4)',
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[
            styles.gradient,
            {
              height: cardWidth,
              borderColor: theme.colors.border,
              shadowColor: category.color,
              shadowOffset: { width: 0, height: 10 },
              shadowOpacity: 0.25,
              shadowRadius: 18,
              elevation: 8,
            },
          ]}
        >
          <ParticleEffect count={3} color={category.color + '50'} />

          <View style={styles.content}>
            <Text
              style={[
                styles.icon,
                {
                  fontSize: 48 * textScale,
                  textShadowColor: 'rgba(0,0,0,0.5)',
                  textShadowOffset: { width: 0, height: 2 },
                  textShadowRadius: 4,
                },
              ]}
            >
              {category.icon}
            </Text>

            <Text
              style={[
                styles.name,
                {
                  fontSize: 14 * textScale,
                  color: theme.colors.textPrimary,
                  textShadowColor: 'rgba(0,0,0,0.5)',
                  textShadowOffset: { width: 0, height: 1 },
                  textShadowRadius: 3,
                },
              ]}
              numberOfLines={2}
            >
              {category.name}
            </Text>
          </View>

          <View style={[styles.glowBorder, { borderColor: category.color + '60' }]} />
        </LinearGradient>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    borderRadius: 18,
    overflow: 'visible',
  },
  gradient: {
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 18,
    overflow: 'hidden',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  icon: {
    marginBottom: 10,
  },
  name: {
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: 'SpaceMono',
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
