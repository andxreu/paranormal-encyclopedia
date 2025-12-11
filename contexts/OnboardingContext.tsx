// contexts/OnboardingContext.tsx
import React, { 
  createContext, 
  useContext, 
  useState, 
  useEffect, 
  useCallback,
  useMemo,
  ReactNode,
} from 'react';
import { storage } from '@/utils/storage';

// ──────────────────────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────────────────────
interface OnboardingContextType {
  isOnboardingComplete: boolean;
  isCheckingOnboarding: boolean;
  setOnboardingComplete: (complete: boolean) => Promise<void>;
  checkOnboardingStatus: () => Promise<void>;
  resetOnboarding: () => Promise<void>;
}

interface OnboardingProviderProps {
  children: ReactNode;
  defaultComplete?: boolean;
}

// ──────────────────────────────────────────────────────────────
// Context Creation
// ──────────────────────────────────────────────────────────────
const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

// ──────────────────────────────────────────────────────────────
// Provider Component
// ──────────────────────────────────────────────────────────────
/**
 * Provider for onboarding state management
 * Handles checking, setting, and resetting onboarding completion status
 * 
 * @example
 * <OnboardingProvider>
 *   <App />
 * </OnboardingProvider>
 */
export const OnboardingProvider: React.FC<OnboardingProviderProps> = ({ 
  children,
  defaultComplete = false,
}) => {
  const [isOnboardingComplete, setIsOnboardingCompleteState] = useState<boolean>(defaultComplete);
  const [isCheckingOnboarding, setIsCheckingOnboarding] = useState<boolean>(true);
  const [hasChecked, setHasChecked] = useState<boolean>(false);

  /**
   * Checks onboarding status from storage
   * Sets initial state based on stored value
   * Prevents redundant checks if already loaded
   */
  const checkOnboardingStatus = useCallback(async () => {
    // Prevent redundant checks
    if (hasChecked && !isCheckingOnboarding) {
      console.log('[Onboarding] Status already checked, skipping');
      return;
    }

    try {
      console.log('[Onboarding] Checking status...');
      setIsCheckingOnboarding(true);
      
      const complete = await storage.isOnboardingComplete();
      
      console.log('[Onboarding] Complete:', complete);
      setIsOnboardingCompleteState(complete);
      setHasChecked(true);
    } catch (error) {
      console.error('[Onboarding] Error checking status:', error);
      // On error, assume onboarding is needed (safer default)
      setIsOnboardingCompleteState(defaultComplete);
      setHasChecked(true);
    } finally {
      setIsCheckingOnboarding(false);
    }
  }, [hasChecked, isCheckingOnboarding, defaultComplete]);

  /**
   * Sets onboarding completion status
   * Updates both storage and local state
   * @param complete - Whether onboarding is complete
   * @throws Error if storage operation fails
   */
  const setOnboardingComplete = useCallback(async (complete: boolean) => {
    if (typeof complete !== 'boolean') {
      console.warn('[Onboarding] Invalid value provided, expected boolean');
      return;
    }

    try {
      console.log('[Onboarding] Setting complete:', complete);
      
      // Update storage first
      await storage.setOnboardingComplete(complete);
      
      // Then update state
      setIsOnboardingCompleteState(complete);
      
      console.log('[Onboarding] Status updated successfully');
    } catch (error) {
      console.error('[Onboarding] Error setting complete:', error);
      throw error; // Re-throw to allow caller to handle
    }
  }, []);

  /**
   * Resets onboarding state (useful for testing or re-onboarding)
   * Clears both storage and local state
   * @throws Error if storage operation fails
   */
  const resetOnboarding = useCallback(async () => {
    try {
      console.log('[Onboarding] Resetting...');
      await storage.setOnboardingComplete(false);
      setIsOnboardingCompleteState(false);
      setHasChecked(false);
      console.log('[Onboarding] Reset successfully');
    } catch (error) {
      console.error('[Onboarding] Error resetting:', error);
      throw error;
    }
  }, []);

  /**
   * Check onboarding status on mount
   */
  useEffect(() => {
    checkOnboardingStatus();
  }, [checkOnboardingStatus]);

  /**
   * Memoize context value to prevent unnecessary re-renders
   */
  const contextValue = useMemo<OnboardingContextType>(() => ({
    isOnboardingComplete,
    isCheckingOnboarding,
    setOnboardingComplete,
    checkOnboardingStatus,
    resetOnboarding,
  }), [
    isOnboardingComplete,
    isCheckingOnboarding,
    setOnboardingComplete,
    checkOnboardingStatus,
    resetOnboarding,
  ]);

  return (
    <OnboardingContext.Provider value={contextValue}>
      {children}
    </OnboardingContext.Provider>
  );
};

// ──────────────────────────────────────────────────────────────
// Hooks
// ──────────────────────────────────────────────────────────────
/**
 * Hook to access onboarding context
 * Provides access to onboarding state and actions
 * 
 * @throws Error if used outside OnboardingProvider
 * @returns Onboarding context value
 * 
 * @example
 * const { isOnboardingComplete, setOnboardingComplete } = useOnboarding();
 */
export const useOnboarding = (): OnboardingContextType => {
  const context = useContext(OnboardingContext);
  
  if (context === undefined) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  
  return context;
};

/**
 * Helper hook that returns true when onboarding check is complete
 * Useful for preventing flash of content during initial check
 * 
 * @returns True when ready to render based on onboarding state
 * 
 * @example
 * const isReady = useOnboardingReady();
 * if (!isReady) return <LoadingScreen />;
 */
export const useOnboardingReady = (): boolean => {
  const { isCheckingOnboarding } = useOnboarding();
  return !isCheckingOnboarding;
};

/**
 * Helper hook that returns true only when onboarding is complete and checked
 * Useful for conditional rendering of onboarded-only content
 * 
 * @returns True when onboarding is verified complete
 * 
 * @example
 * const isOnboarded = useIsOnboarded();
 * if (!isOnboarded) return <OnboardingFlow />;
 */
export const useIsOnboarded = (): boolean => {
  const { isOnboardingComplete, isCheckingOnboarding } = useOnboarding();
  return isOnboardingComplete && !isCheckingOnboarding;
};

/**
 * Helper hook for forcing onboarding completion
 * Returns a function that marks onboarding as complete
 * 
 * @returns Function to mark onboarding complete
 * 
 * @example
 * const completeOnboarding = useCompleteOnboarding();
 * <Button onPress={() => completeOnboarding()}>Get Started</Button>
 */
export const useCompleteOnboarding = (): (() => Promise<void>) => {
  const { setOnboardingComplete } = useOnboarding();
  return useCallback(async () => {
    await setOnboardingComplete(true);
  }, [setOnboardingComplete]);
};

/**
 * Helper hook for skipping onboarding (development/testing)
 * Returns a function that skips onboarding
 * 
 * @returns Function to skip onboarding
 * 
 * @example
 * const skipOnboarding = useSkipOnboarding();
 * <Button onPress={skipOnboarding}>Skip (Dev Only)</Button>
 */
export const useSkipOnboarding = (): (() => Promise<void>) => {
  const { setOnboardingComplete } = useOnboarding();
  return useCallback(async () => {
    console.warn('[Onboarding] Skipping (should only be used in development)');
    await setOnboardingComplete(true);
  }, [setOnboardingComplete]);
};