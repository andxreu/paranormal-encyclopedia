// contexts/EnlightenedModeContext.tsx
import React, { 
  createContext, 
  useContext, 
  useState, 
  useCallback, 
  useEffect,
  useMemo,
  ReactNode,
} from 'react';
import { storage } from '@/utils/storage';
import { HapticFeedback } from '@/utils/haptics';

// ──────────────────────────────────────────────────────────────
// Constants
// ──────────────────────────────────────────────────────────────
const ENLIGHTENED_MODE_KEY = '@enlightened_mode';
const REQUIRED_TAPS = 7;
const TAP_TIMEOUT_MS = 1000; // Time window for sequential taps

// ──────────────────────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────────────────────
interface EnlightenedModeContextType {
  isEnlightened: boolean;
  tapCount: number;
  requiredTaps: number;
  handleCrystalBallTap: () => void;
  resetTapCount: () => void;
  setEnlightenedMode: (enabled: boolean) => Promise<void>;
  toggleEnlightenedMode: () => Promise<void>;
  isLoading: boolean;
  progress: number;
}

interface EnlightenedModeProviderProps {
  children: ReactNode;
  requiredTaps?: number;
  tapTimeout?: number;
  enableHaptics?: boolean;
}

// ──────────────────────────────────────────────────────────────
// Context
// ──────────────────────────────────────────────────────────────
const EnlightenedModeContext = createContext<EnlightenedModeContextType | undefined>(undefined);

// ──────────────────────────────────────────────────────────────
// Provider Component
// ──────────────────────────────────────────────────────────────
/**
 * Provider for Enlightened Mode - a secret feature unlocked by tapping
 * Tracks tap sequences and manages enlightened state with haptic feedback
 * 
 * @example
 * <EnlightenedModeProvider requiredTaps={7}>
 *   <App />
 * </EnlightenedModeProvider>
 */
