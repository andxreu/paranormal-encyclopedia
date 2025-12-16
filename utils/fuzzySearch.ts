
// utils/fuzzySearch.ts
// Optimized fuzzy search with lazy initialization and debouncing

import Fuse from 'fuse.js';
import { getAllTopics, type AnyTopicType } from '@/data/paranormal/index';
import { getAllCodexEntries, type CodexEntry } from '@/data/paranormal/codex';
import { getAllGlossaryTerms, type GlossaryTerm } from '@/data/paranormal/glossary';
import { getAllHauntedLocations, type HauntedLocation } from '@/data/paranormal/hauntedLocations';
import { getAllDocumentedAccounts, type DocumentedAccount } from '@/data/paranormal/documentedAccounts';
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
  threshold: 0.4,
  distance: 100,
  minMatchCharLength: 2,
  ignoreLocation: true,
  useExtendedSearch: false,
  keys: [
    { name: 'name', weight: 2 },
    { name: 'title', weight: 2 },
    { name: 'term', weight: 2 },
    { name: 'description', weight: 1 },
    { name: 'location', weight: 1 },
    { name: 'definition', weight: 1 },
  ],
};

// ──────────────────────────────────────────────────────────────
// Indexes (Lazy-loaded)
// ──────────────────────────────────────────────────────────────

let topicsIndex: Fuse<AnyTopicType> | null = null;
let codexIndex: Fuse<CodexEntry> | null = null;
let glossaryIndex: Fuse<GlossaryTerm> | null = null;
let locationsIndex: Fuse<HauntedLocation> | null = null;
let documentedIndex: Fuse<DocumentedAccount> | null = null;
let categoriesIndex: Fuse<any> | null = null;

let isInitialized = false;
let isInitializing = false;
let initPromise: Promise<void> | null = null;

// ──────────────────────────────────────────────────────────────
// Utils
// ──────────────────────────────────────────────────────────────

function safeString(value: any): string {
  if (value === null || value === undefined) return '';
  if (typeof value === 'string') return value;
  if (typeof value === 'number') return String(value);
  return '';
}

