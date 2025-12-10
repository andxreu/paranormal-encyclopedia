
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withSequence,
  Easing,
} from 'react-native-reanimated';
import { StarField } from './StarField';
import { useAppTheme } from '@/contexts/ThemeContext';

const { width } = Dimensions.get('window');

export const SpaceHeader: React.FC = () => {
  const { theme } = useAppTheme();
  const opacity = useSharedValue(0.6);
  const scale = useSharedValue(1);

  useEffect(() => {
    opacity.value = withRepeat(
      withSequence(
        withTiming(1, {
          duration: 2000,
          easing: Easing.inOut(Easing.ease),
        }),
        withTiming(0.6, {
          duration: 2000,
          easing: Easing.inOut(Easing.ease),
        })
      ),
      -1,
      false
    );

    scale.value = withRepeat(
      withSequence(
        withTiming(1.05, {
          duration: 2000,
          easing: Easing.inOut(Easing.ease),
        }),
        withTiming(1, {
          duration: 2000,
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
      opacity: opacity.value,
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#6B21A8', '#7C3AED', '#8B5CF6', '#A855F7']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <StarField starCount={40} containerHeight={280} />
        
        <View style={styles.overlay} />
        
        <View style={styles.content}>
          <Animated.View style={[styles.iconContainer, animatedStyle]}>
            <Text style={styles.emoji}>🔮</Text>
          </Animated.View>
          <Text style={styles.title}>PARANORMAL</Text>
          <Text style={styles.subtitle}>ENCYCLOPEDIA</Text>
          <View style={styles.divider} />
          <Text style={styles.tagline}>✨ Explore the Unknown ✨</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width - 32,
    height: 280,
    borderRadius: 24,
    overflow: 'hidden',
    marginBottom: 20,
    boxShadow: '0px 8px 32px rgba(139, 92, 246, 0.5)',
    elevation: 12,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
  },
  content: {
    alignItems: 'center',
    zIndex: 2,
  },
  iconContainer: {
    marginBottom: 12,
  },
  emoji: {
    fontSize: 64,
  },
  title: {
    fontSize: 36,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 3,
    fontFamily: 'SpaceMono',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 5,
    marginTop: 6,
    fontFamily: 'SpaceMono',
  },
  divider: {
    width: 60,
    height: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    marginVertical: 12,
    borderRadius: 1,
  },
  tagline: {
    fontSize: 13,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.95)',
    fontFamily: 'SpaceMono',
  },
});
