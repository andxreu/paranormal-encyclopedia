
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HapticFeedback } from '@/utils/haptics';

export default function NotFoundScreen() {
  const router = useRouter();

  const handleGoHome = () => {
    HapticFeedback.light();
    router.replace('/');
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#0a0118', '#1a0b2e', '#2d1b4e']}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
          <View style={styles.content}>
            <Text style={styles.emoji}>🌌</Text>
            <Text style={styles.title}>Cosmic Glitch</Text>
            <Text style={styles.subtitle}>404 - Page Not Found</Text>
            <Text style={styles.message}>
              This page has vanished into the paranormal realm. Let&apos;s get you back to familiar territory.
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={handleGoHome}
              activeOpacity={0.8}
              accessibilityLabel="Go to home screen"
              accessibilityRole="button"
            >
              <LinearGradient
                colors={['#8B5CF6', '#6366F1']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.buttonGradient}
              >
                <Text style={styles.buttonText}>Return Home</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  emoji: {
    fontSize: 80,
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    color: '#FFFFFF',
    fontFamily: 'SpaceMono',
    marginBottom: 8,
    textAlign: 'center',
    textShadowColor: 'rgba(139, 92, 246, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#8B5CF6',
    fontFamily: 'SpaceMono',
    marginBottom: 16,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    color: '#B0B0B0',
    fontFamily: 'SpaceMono',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 32,
  },
  button: {
    borderRadius: 16,
    overflow: 'hidden',
    boxShadow: '0px 8px 24px rgba(139, 92, 246, 0.4)',
    elevation: 8,
  },
  buttonGradient: {
    paddingHorizontal: 48,
    paddingVertical: 16,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    fontFamily: 'SpaceMono',
  },
});
