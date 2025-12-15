
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch, Linking, Alert, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  Easing,
} from 'react-native-reanimated';
import { useAppTheme } from '@/contexts/ThemeContext';
import { storage, AppSettings } from '@/utils/storage';
import { ConfirmModal } from '@/components/ConfirmModal';
import { LightningButton } from '@/components/LightningButton';
import { RandomFactModal } from '@/components/RandomFactModal';
import { getRandomFact, ParanormalFact } from '@/data/paranormal/facts';
import { HapticFeedback } from '@/utils/haptics';

const TEXT_SIZE_OPTIONS = [
  { label: 'Small', value: 0.85, key: 'small' },
  { label: 'Default', value: 1, key: 'default' },
  { label: 'Large', value: 1.15, key: 'large' },
  { label: 'XL', value: 1.3, key: 'extra-large' },
];

const LINKS = {
  website: 'https://stormlightfoundry.com',
  privacyPolicy: 'https://stormlightfoundry.com/privacy-policy-paranormal-encyclopedia-stormlight-foundry/',
  changelog: 'https://stormlightfoundry.com/changelog-paranormal-encyclopedia-stormlight-foundry/',
};

export default function SettingsScreen() {
  const { theme, colorScheme, toggleTheme, textScale, setTextScale } = useAppTheme();
  const [lastSync, setLastSync] = useState<string | null>(null);
  const [cacheSize, setCacheSize] = useState<string>('0 KB');
  const [settings, setSettings] = useState<AppSettings>({
    notificationsEnabled: true,
    soundsEnabled: true,
    hapticsEnabled: true,
    themeVariant: 'default',
    ambientSoundEnabled: false,
    dailyNotificationsEnabled: false,
  });
  const [showClearModal, setShowClearModal] = useState(false);
  const [showFactModal, setShowFactModal] = useState(false);
  const [currentFact, setCurrentFact] = useState<ParanormalFact | null>(null);
  const { width } = useWindowDimensions();

  const fadeOpacity = useSharedValue(0);
  const toggleScale = useSharedValue(1);

  // Responsive card max width for iPad
  const cardMaxWidth = width >= 768 ? 600 : undefined;

  useEffect(() => {
    loadSettings();
    fadeOpacity.value = withTiming(1, {
      duration: 600,
      easing: Easing.inOut(Easing.ease),
    });
  }, [fadeOpacity]);

  const loadSettings = async () => {
    try {
      const syncTime = await storage.getLastSync();
      setLastSync(syncTime);

      const size = await storage.getCacheSize();
      const sizeInKB = (size / 1024).toFixed(2);
      setCacheSize(`${sizeInKB} KB`);

      const savedSettings = await storage.getSettings();
      setSettings(savedSettings);
    } catch (error) {
      console.error('Error loading settings:', error);
    }
  };

  const handleToggleSetting = async (key: keyof AppSettings) => {
    try {
      const newValue = !settings[key];
      setSettings({ ...settings, [key]: newValue });
      await storage.updateSetting(key, newValue);

      if (settings.hapticsEnabled) {
        HapticFeedback.light();
      }

      toggleScale.value = withSpring(0.95, {
        damping: 15,
        stiffness: 300,
      });
      setTimeout(() => {
        toggleScale.value = withSpring(1, {
          damping: 15,
          stiffness: 300,
        });
      }, 100);
    } catch (error) {
      console.error('Error toggling setting:', error);
    }
  };

  const handleThemeToggle = async () => {
    try {
      if (settings.hapticsEnabled) {
        HapticFeedback.medium();
      }
      toggleTheme();
    } catch (error) {
      console.error('Error toggling theme:', error);
    }
  };

  const handleTextSizeChange = async (size: number) => {
    try {
      if (settings.hapticsEnabled) {
        HapticFeedback.light();
      }
      setTextScale(size);
    } catch (error) {
      console.error('Error changing text size:', error);
    }
  };

  const handleClearCache = async () => {
    try {
      if (settings.hapticsEnabled) {
        HapticFeedback.medium();
      }

      await storage.clearAll();
      setLastSync(null);
      setCacheSize('0 KB');
      setShowClearModal(false);

      if (settings.hapticsEnabled) {
        HapticFeedback.success();
      }

      Alert.alert('Success', 'Cache and app data cleared successfully.');
    } catch (error) {
      console.error('Error clearing cache:', error);
      Alert.alert('Error', 'Failed to clear cache. Please try again.');
    }
  };

  const handleOpenLink = async (url: string, fallbackMessage?: string) => {
    try {
      if (settings.hapticsEnabled) {
        HapticFeedback.light();
      }

      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
        return;
      }

      Alert.alert('Error', fallbackMessage || 'Unable to open link');
    } catch (error) {
      console.error('Error opening link:', error);
      Alert.alert('Error', fallbackMessage || 'Unable to open link');
    }
  };

  const handleOpenWebsite = async () => {
    await handleOpenLink(LINKS.website, 'Unable to open website');
  };

  const handleOpenPrivacyPolicy = async () => {
    await handleOpenLink(LINKS.privacyPolicy, 'Unable to open Privacy Policy');
  };

  const handleOpenChangelog = async () => {
    await handleOpenLink(LINKS.changelog, 'Unable to open Changelog');
  };

  const handleLightningPress = () => {
    try {
      HapticFeedback.medium();
      const randomFact = getRandomFact();
      setCurrentFact(randomFact);
      setShowFactModal(true);
    } catch (error) {
      console.error('Error showing random fact:', error);
    }
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) {
      return 'Never';
    }
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Never';
    }
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeOpacity.value,
    };
  });

  const toggleAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: toggleScale.value }],
    };
  });

  const getThemeName = () => {
    return colorScheme === 'dark' ? 'Mystic Theme' : 'Arcane Theme';
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
            <Text style={[styles.headerTitle, { color: theme.colors.textPrimary, fontSize: 32 * textScale }]}>
              Settings
            </Text>
            <Text style={[styles.headerSubtitle, { color: theme.colors.textSecondary, fontSize: 14 * textScale }]}>
              Manage your paranormal encyclopedia
            </Text>
          </View>

          <Animated.View style={[styles.animatedContainer, animatedStyle]}>
            <ScrollView
              style={styles.scrollView}
              contentContainerStyle={[styles.contentContainer, { alignItems: width >= 768 ? 'center' : 'stretch' }]}
              showsVerticalScrollIndicator={false}
            >
              <View style={[styles.contentWrapper, { maxWidth: cardMaxWidth, width: '100%' }]}>
                <Text style={[styles.sectionTitle, { color: theme.colors.textPrimary, fontSize: 18 * textScale }]}>
                  Preferences
                </Text>

                <Animated.View style={[styles.settingCard, { backgroundColor: theme.colors.cardBg, borderColor: theme.colors.border }, toggleAnimatedStyle]}>
                  <View style={styles.settingRow}>
                    <View style={styles.settingInfo}>
                      <Text style={styles.settingIcon}>🌓</Text>
                      <View style={styles.settingTextContainer}>
                        <Text style={[styles.settingLabel, { color: theme.colors.textPrimary, fontSize: 15 * textScale }]}>
                          Theme
                        </Text>
                        <Text style={[styles.settingDescription, { color: theme.colors.textSecondary, fontSize: 12 * textScale }]}>
                          {getThemeName()}
                        </Text>
                      </View>
                    </View>
                    <Switch
                      value={colorScheme === 'dark'}
                      onValueChange={handleThemeToggle}
                      trackColor={{ false: theme.colors.border, true: theme.colors.violet }}
                      thumbColor={colorScheme === 'dark' ? '#FFFFFF' : '#f4f3f4'}
                    />
                  </View>

                  <View style={[styles.settingDivider, { backgroundColor: theme.colors.border }]} />

                  <View style={styles.settingRow}>
                    <View style={styles.settingInfo}>
                      <Text style={styles.settingIcon}>📳</Text>
                      <View style={styles.settingTextContainer}>
                        <Text style={[styles.settingLabel, { color: theme.colors.textPrimary, fontSize: 15 * textScale }]}>
                          Haptic Feedback
                        </Text>
                        <Text style={[styles.settingDescription, { color: theme.colors.textSecondary, fontSize: 12 * textScale }]}>
                          Feel vibrations on interactions
                        </Text>
                      </View>
                    </View>
                    <Switch
                      value={settings.hapticsEnabled}
                      onValueChange={() => handleToggleSetting('hapticsEnabled')}
                      trackColor={{ false: theme.colors.border, true: theme.colors.violet }}
                      thumbColor={settings.hapticsEnabled ? '#FFFFFF' : '#f4f3f4'}
                    />
                  </View>
                </Animated.View>

                <Text style={[styles.sectionTitle, { color: theme.colors.textPrimary, fontSize: 18 * textScale }]}>
                  Accessibility
                </Text>

                <View style={[styles.settingCard, { backgroundColor: theme.colors.cardBg, borderColor: theme.colors.border }]}>
                  <Text style={[styles.settingLabel, { color: theme.colors.textPrimary, fontSize: 15 * textScale, marginBottom: 20 }]}>
                    Text Size
                  </Text>
                  <View style={styles.textSizeContainer}>
                    {TEXT_SIZE_OPTIONS.map((option, index) => (
                      <React.Fragment key={index}>
                        <TouchableOpacity
                          style={[
                            styles.textSizeButton,
                            { borderColor: theme.colors.border },
                            textScale === option.value && {
                              backgroundColor: theme.colors.violet,
                              borderColor: theme.colors.violet,
                            },
                          ]}
                          onPress={() => handleTextSizeChange(option.value)}
                          activeOpacity={0.7}
                        >
                          <Text 
                            style={[
                              styles.textSizeLabel,
                              { color: theme.colors.textPrimary, fontSize: 11 },
                              textScale === option.value && { color: '#FFFFFF', fontWeight: '700' },
                            ]}
                            numberOfLines={1}
                          >
                            {option.label}
                          </Text>
                        </TouchableOpacity>
                      </React.Fragment>
                    ))}
                  </View>
                </View>

                <Text style={[styles.sectionTitle, { color: theme.colors.textPrimary, fontSize: 18 * textScale }]}>
                  Data & Storage
                </Text>

                <View style={[styles.infoCard, { backgroundColor: theme.colors.cardBg, borderColor: theme.colors.border }]}>
                  <View style={styles.infoRow}>
                    <Text style={[styles.infoLabel, { color: theme.colors.textSecondary, fontSize: 14 * textScale }]}>
                      Cache Size
                    </Text>
                    <Text style={[styles.infoValue, { color: theme.colors.textPrimary, fontSize: 14 * textScale }]}>
                      {cacheSize}
                    </Text>
                  </View>
                  <View style={[styles.infoDivider, { backgroundColor: theme.colors.border }]} />
                  <View style={styles.infoRow}>
                    <Text style={[styles.infoLabel, { color: theme.colors.textSecondary, fontSize: 14 * textScale }]}>
                      Last Sync
                    </Text>
                    <Text style={[styles.infoValue, { color: theme.colors.textPrimary, fontSize: 14 * textScale }]}>
                      {formatDate(lastSync)}
                    </Text>
                  </View>
                </View>

                <TouchableOpacity
                  style={[styles.actionButton, { backgroundColor: theme.colors.cardBg, borderColor: theme.colors.border }]}
                  onPress={() => {
                    if (settings.hapticsEnabled) {
                      HapticFeedback.light();
                    }
                    setShowClearModal(true);
                  }}
                  activeOpacity={0.7}
                >
                  <Text style={styles.actionButtonEmoji}>🗑️</Text>
                  <View style={styles.actionButtonTextContainer}>
                    <Text style={[styles.actionButtonTitle, { color: theme.colors.textPrimary, fontSize: 16 * textScale }]}>
                      Clear cache and app data
                    </Text>
                    <Text style={[styles.actionButtonSubtitle, { color: theme.colors.textSecondary, fontSize: 12 * textScale }]}>
                      Remove all cached data
                    </Text>
                  </View>
                </TouchableOpacity>

                <Text style={[styles.sectionTitle, { color: theme.colors.textPrimary, fontSize: 18 * textScale }]}>
                  About
                </Text>

                <View style={[styles.infoCard, { backgroundColor: theme.colors.cardBg, borderColor: theme.colors.border }]}>
                  <Text style={[styles.aboutText, { color: theme.colors.textSecondary, fontSize: 14 * textScale }]}>
                    Paranormal Encyclopedia is your gateway to exploring the mysteries of the unknown.
                    Discover cryptids, UFOs, ghosts, ancient mysteries, and more.
                  </Text>

                  <View style={[styles.infoDivider, { backgroundColor: theme.colors.border }]} />

                  <View style={styles.infoRow}>
                    <Text style={[styles.infoLabel, { color: theme.colors.textSecondary, fontSize: 14 * textScale }]}>
                      Version
                    </Text>
                    <Text style={[styles.infoValue, { color: theme.colors.textPrimary, fontSize: 14 * textScale }]}>
                      1.0.0
                    </Text>
                  </View>

                  <View style={[styles.infoDivider, { backgroundColor: theme.colors.border }]} />

                  <TouchableOpacity onPress={handleOpenWebsite} style={styles.infoRow} activeOpacity={0.7}>
                    <Text style={[styles.infoLabel, { color: theme.colors.textSecondary, fontSize: 14 * textScale }]}>
                      Developer
                    </Text>
                    <Text style={[styles.infoValue, { color: theme.colors.violet, fontSize: 14 * textScale }]}>
                      StormLight Foundry →
                    </Text>
                  </TouchableOpacity>

                  <View style={[styles.infoDivider, { backgroundColor: theme.colors.border }]} />
                  
                  <TouchableOpacity onPress={handleOpenPrivacyPolicy} style={styles.infoRow} activeOpacity={0.7}>
                    <Text style={[styles.infoLabel, { color: theme.colors.textSecondary, fontSize: 14 * textScale }]}>
                      Privacy Policy
                    </Text>
                    <Text style={[styles.infoValue, { color: theme.colors.violet, fontSize: 14 * textScale }]}>
                      View →
                    </Text>
                  </TouchableOpacity>

                  <View style={[styles.infoDivider, { backgroundColor: theme.colors.border }]} />
                  
                  <TouchableOpacity onPress={handleOpenChangelog} style={styles.infoRow} activeOpacity={0.7}>
                    <Text style={[styles.infoLabel, { color: theme.colors.textSecondary, fontSize: 14 * textScale }]}>
                      Changelog
                    </Text>
                    <Text style={[styles.infoValue, { color: theme.colors.violet, fontSize: 14 * textScale }]}>
                      View →
                    </Text>
                  </TouchableOpacity>

                  <View style={[styles.infoDivider, { backgroundColor: theme.colors.border }]} />

                  <View style={styles.infoRow}>
                    <Text style={[styles.infoLabel, { color: theme.colors.textSecondary, fontSize: 14 * textScale }]}>
                      Copyright
                    </Text>
                    <Text style={[styles.infoValue, { color: theme.colors.textPrimary, fontSize: 13 * textScale }]} numberOfLines={1}>
                      © 2025 StormLight Foundry
                    </Text>
                  </View>
                </View>

                <View style={styles.bottomSpacer} />
              </View>
            </ScrollView>
          </Animated.View>

          <LightningButton onPress={handleLightningPress} />

          <RandomFactModal
            visible={showFactModal}
            fact={currentFact}
            onClose={() => setShowFactModal(false)}
          />
        </SafeAreaView>

        <ConfirmModal
          visible={showClearModal}
          title="Clear cache and app data"
          message="This will remove your favorites, achievements and path progress. Proceed with caution!"
          confirmText="Clear"
          cancelText="Cancel"
          onConfirm={handleClearCache}
          onCancel={() => setShowClearModal(false)}
          destructive
        />
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
    paddingBottom: 24,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '900',
    fontFamily: 'SpaceMono',
    textShadowColor: 'rgba(139, 92, 246, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  headerSubtitle: {
    fontSize: 14,
    fontFamily: 'SpaceMono',
    marginTop: 4,
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
  contentWrapper: {
    width: '100%',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'SpaceMono',
    marginBottom: 16,
    marginTop: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  settingCard: {
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    marginBottom: 28,
    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.3)',
    elevation: 4,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  settingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  settingTextContainer: {
    flex: 1,
  },
  settingLabel: {
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'SpaceMono',
    marginBottom: 2,
  },
  settingDescription: {
    fontSize: 12,
    fontFamily: 'SpaceMono',
  },
  settingDivider: {
    height: 1,
    marginVertical: 16,
  },
  textSizeContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  textSizeButton: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  },
  textSizeLabel: {
    fontFamily: 'SpaceMono',
    fontWeight: '600',
    textAlign: 'center',
  },
  infoCard: {
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    marginBottom: 16,
    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.3)',
    elevation: 4,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  infoLabel: {
    fontSize: 14,
    fontFamily: 'SpaceMono',
    flex: 1,
  },
  infoValue: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'SpaceMono',
    textAlign: 'right',
    flex: 1,
  },
  infoDivider: {
    height: 1,
    marginVertical: 12,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    marginBottom: 16,
    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.3)',
    elevation: 4,
  },
  actionButtonEmoji: {
    fontSize: 32,
    marginRight: 16,
  },
  actionButtonTextContainer: {
    flex: 1,
  },
  actionButtonTitle: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'SpaceMono',
    marginBottom: 4,
  },
  actionButtonSubtitle: {
    fontSize: 12,
    fontFamily: 'SpaceMono',
  },
  aboutText: {
    fontSize: 14,
    lineHeight: 22,
    fontFamily: 'SpaceMono',
    marginBottom: 16,
  },
  bottomSpacer: {
    height: 40,
  },
});
