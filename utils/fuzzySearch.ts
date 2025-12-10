
import Fuse from 'fuse.js';
import { categories } from '@/data/paranormal/categories';
import { getCategoryTopics } from '@/data/paranormal';
import { glossaryData } from '@/data/paranormal/glossary';
import { codexData } from '@/data/paranormal/codex';
import { hauntedLocations } from '@/data/paranormal/hauntedLocations';
import { facts } from '@/data/paranormal/facts';

export interface SearchResult {
  type: 'category' | 'topic' | 'glossary' | 'codex' | 'location' | 'fact';
  id: string;
  title: string;
  description: string;
  route: string;
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
      ],
      threshold: 0.4,
      includeScore: true,
      minMatchCharLength: 2,
      ignoreLocation: true,
    });

    console.log(`Search index built with ${this.searchIndex.length} items`);
  }

  private buildSearchIndex(): SearchResult[] {
    const results: SearchResult[] = [];

    categories.forEach(category => {
      results.push({
        type: 'category',
        id: category.id,
        title: category.name,
        description: category.description,
        route: `/explore/${category.id}`,
      });

      const topics = getCategoryTopics(category.id);
      topics.forEach(topic => {
        results.push({
          type: 'topic',
          id: topic.id,
          title: topic.name,
          description: topic.description,
          route: `/explore/${category.id}/${topic.id}`,
        });
      });
    });

    glossaryData.forEach(item => {
      results.push({
        type: 'glossary',
        id: item.id,
        title: item.term,
        description: item.definition,
        route: `/resources/glossary/${item.id}`,
      });
    });

    codexData.forEach(item => {
      results.push({
        type: 'codex',
        id: item.id,
        title: item.title,
        description: item.summary,
        route: `/resources/codex/${item.id}`,
      });
    });

    hauntedLocations.forEach(location => {
      results.push({
        type: 'location',
        id: location.id,
        title: location.name,
        description: location.description,
        route: `/resources/haunted-locations/${location.id}`,
      });
    });

    facts.forEach((fact, index) => {
      results.push({
        type: 'fact',
        id: `fact-${index}`,
        title: fact.category,
        description: fact.fact,
        route: '/',
      });
    });

    return results;
  }

  search(query: string, limit: number = 20): SearchResult[] {
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

  getAll(): SearchResult[] {
    if (this.searchIndex.length === 0) {
      this.initialize();
    }
    return this.searchIndex;
  }
}

export const fuzzySearch = new FuzzySearchService();
