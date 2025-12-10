
import { categoryColors } from '@/constants/Colors';
import { TopicSection } from './types';

export interface CreatureTopic {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  icon: string;
  sections: TopicSection[];
}

export const creaturesData: CreatureTopic[] = [
  {
    id: 'cr-1',
    name: 'Bigfoot',
    description: 'The legendary ape-like creature of North American forests',
    categoryId: 'creatures',
    icon: '🦍',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Bigfoot, also known as Sasquatch, is a cryptid said to inhabit forests of North America. Native American tribes have legends of wild men dating back centuries. The creature is typically described as a large, hairy, bipedal humanoid standing 6-9 feet tall.',
      },
      {
        title: 'Notable Sightings',
        content: 'The Patterson-Gimlin film from 1967 remains the most famous alleged footage. Thousands of sightings have been reported across the Pacific Northwest, with footprints measuring up to 24 inches long discovered at various locations.',
      },
      {
        title: 'Evidence & Research',
        content: 'Physical evidence includes hair samples, footprint casts, and audio recordings of alleged vocalizations. The Bigfoot Field Researchers Organization maintains a database of over 5,000 reported sightings. DNA analysis of samples has been inconclusive.',
      },
    ],
  },
  {
    id: 'cr-2',
    name: 'Loch Ness Monster',
    description: 'The mysterious aquatic creature of Scottish waters',
    categoryId: 'creatures',
    icon: '🐉',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Nessie is a cryptid said to inhabit Loch Ness in the Scottish Highlands. The first recorded sighting dates to 565 AD when Saint Columba encountered a "water beast." Modern interest began with the famous "Surgeon\'s Photograph" in 1934.',
      },
      {
        title: 'Notable Sightings',
        content: 'Over 1,000 sightings have been reported. The creature is typically described as having a long neck, small head, and humps protruding from the water. Sonar readings have detected large, unexplained objects in the loch\'s depths.',
      },
      {
        title: 'Evidence & Research',
        content: 'Multiple expeditions have used sonar, submarines, and underwater cameras. Operation Deepscan in 1987 covered the entire loch. While no conclusive evidence has been found, the mystery continues to attract researchers and tourists worldwide.',
      },
    ],
  },
  {
    id: 'cr-3',
    name: 'Chupacabra',
    description: 'The blood-sucking beast of Latin American folklore',
    categoryId: 'creatures',
    icon: '🦇',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'The Chupacabra, meaning "goat-sucker" in Spanish, first appeared in Puerto Rico in 1995. Described as a reptilian creature with leathery skin, sharp spines, and glowing red eyes, it allegedly drains the blood of livestock.',
      },
      {
        title: 'Notable Sightings',
        content: 'Reports spread rapidly through Latin America and into the southern United States. Farmers discovered livestock with puncture wounds and completely drained of blood. Descriptions vary from reptilian to canine-like creatures.',
      },
      {
        title: 'Evidence & Research',
        content: 'Several carcasses claimed to be Chupacabras have been examined and identified as coyotes or dogs with mange. However, the pattern of livestock deaths and eyewitness accounts continue to fuel the legend.',
      },
    ],
  },
  {
    id: 'cr-4',
    name: 'Mothman',
    description: 'The winged humanoid creature of West Virginia',
    categoryId: 'creatures',
    icon: '🦋',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Mothman is a cryptid first sighted in Point Pleasant, West Virginia in 1966. Described as a large humanoid figure with massive wings and glowing red eyes, it became associated with the tragic Silver Bridge collapse in 1967.',
      },
      {
        title: 'Notable Sightings',
        content: 'Over 100 people reported sightings between November 1966 and December 1967. Witnesses described a creature 6-7 feet tall with a 10-foot wingspan. Sightings ceased after the bridge disaster that killed 46 people.',
      },
      {
        title: 'Evidence & Research',
        content: 'The Mothman has become a cultural phenomenon, inspiring books, films, and an annual festival. Some researchers suggest it was a sandhill crane, while others believe it was a harbinger of disaster. The mystery remains unsolved.',
      },
    ],
  },
  {
    id: 'cr-5',
    name: 'Jersey Devil',
    description: 'The legendary creature of the New Jersey Pine Barrens',
    categoryId: 'creatures',
    icon: '😈',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Legend states the Jersey Devil was born in 1735 as the 13th child of Mother Leeds. The infant transformed into a creature with hooves, bat wings, a forked tail, and a horse-like head before flying up the chimney.',
      },
      {
        title: 'Notable Sightings',
        content: 'The most famous wave of sightings occurred in January 1909, with thousands of people across New Jersey and Pennsylvania reporting encounters. Footprints in snow, livestock attacks, and aerial sightings were documented.',
      },
      {
        title: 'Evidence & Research',
        content: 'The creature has been blamed for livestock deaths and strange sounds in the Pine Barrens for over 280 years. Despite numerous searches and investigations, no physical evidence has been conclusively linked to the Jersey Devil.',
      },
    ],
  },
];

export const getCreatureById = (id: string): CreatureTopic | undefined => {
  return creaturesData.find(creature => creature.id === id);
};

export const getCreatureByName = (name: string): CreatureTopic | undefined => {
  return creaturesData.find(creature => creature.name.toLowerCase() === name.toLowerCase());
};
