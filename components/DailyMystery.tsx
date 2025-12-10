
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface DailyMysteryProps {
  onPress?: () => void;
}

export const DailyMystery: React.FC<DailyMysteryProps> = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <LinearGradient
        colors={['#1A1A24', '#2A2A3A']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <View style={styles.content}>
          <Text style={styles.emoji}>🌙</Text>
          <View style={styles.textContainer}>
            <Text style={styles.label}>Daily Mystery</Text>
            <Text style={styles.title}>The Voynich Manuscript</Text>
            <Text style={styles.description}>
              An illustrated codex hand-written in an unknown writing system...
            </Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 24,
  },
  gradient: {
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 16,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  emoji: {
    fontSize: 48,
  },
  textContainer: {
    flex: 1,
  },
  label: {
    fontSize: 10,
    fontWeight: '600',
    color: '#D4AF37',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
    fontFamily: 'SpaceMono',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 4,
    fontFamily: 'SpaceMono',
  },
  description: {
    fontSize: 12,
    color: '#A0A0A0',
    lineHeight: 18,
    fontFamily: 'SpaceMono',
  },
});
