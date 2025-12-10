
import React, { memo, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withSequence,
} from 'react-native-reanimated';
import { useAppTheme } from '@/contexts/ThemeContext';
import { useEnlightenedMode } from '@/contexts/EnlightenedModeContext';
import { HapticFeedback } from '@/utils/haptics';

export const SpaceHeader = memo(() => {
  const { theme, textScale } = useAppTheme();
  const { isEnlightened, tapCount, handleCrystalBallTap } = useEnlightenedMode();
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePress = useCallback(() => {
    HapticFeedback.soft();
    handleCrystalBallTap();
    
    scale.value = withSequence(
      withSpring(0.85, { damping: 10, stiffness: 400 }),
      withSpring(1.1, { damping: 10, stiffness: 400 }),
      withSpring(1, { damping: 10, stiffness: 400 })
    );

    if (tapCount >= 6) {
      HapticFeedback.heavy();
    }
  }, [handleCrystalBallTap, tapCount, scale]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.8}
        accessibilityLabel="Crystal ball logo"
        accessibilityHint="Tap 7 times quickly to activate Enlightened Mode"
        accessibilityRole="button"
      >
        <Animated.View style={animatedStyle}>
          <Text style={[
            styles.logo,
            isEnlightened && styles.enlightenedLogo,
          ]}>
            🔮
          </Text>
        </Animated.View>
      </TouchableOpacity>
      <Text style={[
        styles.title,
        {
          color: isEnlightened ? theme.colors.gold : theme.colors.textPrimary,
          fontSize: 28 * textScale,
        },
        isEnlightened && styles.enlightenedText,
      ]}>
        Paranormal Encyclopedia
      </Text>
      <Text style={[
        styles.subtitle,
        {
          color: theme.colors.textSecondary,
          fontSize: 13 * textScale,
        },
      ]}>
        Explore the unexplained mysteries of our world
      </Text>
      {tapCount > 0 && tapCount < 7 && (
        <Text style={[styles.tapIndicator, { color: theme.colors.gold }]}>
          {tapCount}/7
        </Text>
      )}
    </View>
  );
});

SpaceHeader.displayName = 'SpaceHeader';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
    marginBottom: 20,
  },
  logo: {
    fontSize: 64,
    marginBottom: 12,
    textShadowColor: 'rgba(139, 92, 246, 0.8)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
  },
  enlightenedLogo: {
    textShadowColor: 'rgba(212, 175, 55, 1)',
    textShadowRadius: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    fontFamily: 'SpaceMono',
    textAlign: 'center',
    marginBottom: 8,
    textShadowColor: 'rgba(139, 92, 246, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  enlightenedText: {
    textShadowColor: 'rgba(212, 175, 55, 0.8)',
    textShadowRadius: 15,
  },
  subtitle: {
    fontSize: 13,
    fontFamily: 'SpaceMono',
    textAlign: 'center',
    paddingHorizontal: 40,
  },
  tapIndicator: {
    fontSize: 10,
    fontFamily: 'SpaceMono',
    marginTop: 8,
    opacity: 0.6,
  },
});
