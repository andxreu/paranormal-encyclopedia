
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
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
import { getCodexEntryById } from '@/data/paranormal/codex';
import { ParticleEffect } from '@/components/ParticleEffect';
import { HapticFeedback } from '@/utils/haptics';
import { storage } from '@/utils/storage';

interface SectionCardProps {
  section: any;
  index: number;
}

const SectionCard: React.FC<SectionCardProps> = ({ section, index }) => {
  const { theme, textScale } = useAppTheme();
  const [expanded, setExpanded] = useState(false);
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePress = () => {
    HapticFeedback.soft();
    setExpanded(!expanded);
  };

  const handlePressIn = () => {
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
    <Animated.View
      entering={FadeIn.delay(index * 100).duration(400)}
      style={styles.sectionCardWrapper}
    >
      <TouchableOpacity
        onPress={handlePress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={1}
        accessibilityLabel={section.title}
        accessibilityHint={expanded ? 'Collapse section' : 'Expand section'}
        accessibilityRole="button"
      >
        <Animated.View style={animatedStyle}>
          <LinearGradient
            colors={[theme.colors.indigo + '30', theme.colors.indigo + '15', theme.colors.cardBg]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.sectionCard, { borderColor: theme.colors.indigo + '60' }]}
          >
            <View style={styles.sectionHeader}>
              <Text style={[styles.sectionTitle, { color: theme.colors.textPrimary, fontSize: 16 * textScale }]}>
                {section.title}
              </Text>
              <Text style={[styles.expandIcon, { color: theme.colors.indigo }]}>
                {expanded ? '▼' : '▶'}
              </Text>
            </View>
            
            {expanded && (
              <Animated.View entering={FadeIn.duration(300)}>
                <Text style={[styles.sectionContent, { color: theme.colors.textSecondary, fontSize: 14 * textScale }]}>
                  {section.content}
                </Text>
              </Animated.View>
            )}
            
            <View style={[styles.sectionCardBorder, { borderColor: theme.colors.indigo + '40' }]} />
          </LinearGradient>
        </Animated.View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default function CodexDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { theme, textScale } = useAppTheme();
  const [entry, setEntry] = useState<any>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  const fadeOpacity = useSharedValue(0);
  const scale = useSharedValue(0.95);

  useEffect(() => {
    const loadEntry = async () => {
      if (!id) return;

      const entryData = getCodexEntryById(id as string);
      setEntry(entryData);

      const favoriteStatus = await storage.isFavorite(`codex-${id}`);
      setIsFavorite(favoriteStatus);

      fadeOpacity.value = withTiming(1, {
        duration: 600,
        easing: Easing.inOut(Easing.ease),
      });

      scale.value = withTiming(1, {
        duration: 600,
        easing: Easing.out(Easing.ease),
      });
    };

    loadEntry();
  }, [id, fadeOpacity, scale]);

  const handleBackPress = () => {
    HapticFeedback.light();
    router.back();
  };

  const handleToggleFavorite = async () => {
    HapticFeedback.medium();
    const favoriteId = `codex-${id}`;
    if (isFavorite) {
      await storage.removeFavorite(favoriteId);
      setIsFavorite(false);
    } else {
      await storage.addFavorite(favoriteId);
      setIsFavorite(true);
    }
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeOpacity.value,
      transform: [{ scale: scale.value }],
    };
  });

  if (!entry) {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={theme.colors.backgroundGradient}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <SafeAreaView style={styles.safeArea} edges={['top']}>
            <Text style={[styles.errorText, { color: theme.colors.textPrimary }]}>Entry not found</Text>
          </SafeAreaView>
        </LinearGradient>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[theme.colors.indigo + '25', ...theme.colors.backgroundGradient.slice(1)]}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <SafeAreaView style={styles.safeArea} edges={['top']}>
          <Animated.View style={[styles.animatedContainer, animatedStyle]}>
            <ParticleEffect count={12} color={theme.colors.indigo + '25'} />
            
            <View style={styles.header}>
              <View style={styles.headerTop}>
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

                <TouchableOpacity 
                  onPress={handleToggleFavorite} 
                  style={styles.iconButton}
                  accessibilityLabel={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                  accessibilityRole="button"
                >
                  <Text style={styles.iconButtonText}>{isFavorite ? '⭐' : '☆'}</Text>
                </TouchableOpacity>
              </View>
              
              <View style={styles.headerContent}>
                <Text style={[styles.entryTitle, { color: theme.colors.textPrimary, fontSize: 28 * textScale }]}>
                  {entry.name}
                </Text>
                <Text style={[styles.entryCategory, { color: theme.colors.indigo, fontSize: 14 * textScale }]}>
                  {entry.category}
                </Text>
                <Text style={[styles.entryDescription, { color: theme.colors.textSecondary, fontSize: 14 * textScale }]}>
                  {entry.description}
                </Text>
              </View>
            </View>

            <ScrollView
              style={styles.scrollView}
              contentContainerStyle={styles.contentContainer}
              showsVerticalScrollIndicator={false}
            >
              <Text style={[styles.sectionsHeader, { color: theme.colors.textPrimary, fontSize: 18 * textScale }]}>
                Explore Sections
              </Text>
              
              {entry.sections?.map((section: any, index: number) => (
                <React.Fragment key={`section-${index}`}>
                  <SectionCard section={section} index={index} />
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
    zIndex: 2,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  backButton: {
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'SpaceMono',
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(99, 102, 241, 0.3)',
    borderWidth: 1,
    borderColor: 'rgba(99, 102, 241, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconButtonText: {
    fontSize: 18,
  },
  headerContent: {
    alignItems: 'center',
  },
  entryTitle: {
    fontSize: 28,
    fontWeight: '900',
    fontFamily: 'SpaceMono',
    textAlign: 'center',
    marginBottom: 8,
    paddingHorizontal: 20,
    textShadowColor: 'rgba(99, 102, 241, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  entryCategory: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'SpaceMono',
    marginBottom: 8,
  },
  entryDescription: {
    fontSize: 14,
    fontFamily: 'SpaceMono',
    textAlign: 'center',
    marginBottom: 12,
    paddingHorizontal: 20,
    lineHeight: 20,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 120,
  },
  sectionsHeader: {
    fontSize: 18,
    fontWeight: '800',
    fontFamily: 'SpaceMono',
    marginBottom: 16,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  sectionCardWrapper: {
    marginBottom: 12,
  },
  sectionCard: {
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.3)',
    elevation: 6,
    overflow: 'hidden',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'SpaceMono',
    flex: 1,
    marginRight: 12,
  },
  expandIcon: {
    fontSize: 14,
    fontWeight: '700',
  },
  sectionContent: {
    fontSize: 14,
    fontFamily: 'SpaceMono',
    lineHeight: 22,
    marginTop: 12,
  },
  sectionCardBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 16,
    borderWidth: 1.5,
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