export const EnlightenedModeProvider: React.FC<EnlightenedModeProviderProps> = ({ 
  children,
  requiredTaps = REQUIRED_TAPS,
  tapTimeout = TAP_TIMEOUT_MS,
  enableHaptics = true,
}) => {
  const [isEnlightened, setIsEnlightened] = useState<boolean>(false);
  const [tapCount, setTapCount] = useState<number>(0);
  const [lastTapTime, setLastTapTime] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  /**
   * Calculate progress percentage
   */
  const progress = useMemo(() => {
    return Math.min(100, (tapCount / requiredTaps) * 100);
  }, [tapCount, requiredTaps]);

  /**
   * Load enlightened mode state from storage on mount
   */
  useEffect(() => {
    const loadEnlightenedState = async () => {
      try {
        setIsLoading(true);
        const saved = await storage.getData<boolean>(ENLIGHTENED_MODE_KEY);
        
        if (typeof saved === 'boolean') {
          setIsEnlightened(saved);
          console.log(`[EnlightenedMode] ✓ Loaded: ${saved ? '✨ Enlightened' : 'Normal'}`);
        } else {
          console.log('[EnlightenedMode] ✓ Using default: Normal');
        }
      } catch (error) {
        console.error('[EnlightenedMode] ✗ Failed to load:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadEnlightenedState();
  }, []);

  /**
   * Handles crystal ball tap gesture for secret enlightened mode activation
   * Requires sequential taps within the timeout window
   * Provides progressive haptic feedback as user approaches activation
   */
  const handleCrystalBallTap = useCallback(() => {
    const now = Date.now();
    const timeSinceLastTap = now - lastTapTime;

    // Reset counter if too much time has passed
    if (timeSinceLastTap > tapTimeout) {
      setTapCount(1);
      setLastTapTime(now);
      
      // Subtle haptic for first tap
      if (enableHaptics) {
        HapticFeedback.soft();
      }
      
      console.log(`[EnlightenedMode] Tap sequence started (1/${requiredTaps})`);
      return;
    }

    // Increment tap count
    const newCount = tapCount + 1;
    setTapCount(newCount);
    setLastTapTime(now);

    // Progressive haptic feedback as user gets closer
    if (enableHaptics) {
      if (newCount >= requiredTaps - 2) {
        HapticFeedback.medium(); // Getting close!
      } else if (newCount >= requiredTaps - 4) {
        HapticFeedback.light(); // Halfway there
      } else {
        HapticFeedback.soft(); // Just starting
      }
    }

    console.log(`[EnlightenedMode] Tap sequence: ${newCount}/${requiredTaps}`);

    // Activate/deactivate enlightened mode
    if (newCount >= requiredTaps) {
      const newEnlightenedState = !isEnlightened;
      setIsEnlightened(newEnlightenedState);
      setTapCount(0);
      
      // Save state
      storage.saveData(ENLIGHTENED_MODE_KEY, newEnlightenedState).catch(error => {
        console.error('[EnlightenedMode] ✗ Failed to save:', error);
      });
      
      // Success haptic - special celebration pattern!
      if (enableHaptics) {
        HapticFeedback.celebrate();
      }
      
      console.log(`✨ [EnlightenedMode] ${newEnlightenedState ? 'ACTIVATED' : 'DEACTIVATED'}`);
    }
  }, [tapCount, lastTapTime, isEnlightened, requiredTaps, tapTimeout, enableHaptics]);

  /**
   * Resets the tap count (useful for canceling partial sequences)
   */
  const resetTapCount = useCallback(() => {
    if (tapCount > 0) {
      console.log('[EnlightenedMode] Tap sequence reset');
      setTapCount(0);
      setLastTapTime(0);
    }
  }, [tapCount]);

  /**
   * Directly sets enlightened mode state
   * @param enabled - Whether to enable enlightened mode
   * @throws Error if storage operation fails
   */
  const setEnlightenedMode = useCallback(async (enabled: boolean) => {
    if (typeof enabled !== 'boolean') {
      console.warn('[EnlightenedMode] ⚠️ Invalid value, expected boolean');
      return;
    }

    if (enabled === isEnlightened) {
      console.log(`[EnlightenedMode] Already ${enabled ? 'enlightened' : 'normal'}`);
      return;
    }

    try {
      console.log(`[EnlightenedMode] Setting to: ${enabled ? '✨ Enlightened' : 'Normal'}`);
      
      setIsEnlightened(enabled);
      await storage.saveData(ENLIGHTENED_MODE_KEY, enabled);
      
      // Haptic feedback
      if (enableHaptics) {
        if (enabled) {
          HapticFeedback.success();
        } else {
          HapticFeedback.soft();
        }
      }
      
      console.log(`✨ [EnlightenedMode] ✓ Set to: ${enabled ? 'Enlightened' : 'Normal'}`);
    } catch (error) {
      console.error('[EnlightenedMode] ✗ Failed to set:', error);
      // Revert on error
      setIsEnlightened(prevState => prevState);
      throw error;
    }
  }, [isEnlightened, enableHaptics]);

  /**
   * Toggles enlightened mode state
   */
  const toggleEnlightenedMode = useCallback(async () => {
    await setEnlightenedMode(!isEnlightened);
  }, [isEnlightened, setEnlightenedMode]);

  /**
   * Auto-reset tap count after timeout
   */
  useEffect(() => {
    if (tapCount > 0) {
      const timer = setTimeout(() => {
        if (Date.now() - lastTapTime > tapTimeout) {
          console.log('[EnlightenedMode] Tap sequence timed out');
          setTapCount(0);
          setLastTapTime(0);
        }
      }, tapTimeout + 100); // Add small buffer

      return () => clearTimeout(timer);
    }
    return undefined;
  }, [tapCount, lastTapTime, tapTimeout]);

  /**
   * Memoize context value to prevent unnecessary re-renders
   */
  const contextValue = useMemo<EnlightenedModeContextType>(() => ({
    isEnlightened,
    tapCount,
    requiredTaps,
    handleCrystalBallTap,
    resetTapCount,
    setEnlightenedMode,
    toggleEnlightenedMode,
    isLoading,
    progress,
  }), [
    isEnlightened,
    tapCount,
    requiredTaps,
    handleCrystalBallTap,
    resetTapCount,
    setEnlightenedMode,
    toggleEnlightenedMode,
    isLoading,
    progress,
  ]);

  return (
    <EnlightenedModeContext.Provider value={contextValue}>
      {children}
    </EnlightenedModeContext.Provider>
  );
};

// ──────────────────────────────────────────────────────────────
// Hooks
// ──────────────────────────────────────────────────────────────
/**
 * Hook to access enlightened mode context
 * Provides access to enlightened state, tap handling, and controls
 * 
 * @throws Error if used outside EnlightenedModeProvider
 * @returns Enlightened mode context value
 * 
 * @example
 * const { isEnlightened, handleCrystalBallTap } = useEnlightenedMode();
 * <Pressable onPress={handleCrystalBallTap}>
 *   <CrystalBall glowing={isEnlightened} />
 * </Pressable>
 */
export const useEnlightenedMode = (): EnlightenedModeContextType => {
  const context = useContext(EnlightenedModeContext);
  
  if (!context) {
    throw new Error('useEnlightenedMode must be used within EnlightenedModeProvider');
  }
  
  return context;
};

/**
 * Hook that returns only the enlightened state (read-only)
 * Useful when you only need to check if mode is active
 * 
 * @returns True if enlightened mode is active
 * 
 * @example
 * const isEnlightened = useIsEnlightened();
 * if (isEnlightened) return <SecretContent />;
 */
export const useIsEnlightened = (): boolean => {
  const { isEnlightened } = useEnlightenedMode();
  return isEnlightened;
};

/**
 * Hook that returns tap progress as a percentage
 * Useful for progress indicators during tap sequence
 * 
 * @returns Percentage (0-100) of tap progress
 * 
 * @example
 * const progress = useEnlightenedProgress();
 * <ProgressBar value={progress} />
 */
export const useEnlightenedProgress = (): number => {
  const { progress } = useEnlightenedMode();
  return progress;
};

/**
 * Hook that returns whether user is currently in a tap sequence
 * Useful for showing hints or animations during activation
 * 
 * @returns True if user has started tapping but not yet completed
 * 
 * @example
 * const isActivating = useIsEnlightenedActivating();
 * if (isActivating) return <Hint>Keep tapping...</Hint>;
 */
export const useIsEnlightenedActivating = (): boolean => {
  const { tapCount, requiredTaps } = useEnlightenedMode();
  return tapCount > 0 && tapCount < requiredTaps;
};

/**
 * Hook that returns the number of remaining taps needed
 * 
 * @returns Number of taps remaining (0 if complete or not started)
 * 
 * @example
 * const remaining = useEnlightenedTapsRemaining();
 * <Text>{remaining} taps remaining</Text>
 */
export const useEnlightenedTapsRemaining = (): number => {
  const { tapCount, requiredTaps } = useEnlightenedMode();
  return tapCount > 0 ? Math.max(0, requiredTaps - tapCount) : 0;
};

/**
 * Hook to get the crystal ball tap handler
 * Convenience hook for just the tap function
 * 
 * @returns Tap handler function
 * 
 * @example
 * const handleTap = useEnlightenedTap();
 * <Pressable onPress={handleTap}>
 *   <CrystalBall />
 * </Pressable>
 */
export const useEnlightenedTap = () => {
  const { handleCrystalBallTap } = useEnlightenedMode();
  return handleCrystalBallTap;
};

/**
 * Hook to get the toggle function
 * Convenience hook for toggling enlightened mode
 * 
 * @returns Toggle function
 * 
 * @example
 * const toggleEnlightened = useEnlightenedToggle();
 * <Button onPress={toggleEnlightened}>Toggle Secret Mode</Button>
 */
export const useEnlightenedToggle = () => {
  const { toggleEnlightenedMode } = useEnlightenedMode();
  return toggleEnlightenedMode;
};

/**
 * Hook to check if enlightened mode is loading
 * 
 * @returns True if loading
 * 
 * @example
 * const isLoading = useEnlightenedLoading();
 * if (isLoading) return <LoadingScreen />;
 */
export const useEnlightenedLoading = (): boolean => {
  const { isLoading } = useEnlightenedMode();
  return isLoading;
};

/**
 * Hook to get current tap count
 * 
 * @returns Current tap count
 * 
 * @example
 * const tapCount = useEnlightenedTapCount();
 * <Text>Taps: {tapCount}</Text>
 */
export const useEnlightenedTapCount = (): number => {
  const { tapCount } = useEnlightenedMode();
  return tapCount;
};

/**
 * Export constants for external use
 */
export { REQUIRED_TAPS, TAP_TIMEOUT_MS };