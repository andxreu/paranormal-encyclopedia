// contexts/ThemeContext.tsx
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import { Appearance, ColorSchemeName } from 'react-native';
import { cosmicColors } from '@/constants/Colors';
import { storage } from '@/utils/storage';

// ──────────────────────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────────────────────
export interface ThemeColors {
  background: string;
  backgroundAlt: string;
  backgroundGradient: string[];
  gold: string;
  indigo: string;
  violet: string;
  white: string;
  textPrimary: string;
  textSecondary: string;
  cardBg: string;
  cardBgTranslucent: string;
  border: string;
  glow: string;
  shadow: string;
  particleOpacity: number;
  accent: string;
  accentRed: string;
}

export interface Theme {
  colors: ThemeColors;
  fontFamily: string;
  borderRadius: {
    small: number;
    medium: number;
    large: number;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
}

export type ColorScheme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  colorScheme: ColorScheme;
  toggleTheme: () => Promise<void>;
  setTheme: (scheme: ColorScheme) => Promise<void>;
  textScale: number;
  setTextScale: (scale: number) => Promise<void>;
  isLoading: boolean;
}

// ──────────────────────────────────────────────────────────────
// Constants
// ──────────────────────────────────────────────────────────────
const TEXT_SCALE_MIN = 0.8;
const TEXT_SCALE_MAX = 2.0;
const TEXT_SCALE_DEFAULT = 1.0;

const THEME_STORAGE_KEY = '@theme_preference';
const TEXT_SCALE_STORAGE_KEY = '@text_scale';

// ──────────────────────────────────────────────────────────────
// Themes – Mystic (dark) & Arcane (light)
// ──────────────────────────────────────────────────────────────
const mysticTheme: Theme = {
  colors: {
    background: cosmicColors.purpleBlack,
    backgroundAlt: cosmicColors.darkPurple,
    backgroundGradient: [
      cosmicColors.purpleBlack,
      cosmicColors.darkPurple,
      cosmicColors.deepViolet,
    ],
    gold: cosmicColors.starGold,
    indigo: '#6366F1',
    violet: '#8B5CF6',
    white: '#FFFFFF',
    textPrimary: '#FFFFFF',
    textSecondary: '#B0B0B0',
    cardBg: 'rgba(42, 27, 78, 0.6)',
    cardBgTranslucent: 'rgba(42, 27, 78, 0.4)',
    border: 'rgba(139, 92, 246, 0.3)',
    glow: 'rgba(139, 92, 246, 0.5)',
    shadow: 'rgba(0, 0, 0, 0.5)',
    particleOpacity: 1,
    accent: '#00e5ff',
    accentRed: '#cc0000',
  },
  fontFamily: 'SpaceMono',
  borderRadius: { small: 8, medium: 16, large: 24 },
  spacing: { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 },
} as const;

const arcaneTheme: Theme = {
  colors: {
    background: '#0b0b1a',
    backgroundAlt: '#121225',
    backgroundGradient: ['#0b0b1a', '#121225', '#1a1a35'],
    gold: cosmicColors.starGold,
    indigo: '#6366F1',
    violet: '#8B5CF6',
    white: '#f0f0ff',
    textPrimary: '#f0f0ff',
    textSecondary: '#b0b0e0',
    cardBg: 'rgba(18, 18, 37, 0.8)',
    cardBgTranslucent: 'rgba(18, 18, 37, 0.6)',
    border: 'rgba(192, 192, 192, 0.3)',
    glow: 'rgba(0, 229, 255, 0.4)',
    shadow: 'rgba(0, 0, 0, 0.7)',
    particleOpacity: 0.8,
    accent: '#00e5ff',
    accentRed: '#cc0000',
  },
  fontFamily: 'SpaceMono',
  borderRadius: { small: 8, medium: 16, large: 24 },
  spacing: { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 },
} as const;

// ──────────────────────────────────────────────────────────────
// Context
// ──────────────────────────────────────────────────────────────
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Hook to access theme context
 * Provides theme colors, scheme, and controls
 * 
 * @throws Error if used outside ThemeProvider
 * @returns Theme context value
 * 
 * @example
 * const { theme, colorScheme, toggleTheme } = useAppTheme();
 * <View style={{ backgroundColor: theme.colors.background }}>
 */
export const useAppTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useAppTheme must be used within a ThemeProvider');
  }
  return context;
};

// ──────────────────────────────────────────────────────────────
// Helper Functions
// ──────────────────────────────────────────────────────────────

/**
 * Normalizes system color scheme to app color scheme
 * @param systemScheme - System color scheme or null
 * @returns 'light' or 'dark'
 */
const normalizeColorScheme = (systemScheme: ColorSchemeName): ColorScheme => {
  return systemScheme === 'light' ? 'light' : 'dark';
};

/**
 * Validates and clamps text scale value
 * @param scale - Proposed text scale
 * @returns Clamped text scale between min and max
 */
