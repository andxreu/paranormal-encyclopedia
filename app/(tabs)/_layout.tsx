
import React, { useState, useEffect, memo } from 'react';
import { Stack } from 'expo-router';
import FloatingTabBar, { TabBarItem } from '@/components/FloatingTabBar';
import { storage } from '@/utils/storage';

const tabs: TabBarItem[] = [
  {
    name: '(home)',
    route: '/(tabs)/(home)/',
    icon: 'home',
    label: 'Home',
  },
  {
    name: 'explore',
    route: '/(tabs)/explore',
    icon: 'explore',
    label: 'Explore',
  },
  {
    name: 'favorites',
    route: '/(tabs)/favorites',
    icon: 'favorite',
    label: 'Favorites',
  },
  {
    name: 'search',
    route: '/(tabs)/search',
    icon: 'search',
    label: 'Search',
  },
  {
    name: 'settings',
    route: '/(tabs)/settings',
    icon: 'settings',
    label: 'Settings',
  },
];

const TabLayout = memo(() => {
  const [showTabBar, setShowTabBar] = useState(true);

  useEffect(() => {
    checkOnboarding();
  }, []);

  const checkOnboarding = async (): Promise<void> => {
    const onboardingComplete = await storage.isOnboardingComplete();
    setShowTabBar(onboardingComplete);
  };

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'fade',
          contentStyle: { backgroundColor: '#08080B' },
        }}
      >
        <Stack.Screen key="home" name="(home)" />
        <Stack.Screen key="explore" name="explore" />
        <Stack.Screen key="favorites" name="favorites" />
        <Stack.Screen key="search" name="search" />
        <Stack.Screen key="settings" name="settings" />
      </Stack>
      {showTabBar && <FloatingTabBar tabs={tabs} containerWidth={350} />}
    </>
  );
});

TabLayout.displayName = 'TabLayout';

export default TabLayout;
