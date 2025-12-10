
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { usePathname, useRouter } from 'expo-router';
import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  Easing,
} from 'react-native-reanimated';

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

const TabButton: React.FC<{
  item: TabBarItem;
  isActive: boolean;
  onPress: () => void;
}> = ({ item, isActive, onPress }) => {
  const scale = useSharedValue(1);
  const iconScale = useSharedValue(1);
  const glowOpacity = useSharedValue(0);
  const translateY = useSharedValue(0);

  useEffect(() => {
    if (isActive) {
      iconScale.value = withSpring(1.2, {
        damping: 15,
        stiffness: 300,
      });
      glowOpacity.value = withTiming(1, {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      });
      translateY.value = withSpring(-2, {
        damping: 15,
        stiffness: 300,
      });
    } else {
      iconScale.value = withSpring(1, {
        damping: 15,
        stiffness: 300,
      });
      glowOpacity.value = withTiming(0, {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      });
      translateY.value = withSpring(0, {
        damping: 15,
        stiffness: 300,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);

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
      opacity: glowOpacity.value,
    };
  });

  const handlePressIn = () => {
    scale.value = withSpring(0.9, {
      damping: 15,
      stiffness: 400,
    });
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, {
      damping: 15,
      stiffness: 400,
    });
  };

  const animatedButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onPress();
  };

  const getIconForTab = (iconName: string) => {
    const icons: { [key: string]: string } = {
      home: '🏠',
      explore: '🔍',
      favorite: '⭐',
      search: '🔎',
      settings: '⚙️',
    };
    return icons[iconName] || '•';
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={1}
      style={styles.tabButton}
    >
      <Animated.View style={animatedButtonStyle}>
        <View style={styles.tabContent}>
          {isActive && (
            <Animated.View style={[styles.activeGlow, animatedGlowStyle]} />
          )}
          <Animated.Text style={[
            styles.tabIcon,
            isActive && styles.tabIconActive,
            animatedIconStyle,
          ]}>
            {getIconForTab(item.icon)}
          </Animated.Text>
          <Text style={[
            styles.tabLabel,
            isActive && styles.tabLabelActive,
          ]}>
            {item.label}
          </Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default function FloatingTabBar({ tabs, containerWidth = 350 }: FloatingTabBarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleTabPress = (route: string) => {
    console.log('Navigating to:', route);
    router.push(route as any);
  };

  const isTabActive = (tabName: string) => {
    if (tabName === '(home)') {
      return pathname === '/' || pathname.includes('/(home)');
    }
    return pathname.includes(`/${tabName}`);
  };

  return (
    <View style={[styles.container, { width: containerWidth }]}>
      <BlurView intensity={80} tint="dark" style={styles.blurContainer}>
        <View style={styles.tabBar}>
          {tabs.map((item, index) => (
            <React.Fragment key={index}>
              <TabButton
                item={item}
                isActive={isTabActive(item.name)}
                onPress={() => handleTabPress(item.route)}
              />
            </React.Fragment>
          ))}
        </View>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    left: '50%',
    transform: [{ translateX: -175 }],
    zIndex: 1000,
  },
  blurContainer: {
    borderRadius: 28,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(139, 92, 246, 0.3)',
    boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.5)',
    elevation: 12,
  },
  tabBar: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 10,
    backgroundColor: 'rgba(42, 27, 78, 0.7)',
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
  activeGlow: {
    position: 'absolute',
    top: -8,
    left: -8,
    right: -8,
    bottom: -8,
    backgroundColor: 'rgba(139, 92, 246, 0.3)',
    borderRadius: 20,
  },
  tabIcon: {
    fontSize: 24,
    marginBottom: 4,
    color: '#B0B0B0',
  },
  tabIconActive: {
    color: '#FFFFFF',
  },
  tabLabel: {
    fontSize: 10,
    fontWeight: '600',
    color: '#B0B0B0',
    fontFamily: 'SpaceMono',
  },
  tabLabelActive: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});
