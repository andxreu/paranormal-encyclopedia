import { Platform } from 'react-native';
import { Stack } from 'expo-router';

/**
 * Home section layout configuration
 * Manages the navigation stack for the home tab
 */
export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        // Global options for all screens in this stack
        headerShown: false, // Controlled per-screen below
        animation: 'fade', // Smooth transitions between screens
        contentStyle: {
          backgroundColor: '#08080B', // Match app background
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          // Show header on iOS for better native feel
          // Hide on Android/Web where custom header is used
          headerShown: Platform.OS === 'ios',
          title: 'Home',
          // iOS-specific styling
          ...(Platform.OS === 'ios' && {
            headerStyle: {
              backgroundColor: '#08080B',
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
              fontFamily: 'SpaceMono',
              fontWeight: '700',
            },
            headerShadowVisible: false, // Remove header border
          }),
        }}
      />
    </Stack>
  );
}