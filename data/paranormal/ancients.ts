
import { categoryColors } from '@/constants/Colors';

export interface TopicSection {
  title: string;
  content: string;
}

export interface AncientTopic {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  icon: string;
  sections: TopicSection[];
}

export const ancientsData: AncientTopic[] = [
  {
    id: 'am-1',
    name: 'Atlantis',
    description: 'The legendary lost civilization beneath the waves',
    categoryId: 'ancients',
    icon: '🌊',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Plato described Atlantis around 360 BCE as an advanced island civilization that sank into the ocean "in a single day and night." The Atlanteans allegedly possessed advanced technology and conquered much of the Mediterranean before their hubris angered the gods.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Proposed locations include the Mediterranean, Atlantic Ocean, Antarctica, and even Indonesia. The Santorini eruption that destroyed the Minoan civilization is a leading candidate. No definitive archaeological evidence has been found. Some scholars believe Plato invented Atlantis as a philosophical allegory.',
      },
      {
        title: 'Modern Theories',
        content: 'Edgar Cayce claimed Atlantis would rise again near Bimini. The Bimini Road underwater formation sparked speculation but is likely natural. Ancient astronaut theorists link Atlantis to extraterrestrial visitors. The search continues with new underwater scanning technology.',
      },
    ],
  },
  {
    id: 'am-2',
    name: 'The Pyramids of Giza',
    description: 'Ancient wonders with mysterious construction',
    categoryId: 'ancients',
    icon: '🔺',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Built around 2560 BCE, the Great Pyramid was the tallest structure for 3,800 years. Ancient legends claim they were built by giants or with lost technology. Arab folklore tells of hidden chambers containing ancient knowledge. The precision of construction amazes modern engineers.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Mainstream archaeology attributes construction to Pharaoh Khufu using copper tools and ramps. Alternative theories propose advanced ancient technology, acoustic levitation, or extraterrestrial assistance. The alignment with Orion\'s Belt and mathematical constants like pi intrigue researchers.',
      },
      {
        title: 'Modern Theories',
        content: 'Some believe the pyramids were power plants using Earth\'s energy. Others suggest they were astronomical observatories or initiation chambers. Hidden chambers detected by scanning remain unexplored. The Sphinx may be thousands of years older than officially dated.',
      },
    ],
  },
  {
    id: 'am-3',
    name: 'Stonehenge',
    description: 'The prehistoric monument with unknown purpose',
    categoryId: 'ancients',
    icon: '🗿',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Built in stages from 3000-2000 BCE, Stonehenge\'s purpose remains debated. Medieval legends attributed it to Merlin\'s magic. The bluestones were transported 150 miles from Wales—a remarkable feat. Druids adopted it for ceremonies, though they didn\'t build it.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Theories include astronomical observatory, healing temple, and burial ground. The site aligns with summer solstice sunrise and winter solstice sunset. Recent discoveries show it was part of a larger ceremonial landscape. How the massive stones were moved remains partially mysterious.',
      },
      {
        title: 'Modern Theories',
        content: 'Some propose Stonehenge was an ancient sound temple using acoustic properties. Others suggest it marked ley lines or Earth energy points. The Aubrey Holes may have held wooden posts for astronomical calculations. Modern pagans celebrate solstices there, continuing ancient traditions.',
      },
    ],
  },
  {
    id: 'am-4',
    name: 'The Nazca Lines',
    description: 'Massive geoglyphs visible only from the sky',
    categoryId: 'ancients',
    icon: '🦅',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Created between 500 BCE and 500 CE in Peru, these massive designs include animals, plants, and geometric shapes. Some lines stretch for miles. The Nazca people created them by removing reddish pebbles to reveal lighter ground beneath.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Mainstream theories suggest astronomical calendar, water cult rituals, or ceremonial pathways. The designs are best viewed from the air, leading to questions about their purpose. Maria Reiche dedicated her life to studying and preserving them.',
      },
      {
        title: 'Modern Theories',
        content: 'Erich von Däniken proposed they were landing strips for ancient aliens. Others suggest hot air balloons allowed aerial viewing. Recent research links them to water sources and fertility rituals. New lines continue to be discovered using drone technology.',
      },
    ],
  },
  {
    id: 'am-5',
    name: 'Easter Island Moai',
    description: 'The mysterious giant stone heads',
    categoryId: 'ancients',
    icon: '🗿',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Nearly 900 monolithic statues carved between 1400-1650 CE. Rapa Nui legends say they "walked" to their locations. The statues represented ancestors and were believed to contain mana (spiritual power). The civilization collapsed, possibly due to deforestation.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Researchers debate how the multi-ton statues were transported miles from the quarry. Experiments show they could be "walked" upright using ropes. The statues have bodies buried underground. Red stone topknots (pukao) were added to some, weighing up to 12 tons.',
      },
      {
        title: 'Modern Theories',
        content: 'Some claim the statues were created by a lost advanced civilization or extraterrestrials. The rongorongo script remains undeciphered. Recent studies show the island wasn\'t as isolated as believed. The statues\' eyes were originally inlaid with coral and stone.',
      },
    ],
  },
];

export const getAncientById = (id: string): AncientTopic | undefined => {
  return ancientsData.find(ancient => ancient.id === id);
};

export const getAncientByName = (name: string): AncientTopic | undefined => {
  return ancientsData.find(ancient => ancient.name.toLowerCase() === name.toLowerCase());
};
