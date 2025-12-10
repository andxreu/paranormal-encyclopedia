
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppTheme } from '@/contexts/ThemeContext';
import { storage } from '@/utils/storage';

export default function FavoritesScreen() {
  const theme = useAppTheme();
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    const savedFavorites = await storage.getFavorites();
    if (savedFavorites) {
      setFavorites(savedFavorites);
    }
  };

  const handleClearFavorites = () => {
    Alert.alert(
      'Clear Favorites',
      'Are you sure you want to clear all favorites?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Clear',
          style: 'destructive',
          onPress: async () => {
            await storage.saveFavorites([]);
            setFavorites([]);
          },
        },
      ]
    );
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
            <Text style={styles.headerTitle}>Favorites</Text>
            <Text style={styles.headerSubtitle}>
              {favorites.length} saved items
            </Text>
          </View>

          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
          >
            {favorites.length === 0 ? (
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyEmoji}>⭐</Text>
                <Text style={styles.emptyTitle}>No Favorites Yet</Text>
                <Text style={styles.emptyText}>
                  Start exploring and save your favorite paranormal facts and topics!
                </Text>
              </View>
            ) : (
              <>
                <TouchableOpacity
                  style={styles.clearButton}
                  onPress={handleClearFavorites}
                >
                  <Text style={styles.clearButtonText}>Clear All</Text>
                </TouchableOpacity>
                {favorites.map((favorite, index) => (
                  <React.Fragment key={index}>
                    <View style={styles.favoriteCard}>
                      <Text style={styles.favoriteText}>{favorite}</Text>
                    </View>
                  </React.Fragment>
                ))}
              </>
            )}
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
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
  },
  emptyEmoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    fontFamily: 'SpaceMono',
    marginBottom: 12,
  },
  emptyText: {
    fontSize: 14,
    color: '#B0B0B0',
    fontFamily: 'SpaceMono',
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 40,
  },
  clearButton: {
    backgroundColor: 'rgba(239, 68, 68, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(239, 68, 68, 0.4)',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignSelf: 'flex-end',
    marginBottom: 16,
  },
  clearButtonText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#ef4444',
    fontFamily: 'SpaceMono',
  },
  favoriteCard: {
    backgroundColor: 'rgba(42, 27, 78, 0.6)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(139, 92, 246, 0.3)',
    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.3)',
    elevation: 4,
  },
  favoriteText: {
    fontSize: 14,
    color: '#FFFFFF',
    lineHeight: 22,
    fontFamily: 'SpaceMono',
  },
});
