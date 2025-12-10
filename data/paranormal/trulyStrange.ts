
import { categoryColors } from '@/constants/Colors';

export interface TopicSection {
  title: string;
  content: string;
}

export interface TrulyStrangeTopic {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  icon: string;
  sections: TopicSection[];
}

export const trulyStrangeData: TrulyStrangeTopic[] = [
  {
    id: 'ts-1',
    name: 'The Mandela Effect',
    description: 'Collective false memories shared by many people',
    categoryId: 'truly-strange',
    icon: '🧩',
    sections: [
      {
        title: 'Examples & Cases',
        content: 'The Mandela Effect is named after false memories of Nelson Mandela dying in prison in the 1980s. Common examples: "Berenstain Bears" vs "Berenstein Bears," Monopoly Man\'s monocle (he never had one), and "Luke, I am your father" (actually "No, I am your father").',
      },
      {
        title: 'Psychological Insights',
        content: 'Psychologists attribute the effect to confabulation, false memories, and social reinforcement. Our brains fill gaps in memory with plausible information. When many people share the same false memory, it feels more real. The internet amplifies and spreads these shared misrememberings.',
      },
      {
        title: 'Alternative Theories',
        content: 'Some believe the Mandela Effect proves parallel universes or timeline shifts. They argue too many people share identical false memories for it to be coincidence. Quantum physics and CERN experiments are cited as possible causes. Skeptics maintain it\'s simply how human memory works.',
      },
    ],
  },
  {
    id: 'ts-2',
    name: 'The Voynich Manuscript',
    description: 'The undecipherable medieval book',
    categoryId: 'truly-strange',
    icon: '📖',
    sections: [
      {
        title: 'Examples & Cases',
        content: 'The Voynich Manuscript is a 15th-century illustrated codex written in an unknown script. It contains drawings of unknown plants, astronomical diagrams, and naked women in strange plumbing. Carbon dating confirms its medieval origin. No one has successfully deciphered it.',
      },
      {
        title: 'Psychological Insights',
        content: 'The manuscript\'s mystery captivates because humans seek patterns and meaning. Cryptographers, linguists, and amateurs have attempted decryption for centuries. The failure to decode it frustrates our need for understanding. It may be an elaborate hoax or cipher.',
      },
      {
        title: 'Alternative Theories',
        content: 'Theories include: an unknown language, elaborate cipher, alien text, or medieval hoax. Some claim it\'s written in a lost Romance language or artificial language. AI analysis suggests it has linguistic structure. The mystery endures, making it the world\'s most mysterious manuscript.',
      },
    ],
  },
  {
    id: 'ts-3',
    name: 'The Taos Hum',
    description: 'The mysterious low-frequency sound',
    categoryId: 'truly-strange',
    icon: '🔊',
    sections: [
      {
        title: 'Examples & Cases',
        content: 'The Taos Hum is a low-frequency sound heard by about 2% of the population in Taos, New Mexico, and other locations worldwide. Described as a diesel engine idling or distant thunder, it causes headaches, insomnia, and distress. Recording equipment cannot detect it.',
      },
      {
        title: 'Psychological Insights',
        content: 'Some researchers suggest the Hum is tinnitus or auditory hallucination. The brain may be interpreting internal sounds as external. Stress and suggestion could amplify the perception. However, this doesn\'t explain why it affects specific geographic areas.',
      },
      {
        title: 'Alternative Theories',
        content: 'Theories include: military communications, industrial equipment, seismic activity, or electromagnetic radiation. Some people are more sensitive to low frequencies. The Hum has been reported in Bristol, UK, and Windsor, Ontario. The source remains unidentified despite investigations.',
      },
    ],
  },
  {
    id: 'ts-4',
    name: 'The Wow! Signal',
    description: 'The unexplained radio signal from space',
    categoryId: 'truly-strange',
    icon: '📡',
    sections: [
      {
        title: 'Examples & Cases',
        content: 'On August 15, 1977, the Big Ear radio telescope detected a strong narrowband signal lasting 72 seconds. Astronomer Jerry Ehman wrote "Wow!" on the printout. The signal came from the direction of Sagittarius and matched the expected signature of an extraterrestrial transmission.',
      },
      {
        title: 'Psychological Insights',
        content: 'The Wow! Signal captures our imagination because it suggests we\'re not alone. Humans project meaning onto ambiguous data. The desire to find extraterrestrial intelligence influences interpretation. The signal\'s uniqueness makes it both fascinating and frustrating.',
      },
      {
        title: 'Alternative Theories',
        content: 'Explanations include: alien transmission, natural astronomical phenomenon, or terrestrial interference. A 2017 study suggested a comet, but this was disputed. The signal has never repeated despite monitoring. It remains one of the strongest candidates for extraterrestrial communication.',
      },
    ],
  },
  {
    id: 'ts-5',
    name: 'The Dyatlov Pass Incident',
    description: 'The mysterious deaths of nine hikers',
    categoryId: 'truly-strange',
    icon: '⛰️',
    sections: [
      {
        title: 'Examples & Cases',
        content: 'In 1959, nine experienced hikers died mysteriously in Russia\'s Ural Mountains. Their tent was cut open from inside. Bodies were found scattered, some with severe internal injuries but no external trauma. One victim was missing her tongue. The area was named "Dyatlov Pass" after the group\'s leader.',
      },
      {
        title: 'Psychological Insights',
        content: 'The incident\'s mystery stems from contradictory evidence and Soviet secrecy. Humans struggle with unexplained deaths, especially when details don\'t fit known patterns. The bizarre injuries and circumstances fuel speculation. Our minds seek explanations, even supernatural ones.',
      },
      {
        title: 'Alternative Theories',
        content: 'Theories include: avalanche, infrasound-induced panic, military testing, paradoxical undressing from hypothermia, or yeti attack. A 2021 study suggested a delayed avalanche. However, this doesn\'t explain all evidence. The case remains one of Russia\'s greatest unsolved mysteries.',
      },
    ],
  },
];

export const getTrulyStrangeById = (id: string): TrulyStrangeTopic | undefined => {
  return trulyStrangeData.find(strange => strange.id === id);
};

export const getTrulyStrangeByName = (name: string): TrulyStrangeTopic | undefined => {
  return trulyStrangeData.find(strange => strange.name.toLowerCase() === name.toLowerCase());
};
