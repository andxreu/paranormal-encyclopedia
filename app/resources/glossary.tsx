
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  Easing,
  FadeIn,
} from 'react-native-reanimated';
import { useAppTheme } from '@/contexts/ThemeContext';
import { glossaryData } from '@/data/paranormal/glossary';
import { ParticleEffect } from '@/components/ParticleEffect';
import { HapticFeedback } from '@/utils/haptics';

export default function GlossaryScreen() {
  const { theme, textScale } = useAppTheme();
  const router = useRouter();
  const fadeOpacity = useSharedValue(0);

  useEffect(() => {
    fadeOpacity.value = withTiming(1, {
      duration: 600,
      easing: Easing.inOut(Easing.ease),
    });
  }, [fadeOpacity]);

  const handleBackPress = () => {
    HapticFeedback.light();
    router.back();
  };

  const handleEntryPress = (entryId: string) => {
    HapticFeedback.light();
    router.push(`/resources/glossary/${entryId}` as any);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeOpacity.value,
    };
  });

  const sortedGlossary = [...glossaryData].sort((a, b) => a.term.localeCompare(b.term));

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[theme.colors.gold + '20', ...theme.colors.backgroundGradient.slice(1)]}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <SafeAreaView style={styles.safeArea} edges={['top']}>
          <Animated.View style={[styles.animatedContainer, animatedStyle]}>
            <View style={styles.header}>
              <TouchableOpacity 
                onPress={handleBackPress} 
                style={styles.backButton}
                accessibilityLabel="Go back"
                accessibilityRole="button"
              >
                <Text style={[styles.backButtonText, { color: theme.colors.textPrimary, fontSize: 16 * textScale }]}>
                  ← Back
                </Text>
              </TouchableOpacity>
              
              <View style={styles.headerContent}>
                <Text style={styles.headerIcon}>📜</Text>
                <Text style={[styles.headerTitle, { color: theme.colors.textPrimary, fontSize: 32 * textScale }]}>
                  Glossary A-Z
                </Text>
                <Text style={[styles.headerSubtitle, { color: theme.colors.textSecondary, fontSize: 14 * textScale }]}>
                  Browse paranormal terms and definitions
                </Text>
              </View>
            </View>

            <ScrollView
              style={styles.scrollView}
              contentContainerStyle={styles.contentContainer}
              showsVerticalScrollIndicator={false}
            >
              <ParticleEffect count={8} color={theme.colors.gold + '30'} />
              
              {sortedGlossary.map((entry, index) => (
                <Animated.View
                  key={`glossary-entry-${entry.id}`}
                  entering={FadeIn.delay(index * 80).duration(400)}
                  style={styles.entryCardWrapper}
                >
                  <TouchableOpacity
                    onPress={() => handleEntryPress(entry.id)}
                    activeOpacity={0.8}
                    accessibilityLabel={entry.term}
                    accessibilityRole="button"
                  >
                    <EntryCard entry={entry} />
                  </TouchableOpacity>
                </Animated.View>
              ))}

              <View style={styles.bottomSpacer} />
            </ScrollView>
          </Animated.View>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}

const EntryCard: React.FC<{ entry: any }> = ({ entry }) => {
  const { theme, textScale } = useAppTheme();
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePressIn = () => {
    HapticFeedback.soft();
    scale.value = withSpring(0.98, {
      damping: 15,
      stiffness: 300,
    });
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, {
      damping: 15,
      stiffness: 300,
    });
  };

  return (
    <Animated.View
      style={animatedStyle}
      onTouchStart={handlePressIn}
      onTouchEnd={handlePressOut}
    >
      <LinearGradient
        colors={[theme.colors.gold + '40', theme.colors.violet + '20', theme.colors.cardBg]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.entryCard, { borderColor: theme.colors.border }]}
      >
        <Text style={[styles.entryTerm, { color: theme.colors.textPrimary, fontSize: 18 * textScale }]}>
          {entry.term}
        </Text>
        <Text style={[styles.entryCategory, { color: theme.colors.gold, fontSize: 12 * textScale }]}>
          {entry.category}
        </Text>
        <Text style={[styles.entryDefinition, { color: theme.colors.textSecondary, fontSize: 13 * textScale }]} numberOfLines={2}>
          {entry.definition}
        </Text>
        <View style={[styles.entryBorder, { borderColor: theme.colors.gold + '60' }]} />
      </LinearGradient>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  animatedContainer: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  backButton: {
    paddingVertical: 8,
    paddingHorizontal: 4,
    marginBottom: 16,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'SpaceMono',
  },
  headerContent: {
    alignItems: 'center',
  },
  headerIcon: {
    fontSize: 64,
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '900',
    fontFamily: 'SpaceMono',
    textAlign: 'center',
    marginBottom: 8,
    textShadow: '0px 0px 10px rgba(139, 92, 246, 0.5)',
  },
  headerSubtitle: {
    fontSize: 14,
    fontFamily: 'SpaceMono',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  entryCardWrapper: {
    marginBottom: 16,
  },
  entryCard: {
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.4)',
    elevation: 8,
  },
  entryTerm: {
    fontSize: 18,
    fontWeight: '800',
    fontFamily: 'SpaceMono',
    marginBottom: 6,
  },
  entryCategory: {
    fontSize: 12,
    fontWeight: '700',
    fontFamily: 'SpaceMono',
    marginBottom: 8,
  },
  entryDefinition: {
    fontSize: 13,
    fontFamily: 'SpaceMono',
    lineHeight: 20,
  },
  entryBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 20,
    borderWidth: 2,
    opacity: 0.3,
  },
  bottomSpacer: {
    height: 20,
  },
});