const validateTextScale = (scale: number): number => {
  if (typeof scale !== 'number' || isNaN(scale)) {
    console.warn('[Theme] Invalid text scale, using default');
    return TEXT_SCALE_DEFAULT;
  }
  const clamped = Math.max(TEXT_SCALE_MIN, Math.min(TEXT_SCALE_MAX, scale));
  if (clamped !== scale) {
    console.warn(`[Theme] Text scale clamped from ${scale} to ${clamped}`);
  }
  return clamped;
};

/**
 * Gets the appropriate theme object based on color scheme
 * @param scheme - Color scheme
 * @returns Theme object
 */
const getThemeForScheme = (scheme: ColorScheme): Theme => {
  return scheme === 'dark' ? mysticTheme : arcaneTheme;
};

/**
 * Validates color scheme value
 * @param scheme - Scheme to validate
 * @returns True if valid
 */
const isValidColorScheme = (scheme: any): scheme is ColorScheme => {
  return scheme === 'light' || scheme === 'dark';
};

// ──────────────────────────────────────────────────────────────
// Provider
// ──────────────────────────────────────────────────────────────
interface ThemeProviderProps {
  children: ReactNode;
  defaultScheme?: ColorScheme;
}

/**
 * Theme provider component
 * Manages app theme (dark/light), text scale, and system preference tracking
 * 
 * @example
 * <ThemeProvider defaultScheme="dark">
 *   <App />
 * </ThemeProvider>
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children,
  defaultScheme = 'dark'
}) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(defaultScheme);
  const [textScale, setTextScaleState] = useState<number>(TEXT_SCALE_DEFAULT);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userHasSetTheme, setUserHasSetTheme] = useState<boolean>(false);

  /**
   * Loads theme preferences from storage
   */
  const loadThemePreferences = useCallback(async () => {
    try {
      console.log('[Theme] Loading preferences...');
      
      const [savedTheme, savedTextScale] = await Promise.all([
        storage.getData<ColorScheme>(THEME_STORAGE_KEY),
        storage.getData<number>(TEXT_SCALE_STORAGE_KEY),
      ]);

      // Load saved theme preference
      if (savedTheme && isValidColorScheme(savedTheme)) {
        setColorScheme(savedTheme);
        setUserHasSetTheme(true);
        console.log(`[Theme] ✓ Loaded saved preference: ${savedTheme}`);
      } else {
        // No saved preference - use system preference
        const systemScheme = Appearance.getColorScheme();
        const normalized = normalizeColorScheme(systemScheme);
        setColorScheme(normalized);
        setUserHasSetTheme(false);
        console.log(`[Theme] ✓ Using system preference: ${normalized}`);
      }

      // Load saved text scale
      if (typeof savedTextScale === 'number') {
        const validated = validateTextScale(savedTextScale);
        setTextScaleState(validated);
        console.log(`[Theme] ✓ Loaded text scale: ${validated}`);
      } else {
        console.log(`[Theme] ✓ Using default text scale: ${TEXT_SCALE_DEFAULT}`);
      }
    } catch (error) {
      console.error('[Theme] ✗ Failed to load preferences:', error);
      // Fallback to defaults
      setColorScheme(defaultScheme);
      setTextScaleState(TEXT_SCALE_DEFAULT);
    } finally {
      setIsLoading(false);
    }
  }, [defaultScheme]);

  /**
   * Initialize theme on mount
   */
  useEffect(() => {
    loadThemePreferences();
  }, [loadThemePreferences]);

  /**
   * Listen for system theme changes
   */
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme: systemScheme }) => {
      // Only auto-switch if user hasn't manually set a theme
      if (!userHasSetTheme) {
        const newScheme = normalizeColorScheme(systemScheme);
        console.log(`[Theme] System changed to: ${newScheme}`);
        setColorScheme(newScheme);
      } else {
        console.log('[Theme] System changed but user preference takes priority');
      }
    });

    return () => {
      subscription.remove();
    };
  }, [userHasSetTheme]);

  /**
   * Toggle between light and dark theme
   */
  const toggleTheme = useCallback(async () => {
    try {
      const newScheme: ColorScheme = colorScheme === 'dark' ? 'light' : 'dark';
      
      console.log(`[Theme] Toggling: ${colorScheme} → ${newScheme}`);
      
      setColorScheme(newScheme);
      setUserHasSetTheme(true);
      
      await storage.saveData(THEME_STORAGE_KEY, newScheme);
      
      console.log(`[Theme] ✓ Toggled to: ${newScheme}`);
    } catch (error) {
      console.error('[Theme] ✗ Failed to toggle:', error);
      // Revert on error
      setColorScheme(prevScheme => prevScheme);
    }
  }, [colorScheme]);

  /**
   * Set theme to specific color scheme
   * @param scheme - Color scheme to set
   */
  const setTheme = useCallback(async (scheme: ColorScheme) => {
    if (!isValidColorScheme(scheme)) {
      console.warn(`[Theme] Invalid color scheme provided: ${scheme}`);
      return;
    }

    if (scheme === colorScheme) {
      console.log(`[Theme] Already using ${scheme} theme`);
      return;
    }

    try {
      console.log(`[Theme] Setting theme to: ${scheme}`);
      
      setColorScheme(scheme);
      setUserHasSetTheme(true);
      
      await storage.saveData(THEME_STORAGE_KEY, scheme);
      
      console.log(`[Theme] ✓ Set to: ${scheme}`);
    } catch (error) {
      console.error('[Theme] ✗ Failed to set:', error);
      // Revert on error
      setColorScheme(prevScheme => prevScheme);
    }
  }, [colorScheme]);

  /**
   * Set text scale with validation
   * @param scale - New text scale (0.8 - 2.0)
   */
  const setTextScale = useCallback(async (scale: number) => {
    try {
      const validatedScale = validateTextScale(scale);
      
      if (validatedScale === textScale) {
        console.log(`[Theme] Text scale already ${validatedScale}`);
        return;
      }
      
      console.log(`[Theme] Setting text scale to: ${validatedScale}`);
      
      setTextScaleState(validatedScale);
      
      await storage.saveData(TEXT_SCALE_STORAGE_KEY, validatedScale);
      
      console.log(`[Theme] ✓ Text scale set to: ${validatedScale}`);
    } catch (error) {
      console.error('[Theme] ✗ Failed to set text scale:', error);
      // Revert on error
      setTextScaleState(prevScale => prevScale);
    }
  }, [textScale]);

  /**
   * Memoize theme object to prevent unnecessary re-renders
   */
  const theme = useMemo(() => getThemeForScheme(colorScheme), [colorScheme]);

  /**
   * Memoize context value to prevent unnecessary re-renders
   */
  const contextValue = useMemo<ThemeContextType>(() => ({
    theme,
    colorScheme,
    toggleTheme,
    setTheme,
    textScale,
    setTextScale,
    isLoading,
  }), [theme, colorScheme, toggleTheme, setTheme, textScale, setTextScale, isLoading]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// ──────────────────────────────────────────────────────────────
// Additional Exports & Helper Hooks
// ──────────────────────────────────────────────────────────────

/**
 * Export theme objects for direct use if needed
 */
export { mysticTheme, arcaneTheme };

/**
 * Export constants for external use
 */
export { TEXT_SCALE_MIN, TEXT_SCALE_MAX, TEXT_SCALE_DEFAULT };

/**
 * Hook to get only theme colors (most common use case)
 * 
 * @returns Theme colors object
 * 
 * @example
 * const colors = useThemeColors();
 * <View style={{ backgroundColor: colors.background }} />
 */
export const useThemeColors = (): ThemeColors => {
  const { theme } = useAppTheme();
  return theme.colors;
};

/**
 * Hook to get current color scheme
 * 
 * @returns Current color scheme ('light' or 'dark')
 * 
 * @example
 * const colorScheme = useColorScheme();
 * const isDark = colorScheme === 'dark';
 */
export const useColorScheme = (): ColorScheme => {
  const { colorScheme } = useAppTheme();
  return colorScheme;
};

/**
 * Hook to check if dark mode is active
 * 
 * @returns True if dark mode is active
 * 
 * @example
 * const isDark = useIsDarkMode();
 * if (isDark) return <MoonIcon />;
 */
export const useIsDarkMode = (): boolean => {
  const { colorScheme } = useAppTheme();
  return colorScheme === 'dark';
};

/**
 * Hook to get scaled text size
 * Multiplies base size by current text scale
 * 
 * @param baseSize - Base font size in pixels
 * @returns Scaled font size
 * 
 * @example
 * const fontSize = useScaledText(16); // Returns 16 * textScale
 * <Text style={{ fontSize }} />
 */
export const useScaledText = (baseSize: number): number => {
  const { textScale } = useAppTheme();
  return Math.round(baseSize * textScale);
};

/**
 * Hook to get theme spacing with optional scale
 * 
 * @returns Spacing values from theme
 * 
 * @example
 * const spacing = useThemeSpacing();
 * <View style={{ padding: spacing.md }} />
 */
export const useThemeSpacing = () => {
  const { theme } = useAppTheme();
  return theme.spacing;
};

/**
 * Hook to get theme border radius values
 * 
 * @returns Border radius values from theme
 * 
 * @example
 * const borderRadius = useThemeBorderRadius();
 * <View style={{ borderRadius: borderRadius.medium }} />
 */
export const useThemeBorderRadius = () => {
  const { theme } = useAppTheme();
  return theme.borderRadius;
};

/**
 * Hook to check if theme is still loading
 * 
 * @returns True if theme is loading
 * 
 * @example
 * const isLoadingTheme = useThemeLoading();
 * if (isLoadingTheme) return <LoadingScreen />;
 */
export const useThemeLoading = (): boolean => {
  const { isLoading } = useAppTheme();
  return isLoading;
};