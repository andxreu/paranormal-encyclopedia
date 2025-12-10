
import { StyleSheet } from 'react-native';
import { cosmicColors } from '@/constants/Colors';

export const colors = {
  background: cosmicColors.purpleBlack,
  backgroundAlt: cosmicColors.darkPurple,
  backgroundDeep: cosmicColors.deepViolet,
  gold: cosmicColors.starGold,
  indigo: '#6366F1',
  violet: '#8B5CF6',
  white: '#FFFFFF',
  textPrimary: '#FFFFFF',
  textSecondary: '#B0B0B0',
  textTertiary: '#808080',
  cardBg: 'rgba(42, 27, 78, 0.6)',
  cardBgTranslucent: 'rgba(42, 27, 78, 0.4)',
  border: 'rgba(139, 92, 246, 0.3)',
  borderLight: 'rgba(255, 255, 255, 0.1)',
  glow: 'rgba(139, 92, 246, 0.5)',
  shadow: 'rgba(0, 0, 0, 0.5)',
  text: '#FFFFFF',
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
    textShadowColor: colors.glow,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
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
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
    width: '100%',
    boxShadow: `0px 4px 20px ${colors.shadow}`,
    elevation: 4,
  },
  cardTranslucent: {
    backgroundColor: colors.cardBgTranslucent,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
    width: '100%',
    boxShadow: `0px 4px 20px ${colors.shadow}`,
    elevation: 4,
  },
  icon: {
    width: 60,
    height: 60,
    tintColor: colors.white,
  },
  glowEffect: {
    boxShadow: `0px 0px 20px ${colors.glow}`,
    elevation: 8,
  },
});
