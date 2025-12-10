
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEYS = {
  CATEGORIES: '@paranormal_categories',
  FACTS: '@paranormal_facts',
  FAVORITES: '@paranormal_favorites',
  LAST_SYNC: '@paranormal_last_sync',
  ONBOARDING_COMPLETE: '@paranormal_onboarding_complete',
  SETTINGS: '@paranormal_settings',
};

export interface AppSettings {
  notificationsEnabled: boolean;
  soundsEnabled: boolean;
  hapticsEnabled: boolean;
  themeVariant: 'default' | 'dark' | 'cosmic';
}

const defaultSettings: AppSettings = {
  notificationsEnabled: true,
  soundsEnabled: true,
  hapticsEnabled: true,
  themeVariant: 'default',
};

export const storage = {
  async saveData<T>(key: string, data: T): Promise<void> {
    try {
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
      if (jsonValue !== null) {
        console.log(`Data retrieved from storage: ${key}`);
        return JSON.parse(jsonValue) as T;
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

  async saveCategories(categories: any[]): Promise<void> {
    await this.saveData(STORAGE_KEYS.CATEGORIES, categories);
  },

  async getCategories(): Promise<any[] | null> {
    return await this.getData(STORAGE_KEYS.CATEGORIES);
  },

  async saveFacts(facts: any[]): Promise<void> {
    await this.saveData(STORAGE_KEYS.FACTS, facts);
  },

  async getFacts(): Promise<any[] | null> {
    return await this.getData(STORAGE_KEYS.FACTS);
  },

  async saveFavorites(favorites: string[]): Promise<void> {
    await this.saveData(STORAGE_KEYS.FAVORITES, favorites);
  },

  async getFavorites(): Promise<string[] | null> {
    return await this.getData(STORAGE_KEYS.FAVORITES);
  },

  async addFavorite(id: string): Promise<void> {
    const favorites = (await this.getFavorites()) || [];
    if (!favorites.includes(id)) {
      favorites.push(id);
      await this.saveFavorites(favorites);
    }
  },

  async removeFavorite(id: string): Promise<void> {
    const favorites = (await this.getFavorites()) || [];
    const filtered = favorites.filter(fav => fav !== id);
    await this.saveFavorites(filtered);
  },

  async isFavorite(id: string): Promise<boolean> {
    const favorites = (await this.getFavorites()) || [];
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
    await this.saveData(STORAGE_KEYS.SETTINGS, settings);
  },

  async getSettings(): Promise<AppSettings> {
    const settings = await this.getData<AppSettings>(STORAGE_KEYS.SETTINGS);
    return settings || defaultSettings;
  },

  async updateSetting<K extends keyof AppSettings>(
    key: K,
    value: AppSettings[K]
  ): Promise<void> {
    const settings = await this.getSettings();
    settings[key] = value;
    await this.saveSettings(settings);
  },
};
