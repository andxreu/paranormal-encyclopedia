// utils/storage.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

// ──────────────────────────────────────────────────────────────
// Storage Keys – Central source of truth
// ──────────────────────────────────────────────────────────────
const KEYS = {
  CATEGORIES: '@paranormal_categories',
  FACTS: '@paranormal_facts',
  FAVORITES: '@paranormal_favorites',
  LAST_SYNC: '@paranormal_last_sync',
  ONBOARDING_COMPLETE: '@paranormal_onboarding_complete',
  SETTINGS: '@paranormal_settings',
  SEARCH_HISTORY: '@paranormal_search_history',
  THEME_PREFERENCE: '@theme_preference',
  TEXT_SCALE: '@text_scale',
} as const;

// ──────────────────────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────────────────────
export interface AppSettings {
  notificationsEnabled: boolean;
  soundsEnabled: boolean;
  hapticsEnabled: boolean;
  themeVariant: 'default' | 'dark' | 'cosmic';
  ambientSoundEnabled: boolean;
  dailyNotificationsEnabled: boolean;
}

export interface FavoriteItem {
  id: string;
  type: 'topic' | 'codex' | 'haunted-location' | 'documented-account';
  title: string;
  description: string;
  categoryId?: string;
  categoryName?: string;
  categoryColor?: string;
  categoryIcon?: string;
  timestamp: number;
}

// ──────────────────────────────────────────────────────────────
// Constants
// ──────────────────────────────────────────────────────────────
const DEFAULT_SETTINGS: AppSettings = {
  notificationsEnabled: true,
  soundsEnabled: true,
  hapticsEnabled: true,
  themeVariant: 'default',
  ambientSoundEnabled: false,
  dailyNotificationsEnabled: false,
};

const MAX_SEARCH_HISTORY = 20;
const MAX_FAVORITES = 500;

// ──────────────────────────────────────────────────────────────
// Type Guards
// ──────────────────────────────────────────────────────────────

/**
 * Type guard to validate FavoriteItem structure
 */
function isValidFavoriteItem(item: any): item is FavoriteItem {
  return (
    item !== null &&
    typeof item === 'object' &&
    typeof item.id === 'string' &&
    typeof item.type === 'string' &&
    typeof item.title === 'string' &&
    typeof item.description === 'string' &&
    typeof item.timestamp === 'number' &&
    ['topic', 'codex', 'haunted-location', 'documented-account'].includes(item.type)
  );
}

/**
 * Type guard to validate AppSettings structure
 */
function isValidAppSettings(settings: any): settings is AppSettings {
  return (
    settings !== null &&
    typeof settings === 'object' &&
    typeof settings.notificationsEnabled === 'boolean' &&
    typeof settings.soundsEnabled === 'boolean' &&
    typeof settings.hapticsEnabled === 'boolean' &&
    typeof settings.themeVariant === 'string' &&
    typeof settings.ambientSoundEnabled === 'boolean' &&
    typeof settings.dailyNotificationsEnabled === 'boolean'
  );
}

