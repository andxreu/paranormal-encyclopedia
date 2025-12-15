// app/(tabs)/explore/_layout.tsx
import { Stack } from 'expo-router';

/**
 * Explore section layout configuration
 * 
 * Routes:
 * - /explore → Main explore screen with category grid
 * - /explore/[category] → Category detail with topics list
 * - /explore/[category]/[topic] → Topic detail screen
 */
export default function ExploreLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'fade',
        contentStyle: { backgroundColor: '#08080B' },
      }}
    >
      {/* Main explore screen */}
      <Stack.Screen 
        name="index" 
        options={{ 
          headerShown: false,
          title: 'Explore',
        }} 
      />
      
      {/* Category detail screen */}
      <Stack.Screen 
        name="[category]/index" 
        options={{ 
          headerShown: false,
          animation: 'slide_from_right',
        }} 
      />
      
      {/* Topic detail screen */}
      <Stack.Screen 
        name="[category]/[topic]" 
        options={{ 
          headerShown: false,
          animation: 'slide_from_right',
        }} 
      />
    </Stack>
  );
}