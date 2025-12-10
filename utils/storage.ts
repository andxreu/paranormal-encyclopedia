
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEYS = {
  CATEGORIES: '@paranormal_categories',
  FACTS: '@paranormal_facts',
  FAVORITES: '@paranormal_favorites',
  LAST_SYNC: '@paranormal_last_sync',
  ONBOARDING_COMPLETE: '@paranormal_onboarding_complete',
  SETTINGS: '@paranormal_settings',
  SEARCH_HISTORY: '@paranormal_search_history',
  THEME_PREFERENCE: '@theme_preference',
  TEXT_SCALE: '@text_scale',
};

export interface AppSettings {
  notificationsEnabled: boolean;
  soundsEnabled: boolean;
  hapticsEnabled: boolean;
  themeVariant: 'default' | 'dark' | 'cosmic';
  ambientSoundEnabled: boolean;
  dailyNotificationsEnabled: boolean;
}

const defaultSettings: AppSettings = {
  notificationsEnabled: true,
  soundsEnabled: true,
  hapticsEnabled: true,
  themeVariant: 'default',
  ambientSoundEnabled: false,
  dailyNotificationsEnabled: false,
};

export const storage = {
  async saveData<T>(key: string, data: T): Promise<void> {
    try {
      if (data === null || data === undefined) {
        console.warn(`Attempted to save null/undefined data for key: ${key}`);
        return;
      }
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem(key, jsonValue);
      console.log(`Data saved to storage: ${key}`);
    } catch (error) {
      console.error(`Error saving data to storage: ${key}`, error);
    }
  },

  async getData<T>(key: string): Promise<T | null> {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      if (jsonValue !== null && jsonValue !== undefined) {
        try {
          const parsed = JSON.parse(jsonValue) as T;
          console.log(`Data retrieved from storage: ${key}`);
          return parsed;
        } catch (parseError) {
          console.error(`Error parsing data from storage: ${key}`, parseError);
          return null;
        }
      }
      return null;
    } catch (error) {
      console.error(`Error getting data from storage: ${key}`, error);
      return null;
    }
  },

  async removeData(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
      console.log(`Data removed from storage: ${key}`);
    } catch (error) {
      console.error(`Error removing data from storage: ${key}`, error);
    }
  },

  async clearAll(): Promise<void> {
    try {
      await AsyncStorage.clear();
      console.log('All storage cleared');
    } catch (error) {
      console.error('Error clearing storage', error);
    }
  },

  async getCacheSize(): Promise<number> {
    try {
      const keys = await AsyncStorage.getAllKeys();
      let totalSize = 0;
      
      for (const key of keys) {
        const value = await AsyncStorage.getItem(key);
        if (value) {
          totalSize += value.length;
        }
      }
      
      return totalSize;
    } catch (error) {
      console.error('Error calculating cache size:', error);
      return 0;
    }
  },

  async saveCategories(categories: any[]): Promise<void> {
    if (!categories || !Array.isArray(categories)) {
      console.warn('Invalid categories data, skipping save');
      return;
    }
    await this.saveData(STORAGE_KEYS.CATEGORIES, categories);
  },

  async getCategories(): Promise<any[] | null> {
    const categories = await this.getData<any[]>(STORAGE_KEYS.CATEGORIES);
    return Array.isArray(categories) ? categories : null;
  },

  async saveFacts(facts: any[]): Promise<void> {
    if (!facts || !Array.isArray(facts)) {
      console.warn('Invalid facts data, skipping save');
      return;
    }
    await this.saveData(STORAGE_KEYS.FACTS, facts);
  },

  async getFacts(): Promise<any[] | null> {
    const facts = await this.getData<any[]>(STORAGE_KEYS.FACTS);
    return Array.isArray(facts) ? facts : null;
  },

  async saveFavorites(favorites: string[]): Promise<void> {
    if (!favorites || !Array.isArray(favorites)) {
      console.warn('Invalid favorites data, skipping save');
      return;
    }
    await this.saveData(STORAGE_KEYS.FAVORITES, favorites);
  },

  async getFavorites(): Promise<string[]> {
    const favorites = await this.getData<string[]>(STORAGE_KEYS.FAVORITES);
    return Array.isArray(favorites) ? favorites : [];
  },

  async addFavorite(id: string): Promise<void> {
    if (!id) {
      console.warn('Invalid favorite id');
      return;
    }
    const favorites = await this.getFavorites();
    if (!favorites.includes(id)) {
      favorites.push(id);
      await this.saveFavorites(favorites);
    }
  },

  async removeFavorite(id: string): Promise<void> {
    if (!id) {
      console.warn('Invalid favorite id');
      return;
    }
    const favorites = await this.getFavorites();
    const filtered = favorites.filter(fav => fav !== id);
    await this.saveFavorites(filtered);
  },

  async isFavorite(id: string): Promise<boolean> {
    if (!id) {
      return false;
    }
    const favorites = await this.getFavorites();
    return favorites.includes(id);
  },

  async saveLastSync(): Promise<void> {
    await this.saveData(STORAGE_KEYS.LAST_SYNC, new Date().toISOString());
  },

  async getLastSync(): Promise<string | null> {
    return await this.getData(STORAGE_KEYS.LAST_SYNC);
  },

  async setOnboardingComplete(complete: boolean): Promise<void> {
    await this.saveData(STORAGE_KEYS.ONBOARDING_COMPLETE, complete);
  },

  async isOnboardingComplete(): Promise<boolean> {
    const complete = await this.getData<boolean>(STORAGE_KEYS.ONBOARDING_COMPLETE);
    return complete === true;
  },

  async saveSettings(settings: AppSettings): Promise<void> {
    if (!settings || typeof settings !== 'object') {
      console.warn('Invalid settings data, skipping save');
      return;
    }
    await this.saveData(STORAGE_KEYS.SETTINGS, settings);
  },

  async getSettings(): Promise<AppSettings> {
    const settings = await this.getData<AppSettings>(STORAGE_KEYS.SETTINGS);
    if (!settings || typeof settings !== 'object') {
      return defaultSettings;
    }
    return { ...defaultSettings, ...settings };
  },

  async updateSetting<K extends keyof AppSettings>(
    key: K,
    value: AppSettings[K]
  ): Promise<void> {
    if (!key || value === undefined) {
      console.warn('Invalid setting key or value');
      return;
    }
    const settings = await this.getSettings();
    settings[key] = value;
    await this.saveSettings(settings);
  },

  async saveSearchHistory(query: string): Promise<void> {
    try {
      if (!query || typeof query !== 'string') {
        console.warn('Invalid search query');
        return;
      }
      const history = await this.getSearchHistory();
      const updatedHistory = [query, ...history.filter(q => q !== query)].slice(0, 20);
      await this.saveData(STORAGE_KEYS.SEARCH_HISTORY, updatedHistory);
    } catch (error) {
      console.error('Error saving search history:', error);
    }
  },

  async getSearchHistory(): Promise<string[]> {
    const history = await this.getData<string[]>(STORAGE_KEYS.SEARCH_HISTORY);
    return Array.isArray(history) ? history : [];
  },

  async clearSearchHistory(): Promise<void> {
    await this.removeData(STORAGE_KEYS.SEARCH_HISTORY);
  },
};
