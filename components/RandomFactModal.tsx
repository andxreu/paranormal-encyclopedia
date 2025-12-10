
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Share } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  Easing,
} from 'react-native-reanimated';
import { ParanormalFact } from '@/data/paranormal/facts';
import { ParticleEffect } from './ParticleEffect';
import { HapticFeedback } from '@/utils/haptics';

interface RandomFactModalProps {
  visible: boolean;
  fact: ParanormalFact | null;
  onClose: () => void;
}

export const RandomFactModal: React.FC<RandomFactModalProps> = ({ visible, fact, onClose }) => {
  const scale = useSharedValue(0.8);
  const opacity = useSharedValue(0);

  React.useEffect(() => {
    if (visible) {
      scale.value = withSpring(1, {
        damping: 15,
        stiffness: 200,
      });
      opacity.value = withTiming(1, {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      });
    } else {
      scale.value = withTiming(0.8, {
        duration: 200,
        easing: Easing.inOut(Easing.ease),
      });
      opacity.value = withTiming(0, {
        duration: 200,
        easing: Easing.inOut(Easing.ease),
      });
    }
  }, [visible, scale, opacity]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      opacity: opacity.value,
    };
  });

  const handleShare = async () => {
    if (!fact) {
      return;
    }

    try {
      HapticFeedback.light();
      await Share.share({
        message: `🔮 Paranormal Fact:\n\n${fact.fact}\n\nCategory: ${fact.categoryName}`,
        title: 'Paranormal Encyclopedia Fact',
      });
    } catch (error) {
      console.error('Error sharing fact:', error);
    }
  };

  const handleClose = () => {
    HapticFeedback.light();
    onClose();
  };

  if (!fact) {
    return null;
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      onRequestClose={handleClose}
    >
      <View style={styles.modalOverlay}>
        <BlurView intensity={80} style={StyleSheet.absoluteFill} tint="dark" />
        
        <Animated.View style={[styles.modalContent, animatedStyle]}>
          <LinearGradient
            colors={[fact.color + '80', fact.color + '40', 'rgba(42, 27, 78, 0.95)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.factCard}
          >
            <ParticleEffect count={12} color={fact.color + '60'} />
            
            <View style={styles.factHeader}>
              <Text style={styles.lightningIcon}>⚡</Text>
              <Text style={[styles.categoryBadge, { color: fact.color }]}>
                {fact.categoryName}
              </Text>
            </View>

            <Text style={styles.factTitle}>Random Fact</Text>
            <Text style={styles.factText}>{fact.fact}</Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.shareButton]}
                onPress={handleShare}
                activeOpacity={0.8}
              >
                <Text style={styles.buttonIcon}>📤</Text>
                <Text style={styles.buttonText}>Share</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, styles.closeButton]}
                onPress={handleClose}
                activeOpacity={0.8}
              >
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
            </View>

            <View style={[styles.cardBorder, { borderColor: fact.color + '60' }]} />
          </LinearGradient>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    width: '85%',
    maxWidth: 400,
  },
  factCard: {
    padding: 24,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: 'rgba(139, 92, 246, 0.5)',
    boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.5)',
    elevation: 12,
    overflow: 'hidden',
  },
  factHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
    zIndex: 2,
  },
  lightningIcon: {
    fontSize: 36,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  categoryBadge: {
    fontSize: 12,
    fontWeight: '700',
    fontFamily: 'SpaceMono',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  factTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#FFFFFF',
    fontFamily: 'SpaceMono',
    marginBottom: 16,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
    zIndex: 2,
  },
  factText: {
    fontSize: 15,
    color: '#FFFFFF',
    lineHeight: 24,
    fontFamily: 'SpaceMono',
    marginBottom: 24,
    zIndex: 2,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
    zIndex: 2,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 12,
    gap: 8,
  },
  shareButton: {
    backgroundColor: 'rgba(139, 92, 246, 0.6)',
    borderWidth: 1,
    borderColor: 'rgba(139, 92, 246, 0.8)',
  },
  closeButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  buttonIcon: {
    fontSize: 18,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
    fontFamily: 'SpaceMono',
  },
  cardBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 24,
    borderWidth: 2,
    opacity: 0.4,
  },
});
