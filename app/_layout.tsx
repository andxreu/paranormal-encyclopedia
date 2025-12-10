
import React, { useEffect, useState, Suspense } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { SystemBars } from "react-native-edge-to-edge";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { EnlightenedModeProvider } from "@/contexts/EnlightenedModeContext";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { fuzzySearch } from "@/utils/fuzzySearch";

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

const LoadingFallback = React.memo(() => (
  <View style={styles.loadingContainer}>
    <ActivityIndicator size="large" color="#8B5CF6" />
  </View>
));

LoadingFallback.displayName = 'LoadingFallback';

function RootLayoutContent(): React.ReactElement {
  const [fontsLoaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    'SpaceMono-Bold': require("../assets/fonts/SpaceMono-Bold.ttf"),
    'SpaceMono-Italic': require("../assets/fonts/SpaceMono-Italic.ttf"),
  });

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const prepareApp = async (): Promise<void> => {
      try {
        console.log('Preparing app...');
        
        fuzzySearch.initialize();
        
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
          setIsReady(true);
        }
      } catch (error) {
        console.error('Error preparing app:', error);
        setIsReady(true);
      }
    };

    prepareApp();
  }, [fontsLoaded]);

  if (!isReady || !fontsLoaded) {
    return <LoadingFallback />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#08080B' },
        animation: 'fade',
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

export default function RootLayout(): React.ReactElement {
  return (
    <ErrorBoundary>
      <GestureHandlerRootView style={styles.container}>
        <ThemeProvider>
          <EnlightenedModeProvider>
            <Suspense fallback={<LoadingFallback />}>
              <StatusBar style="auto" />
              <RootLayoutContent />
              <SystemBars style="auto" />
            </Suspense>
          </EnlightenedModeProvider>
        </ThemeProvider>
      </GestureHandlerRootView>
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0a0118',
  },
});
