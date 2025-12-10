
export * from './types';
export * from './categories';
export * from './facts';
export * from './hauntedLocations';
export * from './codex';
export * from './glossary';

import { creaturesData, getCreatureById, getCreatureByName } from './creatures';
import { ufosData, getUFOById, getUFOByName } from './ufos';
import { ghostsData, getGhostById, getGhostByName } from './ghosts';
import { occultData, getOccultById, getOccultByName } from './occult';
import { psychicData, getPsychicById, getPsychicByName } from './psychic';
import { ancientsData, getAncientById, getAncientByName } from './ancients';
import { folkloreData, getFolkloreById, getFolkloreByName } from './folklore';
import { phenomenaData, getPhenomenaById, getPhenomenaByName } from './phenomena';
import { peopleData, getPeopleById, getPeopleByName } from './people';
import { trulyStrangeData, getTrulyStrangeById, getTrulyStrangeByName } from './trulyStrange';

export {
  creaturesData,
  getCreatureById,
  getCreatureByName,
  ufosData,
  getUFOById,
  getUFOByName,
  ghostsData,
  getGhostById,
  getGhostByName,
  occultData,
  getOccultById,
  getOccultByName,
  psychicData,
  getPsychicById,
  getPsychicByName,
  ancientsData,
  getAncientById,
  getAncientByName,
  folkloreData,
  getFolkloreById,
  getFolkloreByName,
  phenomenaData,
  getPhenomenaById,
  getPhenomenaByName,
  peopleData,
  getPeopleById,
  getPeopleByName,
  trulyStrangeData,
  getTrulyStrangeById,
  getTrulyStrangeByName,
};

interface Topic {
  id: string;
  name: string;
  description: string;
  sections?: unknown[];
}

export const getCategoryTopics = (categoryId: string): Topic[] => {
  switch (categoryId) {
    case 'creatures':
      return creaturesData as Topic[];
    case 'ufos':
      return ufosData as Topic[];
    case 'ghosts':
      return ghostsData as Topic[];
    case 'occult':
      return occultData as Topic[];
    case 'psychic':
      return psychicData as Topic[];
    case 'ancients':
      return ancientsData as Topic[];
    case 'folklore':
      return folkloreData as Topic[];
    case 'phenomena':
      return phenomenaData as Topic[];
    case 'people':
      return peopleData as Topic[];
    case 'truly-strange':
      return trulyStrangeData as Topic[];
    default:
      return [];
  }
};