// ──────────────────────────────────────────────────────────────
// Core Generic Helpers (private)
// ──────────────────────────────────────────────────────────────
const Storage = {
  /**
   * Safely sets data in AsyncStorage with validation
   * @param key - Storage key
   * @param value - Value to store
   * @throws Error if storage operation fails critically
   */
  async set<T>(key: string, value: T): Promise<void> {
    if (!key || typeof key !== 'string') {
      console.error('[Storage] Invalid key provided:', key);
      return;
    }

    if (value === null || value === undefined) {
      console.warn(`[Storage] Attempted to save null/undefined for key: ${key}`);
      return;
    }

    try {
      const serialized = JSON.stringify(value);
      await AsyncStorage.setItem(key, serialized);
      console.log(`[Storage] ✓ Saved: ${key}`);
    } catch (error) {
      console.error(`[Storage] ✗ Failed to set ${key}:`, error);
      
      // Check for quota exceeded error
      if (error instanceof Error && error.message.includes('quota')) {
        console.error('[Storage] Storage quota exceeded - consider clearing old data');
        throw new Error('Storage quota exceeded');
      }
      
      throw error;
    }
  },

  /**
   * Safely retrieves and parses data from AsyncStorage
   * @param key - Storage key
   * @returns Parsed value or null if not found/invalid
   */
  async get<T>(key: string): Promise<T | null> {
    if (!key || typeof key !== 'string') {
      console.error('[Storage] Invalid key provided:', key);
      return null;
    }

    try {
      const raw = await AsyncStorage.getItem(key);
      
      if (raw === null || raw === undefined) {
        return null;
      }

      const parsed = JSON.parse(raw) as T;
      return parsed;
    } catch (error) {
      console.error(`[Storage] ✗ Failed to get/parse ${key}:`, error);
      
      // If parse fails, try to remove corrupted data
      try {
        await AsyncStorage.removeItem(key);
        console.warn(`[Storage] Removed corrupted data for key: ${key}`);
      } catch (removeError) {
        console.error(`[Storage] Failed to remove corrupted key ${key}:`, removeError);
      }
      
      return null;
    }
  },

  /**
   * Removes data from AsyncStorage
   * @param key - Storage key
   */
  async remove(key: string): Promise<void> {
    if (!key || typeof key !== 'string') {
      console.error('[Storage] Invalid key provided for removal:', key);
      return;
    }

    try {
      await AsyncStorage.removeItem(key);
      console.log(`[Storage] ✓ Removed: ${key}`);
    } catch (error) {
      console.error(`[Storage] ✗ Failed to remove ${key}:`, error);
    }
  },
};

