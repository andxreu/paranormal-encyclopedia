
import React, { useMemo } from 'react';
import { Stack } from 'expo-router';
import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs';

import { useOnboarding } from '@/contexts/OnboardingContext';

export default function TabLayout() {
  const { isOnboardingComplete, isCheckingOnboarding } = useOnboarding();

  const showTabs = !isCheckingOnboarding && isOnboardingComplete;

  // ✅ While onboarding is not complete, we still mount the screens,
  // but we do NOT show the iOS native tab bar (matches Android behavior).
  if (!showTabs) {
    return (
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#08080B' },
        }}
      >
        <Stack.Screen name="(home)" />
        <Stack.Screen name="explore" />
        <Stack.Screen name="arcana" />
        <Stack.Screen name="favorites" />
        <Stack.Screen name="settings" />
      </Stack>
    );
  }

  return (
    <NativeTabs 
      backgroundColor="#08080B" 
      tintColor="#D4AF37" 
      iconColor="#A0A0A0"
      screenOptions={{
        headerShown: false,
      }}
    >
      <NativeTabs.Trigger name="(home)">
        <Icon sf="house.fill" />
        <Label>Home</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="explore">
        <Icon sf="safari.fill" />
        <Label>Explore</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="arcana">
        <Icon sf="sparkles" />
        <Label>Path</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="favorites">
        <Icon sf="heart.fill" />
        <Label>Favorites</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="settings">
        <Icon sf="gearshape.fill" />
        <Label>Settings</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
