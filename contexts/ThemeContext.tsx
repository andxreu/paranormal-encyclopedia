
import React, { createContext, useContext, ReactNode, useState, useEffect, useCallback, useMemo } from 'react';
import { Appearance } from 'react-native';
import { cosmicColors } from '@/constants/Colors';
import { storage } from '@/utils/storage';

interface ThemeColors {
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
  glassBg: string;
  glassBlur: number;
}

interface Theme {
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

interface ThemeContextType {
  theme: Theme;
  colorScheme: 'light' | 'dark';
  toggleTheme: () => void;
  textScale: number;
  setTextScale: (scale: number) => void;
}

const darkTheme: Theme = {
  colors: {
    background: cosmicColors.purpleBlack,
    backgroundAlt: cosmicColors.darkPurple,
    backgroundGradient: [
      cosmicColors.purpleBlack,
      cosmicColors.darkPurple,
      cosmicColors.deepViolet,
      cosmicColors.cosmicPurple,
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
    particleOpacity: 0.8,
    glassBg: 'rgba(42, 27, 78, 0.3)',
    glassBlur: 20,
  },
  fontFamily: 'SpaceMono',
  borderRadius: {
    small: 8,
    medium: 16,
    large: 24,
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
};

const lightTheme: Theme = {
  colors: {
    background: '#F3EFFF',
    backgroundAlt: '#E8E0FF',
    backgroundGradient: [
      '#F3EFFF',
      '#E8E0FF',
      '#DDD1FF',
      '#D2C2FF',
    ],
    gold: '#B8860B',
    indigo: '#4338CA',
    violet: '#7C3AED',
    white: '#1F1F1F',
    textPrimary: '#1F1F1F',
    textSecondary: '#4B5563',
    cardBg: 'rgba(255, 255, 255, 0.85)',
    cardBgTranslucent: 'rgba(255, 255, 255, 0.65)',
    border: 'rgba(124, 58, 237, 0.4)',
    glow: 'rgba(124, 58, 237, 0.4)',
    shadow: 'rgba(0, 0, 0, 0.15)',
    particleOpacity: 0.4,
    glassBg: 'rgba(255, 255, 255, 0.5)',
    glassBlur: 15,
  },
  fontFamily: 'SpaceMono',
  borderRadius: {
    small: 8,
    medium: 16,
    large: 24,
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useAppTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useAppTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = React.memo<ThemeProviderProps>(({ children }) => {
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('dark');
  const [textScale, setTextScaleState] = useState<number>(1);

  const loadThemePreferences = useCallback(async () => {
    try {
      const savedTheme = await storage.getData<'light' | 'dark'>('@theme_preference');
      const savedTextScale = await storage.getData<number>('@text_scale');
      
      if (savedTheme) {
        setColorScheme(savedTheme);
      } else {
        const systemTheme = Appearance.getColorScheme();
        setColorScheme(systemTheme === 'light' ? 'light' : 'dark');
      }
      
      if (savedTextScale) {
        setTextScaleState(savedTextScale);
      }
    } catch (error) {
      console.error('Error loading theme preferences:', error);
    }
  }, []);

  useEffect(() => {
    loadThemePreferences();
    
    const subscription = Appearance.addChangeListener(({ colorScheme: newColorScheme }) => {
      console.log('System color scheme changed:', newColorScheme);
      loadThemePreferences();
    });

    return () => subscription.remove();
  }, [loadThemePreferences]);

  const toggleTheme = useCallback(async () => {
    const newScheme = colorScheme === 'dark' ? 'light' : 'dark';
    setColorScheme(newScheme);
    await storage.saveData('@theme_preference', newScheme);
  }, [colorScheme]);

  const setTextScale = useCallback(async (scale: number) => {
    setTextScaleState(scale);
    await storage.saveData('@text_scale', scale);
  }, []);

  const theme = useMemo(() => colorScheme === 'dark' ? darkTheme : lightTheme, [colorScheme]);

  const contextValue = useMemo<ThemeContextType>(() => ({
    theme,
    colorScheme,
    toggleTheme,
    textScale,
    setTextScale,
  }), [theme, colorScheme, toggleTheme, textScale, setTextScale]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
});

ThemeProvider.displayName = 'ThemeProvider';
