
import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withSequence,
  withDelay,
  Easing,
  runOnJS,
  runOnUI,
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  emoji: string;
  delay: number;
}

interface GothicConfettiProps {
  visible: boolean;
  onComplete?: () => void;
}

const GOTHIC_EMOJIS = ['🔮', '👁️', '🌙', '⚡', '✨', '🕯️', '💀', '🦇', '🌟', '💎', '🔯', '👻'];

export const GothicConfetti: React.FC<GothicConfettiProps> = ({ visible, onComplete }) => {
  const opacity = useSharedValue(0);

  useEffect(() => {
    if (visible) {
      runOnUI(() => {
        'worklet';
        opacity.value = 1;
        opacity.value = withDelay(
          2500,
          withTiming(0, { duration: 500 }, (finished) => {
            if (finished && onComplete) {
              runOnJS(onComplete)();
            }
          })
        );
      })();
    }
  }, [visible, opacity, onComplete]);

  const containerStyle = useAnimatedStyle(() => {
    'worklet';
    return {
      opacity: opacity.value,
    };
  });

  if (!visible) return null;

  const pieces: ConfettiPiece[] = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * width,
    y: -50 - Math.random() * 100,
    rotation: Math.random() * 360,
    scale: 0.5 + Math.random() * 0.8,
    emoji: GOTHIC_EMOJIS[Math.floor(Math.random() * GOTHIC_EMOJIS.length)],
    delay: Math.random() * 300,
  }));

  return (
    <Animated.View style={[styles.container, containerStyle]}>
      {pieces.map((piece) => (
        <ConfettiPieceComponent key={piece.id} piece={piece} />
      ))}
    </Animated.View>
  );
};

const ConfettiPieceComponent: React.FC<{ piece: ConfettiPiece }> = ({ piece }) => {
  const translateY = useSharedValue(piece.y);
  const translateX = useSharedValue(piece.x);
  const rotation = useSharedValue(piece.rotation);
  const scale = useSharedValue(0);

  useEffect(() => {
    runOnUI(() => {
      'worklet';
      scale.value = withDelay(
        piece.delay,
        withSpring(piece.scale, {
          damping: 10,
          stiffness: 100,
        })
      );

      translateY.value = withDelay(
        piece.delay,
        withTiming(height + 100, {
          duration: 2500 + Math.random() * 1000,
          easing: Easing.inOut(Easing.quad),
        })
      );

      translateX.value = withDelay(
        piece.delay,
        withSequence(
          withTiming(piece.x + (Math.random() - 0.5) * 100, {
            duration: 1000,
            easing: Easing.inOut(Easing.sin),
          }),
          withTiming(piece.x + (Math.random() - 0.5) * 100, {
            duration: 1000,
            easing: Easing.inOut(Easing.sin),
          })
        )
      );

      rotation.value = withDelay(
        piece.delay,
        withTiming(piece.rotation + 360 * 3, {
          duration: 2500,
          easing: Easing.linear,
        })
      );
    })();
  }, [piece, translateY, translateX, rotation, scale]);

  const animatedStyle = useAnimatedStyle(() => {
    'worklet';
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { rotate: `${rotation.value}deg` },
        { scale: scale.value },
      ],
    };
  });

  return (
    <Animated.Text style={[styles.confettiPiece, animatedStyle]}>
      {piece.emoji}
    </Animated.Text>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
    pointerEvents: 'none',
  },
  confettiPiece: {
    position: 'absolute',
    fontSize: 24,
  },
});
