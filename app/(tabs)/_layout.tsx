
import React from 'react';
import { Stack } from 'expo-router';
import FloatingTabBar, { TabBarItem } from '@/components/FloatingTabBar';

export default function TabLayout() {
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

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'none',
          contentStyle: { backgroundColor: '#08080B' },
        }}
      >
        <Stack.Screen key="home" name="(home)" />
        <Stack.Screen key="explore" name="explore" />
        <Stack.Screen key="favorites" name="favorites" />
        <Stack.Screen key="search" name="search" />
        <Stack.Screen key="settings" name="settings" />
      </Stack>
      <FloatingTabBar tabs={tabs} containerWidth={350} />
    </>
  );
}
