// utils/recentTopics.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { CategoryId } from '@/data/paranormal/types';

const RECENT_TOPICS_KEY = '@paranormal_recent_topics';
const MAX_RECENT_TOPICS = 10;

export interface RecentTopic {
  categoryId: CategoryId;
  topicId: string;
  title: string;
  categoryName: string;
  categoryIcon: string;
  categoryColor: string;
  timestamp: number;
  progress?: number;
}

/**
 * Service for managing recently viewed topics
 * Maintains a list of the last 10 topics viewed by the user
 */
export const recentTopicsService = {
  /**
   * Adds a topic to recent topics list
   * Removes duplicates and maintains max size
   * @param topic - Topic to add (timestamp is auto-generated)
   */
  async addRecentTopic(topic: Omit<RecentTopic, 'timestamp'>): Promise<void> {
    try {
      const existing = await this.getRecentTopics();
      
      // Remove duplicate if exists
      const filtered = existing.filter(
        t => !(t.categoryId === topic.categoryId && t.topicId === topic.topicId)
      );
      
      // Add new topic at the beginning
      const updated = [
        { ...topic, timestamp: Date.now() },
        ...filtered,
      ].slice(0, MAX_RECENT_TOPICS);
      
      await AsyncStorage.setItem(RECENT_TOPICS_KEY, JSON.stringify(updated));
      console.log('[RecentTopics] Added:', topic.title);
    } catch (error) {
      console.error('[RecentTopics] Error adding topic:', error);
    }
  },

  /**
   * Retrieves all recent topics
   * @returns Array of recent topics sorted by timestamp (newest first)
   */
  async getRecentTopics(): Promise<RecentTopic[]> {
    try {
      const data = await AsyncStorage.getItem(RECENT_TOPICS_KEY);
      if (data) {
        const topics = JSON.parse(data) as RecentTopic[];
        return topics.sort((a, b) => b.timestamp - a.timestamp);
      }
      return [];
    } catch (error) {
      console.error('[RecentTopics] Error getting topics:', error);
      return [];
    }
  },

  /**
   * Clears all recent topics
   */
  async clearRecentTopics(): Promise<void> {
    try {
      await AsyncStorage.removeItem(RECENT_TOPICS_KEY);
      console.log('[RecentTopics] Cleared all topics');
    } catch (error) {
      console.error('[RecentTopics] Error clearing topics:', error);
    }
  },

  /**
   * Updates progress for a specific topic
   * @param categoryId - Category ID of the topic
   * @param topicId - Topic ID
   * @param progress - Progress value (0-100)
   */
  async updateTopicProgress(categoryId: string, topicId: string, progress: number): Promise<void> {
    try {
      const topics = await this.getRecentTopics();
      const updated = topics.map(t => {
        if (t.categoryId === categoryId && t.topicId === topicId) {
          return { ...t, progress };
        }
        return t;
      });
      await AsyncStorage.setItem(RECENT_TOPICS_KEY, JSON.stringify(updated));
      console.log(`[RecentTopics] Updated progress for ${topicId}: ${progress}%`);
    } catch (error) {
      console.error('[RecentTopics] Error updating progress:', error);
    }
  },

  /**
   * Removes a specific topic from recent topics
   * @param categoryId - Category ID of the topic
   * @param topicId - Topic ID to remove
   */
  async removeRecentTopic(categoryId: string, topicId: string): Promise<void> {
    try {
      const topics = await this.getRecentTopics();
      const filtered = topics.filter(
        t => !(t.categoryId === categoryId && t.topicId === topicId)
      );
      await AsyncStorage.setItem(RECENT_TOPICS_KEY, JSON.stringify(filtered));
      console.log(`[RecentTopics] Removed ${topicId}`);
    } catch (error) {
      console.error('[RecentTopics] Error removing topic:', error);
    }
  },

  /**
   * Gets recent topics for a specific category
   * @param categoryId - Category to filter by
   * @returns Recent topics in the specified category
   */
  async getRecentTopicsByCategory(categoryId: CategoryId): Promise<RecentTopic[]> {
    try {
      const topics = await this.getRecentTopics();
      return topics.filter(t => t.categoryId === categoryId);
    } catch (error) {
      console.error('[RecentTopics] Error getting topics by category:', error);
      return [];
    }
  },

  /**
   * Checks if a topic is in recent topics
   * @param categoryId - Category ID
   * @param topicId - Topic ID
   * @returns True if topic is in recent list
   */
  async isRecentTopic(categoryId: string, topicId: string): Promise<boolean> {
    try {
      const topics = await this.getRecentTopics();
      return topics.some(t => t.categoryId === categoryId && t.topicId === topicId);
    } catch (error) {
      console.error('[RecentTopics] Error checking topic:', error);
      return false;
    }
  },

  /**
   * Gets the count of recent topics
   * @returns Number of topics in recent list
   */
  async getRecentTopicsCount(): Promise<number> {
    try {
      const topics = await this.getRecentTopics();
      return topics.length;
    } catch (error) {
      console.error('[RecentTopics] Error getting count:', error);
      return 0;
    }
  },

  /**
   * Gets the most recently viewed topic
   * @returns Most recent topic or null if none exist
   */
  async getMostRecentTopic(): Promise<RecentTopic | null> {
    try {
      const topics = await this.getRecentTopics();
      return topics.length > 0 ? topics[0] : null;
    } catch (error) {
      console.error('[RecentTopics] Error getting most recent:', error);
      return null;
    }
  },
};

/**
 * Export the max topics constant for external use
 */
export const MAX_RECENT_TOPICS_LIMIT = MAX_RECENT_TOPICS;