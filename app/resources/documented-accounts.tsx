
import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, RefreshControl } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import { useAppTheme } from '@/contexts/ThemeContext';
import { documentedAccountsData, DocumentedAccount } from '@/data/paranormal/documentedAccounts';
import { ParticleEffect } from '@/components/ParticleEffect';
import { LightningButton } from '@/components/LightningButton';
import { RandomFactModal } from '@/components/RandomFactModal';
import { getRandomFact, ParanormalFact } from '@/data/paranormal/facts';
import { HapticFeedback } from '@/utils/haptics';

const AccountCard: React.FC<{ account: DocumentedAccount; onPress: () => void }> = ({ account, onPress }) => {
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
    <TouchableOpacity
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={1}
      style={styles.cardWrapper}
      accessibilityLabel={account.name}
      accessibilityHint={account.description}
      accessibilityRole="button"
    >
      <Animated.View style={animatedStyle}>
        <LinearGradient
          colors={[theme.colors.violet + '40', theme.colors.indigo + '20', theme.colors.cardBg]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.card, { borderColor: theme.colors.border }]}
        >
          <ParticleEffect count={3} color={theme.colors.gold + '40'} />
          
          <View style={styles.cardHeader}>
            <Text style={[styles.cardTitle, { color: theme.colors.textPrimary, fontSize: 18 * textScale }]}>
              {account.name}
            </Text>
          </View>

          <Text style={[styles.cardDescription, { color: theme.colors.textSecondary, fontSize: 13 * textScale }]}>
            {account.description}
          </Text>

          <View style={styles.cardMeta}>
            <View style={[styles.metaBadge, { backgroundColor: theme.colors.cardBgTranslucent, borderColor: theme.colors.border }]}>
              <Text style={[styles.metaText, { color: theme.colors.textPrimary, fontSize: 11 * textScale }]}>
                📅 {account.year}
              </Text>
            </View>
            <View style={[styles.metaBadge, { backgroundColor: theme.colors.cardBgTranslucent, borderColor: theme.colors.border }]}>
              <Text style={[styles.metaText, { color: theme.colors.textPrimary, fontSize: 11 * textScale }]} numberOfLines={1}>
                📍 {account.location}
              </Text>
            </View>
          </View>

          <View style={[styles.cardBorder, { borderColor: theme.colors.gold + '60' }]} />
        </LinearGradient>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default function DocumentedAccountsScreen() {
  const { theme, textScale } = useAppTheme();
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);
  const [showFactModal, setShowFactModal] = useState(false);
  const [currentFact, setCurrentFact] = useState<ParanormalFact | null>(null);

  const entryCount = useMemo(() => {
    return documentedAccountsData.length;
  }, []);

  const handleAccountPress = (account: DocumentedAccount) => {
    HapticFeedback.light();
    console.log('Account pressed:', account.name);
    router.push(`/resources/documented-accounts/${account.id}` as any);
  };

  const handleLightningPress = () => {
    HapticFeedback.medium();
    const randomFact = getRandomFact();
    setCurrentFact(randomFact);
    setShowFactModal(true);
  };

  const onRefresh = async () => {
    HapticFeedback.medium();
    setRefreshing(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      HapticFeedback.success();
    } catch (error) {
      console.error('Error refreshing:', error);
      HapticFeedback.error();
    } finally {
      setRefreshing(false);
    }
  };

  const handleBack = () => {
    HapticFeedback.light();
    router.back();
  };

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
            <View style={styles.headerContent}>
              <Text style={[styles.headerIcon, { fontSize: 32 * textScale }]}>🖋️</Text>
              <Text style={[styles.headerTitle, { color: theme.colors.textPrimary, fontSize: 28 * textScale }]}>
                Documented Accounts
              </Text>
              <Text style={[styles.headerSubtitle, { color: theme.colors.textSecondary, fontSize: 13 * textScale }]}>
                {entryCount} entries
              </Text>
            </View>
          </View>

          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                tintColor={theme.colors.violet}
                colors={[theme.colors.violet, theme.colors.indigo, theme.colors.gold]}
                progressBackgroundColor={theme.colors.cardBg}
              />
            }
          >
            {documentedAccountsData.map((account, index) => (
              <React.Fragment key={index}>
                <AccountCard
                  account={account}
                  onPress={() => handleAccountPress(account)}
                />
              </React.Fragment>
            ))}

            <View style={styles.bottomSpacer} />
          </ScrollView>

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
    paddingBottom: 16,
  },
  backButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  backButtonText: {
    fontSize: 28,
    fontWeight: '700',
  },
  headerContent: {
    alignItems: 'center',
  },
  headerIcon: {
    fontSize: 32,
    marginBottom: 8,
    textShadowColor: 'rgba(212, 175, 55, 0.6)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '900',
    fontFamily: 'SpaceMono',
    textAlign: 'center',
    textShadowColor: 'rgba(139, 92, 246, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  headerSubtitle: {
    fontSize: 13,
    fontFamily: 'SpaceMono',
    marginTop: 6,
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 120,
  },
  cardWrapper: {
    marginBottom: 12,
  },
  card: {
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.4)',
    elevation: 8,
    overflow: 'hidden',
  },
  cardHeader: {
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '800',
    fontFamily: 'SpaceMono',
    textShadowColor: 'rgba(139, 92, 246, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  cardDescription: {
    fontSize: 13,
    fontFamily: 'SpaceMono',
    lineHeight: 18,
    marginBottom: 12,
  },
  cardMeta: {
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
  },
  metaBadge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    borderWidth: 1,
  },
  metaText: {
    fontSize: 11,
    fontWeight: '700',
    fontFamily: 'SpaceMono',
  },
  cardBorder: {
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
});
