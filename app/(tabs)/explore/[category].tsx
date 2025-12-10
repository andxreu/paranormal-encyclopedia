
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, RefreshControl } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  Easing,
  FadeIn,
} from 'react-native-reanimated';
import { useAppTheme } from '@/contexts/ThemeContext';
import { getCategoryById } from '@/data/paranormal/categories';
import { getCategoryTopics } from '@/data/paranormal';
import { ParticleEffect } from '@/components/ParticleEffect';
import { HapticFeedback } from '@/utils/haptics';

const { width } = Dimensions.get('window');
const cardWidth = width - 32;

interface TopicCardProps {
  topic: any;
  categoryColor: string;
  onPress: () => void;
  index: number;
}

const TopicCard: React.FC<TopicCardProps> = ({ topic, categoryColor, onPress, index }) => {
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
    <Animated.View entering={FadeIn.delay(index * 80).duration(400)} style={styles.topicCardWrapper}>
      <TouchableOpacity
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={1}
        accessibilityLabel={topic.name}
        accessibilityHint={topic.description}
        accessibilityRole="button"
      >
        <Animated.View style={animatedStyle}>
          <LinearGradient
            colors={[categoryColor + '40', categoryColor + '20', theme.colors.cardBg]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.topicCard, { borderColor: categoryColor + '60' }]}
          >
            <ParticleEffect count={3} color={categoryColor + '40'} />
            
            <View style={styles.topicCardContent}>
              <View style={styles.topicTextContainer}>
                <Text style={[styles.topicName, { color: theme.colors.textPrimary, fontSize: 18 * textScale }]}>
                  {topic.name}
                </Text>
                <Text style={[styles.topicDescription, { color: theme.colors.textSecondary, fontSize: 13 * textScale }]} numberOfLines={2}>
                  {topic.description}
                </Text>
              </View>
              
              <View style={[styles.sectionBadge, { backgroundColor: categoryColor + '30', borderColor: categoryColor + '60' }]}>
                <Text style={[styles.sectionBadgeText, { color: theme.colors.textPrimary, fontSize: 11 * textScale }]}>
                  {topic.sections?.length || 0} sections
                </Text>
              </View>
            </View>
            
            <View style={[styles.topicCardBorder, { borderColor: categoryColor + '60' }]} />
          </LinearGradient>
        </Animated.View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default function CategoryScreen() {
  const { category: categoryId } = useLocalSearchParams<{ category: string }>();
  const router = useRouter();
  const { theme, textScale } = useAppTheme();
  const [refreshing, setRefreshing] = useState(false);
  const [category, setCategory] = useState<any>(null);
  const [topics, setTopics] = useState<any[]>([]);

  const fadeOpacity = useSharedValue(0);
  const scale = useSharedValue(0.95);

  const loadCategoryData = useCallback(() => {
    if (!categoryId) return;

    const categoryData = getCategoryById(categoryId as string);
    const categoryTopics = getCategoryTopics(categoryId as string);

    setCategory(categoryData);
    setTopics(categoryTopics);

    fadeOpacity.value = withTiming(1, {
      duration: 600,
      easing: Easing.inOut(Easing.ease),
    });

    scale.value = withTiming(1, {
      duration: 600,
      easing: Easing.out(Easing.ease),
    });
  }, [categoryId, fadeOpacity, scale]);

  useEffect(() => {
    loadCategoryData();
  }, [loadCategoryData]);

  const handleTopicPress = (topic: any) => {
    HapticFeedback.light();
    console.log('Topic pressed:', topic.name);
    router.push(`/explore/${categoryId}/${topic.id}`);
  };

  const handleBackPress = () => {
    HapticFeedback.light();
    router.back();
  };

  const onRefresh = async () => {
    HapticFeedback.medium();
    setRefreshing(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      loadCategoryData();
      HapticFeedback.success();
    } catch (error) {
      console.error('Error refreshing:', error);
      HapticFeedback.error();
    } finally {
      setRefreshing(false);
    }
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeOpacity.value,
      transform: [{ scale: scale.value }],
    };
  });

  if (!category) {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={theme.colors.backgroundGradient}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <SafeAreaView style={styles.safeArea} edges={['top']}>
            <Text style={[styles.errorText, { color: theme.colors.textPrimary }]}>Category not found</Text>
          </SafeAreaView>
        </LinearGradient>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[category.color + '20', ...theme.colors.backgroundGradient.slice(1)]}
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
                <Text style={styles.categoryIcon}>{category.icon}</Text>
                <Text style={[styles.categoryTitle, { color: theme.colors.textPrimary, fontSize: 32 * textScale }]}>
                  {category.name}
                </Text>
                <Text style={[styles.categoryDescription, { color: theme.colors.textSecondary, fontSize: 14 * textScale }]}>
                  {category.description}
                </Text>
                <View style={[styles.topicCountBadge, { backgroundColor: category.color + '30', borderColor: category.color + '60' }]}>
                  <Text style={[styles.topicCountText, { color: theme.colors.textPrimary, fontSize: 12 * textScale }]}>
                    {topics.length} Topics
                  </Text>
                </View>
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
                  tintColor={category.color}
                  colors={[category.color, theme.colors.violet, theme.colors.indigo]}
                  progressBackgroundColor={theme.colors.cardBg}
                />
              }
            >
              <ParticleEffect count={8} color={category.color + '30'} />
              
              {topics.map((topic, index) => (
                <React.Fragment key={index}>
                  <TopicCard
                    topic={topic}
                    categoryColor={category.color}
                    onPress={() => handleTopicPress(topic)}
                    index={index}
                  />
                </React.Fragment>
              ))}

              <View style={styles.bottomSpacer} />
            </ScrollView>
          </Animated.View>
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
  categoryIcon: {
    fontSize: 64,
    marginBottom: 12,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  categoryTitle: {
    fontSize: 32,
    fontWeight: '900',
    fontFamily: 'SpaceMono',
    textAlign: 'center',
    marginBottom: 8,
    textShadowColor: 'rgba(139, 92, 246, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  categoryDescription: {
    fontSize: 14,
    fontFamily: 'SpaceMono',
    textAlign: 'center',
    marginBottom: 12,
    paddingHorizontal: 20,
  },
  topicCountBadge: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    borderWidth: 1,
  },
  topicCountText: {
    fontSize: 12,
    fontWeight: '700',
    fontFamily: 'SpaceMono',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  topicCardWrapper: {
    marginBottom: 16,
  },
  topicCard: {
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.4)',
    elevation: 8,
    overflow: 'hidden',
  },
  topicCardContent: {
    zIndex: 2,
  },
  topicTextContainer: {
    marginBottom: 12,
  },
  topicName: {
    fontSize: 18,
    fontWeight: '800',
    fontFamily: 'SpaceMono',
    marginBottom: 6,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  topicDescription: {
    fontSize: 13,
    fontFamily: 'SpaceMono',
    lineHeight: 18,
  },
  sectionBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
  },
  sectionBadgeText: {
    fontSize: 11,
    fontWeight: '700',
    fontFamily: 'SpaceMono',
  },
  topicCardBorder: {
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
  errorText: {
    fontSize: 18,
    fontFamily: 'SpaceMono',
    textAlign: 'center',
    marginTop: 40,
  },
});
