
import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { Appearance, ColorSchemeName } from 'react-native';
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
  accent: string;
  accentRed: string;
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
    backgroundGradient: [cosmicColors.purpleBlack, cosmicColors.darkPurple, cosmicColors.deepViolet],
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

// Light mode is now a high-contrast mystical dark theme
const lightTheme: Theme = {
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

const ThemeContext = createContext<ThemeContextType>({
  theme: darkTheme,
  colorScheme: 'dark',
  toggleTheme: () => console.warn('No theme provider'),
  textScale: 1,
  setTextScale: () => console.warn('No theme provider'),
});

export const useAppTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useAppTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('dark');
  const [textScale, setTextScaleState] = useState<number>(1);

  useEffect(() => {
    loadThemePreferences();
    
    const subscription = Appearance.addChangeListener(({ colorScheme: newColorScheme }) => {
      console.log('System color scheme changed:', newColorScheme);
      loadThemePreferences();
    });

    return () => subscription.remove();
  }, []);

  const loadThemePreferences = async () => {
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
  };

  const toggleTheme = async () => {
    const newScheme = colorScheme === 'dark' ? 'light' : 'dark';
    setColorScheme(newScheme);
    await storage.saveData('@theme_preference', newScheme);
  };

  const setTextScale = async (scale: number) => {
    setTextScaleState(scale);
    await storage.saveData('@text_scale', scale);
  };

  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, colorScheme, toggleTheme, textScale, setTextScale }}>
      {children}
    </ThemeContext.Provider>
  );
};
