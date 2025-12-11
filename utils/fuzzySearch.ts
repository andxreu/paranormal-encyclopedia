
import Fuse from 'fuse.js';
import { categories } from '@/data/paranormal/categories';
import { glossaryData } from '@/data/paranormal/glossary';
import { codexData } from '@/data/paranormal/codex';
import { hauntedLocations } from '@/data/paranormal/hauntedLocations';
import { documentedAccountsData } from '@/data/paranormal/documentedAccounts';
import { creaturesData } from '@/data/paranormal/creatures';
import { ufosData } from '@/data/paranormal/ufos';
import { ghostsData } from '@/data/paranormal/ghosts';
import { occultData } from '@/data/paranormal/occult';
import { psychicData } from '@/data/paranormal/psychic';
import { ancientsData } from '@/data/paranormal/ancients';
import { folkloreData } from '@/data/paranormal/folklore';
import { phenomenaData } from '@/data/paranormal/phenomena';
import { peopleData } from '@/data/paranormal/people';
import { trulyStrangeData } from '@/data/paranormal/trulyStrange';

export interface SearchResult {
  type: 'category' | 'topic' | 'glossary' | 'codex' | 'location' | 'documented' | 'person' | 'phenomenon';
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
    try {
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
    } catch (error) {
      console.error('Error initializing fuzzy search:', error);
      this.searchIndex = [];
      this.fuse = null;
    }
  }

  private buildSearchIndex(): SearchResult[] {
    const results: SearchResult[] = [];

    try {
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
      });

      // Index topics from all data sources
      const allTopicsData = [
        { data: creaturesData, categoryId: 'creatures' },
        { data: ufosData, categoryId: 'ufos' },
        { data: ghostsData, categoryId: 'ghosts' },
        { data: occultData, categoryId: 'occult' },
        { data: psychicData, categoryId: 'psychic' },
        { data: ancientsData, categoryId: 'ancients' },
        { data: folkloreData, categoryId: 'folklore' },
        { data: phenomenaData, categoryId: 'phenomena' },
        { data: peopleData, categoryId: 'people' },
        { data: trulyStrangeData, categoryId: 'truly-strange' },
      ];

      allTopicsData.forEach(({ data, categoryId }) => {
        const category = categories.find(c => c.id === categoryId);
        if (data && Array.isArray(data)) {
          data.forEach((topic: any) => {
            results.push({
              type: 'topic',
              id: topic.id,
              title: topic.name,
              description: topic.description,
              route: `/explore/${categoryId}/${topic.id}`,
              categoryId: categoryId,
              icon: category?.icon || '🔮',
              color: category?.color || '#8B5CF6',
            });
          });
        }
      });

      // Index glossary
      if (glossaryData && Array.isArray(glossaryData)) {
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
      }

      // Index codex
      if (codexData && Array.isArray(codexData)) {
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
      }

      // Index haunted locations
      if (hauntedLocations && Array.isArray(hauntedLocations)) {
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
      }

      // Index documented accounts
      if (documentedAccountsData && Array.isArray(documentedAccountsData)) {
        documentedAccountsData.forEach(account => {
          results.push({
            type: 'documented',
            id: account.id,
            title: account.name,
            description: account.description,
            route: `/resources/documented-accounts/${account.id}`,
            icon: '🖋️',
            color: '#D4AF37',
          });
        });
      }

      // NOTE: Facts are intentionally excluded from search results
      // They remain accessible only through the Random Fact button
    } catch (error) {
      console.error('Error building search index:', error);
    }

    return results;
  }

  search(query: string, limit: number = 30): SearchResult[] {
    if (!this.fuse) {
      this.initialize();
    }

    if (!this.fuse || !query || query.trim().length < 2) {
      return [];
    }

    try {
      const results = this.fuse.search(query, { limit });
      return results.map(result => ({
        ...result.item,
        score: result.score,
      }));
    } catch (error) {
      console.error('Error searching:', error);
      return [];
    }
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
      documented: [],
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
        case 'documented':
          categorized.documented.push(result);
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
