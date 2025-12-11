
import AsyncStorage from '@react-native-async-storage/async-storage';

const VEIL_PROGRESS_KEY = '@veil_progress';

export interface VeilRank {
  id: string;
  name: string;
  minPoints: number;
  icon: string;
  color: string;
  auraColor: string;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  points: number;
  unlocked: boolean;
  unlockedAt?: number;
  category: 'reading' | 'exploration' | 'dedication' | 'mastery';
}

export interface VeilProgress {
  totalPoints: number;
  currentRank: string;
  achievements: Achievement[];
  articlesRead: string[];
  codexRead: string[];
  documentedRead: string[];
  hauntedRead: string[];
  categoriesCompleted: string[];
  dailyStreak: number;
  lastReadDate: string;
  readingHistory: ReadingEntry[];
}

export interface ReadingEntry {
  id: string;
  type: 'topic' | 'codex' | 'documented' | 'haunted';
  categoryId?: string;
  timestamp: number;
  points: number;
}

export const VEIL_RANKS: VeilRank[] = [
  { id: 'initiate', name: 'Initiate', minPoints: 0, icon: '🔮', color: '#6366F1', auraColor: 'rgba(99, 102, 241, 0.3)' },
  { id: 'apprentice', name: 'Apprentice', minPoints: 100, icon: '📿', color: '#8B5CF6', auraColor: 'rgba(139, 92, 246, 0.3)' },
  { id: 'acolyte', name: 'Acolyte', minPoints: 300, icon: '🕯️', color: '#A855F7', auraColor: 'rgba(168, 85, 247, 0.3)' },
  { id: 'adept', name: 'Adept', minPoints: 600, icon: '🌙', color: '#C084FC', auraColor: 'rgba(192, 132, 252, 0.3)' },
  { id: 'oracle', name: 'Oracle', minPoints: 1000, icon: '👁️', color: '#D946EF', auraColor: 'rgba(217, 70, 239, 0.3)' },
  { id: 'archivist', name: 'Archivist', minPoints: 1500, icon: '📜', color: '#E879F9', auraColor: 'rgba(232, 121, 249, 0.3)' },
  { id: 'hierophant', name: 'Hierophant', minPoints: 2200, icon: '⚡', color: '#F0ABFC', auraColor: 'rgba(240, 171, 252, 0.3)' },
  { id: 'elder', name: 'Elder', minPoints: 3000, icon: '👑', color: '#FFD700', auraColor: 'rgba(255, 215, 0, 0.3)' },
];

