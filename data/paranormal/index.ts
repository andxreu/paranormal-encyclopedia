
// Central export file for all paranormal data modules
export * from './categories';
export * from './facts';
export * from './creatures';
export * from './ufos';
export * from './ghosts';
export * from './occult';
export * from './psychic';
export * from './ancients';
export * from './folklore';
export * from './phenomena';
export * from './people';
export * from './trulyStrange';

// Helper function to get all topic data by category
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
