
import React, { memo, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { useAppTheme } from '@/contexts/ThemeContext';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

interface AnimatedGradientBackgroundProps {
  children?: React.ReactNode;
}

export const AnimatedGradientBackground = memo<AnimatedGradientBackgroundProps>(({ children }) => {
  const { theme } = useAppTheme();
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, {
        duration: 8000,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      true
    );
  }, [progress]);

  const animatedProps = useAnimatedProps(() => {
    const startX = 0.2 + progress.value * 0.3;
    const startY = 0.1 + progress.value * 0.2;
    const endX = 0.8 - progress.value * 0.3;
    const endY = 0.9 - progress.value * 0.2;

    return {
      start: { x: startX, y: startY },
      end: { x: endX, y: endY },
    };
  });

  return (
    <AnimatedLinearGradient
      colors={theme.colors.backgroundGradient}
      style={styles.gradient}
      animatedProps={animatedProps}
    >
      {children}
    </AnimatedLinearGradient>
  );
});

AnimatedGradientBackground.displayName = 'AnimatedGradientBackground';

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});
