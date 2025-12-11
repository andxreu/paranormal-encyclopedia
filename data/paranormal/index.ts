
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

export * from './types';
export * from './categories';
export * from './facts';
export * from './hauntedLocations';
export * from './codex';
export * from './glossary';
export * from './documentedAccounts';

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
