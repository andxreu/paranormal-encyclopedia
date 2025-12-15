
// utils/fuzzySearch.ts
// Robust fuzzy search implementation for paranormal encyclopedia
// Handles topics, codex, glossary, haunted locations, and documented accounts

import Fuse from 'fuse.js';
import {
  getAllTopics,
  getTotalTopicsCount,
  type AnyTopicType,
} from '@/data/paranormal/index';
import {
  getAllCodexEntries,
  type CodexEntry,
} from '@/data/paranormal/codex';
import {
  getAllGlossaryTerms,
  type GlossaryTerm,
} from '@/data/paranormal/glossary';
import {
  getAllHauntedLocations,
  type HauntedLocation,
} from '@/data/paranormal/hauntedLocations';
import {
  getAllDocumentedAccounts,
  type DocumentedAccount,
} from '@/data/paranormal/documentedAccounts';
import { categories } from '@/data/paranormal/categories';

// ──────────────────────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────────────────────

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'topic' | 'codex' | 'glossary' | 'location' | 'documented' | 'category';
  route: string;
  icon?: string;
  color?: string;
  categoryId?: string;
  categoryName?: string;
  score?: number;
}

export interface CategorizedResults {
  topics: SearchResult[];
  locations: SearchResult[];
  codex: SearchResult[];
  glossary: SearchResult[];
  documented: SearchResult[];
  categories: SearchResult[];
}

// ──────────────────────────────────────────────────────────────
// Search Configuration
// ──────────────────────────────────────────────────────────────

const FUSE_OPTIONS = {
  includeScore: true,
  threshold: 0.4, // 0 = perfect match, 1 = match anything
  distance: 100,
  minMatchCharLength: 2,
  ignoreLocation: true,
  useExtendedSearch: false,
  keys: [
    { name: 'name', weight: 2 },
    { name: 'title', weight: 2 },
    { name: 'description', weight: 1 },
    { name: 'location', weight: 1 },
    { name: 'definition', weight: 1 },
  ],
};

// ──────────────────────────────────────────────────────────────
// Search Indexes
// ──────────────────────────────────────────────────────────────

let topicsIndex: Fuse<AnyTopicType> | null = null;
let codexIndex: Fuse<CodexEntry> | null = null;
let glossaryIndex: Fuse<GlossaryTerm> | null = null;
let locationsIndex: Fuse<HauntedLocation> | null = null;
let documentedIndex: Fuse<DocumentedAccount> | null = null;
let categoriesIndex: Fuse<any> | null = null;

let isInitialized = false;

// ──────────────────────────────────────────────────────────────
// Utility Functions
// ──────────────────────────────────────────────────────────────

/**
 * Safely extracts text from a value, handling undefined/null
 */
function safeString(value: any): string {
  if (value === null || value === undefined) {
    return '';
  }
  if (typeof value === 'string') {
    return value;
  }
  if (typeof value === 'number') {
    return String(value);
  }
  return '';
}

/**
 * Sanitizes search query to prevent regex errors
 */
