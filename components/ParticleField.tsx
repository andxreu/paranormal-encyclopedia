
import React, { memo, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withDelay,
  Easing,
} from 'react-native-reanimated';
import { useAppTheme } from '@/contexts/ThemeContext';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

interface ParticleProps {
  index: number;
  color: string;
  opacity: number;
}

const Particle = memo<ParticleProps>(({ index, color, opacity }) => {
  const translateX = useSharedValue(Math.random() * SCREEN_WIDTH);
  const translateY = useSharedValue(Math.random() * SCREEN_HEIGHT);
  const scale = useSharedValue(0.5 + Math.random() * 0.5);
  const particleOpacity = useSharedValue(opacity);

  useEffect(() => {
    const duration = 8000 + Math.random() * 4000;
    const delay = index * 200;

    translateX.value = withDelay(
      delay,
      withRepeat(
        withTiming(Math.random() * SCREEN_WIDTH, {
          duration,
          easing: Easing.inOut(Easing.ease),
        }),
        -1,
        true
      )
    );

    translateY.value = withDelay(
      delay,
      withRepeat(
        withTiming(Math.random() * SCREEN_HEIGHT, {
          duration,
          easing: Easing.inOut(Easing.ease),
        }),
        -1,
        true
      )
    );

    scale.value = withDelay(
      delay,
      withRepeat(
        withTiming(0.3 + Math.random() * 0.7, {
          duration: 3000,
          easing: Easing.inOut(Easing.ease),
        }),
        -1,
        true
      )
    );

    particleOpacity.value = withDelay(
      delay,
      withRepeat(
        withTiming(opacity * 0.3, {
          duration: 2000,
          easing: Easing.inOut(Easing.ease),
        }),
        -1,
        true
      )
    );
  }, [index, opacity, translateX, translateY, scale, particleOpacity]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { scale: scale.value },
      ],
      opacity: particleOpacity.value,
    };
  });

  return (
    <Animated.View
      style={[
        styles.particle,
        {
          backgroundColor: color,
          boxShadow: `0 0 10px ${color}`,
        },
        animatedStyle,
      ]}
    />
  );
});

Particle.displayName = 'Particle';

interface ParticleFieldProps {
  count?: number;
  color?: string;
}

export const ParticleField = memo<ParticleFieldProps>(({ count = 20, color }) => {
  const { theme } = useAppTheme();
  const particleColor = color || theme.colors.violet;

  return (
    <View style={styles.container} pointerEvents="none">
      {Array.from({ length: count }).map((_, index) => (
        <Particle
          key={`particle-${index}`}
          index={index}
          color={particleColor}
          opacity={theme.colors.particleOpacity}
        />
      ))}
    </View>
  );
});

ParticleField.displayName = 'ParticleField';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
  },
  particle: {
    position: 'absolute',
    width: 3,
    height: 3,
    borderRadius: 1.5,
  },
});
