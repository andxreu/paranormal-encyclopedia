// data/paranormal/index.ts
// Central hub for all paranormal data with type-safe access

import { creaturesData, getCreatureById, getCreatureByName, CreatureTopic } from './creatures';
import { ufosData, getUFOById, getUFOByName, UFOTopic } from './ufos';
import { ghostsData, getGhostById, getGhostByName, GhostTopic } from './ghosts';
import { occultData, getOccultById, getOccultByName, OccultTopic } from './occult';
import { psychicData, getPsychicById, getPsychicByName, PsychicTopic } from './psychic';
import { ancientsData, getAncientById, getAncientByName, AncientTopic } from './ancients';
import { folkloreData, getFolkloreById, getFolkloreByName, FolkloreTopic } from './folklore';
import { phenomenaData, getPhenomenaById, getPhenomenaByName, PhenomenaTopic } from './phenomena';
import { peopleData, getPeopleById, getPeopleByName, PeopleTopic } from './people';
import { trulyStrangeData, getTrulyStrangeById, getTrulyStrangeByName, TrulyStrangeTopic } from './trulyStrange';
import type { CategoryId, TopicIdPrefix, BaseTopic } from './types';

// Re-export types
export * from './types';
export * from './categories';
export * from './facts';

// Re-export haunted locations
export { 
  hauntedLocationsData, 
  getHauntedLocationById, 
  getHauntedLocationByName,
  getAllHauntedLocations,
  getHauntedLocationsCount,
  getHauntedLocationsByRegion,
  type HauntedLocation,
  type HauntingType,
  type VisitorAccess,
} from './hauntedLocations';

// Re-export codex
export { 
  codexData, 
  getCodexEntryById, 
  getCodexEntryByName,
  getAllCodexEntries,
  getCodexCount,
  getCodexByCategory,
  type CodexEntry,
} from './codex';

// Re-export glossary
export { 
  glossaryData, 
  getGlossaryTermById, 
  getGlossaryTermByName,
  getAllGlossaryTerms,
  getGlossaryCount,
  type GlossaryTerm,
} from './glossary';

// Re-export documented accounts
export { 
  documentedAccountsData, 
  getDocumentedAccountById, 
  getDocumentedAccountByName,
  getAllDocumentedAccounts,
  getDocumentedAccountsCount,
  type DocumentedAccount,
} from './documentedAccounts';

// Re-export category data and helper functions
export {
  creaturesData,
  ufosData,
  ghostsData,
  occultData,
  psychicData,
  ancientsData,
  folkloreData,
  phenomenaData,
  peopleData,
  trulyStrangeData,
  getCreatureById,
  getCreatureByName,
  getUFOById,
  getUFOByName,
  getGhostById,
  getGhostByName,
  getOccultById,
  getOccultByName,
  getPsychicById,
  getPsychicByName,
  getAncientById,
  getAncientByName,
  getFolkloreById,
  getFolkloreByName,
  getPhenomenaById,
  getPhenomenaByName,
  getPeopleById,
  getPeopleByName,
  getTrulyStrangeById,
  getTrulyStrangeByName,
};

// Re-export topic types for external use
export type { CreatureTopic, UFOTopic, GhostTopic, OccultTopic, PsychicTopic, AncientTopic, FolkloreTopic, PhenomenaTopic, PeopleTopic, TrulyStrangeTopic };

/**
 * Union type of all possible topic types
 */
export type AnyTopicType = 
  | CreatureTopic 
  | UFOTopic 
  | GhostTopic 
  | OccultTopic 
  | PsychicTopic 
  | AncientTopic 
  | FolkloreTopic 
  | PhenomenaTopic 
  | PeopleTopic 
  | TrulyStrangeTopic;

/**
 * Valid category IDs in the system
 */
const VALID_CATEGORY_IDS: readonly CategoryId[] = [
  'creatures',
  'ufos',
  'ghosts',
  'occult',
  'psychic',
  'ancients',
  'folklore',
  'phenomena',
  'people',
  'truly-strange',
] as const;

/**
 * Mapping of category IDs to their data arrays (type-safe)
 */
const CATEGORY_DATA_MAP: Record<CategoryId, BaseTopic[]> = {
  creatures: creaturesData,
  ufos: ufosData,
  ghosts: ghostsData,
  occult: occultData,
  psychic: psychicData,
  ancients: ancientsData,
  folklore: folkloreData,
  phenomena: phenomenaData,
  people: peopleData,
  'truly-strange': trulyStrangeData,
};

/**
 * Mapping of topic ID prefixes to their getter functions (type-safe)
 */
const PREFIX_GETTER_MAP: Record<TopicIdPrefix, (id: string) => BaseTopic | undefined> = {
  cr: getCreatureById,
  uf: getUFOById,
  gh: getGhostById,
  oc: getOccultById,
  ps: getPsychicById,
  am: getAncientById,
  fl: getFolkloreById,
  ev: getPhenomenaById,
  pe: getPeopleById,
  ts: getTrulyStrangeById,
};

/**
 * Mapping of category IDs to their name-based getter functions (type-safe)
 */