function sanitizeQuery(query: string): string {
  if (!query || typeof query !== 'string') {
    return '';
  }
  
  // Remove or escape special regex characters
  return query
    .trim()
    .replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Validates search query
 */
function isValidQuery(query: string): boolean {
  if (!query || typeof query !== 'string') {
    return false;
  }
  
  const trimmed = query.trim();
  return trimmed.length >= 1 && trimmed.length <= 100;
}

/**
 * Gets category info by ID safely
 */
function getCategoryInfo(categoryId?: string): { name: string; color: string; icon: string } {
  if (!categoryId) {
    return { name: '', color: '#8B5CF6', icon: '📄' };
  }
  
  const category = categories.find(c => c.id === categoryId);
  if (!category) {
    return { name: '', color: '#8B5CF6', icon: '📄' };
  }
  
  return {
    name: category.name,
    color: category.color,
    icon: category.icon,
  };
}

// ──────────────────────────────────────────────────────────────
// Index Initialization
// ──────────────────────────────────────────────────────────────

/**
 * Initializes all search indexes
 * Safe to call multiple times - will only initialize once
 */
function initialize(): void {
  if (isInitialized) {
    console.log('[FuzzySearch] Already initialized');
    return;
  }

  try {
    console.log('[FuzzySearch] Initializing search indexes...');

    // Initialize topics index
    try {
      const topics = getAllTopics();
      if (Array.isArray(topics) && topics.length > 0) {
        topicsIndex = new Fuse(topics, FUSE_OPTIONS);
        console.log(`[FuzzySearch] ✓ Topics index: ${topics.length} items`);
      } else {
        console.warn('[FuzzySearch] No topics found');
      }
    } catch (error) {
      console.error('[FuzzySearch] Error initializing topics index:', error);
    }

    // Initialize codex index
    try {
      const codex = getAllCodexEntries();
      if (Array.isArray(codex) && codex.length > 0) {
        codexIndex = new Fuse(codex, FUSE_OPTIONS);
        console.log(`[FuzzySearch] ✓ Codex index: ${codex.length} items`);
      } else {
        console.warn('[FuzzySearch] No codex entries found');
      }
    } catch (error) {
      console.error('[FuzzySearch] Error initializing codex index:', error);
    }

    // Initialize glossary index
    try {
      const glossary = getAllGlossaryTerms();
      if (Array.isArray(glossary) && glossary.length > 0) {
        glossaryIndex = new Fuse(glossary, FUSE_OPTIONS);
        console.log(`[FuzzySearch] ✓ Glossary index: ${glossary.length} items`);
      } else {
        console.warn('[FuzzySearch] No glossary terms found');
      }
    } catch (error) {
      console.error('[FuzzySearch] Error initializing glossary index:', error);
    }

    // Initialize locations index
    try {
      const locations = getAllHauntedLocations();
      if (Array.isArray(locations) && locations.length > 0) {
        locationsIndex = new Fuse(locations, FUSE_OPTIONS);
        console.log(`[FuzzySearch] ✓ Locations index: ${locations.length} items`);
      } else {
        console.warn('[FuzzySearch] No haunted locations found');
      }
    } catch (error) {
      console.error('[FuzzySearch] Error initializing locations index:', error);
    }

    // Initialize documented accounts index
    try {
      const documented = getAllDocumentedAccounts();
      if (Array.isArray(documented) && documented.length > 0) {
        documentedIndex = new Fuse(documented, FUSE_OPTIONS);
        console.log(`[FuzzySearch] ✓ Documented index: ${documented.length} items`);
      } else {
        console.warn('[FuzzySearch] No documented accounts found');
      }
    } catch (error) {
      console.error('[FuzzySearch] Error initializing documented index:', error);
    }

    // Initialize categories index
    try {
      if (Array.isArray(categories) && categories.length > 0) {
        categoriesIndex = new Fuse(categories, FUSE_OPTIONS);
        console.log(`[FuzzySearch] ✓ Categories index: ${categories.length} items`);
      } else {
        console.warn('[FuzzySearch] No categories found');
      }
    } catch (error) {
      console.error('[FuzzySearch] Error initializing categories index:', error);
    }

    isInitialized = true;
    console.log('[FuzzySearch] ✓ Initialization complete');
  } catch (error) {
    console.error('[FuzzySearch] ✗ Fatal initialization error:', error);
    isInitialized = false;
  }
}

// ──────────────────────────────────────────────────────────────
// Search Functions
// ──────────────────────────────────────────────────────────────

/**
 * Searches topics and returns formatted results
 */
function searchTopics(query: string, limit: number = 10): SearchResult[] {
  if (!topicsIndex) {
    console.warn('[FuzzySearch] Topics index not initialized');
    return [];
  }

  try {
    const results = topicsIndex.search(query, { limit });
    
    return results.map(result => {
      const topic = result.item;
      const categoryInfo = getCategoryInfo(topic.categoryId);
      
      return {
        id: safeString(topic.id),
        title: safeString(topic.name),
        description: safeString(topic.description),
        type: 'topic' as const,
        route: `/explore/${topic.categoryId}/${topic.id}`,
        icon: safeString(topic.icon) || categoryInfo.icon,
        color: categoryInfo.color,
        categoryId: safeString(topic.categoryId),
        categoryName: categoryInfo.name,
        score: result.score,
      };
    });
  } catch (error) {
    console.error('[FuzzySearch] Error searching topics:', error);
    return [];
  }
}

/**
 * Searches codex entries and returns formatted results
 */
function searchCodex(query: string, limit: number = 10): SearchResult[] {
  if (!codexIndex) {
    console.warn('[FuzzySearch] Codex index not initialized');
    return [];
  }

  try {
    const results = codexIndex.search(query, { limit });
    
    return results.map(result => {
      const entry = result.item;
      
      return {
        id: safeString(entry.id),
        title: safeString(entry.title),
        description: safeString(entry.description),
        type: 'codex' as const,
        route: `/resources/codex/${entry.id}`,
        icon: '📕',
        color: '#D946EF',
        score: result.score,
      };
    });
  } catch (error) {
    console.error('[FuzzySearch] Error searching codex:', error);
    return [];
  }
}

/**
 * Searches glossary terms and returns formatted results
 */
function searchGlossary(query: string, limit: number = 10): SearchResult[] {
  if (!glossaryIndex) {
    console.warn('[FuzzySearch] Glossary index not initialized');
    return [];
  }

  try {
    const results = glossaryIndex.search(query, { limit });
    
    return results.map(result => {
      const term = result.item;
      
      return {
        id: safeString(term.id),
        title: safeString(term.term),
        description: safeString(term.definition),
        type: 'glossary' as const,
        route: `/resources/glossary/${term.id}`,
        icon: '📖',
        color: '#8B5CF6',
        score: result.score,
      };
    });
  } catch (error) {
    console.error('[FuzzySearch] Error searching glossary:', error);
    return [];
  }
}

/**
 * Searches haunted locations and returns formatted results
 */
function searchLocations(query: string, limit: number = 10): SearchResult[] {
  if (!locationsIndex) {
    console.warn('[FuzzySearch] Locations index not initialized');
    return [];
  }

  try {
    const results = locationsIndex.search(query, { limit });
    
    return results.map(result => {
      const location = result.item;
      
      return {
        id: safeString(location.id),
        title: safeString(location.name),
        description: safeString(location.description),
        type: 'location' as const,
        route: `/resources/haunted-locations/${location.id}`,
        icon: '🏚️',
        color: '#6366F1',
        score: result.score,
      };
    });
  } catch (error) {
    console.error('[FuzzySearch] Error searching locations:', error);
    return [];
  }
}

/**
 * Searches documented accounts and returns formatted results
 */
function searchDocumented(query: string, limit: number = 10): SearchResult[] {
  if (!documentedIndex) {
    console.warn('[FuzzySearch] Documented index not initialized');
    return [];
  }

  try {
    const results = documentedIndex.search(query, { limit });
    
    return results.map(result => {
      const account = result.item;
      
      return {
        id: safeString(account.id),
        title: safeString(account.title),
        description: safeString(account.description),
        type: 'documented' as const,
        route: `/resources/documented-accounts/${account.id}`,
        icon: '🖋️',
        color: '#A855F7',
        score: result.score,
      };
    });
  } catch (error) {
    console.error('[FuzzySearch] Error searching documented accounts:', error);
    return [];
  }
}

/**
 * Searches categories and returns formatted results
 */
function searchCategories(query: string, limit: number = 10): SearchResult[] {
  if (!categoriesIndex) {
    console.warn('[FuzzySearch] Categories index not initialized');
    return [];
  }

  try {
    const results = categoriesIndex.search(query, { limit });
    
    return results.map(result => {
      const category = result.item;
      
      return {
        id: safeString(category.id),
        title: safeString(category.name),
        description: safeString(category.description),
        type: 'category' as const,
        route: `/explore/${category.id}`,
        icon: safeString(category.icon),
        color: safeString(category.color),
        score: result.score,
      };
    });
  } catch (error) {
    console.error('[FuzzySearch] Error searching categories:', error);
    return [];
  }
}

/**
 * Searches all content types and returns combined results
 */
function search(query: string, limit: number = 20): SearchResult[] {
  // Validate query
  if (!isValidQuery(query)) {
    console.warn('[FuzzySearch] Invalid query:', query);
    return [];
  }

  // Ensure indexes are initialized
  if (!isInitialized) {
    console.log('[FuzzySearch] Auto-initializing on first search');
    initialize();
  }

  // Sanitize query
  const sanitized = sanitizeQuery(query);
  if (!sanitized) {
    return [];
  }

  try {
    // Search all indexes
    const topicResults = searchTopics(sanitized, Math.ceil(limit * 0.4));
    const codexResults = searchCodex(sanitized, Math.ceil(limit * 0.15));
    const glossaryResults = searchGlossary(sanitized, Math.ceil(limit * 0.15));
    const locationResults = searchLocations(sanitized, Math.ceil(limit * 0.15));
    const documentedResults = searchDocumented(sanitized, Math.ceil(limit * 0.15));
    const categoryResults = searchCategories(sanitized, Math.ceil(limit * 0.1));

    // Combine and sort by score
    const allResults = [
      ...topicResults,
      ...codexResults,
      ...glossaryResults,
      ...locationResults,
      ...documentedResults,
      ...categoryResults,
    ];

    // Sort by score (lower is better in Fuse.js)
    allResults.sort((a, b) => (a.score || 1) - (b.score || 1));

    // Return limited results
    return allResults.slice(0, limit);
  } catch (error) {
    console.error('[FuzzySearch] Error during search:', error);
    return [];
  }
}

/**
 * Searches all content types and returns categorized results
 */
function getCategorizedResults(query: string): CategorizedResults {
  // Validate query
  if (!isValidQuery(query)) {
    console.warn('[FuzzySearch] Invalid query for categorized search:', query);
    return {
      topics: [],
      locations: [],
      codex: [],
      glossary: [],
      documented: [],
      categories: [],
    };
  }

  // Ensure indexes are initialized
  if (!isInitialized) {
    console.log('[FuzzySearch] Auto-initializing on first categorized search');
    initialize();
  }

  // Sanitize query
  const sanitized = sanitizeQuery(query);
  if (!sanitized) {
    return {
      topics: [],
      locations: [],
      codex: [],
      glossary: [],
      documented: [],
      categories: [],
    };
  }

  try {
    return {
      topics: searchTopics(sanitized, 10),
      locations: searchLocations(sanitized, 5),
      codex: searchCodex(sanitized, 5),
      glossary: searchGlossary(sanitized, 5),
      documented: searchDocumented(sanitized, 5),
      categories: searchCategories(sanitized, 3),
    };
  } catch (error) {
    console.error('[FuzzySearch] Error during categorized search:', error);
    return {
      topics: [],
      locations: [],
      codex: [],
      glossary: [],
      documented: [],
      categories: [],
    };
  }
}

/**
 * Resets all search indexes (useful for testing or data refresh)
 */
function reset(): void {
  console.log('[FuzzySearch] Resetting search indexes...');
  
  topicsIndex = null;
  codexIndex = null;
  glossaryIndex = null;
  locationsIndex = null;
  documentedIndex = null;
  categoriesIndex = null;
  isInitialized = false;
  
  console.log('[FuzzySearch] ✓ Reset complete');
}

// ──────────────────────────────────────────────────────────────
// Public API
// ──────────────────────────────────────────────────────────────

export const fuzzySearch = {
  initialize,
  search,
  getCategorizedResults,
  reset,
  
  // Individual search functions (exposed for advanced use)
  searchTopics,
  searchCodex,
  searchGlossary,
  searchLocations,
  searchDocumented,
  searchCategories,
  
  // Utility functions
  isInitialized: () => isInitialized,
  sanitizeQuery,
  isValidQuery,
} as const;

// Auto-initialize on module load (optional - can be removed if causing issues)
// initialize();
