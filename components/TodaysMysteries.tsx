
import React, { useState, useEffect, useCallback, memo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
  Easing,
} from 'react-native-reanimated';
import { getAllTopics, getCategoryById } from '@/data/paranormal/categories';
import { useAppTheme } from '@/contexts/ThemeContext';
import { HapticFeedback } from '@/utils/haptics';

interface MysteryCard {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  color: string;
  icon: string;
  label: string;
}

export const TodaysMysteries = memo(() => {
  const theme = useAppTheme();
  const router = useRouter();
  const [mysteries, setMysteries] = useState<MysteryCard[]>([]);
  const fadeOpacity = useSharedValue(1);

  const generateMysteries = useCallback(() => {
    const allTopics = getAllTopics();
    const shuffled = [...allTopics].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    const labels = ['Daily Mystery', 'Deep Cut', 'Hidden Gem'];
    const newMysteries = selected.map((topic, index) => {
      const category = getCategoryById(topic.categoryId);
      return {
        id: topic.id,
        categoryId: topic.categoryId,
        title: topic.name,
        description: topic.description,
        color: category?.color || '#8B5CF6',
        icon: category?.icon || '🔮',
        label: labels[index],
      };
    });

    setMysteries(newMysteries);
  }, []);

  useEffect(() => {
    generateMysteries();
  }, [generateMysteries]);

  const handleReroll = useCallback(() => {
    HapticFeedback.medium();
    
    fadeOpacity.value = withSequence(
      withTiming(0, {
        duration: 200,
        easing: Easing.inOut(Easing.ease),
      }),
      withTiming(1, {
        duration: 400,
        easing: Easing.inOut(Easing.ease),
      })
    );

    setTimeout(() => {
      generateMysteries();
    }, 200);
  }, [fadeOpacity, generateMysteries]);

  const handleMysteryPress = useCallback((mystery: MysteryCard) => {
    HapticFeedback.light();
    console.log('Navigating to topic:', mystery.categoryId, mystery.id);
    router.push(`/explore/${mystery.categoryId}/${mystery.id}`);
  }, [router]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeOpacity.value,
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.emoji}>🌙</Text>
          <Text style={styles.title}>Today&apos;s Mysteries</Text>
        </View>
        <TouchableOpacity
          style={styles.rerollButton}
          onPress={handleReroll}
          activeOpacity={0.7}
          accessibilityLabel="Reroll mysteries"
          accessibilityHint="Get three new random mysteries"
          accessibilityRole="button"
        >
          <Text style={styles.rerollIcon}>🔄</Text>
        </TouchableOpacity>
      </View>

      <Animated.View style={[styles.cardsContainer, animatedStyle]}>
        {mysteries.map((mystery) => (
          <TouchableOpacity
            key={`${mystery.categoryId}-${mystery.id}`}
            style={styles.cardWrapper}
            onPress={() => handleMysteryPress(mystery)}
            activeOpacity={0.8}
            accessibilityLabel={`${mystery.label}: ${mystery.title}`}
            accessibilityHint={mystery.description}
            accessibilityRole="button"
          >
            <LinearGradient
              colors={[mystery.color + '60', mystery.color + '20', 'rgba(42, 27, 78, 0.6)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.card}
            >
              <View style={styles.cardHeader}>
                <Text style={styles.cardIcon}>{mystery.icon}</Text>
                <Text style={[styles.cardLabel, { color: mystery.color }]}>
                  {mystery.label}
                </Text>
              </View>
              <Text style={styles.cardTitle} numberOfLines={2}>
                {mystery.title}
              </Text>
              <Text style={styles.cardDescription} numberOfLines={2}>
                {mystery.description}
              </Text>
              <View style={[styles.cardBorder, { borderColor: mystery.color + '60' }]} />
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </Animated.View>
    </View>
  );
});

TodaysMysteries.displayName = 'TodaysMysteries';

const styles = StyleSheet.create({
  container: {
    marginBottom: 28,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  emoji: {
    fontSize: 28,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
    fontFamily: 'SpaceMono',
    textShadow: '0px 0px 8px rgba(139, 92, 246, 0.5)',
  },
  rerollButton: {
    backgroundColor: 'rgba(139, 92, 246, 0.3)',
    borderRadius: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgba(139, 92, 246, 0.5)',
  },
  rerollIcon: {
    fontSize: 20,
  },
  cardsContainer: {
    gap: 12,
  },
  cardWrapper: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  card: {
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(139, 92, 246, 0.3)',
    borderRadius: 16,
    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.3)',
    elevation: 6,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  cardIcon: {
    fontSize: 32,
  },
  cardLabel: {
    fontSize: 11,
    fontWeight: '700',
    fontFamily: 'SpaceMono',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    fontFamily: 'SpaceMono',
    marginBottom: 6,
    textShadow: '0px 1px 2px rgba(0, 0, 0, 0.3)',
  },
  cardDescription: {
    fontSize: 13,
    color: '#B0B0B0',
    lineHeight: 20,
    fontFamily: 'SpaceMono',
  },
  cardBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 16,
    borderWidth: 2,
    opacity: 0.3,
  },
});
