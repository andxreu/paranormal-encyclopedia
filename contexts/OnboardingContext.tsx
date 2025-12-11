
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { storage } from '@/utils/storage';

interface OnboardingContextType {
  isOnboardingComplete: boolean;
  isCheckingOnboarding: boolean;
  setOnboardingComplete: (complete: boolean) => Promise<void>;
  checkOnboardingStatus: () => Promise<void>;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export const OnboardingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOnboardingComplete, setIsOnboardingCompleteState] = useState(true);
  const [isCheckingOnboarding, setIsCheckingOnboarding] = useState(true);

  const checkOnboardingStatus = useCallback(async () => {
    try {
      console.log('Checking onboarding status...');
      setIsCheckingOnboarding(true);
      const complete = await storage.isOnboardingComplete();
      console.log('Onboarding complete:', complete);
      setIsOnboardingCompleteState(complete);
    } catch (error) {
      console.error('Error checking onboarding status:', error);
      setIsOnboardingCompleteState(true);
    } finally {
      setIsCheckingOnboarding(false);
    }
  }, []);

  const setOnboardingComplete = useCallback(async (complete: boolean) => {
    try {
      console.log('Setting onboarding complete:', complete);
      await storage.setOnboardingComplete(complete);
      setIsOnboardingCompleteState(complete);
    } catch (error) {
      console.error('Error setting onboarding complete:', error);
    }
  }, []);

  useEffect(() => {
    checkOnboardingStatus();
  }, [checkOnboardingStatus]);

  return (
    <OnboardingContext.Provider
      value={{
        isOnboardingComplete,
        isCheckingOnboarding,
        setOnboardingComplete,
        checkOnboardingStatus,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
};
