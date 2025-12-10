
import { categoryColors } from '@/constants/Colors';

export interface TopicSection {
  title: string;
  content: string;
}

export interface OccultTopic {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  icon: string;
  sections: TopicSection[];
}

export const occultData: OccultTopic[] = [
  {
    id: 'oc-1',
    name: 'Alchemy',
    description: 'The ancient practice of transmutation and spiritual transformation',
    categoryId: 'occult',
    icon: '⚗️',
    sections: [
      {
        title: 'Practices & Methods',
        content: 'Alchemy combines chemistry, metallurgy, and mysticism. Practitioners sought to transmute base metals into gold and create the Philosopher\'s Stone. The Great Work involved purification through stages: nigredo (blackening), albedo (whitening), citrinitas (yellowing), and rubedo (reddening).',
      },
      {
        title: 'Symbols & Meanings',
        content: 'Alchemical symbols represent elements, planets, and processes. The Ouroboros (snake eating its tail) symbolizes eternal cycles. The union of opposites is represented by the marriage of Sol (sun/gold) and Luna (moon/silver). Hermetic principles guide the work.',
      },
      {
        title: 'Historical Significance',
        content: 'Famous alchemists include Hermes Trismegistus, Nicolas Flamel, and Paracelsus. Alchemy influenced the development of modern chemistry. Isaac Newton devoted more time to alchemy than physics. The practice spread from ancient Egypt through medieval Europe.',
      },
    ],
  },
  {
    id: 'oc-2',
    name: 'The Necronomicon',
    description: 'The legendary grimoire of forbidden knowledge',
    categoryId: 'occult',
    icon: '📖',
    sections: [
      {
        title: 'Practices & Methods',
        content: 'Created by H.P. Lovecraft for his fiction, the Necronomicon allegedly contains rituals to summon ancient entities. Despite being fictional, several "real" versions have been published. The book supposedly drives readers insane with forbidden knowledge.',
      },
      {
        title: 'Symbols & Meanings',
        content: 'Associated with the Cthulhu Mythos and Elder Gods. The book\'s author, the "Mad Arab" Abdul Alhazred, allegedly learned dark secrets in the Empty Quarter. Symbols include the Elder Sign for protection and various sigils for summoning.',
      },
      {
        title: 'Historical Significance',
        content: 'While fictional, the Necronomicon has influenced occult culture significantly. Multiple authors have created "real" versions, blending Lovecraft\'s fiction with actual occult practices. It represents the archetype of forbidden knowledge in popular culture.',
      },
    ],
  },
  {
    id: 'oc-3',
    name: 'Aleister Crowley',
    description: 'The infamous occultist and ceremonial magician',
    categoryId: 'occult',
    icon: '🎩',
    sections: [
      {
        title: 'Practices & Methods',
        content: 'Crowley developed Thelema, a spiritual philosophy based on "Do what thou wilt shall be the whole of the Law." He practiced ceremonial magic, sex magic, and drug-induced mystical experiences. His rituals combined elements from various traditions including Kabbalah and Eastern mysticism.',
      },
      {
        title: 'Symbols & Meanings',
        content: 'The unicursal hexagram became Thelema\'s primary symbol. Crowley called himself "The Great Beast 666" and "Perdurabo." His Book of the Law, allegedly channeled from the entity Aiwass, forms Thelema\'s foundation. The number 93 represents Thelema and Agape (love).',
      },
      {
        title: 'Historical Significance',
        content: 'Crowley (1875-1947) was a member of the Hermetic Order of the Golden Dawn before founding his own orders. He influenced modern occultism, Wicca, and popular culture. Despite controversy, he\'s considered one of the most influential occultists of the 20th century.',
      },
    ],
  },
  {
    id: 'oc-4',
    name: 'The Ouija Board',
    description: 'The controversial spirit communication device',
    categoryId: 'occult',
    icon: '🔤',
    sections: [
      {
        title: 'Practices & Methods',
        content: 'Users place fingers on a planchette that moves across a board marked with letters, numbers, and "yes/no." Participants ask questions, and the planchette allegedly moves to spell out answers from spirits. Sessions typically involve multiple participants in a darkened room.',
      },
      {
        title: 'Symbols & Meanings',
        content: 'The board features the alphabet, numbers 0-9, "YES," "NO," and "GOODBYE." The sun and moon symbols represent positive and negative forces. The planchette\'s heart shape with a window allows users to see letters. The name combines French "oui" and German "ja" (both meaning "yes").',
      },
      {
        title: 'Historical Significance',
        content: 'Patented in 1891 as a parlor game, the Ouija board became associated with spiritualism. Psychologists attribute its function to the ideomotor effect (unconscious muscle movements). Despite scientific explanations, many believe it genuinely contacts spirits.',
      },
    ],
  },
  {
    id: 'oc-5',
    name: 'Voodoo Practices',
    description: 'The misunderstood spiritual tradition',
    categoryId: 'occult',
    icon: '🗿',
    sections: [
      {
        title: 'Practices & Methods',
        content: 'Vodou (proper spelling) combines West African Vodun with Catholicism. Practitioners honor loa (spirits) through ceremonies involving drumming, dancing, and possession. Rituals include offerings, prayers, and the creation of veves (symbolic drawings). Contrary to stereotypes, it\'s primarily a healing tradition.',
      },
      {
        title: 'Symbols & Meanings',
        content: 'Each loa has specific veves, colors, and offerings. Papa Legba guards the crossroads between worlds. Erzulie represents love and beauty. Baron Samedi rules the dead. Voodoo dolls, popularized by Hollywood, are rarely used in actual practice.',
      },
      {
        title: 'Historical Significance',
        content: 'Vodou originated in West Africa and evolved in Haiti during slavery. It played a role in the Haitian Revolution. The religion has been demonized by colonizers and popular media. Today, it\'s practiced by millions in Haiti, Louisiana, and worldwide.',
      },
    ],
  },
];

export const getOccultById = (id: string): OccultTopic | undefined => {
  return occultData.find(occult => occult.id === id);
};

export const getOccultByName = (name: string): OccultTopic | undefined => {
  return occultData.find(occult => occult.name.toLowerCase() === name.toLowerCase());
};
