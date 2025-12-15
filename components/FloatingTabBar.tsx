// components/FloatingTabBar.tsx
import React, { useEffect, useMemo, useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  Keyboard,
  Platform,
} from 'react-native';
import { usePathname, useRouter } from 'expo-router';
import { BlurView } from 'expo-blur';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  withRepeat,
  Easing,
} from 'react-native-reanimated';

import { HapticFeedback } from '@/utils/haptics';
import { useAppTheme } from '@/contexts/ThemeContext';

// ──────────────────────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────────────────────
export interface TabBarItem {
  name: string;
  route: string;
  icon: string;
  label: string;
}

interface FloatingTabBarProps {
  tabs: TabBarItem[];
  containerWidth?: number; // optional; will clamp safely if not provided
}

interface TabButtonProps {
  item: TabBarItem;
  isActive: boolean;
  onPress: () => void;
}

// ──────────────────────────────────────────────────────────────
// Constants
// ──────────────────────────────────────────────────────────────
const SPRING_CONFIG = { damping: 15, stiffness: 300 } as const;
const GLOW_ANIMATION_DURATION = 1500;
const SCALE_PRESS_VALUE = 0.92;

const TAB_ICONS: Record<string, string> = {
  home: '🏠',
  explore: '👁️',
  arcana: '🔮',
  favorite: '⭐',
  search: '🔍',
  settings: '⚙️',
};

// ──────────────────────────────────────────────────────────────
// Tab Button
// ──────────────────────────────────────────────────────────────
const TabButton: React.FC<TabButtonProps> = React.memo(({ item, isActive, onPress }) => {
  const { theme } = useAppTheme();

  const scale = useSharedValue(1);
  const iconScale = useSharedValue(1);
  const glowOpacity = useSharedValue(0);
  const glowScale = useSharedValue(0.85);
  const translateY = useSharedValue(0);

  useEffect(() => {
    if (isActive) {
      iconScale.value = withSpring(1.12, SPRING_CONFIG);
      translateY.value = withSpring(-2, SPRING_CONFIG);

      glowOpacity.value = withRepeat(
        withTiming(1, { duration: GLOW_ANIMATION_DURATION, easing: Easing.inOut(Easing.ease) }),
        -1,
        true
      );
      glowScale.value = withRepeat(
        withTiming(1.08, { duration: GLOW_ANIMATION_DURATION, easing: Easing.inOut(Easing.ease) }),
        -1,
        true
      );
    } else {
      iconScale.value = withSpring(1, SPRING_CONFIG);
      translateY.value = withSpring(0, SPRING_CONFIG);
      glowOpacity.value = withTiming(0, { duration: 220 });
      glowScale.value = withTiming(0.85, { duration: 220 });
    }
  }, [isActive, iconScale, glowOpacity, glowScale, translateY]);

  const animatedIconStyle = useAnimatedStyle(() => ({
    transform: [{ scale: iconScale.value }, { translateY: translateY.value }],
  }));

  const animatedGlowStyle = useAnimatedStyle(() => ({
    opacity: glowOpacity.value * 0.55,
    transform: [{ scale: glowScale.value }],
  }));

  const animatedButtonStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    HapticFeedback.light();
    scale.value = withSpring(SCALE_PRESS_VALUE, SPRING_CONFIG);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, SPRING_CONFIG);
  };

  const iconEmoji = useMemo(() => TAB_ICONS[item.icon] || '•', [item.icon]);

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={1}
      style={styles.tabButton}
      accessibilityLabel={item.label}
      accessibilityRole="tab"
      accessibilityState={{ selected: isActive }}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
      <Animated.View style={animatedButtonStyle}>
        <View style={styles.tabContent}>
          {isActive && (
            <Animated.View style={[styles.liquidGlow, animatedGlowStyle]}>
              <View style={[styles.liquidGlowInner, { backgroundColor: theme.colors.violet }]} />
            </Animated.View>
          )}

          <Animated.Text
            style={[
              styles.tabIcon,
              { color: isActive ? theme.colors.textPrimary : theme.colors.textSecondary },
              animatedIconStyle,
            ]}
          >
            {iconEmoji}
          </Animated.Text>

          <Text
            style={[
              styles.tabLabel,
              { color: isActive ? theme.colors.textPrimary : theme.colors.textSecondary },
              isActive && styles.tabLabelActive,
            ]}
            numberOfLines={1}
          >
            {item.label}
          </Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
});

