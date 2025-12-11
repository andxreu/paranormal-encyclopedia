
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withSequence,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { useAppTheme } from '@/contexts/ThemeContext';
import { VeilRank } from '@/utils/gamification';
import * as Haptics from 'expo-haptics';

interface RankUpModalProps {
  visible: boolean;
  rank: VeilRank | null;
  onClose: () => void;
}

export const RankUpModal: React.FC<RankUpModalProps> = ({ visible, rank, onClose }) => {
  const { theme, textScale } = useAppTheme();
  const scale = useSharedValue(0);
  const iconScale = useSharedValue(0);
  const glowOpacity = useSharedValue(0);

  useEffect(() => {
    if (visible && rank) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      
      scale.value = withSpring(1, {
        damping: 15,
        stiffness: 200,
      });

      iconScale.value = withSequence(
        withTiming(1.3, { duration: 300, easing: Easing.out(Easing.ease) }),
        withSpring(1, { damping: 10, stiffness: 200 })
      );

      glowOpacity.value = withSequence(
        withTiming(1, { duration: 500 }),
        withTiming(0.7, { duration: 1000 })
      );
    } else {
      scale.value = 0;
      iconScale.value = 0;
      glowOpacity.value = 0;
    }
  }, [visible, rank, scale, iconScale, glowOpacity]);

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const iconStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: iconScale.value }],
    };
  });

  const glowStyle = useAnimatedStyle(() => {
    return {
      opacity: glowOpacity.value,
    };
  });

  if (!rank) return null;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <BlurView intensity={80} tint="dark" style={styles.blurView}>
          <TouchableOpacity 
            style={styles.touchableOverlay} 
            activeOpacity={1} 
            onPress={onClose}
          >
            <Animated.View style={[styles.container, containerStyle]}>
              <LinearGradient
                colors={[rank.color + '40', rank.color + '20', theme.colors.cardBg]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.card}
              >
                <Animated.View style={[styles.glowCircle, glowStyle, { backgroundColor: rank.auraColor }]} />
                
                <Animated.Text style={[styles.icon, iconStyle]}>
                  {rank.icon}
                </Animated.Text>

                <Text style={[styles.title, { color: theme.colors.textPrimary, fontSize: 28 * textScale }]}>
                  Rank Ascended!
                </Text>

                <Text style={[styles.rankName, { color: rank.color, fontSize: 32 * textScale }]}>
                  {rank.name}
                </Text>

                <Text style={[styles.description, { color: theme.colors.textSecondary, fontSize: 14 * textScale }]}>
                  You have pierced deeper into the veil of mysteries
                </Text>

                <TouchableOpacity
                  onPress={onClose}
                  style={[styles.button, { backgroundColor: rank.color + '30', borderColor: rank.color }]}
                >
                  <Text style={[styles.buttonText, { color: theme.colors.textPrimary, fontSize: 16 * textScale }]}>
                    Continue
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </Animated.View>
          </TouchableOpacity>
        </BlurView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  blurView: {
    flex: 1,
  },
  touchableOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '85%',
    maxWidth: 400,
  },
  card: {
    borderRadius: 24,
    padding: 32,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(139, 92, 246, 0.5)',
    boxShadow: '0px 12px 48px rgba(0, 0, 0, 0.6)',
    elevation: 20,
  },
  glowCircle: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    top: '30%',
    opacity: 0.4,
  },
  icon: {
    fontSize: 80,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    fontFamily: 'SpaceMono',
    marginBottom: 8,
    textAlign: 'center',
  },
  rankName: {
    fontSize: 32,
    fontWeight: '900',
    fontFamily: 'SpaceMono',
    marginBottom: 16,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },
  description: {
    fontSize: 14,
    fontFamily: 'SpaceMono',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
  },
  button: {
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'SpaceMono',
  },
});
