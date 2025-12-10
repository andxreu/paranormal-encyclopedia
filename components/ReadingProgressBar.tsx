
import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import { useAppTheme } from '@/contexts/ThemeContext';

interface ReadingProgressBarProps {
  scrollY: Animated.SharedValue<number>;
  contentHeight: number;
  screenHeight: number;
}

export const ReadingProgressBar = memo<ReadingProgressBarProps>(({ 
  scrollY, 
  contentHeight, 
  screenHeight 
}) => {
  const { theme } = useAppTheme();

  const progressStyle = useAnimatedStyle(() => {
    const maxScroll = contentHeight - screenHeight;
    const progress = interpolate(
      scrollY.value,
      [0, maxScroll],
      [0, 1],
      Extrapolate.CLAMP
    );

    return {
      width: `${progress * 100}%`,
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.progress,
          {
            backgroundColor: theme.colors.violet,
            boxShadow: `0 0 10px ${theme.colors.violet}`,
          },
          progressStyle,
        ]}
      />
    </View>
  );
});

ReadingProgressBar.displayName = 'ReadingProgressBar';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    zIndex: 1000,
  },
  progress: {
    height: '100%',
  },
});
