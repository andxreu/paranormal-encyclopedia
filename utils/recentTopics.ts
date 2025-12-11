
import AsyncStorage from '@react-native-async-storage/async-storage';

const RECENT_TOPICS_KEY = '@paranormal_recent_topics';
const MAX_RECENT_TOPICS = 10;

export interface RecentTopic {
  categoryId: string;
  topicId: string;
  title: string;
  categoryName: string;
  categoryIcon: string;
  categoryColor: string;
  timestamp: number;
  progress?: number;
}

export const recentTopicsService = {
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
      console.log('Recent topic added:', topic.title);
    } catch (error) {
      console.error('Error adding recent topic:', error);
    }
  },

  async getRecentTopics(): Promise<RecentTopic[]> {
    try {
      const data = await AsyncStorage.getItem(RECENT_TOPICS_KEY);
      if (data) {
        const topics = JSON.parse(data) as RecentTopic[];
        return topics.sort((a, b) => b.timestamp - a.timestamp);
      }
      return [];
    } catch (error) {
      console.error('Error getting recent topics:', error);
      return [];
    }
  },

  async clearRecentTopics(): Promise<void> {
    try {
      await AsyncStorage.removeItem(RECENT_TOPICS_KEY);
      console.log('Recent topics cleared');
    } catch (error) {
      console.error('Error clearing recent topics:', error);
    }
  },

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
    } catch (error) {
      console.error('Error updating topic progress:', error);
    }
  },
};
