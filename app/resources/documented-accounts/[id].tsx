
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { useAppTheme } from '@/contexts/ThemeContext';
import { getDocumentedAccountById, DocumentedAccount } from '@/data/paranormal/documentedAccounts';
import { ParticleEffect } from '@/components/ParticleEffect';
import { LightningButton } from '@/components/LightningButton';
import { RandomFactModal } from '@/components/RandomFactModal';
import { getRandomFact, ParanormalFact } from '@/data/paranormal/facts';
import { HapticFeedback } from '@/utils/haptics';

export default function DocumentedAccountDetailScreen() {
  const { theme, textScale } = useAppTheme();
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [account, setAccount] = useState<DocumentedAccount | null>(null);
  const [showFactModal, setShowFactModal] = useState(false);
  const [currentFact, setCurrentFact] = useState<ParanormalFact | null>(null);

  const fadeOpacity = useSharedValue(0);

  useEffect(() => {
    if (typeof id === 'string') {
      const foundAccount = getDocumentedAccountById(id);
      setAccount(foundAccount || null);
      
      if (foundAccount) {
        fadeOpacity.value = withTiming(1, {
          duration: 600,
          easing: Easing.inOut(Easing.ease),
        });
      }
    }
  }, [id, fadeOpacity]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeOpacity.value,
    };
  });

  const handleLightningPress = () => {
    HapticFeedback.medium();
    const randomFact = getRandomFact();
    setCurrentFact(randomFact);
    setShowFactModal(true);
  };

  const handleBack = () => {
    HapticFeedback.light();
    router.back();
  };

  const renderStars = (rating: number) => {
    return '⭐'.repeat(rating);
  };

  if (!account) {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={theme.colors.backgroundGradient}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <SafeAreaView style={styles.safeArea} edges={['top']}>
            <View style={styles.errorContainer}>
              <Text style={styles.errorIcon}>❌</Text>
              <Text style={[styles.errorText, { color: theme.colors.textPrimary }]}>
                Account not found
              </Text>
              <TouchableOpacity
                onPress={handleBack}
                style={styles.backButtonError}
              >
                <Text style={styles.backButtonErrorText}>Go Back</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </LinearGradient>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={theme.colors.backgroundGradient}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <SafeAreaView style={styles.safeArea} edges={['top']}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={handleBack}
              style={styles.backButton}
              accessibilityLabel="Go back"
              accessibilityRole="button"
            >
              <Text style={[styles.backButtonText, { color: theme.colors.textPrimary, fontSize: 28 * textScale }]}>
                ←
              </Text>
            </TouchableOpacity>
          </View>

          <Animated.View style={[styles.animatedContainer, animatedStyle]}>
            <ScrollView
              style={styles.scrollView}
              contentContainerStyle={styles.contentContainer}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.titleSection}>
                <Text style={[styles.icon, { fontSize: 64 * textScale }]}>🖋️</Text>
                <Text style={[styles.title, { color: theme.colors.textPrimary, fontSize: 28 * textScale }]}>
                  {account.name}
                </Text>
                <Text style={[styles.stars, { fontSize: 18 * textScale }]}>
                  {renderStars(account.credibilityRating)}
                </Text>
                <Text style={[styles.description, { color: theme.colors.textSecondary, fontSize: 15 * textScale }]}>
                  {account.description}
                </Text>

                <View style={styles.metaContainer}>
                  <View style={[styles.metaBadge, { backgroundColor: theme.colors.cardBgTranslucent, borderColor: theme.colors.border }]}>
                    <Text style={[styles.metaText, { color: theme.colors.textPrimary, fontSize: 13 * textScale }]}>
                      📅 {account.year}
                    </Text>
                  </View>
                  <View style={[styles.metaBadge, { backgroundColor: theme.colors.cardBgTranslucent, borderColor: theme.colors.border }]}>
                    <Text style={[styles.metaText, { color: theme.colors.textPrimary, fontSize: 13 * textScale }]}>
                      📍 {account.location}
                    </Text>
                  </View>
                </View>
              </View>

              {account.sections.map((section, index) => (
                <View key={`section-${index}`} style={styles.sectionCard}>
                  <LinearGradient
                    colors={[theme.colors.violet + '30', theme.colors.indigo + '20', theme.colors.cardBg]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={[styles.sectionGradient, { borderColor: theme.colors.border }]}
                  >
                    <ParticleEffect count={2} color={theme.colors.gold + '30'} />
                    
                    <Text style={[styles.sectionTitle, { color: theme.colors.textPrimary, fontSize: 18 * textScale }]}>
                      {section.title}
                    </Text>
                    <Text style={[styles.sectionContent, { color: theme.colors.textSecondary, fontSize: 14 * textScale }]}>
                      {section.content}
                    </Text>
                    
                    <View style={[styles.sectionBorder, { borderColor: theme.colors.gold + '60' }]} />
                  </LinearGradient>
                </View>
              ))}

              <View style={styles.bottomSpacer} />
            </ScrollView>
          </Animated.View>

          <LightningButton onPress={handleLightningPress} />

          <RandomFactModal
            visible={showFactModal}
            fact={currentFact}
            onClose={() => setShowFactModal(false)}
          />
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
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  backButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 28,
    fontWeight: '700',
  },
  animatedContainer: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 120,
  },
  titleSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  icon: {
    fontSize: 64,
    marginBottom: 16,
    textShadowColor: 'rgba(212, 175, 55, 0.6)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    fontFamily: 'SpaceMono',
    textAlign: 'center',
    marginBottom: 12,
    textShadowColor: 'rgba(139, 92, 246, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  stars: {
    fontSize: 18,
    marginBottom: 12,
    textShadowColor: 'rgba(212, 175, 55, 0.6)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  description: {
    fontSize: 15,
    fontFamily: 'SpaceMono',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 16,
  },
  metaContainer: {
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  metaBadge: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
  },
  metaText: {
    fontSize: 13,
    fontWeight: '700',
    fontFamily: 'SpaceMono',
  },
  sectionCard: {
    marginBottom: 16,
    borderRadius: 18,
    overflow: 'hidden',
  },
  sectionGradient: {
    padding: 20,
    borderWidth: 1,
    borderRadius: 18,
    boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.4)',
    elevation: 8,
    overflow: 'hidden',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    fontFamily: 'SpaceMono',
    marginBottom: 12,
    textShadowColor: 'rgba(139, 92, 246, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  sectionContent: {
    fontSize: 14,
    fontFamily: 'SpaceMono',
    lineHeight: 22,
  },
  sectionBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 18,
    borderWidth: 2,
    opacity: 0.3,
  },
  bottomSpacer: {
    height: 20,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  errorIcon: {
    fontSize: 64,
    marginBottom: 20,
  },
  errorText: {
    fontSize: 18,
    fontFamily: 'SpaceMono',
    textAlign: 'center',
    marginBottom: 24,
  },
  backButtonError: {
    backgroundColor: 'rgba(139, 92, 246, 0.8)',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(139, 92, 246, 1)',
  },
  backButtonErrorText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    fontFamily: 'SpaceMono',
  },
});
