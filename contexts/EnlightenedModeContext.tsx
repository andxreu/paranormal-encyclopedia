
import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { storage } from '@/utils/storage';

interface EnlightenedModeContextType {
  isEnlightened: boolean;
  tapCount: number;
  handleCrystalBallTap: () => void;
  resetTapCount: () => void;
}

const EnlightenedModeContext = createContext<EnlightenedModeContextType | undefined>(undefined);

export const useEnlightenedMode = (): EnlightenedModeContextType => {
  const context = useContext(EnlightenedModeContext);
  if (!context) {
    throw new Error('useEnlightenedMode must be used within EnlightenedModeProvider');
  }
  return context;
};

interface EnlightenedModeProviderProps {
  children: ReactNode;
}

export const EnlightenedModeProvider: React.FC<EnlightenedModeProviderProps> = ({ children }) => {
  const [isEnlightened, setIsEnlightened] = useState(false);
  const [tapCount, setTapCount] = useState(0);
  const [lastTapTime, setLastTapTime] = useState(0);

  const handleCrystalBallTap = useCallback(() => {
    const now = Date.now();
    const timeSinceLastTap = now - lastTapTime;

    if (timeSinceLastTap > 1000) {
      setTapCount(1);
    } else {
      const newCount = tapCount + 1;
      setTapCount(newCount);

      if (newCount >= 7) {
        setIsEnlightened(prev => !prev);
        setTapCount(0);
        storage.saveData('@enlightened_mode', !isEnlightened);
        console.log('Enlightened Mode:', !isEnlightened ? 'ACTIVATED' : 'DEACTIVATED');
      }
    }

    setLastTapTime(now);
  }, [tapCount, lastTapTime, isEnlightened]);

  const resetTapCount = useCallback(() => {
    setTapCount(0);
  }, []);

  return (
    <EnlightenedModeContext.Provider
      value={{
        isEnlightened,
        tapCount,
        handleCrystalBallTap,
        resetTapCount,
      }}
    >
      {children}
    </EnlightenedModeContext.Provider>
  );
};
