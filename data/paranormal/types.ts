// data/paranormal/types.ts
// Shared types and interfaces for paranormal data across all categories

/**
 * Represents a content section within a topic
 * Used for organizing topic information into readable segments
 */
export interface TopicSection {
  title: string;
  content: string;
}

/**
 * Base interface for all paranormal topics across categories
 * Ensures consistency across creatures, UFOs, ghosts, etc.
 */
export interface BaseTopic {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  icon: string;
  sections: TopicSection[];
}

/**
 * Valid category identifiers in the system
 */
export type CategoryId = 
  | 'creatures'
  | 'ufos'
  | 'ghosts'
  | 'occult'
  | 'psychic'
  | 'ancients'
  | 'folklore'
  | 'phenomena'
  | 'people'
  | 'truly-strange';

/**
 * Category code prefixes used in topic IDs
 * Maps to the two-letter codes (CR, UF, GH, etc.)
 */
export type CategoryCode = 
  | 'CR'  // Creatures
  | 'UF'  // UFOs
  | 'GH'  // Ghosts
  | 'OC'  // Occult
  | 'PS'  // Psychic
  | 'AM'  // Ancients/Mysteries
  | 'FL'  // Folklore
  | 'EV'  // Events/Phenomena
  | 'PE'  // People
  | 'TS'; // Truly Strange

/**
 * Topic ID prefix mapping for lookup operations
 * Used to route topic IDs to the correct category getter
 */
export type TopicIdPrefix =
  | 'cr'  // Creatures
  | 'uf'  // UFOs
  | 'gh'  // Ghosts
  | 'oc'  // Occult
  | 'ps'  // Psychic
  | 'am'  // Ancients
  | 'fl'  // Folklore
  | 'ev'  // Phenomena
  | 'pe'  // People
  | 'ts'; // Truly Strange

/**
 * Generic topic type that can represent any category's topic
 * Useful for functions that work across all categories
 */
export type AnyTopic = BaseTopic & {
  categoryId: CategoryId;
};

/**
 * Helper type for topic getter functions
 * All category files should export getters matching this signature
 */
export type TopicGetter<T extends BaseTopic> = (id: string) => T | undefined;

/**
 * Helper type for topic name lookup functions
 * All category files should export name-based getters matching this signature
 */
export type TopicNameGetter<T extends BaseTopic> = (name: string) => T | undefined;

/**
 * Type guard to check if a string is a valid CategoryId
 */
export function isCategoryId(value: string): value is CategoryId {
  const validIds: CategoryId[] = [
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
  ];
  return validIds.includes(value as CategoryId);
}

/**
 * Type guard to check if a string is a valid TopicIdPrefix
 */
export function isTopicIdPrefix(value: string): value is TopicIdPrefix {
  const validPrefixes: TopicIdPrefix[] = [
    'cr', 'uf', 'gh', 'oc', 'ps', 'am', 'fl', 'ev', 'pe', 'ts',
  ];
  return validPrefixes.includes(value as TopicIdPrefix);
}