
import React, { useEffect } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { useAppTheme } from '@/contexts/ThemeContext';
import { useRouter } from 'expo-router';

interface FloatingOracleButtonProps {
  onPress?: () => void;
}

export const FloatingOracleButton: React.FC<FloatingOracleButtonProps> = ({ onPress }) => {
  const { theme } = useAppTheme();
  const router = useRouter();
  const scale = useSharedValue(1);
  const rotate = useSharedValue(0);

  useEffect(() => {
    scale.value = withRepeat(
      withSequence(
        withTiming(1.05, {
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
        }),
        withTiming(1, {
          duration: 1000,
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
  }, [scale, rotate]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: scale.value },
        { rotate: `${rotate.value}deg` },
      ],
    };
  });

  const goldColor = theme?.colors?.gold || '#d4af37';

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      // Default behavior: navigate to Arcana screen
      router.push('/(tabs)/arcana');
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.8}
      accessibilityLabel="Navigate to Order of the Veil"
      accessibilityHint="View your progress and achievements"
      accessibilityRole="button"
    >
      <Animated.View style={animatedStyle}>
        <LinearGradient
          colors={['#8B5CF6', '#6366F1', goldColor]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          <Text style={styles.emoji}>🔮</Text>
        </LinearGradient>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gradient: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    boxShadow: '0px 4px 16px rgba(139, 92, 246, 0.6)',
    elevation: 8,
  },
  emoji: {
    fontSize: 18,
  },
});
