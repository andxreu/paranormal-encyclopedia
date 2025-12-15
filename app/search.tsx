
import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function SearchRedirectScreen() {
  const router = useRouter();

  useEffect(() => {
    // Immediately redirect to the canonical search screen
    router.replace('/(tabs)/search');
  }, [router]);

  // Render minimal empty view during redirect
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#08080B',
  },
});