export const ACHIEVEMENTS: Achievement[] = [
  // Reading achievements
  { id: 'first_blood', name: 'First Blood', description: 'Read your first article', icon: '🩸', points: 10, unlocked: false, category: 'reading' },
  { id: 'ghost_whisperer', name: 'Ghost Whisperer', description: 'Read 5 ghost-related articles', icon: '👻', points: 25, unlocked: false, category: 'reading' },
  { id: 'cosmic_traveler', name: 'Cosmic Traveler', description: 'Read 5 UFO articles', icon: '🛸', points: 25, unlocked: false, category: 'reading' },
  { id: 'codex_keeper', name: 'Codex Keeper', description: 'Read 10 Codex entries', icon: '📚', points: 50, unlocked: false, category: 'reading' },
  { id: 'night_owl', name: 'Night Owl', description: 'Read between midnight and 3 AM', icon: '🦉', points: 15, unlocked: false, category: 'dedication' },
  { id: 'marathon', name: 'Marathon Reader', description: 'Read 10 articles in one day', icon: '🏃', points: 50, unlocked: false, category: 'dedication' },
  { id: 'polymath', name: 'Polymath', description: 'Read from all 10 categories', icon: '🎓', points: 100, unlocked: false, category: 'exploration' },
  { id: 'reality_glitch', name: 'Reality Glitch', description: 'Read 3 Truly Strange articles', icon: '🌀', points: 30, unlocked: false, category: 'reading' },
  { id: 'haunted_explorer', name: 'Haunted Explorer', description: 'Visit 10 haunted locations', icon: '🏚️', points: 75, unlocked: false, category: 'exploration' },
  { id: 'ancient_scholar', name: 'Ancient Scholar', description: 'Read all Ancients articles', icon: '🗿', points: 100, unlocked: false, category: 'mastery' },
  { id: 'creature_expert', name: 'Creature Expert', description: 'Read all Creatures articles', icon: '🐺', points: 100, unlocked: false, category: 'mastery' },
  { id: 'occult_master', name: 'Occult Master', description: 'Read all Occult articles', icon: '🔯', points: 100, unlocked: false, category: 'mastery' },
  { id: 'psychic_adept', name: 'Psychic Adept', description: 'Read all Psychic articles', icon: '🧠', points: 100, unlocked: false, category: 'mastery' },
  { id: 'folklore_sage', name: 'Folklore Sage', description: 'Read all Folklore articles', icon: '🎭', points: 100, unlocked: false, category: 'mastery' },
  { id: 'phenomena_witness', name: 'Phenomena Witness', description: 'Read all Phenomena articles', icon: '⚡', points: 100, unlocked: false, category: 'mastery' },
  { id: 'week_warrior', name: 'Week Warrior', description: 'Maintain a 7-day reading streak', icon: '🔥', points: 50, unlocked: false, category: 'dedication' },
  { id: 'month_master', name: 'Month Master', description: 'Maintain a 30-day reading streak', icon: '💎', points: 150, unlocked: false, category: 'dedication' },
  { id: 'documented_detective', name: 'Documented Detective', description: 'Read 10 Documented Accounts', icon: '🔍', points: 75, unlocked: false, category: 'reading' },
  { id: 'speed_reader', name: 'Speed Reader', description: 'Read 5 articles in under an hour', icon: '⚡', points: 40, unlocked: false, category: 'dedication' },
  { id: 'completionist', name: 'Completionist', description: 'Complete all categories', icon: '🏆', points: 500, unlocked: false, category: 'mastery' },
  { id: 'veil_piercer', name: 'Veil Piercer', description: 'Read 50 total articles', icon: '🌟', points: 200, unlocked: false, category: 'reading' },
  { id: 'knowledge_seeker', name: 'Knowledge Seeker', description: 'Read 100 total articles', icon: '✨', points: 300, unlocked: false, category: 'reading' },
  { id: 'enlightened_one', name: 'Enlightened One', description: 'Reach Elder rank', icon: '🌞', points: 500, unlocked: false, category: 'mastery' },
  { id: 'early_bird', name: 'Early Bird', description: 'Read between 5 AM and 7 AM', icon: '🌅', points: 15, unlocked: false, category: 'dedication' },
  { id: 'midnight_scholar', name: 'Midnight Scholar', description: 'Read at exactly midnight', icon: '🕛', points: 20, unlocked: false, category: 'dedication' },
  { id: 'location_hunter', name: 'Location Hunter', description: 'Read 25 haunted locations', icon: '🗺️', points: 150, unlocked: false, category: 'exploration' },
  { id: 'codex_master', name: 'Codex Master', description: 'Read all Codex entries', icon: '📖', points: 200, unlocked: false, category: 'mastery' },
  { id: 'account_analyst', name: 'Account Analyst', description: 'Read all Documented Accounts', icon: '📋', points: 200, unlocked: false, category: 'mastery' },
  { id: 'ghost_hunter', name: 'Ghost Hunter', description: 'Read all Ghost articles', icon: '👻', points: 100, unlocked: false, category: 'mastery' },
  { id: 'ufo_investigator', name: 'UFO Investigator', description: 'Read all UFO articles', icon: '🛸', points: 100, unlocked: false, category: 'mastery' },
  { id: 'people_person', name: 'People Person', description: 'Read all People articles', icon: '👤', points: 100, unlocked: false, category: 'mastery' },
  { id: 'strange_collector', name: 'Strange Collector', description: 'Read all Truly Strange articles', icon: '🌀', points: 100, unlocked: false, category: 'mastery' },
  { id: 'triple_threat', name: 'Triple Threat', description: 'Complete 3 categories in one day', icon: '🎯', points: 150, unlocked: false, category: 'dedication' },
  { id: 'weekend_warrior', name: 'Weekend Warrior', description: 'Read 20 articles on a weekend', icon: '🎉', points: 100, unlocked: false, category: 'dedication' },
  { id: 'favorite_collector', name: 'Favorite Collector', description: 'Add 25 favorites', icon: '⭐', points: 50, unlocked: false, category: 'exploration' },
];

