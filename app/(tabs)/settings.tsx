
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch, Linking, Alert } from 'react-native';
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
import { categories, getAllTopics } from '@/data/paranormal/categories';
import { ConfirmModal } from '@/components/ConfirmModal';
import { HapticFeedback } from '@/utils/haptics';

const TEXT_SIZE_OPTIONS = [
  { label: 'Small', value: 0.85, key: 'small' },
  { label: 'Default', value: 1, key: 'default' },
  { label: 'Large', value: 1.15, key: 'large' },
  { label: 'Extra Large', value: 1.3, key: 'extra-large' },
];

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
  const [totalTopics, setTotalTopics] = useState(0);

  const fadeOpacity = useSharedValue(0);
  const toggleScale = useSharedValue(1);

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

      const topics = getAllTopics();
      setTotalTopics(topics.length);
    } catch (error) {
      console.error('Error loading settings:', error);
    }
  };

  const handleToggleSetting = async (key: keyof AppSettings) => {
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
  };

  const handleThemeToggle = async () => {
    if (settings.hapticsEnabled) {
      HapticFeedback.medium();
    }
    toggleTheme();
  };

  const handleTextSizeChange = async (size: number) => {
    if (settings.hapticsEnabled) {
      HapticFeedback.light();
    }
    setTextScale(size);
  };

  const handleClearCache = async () => {
    if (settings.hapticsEnabled) {
      HapticFeedback.medium();
    }
    
    try {
      await storage.clearAll();
      setLastSync(null);
      setCacheSize('0 KB');
      setShowClearModal(false);
      
      if (settings.hapticsEnabled) {
        HapticFeedback.success();
      }

      Alert.alert('Cache Cleared', 'All cached data has been removed successfully.');
    } catch (error) {
      console.error('Error clearing cache:', error);
      Alert.alert('Error', 'Failed to clear cache. Please try again.');
    }
  };

  const handleOpenWebsite = async () => {
    if (settings.hapticsEnabled) {
      HapticFeedback.light();
    }
    
    const url = 'https://stormlightfoundry.com';
    const supported = await Linking.canOpenURL(url);
    
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert('Error', 'Unable to open website');
    }
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) {
      return 'Never';
    }
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
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
              contentContainerStyle={styles.contentContainer}
              showsVerticalScrollIndicator={false}
            >
              <Text style={[styles.sectionTitle, { color: theme.colors.textPrimary, fontSize: 18 * textScale }]}>
                Preferences
              </Text>
              
              <Animated.View style={[styles.settingCard, { backgroundColor: theme.colors.cardBg, borderColor: theme.colors.border }, toggleAnimatedStyle]}>
                <View style={styles.settingRow}>
                  <View style={styles.settingInfo}>
                    <Text style={styles.settingIcon}>🌓</Text>
                    <View style={styles.settingTextContainer}>
                      <Text style={[styles.settingLabel, { color: theme.colors.textPrimary, fontSize: 15 * textScale }]}>
                        Dark Mode
                      </Text>
                      <Text style={[styles.settingDescription, { color: theme.colors.textSecondary, fontSize: 12 * textScale }]}>
                        {colorScheme === 'dark' ? 'Dark theme active' : 'Light theme active'}
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
                    <Text style={styles.settingIcon}>🔔</Text>
                    <View style={styles.settingTextContainer}>
                      <Text style={[styles.settingLabel, { color: theme.colors.textPrimary, fontSize: 15 * textScale }]}>
                        Daily Mysteries
                      </Text>
                      <Text style={[styles.settingDescription, { color: theme.colors.textSecondary, fontSize: 12 * textScale }]}>
                        Receive daily paranormal notifications
                      </Text>
                    </View>
                  </View>
                  <Switch
                    value={settings.dailyNotificationsEnabled}
                    onValueChange={() => handleToggleSetting('dailyNotificationsEnabled')}
                    trackColor={{ false: theme.colors.border, true: theme.colors.violet }}
                    thumbColor={settings.dailyNotificationsEnabled ? '#FFFFFF' : '#f4f3f4'}
                  />
                </View>

                <View style={[styles.settingDivider, { backgroundColor: theme.colors.border }]} />

                <View style={styles.settingRow}>
                  <View style={styles.settingInfo}>
                    <Text style={styles.settingIcon}>🔊</Text>
                    <View style={styles.settingTextContainer}>
                      <Text style={[styles.settingLabel, { color: theme.colors.textPrimary, fontSize: 15 * textScale }]}>
                        Ambient Sounds
                      </Text>
                      <Text style={[styles.settingDescription, { color: theme.colors.textSecondary, fontSize: 12 * textScale }]}>
                        Eerie audio for fact reveals
                      </Text>
                    </View>
                  </View>
                  <Switch
                    value={settings.ambientSoundEnabled}
                    onValueChange={() => handleToggleSetting('ambientSoundEnabled')}
                    trackColor={{ false: theme.colors.border, true: theme.colors.violet }}
                    thumbColor={settings.ambientSoundEnabled ? '#FFFFFF' : '#f4f3f4'}
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
                <Text style={[styles.settingLabel, { color: theme.colors.textPrimary, fontSize: 15 * textScale, marginBottom: 16 }]}>
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
                        <Text style={[
                          styles.textSizeLabel,
                          { color: theme.colors.textPrimary, fontSize: 12 * option.value },
                          textScale === option.value && { color: '#FFFFFF', fontWeight: '700' },
                        ]}>
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
                    Categories
                  </Text>
                  <Text style={[styles.infoValue, { color: theme.colors.textPrimary, fontSize: 14 * textScale }]}>
                    {categories.length}
                  </Text>
                </View>
                <View style={[styles.infoDivider, { backgroundColor: theme.colors.border }]} />
                <View style={styles.infoRow}>
                  <Text style={[styles.infoLabel, { color: theme.colors.textSecondary, fontSize: 14 * textScale }]}>
                    Total Topics
                  </Text>
                  <Text style={[styles.infoValue, { color: theme.colors.textPrimary, fontSize: 14 * textScale }]}>
                    {totalTopics}
                  </Text>
                </View>
                <View style={[styles.infoDivider, { backgroundColor: theme.colors.border }]} />
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
                    Clear Cache
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
                <TouchableOpacity onPress={handleOpenWebsite} style={styles.infoRow}>
                  <Text style={[styles.infoLabel, { color: theme.colors.textSecondary, fontSize: 14 * textScale }]}>
                    Developer
                  </Text>
                  <Text style={[styles.infoValue, { color: theme.colors.violet, fontSize: 14 * textScale }]}>
                    StormLight Foundry →
                  </Text>
                </TouchableOpacity>
                <View style={[styles.infoDivider, { backgroundColor: theme.colors.border }]} />
                <View style={styles.infoRow}>
                  <Text style={[styles.infoLabel, { color: theme.colors.textSecondary, fontSize: 14 * textScale }]}>
                    Copyright
                  </Text>
                  <Text style={[styles.infoValue, { color: theme.colors.textPrimary, fontSize: 14 * textScale }]}>
                    © 2025
                  </Text>
                </View>
              </View>

              <View style={styles.bottomSpacer} />
            </ScrollView>
          </Animated.View>
        </SafeAreaView>

        <ConfirmModal
          visible={showClearModal}
          title="Clear Cache"
          message="This will remove all cached data. You can re-sync anytime."
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'SpaceMono',
    marginBottom: 16,
    marginTop: 8,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  settingCard: {
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    marginBottom: 24,
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
    marginVertical: 12,
  },
  textSizeContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  textSizeButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSizeLabel: {
    fontFamily: 'SpaceMono',
    fontWeight: '600',
  },
  infoCard: {
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    marginBottom: 12,
    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.3)',
    elevation: 4,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  infoLabel: {
    fontSize: 14,
    fontFamily: 'SpaceMono',
  },
  infoValue: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'SpaceMono',
  },
  infoDivider: {
    height: 1,
    marginVertical: 8,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    marginBottom: 12,
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
