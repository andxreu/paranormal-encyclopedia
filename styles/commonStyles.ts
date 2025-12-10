
import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

export const colors = {
  background: '#08080B',      // Black background
  backgroundAlt: '#12121A',   // Slightly lighter black
  gold: '#D4AF37',            // Gold accent
  indigo: '#6366F1',          // Indigo accent
  violet: '#8B5CF6',          // Violet accent
  white: '#FFFFFF',           // White accent
  textPrimary: '#FFFFFF',     // White text
  textSecondary: '#A0A0A0',   // Gray text
  cardBg: '#1A1A24',          // Card background
  border: '#2A2A3A',          // Border color
};

export const buttonStyles = StyleSheet.create({
  instructionsButton: {
    backgroundColor: colors.indigo,
    alignSelf: 'center',
    width: '100%',
  },
  backButton: {
    backgroundColor: colors.backgroundAlt,
    alignSelf: 'center',
    width: '100%',
  },
});

export const commonStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.background,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 800,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    color: colors.textPrimary,
    marginBottom: 10,
    fontFamily: 'SpaceMono',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.textPrimary,
    marginBottom: 8,
    lineHeight: 24,
    textAlign: 'center',
    fontFamily: 'SpaceMono',
  },
  section: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: colors.cardBg,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    width: '100%',
    boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.1)',
    elevation: 2,
  },
  icon: {
    width: 60,
    height: 60,
    tintColor: colors.white,
  },
});
