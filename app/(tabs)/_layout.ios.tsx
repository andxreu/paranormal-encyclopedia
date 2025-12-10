
import React from 'react';
import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs
      backgroundColor="#08080B"
      tintColor="#D4AF37"
      iconColor="#A0A0A0"
    >
      <NativeTabs.Trigger key="home" name="(home)">
        <Icon sf="house.fill" />
        <Label>Home</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger key="explore" name="explore">
        <Icon sf="safari.fill" />
        <Label>Explore</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger key="favorites" name="favorites">
        <Icon sf="heart.fill" />
        <Label>Favorites</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger key="search" name="search">
        <Icon sf="magnifyingglass" />
        <Label>Search</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger key="settings" name="settings">
        <Icon sf="gearshape.fill" />
        <Label>Settings</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