export const gamificationService = {
  async getProgress(): Promise<VeilProgress> {
    try {
      const data = await AsyncStorage.getItem(VEIL_PROGRESS_KEY);
      if (data) {
        return JSON.parse(data);
      }
      return this.createDefaultProgress();
    } catch (error) {
      console.error('Error getting veil progress:', error);
      return this.createDefaultProgress();
    }
  },

  createDefaultProgress(): VeilProgress {
    return {
      totalPoints: 0,
      currentRank: 'initiate',
      achievements: ACHIEVEMENTS.map(a => ({ ...a })),
      articlesRead: [],
      codexRead: [],
      documentedRead: [],
      hauntedRead: [],
      categoriesCompleted: [],
      dailyStreak: 0,
      lastReadDate: '',
      readingHistory: [],
    };
  },

  async saveProgress(progress: VeilProgress): Promise<void> {
    try {
      await AsyncStorage.setItem(VEIL_PROGRESS_KEY, JSON.stringify(progress));
      console.log('Veil progress saved:', progress.totalPoints, 'points');
    } catch (error) {
      console.error('Error saving veil progress:', error);
    }
  },

  async addPoints(points: number, reason: string): Promise<{ newRank?: VeilRank; achievements: Achievement[] }> {
    const progress = await this.getProgress();
    const oldRank = this.getCurrentRank(progress.totalPoints);
    
    progress.totalPoints += points;
    const newRank = this.getCurrentRank(progress.totalPoints);
    progress.currentRank = newRank.id;

    await this.saveProgress(progress);
    console.log(`Added ${points} points for: ${reason}`);

    const rankChanged = oldRank.id !== newRank.id;
    const newAchievements = await this.checkAchievements(progress);

    return {
      newRank: rankChanged ? newRank : undefined,
      achievements: newAchievements,
    };
  },

  getCurrentRank(points: number): VeilRank {
    for (let i = VEIL_RANKS.length - 1; i >= 0; i--) {
      if (points >= VEIL_RANKS[i].minPoints) {
        return VEIL_RANKS[i];
      }
    }
    return VEIL_RANKS[0];
  },

  getNextRank(currentRank: VeilRank): VeilRank | null {
    const currentIndex = VEIL_RANKS.findIndex(r => r.id === currentRank.id);
    if (currentIndex < VEIL_RANKS.length - 1) {
      return VEIL_RANKS[currentIndex + 1];
    }
    return null;
  },

  async markArticleRead(articleId: string, type: 'topic' | 'codex' | 'documented' | 'haunted', categoryId?: string): Promise<{ newRank?: VeilRank; achievements: Achievement[] }> {
    const progress = await this.getProgress();
    
    let points = 10;
    let alreadyRead = false;

    if (type === 'topic') {
      if (progress.articlesRead.includes(articleId)) {
        alreadyRead = true;
      } else {
        progress.articlesRead.push(articleId);
        points = 10;
      }
    } else if (type === 'codex') {
      if (progress.codexRead.includes(articleId)) {
        alreadyRead = true;
      } else {
        progress.codexRead.push(articleId);
        points = 25;
      }
    } else if (type === 'documented') {
      if (progress.documentedRead.includes(articleId)) {
        alreadyRead = true;
      } else {
        progress.documentedRead.push(articleId);
        points = 25;
      }
    } else if (type === 'haunted') {
      if (progress.hauntedRead.includes(articleId)) {
        alreadyRead = true;
      } else {
        progress.hauntedRead.push(articleId);
        points = 50;
      }
    }

    if (alreadyRead) {
      return { achievements: [] };
    }

    // Update streak
    const today = new Date().toDateString();
    const lastRead = progress.lastReadDate ? new Date(progress.lastReadDate).toDateString() : '';
    
    if (lastRead === today) {
      // Same day, no streak change
    } else {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toDateString();
      
      if (lastRead === yesterdayStr) {
        progress.dailyStreak += 1;
        points += 5; // Bonus for streak
      } else {
        progress.dailyStreak = 1;
      }
    }
    
    progress.lastReadDate = new Date().toISOString();

    // Add to history
    progress.readingHistory.push({
      id: articleId,
      type,
      categoryId,
      timestamp: Date.now(),
      points,
    });

    await this.saveProgress(progress);
    return await this.addPoints(points, `Read ${type}: ${articleId}`);
  },

  async checkAchievements(progress: VeilProgress): Promise<Achievement[]> {
    const newlyUnlocked: Achievement[] = [];
    const now = Date.now();

    for (const achievement of progress.achievements) {
      if (achievement.unlocked) continue;

      let shouldUnlock = false;

      switch (achievement.id) {
        case 'first_blood':
          shouldUnlock = progress.articlesRead.length >= 1;
          break;
        case 'ghost_whisperer':
          shouldUnlock = progress.articlesRead.filter(id => id.includes('ghosts')).length >= 5;
          break;
        case 'cosmic_traveler':
          shouldUnlock = progress.articlesRead.filter(id => id.includes('ufos')).length >= 5;
          break;
        case 'codex_keeper':
          shouldUnlock = progress.codexRead.length >= 10;
          break;
        case 'night_owl':
          const hour = new Date().getHours();
          shouldUnlock = hour >= 0 && hour < 3;
          break;
        case 'marathon':
          const todayReads = progress.readingHistory.filter(entry => {
            const entryDate = new Date(entry.timestamp).toDateString();
            const today = new Date().toDateString();
            return entryDate === today;
          });
          shouldUnlock = todayReads.length >= 10;
          break;
        case 'polymath':
          const categories = new Set(progress.articlesRead.map(id => id.split('-')[0]));
          shouldUnlock = categories.size >= 10;
          break;
        case 'reality_glitch':
          shouldUnlock = progress.articlesRead.filter(id => id.includes('trulyStrange')).length >= 3;
          break;
        case 'haunted_explorer':
          shouldUnlock = progress.hauntedRead.length >= 10;
          break;
        case 'week_warrior':
          shouldUnlock = progress.dailyStreak >= 7;
          break;
        case 'month_master':
          shouldUnlock = progress.dailyStreak >= 30;
          break;
        case 'documented_detective':
          shouldUnlock = progress.documentedRead.length >= 10;
          break;
        case 'veil_piercer':
          shouldUnlock = progress.articlesRead.length >= 50;
          break;
        case 'knowledge_seeker':
          shouldUnlock = progress.articlesRead.length >= 100;
          break;
        case 'enlightened_one':
          shouldUnlock = progress.currentRank === 'elder';
          break;
        case 'early_bird':
          const morningHour = new Date().getHours();
          shouldUnlock = morningHour >= 5 && morningHour < 7;
          break;
        case 'midnight_scholar':
          const midnightHour = new Date().getHours();
          shouldUnlock = midnightHour === 0;
          break;
        case 'location_hunter':
          shouldUnlock = progress.hauntedRead.length >= 25;
          break;
      }

      if (shouldUnlock) {
        achievement.unlocked = true;
        achievement.unlockedAt = now;
        newlyUnlocked.push(achievement);
        progress.totalPoints += achievement.points;
      }
    }

    if (newlyUnlocked.length > 0) {
      await this.saveProgress(progress);
    }

    return newlyUnlocked;
  },

  async getAchievementsByCategory(category: string): Promise<Achievement[]> {
    const progress = await this.getProgress();
    return progress.achievements.filter(a => a.category === category);
  },

  async getUnlockedAchievements(): Promise<Achievement[]> {
    const progress = await this.getProgress();
    return progress.achievements.filter(a => a.unlocked);
  },

  async getLockedAchievements(): Promise<Achievement[]> {
    const progress = await this.getProgress();
    return progress.achievements.filter(a => !a.unlocked);
  },
};
