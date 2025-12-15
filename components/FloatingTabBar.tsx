
// components/FloatingTabBar.tsx
import React, { useEffect, useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { usePathname, useRouter } from 'expo-router';
import { BlurView } from 'expo-blur';
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
  containerWidth?: number;
}

interface TabButtonProps {
  item: TabBarItem;
  isActive: boolean;
  onPress: () => void;
}

// ──────────────────────────────────────────────────────────────
// Constants
// ──────────────────────────────────────────────────────────────
const SPRING_CONFIG = {
  damping: 15,
  stiffness: 300,
};

const GLOW_ANIMATION_DURATION = 1500;
const SCALE_PRESS_VALUE = 0.9;

// Tab icon mapping with properly encoded emojis
const TAB_ICONS: Record<string, string> = {
  home: '🏠',
  explore: '👁️',
  arcana: '🔮',
  favorite: '⭐',
  search: '🔍',
  settings: '⚙️',
};

// ──────────────────────────────────────────────────────────────
// Tab Button Component
// ──────────────────────────────────────────────────────────────
const TabButton: React.FC<TabButtonProps> = React.memo(({ item, isActive, onPress }) => {
  const { theme } = useAppTheme();
  
  // Animation values
  const scale = useSharedValue(1);
  const iconScale = useSharedValue(1);
  const glowOpacity = useSharedValue(0);
  const glowScale = useSharedValue(0.8);
  const translateY = useSharedValue(0);

  /**
   * Active state animations
   */
  useEffect(() => {
    if (isActive) {
      // Icon scale up
      iconScale.value = withSpring(1.15, SPRING_CONFIG);
      
      // Floating effect
      translateY.value = withSpring(-2, SPRING_CONFIG);
      
      // Glow pulse animation
      glowOpacity.value = withRepeat(
        withTiming(1, {
          duration: GLOW_ANIMATION_DURATION,
          easing: Easing.inOut(Easing.ease),
        }),
        -1,
        true
      );
      
      glowScale.value = withRepeat(
        withTiming(1.1, {
          duration: GLOW_ANIMATION_DURATION,
          easing: Easing.inOut(Easing.ease),
        }),
        -1,
        true
      );
    } else {
      // Reset to inactive state
      iconScale.value = withSpring(1, SPRING_CONFIG);
      translateY.value = withSpring(0, SPRING_CONFIG);
      glowOpacity.value = withTiming(0, { duration: 300 });
      glowScale.value = withTiming(0.8, { duration: 300 });
    }
  }, [isActive, iconScale, glowOpacity, glowScale, translateY]);

  /**
   * Animated styles
   */
  const animatedIconStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: iconScale.value },
        { translateY: translateY.value },
      ],
    };
  });

  const animatedGlowStyle = useAnimatedStyle(() => {
    return {
      opacity: glowOpacity.value * 0.6,
      transform: [{ scale: glowScale.value }],
    };
  });

  const animatedButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  /**
   * Press handlers
   */
  const handlePressIn = () => {
    HapticFeedback.light();
    scale.value = withSpring(SCALE_PRESS_VALUE, SPRING_CONFIG);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, SPRING_CONFIG);
  };

  const handlePress = () => {
    onPress();
  };

  /**
   * Get icon emoji for tab
   */
  const getIconEmoji = useMemo(() => {
    return TAB_ICONS[item.icon] || '•';
  }, [item.icon]);

  return (
    <TouchableOpacity
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={1}
      style={styles.tabButton}
      accessibilityLabel={item.label}
      accessibilityRole="tab"
      accessibilityState={{ selected: isActive }}
    >
      <Animated.View style={animatedButtonStyle}>
        <View style={styles.tabContent}>
          {/* Glow effect for active tab */}
          {isActive && (
            <Animated.View style={[styles.liquidGlow, animatedGlowStyle]}>
              <View style={[styles.liquidGlowInner, { backgroundColor: theme.colors.violet }]} />
            </Animated.View>
          )}
          
          {/* Icon */}
          <Animated.Text
            style={[
              styles.tabIcon,
              isActive && styles.tabIconActive,
              animatedIconStyle,
            ]}
          >
            {getIconEmoji}
          </Animated.Text>
          
          {/* Label */}
          <Text
            style={[
              styles.tabLabel,
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
// Main FloatingTabBar Component
// ──────────────────────────────────────────────────────────────
export default function FloatingTabBar({ tabs, containerWidth = 380 }: FloatingTabBarProps) {
  const { theme } = useAppTheme();
  const pathname = usePathname();
  const router = useRouter();

  /**
   * Handles tab press with haptic feedback
   */
  const handleTabPress = (route: string) => {
    console.log('[FloatingTabBar] Navigating to:', route);
    HapticFeedback.light();
    router.push(route as any);
  };

  /**
   * Determines if a tab is currently active
   */
  const isTabActive = (tabName: string): boolean => {
    if (tabName === '(home)') {
      return pathname === '/' || pathname.includes('/(home)');
    }
    return pathname.includes(`/${tabName}`);
  };

  /**
   * Memoize blur tint based on theme
   */
  const blurTint = useMemo(() => {
    return theme.colorScheme === 'light' ? 'light' : 'dark';
  }, [theme.colorScheme]);

  return (
    <View style={[styles.container, { width: containerWidth }]}>
      <BlurView 
        intensity={80} 
        tint={blurTint} 
        style={styles.blurContainer}
      >
        <View style={[styles.tabBar, { backgroundColor: theme.colors.cardBg }]}>
          {tabs.map((item, index) => (
            <TabButton
              key={`tab-${item.name}-${index}`}
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
    bottom: 20,
    left: '50%',
    transform: [{ translateX: -190 }],
    zIndex: 1000,
  },
  blurContainer: {
    borderRadius: 28,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(139, 92, 246, 0.3)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 32,
    elevation: 12,
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
    opacity: 0.3,
  },
  tabIcon: {
    fontSize: 20,
    marginBottom: 4,
    color: '#B0B0B0',
  },
  tabIconActive: {
    color: '#FFFFFF',
  },
  tabLabel: {
    fontSize: 9,
    fontWeight: '600',
    color: '#B0B0B0',
    fontFamily: 'SpaceMono',
  },
  tabLabelActive: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});