function sanitizeQuery(query: string): string {
  if (!query || typeof query !== 'string') return '';
  return query.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function isValidQuery(query: string): boolean {
  if (!query || typeof query !== 'string') return false;
  const trimmed = query.trim();
  return trimmed.length >= 1 && trimmed.length <= 100;
}

function getCategoryInfo(categoryId?: string): { name: string; color: string; icon: string } {
  if (!categoryId) return { name: '', color: '#8B5CF6', icon: '📄' };

  const target = safeString(categoryId);
  const category = categories.find((c: any) => safeString(c?.id) === target);

  if (!category) return { name: '', color: '#8B5CF6', icon: '📄' };

  return {
    name: safeString(category.name),
    color: safeString(category.color) || '#8B5CF6',
    icon: safeString(category.icon) || '📄',
  };
}

function buildExploreCategoryRoute(categoryId: any): string {
  const cat = safeString(categoryId);
  return cat ? `/(tabs)/explore/${cat}` : '/(tabs)/explore';
}

function buildExploreTopicRoute(categoryId: any, topicId: any): string {
  const cat = safeString(categoryId);
  const topic = safeString(topicId);
  if (cat && topic) return `/(tabs)/explore/${cat}/${topic}`;
  if (cat) return `/(tabs)/explore/${cat}`;
  return '/(tabs)/explore';
}

// ──────────────────────────────────────────────────────────────
// Lazy Initialization (Async, runs once)
// ──────────────────────────────────────────────────────────────

async function initialize(): Promise<void> {
  // If already initialized, return immediately
  if (isInitialized) {
    return Promise.resolve();
  }

  // If currently initializing, return the existing promise
  if (isInitializing && initPromise) {
    return initPromise;
  }

  // Start initialization
  isInitializing = true;
  
  initPromise = new Promise<void>((resolve) => {
    // Use setTimeout to defer initialization and not block the UI thread
    setTimeout(() => {
      try {
        console.log('[FuzzySearch] 🔄 Initializing search indexes...');

        // Build indexes one at a time to avoid blocking
        try {
          const topics = getAllTopics();
          if (Array.isArray(topics) && topics.length > 0) {
            topicsIndex = new Fuse(topics, FUSE_OPTIONS);
            console.log('[FuzzySearch] ✓ Topics index ready');
          }
        } catch (e) {
          console.error('[FuzzySearch] Topics init error:', e);
        }

        try {
          const codex = getAllCodexEntries();
          if (Array.isArray(codex) && codex.length > 0) {
            codexIndex = new Fuse(codex, FUSE_OPTIONS);
            console.log('[FuzzySearch] ✓ Codex index ready');
          }
        } catch (e) {
          console.error('[FuzzySearch] Codex init error:', e);
        }

        try {
          const glossary = getAllGlossaryTerms();
          if (Array.isArray(glossary) && glossary.length > 0) {
            glossaryIndex = new Fuse(glossary, FUSE_OPTIONS);
            console.log('[FuzzySearch] ✓ Glossary index ready');
          }
        } catch (e) {
          console.error('[FuzzySearch] Glossary init error:', e);
        }

        try {
          const locs = getAllHauntedLocations();
          if (Array.isArray(locs) && locs.length > 0) {
            locationsIndex = new Fuse(locs, FUSE_OPTIONS);
            console.log('[FuzzySearch] ✓ Locations index ready');
          }
        } catch (e) {
          console.error('[FuzzySearch] Locations init error:', e);
        }

        try {
          const docs = getAllDocumentedAccounts();
          if (Array.isArray(docs) && docs.length > 0) {
            documentedIndex = new Fuse(docs, FUSE_OPTIONS);
            console.log('[FuzzySearch] ✓ Documented index ready');
          }
        } catch (e) {
          console.error('[FuzzySearch] Documented init error:', e);
        }

        try {
          if (Array.isArray(categories) && categories.length > 0) {
            categoriesIndex = new Fuse(categories as any, FUSE_OPTIONS);
            console.log('[FuzzySearch] ✓ Categories index ready');
          }
        } catch (e) {
          console.error('[FuzzySearch] Categories init error:', e);
        }

        isInitialized = true;
        isInitializing = false;
        console.log('[FuzzySearch] ✅ All indexes ready');
        resolve();
      } catch (e) {
        console.error('[FuzzySearch] Fatal init error:', e);
        isInitialized = false;
        isInitializing = false;
        resolve(); // Resolve anyway to not block
      }
    }, 0);
  });

  return initPromise;
}

// ──────────────────────────────────────────────────────────────
// Searches
// ──────────────────────────────────────────────────────────────

function searchTopics(query: string, limit: number = 10): SearchResult[] {
  if (!topicsIndex) return [];

  try {
    const results = topicsIndex.search(query, { limit });

    return results.map((result) => {
      const topic = result.item as any;
      const topicId = safeString(topic.id);
      const categoryId = safeString(topic.categoryId);
      const categoryInfo = getCategoryInfo(categoryId);

      return {
        id: topicId,
        title: safeString(topic.name),
        description: safeString(topic.description),
        type: 'topic',
        route: buildExploreTopicRoute(categoryId, topicId),
        icon: safeString(topic.icon) || categoryInfo.icon,
        color: categoryInfo.color,
        categoryId,
        categoryName: categoryInfo.name,
        score: result.score,
      };
    });
  } catch (e) {
    console.error('[FuzzySearch] searchTopics error:', e);
    return [];
  }
}

function searchCodex(query: string, limit: number = 10): SearchResult[] {
  if (!codexIndex) return [];

  try {
    const results = codexIndex.search(query, { limit });

    return results.map((result) => {
      const entry = result.item as any;
      const entryId = safeString(entry.id);

      return {
        id: entryId,
        title: safeString(entry.title),
        description: safeString(entry.description),
        type: 'codex',
        route: entryId ? `/resources/codex/${entryId}` : '/resources/codex',
        icon: '📕',
        color: '#D946EF',
        score: result.score,
      };
    });
  } catch (e) {
    console.error('[FuzzySearch] searchCodex error:', e);
    return [];
  }
}

function searchGlossary(query: string, limit: number = 10): SearchResult[] {
  if (!glossaryIndex) return [];

  try {
    const results = glossaryIndex.search(query, { limit });

    return results.map((result) => {
      const term = result.item as any;
      const termId = safeString(term.id);

      return {
        id: termId,
        title: safeString(term.term),
        description: safeString(term.definition),
        type: 'glossary',
        route: termId ? `/resources/glossary/${termId}` : '/resources/glossary',
        icon: '📖',
        color: '#8B5CF6',
        score: result.score,
      };
    });
  } catch (e) {
    console.error('[FuzzySearch] searchGlossary error:', e);
    return [];
  }
}

function searchLocations(query: string, limit: number = 10): SearchResult[] {
  if (!locationsIndex) return [];

  try {
    const results = locationsIndex.search(query, { limit });

    return results.map((result) => {
      const location = result.item as any;
      const locId = safeString(location.id);

      return {
        id: locId,
        title: safeString(location.name),
        description: safeString(location.description),
        type: 'location',
        route: locId ? `/resources/haunted-locations/${locId}` : '/resources/haunted-locations',
        icon: '🏚️',
        color: '#6366F1',
        score: result.score,
      };
    });
  } catch (e) {
    console.error('[FuzzySearch] searchLocations error:', e);
    return [];
  }
}

function searchDocumented(query: string, limit: number = 10): SearchResult[] {
  if (!documentedIndex) return [];

  try {
    const results = documentedIndex.search(query, { limit });

    return results.map((result) => {
      const account = result.item as any;
      const accId = safeString(account.id);
      const title = safeString(account.title) || safeString(account.name);

      return {
        id: accId,
        title,
        description: safeString(account.description),
        type: 'documented',
        route: accId ? `/resources/documented-accounts/${accId}` : '/resources/documented-accounts',
        icon: '🖋️',
        color: '#A855F7',
        score: result.score,
      };
    });
  } catch (e) {
    console.error('[FuzzySearch] searchDocumented error:', e);
    return [];
  }
}

function searchCategories(query: string, limit: number = 10): SearchResult[] {
  if (!categoriesIndex) return [];

  try {
    const results = categoriesIndex.search(query, { limit });

    return results.map((result) => {
      const cat = result.item as any;
      const catId = safeString(cat.id);

      return {
        id: catId,
        title: safeString(cat.name),
        description: safeString(cat.description),
        type: 'category',
        route: buildExploreCategoryRoute(catId),
        icon: safeString(cat.icon),
        color: safeString(cat.color),
        score: result.score,
      };
    });
  } catch (e) {
    console.error('[FuzzySearch] searchCategories error:', e);
    return [];
  }
}

async function search(query: string, limit: number = 20): Promise<SearchResult[]> {
  if (!isValidQuery(query)) return [];

  // Ensure indexes are initialized
  await initialize();

  const sanitized = sanitizeQuery(query);
  if (!sanitized) return [];

  try {
    const topicResults = searchTopics(sanitized, Math.ceil(limit * 0.4));
    const codexResults = searchCodex(sanitized, Math.ceil(limit * 0.15));
    const glossaryResults = searchGlossary(sanitized, Math.ceil(limit * 0.15));
    const locationResults = searchLocations(sanitized, Math.ceil(limit * 0.15));
    const documentedResults = searchDocumented(sanitized, Math.ceil(limit * 0.15));
    const categoryResults = searchCategories(sanitized, Math.ceil(limit * 0.1));

    const all = [
      ...topicResults,
      ...codexResults,
      ...glossaryResults,
      ...locationResults,
      ...documentedResults,
      ...categoryResults,
    ];

    all.sort((a, b) => (a.score ?? 1) - (b.score ?? 1));
    return all.slice(0, limit);
  } catch (e) {
    console.error('[FuzzySearch] search error:', e);
    return [];
  }
}

async function getCategorizedResults(query: string): Promise<CategorizedResults> {
  if (!isValidQuery(query)) {
    return { topics: [], locations: [], codex: [], glossary: [], documented: [], categories: [] };
  }

  // Ensure indexes are initialized
  await initialize();

  const sanitized = sanitizeQuery(query);
  if (!sanitized) {
    return { topics: [], locations: [], codex: [], glossary: [], documented: [], categories: [] };
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
  } catch (e) {
    console.error('[FuzzySearch] categorized error:', e);
    return { topics: [], locations: [], codex: [], glossary: [], documented: [], categories: [] };
  }
}

function reset(): void {
  topicsIndex = null;
  codexIndex = null;
  glossaryIndex = null;
  locationsIndex = null;
  documentedIndex = null;
  categoriesIndex = null;
  isInitialized = false;
  isInitializing = false;
  initPromise = null;
}

export const fuzzySearch = {
  initialize,
  search,
  getCategorizedResults,
  reset,

  searchTopics,
  searchCodex,
  searchGlossary,
  searchLocations,
  searchDocumented,
  searchCategories,

  isInitialized: () => isInitialized,
  sanitizeQuery,
  isValidQuery,
} as const;
