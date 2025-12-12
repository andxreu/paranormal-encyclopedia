// styles/commonStyles.ts
import { StyleSheet } from 'react-native';
import { cosmicColors } from '@/constants/Colors';

// ──────────────────────────────────────────────────────────────
// Color Palette (Legacy - kept for backward compatibility)
// ──────────────────────────────────────────────────────────────
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
} as const;

// ──────────────────────────────────────────────────────────────
// Shadow Presets
// ──────────────────────────────────────────────────────────────
export const shadows = {
  small: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  large: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 8,
  },
  xlarge: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.5,
    shadowRadius: 24,
    elevation: 12,
  },
  glow: {
    shadowColor: colors.glow,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 8,
  },
  glowStrong: {
    shadowColor: colors.violet,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 12,
  },
} as const;

// ──────────────────────────────────────────────────────────────
// Spacing System
// ──────────────────────────────────────────────────────────────
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
} as const;

// ──────────────────────────────────────────────────────────────
// Border Radius System
// ──────────────────────────────────────────────────────────────
export const borderRadius = {
  small: 8,
  medium: 12,
  large: 16,
  xlarge: 20,
  xxlarge: 24,
  round: 9999,
} as const;

// ──────────────────────────────────────────────────────────────
// Typography System
// ──────────────────────────────────────────────────────────────
export const typography = {
  fontFamily: 'SpaceMono',
  sizes: {
    xs: 10,
    sm: 12,
    base: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 32,
    huge: 36,
  },
  weights: {
    normal: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
    black: '900' as const,
  },
  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.8,
  },
} as const;

// ──────────────────────────────────────────────────────────────
// Button Styles
// ──────────────────────────────────────────────────────────────
export const buttonStyles = StyleSheet.create({
  base: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.medium,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: colors.indigo,
    ...shadows.medium,
  },
  secondary: {
    backgroundColor: colors.backgroundAlt,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.small,
  },
  ghost: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: colors.border,
  },
  destructive: {
    backgroundColor: '#EF4444',
    ...shadows.medium,
  },
  disabled: {
    backgroundColor: colors.textTertiary,
    opacity: 0.5,
  },
});

