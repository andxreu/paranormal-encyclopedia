
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { useAppTheme } from '@/contexts/ThemeContext';
import { storage } from '@/utils/storage';
import { getCategoryTopics, getCategoryById } from '@/data/paranormal/categories';
import { SortModal, SortOption } from '@/components/SortModal';
import { ConfirmModal } from '@/components/ConfirmModal';
import { HapticFeedback } from '@/utils/haptics';

interface FavoriteItem {
  id: string;
  categoryId: string;
  topicId: string;
  name: string;
  description: string;
  categoryName: string;
  categoryColor: string;
}

export default function FavoritesScreen() {
  const { theme, textScale } = useAppTheme();
  const router = useRouter();
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>('date-added');
  const [showSortModal, setShowSortModal] = useState(false);
  const [showClearModal, setShowClearModal] = useState(false);

  const fadeOpacity = useSharedValue(0);

  useEffect(() => {
    loadFavorites();
  }, []);

  useEffect(() => {
    fadeOpacity.value = withTiming(1, {
      duration: 600,
      easing: Easing.inOut(Easing.ease),
    });
  }, [fadeOpacity]);

  const loadFavorites = async () => {
    const savedFavorites = await storage.getFavorites();
    const favoriteItems: FavoriteItem[] = [];

    for (const favoriteId of savedFavorites) {
      const [categoryId, topicId] = favoriteId.split('-');
      const category = getCategoryById(categoryId);
      const topics = getCategoryTopics(categoryId);
      const topic = topics.find((t: any) => t.id === topicId);

      if (category && topic) {
        favoriteItems.push({
          id: favoriteId,
          categoryId,
          topicId,
          name: topic.name,
          description: topic.description,
          categoryName: category.name,
          categoryColor: category.color,
        });
      }
    }

    setFavorites(favoriteItems);
  };

  const handleSort = (option: SortOption) => {
    setSortBy(option);
    const sorted = [...favorites];
    
    switch (option) {
      case 'name':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'date-added':
        break;
      case 'category':
        sorted.sort((a, b) => a.categoryName.localeCompare(b.categoryName));
        break;
    }
    
    setFavorites(sorted);
    HapticFeedback.success();
  };

  const handleClearFavorites = async () => {
    await storage.saveFavorites([]);
    setFavorites([]);
    setShowClearModal(false);
    HapticFeedback.success();
  };

  const handleFavoritePress = (favorite: FavoriteItem) => {
    HapticFeedback.light();
    router.push(`/explore/${favorite.categoryId}/${favorite.topicId}`);
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
            <View>
              <Text style={[styles.headerTitle, { color: theme.colors.textPrimary, fontSize: 32 * textScale }]}>
                Favorites
              </Text>
              <Text style={[styles.headerSubtitle, { color: theme.colors.textSecondary, fontSize: 14 * textScale }]}>
                {favorites.length} saved items
              </Text>
            </View>
          </View>

          <Animated.View style={[styles.animatedContainer, animatedStyle]}>
            <ScrollView
              style={styles.scrollView}
              contentContainerStyle={styles.contentContainer}
              showsVerticalScrollIndicator={false}
            >
              {favorites.length === 0 ? (
                <View style={styles.emptyContainer}>
                  <Text style={styles.emptyEmoji}>⭐</Text>
                  <Text style={[styles.emptyTitle, { color: theme.colors.textPrimary, fontSize: 24 * textScale }]}>
                    No Favorites Yet
                  </Text>
                  <Text style={[styles.emptyText, { color: theme.colors.textSecondary, fontSize: 14 * textScale }]}>
                    Start exploring and save your favorite paranormal topics!
                  </Text>
                </View>
              ) : (
                <>
                  <View style={styles.actionBar}>
                    <TouchableOpacity
                      style={[styles.sortButton, { backgroundColor: theme.colors.cardBg, borderColor: theme.colors.border }]}
                      onPress={() => {
                        HapticFeedback.light();
                        setShowSortModal(true);
                      }}
                      accessibilityLabel="Sort favorites"
                      accessibilityRole="button"
                    >
                      <Text style={styles.sortButtonIcon}>⇅</Text>
                      <Text style={[styles.sortButtonText, { color: theme.colors.textPrimary, fontSize: 14 * textScale }]}>
                        Sort
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.clearButton}
                      onPress={() => {
                        HapticFeedback.light();
                        setShowClearModal(true);
                      }}
                      accessibilityLabel="Clear all favorites"
                      accessibilityRole="button"
                    >
                      <Text style={[styles.clearButtonText, { fontSize: 14 * textScale }]}>
                        Clear All
                      </Text>
                    </TouchableOpacity>
                  </View>

                  {favorites.map((favorite, index) => (
                    <React.Fragment key={index}>
                      <TouchableOpacity
                        style={styles.favoriteCard}
                        onPress={() => handleFavoritePress(favorite)}
                        activeOpacity={0.8}
                        accessibilityLabel={favorite.name}
                        accessibilityHint={`${favorite.categoryName} topic`}
                        accessibilityRole="button"
                      >
                        <LinearGradient
                          colors={[favorite.categoryColor + '40', favorite.categoryColor + '20', theme.colors.cardBg]}
                          start={{ x: 0, y: 0 }}
                          end={{ x: 1, y: 1 }}
                          style={[styles.favoriteCardGradient, { borderColor: favorite.categoryColor + '60', borderLeftColor: favorite.categoryColor }]}
                        >
                          <View style={styles.favoriteCardContent}>
                            <View style={[styles.categoryBadge, { backgroundColor: favorite.categoryColor + '30' }]}>
                              <Text style={[styles.categoryBadgeText, { color: theme.colors.textPrimary, fontSize: 10 * textScale }]}>
                                {favorite.categoryName}
                              </Text>
                            </View>
                            <Text style={[styles.favoriteTitle, { color: theme.colors.textPrimary, fontSize: 16 * textScale }]}>
                              {favorite.name}
                            </Text>
                            <Text style={[styles.favoriteDescription, { color: theme.colors.textSecondary, fontSize: 13 * textScale }]} numberOfLines={2}>
                              {favorite.description}
                            </Text>
                          </View>
                        </LinearGradient>
                      </TouchableOpacity>
                    </React.Fragment>
                  ))}
                </>
              )}
            </ScrollView>
          </Animated.View>
        </SafeAreaView>

        <SortModal
          visible={showSortModal}
          currentSort={sortBy}
          onSelectSort={handleSort}
          onClose={() => setShowSortModal(false)}
        />

        <ConfirmModal
          visible={showClearModal}
          title="Clear All Favorites"
          message="Are you sure you want to remove all favorites? This action cannot be undone."
          confirmText="Clear"
          cancelText="Cancel"
          onConfirm={handleClearFavorites}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    paddingBottom: 100,
  },
  actionBar: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  sortButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 8,
  },
  sortButtonIcon: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  sortButtonText: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'SpaceMono',
  },
  clearButton: {
    flex: 1,
    backgroundColor: 'rgba(239, 68, 68, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(239, 68, 68, 0.4)',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ef4444',
    fontFamily: 'SpaceMono',
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
    fontFamily: 'SpaceMono',
    marginBottom: 12,
  },
  emptyText: {
    fontSize: 14,
    fontFamily: 'SpaceMono',
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 40,
  },
  favoriteCard: {
    borderRadius: 16,
    marginBottom: 12,
    overflow: 'hidden',
    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.3)',
    elevation: 4,
  },
  favoriteCardGradient: {
    padding: 16,
    borderWidth: 1,
    borderLeftWidth: 4,
    borderRadius: 16,
  },
  favoriteCardContent: {
    gap: 8,
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  categoryBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    fontFamily: 'SpaceMono',
    textTransform: 'uppercase',
  },
  favoriteTitle: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'SpaceMono',
  },
  favoriteDescription: {
    fontSize: 13,
    lineHeight: 20,
    fontFamily: 'SpaceMono',
  },
});
