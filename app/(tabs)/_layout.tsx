
import React, { useEffect } from 'react';
import { Stack } from 'expo-router';
import FloatingTabBar, { TabBarItem } from '@/components/FloatingTabBar';
import { useOnboarding } from '@/contexts/OnboardingContext';

export default function TabLayout() {
  const { isOnboardingComplete, isCheckingOnboarding } = useOnboarding();

  useEffect(() => {
    console.log('TabLayout - Onboarding complete:', isOnboardingComplete);
    console.log('TabLayout - Checking onboarding:', isCheckingOnboarding);
  }, [isOnboardingComplete, isCheckingOnboarding]);

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
      name: 'arcana',
      route: '/(tabs)/arcana',
      icon: 'arcana',
      label: 'Path',
    },
    {
      name: 'favorites',
      route: '/(tabs)/favorites',
      icon: 'favorite',
      label: 'Favorites',
    },
    {
      name: 'settings',
      route: '/(tabs)/settings',
      icon: 'settings',
      label: 'Settings',
    },
  ];

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
        <Stack.Screen key="arcana" name="arcana" />
        <Stack.Screen key="favorites" name="favorites" />
        <Stack.Screen key="settings" name="settings" />
      </Stack>
      {!isCheckingOnboarding && isOnboardingComplete && (
        <FloatingTabBar tabs={tabs} containerWidth={380} />
      )}
    </>
  );
}