TabButton.displayName = 'TabButton';

// ──────────────────────────────────────────────────────────────
// FloatingTabBar
// ──────────────────────────────────────────────────────────────
export default function FloatingTabBar({ tabs, containerWidth }: FloatingTabBarProps) {
  const { theme } = useAppTheme();
  const pathname = usePathname();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { width: screenWidth } = useWindowDimensions();

  const [keyboardVisible, setKeyboardVisible] = useState(false);

  // ✅ Hide when keyboard shows (search, forms, etc.)
  useEffect(() => {
    const showEvt = Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
    const hideEvt = Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';

    const subShow = Keyboard.addListener(showEvt, () => setKeyboardVisible(true));
    const subHide = Keyboard.addListener(hideEvt, () => setKeyboardVisible(false));

    return () => {
      subShow.remove();
      subHide.remove();
    };
  }, []);

  // ✅ Safe width for iPhone/iPad (and no “off-screen”)
  const safeWidth = useMemo(() => {
    const fallback = Math.min(420, Math.max(320, screenWidth - 32));
    const desired = containerWidth ?? fallback;
    return Math.min(screenWidth - 24, Math.max(280, desired));
  }, [containerWidth, screenWidth]);

  // ✅ Center properly in RN
  const left = useMemo(() => Math.round((screenWidth - safeWidth) / 2), [screenWidth, safeWidth]);

  const bottom = useMemo(() => {
    // give breathing room above the home indicator
    const base = 10;
    return base + Math.max(insets.bottom, 8);
  }, [insets.bottom]);

  const blurTint = useMemo(() => (theme.colorScheme === 'light' ? 'light' : 'dark'), [theme.colorScheme]);

  const isTabActive = useCallback(
    (tabName: string) => {
      // Expo Router paths vary; normalize to “contains segment”
      // Examples: /(tabs)/(home), /(tabs)/explore, /explore/[category], etc.
      if (tabName === '(home)') {
        return pathname === '/' || pathname.includes('/(home)') || pathname.includes('/(tabs)');
      }
      return pathname.includes(`/${tabName}`);
    },
    [pathname]
  );

  const handleTabPress = useCallback(
    (route: string) => {
      HapticFeedback.light();
      // ✅ Tabs should not stack endlessly
      router.replace(route as any);
    },
    [router]
  );

  if (keyboardVisible) return null;

  return (
    <View style={[styles.container, { width: safeWidth, left, bottom }]}>
      <BlurView intensity={80} tint={blurTint} style={styles.blurContainer}>
        <View style={[styles.tabBar, { backgroundColor: theme.colors.cardBg }]}>
          {tabs.map((item) => (
            <TabButton
              key={`tab-${item.name}`}
              item={item}
              isActive={isTabActive(item.name)}
              onPress={() => handleTabPress(item.route)}
            />
          ))}
        </View>
      </BlurView>
    </View>
  );
}

// ──────────────────────────────────────────────────────────────
// Styles
// ──────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1000,
  },
  blurContainer: {
    borderRadius: 28,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(139, 92, 246, 0.30)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.45,
    shadowRadius: 28,
    elevation: 14,
  },
  tabBar: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
  },
  tabContent: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  liquidGlow: {
    position: 'absolute',
    top: -12,
    left: -12,
    right: -12,
    bottom: -12,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  liquidGlowInner: {
    width: '100%',
    height: '100%',
    borderRadius: 24,
    opacity: 0.28,
  },
  tabIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  tabLabel: {
    fontSize: 9,
    fontWeight: '600',
    fontFamily: 'SpaceMono',
  },
  tabLabelActive: {
    fontWeight: '700',
  },
});
