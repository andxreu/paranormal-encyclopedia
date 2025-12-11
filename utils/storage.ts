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

const defaultSettings: AppSettings = {
  notificationsEnabled: true,
  soundsEnabled: true,
  hapticsEnabled: true,
  themeVariant: 'default',
  ambientSoundEnabled: false,
  dailyNotificationsEnabled: false,
};

// ──────────────────────────────────────────────────────────────
// Core Generic Helpers (private)
// ──────────────────────────────────────────────────────────────
const Storage = {
  async set<T>(key: string, value: T): Promise<void> {
    try {
      if (value === null || value === undefined) {
        console.warn(`[Storage] Attempted to save null/undefined for key: ${key}`);
        return;
      }
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error(`[Storage] Failed to set ${key}:`, err);
    }
  },

  async get<T>(key: string): Promise<T | null> {
    try {
      const raw = await AsyncStorage.getItem(key);
      if (!raw) return null;
      return JSON.parse(raw) as T;
    } catch (err) {
      console.error(`[Storage] Failed to get/parse ${key}:`, err);
      return null;
    }
  },

  async remove(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
    } catch (err) {
      console.error(`[Storage] Failed to remove ${key}:`, err);
    }
  },
};

// ──────────────────────────────────────────────────────────────
// Public API – Clean, typed, and bulletproof
// ──────────────────────────────────────────────────────────────
export const storage = {
  // Generic
  saveData: Storage.set,
  getData: Storage.get,
  removeData: Storage.remove,

  // App-wide
  async clearAll(): Promise<void> {
    try {
      await AsyncStorage.clear();
      console.log('[Storage] All data cleared');
    } catch (err) {
      console.error('[Storage] Failed to clear all data:', err);
    }
  },

  async getCacheSize(): Promise<number> {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const values = await AsyncStorage.multiGet(keys);
      return values.reduce((sum, [_key, value]) => sum + (value?.length ?? 0), 0);
    } catch (err) {
      console.error('[Storage] Failed to calculate cache size:', err);
      return 0;
    }
  },

  // Favorites
  async getFavorites(): Promise<FavoriteItem[]> {
    const favs = await Storage.get<FavoriteItem[]>(KEYS.FAVORITES);
    return Array.isArray(favs) ? favs : [];
  },

  async saveFavorites(favorites: FavoriteItem[]): Promise<void> {
    await Storage.set(KEYS.FAVORITES, favorites);
  },

  async addFavorite(item: FavoriteItem): Promise<void> {
    if (!item?.id) return console.warn('[Storage] Cannot add favorite without id');
    const favorites = await storage.getFavorites();
    if (favorites.some(f => f.id === item.id)) return; // Already exists
    favorites.unshift({ ...item, timestamp: Date.now() });
    await storage.saveFavorites(favorites);
  },

  async removeFavorite(id: string): Promise<void> {
    if (!id) return;
    const favorites = await storage.getFavorites();
    await storage.saveFavorites(favorites.filter(f => f.id !== id));
  },

  async isFavorite(id: string): Promise<boolean> {
    if (!id) return false;
    const favorites = await storage.getFavorites();
    return favorites.some(f => f.id === id);
  },

  // Onboarding
  async setOnboardingComplete(complete: boolean): Promise<void> {
    await Storage.set(KEYS.ONBOARDING_COMPLETE, complete);
  },

  async isOnboardingComplete(): Promise<boolean> {
    const value = await Storage.get<boolean>(KEYS.ONBOARDING_COMPLETE);
    return value === true;
  },

  // Settings
  async getSettings(): Promise<AppSettings> {
    const saved = await Storage.get<AppSettings>(KEYS.SETTINGS);
    if (!saved || typeof saved !== 'object') return { ...defaultSettings };
    return { ...defaultSettings, ...saved };
  },

  async saveSettings(settings: AppSettings): Promise<void> {
    await Storage.set(KEYS.SETTINGS, settings);
  },

  async updateSetting<K extends keyof AppSettings>(key: K, value: AppSettings[K]): Promise<void> {
    const settings = await storage.getSettings();
    settings[key] = value;
    await storage.saveSettings(settings);
  },

  // Search History
  async saveSearchHistory(query: string): Promise<void> {
    if (!query?.trim()) return;
    const history = await storage.getSearchHistory();
    const filtered = history.filter(q => q !== query);
    const updated = [query, ...filtered].slice(0, 20);
    await Storage.set(KEYS.SEARCH_HISTORY, updated);
  },

  async getSearchHistory(): Promise<string[]> {
    const history = await Storage.get<string[]>(KEYS.SEARCH_HISTORY);
    return Array.isArray(history) ? history : [];
  },

  async clearSearchHistory(): Promise<void> {
    await Storage.remove(KEYS.SEARCH_HISTORY);
  },

  // Misc (used by other systems)
  async saveLastSync(): Promise<void> {
    await Storage.set(KEYS.LAST_SYNC, new Date().toISOString());
  },

  async getLastSync(): Promise<string | null> {
    return await Storage.get<string>(KEYS.LAST_SYNC);
  },

  // Legacy helpers (kept for backward compatibility – can be removed later)
  async saveCategories(data: any[]): Promise<void> { await Storage.set(KEYS.CATEGORIES, data); },
  async getCategories(): Promise<any[] | null> { return await Storage.get(KEYS.CATEGORIES); },
  async saveFacts(data: any[]): Promise<void> { await Storage.set(KEYS.FACTS, data); },
  async getFacts(): Promise<any[] | null> { return await Storage.get(KEYS.FACTS); },
} as const;