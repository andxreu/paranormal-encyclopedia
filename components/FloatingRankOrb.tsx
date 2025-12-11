
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
  withSpring,
  Easing,
} from 'react-native-reanimated';
import { gamificationService, VeilRank } from '@/utils/gamification';
import * as Haptics from 'expo-haptics';

export const FloatingRankOrb: React.FC = () => {
  const [currentRank, setCurrentRank] = useState<VeilRank | null>(null);
  const router = useRouter();
  
  const scale = useSharedValue(1);
  const pulseScale = useSharedValue(1);
  const glowOpacity = useSharedValue(0.5);

  useEffect(() => {
    loadRank();

    pulseScale.value = withRepeat(
      withSequence(
        withTiming(1.15, { duration: 1000, easing: Easing.inOut(Easing.ease) }),
        withTiming(1, { duration: 1000, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      false
    );

    glowOpacity.value = withRepeat(
      withSequence(
        withTiming(0.8, { duration: 1200, easing: Easing.inOut(Easing.ease) }),
        withTiming(0.5, { duration: 1200, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      false
    );
  }, [pulseScale, glowOpacity]);

  const loadRank = async () => {
    const progress = await gamificationService.getProgress();
    const rank = gamificationService.getCurrentRank(progress.totalPoints);
    setCurrentRank(rank);
  };

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    router.push('/(tabs)/arcana' as any);
  };

  const handlePressIn = () => {
    scale.value = withSpring(0.9, {
      damping: 15,
      stiffness: 400,
    });
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, {
      damping: 15,
      stiffness: 400,
    });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const pulseStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: pulseScale.value }],
    };
  });

  const glowStyle = useAnimatedStyle(() => {
    return {
      opacity: glowOpacity.value,
    };
  });

  if (!currentRank) return null;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handlePress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={1}
        accessibilityLabel="View your rank progress"
        accessibilityRole="button"
      >
        <Animated.View style={[styles.glowContainer, glowStyle]}>
          <LinearGradient
            colors={[currentRank.auraColor, 'transparent']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.glow}
          />
        </Animated.View>

        <Animated.View style={[styles.pulseContainer, pulseStyle]}>
          <View style={[styles.pulseRing, { borderColor: currentRank.color }]} />
        </Animated.View>

        <Animated.View style={animatedStyle}>
          <LinearGradient
            colors={[currentRank.color, currentRank.color + 'CC']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.orb}
          >
            <Text style={styles.icon}>{currentRank.icon}</Text>
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
    left: 20,
    zIndex: 999,
  },
  glowContainer: {
    position: 'absolute',
    top: -20,
    left: -20,
    right: -20,
    bottom: -20,
  },
  glow: {
    flex: 1,
    borderRadius: 40,
    boxShadow: '0px 0px 40px rgba(139, 92, 246, 0.6)',
    elevation: 15,
  },
  pulseContainer: {
    position: 'absolute',
    top: -8,
    left: -8,
    right: -8,
    bottom: -8,
  },
  pulseRing: {
    flex: 1,
    borderRadius: 32,
    borderWidth: 2,
    opacity: 0.6,
  },
  orb: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.4)',
    elevation: 8,
  },
  icon: {
    fontSize: 24,
  },
});
