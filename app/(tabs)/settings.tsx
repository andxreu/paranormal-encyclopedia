
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { useAppTheme } from '@/contexts/ThemeContext';
import { storage, AppSettings } from '@/utils/storage';
import { categories } from '@/data/paranormal/categories';
import { paranormalFacts } from '@/data/paranormal/facts';
import { ConfirmModal } from '@/components/ConfirmModal';
import { HapticFeedback } from '@/utils/haptics';

export default function SettingsScreen() {
  const theme = useAppTheme();
  const [lastSync, setLastSync] = useState<string | null>(null);
  const [cacheSize, setCacheSize] = useState<string>('0 KB');
  const [settings, setSettings] = useState<AppSettings>({
    notificationsEnabled: true,
    soundsEnabled: true,
    hapticsEnabled: true,
    themeVariant: 'default',
  });
  const [showSyncModal, setShowSyncModal] = useState(false);
  const [showClearModal, setShowClearModal] = useState(false);

  const fadeOpacity = useSharedValue(0);

  useEffect(() => {
    loadSettings();
    fadeOpacity.value = withTiming(1, {
      duration: 600,
      easing: Easing.inOut(Easing.ease),
    });
  }, [fadeOpacity]);

  const loadSettings = async () => {
    const syncTime = await storage.getLastSync();
    setLastSync(syncTime);
    
    const categoriesSize = JSON.stringify(categories).length;
    const factsSize = JSON.stringify(paranormalFacts).length;
    const totalSize = (categoriesSize + factsSize) / 1024;
    setCacheSize(`${totalSize.toFixed(2)} KB`);

    const savedSettings = await storage.getSettings();
    setSettings(savedSettings);
  };

  const handleToggleSetting = async (key: keyof AppSettings) => {
    const newValue = !settings[key];
    setSettings({ ...settings, [key]: newValue });
    await storage.updateSetting(key, newValue);
    
    if (settings.hapticsEnabled) {
      HapticFeedback.light();
    }
  };

  const handleSyncData = async () => {
    if (settings.hapticsEnabled) {
      HapticFeedback.medium();
    }
    
    await storage.saveCategories(categories);
    await storage.saveFacts(paranormalFacts);
    await storage.saveLastSync();
    await loadSettings();
    setShowSyncModal(false);
    
    if (settings.hapticsEnabled) {
      HapticFeedback.success();
    }
  };

  const handleClearCache = async () => {
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
            <Text style={styles.headerTitle}>Settings</Text>
            <Text style={styles.headerSubtitle}>
              Manage your paranormal encyclopedia
            </Text>
          </View>

          <Animated.View style={[styles.animatedContainer, animatedStyle]}>
            <ScrollView
              style={styles.scrollView}
              contentContainerStyle={styles.contentContainer}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Preferences</Text>
                
                <View style={styles.settingCard}>
                  <View style={styles.settingRow}>
                    <View style={styles.settingInfo}>
                      <Text style={styles.settingIcon}>🔔</Text>
                      <View style={styles.settingTextContainer}>
                        <Text style={styles.settingLabel}>Notifications</Text>
                        <Text style={styles.settingDescription}>
                          Receive updates about new content
                        </Text>
                      </View>
                    </View>
                    <Switch
                      value={settings.notificationsEnabled}
                      onValueChange={() => handleToggleSetting('notificationsEnabled')}
                      trackColor={{ false: '#3e3e3e', true: '#8B5CF6' }}
                      thumbColor={settings.notificationsEnabled ? '#FFFFFF' : '#f4f3f4'}
                    />
                  </View>

                  <View style={styles.settingDivider} />

                  <View style={styles.settingRow}>
                    <View style={styles.settingInfo}>
                      <Text style={styles.settingIcon}>🔊</Text>
                      <View style={styles.settingTextContainer}>
                        <Text style={styles.settingLabel}>Sounds</Text>
                        <Text style={styles.settingDescription}>
                          Play sound effects
                        </Text>
                      </View>
                    </View>
                    <Switch
                      value={settings.soundsEnabled}
                      onValueChange={() => handleToggleSetting('soundsEnabled')}
                      trackColor={{ false: '#3e3e3e', true: '#8B5CF6' }}
                      thumbColor={settings.soundsEnabled ? '#FFFFFF' : '#f4f3f4'}
                    />
                  </View>

                  <View style={styles.settingDivider} />

                  <View style={styles.settingRow}>
                    <View style={styles.settingInfo}>
                      <Text style={styles.settingIcon}>📳</Text>
                      <View style={styles.settingTextContainer}>
                        <Text style={styles.settingLabel}>Haptic Feedback</Text>
                        <Text style={styles.settingDescription}>
                          Feel vibrations on interactions
                        </Text>
                      </View>
                    </View>
                    <Switch
                      value={settings.hapticsEnabled}
                      onValueChange={() => handleToggleSetting('hapticsEnabled')}
                      trackColor={{ false: '#3e3e3e', true: '#8B5CF6' }}
                      thumbColor={settings.hapticsEnabled ? '#FFFFFF' : '#f4f3f4'}
                    />
                  </View>
                </View>
              </View>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Data & Storage</Text>
                
                <View style={styles.infoCard}>
                  <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Categories</Text>
                    <Text style={styles.infoValue}>{categories.length}</Text>
                  </View>
                  <View style={styles.infoDivider} />
                  <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Facts</Text>
                    <Text style={styles.infoValue}>{paranormalFacts.length}</Text>
                  </View>
                  <View style={styles.infoDivider} />
                  <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Cache Size</Text>
                    <Text style={styles.infoValue}>{cacheSize}</Text>
                  </View>
                  <View style={styles.infoDivider} />
                  <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Last Sync</Text>
                    <Text style={styles.infoValue}>{formatDate(lastSync)}</Text>
                  </View>
                </View>

                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={() => {
                    if (settings.hapticsEnabled) {
                      HapticFeedback.light();
                    }
                    setShowSyncModal(true);
                  }}
                >
                  <Text style={styles.actionButtonEmoji}>🔄</Text>
                  <View style={styles.actionButtonTextContainer}>
                    <Text style={styles.actionButtonTitle}>Sync Data</Text>
                    <Text style={styles.actionButtonSubtitle}>
                      Refresh cached data for offline use
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.actionButton, styles.dangerButton]}
                  onPress={() => {
                    if (settings.hapticsEnabled) {
                      HapticFeedback.light();
                    }
                    setShowClearModal(true);
                  }}
                >
                  <Text style={styles.actionButtonEmoji}>🗑️</Text>
                  <View style={styles.actionButtonTextContainer}>
                    <Text style={styles.actionButtonTitle}>Clear Cache</Text>
                    <Text style={styles.actionButtonSubtitle}>
                      Remove all cached data
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>About</Text>
                
                <View style={styles.infoCard}>
                  <Text style={styles.aboutText}>
                    Paranormal Encyclopedia is your gateway to exploring the mysteries of the unknown. 
                    Discover cryptids, UFOs, ghosts, ancient mysteries, and more.
                  </Text>
                  <View style={styles.infoDivider} />
                  <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Version</Text>
                    <Text style={styles.infoValue}>1.0.0</Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </Animated.View>
        </SafeAreaView>

        <ConfirmModal
          visible={showSyncModal}
          title="Sync Data"
          message="This will refresh all cached data for offline use."
          confirmText="Sync"
          cancelText="Cancel"
          onConfirm={handleSyncData}
          onCancel={() => setShowSyncModal(false)}
        />

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
    color: '#FFFFFF',
    fontFamily: 'SpaceMono',
    textShadowColor: 'rgba(139, 92, 246, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#B0B0B0',
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
    paddingBottom: 100,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    fontFamily: 'SpaceMono',
    marginBottom: 16,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  settingCard: {
    backgroundColor: 'rgba(42, 27, 78, 0.6)',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(139, 92, 246, 0.3)',
    marginBottom: 12,
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
    color: '#FFFFFF',
    fontFamily: 'SpaceMono',
    marginBottom: 2,
  },
  settingDescription: {
    fontSize: 12,
    color: '#B0B0B0',
    fontFamily: 'SpaceMono',
  },
  settingDivider: {
    height: 1,
    backgroundColor: 'rgba(139, 92, 246, 0.2)',
    marginVertical: 12,
  },
  infoCard: {
    backgroundColor: 'rgba(42, 27, 78, 0.6)',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(139, 92, 246, 0.3)',
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  infoLabel: {
    fontSize: 14,
    color: '#B0B0B0',
    fontFamily: 'SpaceMono',
  },
  infoValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
    fontFamily: 'SpaceMono',
  },
  infoDivider: {
    height: 1,
    backgroundColor: 'rgba(139, 92, 246, 0.2)',
    marginVertical: 8,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(42, 27, 78, 0.6)',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(139, 92, 246, 0.3)',
    marginBottom: 12,
  },
  dangerButton: {
    borderColor: 'rgba(239, 68, 68, 0.3)',
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
    color: '#FFFFFF',
    fontFamily: 'SpaceMono',
    marginBottom: 4,
  },
  actionButtonSubtitle: {
    fontSize: 12,
    color: '#B0B0B0',
    fontFamily: 'SpaceMono',
  },
  aboutText: {
    fontSize: 14,
    color: '#B0B0B0',
    lineHeight: 22,
    fontFamily: 'SpaceMono',
    marginBottom: 16,
  },
});
