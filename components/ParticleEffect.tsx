
import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
  withDelay,
  Easing,
} from 'react-native-reanimated';
import { useAppTheme } from '@/contexts/ThemeContext';

interface ParticleProps {
  delay: number;
  duration: number;
  color: string;
  size: number;
  startX: number;
  startY: number;
  opacity: number;
}

const Particle: React.FC<ParticleProps> = ({ delay, duration, color, size, startX, startY, opacity: baseOpacity }) => {
  const translateY = useSharedValue(0);
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.5);

  useEffect(() => {
    translateY.value = withDelay(
      delay,
      withRepeat(
        withSequence(
          withTiming(-30, {
            duration: duration,
            easing: Easing.inOut(Easing.ease),
          }),
          withTiming(0, {
            duration: duration,
            easing: Easing.inOut(Easing.ease),
          })
        ),
        -1,
        false
      )
    );

    opacity.value = withDelay(
      delay,
      withRepeat(
        withSequence(
          withTiming(baseOpacity, {
            duration: duration / 2,
            easing: Easing.inOut(Easing.ease),
          }),
          withTiming(0, {
            duration: duration / 2,
            easing: Easing.inOut(Easing.ease),
          })
        ),
        -1,
        false
      )
    );

    scale.value = withDelay(
      delay,
      withRepeat(
        withSequence(
          withTiming(1, {
            duration: duration / 2,
            easing: Easing.inOut(Easing.ease),
          }),
          withTiming(0.5, {
            duration: duration / 2,
            easing: Easing.inOut(Easing.ease),
          })
        ),
        -1,
        false
      )
    );
  }, [delay, duration, translateY, opacity, scale, baseOpacity]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: translateY.value },
        { scale: scale.value },
      ],
      opacity: opacity.value,
    };
  });

  return (
    <Animated.View
      style={[
        styles.particle,
        {
          backgroundColor: color,
          width: size,
          height: size,
          borderRadius: size / 2,
          left: startX,
          top: startY,
        },
        animatedStyle,
      ]}
    />
  );
};

interface ParticleEffectProps {
  count?: number;
  color?: string;
}

export const ParticleEffect: React.FC<ParticleEffectProps> = ({ count = 8, color = 'rgba(139, 92, 246, 0.6)' }) => {
  const { theme } = useAppTheme();
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    delay: Math.random() * 2000,
    duration: 2000 + Math.random() * 2000,
    size: 3 + Math.random() * 4,
    startX: Math.random() * 100,
    startY: Math.random() * 100,
  }));

  return (
    <View style={styles.container}>
      {particles.map((particle) => (
        <Particle
          key={particle.id}
          delay={particle.delay}
          duration={particle.duration}
          color={color}
          size={particle.size}
          startX={particle.startX}
          startY={particle.startY}
          opacity={theme.colors.particleOpacity * 0.8}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
    pointerEvents: 'none',
  },
  particle: {
    position: 'absolute',
    boxShadow: '0px 0px 8px rgba(139, 92, 246, 0.6)',
    elevation: 4,
  },
});
