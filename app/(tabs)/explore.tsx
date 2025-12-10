
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, RefreshControl, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import { useAppTheme } from '@/contexts/ThemeContext';
import { categories, Category } from '@/data/paranormal/categories';
import { ParticleEffect } from '@/components/ParticleEffect';
import { HapticFeedback } from '@/utils/haptics';

const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 2;

const CategoryGridCard: React.FC<{ category: Category; onPress: () => void }> = ({ category, onPress }) => {
  const { theme, textScale } = useAppTheme();
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePressIn = () => {
    HapticFeedback.soft();
    scale.value = withSpring(0.95, {
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
    >
      <Animated.View style={animatedStyle}>
        <LinearGradient
          colors={[category.color + '80', category.color + '40', theme.colors.cardBg]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.card, { borderColor: theme.colors.border }]}
        >
          <ParticleEffect count={4} color={category.color + '60'} />
          
          <View style={styles.cardContent}>
            <Text style={styles.cardIcon}>{category.icon}</Text>
            <Text style={[styles.cardName, { color: theme.colors.textPrimary, fontSize: 16 * textScale }]}>
              {category.name}
            </Text>
            <Text style={[styles.cardCode, { color: category.color, fontSize: 12 * textScale }]}>
              {category.code}
            </Text>
            <Text style={[styles.cardDescription, { color: theme.colors.textSecondary, fontSize: 11 * textScale }]} numberOfLines={2}>
              {category.description}
            </Text>
            <View style={[styles.topicCount, { backgroundColor: theme.colors.cardBgTranslucent, borderColor: theme.colors.border }]}>
              <Text style={[styles.topicCountText, { color: theme.colors.textPrimary, fontSize: 10 * textScale }]}>
                {category.topics.length} topics
              </Text>
            </View>
          </View>
          <View style={[styles.cardBorder, { borderColor: category.color + '60' }]} />
          <View style={[styles.cardGlow, { backgroundColor: category.color }]} />
        </LinearGradient>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default function ExploreScreen() {
  const { theme, textScale } = useAppTheme();
  const [refreshing, setRefreshing] = useState(false);

  const handleCategoryPress = (category: Category) => {
    HapticFeedback.light();
    console.log('Category pressed:', category.name);
    Alert.alert(
      category.name,
      `${category.description}\n\nTopics: ${category.topics.length}`,
      [{ text: 'OK' }]
    );
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

  const totalTopics = categories.reduce((sum, cat) => sum + cat.topics.length, 0);

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
            <Text style={[styles.headerTitle, { color: theme.colors.textPrimary, fontSize: 36 * textScale }]}>
              Explore
            </Text>
            <Text style={[styles.headerSubtitle, { color: theme.colors.textSecondary, fontSize: 14 * textScale }]}>
              {categories.length} Categories • {totalTopics} Topics
            </Text>
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
            <View style={styles.grid}>
              {categories.map((category, index) => (
                <React.Fragment key={index}>
                  <CategoryGridCard
                    category={category}
                    onPress={() => handleCategoryPress(category)}
                  />
                </React.Fragment>
              ))}
            </View>

            <View style={styles.bottomSpacer} />
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
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: '900',
    fontFamily: 'SpaceMono',
    textShadowColor: 'rgba(139, 92, 246, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  headerSubtitle: {
    fontSize: 14,
    fontFamily: 'SpaceMono',
    marginTop: 6,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardWrapper: {
    width: cardWidth,
    marginBottom: 16,
  },
  card: {
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    minHeight: 200,
    boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.4)',
    elevation: 8,
    overflow: 'hidden',
  },
  cardContent: {
    alignItems: 'center',
    zIndex: 2,
  },
  cardIcon: {
    fontSize: 56,
    marginBottom: 12,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  cardName: {
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'center',
    fontFamily: 'SpaceMono',
    marginBottom: 6,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  cardCode: {
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: 'SpaceMono',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 11,
    textAlign: 'center',
    fontFamily: 'SpaceMono',
    lineHeight: 16,
    marginBottom: 12,
  },
  topicCount: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
  },
  topicCountText: {
    fontSize: 10,
    fontWeight: '700',
    fontFamily: 'SpaceMono',
  },
  cardBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 20,
    borderWidth: 2,
    opacity: 0.4,
  },
  cardGlow: {
    position: 'absolute',
    top: -50,
    right: -50,
    width: 100,
    height: 100,
    borderRadius: 50,
    opacity: 0.15,
  },
  bottomSpacer: {
    height: 20,
  },
});
