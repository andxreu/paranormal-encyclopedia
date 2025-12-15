// app/(tabs)/(home)/_layout.tsx
import { Stack } from 'expo-router';

/**
 * Home section layout configuration
 * We use a fully custom header (SpaceHeader), so iOS Stack headers must be OFF
 * to avoid the black bar with "Home".
 */
export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'fade',
        contentStyle: { backgroundColor: '#08080B' },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
