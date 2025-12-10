
import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withDelay,
  Easing,
} from 'react-native-reanimated';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

interface ParticleEffectProps {
  count?: number;
  color?: string;
}

const ParticleItem: React.FC<{ particle: Particle; color: string }> = ({ particle, color }) => {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(0);

  useEffect(() => {
    opacity.value = withDelay(
      particle.delay,
      withRepeat(
        withTiming(1, {
          duration: particle.duration / 2,
          easing: Easing.inOut(Easing.ease),
        }),
        -1,
        true
      )
    );

    translateY.value = withDelay(
      particle.delay,
      withRepeat(
        withTiming(-20, {
          duration: particle.duration,
          easing: Easing.inOut(Easing.ease),
        }),
        -1,
        true
      )
    );
  }, [opacity, translateY, particle.delay, particle.duration]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <Animated.View
      style={[
        styles.particle,
        {
          left: particle.x,
          top: particle.y,
          width: particle.size,
          height: particle.size,
          backgroundColor: color,
        },
        animatedStyle,
      ]}
    />
  );
};

export const ParticleEffect: React.FC<ParticleEffectProps> = ({
  count = 8,
  color = 'rgba(139, 92, 246, 0.6)',
}) => {
  const particles: Particle[] = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 2000 + 2000,
    delay: Math.random() * 1000,
  }));

  return (
    <View style={styles.container}>
      {particles.map((particle) => (
        <ParticleItem key={particle.id} particle={particle} color={color} />
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
    borderRadius: 100,
    boxShadow: '0px 0px 8px rgba(139, 92, 246, 0.8)',
  },
});
