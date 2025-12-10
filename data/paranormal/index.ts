
// Central export file for all paranormal data modules
// All imports at the top
import { creaturesData } from './creatures';
import { ufosData } from './ufos';
import { ghostsData } from './ghosts';
import { occultData } from './occult';
import { psychicData } from './psychic';
import { ancientsData } from './ancients';
import { folkloreData } from './folklore';
import { phenomenaData } from './phenomena';
import { peopleData } from './people';
import { trulyStrangeData } from './trulyStrange';

// Export shared types
export * from './types';

// Export categories and facts
export * from './categories';
export * from './facts';

// Export all category data arrays
export { creaturesData } from './creatures';
export { ufosData } from './ufos';
export { ghostsData } from './ghosts';
export { occultData } from './occult';
export { psychicData } from './psychic';
export { ancientsData } from './ancients';
export { folkloreData } from './folklore';
export { phenomenaData } from './phenomena';
export { peopleData } from './people';
export { trulyStrangeData } from './trulyStrange';

// Export helper functions from each module
export { getCreatureById, getCreatureByName } from './creatures';
export { getUFOById, getUFOByName } from './ufos';
export { getGhostById, getGhostByName } from './ghosts';
export { getOccultById, getOccultByName } from './occult';
export { getPsychicById, getPsychicByName } from './psychic';
export { getAncientById, getAncientByName } from './ancients';
export { getFolkloreById, getFolkloreByName } from './folklore';
export { getPhenomenaById, getPhenomenaByName } from './phenomena';
export { getPeopleById, getPeopleByName } from './people';
export { getTrulyStrangeById, getTrulyStrangeByName } from './trulyStrange';

// Helper function to get all topic data by category
export const getCategoryTopics = (categoryId: string) => {
  switch (categoryId) {
    case 'creatures':
      return creaturesData;
    case 'ufos':
      return ufosData;
    case 'ghosts':
      return ghostsData;
    case 'occult':
      return occultData;
    case 'psychic':
      return psychicData;
    case 'ancients':
      return ancientsData;
    case 'folklore':
      return folkloreData;
    case 'phenomena':
      return phenomenaData;
    case 'people':
      return peopleData;
    case 'truly-strange':
      return trulyStrangeData;
    default:
      return [];
  }
};
