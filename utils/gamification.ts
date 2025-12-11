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

export type ContentType = 'topic' | 'codex' | 'documented' | 'haunted';
export type AchievementCategory = 'reading' | 'exploration' | 'dedication' | 'mastery';

/**
 * Veil ranks in ascending order of prestige
 * Each rank requires progressively more points to achieve
 */
export const VEIL_RANKS: readonly VeilRank[] = [
  { id: 'initiate', name: 'Initiate', minPoints: 0, icon: '🔮', color: '#6366F1', auraColor: 'rgba(99, 102, 241, 0.3)' },
  { id: 'apprentice', name: 'Apprentice', minPoints: 100, icon: '📿', color: '#8B5CF6', auraColor: 'rgba(139, 92, 246, 0.3)' },
  { id: 'acolyte', name: 'Acolyte', minPoints: 300, icon: '🕯️', color: '#A855F7', auraColor: 'rgba(168, 85, 247, 0.3)' },
  { id: 'adept', name: 'Adept', minPoints: 600, icon: '🌙', color: '#C084FC', auraColor: 'rgba(192, 132, 252, 0.3)' },
  { id: 'oracle', name: 'Oracle', minPoints: 1000, icon: '👁️', color: '#D946EF', auraColor: 'rgba(217, 70, 239, 0.3)' },
  { id: 'archivist', name: 'Archivist', minPoints: 1500, icon: '📜', color: '#E879F9', auraColor: 'rgba(232, 121, 249, 0.3)' },
  { id: 'hierophant', name: 'Hierophant', minPoints: 2200, icon: '⚡', color: '#F0ABFC', auraColor: 'rgba(240, 171, 252, 0.3)' },
  { id: 'elder', name: 'Elder', minPoints: 3000, icon: '👑', color: '#FFD700', auraColor: 'rgba(255, 215, 0, 0.3)' },
];

/**
 * All available achievements in the Order of the Veil system
 * Total: 35 achievements across 4 categories
 */
