
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppTheme } from '@/contexts/ThemeContext';
import { storage } from '@/utils/storage';
import { categories } from '@/data/paranormal/categories';
import { paranormalFacts } from '@/data/paranormal/facts';

export default function SettingsScreen() {
  const theme = useAppTheme();
  const [lastSync, setLastSync] = useState<string | null>(null);
  const [cacheSize, setCacheSize] = useState<string>('0 KB');

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    const syncTime = await storage.getLastSync();
    setLastSync(syncTime);
    
    // Calculate approximate cache size
    const categoriesSize = JSON.stringify(categories).length;
    const factsSize = JSON.stringify(paranormalFacts).length;
    const totalSize = (categoriesSize + factsSize) / 1024;
    setCacheSize(`${totalSize.toFixed(2)} KB`);
  };

  const handleSyncData = async () => {
    Alert.alert(
      'Sync Data',
      'This will refresh all cached data for offline use.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Sync',
          onPress: async () => {
            await storage.saveCategories(categories);
            await storage.saveFacts(paranormalFacts);
            await storage.saveLastSync();
            await loadSettings();
            Alert.alert('Success', 'Data synced successfully!');
          },
        },
      ]
    );
  };

  const handleClearCache = async () => {
    Alert.alert(
      'Clear Cache',
      'This will remove all cached data. You can re-sync anytime.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Clear',
          style: 'destructive',
          onPress: async () => {
            await storage.clearAll();
            setLastSync(null);
            setCacheSize('0 KB');
            Alert.alert('Success', 'Cache cleared successfully!');
          },
        },
      ]
    );
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Never';
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
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
            <Text style={styles.headerTitle}>Settings</Text>
            <Text style={styles.headerSubtitle}>
              Manage your paranormal encyclopedia
            </Text>
          </View>

          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
          >
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
                onPress={handleSyncData}
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
                onPress={handleClearCache}
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
