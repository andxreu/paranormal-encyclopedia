
import { categoryColors } from '@/constants/Colors';

export interface TopicSection {
  title: string;
  content: string;
}

export interface PsychicTopic {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  icon: string;
  sections: TopicSection[];
}

export const psychicData: PsychicTopic[] = [
  {
    id: 'ps-1',
    name: 'Telepathy',
    description: 'Mind-to-mind communication without physical means',
    categoryId: 'psychic',
    icon: '🧠',
    sections: [
      {
        title: 'Experiments & Research',
        content: 'The Ganzfeld experiment tests telepathy by isolating subjects from sensory input. The CIA\'s Stargate Project studied remote viewing and telepathy from 1978-1995. Rhine\'s ESP cards tested telepathic abilities using symbols. Results remain controversial with some showing statistical significance.',
      },
      {
        title: 'Skeptics\' Views',
        content: 'Critics attribute positive results to cold reading, confirmation bias, and statistical anomalies. James Randi offered $1 million to anyone proving psychic abilities under controlled conditions—never claimed. Skeptics argue that replication failures indicate telepathy doesn\'t exist.',
      },
      {
        title: 'Notable Cases',
        content: 'Twin studies show some pairs report telepathic connections. The Maimonides Dream Laboratory conducted experiments in the 1960s-70s with intriguing results. Rupert Sheldrake\'s telephone telepathy experiments showed above-chance success rates. Debate continues in parapsychology circles.',
      },
    ],
  },
  {
    id: 'ps-2',
    name: 'Remote Viewing',
    description: 'The ability to see distant locations psychically',
    categoryId: 'psychic',
    icon: '👁️',
    sections: [
      {
        title: 'Experiments & Research',
        content: 'The Stargate Project trained military personnel in remote viewing protocols. Viewers attempted to describe distant locations using only coordinates. Ingo Swann and Pat Price were among the most successful participants. The program was declassified in 1995.',
      },
      {
        title: 'Skeptics\' Views',
        content: 'The CIA concluded remote viewing showed no actionable intelligence value. Critics cite lack of replication and vague descriptions that could apply to many locations. Skeptics argue successes result from lucky guesses and retrofitting descriptions to targets.',
      },
      {
        title: 'Notable Cases',
        content: 'Pat Price allegedly described a secret Soviet facility with remarkable accuracy. Joe McMoneagle claimed to remote view Mars and Jupiter. The program\'s existence proves government interest, though effectiveness remains debated. Some viewers continue practicing commercially.',
      },
    ],
  },
  {
    id: 'ps-3',
    name: 'Precognition',
    description: 'Seeing events before they happen',
    categoryId: 'psychic',
    icon: '🔮',
    sections: [
      {
        title: 'Experiments & Research',
        content: 'Dean Radin\'s presentiment experiments show physiological responses before random stimuli. Daryl Bem\'s controversial studies suggested people could sense future events. Dream precognition has been studied extensively, with some subjects reporting accurate predictions.',
      },
      {
        title: 'Skeptics\' Views',
        content: 'Critics argue precognition violates causality and physics. Failed replications of Bem\'s studies cast doubt on results. Skeptics attribute apparent precognition to coincidence, false memories, and the tendency to remember hits while forgetting misses.',
      },
      {
        title: 'Notable Cases',
        content: 'Abraham Lincoln allegedly dreamed of his assassination. Many claimed to have premonitions before the Titanic disaster. The Aberfan disaster in Wales was preceded by reported precognitive dreams. Such cases are difficult to verify scientifically.',
      },
    ],
  },
  {
    id: 'ps-4',
    name: 'Psychokinesis',
    description: 'Moving objects with the power of the mind',
    categoryId: 'psychic',
    icon: '✨',
    sections: [
      {
        title: 'Experiments & Research',
        content: 'Princeton\'s PEAR lab studied micro-PK effects on random number generators for 28 years. Nina Kulagina was filmed allegedly moving objects with her mind. Spoon bending experiments with Uri Geller attracted scientific attention. Results remain controversial and difficult to replicate.',
      },
      {
        title: 'Skeptics\' Views',
        content: 'Magicians have replicated PK effects using sleight of hand. James Randi exposed Uri Geller\'s tricks on television. Statistical analyses of RNG experiments show effects too small to be practically significant. Critics argue all PK demonstrations involve fraud or misperception.',
      },
      {
        title: 'Notable Cases',
        content: 'Uri Geller became famous for bending spoons on television. Nina Kulagina\'s demonstrations were filmed by Soviet scientists. The Philip Experiment allegedly created a thoughtform through group concentration. Poltergeist cases sometimes involve apparent PK effects.',
      },
    ],
  },
  {
    id: 'ps-5',
    name: 'The Stargate Project',
    description: 'The CIA\'s secret psychic spy program',
    categoryId: 'psychic',
    icon: '🎖️',
    sections: [
      {
        title: 'Experiments & Research',
        content: 'From 1978-1995, the U.S. government spent $20 million studying psychic phenomena for intelligence gathering. Remote viewers attempted to locate hostages, describe enemy facilities, and predict events. The program involved multiple agencies including CIA, DIA, and Army Intelligence.',
      },
      {
        title: 'Skeptics\' Views',
        content: 'The CIA\'s final assessment concluded the program produced no actionable intelligence. Skeptics note the program was shut down after independent review. Critics argue any successes were due to conventional intelligence sources, not psychic abilities.',
      },
      {
        title: 'Notable Cases',
        content: 'Viewers allegedly located a downed Soviet bomber and described secret facilities. Joe McMoneagle received the Legion of Merit for his remote viewing work. Despite official closure, some claim similar programs continue in classified form. Declassified documents reveal extensive research.',
      },
    ],
  },
];

export const getPsychicById = (id: string): PsychicTopic | undefined => {
  return psychicData.find(psychic => psychic.id === id);
};

export const getPsychicByName = (name: string): PsychicTopic | undefined => {
  return psychicData.find(psychic => psychic.name.toLowerCase() === name.toLowerCase());
};
