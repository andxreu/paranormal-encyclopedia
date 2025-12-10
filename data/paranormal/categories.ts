
import { categoryColors } from '@/constants/Colors';

export interface Topic {
  id: string;
  name: string;
  description: string;
  categoryId: string;
}

export interface Category {
  id: string;
  code: string;
  name: string;
  color: string;
  icon: string;
  description: string;
  topics: Topic[];
}

export const categories: Category[] = [
  {
    id: 'creatures',
    code: 'CR',
    name: 'Creatures',
    color: categoryColors.creatures,
    icon: '🐉',
    description: 'Cryptids and mysterious beasts from around the world',
    topics: [
      { id: 'cr-1', name: 'Bigfoot', description: 'The legendary ape-like creature of North American forests', categoryId: 'creatures' },
      { id: 'cr-2', name: 'Loch Ness Monster', description: 'The mysterious aquatic creature of Scottish waters', categoryId: 'creatures' },
      { id: 'cr-3', name: 'Chupacabra', description: 'The blood-sucking beast of Latin American folklore', categoryId: 'creatures' },
      { id: 'cr-4', name: 'Mothman', description: 'The winged humanoid creature of West Virginia', categoryId: 'creatures' },
      { id: 'cr-5', name: 'Jersey Devil', description: 'The legendary creature of the New Jersey Pine Barrens', categoryId: 'creatures' },
    ],
  },
  {
    id: 'ufos',
    code: 'UF',
    name: 'UFOs',
    color: categoryColors.ufos,
    icon: '🛸',
    description: 'Unidentified flying objects and extraterrestrial encounters',
    topics: [
      { id: 'uf-1', name: 'Roswell Incident', description: 'The famous 1947 UFO crash in New Mexico', categoryId: 'ufos' },
      { id: 'uf-2', name: 'Area 51', description: 'The secretive military base linked to alien research', categoryId: 'ufos' },
      { id: 'uf-3', name: 'Phoenix Lights', description: 'The massive UFO sighting over Arizona in 1997', categoryId: 'ufos' },
      { id: 'uf-4', name: 'Betty and Barney Hill', description: 'The first widely publicized alien abduction case', categoryId: 'ufos' },
      { id: 'uf-5', name: 'Rendlesham Forest', description: 'The British Roswell incident of 1980', categoryId: 'ufos' },
    ],
  },
  {
    id: 'ghosts',
    code: 'GH',
    name: 'Ghosts',
    color: categoryColors.ghosts,
    icon: '👻',
    description: 'Spirits, hauntings, and paranormal apparitions',
    topics: [
      { id: 'gh-1', name: 'The Bell Witch', description: 'The malevolent spirit that haunted the Bell family', categoryId: 'ghosts' },
      { id: 'gh-2', name: 'The Amityville Horror', description: 'The infamous haunted house on Long Island', categoryId: 'ghosts' },
      { id: 'gh-3', name: 'The Tower of London', description: 'One of the most haunted places in England', categoryId: 'ghosts' },
      { id: 'gh-4', name: 'The Winchester Mystery House', description: 'The bizarre mansion built to confuse spirits', categoryId: 'ghosts' },
      { id: 'gh-5', name: 'The Stanley Hotel', description: 'The inspiration for Stephen King\'s The Shining', categoryId: 'ghosts' },
    ],
  },
  {
    id: 'occult',
    code: 'OC',
    name: 'Occult',
    color: categoryColors.occult,
    icon: '🔮',
    description: 'Dark arts, forbidden knowledge, and mystical practices',
    topics: [
      { id: 'oc-1', name: 'The Necronomicon', description: 'The legendary grimoire of forbidden knowledge', categoryId: 'occult' },
      { id: 'oc-2', name: 'Aleister Crowley', description: 'The infamous occultist and ceremonial magician', categoryId: 'occult' },
      { id: 'oc-3', name: 'The Ouija Board', description: 'The controversial spirit communication device', categoryId: 'occult' },
      { id: 'oc-4', name: 'Voodoo Practices', description: 'The misunderstood spiritual tradition', categoryId: 'occult' },
      { id: 'oc-5', name: 'Black Magic', description: 'The dark side of magical practices', categoryId: 'occult' },
    ],
  },
  {
    id: 'psychic',
    code: 'PS',
    name: 'Psychic',
    color: categoryColors.psychic,
    icon: '🧠',
    description: 'Mind powers, ESP, and extrasensory phenomena',
    topics: [
      { id: 'ps-1', name: 'Telepathy', description: 'Mind-to-mind communication without physical means', categoryId: 'psychic' },
      { id: 'ps-2', name: 'Remote Viewing', description: 'The ability to see distant locations psychically', categoryId: 'psychic' },
      { id: 'ps-3', name: 'Precognition', description: 'Seeing events before they happen', categoryId: 'psychic' },
      { id: 'ps-4', name: 'Psychokinesis', description: 'Moving objects with the power of the mind', categoryId: 'psychic' },
      { id: 'ps-5', name: 'The Stargate Project', description: 'The CIA\'s secret psychic spy program', categoryId: 'psychic' },
    ],
  },
  {
    id: 'ancients',
    code: 'AM',
    name: 'Ancients',
    color: categoryColors.ancients,
    icon: '🏛️',
    description: 'Ancient mysteries, lost civilizations, and archaeological enigmas',
    topics: [
      { id: 'am-1', name: 'Atlantis', description: 'The legendary lost civilization beneath the waves', categoryId: 'ancients' },
      { id: 'am-2', name: 'The Pyramids of Giza', description: 'Ancient wonders with mysterious construction', categoryId: 'ancients' },
      { id: 'am-3', name: 'Stonehenge', description: 'The prehistoric monument with unknown purpose', categoryId: 'ancients' },
      { id: 'am-4', name: 'The Nazca Lines', description: 'Massive geoglyphs visible only from the sky', categoryId: 'ancients' },
      { id: 'am-5', name: 'Easter Island Moai', description: 'The mysterious giant stone heads', categoryId: 'ancients' },
    ],
  },
  {
    id: 'folklore',
    code: 'FL',
    name: 'Folklore',
    color: categoryColors.folklore,
    icon: '📖',
    description: 'Myths, legends, and traditional tales from around the world',
    topics: [
      { id: 'fl-1', name: 'Vampires', description: 'The immortal blood-drinking creatures of the night', categoryId: 'folklore' },
      { id: 'fl-2', name: 'Werewolves', description: 'Humans who transform into wolves', categoryId: 'folklore' },
      { id: 'fl-3', name: 'Fairies', description: 'The magical beings of Celtic folklore', categoryId: 'folklore' },
      { id: 'fl-4', name: 'Dragons', description: 'The legendary fire-breathing serpents', categoryId: 'folklore' },
      { id: 'fl-5', name: 'The Kraken', description: 'The giant sea monster of Norse legend', categoryId: 'folklore' },
    ],
  },
  {
    id: 'phenomena',
    code: 'EV',
    name: 'Phenomena',
    color: categoryColors.phenomena,
    icon: '⚡',
    description: 'Unexplained events and mysterious occurrences',
    topics: [
      { id: 'ev-1', name: 'Spontaneous Human Combustion', description: 'People bursting into flames without external source', categoryId: 'phenomena' },
      { id: 'ev-2', name: 'The Bermuda Triangle', description: 'The mysterious region where ships and planes vanish', categoryId: 'phenomena' },
      { id: 'ev-3', name: 'Ball Lightning', description: 'Mysterious spheres of electrical energy', categoryId: 'phenomena' },
      { id: 'ev-4', name: 'Crop Circles', description: 'Intricate patterns appearing in fields overnight', categoryId: 'phenomena' },
      { id: 'ev-5', name: 'Time Slips', description: 'Unexplained journeys through time', categoryId: 'phenomena' },
    ],
  },
  {
    id: 'people',
    code: 'PE',
    name: 'People',
    color: categoryColors.people,
    icon: '👤',
    description: 'Mysterious figures and enigmatic individuals',
    topics: [
      { id: 'pe-1', name: 'Nostradamus', description: 'The prophet who predicted the future', categoryId: 'people' },
      { id: 'pe-2', name: 'Rasputin', description: 'The mystic who influenced Russian royalty', categoryId: 'people' },
      { id: 'pe-3', name: 'Edgar Cayce', description: 'The sleeping prophet and medical clairvoyant', categoryId: 'people' },
      { id: 'pe-4', name: 'John Dee', description: 'The occultist advisor to Queen Elizabeth I', categoryId: 'people' },
      { id: 'pe-5', name: 'The Count of St. Germain', description: 'The immortal alchemist and adventurer', categoryId: 'people' },
    ],
  },
  {
    id: 'truly-strange',
    code: 'TS',
    name: 'Truly Strange',
    color: categoryColors.trulyStrange,
    icon: '❓',
    description: 'The most bizarre and unexplainable mysteries',
    topics: [
      { id: 'ts-1', name: 'The Voynich Manuscript', description: 'The undecipherable medieval book', categoryId: 'truly-strange' },
      { id: 'ts-2', name: 'The Taos Hum', description: 'The mysterious low-frequency sound', categoryId: 'truly-strange' },
      { id: 'ts-3', name: 'The Wow! Signal', description: 'The unexplained radio signal from space', categoryId: 'truly-strange' },
      { id: 'ts-4', name: 'The Dyatlov Pass Incident', description: 'The mysterious deaths of nine hikers', categoryId: 'truly-strange' },
      { id: 'ts-5', name: 'The Tunguska Event', description: 'The massive explosion in Siberia', categoryId: 'truly-strange' },
    ],
  },
];

// Helper function to get category by ID
export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(cat => cat.id === id);
};

// Helper function to get all topics
export const getAllTopics = (): Topic[] => {
  return categories.flatMap(cat => cat.topics);
};

// Helper function to get topics by category
export const getTopicsByCategory = (categoryId: string): Topic[] => {
  const category = getCategoryById(categoryId);
  return category ? category.topics : [];
};
