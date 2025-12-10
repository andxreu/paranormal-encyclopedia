
import React, { createContext, useContext, ReactNode } from 'react';
import { cosmicColors } from '@/constants/Colors';

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

const cosmicTheme: Theme = {
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

const ThemeContext = createContext<Theme>(cosmicTheme);

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
  return (
    <ThemeContext.Provider value={cosmicTheme}>
      {children}
    </ThemeContext.Provider>
  );
};
