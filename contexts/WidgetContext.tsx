// contexts/WidgetContext.tsx
import React, { 
  createContext, 
  useCallback, 
  useContext, 
  useEffect,
  useState,
  useMemo,
  ReactNode,
} from 'react';
import { ExtensionStorage } from '@bacons/apple-targets';
import { Platform } from 'react-native';

// ──────────────────────────────────────────────────────────────
// Constants
// ──────────────────────────────────────────────────────────────
const WIDGET_GROUP_ID = 'group.com.<user_name>.<app_name>';
const WIDGET_STATE_KEY = 'widget_state';

// ──────────────────────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────────────────────
interface WidgetContextType {
  refreshWidget: () => void;
  updateWidgetData: <T>(key: string, data: T) => Promise<void>;
  getWidgetData: <T>(key: string) => Promise<T | null>;
  clearWidgetData: () => Promise<void>;
  isWidgetSupported: boolean;
  lastRefresh: Date | null;
}

interface WidgetProviderProps {
  children: ReactNode;
  groupId?: string;
  autoRefreshOnMount?: boolean;
}

// ──────────────────────────────────────────────────────────────
// Storage Instance
// ──────────────────────────────────────────────────────────────
let storage: ExtensionStorage | null = null;

/**
 * Initializes the extension storage instance
 * @param groupId - App group identifier for widget communication
 * @returns ExtensionStorage instance or null if not supported
 */
const initializeStorage = (groupId: string): ExtensionStorage | null => {
  try {
    if (Platform.OS === 'ios') {
      return new ExtensionStorage(groupId);
    }
    console.warn('[Widget] Only supported on iOS');
    return null;
  } catch (error) {
    console.error('[Widget] Failed to initialize storage:', error);
    return null;
  }
};

// ──────────────────────────────────────────────────────────────
// Context
// ──────────────────────────────────────────────────────────────
const WidgetContext = createContext<WidgetContextType | null>(null);

// ──────────────────────────────────────────────────────────────
// Provider Component
// ──────────────────────────────────────────────────────────────
/**
 * Provider for iOS widget integration
 * Manages communication between app and iOS home screen widgets
 * 
 * @example
 * <WidgetProvider groupId="group.com.myapp" autoRefreshOnMount>
 *   <App />
 * </WidgetProvider>
 */
export const WidgetProvider: React.FC<WidgetProviderProps> = ({ 
  children,
  groupId = WIDGET_GROUP_ID,
  autoRefreshOnMount = true,
}) => {
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null);
  const [isWidgetSupported] = useState<boolean>(Platform.OS === 'ios');

  /**
   * Initialize storage on mount
   */
  useEffect(() => {
    if (isWidgetSupported) {
      storage = initializeStorage(groupId);
      
      if (autoRefreshOnMount && storage) {
        console.log('[Widget] Auto-refreshing on mount');
        refreshWidget();
      }
    } else {
      console.log('[Widget] Platform not supported (iOS only)');
    }
  }, [groupId, autoRefreshOnMount, isWidgetSupported]);

  /**
   * Refreshes the widget to display updated data
   * Triggers widget reload on iOS home screen
   */
  const refreshWidget = useCallback(() => {
    if (!isWidgetSupported) {
      console.warn('[Widget] Refresh called on unsupported platform');
      return;
    }

    try {
      ExtensionStorage.reloadWidget();
      setLastRefresh(new Date());
      console.log('[Widget] Refreshed successfully');
    } catch (error) {
      console.error('[Widget] Failed to refresh:', error);
    }
  }, [isWidgetSupported]);

  /**
   * Updates data in the widget's shared storage
   * Automatically refreshes widget after update
   * 
   * @param key - Storage key for the data
   * @param data - Data to store (serializable)
   * @throws Error if storage operation fails
   */
  const updateWidgetData = useCallback(async <T,>(key: string, data: T): Promise<void> => {
    if (!storage) {
      console.warn('[Widget] Storage not initialized');
      return;
    }

    if (!key || typeof key !== 'string') {
      console.warn('[Widget] Invalid key provided');
      return;
    }

    try {
      await storage.set(key, data);
      console.log(`[Widget] Data updated for key: ${key}`);
      
      // Automatically refresh widget after updating data
      refreshWidget();
    } catch (error) {
      console.error(`[Widget] Failed to update data for key: ${key}`, error);
      throw error;
    }
  }, [refreshWidget]);

  /**
   * Retrieves data from the widget's shared storage
   * 
   * @param key - Storage key for the data
   * @returns The stored data or null if not found
   */
  const getWidgetData = useCallback(async <T,>(key: string): Promise<T | null> => {
    if (!storage) {
      console.warn('[Widget] Storage not initialized');
      return null;
    }

    if (!key || typeof key !== 'string') {
      console.warn('[Widget] Invalid key provided');
      return null;
    }

    try {
      const data = await storage.get(key);
      console.log(`[Widget] Data retrieved for key: ${key}`);
      return data as T;
    } catch (error) {
      console.error(`[Widget] Failed to get data for key: ${key}`, error);
      return null;
    }
  }, []);

  /**
   * Clears all widget data
   * Refreshes widget after clearing
   * 
   * @throws Error if storage operation fails
   */
  const clearWidgetData = useCallback(async (): Promise<void> => {
    if (!storage) {
      console.warn('[Widget] Storage not initialized');
      return;
    }

    try {
      await storage.set(WIDGET_STATE_KEY, null);
      console.log('[Widget] Data cleared');
      refreshWidget();
    } catch (error) {
      console.error('[Widget] Failed to clear data:', error);
      throw error;
    }
  }, [refreshWidget]);

  /**
   * Memoize context value to prevent unnecessary re-renders
   */
  const contextValue = useMemo<WidgetContextType>(() => ({
    refreshWidget,
    updateWidgetData,
    getWidgetData,
    clearWidgetData,
    isWidgetSupported,
    lastRefresh,
  }), [
    refreshWidget,
    updateWidgetData,
    getWidgetData,
    clearWidgetData,
    isWidgetSupported,
    lastRefresh,
  ]);

  return (
    <WidgetContext.Provider value={contextValue}>
      {children}
    </WidgetContext.Provider>
  );
};

