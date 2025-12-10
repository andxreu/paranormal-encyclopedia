
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAppTheme } from '@/contexts/ThemeContext';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  const { theme } = useAppTheme();
  const goldColor = theme?.colors?.gold || '#d4af37';

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={[styles.decorLine, { backgroundColor: goldColor }]} />
        <Text style={styles.title}>{title}</Text>
        <View style={[styles.decorLine, { backgroundColor: goldColor }]} />
      </View>
      {subtitle && (
        <Text style={styles.subtitle}>{subtitle}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 6,
  },
  decorLine: {
    width: 30,
    height: 2,
    borderRadius: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#FFFFFF',
    fontFamily: 'SpaceMono',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 13,
    color: '#B0B0B0',
    fontFamily: 'SpaceMono',
    textAlign: 'center',
  },
});
