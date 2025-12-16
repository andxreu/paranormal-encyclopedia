
import React, { useMemo } from 'react';
import { Stack } from 'expo-router';
import { useWindowDimensions } from 'react-native';

import FloatingTabBar, { TabBarItem } from '@/components/FloatingTabBar';
import { useOnboarding } from '@/contexts/OnboardingContext';

export default function TabLayout() {
  const { isOnboardingComplete, isCheckingOnboarding } = useOnboarding();
  const { width } = useWindowDimensions();

  const tabs: TabBarItem[] = useMemo(
    () => [
      { name: '(home)', route: '/(tabs)/(home)/', icon: 'home', label: 'Home' },
      { name: 'explore', route: '/(tabs)/explore', icon: 'explore', label: 'Explore' },
      { name: 'arcana', route: '/(tabs)/arcana', icon: 'arcana', label: 'Path' },
      { name: 'favorites', route: '/(tabs)/favorites', icon: 'favorite', label: 'Favorites' },
      { name: 'settings', route: '/(tabs)/settings', icon: 'settings', label: 'Settings' },
    ],
    []
  );

  const showTabs = !isCheckingOnboarding && isOnboardingComplete;

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'fade',
          animationDuration: 200,
          contentStyle: { backgroundColor: '#08080B' },
        }}
      >
        <Stack.Screen name="(home)" />
        <Stack.Screen name="explore" />
        <Stack.Screen name="arcana" />
        <Stack.Screen name="favorites" />
        <Stack.Screen name="settings" />
      </Stack>

      {showTabs && (
        <FloatingTabBar
          tabs={tabs}
          containerWidth={Math.min(420, Math.max(320, width - 32))}
        />
      )}
    </>
  );
}
