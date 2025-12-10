
import React, { useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import * as Haptics from 'expo-haptics';

interface LightningButtonProps {
  onPress?: () => void;
}

export const LightningButton: React.FC<LightningButtonProps> = ({ onPress }) => {
  const scale = useSharedValue(1);
  const rotate = useSharedValue(0);
  const glowOpacity = useSharedValue(0.5);

  useEffect(() => {
    scale.value = withRepeat(
      withSequence(
        withTiming(1.1, {
          duration: 1500,
          easing: Easing.inOut(Easing.ease),
        }),
        withTiming(1, {
          duration: 1500,
          easing: Easing.inOut(Easing.ease),
        })
      ),
      -1,
      false
    );

    rotate.value = withRepeat(
      withTiming(360, {
        duration: 20000,
        easing: Easing.linear,
      }),
      -1,
      false
    );

    glowOpacity.value = withRepeat(
      withSequence(
        withTiming(0.9, {
          duration: 1200,
          easing: Easing.inOut(Easing.ease),
        }),
        withTiming(0.5, {
          duration: 1200,
          easing: Easing.inOut(Easing.ease),
        })
      ),
      -1,
      false
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }, { rotate: `${rotate.value}deg` }],
    };
  });

  const glowStyle = useAnimatedStyle(() => {
    return {
      opacity: glowOpacity.value,
    };
  });

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    onPress?.();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.8}
      >
        <Animated.View style={[styles.glowContainer, glowStyle]}>
          <LinearGradient
            colors={['rgba(255, 215, 0, 0.4)', 'rgba(255, 165, 0, 0.2)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.glow}
          />
        </Animated.View>
        
        <Animated.View style={animatedStyle}>
          <LinearGradient
            colors={['#FFD700', '#FFA500', '#FF6B6B']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradient}
          >
            <Text style={styles.emoji}>⚡</Text>
          </LinearGradient>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 100,
    right: 20,
    alignItems: 'center',
    zIndex: 1000,
  },
  glowContainer: {
    position: 'absolute',
    top: -15,
    left: -15,
    right: -15,
    bottom: -15,
  },
  glow: {
    flex: 1,
    borderRadius: 35,
    boxShadow: '0px 0px 30px rgba(255, 215, 0, 0.6)',
    elevation: 15,
  },
  gradient: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    boxShadow: '0px 6px 24px rgba(255, 165, 0, 0.5)',
    elevation: 10,
  },
  emoji: {
    fontSize: 28,
  },
});
