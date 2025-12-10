
import React, { createContext, useContext, ReactNode } from 'react';

interface ThemeColors {
  background: string;
  backgroundAlt: string;
  gold: string;
  indigo: string;
  violet: string;
  white: string;
  textPrimary: string;
  textSecondary: string;
  cardBg: string;
  border: string;
}

interface Theme {
  colors: ThemeColors;
  fontFamily: string;
}

const darkTheme: Theme = {
  colors: {
    background: '#08080B',
    backgroundAlt: '#12121A',
    gold: '#D4AF37',
    indigo: '#6366F1',
    violet: '#8B5CF6',
    white: '#FFFFFF',
    textPrimary: '#FFFFFF',
    textSecondary: '#A0A0A0',
    cardBg: '#1A1A24',
    border: '#2A2A3A',
  },
  fontFamily: 'SpaceMono',
};

const ThemeContext = createContext<Theme>(darkTheme);

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
    <ThemeContext.Provider value={darkTheme}>
      {children}
    </ThemeContext.Provider>
  );
};
