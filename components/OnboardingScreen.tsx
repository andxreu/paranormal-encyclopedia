
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  withSequence,
  Easing,
  runOnJS,
} from 'react-native-reanimated';
import { ParticleEffect } from './ParticleEffect';
import { HapticFeedback } from '@/utils/haptics';

const { width, height } = Dimensions.get('window');

interface OnboardingScreenProps {
  onComplete: () => void;
}

const features = [
  {
    icon: '🔮',
    title: 'Explore Mysteries',
    description: 'Discover 10 categories of paranormal phenomena',
  },
  {
    icon: '⚡',
    title: 'Random Facts',
    description: 'Tap the lightning button for instant paranormal knowledge',
  },
  {
    icon: '🌙',
    title: 'Daily Mysteries',
    description: 'Fresh mysteries curated for you every day',
  },
  {
    icon: '🔍',
    title: 'Smart Search',
    description: 'Find any topic or fact with intelligent search',
  },
];

export const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.8);
  const contentOpacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withTiming(1, {
      duration: 800,
      easing: Easing.inOut(Easing.ease),
    });

    scale.value = withTiming(1, {
      duration: 800,
      easing: Easing.out(Easing.back(1.2)),
    });

    contentOpacity.value = withDelay(
      400,
      withTiming(1, {
        duration: 600,
        easing: Easing.inOut(Easing.ease),
      })
    );
  }, [opacity, scale, contentOpacity]);

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const animatedContentStyle = useAnimatedStyle(() => {
    return {
      opacity: contentOpacity.value,
      transform: [{ scale: scale.value }],
    };
  });

  const handleNext = () => {
    HapticFeedback.light();
    if (currentStep < features.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handleSkip = () => {
    HapticFeedback.medium();
    handleComplete();
  };

  const handleComplete = () => {
    contentOpacity.value = withTiming(0, {
      duration: 400,
      easing: Easing.inOut(Easing.ease),
    });

    opacity.value = withSequence(
      withTiming(1, { duration: 200 }),
      withTiming(0, {
        duration: 400,
        easing: Easing.inOut(Easing.ease),
      })
    );

    setTimeout(() => {
      onComplete();
    }, 600);
  };

  const currentFeature = features[currentStep];

  return (
    <Animated.View style={[styles.container, animatedContainerStyle]}>
      <LinearGradient
        colors={['#0a0118', '#1a0b2e', '#2d1b4e', '#4a1d7e']}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <ParticleEffect count={20} color="rgba(139, 92, 246, 0.4)" />

        <Animated.View style={[styles.content, animatedContentStyle]}>
          <View style={styles.header}>
            <Text style={styles.logo}>🔮</Text>
            <Text style={styles.title}>PARANORMAL</Text>
            <Text style={styles.subtitle}>ENCYCLOPEDIA</Text>
          </View>

          <View style={styles.featureContainer}>
            <Text style={styles.featureIcon}>{currentFeature.icon}</Text>
            <Text style={styles.featureTitle}>{currentFeature.title}</Text>
            <Text style={styles.featureDescription}>{currentFeature.description}</Text>
          </View>

          <View style={styles.pagination}>
            {features.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.paginationDot,
                  index === currentStep && styles.paginationDotActive,
                ]}
              />
            ))}
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.skipButton}
              onPress={handleSkip}
              activeOpacity={0.7}
            >
              <Text style={styles.skipButtonText}>Skip</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.nextButton}
              onPress={handleNext}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={['#8B5CF6', '#6366F1', '#D4AF37']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.nextButtonGradient}
              >
                <Text style={styles.nextButtonText}>
                  {currentStep === features.length - 1 ? 'Get Started' : 'Next'}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </LinearGradient>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 9999,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: width * 0.85,
    alignItems: 'center',
    paddingVertical: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 60,
  },
  logo: {
    fontSize: 80,
    marginBottom: 20,
    textShadowColor: 'rgba(139, 92, 246, 0.8)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 4,
    fontFamily: 'SpaceMono',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 6,
    marginTop: 8,
    fontFamily: 'SpaceMono',
    opacity: 0.9,
  },
  featureContainer: {
    alignItems: 'center',
    marginBottom: 60,
    minHeight: 200,
  },
  featureIcon: {
    fontSize: 100,
    marginBottom: 24,
    textShadowColor: 'rgba(139, 92, 246, 0.6)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 16,
  },
  featureTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    fontFamily: 'SpaceMono',
    marginBottom: 16,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  featureDescription: {
    fontSize: 16,
    color: '#B0B0B0',
    fontFamily: 'SpaceMono',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  pagination: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 40,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  paginationDotActive: {
    width: 24,
    backgroundColor: '#8B5CF6',
    boxShadow: '0px 0px 12px rgba(139, 92, 246, 0.8)',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 16,
    width: '100%',
  },
  skipButton: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    alignItems: 'center',
  },
  skipButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    fontFamily: 'SpaceMono',
  },
  nextButton: {
    flex: 2,
    borderRadius: 16,
    overflow: 'hidden',
    boxShadow: '0px 8px 24px rgba(139, 92, 246, 0.6)',
    elevation: 8,
  },
  nextButtonGradient: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    fontFamily: 'SpaceMono',
  },
});
