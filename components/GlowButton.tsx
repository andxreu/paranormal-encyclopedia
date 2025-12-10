
import React, { useEffect, memo } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
  Easing,
  withSpring,
} from 'react-native-reanimated';
import { useAppTheme } from '@/contexts/ThemeContext';
import { HapticFeedback } from '@/utils/haptics';

interface GlowButtonProps {
  onPress?: () => void;
  icon?: string;
  size?: number;
}

export const GlowButton = memo<GlowButtonProps>(({ onPress, icon = '⚡', size = 56 }) => {
  const { theme } = useAppTheme();
  const scale = useSharedValue(1);
  const glowOpacity = useSharedValue(0.6);
  const rippleScale = useSharedValue(1);
  const rippleOpacity = useSharedValue(0);

  useEffect(() => {
    scale.value = withRepeat(
      withSequence(
        withTiming(1.08, {
          duration: 1800,
          easing: Easing.inOut(Easing.ease),
        }),
        withTiming(1, {
          duration: 1800,
          easing: Easing.inOut(Easing.ease),
        })
      ),
      -1,
      false
    );

    glowOpacity.value = withRepeat(
      withSequence(
        withTiming(1, {
          duration: 1500,
          easing: Easing.inOut(Easing.ease),
        }),
        withTiming(0.6, {
          duration: 1500,
          easing: Easing.inOut(Easing.ease),
        })
      ),
      -1,
      false
    );
  }, [scale, glowOpacity]);

  const animatedButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const glowStyle = useAnimatedStyle(() => {
    return {
      opacity: glowOpacity.value,
    };
  });

  const rippleStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: rippleScale.value }],
      opacity: rippleOpacity.value,
    };
  });

  const handlePress = () => {
    HapticFeedback.medium();
    
    rippleScale.value = 1;
    rippleOpacity.value = 0.8;
    
    rippleScale.value = withTiming(2, {
      duration: 600,
      easing: Easing.out(Easing.ease),
    });
    
    rippleOpacity.value = withTiming(0, {
      duration: 600,
      easing: Easing.out(Easing.ease),
    });

    scale.value = withSequence(
      withSpring(0.9, { damping: 10, stiffness: 400 }),
      withSpring(1.1, { damping: 10, stiffness: 400 }),
      withSpring(1, { damping: 10, stiffness: 400 })
    );

    onPress?.();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.9}
        accessibilityLabel="Glow button"
        accessibilityHint="Get a random paranormal fact"
        accessibilityRole="button"
      >
        <Animated.View style={[styles.ripple, rippleStyle]}>
          <LinearGradient
            colors={[`${theme.colors.gold}40`, `${theme.colors.gold}10`]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.rippleGradient, { width: size * 2, height: size * 2, borderRadius: size }]}
          />
        </Animated.View>

        <Animated.View style={[styles.glowContainer, glowStyle]}>
          <LinearGradient
            colors={[`${theme.colors.gold}60`, `${theme.colors.gold}30`, 'transparent']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.glow, { width: size + 30, height: size + 30, borderRadius: (size + 30) / 2 }]}
          />
        </Animated.View>
        
        <Animated.View style={animatedButtonStyle}>
          <LinearGradient
            colors={[theme.colors.gold, theme.colors.indigo, theme.colors.violet]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.gradient, { width: size, height: size, borderRadius: size / 2 }]}
          >
            <Text style={[styles.emoji, { fontSize: size * 0.5 }]}>{icon}</Text>
          </LinearGradient>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
});

GlowButton.displayName = 'GlowButton';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 100,
    right: 20,
    alignItems: 'center',
    zIndex: 1000,
  },
  ripple: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rippleGradient: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  glowContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  glow: {
    boxShadow: '0px 0px 40px rgba(212, 175, 55, 0.8)',
    elevation: 20,
  },
  gradient: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    boxShadow: '0px 8px 32px rgba(212, 175, 55, 0.6)',
    elevation: 12,
  },
  emoji: {
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
});
