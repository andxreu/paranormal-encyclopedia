
import React, { useEffect, useMemo } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withDelay,
  Easing,
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

interface StarFieldProps {
  starCount?: number;
  containerHeight?: number;
}

const StarParticle: React.FC<{ star: Star }> = ({ star }) => {
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withDelay(
      star.delay,
      withRepeat(
        withTiming(1, {
          duration: star.duration,
          easing: Easing.inOut(Easing.ease),
        }),
        -1,
        true
      )
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return (
    <Animated.View
      style={[
        styles.star,
        {
          left: star.x,
          top: star.y,
          width: star.size,
          height: star.size,
          borderRadius: star.size / 2,
        },
        animatedStyle,
      ]}
    />
  );
};

export const StarField: React.FC<StarFieldProps> = ({ 
  starCount = 30,
  containerHeight = 300,
}) => {
  const stars = useMemo(() => {
    return Array.from({ length: starCount }, (_, i) => ({
      id: i,
      x: Math.random() * width,
      y: Math.random() * containerHeight,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 2000,
      duration: Math.random() * 2000 + 1500,
    }));
  }, [starCount, containerHeight]);

  return (
    <View style={[styles.container, { height: containerHeight }]}>
      {stars.map((star) => (
        <StarParticle key={star.id} star={star} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
  },
  star: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 0px 4px rgba(255, 255, 255, 0.8)',
    elevation: 2,
  },
});