const NAME_GETTER_MAP: Record<CategoryId, (name: string) => BaseTopic | undefined> = {
  creatures: getCreatureByName,
  ufos: getUFOByName,
  ghosts: getGhostByName,
  occult: getOccultByName,
  psychic: getPsychicByName,
  ancients: getAncientByName,
  folklore: getFolkloreByName,
  phenomena: getPhenomenaByName,
  people: getPeopleByName,
  'truly-strange': getTrulyStrangeByName,
};

/**
 * Gets topics for a specific category
 * @param categoryId - The category identifier
 * @returns Array of topics for the category, or empty array if invalid
 */
export const getCategoryTopics = (categoryId: string): BaseTopic[] => {
  if (!categoryId || typeof categoryId !== 'string') {
    console.warn('getCategoryTopics: Invalid categoryId provided');
    return [];
  }

  // Type guard check
  if (!isValidCategoryId(categoryId)) {
    console.warn(`getCategoryTopics: Unknown category "${categoryId}"`);
    return [];
  }

  return CATEGORY_DATA_MAP[categoryId] || [];
};

/**
 * Checks if a category ID is valid (type guard)
 * @param categoryId - The category identifier to validate
 * @returns True if valid, false otherwise
 */
export const isValidCategoryId = (categoryId: string): categoryId is CategoryId => {
  return VALID_CATEGORY_IDS.includes(categoryId as CategoryId);
};

/**
 * Checks if a string is a valid topic ID prefix (type guard)
 * @param prefix - The prefix to validate
 * @returns True if valid, false otherwise
 */
export const isValidTopicPrefix = (prefix: string): prefix is TopicIdPrefix => {
  return prefix in PREFIX_GETTER_MAP;
};

/**
 * Gets all valid category IDs
 * @returns Array of all valid category IDs
 */
export const getAllCategoryIds = (): readonly CategoryId[] => {
  return VALID_CATEGORY_IDS;
};

/**
 * Gets a topic by ID across all categories
 * @param topicId - The topic identifier (e.g., 'cr-1', 'uf-2')
 * @returns The topic object if found, undefined otherwise
 */
export const getTopicById = (topicId: string): AnyTopicType | undefined => {
  if (!topicId || typeof topicId !== 'string') {
    console.warn('getTopicById: Invalid topicId provided');
    return undefined;
  }

  // Extract category prefix from topic ID (e.g., 'cr-1' -> 'cr')
  const prefix = topicId.split('-')[0]?.toLowerCase();
  
  if (!prefix || !isValidTopicPrefix(prefix)) {
    console.warn(`getTopicById: Unknown prefix "${prefix}" in topicId "${topicId}"`);
    return undefined;
  }

  const getter = PREFIX_GETTER_MAP[prefix];
  return getter(topicId) as AnyTopicType | undefined;
};

/**
 * Gets a topic by name across all categories
 * @param topicName - The topic name to search for
 * @returns The topic object if found, undefined otherwise
 */
export const getTopicByName = (topicName: string): AnyTopicType | undefined => {
  if (!topicName || typeof topicName !== 'string') {
    console.warn('getTopicByName: Invalid topicName provided');
    return undefined;
  }

  // Search through all category getters
  for (const getter of Object.values(NAME_GETTER_MAP)) {
    const result = getter(topicName);
    if (result) {
      return result as AnyTopicType;
    }
  }

  return undefined;
};

/**
 * Gets topics by name for a specific category
 * @param categoryId - The category to search in
 * @param topicName - The topic name to search for
 * @returns The topic object if found, undefined otherwise
 */
export const getTopicByNameInCategory = (categoryId: string, topicName: string): BaseTopic | undefined => {
  if (!isValidCategoryId(categoryId)) {
    console.warn(`getTopicByNameInCategory: Invalid categoryId "${categoryId}"`);
    return undefined;
  }

  const getter = NAME_GETTER_MAP[categoryId];
  return getter(topicName);
};

/**
 * Gets topic count for a specific category
 * @param categoryId - The category identifier
 * @returns Number of topics in the category
 */
export const getCategoryTopicsCount = (categoryId: string): number => {
  const topics = getCategoryTopics(categoryId);
  return topics.length;
};

/**
 * Gets all topics across all categories
 * @returns Array of all topics
 */
export const getAllTopics = (): BaseTopic[] => {
  return Object.values(CATEGORY_DATA_MAP).flat();
};

/**
 * Gets total count of topics across all categories
 * @returns Total number of topics
 */
export const getTotalTopicsCount = (): number => {
  return Object.values(CATEGORY_DATA_MAP).reduce(
    (total, data) => total + (Array.isArray(data) ? data.length : 0),
    0
  );
};

/**
 * Searches topics by partial name match (case-insensitive)
 * @param searchTerm - The search term
 * @param categoryId - Optional category to limit search
 * @returns Array of matching topics
 */
export const searchTopicsByName = (searchTerm: string, categoryId?: string): BaseTopic[] => {
  if (!searchTerm || typeof searchTerm !== 'string') {
    return [];
  }

  const normalizedSearch = searchTerm.toLowerCase().trim();
  
  if (categoryId && isValidCategoryId(categoryId)) {
    // Search within specific category
    return CATEGORY_DATA_MAP[categoryId].filter(topic =>
      topic.name.toLowerCase().includes(normalizedSearch)
    );
  }

  // Search across all categories
  return getAllTopics().filter(topic =>
    topic.name.toLowerCase().includes(normalizedSearch)
  );
};