export const ACHIEVEMENTS: readonly Achievement[] = [
  // Reading achievements (12)
  { id: 'first_blood', name: 'First Blood', description: 'Read your first article', icon: '🩸', points: 10, unlocked: false, category: 'reading' },
  { id: 'ghost_whisperer', name: 'Ghost Whisperer', description: 'Read 5 ghost-related articles', icon: '👻', points: 25, unlocked: false, category: 'reading' },
  { id: 'cosmic_traveler', name: 'Cosmic Traveler', description: 'Read 5 UFO articles', icon: '🛸', points: 25, unlocked: false, category: 'reading' },
  { id: 'codex_keeper', name: 'Codex Keeper', description: 'Read 10 Codex entries', icon: '📚', points: 50, unlocked: false, category: 'reading' },
  { id: 'reality_glitch', name: 'Reality Glitch', description: 'Read 3 Truly Strange articles', icon: '🌀', points: 30, unlocked: false, category: 'reading' },
  { id: 'documented_detective', name: 'Documented Detective', description: 'Read 10 Documented Accounts', icon: '🔍', points: 75, unlocked: false, category: 'reading' },
  { id: 'veil_piercer', name: 'Veil Piercer', description: 'Read 50 total articles', icon: '🌟', points: 200, unlocked: false, category: 'reading' },
  { id: 'knowledge_seeker', name: 'Knowledge Seeker', description: 'Read 100 total articles', icon: '✨', points: 300, unlocked: false, category: 'reading' },
  
  // Exploration achievements (5)
  { id: 'polymath', name: 'Polymath', description: 'Read from all 10 categories', icon: '🎓', points: 100, unlocked: false, category: 'exploration' },
  { id: 'haunted_explorer', name: 'Haunted Explorer', description: 'Visit 10 haunted locations', icon: '🏚️', points: 75, unlocked: false, category: 'exploration' },
  { id: 'location_hunter', name: 'Location Hunter', description: 'Read 25 haunted locations', icon: '🗺️', points: 150, unlocked: false, category: 'exploration' },
  { id: 'favorite_collector', name: 'Favorite Collector', description: 'Add 25 favorites', icon: '⭐', points: 50, unlocked: false, category: 'exploration' },
  
  // Dedication achievements (11)
  { id: 'night_owl', name: 'Night Owl', description: 'Read between midnight and 3 AM', icon: '🦉', points: 15, unlocked: false, category: 'dedication' },
  { id: 'marathon', name: 'Marathon Reader', description: 'Read 10 articles in one day', icon: '🏃', points: 50, unlocked: false, category: 'dedication' },
  { id: 'week_warrior', name: 'Week Warrior', description: 'Maintain a 7-day reading streak', icon: '🔥', points: 50, unlocked: false, category: 'dedication' },
  { id: 'month_master', name: 'Month Master', description: 'Maintain a 30-day reading streak', icon: '💎', points: 150, unlocked: false, category: 'dedication' },
  { id: 'speed_reader', name: 'Speed Reader', description: 'Read 5 articles in under an hour', icon: '⚡', points: 40, unlocked: false, category: 'dedication' },
  { id: 'early_bird', name: 'Early Bird', description: 'Read between 5 AM and 7 AM', icon: '🌅', points: 15, unlocked: false, category: 'dedication' },
  { id: 'midnight_scholar', name: 'Midnight Scholar', description: 'Read at exactly midnight', icon: '🕛', points: 20, unlocked: false, category: 'dedication' },
  { id: 'triple_threat', name: 'Triple Threat', description: 'Complete 3 categories in one day', icon: '🎯', points: 150, unlocked: false, category: 'dedication' },
  { id: 'weekend_warrior', name: 'Weekend Warrior', description: 'Read 20 articles on a weekend', icon: '🎉', points: 100, unlocked: false, category: 'dedication' },
  
  // Mastery achievements (13)
  { id: 'ancient_scholar', name: 'Ancient Scholar', description: 'Read all Ancients articles', icon: '🗿', points: 100, unlocked: false, category: 'mastery' },
  { id: 'creature_expert', name: 'Creature Expert', description: 'Read all Creatures articles', icon: '🐺', points: 100, unlocked: false, category: 'mastery' },
  { id: 'occult_master', name: 'Occult Master', description: 'Read all Occult articles', icon: '🔯', points: 100, unlocked: false, category: 'mastery' },
  { id: 'psychic_adept', name: 'Psychic Adept', description: 'Read all Psychic articles', icon: '🧠', points: 100, unlocked: false, category: 'mastery' },
  { id: 'folklore_sage', name: 'Folklore Sage', description: 'Read all Folklore articles', icon: '🎭', points: 100, unlocked: false, category: 'mastery' },
  { id: 'phenomena_witness', name: 'Phenomena Witness', description: 'Read all Phenomena articles', icon: '⚡', points: 100, unlocked: false, category: 'mastery' },
  { id: 'ghost_hunter', name: 'Ghost Hunter', description: 'Read all Ghost articles', icon: '👻', points: 100, unlocked: false, category: 'mastery' },
  { id: 'ufo_investigator', name: 'UFO Investigator', description: 'Read all UFO articles', icon: '🛸', points: 100, unlocked: false, category: 'mastery' },
  { id: 'people_person', name: 'People Person', description: 'Read all People articles', icon: '👤', points: 100, unlocked: false, category: 'mastery' },
  { id: 'strange_collector', name: 'Strange Collector', description: 'Read all Truly Strange articles', icon: '🌀', points: 100, unlocked: false, category: 'mastery' },
  { id: 'codex_master', name: 'Codex Master', description: 'Read all Codex entries', icon: '📖', points: 200, unlocked: false, category: 'mastery' },
  { id: 'account_analyst', name: 'Account Analyst', description: 'Read all Documented Accounts', icon: '📋', points: 200, unlocked: false, category: 'mastery' },
  { id: 'completionist', name: 'Completionist', description: 'Complete all categories', icon: '🏆', points: 500, unlocked: false, category: 'mastery' },
  { id: 'enlightened_one', name: 'Enlightened One', description: 'Reach Elder rank', icon: '🌞', points: 500, unlocked: false, category: 'mastery' },
];

