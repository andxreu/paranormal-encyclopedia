
import React, { memo } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { useAppTheme } from '@/contexts/ThemeContext';

interface GlassCardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  intensity?: number;
  glowColor?: string;
  borderWidth?: number;
}

export const GlassCard = memo<GlassCardProps>(({ 
  children, 
  style, 
  intensity = 20,
  glowColor,
  borderWidth = 1,
}) => {
  const { theme, colorScheme } = useAppTheme();
  const effectiveGlowColor = glowColor || theme.colors.violet;

  return (
    <View style={[styles.container, style]}>
      <BlurView
        intensity={intensity}
        tint={colorScheme === 'dark' ? 'dark' : 'light'}
        style={styles.blur}
      >
        <LinearGradient
          colors={[
            `${effectiveGlowColor}15`,
            `${effectiveGlowColor}08`,
            'transparent',
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          <View style={[
            styles.border,
            {
              borderColor: `${effectiveGlowColor}60`,
              borderWidth,
              boxShadow: `0 0 20px ${effectiveGlowColor}40`,
            }
          ]} />
          <View style={styles.content}>
            {children}
          </View>
        </LinearGradient>
      </BlurView>
    </View>
  );
});

GlassCard.displayName = 'GlassCard';

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  blur: {
    flex: 1,
    borderRadius: 20,
  },
  gradient: {
    flex: 1,
    borderRadius: 20,
  },
  border: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 20,
  },
  content: {
    flex: 1,
    padding: 20,
  },
});