// ──────────────────────────────────────────────────────────────
// Public API – Clean, typed, and bulletproof
// ──────────────────────────────────────────────────────────────
export const storage = {
  // ────────────────────────────────────────────────────────────
  // Generic Methods
  // ────────────────────────────────────────────────────────────
  saveData: Storage.set,
  getData: Storage.get,
  removeData: Storage.remove,

  // ────────────────────────────────────────────────────────────
  // App-wide Operations
  // ────────────────────────────────────────────────────────────

  /**
   * Clears all app data from storage
   * WARNING: This is destructive and cannot be undone
   */
  async clearAll(): Promise<void> {
    try {
      await AsyncStorage.clear();
      console.log('[Storage] ✓ All data cleared');
    } catch (error) {
      console.error('[Storage] ✗ Failed to clear all data:', error);
      throw error;
    }
  },

  /**
   * Calculates total cache size in bytes
   * @returns Size in bytes
   */
  async getCacheSize(): Promise<number> {
    try {
      const keys = await AsyncStorage.getAllKeys();
      
      if (!keys || keys.length === 0) {
        return 0;
      }

      const values = await AsyncStorage.multiGet(keys);
      
      const totalSize = values.reduce((sum, [_key, value]) => {
        return sum + (value?.length ?? 0);
      }, 0);

      console.log(`[Storage] Cache size: ${(totalSize / 1024).toFixed(2)} KB`);
      return totalSize;
    } catch (error) {
      console.error('[Storage] ✗ Failed to calculate cache size:', error);
      return 0;
    }
  },

  /**
   * Gets all storage keys (useful for debugging)
   * @returns Array of all keys
   */
  async getAllKeys(): Promise<string[]> {
    try {
      const keys = await AsyncStorage.getAllKeys();
      return keys ?? [];
    } catch (error) {
      console.error('[Storage] ✗ Failed to get all keys:', error);
      return [];
    }
  },

  // ────────────────────────────────────────────────────────────
  // Favorites Management
  // ────────────────────────────────────────────────────────────

  /**
   * Retrieves all favorites with validation
   * @returns Array of valid favorite items
   */
  async getFavorites(): Promise<FavoriteItem[]> {
    try {
      const favs = await Storage.get<FavoriteItem[]>(KEYS.FAVORITES);
      
      if (!Array.isArray(favs)) {
        return [];
      }

      // Filter out any invalid items
      const validFavorites = favs.filter(isValidFavoriteItem);
      
      if (validFavorites.length !== favs.length) {
        console.warn('[Storage] Removed invalid favorites during retrieval');
        // Save back the cleaned array
        await storage.saveFavorites(validFavorites);
      }

      return validFavorites;
    } catch (error) {
      console.error('[Storage] ✗ Failed to get favorites:', error);
      return [];
    }
  },

  /**
   * Saves favorites array with validation
   * @param favorites - Array of favorite items
   */
  async saveFavorites(favorites: FavoriteItem[]): Promise<void> {
    if (!Array.isArray(favorites)) {
      console.error('[Storage] Invalid favorites array provided');
      return;
    }

    try {
      // Validate all items
      const validFavorites = favorites.filter(isValidFavoriteItem);
      
      // Enforce maximum limit
      const limitedFavorites = validFavorites.slice(0, MAX_FAVORITES);
      
      if (limitedFavorites.length < favorites.length) {
        console.warn(`[Storage] Favorites trimmed to ${MAX_FAVORITES} items`);
      }

      await Storage.set(KEYS.FAVORITES, limitedFavorites);
    } catch (error) {
      console.error('[Storage] ✗ Failed to save favorites:', error);
      throw error;
    }
  },

  /**
   * Adds a new favorite item with deduplication
   * @param item - Favorite item to add
   */
  async addFavorite(item: FavoriteItem): Promise<void> {
    if (!isValidFavoriteItem(item)) {
      console.warn('[Storage] Cannot add favorite - invalid item structure');
      return;
    }

    try {
      const favorites = await storage.getFavorites();
      
      // Check if already exists
      const existingIndex = favorites.findIndex(f => f.id === item.id);
      
      if (existingIndex !== -1) {
        console.log(`[Storage] Favorite already exists: ${item.id}`);
        // Update timestamp of existing favorite
        favorites[existingIndex] = { ...item, timestamp: Date.now() };
        await storage.saveFavorites(favorites);
        return;
      }

      // Add new favorite at the beginning
      const updatedFavorites = [
        { ...item, timestamp: Date.now() },
        ...favorites
      ];

      await storage.saveFavorites(updatedFavorites);
      console.log(`[Storage] ✓ Added favorite: ${item.id}`);
    } catch (error) {
      console.error('[Storage] ✗ Failed to add favorite:', error);
      throw error;
    }
  },

  /**
   * Removes a favorite by ID
   * @param id - ID of favorite to remove
   */
  async removeFavorite(id: string): Promise<void> {
    if (!id || typeof id !== 'string') {
      console.warn('[Storage] Invalid ID provided for removal');
      return;
    }

    try {
      const favorites = await storage.getFavorites();
      const filtered = favorites.filter(f => f.id !== id);
      
      if (filtered.length === favorites.length) {
        console.log(`[Storage] Favorite not found: ${id}`);
        return;
      }

      await storage.saveFavorites(filtered);
      console.log(`[Storage] ✓ Removed favorite: ${id}`);
    } catch (error) {
      console.error('[Storage] ✗ Failed to remove favorite:', error);
      throw error;
    }
  },

  /**
   * Checks if an item is favorited
   * @param id - ID to check
   * @returns True if favorited
   */
  async isFavorite(id: string): Promise<boolean> {
    if (!id || typeof id !== 'string') {
      return false;
    }

    try {
      const favorites = await storage.getFavorites();
      return favorites.some(f => f.id === id);
    } catch (error) {
      console.error('[Storage] ✗ Failed to check favorite status:', error);
      return false;
    }
  },

  /**
   * Toggles favorite status for an item
   * @param item - Item to toggle
   * @returns New favorite status (true if added, false if removed)
   */
  async toggleFavorite(item: FavoriteItem): Promise<boolean> {
    try {
      const isFav = await storage.isFavorite(item.id);
      
      if (isFav) {
        await storage.removeFavorite(item.id);
        return false;
      } else {
        await storage.addFavorite(item);
        return true;
      }
    } catch (error) {
      console.error('[Storage] ✗ Failed to toggle favorite:', error);
      throw error;
    }
  },

  // ────────────────────────────────────────────────────────────
  // Onboarding
  // ────────────────────────────────────────────────────────────

  /**
   * Sets onboarding completion status
   * @param complete - Whether onboarding is complete
   */
  async setOnboardingComplete(complete: boolean): Promise<void> {
    if (typeof complete !== 'boolean') {
      console.warn('[Storage] Invalid onboarding status - expected boolean');
      return;
    }

    try {
      await Storage.set(KEYS.ONBOARDING_COMPLETE, complete);
      console.log(`[Storage] ✓ Onboarding status: ${complete}`);
    } catch (error) {
      console.error('[Storage] ✗ Failed to set onboarding status:', error);
      throw error;
    }
  },

  /**
   * Checks if onboarding is complete
   * @returns True if onboarding is complete
   */
  async isOnboardingComplete(): Promise<boolean> {
    try {
      const value = await Storage.get<boolean>(KEYS.ONBOARDING_COMPLETE);
      return value === true;
    } catch (error) {
      console.error('[Storage] ✗ Failed to check onboarding status:', error);
      return false; // Safe default - show onboarding if uncertain
    }
  },

  // ────────────────────────────────────────────────────────────
  // Settings Management
  // ────────────────────────────────────────────────────────────

  /**
   * Retrieves app settings with validation and defaults
   * @returns Complete settings object with all fields
   */
  async getSettings(): Promise<AppSettings> {
    try {
      const saved = await Storage.get<AppSettings>(KEYS.SETTINGS);
      
      if (!saved || !isValidAppSettings(saved)) {
        console.log('[Storage] Using default settings');
        return { ...DEFAULT_SETTINGS };
      }

      // Merge with defaults to ensure all fields exist
      const merged = { ...DEFAULT_SETTINGS, ...saved };
      
      return merged;
    } catch (error) {
      console.error('[Storage] ✗ Failed to get settings:', error);
      return { ...DEFAULT_SETTINGS };
    }
  },

  /**
   * Saves complete settings object
   * @param settings - Settings to save
   */
  async saveSettings(settings: AppSettings): Promise<void> {
    if (!isValidAppSettings(settings)) {
      console.error('[Storage] Invalid settings object provided');
      return;
    }

    try {
      await Storage.set(KEYS.SETTINGS, settings);
      console.log('[Storage] ✓ Settings saved');
    } catch (error) {
      console.error('[Storage] ✗ Failed to save settings:', error);
      throw error;
    }
  },

  /**
   * Updates a single setting field
   * @param key - Setting key to update
   * @param value - New value for the setting
   */
  async updateSetting<K extends keyof AppSettings>(
    key: K,
    value: AppSettings[K]
  ): Promise<void> {
    if (!key || typeof key !== 'string') {
      console.warn('[Storage] Invalid setting key provided');
      return;
    }

    try {
      const settings = await storage.getSettings();
      settings[key] = value;
      await storage.saveSettings(settings);
      console.log(`[Storage] ✓ Updated setting: ${key}`);
    } catch (error) {
      console.error(`[Storage] ✗ Failed to update setting ${key}:`, error);
      throw error;
    }
  },

  // ────────────────────────────────────────────────────────────
  // Search History
  // ────────────────────────────────────────────────────────────

  /**
   * Saves a search query to history with deduplication
   * @param query - Search query to save
   */
  async saveSearchHistory(query: string): Promise<void> {
    const trimmed = query?.trim();
    
    if (!trimmed) {
      return;
    }

    try {
      const history = await storage.getSearchHistory();
      
      // Remove duplicates and add to front
      const filtered = history.filter(q => q.toLowerCase() !== trimmed.toLowerCase());
      const updated = [trimmed, ...filtered].slice(0, MAX_SEARCH_HISTORY);
      
      await Storage.set(KEYS.SEARCH_HISTORY, updated);
      console.log('[Storage] ✓ Search query saved');
    } catch (error) {
      console.error('[Storage] ✗ Failed to save search history:', error);
      // Non-critical error - don't throw
    }
  },

  /**
   * Retrieves search history
   * @returns Array of search queries
   */
  async getSearchHistory(): Promise<string[]> {
    try {
      const history = await Storage.get<string[]>(KEYS.SEARCH_HISTORY);
      
      if (!Array.isArray(history)) {
        return [];
      }

      // Filter out invalid entries
      const validHistory = history.filter(
        item => typeof item === 'string' && item.trim().length > 0
      );

      return validHistory;
    } catch (error) {
      console.error('[Storage] ✗ Failed to get search history:', error);
      return [];
    }
  },

  /**
   * Clears all search history
   */
  async clearSearchHistory(): Promise<void> {
    try {
      await Storage.remove(KEYS.SEARCH_HISTORY);
      console.log('[Storage] ✓ Search history cleared');
    } catch (error) {
      console.error('[Storage] ✗ Failed to clear search history:', error);
    }
  },

  // ────────────────────────────────────────────────────────────
  // Sync & Metadata
  // ────────────────────────────────────────────────────────────

  /**
   * Saves the current timestamp as last sync time
   */
  async saveLastSync(): Promise<void> {
    try {
      const timestamp = new Date().toISOString();
      await Storage.set(KEYS.LAST_SYNC, timestamp);
      console.log('[Storage] ✓ Last sync updated');
    } catch (error) {
      console.error('[Storage] ✗ Failed to save last sync:', error);
    }
  },

  /**
   * Retrieves the last sync timestamp
   * @returns ISO timestamp string or null
   */
  async getLastSync(): Promise<string | null> {
    try {
      const timestamp = await Storage.get<string>(KEYS.LAST_SYNC);
      
      // Validate it's a valid date string
      if (timestamp && !isNaN(Date.parse(timestamp))) {
        return timestamp;
      }
      
      return null;
    } catch (error) {
      console.error('[Storage] ✗ Failed to get last sync:', error);
      return null;
    }
  },

  // ────────────────────────────────────────────────────────────
  // Legacy Methods (kept for backward compatibility)
  // ────────────────────────────────────────────────────────────

  /**
   * @deprecated Use saveData instead
   */
  async saveCategories(data: any[]): Promise<void> {
    if (!Array.isArray(data)) {
      console.warn('[Storage] Invalid categories data - expected array');
      return;
    }
    await Storage.set(KEYS.CATEGORIES, data);
  },

  /**
   * @deprecated Use getData instead
   */
  async getCategories(): Promise<any[] | null> {
    return await Storage.get(KEYS.CATEGORIES);
  },

  /**
   * @deprecated Use saveData instead
   */
  async saveFacts(data: any[]): Promise<void> {
    if (!Array.isArray(data)) {
      console.warn('[Storage] Invalid facts data - expected array');
      return;
    }
    await Storage.set(KEYS.FACTS, data);
  },

  /**
   * @deprecated Use getData instead
   */
  async getFacts(): Promise<any[] | null> {
    return await Storage.get(KEYS.FACTS);
  },
} as const;

// ──────────────────────────────────────────────────────────────
// Export Types
// ──────────────────────────────────────────────────────────────
export type StorageKey = keyof typeof KEYS;
export { KEYS as STORAGE_KEYS };