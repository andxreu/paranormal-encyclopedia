
import { categoryColors } from '@/constants/Colors';

export interface TopicSection {
  title: string;
  content: string;
}

export interface GhostTopic {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  icon: string;
  sections: TopicSection[];
}

export const ghostsData: GhostTopic[] = [
  {
    id: 'gh-1',
    name: 'Poltergeists',
    description: 'Noisy spirits that move objects and create disturbances',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'The Enfield Poltergeist (1977-1979) involved furniture moving, objects flying, and voices speaking through an 11-year-old girl. The Rosenheim Poltergeist in Germany (1967) caused electrical disturbances and phone malfunctions. Both cases were extensively documented by researchers.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Parapsychologists suggest poltergeist activity may be caused by psychokinetic energy from adolescents under stress. Skeptics attribute phenomena to fraud, natural causes, or psychological factors. The word "poltergeist" means "noisy ghost" in German.',
      },
      {
        title: 'Scientific Investigation',
        content: 'Researchers have documented temperature drops, electromagnetic anomalies, and unexplained movements during poltergeist cases. While some incidents have been exposed as hoaxes, others remain unexplained despite thorough investigation.',
      },
    ],
  },
  {
    id: 'gh-2',
    name: 'The Bell Witch',
    description: 'The malevolent spirit that haunted the Bell family',
    categoryId: 'ghosts',
    icon: '🔮',
    sections: [
      {
        title: 'Case Studies',
        content: 'From 1817-1821, the Bell family of Tennessee was tormented by an entity that spoke, moved objects, and physically attacked family members. The spirit, calling itself "Kate," claimed to be a witch. It allegedly caused the death of John Bell in 1820.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Theories range from genuine haunting to mass hysteria or fraud. Some suggest it was the spirit of Kate Batts, a neighbor who cursed the family. The entity demonstrated intelligence, engaging in conversations and predicting future events.',
      },
      {
        title: 'Scientific Investigation',
        content: 'The Bell Witch is one of the few paranormal cases investigated by a future U.S. President (Andrew Jackson). Contemporary accounts and family records document the events. The case remains one of America\'s most famous hauntings.',
      },
    ],
  },
  {
    id: 'gh-3',
    name: 'The Amityville Horror',
    description: 'The infamous haunted house on Long Island',
    categoryId: 'ghosts',
    icon: '🏚️',
    sections: [
      {
        title: 'Case Studies',
        content: 'In 1975, the Lutz family moved into a house where a mass murder had occurred the previous year. They reported paranormal phenomena including cold spots, foul odors, swarms of flies, and a demonic pig-like creature. They fled after 28 days.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Skeptics claim the haunting was a hoax created for financial gain. The Lutzes maintained their story until their deaths. Subsequent owners reported no paranormal activity. The case spawned numerous books and films.',
      },
      {
        title: 'Scientific Investigation',
        content: 'Paranormal investigators Ed and Lorraine Warren investigated the house and claimed it was genuinely haunted. Critics point to inconsistencies in the Lutzes\' accounts. The debate between believers and skeptics continues.',
      },
    ],
  },
  {
    id: 'gh-4',
    name: 'The Tower of London',
    description: 'One of the most haunted places in England',
    categoryId: 'ghosts',
    icon: '🏰',
    sections: [
      {
        title: 'Case Studies',
        content: 'The Tower has been the site of executions, murders, and torture for nearly 1,000 years. Anne Boleyn, executed in 1536, is frequently seen carrying her head. The Princes in the Tower, murdered in 1483, have been spotted in the Bloody Tower.',
      },
      {
        title: 'Explanations & Theories',
        content: 'The Tower\'s violent history provides context for reported hauntings. Guards and visitors have reported apparitions, cold spots, and unexplained sounds. Some attribute sightings to suggestion and the location\'s dark reputation.',
      },
      {
        title: 'Scientific Investigation',
        content: 'Paranormal researchers have conducted investigations using EMF detectors and thermal cameras. Historical records document centuries of ghost sightings. The Tower remains one of the most actively haunted locations in Britain.',
      },
    ],
  },
  {
    id: 'gh-5',
    name: 'The Winchester Mystery House',
    description: 'The bizarre mansion built to confuse spirits',
    categoryId: 'ghosts',
    icon: '🏛️',
    sections: [
      {
        title: 'Case Studies',
        content: 'Sarah Winchester, heiress to the Winchester rifle fortune, continuously built onto her mansion for 38 years (1884-1922). The house features stairs leading to nowhere, doors opening to walls, and secret passages. She believed it would appease spirits killed by Winchester rifles.',
      },
      {
        title: 'Explanations & Theories',
        content: 'A medium allegedly told Sarah she was cursed by spirits and must never stop building. The house\'s bizarre architecture was designed to confuse ghosts. Skeptics suggest Sarah suffered from mental illness or was simply eccentric.',
      },
      {
        title: 'Scientific Investigation',
        content: 'Visitors and staff report apparitions, footsteps, and cold spots throughout the 160-room mansion. Paranormal investigators have documented unexplained phenomena. The house is now a popular tourist attraction and historical landmark.',
      },
    ],
  },
];

export const getGhostById = (id: string): GhostTopic | undefined => {
  return ghostsData.find(ghost => ghost.id === id);
};

export const getGhostByName = (name: string): GhostTopic | undefined => {
  return ghostsData.find(ghost => ghost.name.toLowerCase() === name.toLowerCase());
};
