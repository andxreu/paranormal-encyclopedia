
import Fuse from 'fuse.js';
import { categories, getAllTopics } from '@/data/paranormal/categories';
import { getCategoryTopics } from '@/data/paranormal';
import { glossaryData } from '@/data/paranormal/glossary';
import { codexData } from '@/data/paranormal/codex';
import { hauntedLocations } from '@/data/paranormal/hauntedLocations';
import { paranormalFacts } from '@/data/paranormal/facts';

export interface SearchResult {
  type: 'category' | 'topic' | 'glossary' | 'codex' | 'location' | 'fact' | 'person' | 'phenomenon';
  id: string;
  title: string;
  description: string;
  route: string;
  categoryId?: string;
  icon?: string;
  color?: string;
  score?: number;
}

class FuzzySearchService {
  private fuse: Fuse<SearchResult> | null = null;
  private searchIndex: SearchResult[] = [];

  initialize(): void {
    console.log('Initializing fuzzy search index...');
    this.searchIndex = this.buildSearchIndex();
    
    this.fuse = new Fuse(this.searchIndex, {
      keys: [
        { name: 'title', weight: 2 },
        { name: 'description', weight: 1 },
        { name: 'type', weight: 0.5 },
      ],
      threshold: 0.4,
      includeScore: true,
      minMatchCharLength: 2,
      ignoreLocation: true,
      useExtendedSearch: true,
    });

    console.log(`Search index built with ${this.searchIndex.length} items`);
  }

  private buildSearchIndex(): SearchResult[] {
    const results: SearchResult[] = [];

    // Index categories
    categories.forEach(category => {
      results.push({
        type: 'category',
        id: category.id,
        title: category.name,
        description: category.description,
        route: `/explore/${category.id}`,
        icon: category.icon,
        color: category.color,
      });

      // Index topics
      const topics = getCategoryTopics(category.id);
      topics.forEach((topic: any) => {
        results.push({
          type: 'topic',
          id: topic.id,
          title: topic.name,
          description: topic.description,
          route: `/explore/${category.id}/${topic.id}`,
          categoryId: category.id,
          icon: category.icon,
          color: category.color,
        });
      });
    });

    // Index glossary
    glossaryData.forEach(item => {
      results.push({
        type: 'glossary',
        id: item.id,
        title: item.term,
        description: item.definition,
        route: `/resources/glossary/${item.id}`,
        icon: '📖',
        color: '#8B5CF6',
      });
    });

    // Index codex
    codexData.forEach(item => {
      results.push({
        type: 'codex',
        id: item.id,
        title: item.title,
        description: item.summary,
        route: `/resources/codex/${item.id}`,
        icon: '📕',
        color: '#6366F1',
      });
    });

    // Index haunted locations
    hauntedLocations.forEach(location => {
      results.push({
        type: 'location',
        id: location.id,
        title: location.name,
        description: location.description,
        route: `/resources/haunted-locations/${location.id}`,
        icon: '🏚️',
        color: '#EC4899',
      });
    });

    // Index facts
    paranormalFacts.forEach((fact, index) => {
      results.push({
        type: 'fact',
        id: `fact-${index}`,
        title: fact.categoryName,
        description: fact.fact,
        route: '/',
        icon: '💡',
        color: fact.color,
      });
    });

    return results;
  }

  search(query: string, limit: number = 30): SearchResult[] {
    if (!this.fuse) {
      this.initialize();
    }

    if (!query || query.trim().length < 2) {
      return [];
    }

    const results = this.fuse!.search(query, { limit });
    return results.map(result => ({
      ...result.item,
      score: result.score,
    }));
  }

  searchByType(query: string, type: string, limit: number = 10): SearchResult[] {
    const allResults = this.search(query, 100);
    return allResults.filter(result => result.type === type).slice(0, limit);
  }

  getAll(): SearchResult[] {
    if (this.searchIndex.length === 0) {
      this.initialize();
    }
    return this.searchIndex;
  }

  getCategorizedResults(query: string): Record<string, SearchResult[]> {
    const results = this.search(query, 50);
    const categorized: Record<string, SearchResult[]> = {
      topics: [],
      locations: [],
      codex: [],
      glossary: [],
      facts: [],
      categories: [],
    };

    results.forEach(result => {
      switch (result.type) {
        case 'topic':
          categorized.topics.push(result);
          break;
        case 'location':
          categorized.locations.push(result);
          break;
        case 'codex':
          categorized.codex.push(result);
          break;
        case 'glossary':
          categorized.glossary.push(result);
          break;
        case 'fact':
          categorized.facts.push(result);
          break;
        case 'category':
          categorized.categories.push(result);
          break;
      }
    });

    return categorized;
  }
}

export const fuzzySearch = new FuzzySearchService();
