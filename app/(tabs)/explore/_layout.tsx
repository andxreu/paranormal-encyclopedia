
import { Stack } from 'expo-router';

export default function ExploreLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="[category]/index" />
      <Stack.Screen name="[category]/[topic]" />
    </Stack>
  );
}