// ──────────────────────────────────────────────────────────────
// Common Layout Styles
// ──────────────────────────────────────────────────────────────
export const commonStyles = StyleSheet.create({
  // Container Styles
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
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.xl,
  },

  // Typography Styles
  title: {
    fontSize: typography.sizes.xxxl,
    fontWeight: '800',
    textAlign: 'center',
    color: colors.textPrimary,
    marginBottom: spacing.sm,
    fontFamily: typography.fontFamily,
    textShadowColor: colors.glow,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  subtitle: {
    fontSize: typography.sizes.lg,
    fontWeight: '600',
    textAlign: 'center',
    color: colors.textSecondary,
    marginBottom: spacing.md,
    fontFamily: typography.fontFamily,
  },
  heading: {
    fontSize: typography.sizes.xl,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: spacing.sm,
    fontFamily: typography.fontFamily,
  },
  text: {
    fontSize: typography.sizes.md,
    fontWeight: '500',
    color: colors.textPrimary,
    marginBottom: spacing.sm,
    lineHeight: 24,
    fontFamily: typography.fontFamily,
  },
  textSecondary: {
    fontSize: typography.sizes.base,
    fontWeight: '400',
    color: colors.textSecondary,
    lineHeight: 20,
    fontFamily: typography.fontFamily,
  },
  textSmall: {
    fontSize: typography.sizes.sm,
    fontWeight: '400',
    color: colors.textSecondary,
    fontFamily: typography.fontFamily,
  },
  textCenter: {
    textAlign: 'center',
  },

  // Layout Sections
  section: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.lg,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  column: {
    flexDirection: 'column',
    width: '100%',
  },

  // Card Styles
  card: {
    backgroundColor: colors.cardBg,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: borderRadius.large,
    padding: spacing.md,
    marginVertical: spacing.sm,
    width: '100%',
    ...shadows.medium,
  },
  cardTranslucent: {
    backgroundColor: colors.cardBgTranslucent,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: borderRadius.large,
    padding: spacing.md,
    marginVertical: spacing.sm,
    width: '100%',
    ...shadows.small,
  },
  cardElevated: {
    backgroundColor: colors.cardBg,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: borderRadius.large,
    padding: spacing.lg,
    marginVertical: spacing.sm,
    width: '100%',
    ...shadows.large,
  },
  cardCompact: {
    backgroundColor: colors.cardBg,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: borderRadius.medium,
    padding: spacing.sm,
    marginVertical: spacing.xs,
    width: '100%',
    ...shadows.small,
  },

  // Input Styles
  input: {
    backgroundColor: colors.cardBg,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: borderRadius.medium,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    color: colors.textPrimary,
    fontFamily: typography.fontFamily,
    fontSize: typography.sizes.md,
  },

  // Divider
  divider: {
    height: 1,
    backgroundColor: colors.border,
    width: '100%',
    marginVertical: spacing.md,
  },
  dividerVertical: {
    width: 1,
    backgroundColor: colors.border,
    height: '100%',
    marginHorizontal: spacing.md,
  },

  // Badges & Pills
  badge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.small,
    backgroundColor: colors.indigo,
  },
  badgeText: {
    fontSize: typography.sizes.xs,
    fontWeight: '700',
    color: colors.white,
    fontFamily: typography.fontFamily,
  },

  // Icons & Images
  icon: {
    width: 60,
    height: 60,
    tintColor: colors.white,
  },
  iconSmall: {
    width: 24,
    height: 24,
    tintColor: colors.white,
  },
  iconMedium: {
    width: 40,
    height: 40,
    tintColor: colors.white,
  },
  iconLarge: {
    width: 80,
    height: 80,
    tintColor: colors.white,
  },

  // Effects
  glowEffect: {
    ...shadows.glow,
  },
  glowEffectStrong: {
    ...shadows.glowStrong,
  },

  // Spacing Helpers
  mt4: { marginTop: spacing.xs },
  mt8: { marginTop: spacing.sm },
  mt16: { marginTop: spacing.md },
  mt24: { marginTop: spacing.lg },
  mt32: { marginTop: spacing.xl },
  
  mb4: { marginBottom: spacing.xs },
  mb8: { marginBottom: spacing.sm },
  mb16: { marginBottom: spacing.md },
  mb24: { marginBottom: spacing.lg },
  mb32: { marginBottom: spacing.xl },
  
  mx4: { marginHorizontal: spacing.xs },
  mx8: { marginHorizontal: spacing.sm },
  mx16: { marginHorizontal: spacing.md },
  mx24: { marginHorizontal: spacing.lg },
  mx32: { marginHorizontal: spacing.xl },
  
  my4: { marginVertical: spacing.xs },
  my8: { marginVertical: spacing.sm },
  my16: { marginVertical: spacing.md },
  my24: { marginVertical: spacing.lg },
  my32: { marginVertical: spacing.xl },
  
  p4: { padding: spacing.xs },
  p8: { padding: spacing.sm },
  p16: { padding: spacing.md },
  p24: { padding: spacing.lg },
  p32: { padding: spacing.xl },
  
  px4: { paddingHorizontal: spacing.xs },
  px8: { paddingHorizontal: spacing.sm },
  px16: { paddingHorizontal: spacing.md },
  px24: { paddingHorizontal: spacing.lg },
  px32: { paddingHorizontal: spacing.xl },
  
  py4: { paddingVertical: spacing.xs },
  py8: { paddingVertical: spacing.sm },
  py16: { paddingVertical: spacing.md },
  py24: { paddingVertical: spacing.lg },
  py32: { paddingVertical: spacing.xl },

  // Spacers
  spacerSmall: { height: spacing.sm },
  spacerMedium: { height: spacing.md },
  spacerLarge: { height: spacing.lg },
  spacerXLarge: { height: spacing.xl },
  bottomSpacer: { height: 40 },

  // Flex Helpers
  flex1: { flex: 1 },
  flexRow: { flexDirection: 'row' },
  flexColumn: { flexDirection: 'column' },
  alignCenter: { alignItems: 'center' },
  alignStart: { alignItems: 'flex-start' },
  alignEnd: { alignItems: 'flex-end' },
  justifyCenter: { justifyContent: 'center' },
  justifyBetween: { justifyContent: 'space-between' },
  justifyAround: { justifyContent: 'space-around' },
  justifyStart: { justifyContent: 'flex-start' },
  justifyEnd: { justifyContent: 'flex-end' },

  // Position Helpers
  absolute: { position: 'absolute' },
  relative: { position: 'relative' },
  zIndex1: { zIndex: 1 },
  zIndex10: { zIndex: 10 },
  zIndex100: { zIndex: 100 },
  zIndex1000: { zIndex: 1000 },

  // Width/Height Helpers
  fullWidth: { width: '100%' },
  fullHeight: { height: '100%' },
  halfWidth: { width: '50%' },

  // Opacity Helpers
  opacity0: { opacity: 0 },
  opacity25: { opacity: 0.25 },
  opacity50: { opacity: 0.5 },
  opacity75: { opacity: 0.75 },
  opacity100: { opacity: 1 },
});

// ──────────────────────────────────────────────────────────────
// Utility Functions
// ──────────────────────────────────────────────────────────────

/**
 * Combines multiple style objects/arrays
 * @param styles - Array of style objects or arrays
 * @returns Flattened style object
 */
export const combineStyles = (...styles: any[]) => {
  return StyleSheet.flatten(styles);
};

/**
 * Creates a shadow style object
 * @param elevation - Shadow elevation (0-24)
 * @param color - Shadow color (default: black)
 * @returns Shadow style object
 */
export const createShadow = (elevation: number, color: string = '#000') => {
  const height = Math.min(elevation / 2, 12);
  const opacity = Math.min(elevation / 24, 0.5);
  const radius = Math.min(elevation * 2, 24);

  return {
    shadowColor: color,
    shadowOffset: { width: 0, height },
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation,
  };
};

// ──────────────────────────────────────────────────────────────
// Export Everything
// ──────────────────────────────────────────────────────────────
export default {
  colors,
  shadows,
  spacing,
  borderRadius,
  typography,
  buttonStyles,
  commonStyles,
  combineStyles,
  createShadow,
} as const;