// ──────────────────────────────────────────────────────────────
// Hooks
// ──────────────────────────────────────────────────────────────
/**
 * Hook to access widget context
 * Provides widget data management and refresh controls
 * 
 * @throws Error if used outside WidgetProvider
 * @returns Widget context value
 * 
 * @example
 * const { updateWidgetData, refreshWidget } = useWidget();
 * await updateWidgetData('daily-mystery', mysteryData);
 */
export const useWidget = (): WidgetContextType => {
  const context = useContext(WidgetContext);
  
  if (!context) {
    throw new Error('useWidget must be used within a WidgetProvider');
  }
  
  return context;
};

/**
 * Hook to check if widgets are supported on current platform
 * 
 * @returns True if widgets are supported (iOS only)
 * 
 * @example
 * const isSupported = useWidgetSupported();
 * if (isSupported) return <WidgetSettings />;
 */
export const useWidgetSupported = (): boolean => {
  const { isWidgetSupported } = useWidget();
  return isWidgetSupported;
};

/**
 * Hook to update widget data with automatic refresh
 * Convenience hook that returns just the update function
 * 
 * @returns Function to update widget data
 * 
 * @example
 * const updateWidget = useWidgetUpdate();
 * await updateWidget('mystery', newMystery);
 */
export const useWidgetUpdate = () => {
  const { updateWidgetData } = useWidget();
  return updateWidgetData;
};

/**
 * Hook to get widget refresh function
 * 
 * @returns Function to refresh widget
 * 
 * @example
 * const refreshWidget = useWidgetRefresh();
 * <Button onPress={refreshWidget}>Refresh Widget</Button>
 */
export const useWidgetRefresh = () => {
  const { refreshWidget } = useWidget();
  return refreshWidget;
};

/**
 * Hook to get last refresh timestamp
 * 
 * @returns Date of last refresh or null
 * 
 * @example
 * const lastRefresh = useWidgetLastRefresh();
 * <Text>Last updated: {lastRefresh?.toLocaleTimeString()}</Text>
 */
export const useWidgetLastRefresh = (): Date | null => {
  const { lastRefresh } = useWidget();
  return lastRefresh;
};

// ──────────────────────────────────────────────────────────────
// Utility Functions (for non-React contexts)
// ──────────────────────────────────────────────────────────────

/**
 * Updates widget data outside of React context
 * Useful for background tasks, services, or utilities
 * 
 * @param key - Storage key
 * @param data - Data to store
 * 
 * @example
 * // In a background service
 * await updateWidgetDataDirect('daily-mystery', todaysMystery);
 */
export const updateWidgetDataDirect = async <T,>(key: string, data: T): Promise<void> => {
  if (Platform.OS !== 'ios') {
    console.warn('[Widget] Direct update only supported on iOS');
    return;
  }

  try {
    const directStorage = new ExtensionStorage(WIDGET_GROUP_ID);
    await directStorage.set(key, data);
    ExtensionStorage.reloadWidget();
    console.log(`[Widget] Data updated directly for key: ${key}`);
  } catch (error) {
    console.error('[Widget] Failed to update directly:', error);
  }
};

/**
 * Refreshes widget outside of React context
 * Useful for background tasks or utilities
 * 
 * @example
 * // In a notification handler
 * refreshWidgetDirect();
 */
export const refreshWidgetDirect = (): void => {
  if (Platform.OS !== 'ios') {
    console.warn('[Widget] Direct refresh only supported on iOS');
    return;
  }

  try {
    ExtensionStorage.reloadWidget();
    console.log('[Widget] Refreshed directly');
  } catch (error) {
    console.error('[Widget] Failed to refresh directly:', error);
  }
};

/**
 * Export constants for external configuration
 */
export { WIDGET_GROUP_ID, WIDGET_STATE_KEY };