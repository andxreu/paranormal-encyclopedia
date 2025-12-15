
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  FadeIn,
} from 'react-native-reanimated';
import { useAppTheme } from '@/contexts/ThemeContext';
import { recentTopicsService, RecentTopic } from '@/utils/recentTopics';
import { HapticFeedback } from '@/utils/haptics';

export const ContinueReading: React.FC = () => {
  const { theme, textScale } = useAppTheme();
  const router = useRouter();
  const [recentTopics, setRecentTopics] = useState<RecentTopic[]>([]);

  useEffect(() => {
    loadRecentTopics();
  }, []);

  const loadRecentTopics = async () => {
    const topics = await recentTopicsService.getRecentTopics();
    setRecentTopics(topics.slice(0, 3));
  };

  const handleTopicPress = useCallback((topic: RecentTopic) => {
    try {
      HapticFeedback.light();
      console.log('NAV', `/explore/${topic.categoryId}/${topic.topicId}`, { category: topic.categoryId, topic: topic.topicId });
      router.push({
        pathname: `/explore/[category]/[topic]`,
        params: { category: topic.categoryId, topic: topic.topicId }
      });
    } catch (error) {
      console.error('[ContinueReading] Navigation error:', error);
    }
  }, [router]);

  if (recentTopics.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.colors.textPrimary, fontSize: 20 * textScale }]}>
          Continue Reading
        </Text>
        <Text style={[styles.subtitle, { color: theme.colors.textSecondary, fontSize: 13 * textScale }]}>
          Pick up where you left off
        </Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {recentTopics.map((topic, index) => (
          <RecentTopicCard
            key={`${topic.categoryId}-${topic.topicId}`}
            topic={topic}
            index={index}
            onPress={() => handleTopicPress(topic)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

interface RecentTopicCardProps {
  topic: RecentTopic;
  index: number;
  onPress: () => void;
}

const RecentTopicCard: React.FC<RecentTopicCardProps> = ({ topic, index, onPress }) => {
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

  const progress = topic.progress || 0;

  return (
    <Animated.View
      entering={FadeIn.delay(index * 100).duration(400)}
      style={styles.cardWrapper}
    >
      <TouchableOpacity
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={1}
        accessibilityLabel={`Continue reading ${topic.title}`}
        accessibilityRole="button"
      >
        <Animated.View style={animatedStyle}>
          <LinearGradient
            colors={[topic.categoryColor + '40', topic.categoryColor + '20', theme.colors.cardBg]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.card, { borderColor: topic.categoryColor + '60' }]}
          >
            <Text style={styles.cardIcon}>{topic.categoryIcon}</Text>
            
            <View style={[styles.categoryBadge, { backgroundColor: topic.categoryColor + '30' }]}>
              <Text style={[styles.categoryBadgeText, { color: theme.colors.textPrimary, fontSize: 9 * textScale }]}>
                {topic.categoryName}
              </Text>
            </View>

            <Text style={[styles.cardTitle, { color: theme.colors.textPrimary, fontSize: 14 * textScale }]} numberOfLines={2}>
              {topic.title}
            </Text>

            {progress > 0 && (
              <View style={styles.progressContainer}>
                <View style={[styles.progressBar, { backgroundColor: theme.colors.border }]}>
                  <View
                    style={[
                      styles.progressFill,
                      { width: `${progress}%`, backgroundColor: topic.categoryColor },
                    ]}
                  />
                </View>
                <Text style={[styles.progressText, { color: theme.colors.textSecondary, fontSize: 10 * textScale }]}>
                  {Math.round(progress)}% read
                </Text>
              </View>
            )}

            <View style={[styles.cardBorder, { borderColor: topic.categoryColor + '40' }]} />
          </LinearGradient>
        </Animated.View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  header: {
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    fontFamily: 'SpaceMono',
    marginBottom: 4,
    textShadowColor: 'rgba(139, 92, 246, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  subtitle: {
    fontSize: 13,
    fontFamily: 'SpaceMono',
  },
  scrollContent: {
    paddingRight: 16,
  },
  cardWrapper: {
    marginRight: 12,
  },
  card: {
    width: 160,
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    minHeight: 180,
    boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.35)',
    elevation: 6,
    overflow: 'hidden',
  },
  cardIcon: {
    fontSize: 36,
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: 10,
  },
  categoryBadgeText: {
    fontSize: 9,
    fontWeight: '700',
    fontFamily: 'SpaceMono',
    textTransform: 'uppercase',
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'SpaceMono',
    lineHeight: 18,
    marginBottom: 12,
  },
  progressContainer: {
    marginTop: 'auto',
  },
  progressBar: {
    height: 4,
    borderRadius: 2,
    overflow: 'hidden',
    marginBottom: 6,
  },
  progressFill: {
    height: '100%',
    borderRadius: 2,
  },
  progressText: {
    fontSize: 10,
    fontFamily: 'SpaceMono',
    fontWeight: '600',
  },
  cardBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 16,
    borderWidth: 1.5,
    opacity: 0.3,
  },
});
