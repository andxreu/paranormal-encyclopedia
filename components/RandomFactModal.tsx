
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
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

const CLOSE_BUTTON_PHRASES = [
  'Wow, that\'s wild!',
  'Spooky!',
  'Wait, what?',
  'Mind blown!',
  'Eerie vibes!',
  'That\'s uncanny!',
  'Chilling revelation!',
  'Mystical insight!',
  'Freaky fact!',
  'Unbelievable!',
];

const getRandomPhrase = () => {
  const randomIndex = Math.floor(Math.random() * CLOSE_BUTTON_PHRASES.length);
  return CLOSE_BUTTON_PHRASES[randomIndex];
};

export const RandomFactModal: React.FC<RandomFactModalProps> = ({ visible, fact, onClose }) => {
  const scale = useSharedValue(0.8);
  const opacity = useSharedValue(0);
  const [closeButtonText, setCloseButtonText] = useState(getRandomPhrase());

  useEffect(() => {
    if (visible) {
      setCloseButtonText(getRandomPhrase());
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

            <TouchableOpacity
              style={styles.closeButton}
              onPress={handleClose}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={['#8B5CF6', '#6366F1']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.closeButtonGradient}
              >
                <Text style={styles.closeButtonText}>{closeButtonText}</Text>
              </LinearGradient>
            </TouchableOpacity>

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
    textShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
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
    textShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
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
  closeButton: {
    borderRadius: 14,
    overflow: 'hidden',
    boxShadow: '0px 4px 16px rgba(139, 92, 246, 0.4)',
    elevation: 6,
    zIndex: 2,
  },
  closeButtonGradient: {
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButtonText: {
    fontSize: 16,
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