/**
 * Points awarded for reading different content types
 */
const CONTENT_POINTS: Record<ContentType, number> = {
  topic: 10,
  codex: 25,
  documented: 25,
  haunted: 50,
};

/**
 * Bonus points for maintaining reading streaks
 */
const STREAK_BONUS = 5;

export const gamificationService = {
  /**
   * Gets the current user's progress in the Order of the Veil
   * @returns User's veil progress or default progress if none exists
   */
  async getProgress(): Promise<VeilProgress> {
    try {
      const data = await AsyncStorage.getItem(VEIL_PROGRESS_KEY);
      if (data) {
        const progress = JSON.parse(data) as VeilProgress;
        // Validate and merge with current achievements in case new ones were added
        return this.migrateProgress(progress);
      }
      return this.createDefaultProgress();
    } catch (error) {
      console.error('Error getting veil progress:', error);
      return this.createDefaultProgress();
    }
  },

  /**
   * Creates a fresh progress object with default values
   * @returns New VeilProgress with initial state
   */
  createDefaultProgress(): VeilProgress {
    return {
      totalPoints: 0,
      currentRank: 'initiate',
      achievements: ACHIEVEMENTS.map(a => ({ ...a, unlocked: false })),
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

  /**
   * Migrates old progress data to include any new achievements
   * @param oldProgress - Existing progress data
   * @returns Migrated progress with new achievements added
   */
  migrateProgress(oldProgress: VeilProgress): VeilProgress {
    const existingAchievementIds = new Set(oldProgress.achievements.map(a => a.id));
    const newAchievements = ACHIEVEMENTS.filter(a => !existingAchievementIds.has(a.id))
      .map(a => ({ ...a, unlocked: false }));
    
    return {
      ...oldProgress,
      achievements: [...oldProgress.achievements, ...newAchievements],
    };
  },

  /**
   * Saves user's progress to storage
   * @param progress - Progress data to save
   */
  async saveProgress(progress: VeilProgress): Promise<void> {
    try {
      if (!progress || typeof progress !== 'object') {
        throw new Error('Invalid progress object');
      }
      await AsyncStorage.setItem(VEIL_PROGRESS_KEY, JSON.stringify(progress));
      console.log('Veil progress saved:', progress.totalPoints, 'points');
    } catch (error) {
      console.error('Error saving veil progress:', error);
      throw error;
    }
  },

  /**
   * Adds points to user's total and checks for rank progression
   * @param points - Number of points to add
   * @param reason - Description of why points were awarded
   * @returns Object containing new rank (if changed) and newly unlocked achievements
   */
  async addPoints(points: number, reason: string): Promise<{ newRank?: VeilRank; achievements: Achievement[] }> {
    if (typeof points !== 'number' || points < 0) {
      console.warn('addPoints: Invalid points value');
      return { achievements: [] };
    }

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

  /**
   * Determines the user's current rank based on total points
   * @param points - Total points earned
   * @returns VeilRank corresponding to the point total
   */
  getCurrentRank(points: number): VeilRank {
    if (typeof points !== 'number' || points < 0) {
      return VEIL_RANKS[0];
    }

    for (let i = VEIL_RANKS.length - 1; i >= 0; i--) {
      if (points >= VEIL_RANKS[i].minPoints) {
        return VEIL_RANKS[i];
      }
    }
    return VEIL_RANKS[0];
  },

  /**
   * Gets the next rank above the current one
   * @param currentRank - User's current rank
   * @returns Next rank or null if already at max rank
   */
  getNextRank(currentRank: VeilRank): VeilRank | null {
    if (!currentRank || !currentRank.id) {
      return null;
    }

    const currentIndex = VEIL_RANKS.findIndex(r => r.id === currentRank.id);
    if (currentIndex >= 0 && currentIndex < VEIL_RANKS.length - 1) {
      return VEIL_RANKS[currentIndex + 1];
    }
    return null;
  },

  /**
   * Calculates progress percentage to next rank
   * @param currentPoints - User's current point total
   * @returns Percentage (0-100) of progress to next rank
   */
  getProgressToNextRank(currentPoints: number): number {
    const currentRank = this.getCurrentRank(currentPoints);
    const nextRank = this.getNextRank(currentRank);
    
    if (!nextRank) {
      return 100; // Max rank achieved
    }

    const pointsInCurrentRank = currentPoints - currentRank.minPoints;
    const pointsNeededForNext = nextRank.minPoints - currentRank.minPoints;
    
    return Math.min(100, (pointsInCurrentRank / pointsNeededForNext) * 100);
  },

  /**
   * Marks an article as read and awards points
   * @param articleId - Unique identifier for the article
   * @param type - Type of content being read
   * @param categoryId - Optional category identifier
   * @returns Object containing new rank and achievements
   */
  async markArticleRead(
    articleId: string, 
    type: ContentType, 
    categoryId?: string
  ): Promise<{ newRank?: VeilRank; achievements: Achievement[] }> {
    if (!articleId || typeof articleId !== 'string') {
      console.warn('markArticleRead: Invalid articleId');
      return { achievements: [] };
    }

    if (!type || !CONTENT_POINTS[type]) {
      console.warn('markArticleRead: Invalid content type');
      return { achievements: [] };
    }

    const progress = await this.getProgress();
    
    // Check if already read
    const readArray = this.getReadArrayForType(progress, type);
    if (readArray.includes(articleId)) {
      console.log(`Article ${articleId} already read`);
      return { achievements: [] };
    }

    // Add to appropriate read array
    readArray.push(articleId);
    
    // Calculate points
    let points = CONTENT_POINTS[type];
    
    // Update streak and add bonus
    const streakBonus = await this.updateStreak(progress);
    points += streakBonus;

    // Add to reading history
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

  /**
   * Gets the appropriate read array for a content type
   * @param progress - User's current progress
   * @param type - Content type
   * @returns Reference to the appropriate read array
   */
  getReadArrayForType(progress: VeilProgress, type: ContentType): string[] {
    switch (type) {
      case 'topic':
        return progress.articlesRead;
      case 'codex':
        return progress.codexRead;
      case 'documented':
        return progress.documentedRead;
      case 'haunted':
        return progress.hauntedRead;
      default:
        return progress.articlesRead;
    }
  },

  /**
   * Updates the user's reading streak
   * @param progress - User's current progress
   * @returns Bonus points for maintaining streak
   */
  async updateStreak(progress: VeilProgress): Promise<number> {
    const today = new Date().toDateString();
    const lastRead = progress.lastReadDate ? new Date(progress.lastReadDate).toDateString() : '';
    
    if (lastRead === today) {
      // Same day, no streak change
      return 0;
    }
    
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toDateString();
    
    if (lastRead === yesterdayStr) {
      // Consecutive day - increment streak
      progress.dailyStreak += 1;
      progress.lastReadDate = new Date().toISOString();
      return STREAK_BONUS;
    } else {
      // Streak broken - reset to 1
      progress.dailyStreak = 1;
      progress.lastReadDate = new Date().toISOString();
      return 0;
    }
  },

  /**
   * Checks all achievements and unlocks any that meet their conditions
   * @param progress - User's current progress
   * @returns Array of newly unlocked achievements
   */
  async checkAchievements(progress: VeilProgress): Promise<Achievement[]> {
    const newlyUnlocked: Achievement[] = [];
    const now = Date.now();
    const currentHour = new Date().getHours();
    const today = new Date().toDateString();

    for (const achievement of progress.achievements) {
      if (achievement.unlocked) continue;

      let shouldUnlock = false;

      switch (achievement.id) {
        // Reading achievements
        case 'first_blood':
          shouldUnlock = progress.articlesRead.length >= 1;
          break;
        case 'ghost_whisperer':
          shouldUnlock = progress.articlesRead.filter(id => id.startsWith('gh-')).length >= 5;
          break;
        case 'cosmic_traveler':
          shouldUnlock = progress.articlesRead.filter(id => id.startsWith('uf-')).length >= 5;
          break;
        case 'codex_keeper':
          shouldUnlock = progress.codexRead.length >= 10;
          break;
        case 'reality_glitch':
          shouldUnlock = progress.articlesRead.filter(id => id.startsWith('ts-')).length >= 3;
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

        // Exploration achievements
        case 'polymath':
          const uniquePrefixes = new Set(progress.articlesRead.map(id => id.split('-')[0]));
          shouldUnlock = uniquePrefixes.size >= 10;
          break;
        case 'haunted_explorer':
          shouldUnlock = progress.hauntedRead.length >= 10;
          break;
        case 'location_hunter':
          shouldUnlock = progress.hauntedRead.length >= 25;
          break;

        // Dedication achievements
        case 'night_owl':
          shouldUnlock = currentHour >= 0 && currentHour < 3;
          break;
        case 'early_bird':
          shouldUnlock = currentHour >= 5 && currentHour < 7;
          break;
        case 'midnight_scholar':
          shouldUnlock = currentHour === 0;
          break;
        case 'marathon':
          const todayReads = progress.readingHistory.filter(entry => 
            new Date(entry.timestamp).toDateString() === today
          );
          shouldUnlock = todayReads.length >= 10;
          break;
        case 'week_warrior':
          shouldUnlock = progress.dailyStreak >= 7;
          break;
        case 'month_master':
          shouldUnlock = progress.dailyStreak >= 30;
          break;

        // Mastery achievements
        case 'enlightened_one':
          shouldUnlock = progress.currentRank === 'elder';
          break;
        case 'completionist':
          shouldUnlock = progress.categoriesCompleted.length >= 10;
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
      console.log(`Unlocked ${newlyUnlocked.length} new achievements`);
    }

    return newlyUnlocked;
  },

  /**
   * Gets achievements filtered by category
   * @param category - Achievement category to filter by
   * @returns Array of achievements in that category
   */
  async getAchievementsByCategory(category: AchievementCategory): Promise<Achievement[]> {
    if (!category) {
      console.warn('getAchievementsByCategory: Invalid category');
      return [];
    }
    const progress = await this.getProgress();
    return progress.achievements.filter(a => a.category === category);
  },

  /**
   * Gets all unlocked achievements
   * @returns Array of unlocked achievements
   */
  async getUnlockedAchievements(): Promise<Achievement[]> {
    const progress = await this.getProgress();
    return progress.achievements.filter(a => a.unlocked);
  },

  /**
   * Gets all locked achievements
   * @returns Array of locked achievements
   */
  async getLockedAchievements(): Promise<Achievement[]> {
    const progress = await this.getProgress();
    return progress.achievements.filter(a => !a.unlocked);
  },

  /**
   * Gets user's reading statistics
   * @returns Object containing various reading stats
   */
  async getReadingStats(): Promise<{
    totalArticles: number;
    totalCodex: number;
    totalDocumented: number;
    totalHaunted: number;
    totalContent: number;
    streak: number;
    totalPoints: number;
    rank: VeilRank;
    achievementsUnlocked: number;
    achievementsTotal: number;
  }> {
    const progress = await this.getProgress();
    const totalContent = 
      progress.articlesRead.length + 
      progress.codexRead.length + 
      progress.documentedRead.length + 
      progress.hauntedRead.length;

    return {
      totalArticles: progress.articlesRead.length,
      totalCodex: progress.codexRead.length,
      totalDocumented: progress.documentedRead.length,
      totalHaunted: progress.hauntedRead.length,
      totalContent,
      streak: progress.dailyStreak,
      totalPoints: progress.totalPoints,
      rank: this.getCurrentRank(progress.totalPoints),
      achievementsUnlocked: progress.achievements.filter(a => a.unlocked).length,
      achievementsTotal: progress.achievements.length,
    };
  },

  /**
   * Resets all progress (use with caution!)
   * @returns Confirmation that progress was reset
   */
  async resetProgress(): Promise<boolean> {
    try {
      await AsyncStorage.removeItem(VEIL_PROGRESS_KEY);
      console.log('Veil progress reset');
      return true;
    } catch (error) {
      console.error('Error resetting progress:', error);
      return false;
    }
  },
};