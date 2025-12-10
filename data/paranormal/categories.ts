
export interface Category {
  id: string;
  name: string;
  color: string;
  icon: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: 'ancients',
    name: 'Ancients',
    color: '#D4AF37', // Gold
    icon: '🏛️',
    description: 'Ancient civilizations and lost knowledge',
  },
  {
    id: 'creatures',
    name: 'Creatures',
    color: '#8B5CF6', // Violet
    icon: '🐉',
    description: 'Cryptids and mysterious beasts',
  },
  {
    id: 'ghosts',
    name: 'Ghosts',
    color: '#6366F1', // Indigo
    icon: '👻',
    description: 'Spirits and hauntings',
  },
  {
    id: 'occult',
    name: 'Occult',
    color: '#A855F7', // Purple
    icon: '🔮',
    description: 'Dark arts and forbidden knowledge',
  },
  {
    id: 'ufos',
    name: 'UFOs',
    color: '#3B82F6', // Blue
    icon: '🛸',
    description: 'Extraterrestrial encounters',
  },
  {
    id: 'psychic',
    name: 'Psychic',
    color: '#EC4899', // Pink
    icon: '🧠',
    description: 'Mind powers and ESP',
  },
  {
    id: 'folklore',
    name: 'Folklore',
    color: '#10B981', // Green
    icon: '📖',
    description: 'Myths and legends',
  },
  {
    id: 'phenomena',
    name: 'Phenomena',
    color: '#F59E0B', // Amber
    icon: '⚡',
    description: 'Unexplained events',
  },
  {
    id: 'people',
    name: 'People',
    color: '#EF4444', // Red
    icon: '👤',
    description: 'Mysterious figures',
  },
  {
    id: 'truly-strange',
    name: 'Truly Strange',
    color: '#14B8A6', // Teal
    icon: '❓',
    description: 'The unexplainable',
  },
];
