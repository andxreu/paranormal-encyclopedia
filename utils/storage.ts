
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEYS = {
  CATEGORIES: '@paranormal_categories',
  FACTS: '@paranormal_facts',
  FAVORITES: '@paranormal_favorites',
  LAST_SYNC: '@paranormal_last_sync',
};

export const storage = {
  // Save data to storage
  async saveData<T>(key: string, data: T): Promise<void> {
    try {
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem(key, jsonValue);
      console.log(`Data saved to storage: ${key}`);
    } catch (error) {
      console.error(`Error saving data to storage: ${key}`, error);
    }
  },

  // Get data from storage
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

  // Remove data from storage
  async removeData(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
      console.log(`Data removed from storage: ${key}`);
    } catch (error) {
      console.error(`Error removing data from storage: ${key}`, error);
    }
  },

  // Clear all storage
  async clearAll(): Promise<void> {
    try {
      await AsyncStorage.clear();
      console.log('All storage cleared');
    } catch (error) {
      console.error('Error clearing storage', error);
    }
  },

  // Save categories
  async saveCategories(categories: any[]): Promise<void> {
    await this.saveData(STORAGE_KEYS.CATEGORIES, categories);
  },

  // Get categories
  async getCategories(): Promise<any[] | null> {
    return await this.getData(STORAGE_KEYS.CATEGORIES);
  },

  // Save facts
  async saveFacts(facts: any[]): Promise<void> {
    await this.saveData(STORAGE_KEYS.FACTS, facts);
  },

  // Get facts
  async getFacts(): Promise<any[] | null> {
    return await this.getData(STORAGE_KEYS.FACTS);
  },

  // Save favorites
  async saveFavorites(favorites: string[]): Promise<void> {
    await this.saveData(STORAGE_KEYS.FAVORITES, favorites);
  },

  // Get favorites
  async getFavorites(): Promise<string[] | null> {
    return await this.getData(STORAGE_KEYS.FAVORITES);
  },

  // Add to favorites
  async addFavorite(id: string): Promise<void> {
    const favorites = (await this.getFavorites()) || [];
    if (!favorites.includes(id)) {
      favorites.push(id);
      await this.saveFavorites(favorites);
    }
  },

  // Remove from favorites
  async removeFavorite(id: string): Promise<void> {
    const favorites = (await this.getFavorites()) || [];
    const filtered = favorites.filter(fav => fav !== id);
    await this.saveFavorites(filtered);
  },

  // Check if favorite
  async isFavorite(id: string): Promise<boolean> {
    const favorites = (await this.getFavorites()) || [];
    return favorites.includes(id);
  },

  // Save last sync time
  async saveLastSync(): Promise<void> {
    await this.saveData(STORAGE_KEYS.LAST_SYNC, new Date().toISOString());
  },

  // Get last sync time
  async getLastSync(): Promise<string | null> {
    return await this.getData(STORAGE_KEYS.LAST_SYNC);
  },
};
