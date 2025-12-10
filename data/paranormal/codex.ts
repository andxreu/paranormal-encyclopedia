
import { TopicSection } from './types';

export interface CodexEntry {
  id: string;
  name: string;
  description: string;
  category: string;
  sections: TopicSection[];
}

export const codexData: CodexEntry[] = [
  {
    id: 'cd-1',
    name: 'The Mandela Effect',
    description: 'When large groups of people remember events differently than they occurred',
    category: 'Psychological Phenomena',
    sections: [
      {
        title: 'What Is It?',
        content: 'The Mandela Effect refers to a phenomenon where a large group of people remember an event or detail differently from how it actually occurred. Named after Nelson Mandela, whom many people falsely remembered dying in prison in the 1980s.',
      },
      {
        title: 'Famous Examples',
        content: 'The Berenstain Bears (many remember "Berenstein"), "Luke, I am your father" (actually "No, I am your father"), the Monopoly Man\'s monocle (he never had one), and Curious George\'s tail (he never had one).',
      },
      {
        title: 'Theories',
        content: 'Explanations range from false memories and confabulation to parallel universes and timeline shifts. Some believe it\'s evidence of reality being altered or that we\'re living in a simulation.',
      },
    ],
  },
  {
    id: 'cd-2',
    name: 'Shadow People',
    description: 'Dark humanoid figures seen in peripheral vision',
    category: 'Paranormal Entities',
    sections: [
      {
        title: 'Description',
        content: 'Shadow people are dark, humanoid silhouettes typically seen in peripheral vision. They appear to move quickly and disappear when looked at directly. Some have glowing red eyes, while others are completely featureless.',
      },
      {
        title: 'Common Encounters',
        content: 'Most sightings occur at night or in dimly lit areas. Witnesses report feelings of dread, being watched, or paralysis. The "Hat Man" is a specific shadow person wearing a wide-brimmed hat, reported worldwide.',
      },
      {
        title: 'Explanations',
        content: 'Theories include sleep paralysis hallucinations, interdimensional beings, demons, time travelers, or manifestations of negative energy. Some researchers link them to electromagnetic fields.',
      },
    ],
  },
  {
    id: 'cd-3',
    name: 'The Simulation Hypothesis',
    description: 'The theory that reality is an artificial computer simulation',
    category: 'Metaphysical Theory',
    sections: [
      {
        title: 'The Argument',
        content: 'Philosopher Nick Bostrom proposed that if civilizations can create realistic simulations, and choose to do so, then we\'re almost certainly living in one. The odds favor simulated reality over base reality.',
      },
      {
        title: 'Evidence',
        content: 'Quantum mechanics shows reality behaves like a computer program - particles exist in superposition until observed. The universe has a speed limit (light speed) and smallest unit (Planck length), like pixels and frame rates.',
      },
      {
        title: 'Implications',
        content: 'If true, déjà vu could be glitches, the Mandela Effect could be patches, and paranormal phenomena could be bugs or admin interventions. Some physicists take this hypothesis seriously.',
      },
    ],
  },
  {
    id: 'cd-4',
    name: 'Astral Projection',
    description: 'The ability to separate consciousness from the physical body',
    category: 'Psychic Phenomena',
    sections: [
      {
        title: 'What Is It?',
        content: 'Astral projection is the claimed ability to separate one\'s consciousness or "astral body" from the physical body and travel through the astral plane. Practitioners report floating above their bodies and traveling to distant locations.',
      },
      {
        title: 'Techniques',
        content: 'Methods include deep meditation, lucid dreaming, sleep paralysis exploitation, and the "rope technique" of imagining climbing out of your body. Many report vibrations and a loud buzzing sound before separation.',
      },
      {
        title: 'Experiences',
        content: 'Travelers report visiting other dimensions, meeting spiritual entities, seeing the "silver cord" connecting them to their body, and gaining knowledge impossible to obtain normally. Skeptics attribute it to lucid dreaming.',
      },
    ],
  },
  {
    id: 'cd-5',
    name: 'The Akashic Records',
    description: 'A cosmic library containing all knowledge of past, present, and future',
    category: 'Esoteric Knowledge',
    sections: [
      {
        title: 'The Concept',
        content: 'The Akashic Records are described as a compendium of all universal events, thoughts, words, emotions, and intent ever to have occurred in the past, present, or future. They exist on the astral plane.',
      },
      {
        title: 'Accessing the Records',
        content: 'Mystics claim to access the records through deep meditation, astral projection, or with the help of spiritual guides. Edgar Cayce, the "Sleeping Prophet," claimed to access them during trance states.',
      },
      {
        title: 'Information Contained',
        content: 'The records supposedly contain every soul\'s journey through all lifetimes, the true history of humanity, future possibilities, and answers to any question. Some believe they\'re the source of all psychic knowledge.',
      },
    ],
  },
  {
    id: 'cd-6',
    name: 'Tulpas',
    description: 'Thought-forms created through intense concentration and belief',
    category: 'Paranormal Creation',
    sections: [
      {
        title: 'Origin',
        content: 'Tulpas originate from Tibetan Buddhism, where monks create sentient beings through meditation and visualization. Alexandra David-Néel claimed to have created a tulpa monk that became autonomous and malevolent.',
      },
      {
        title: 'Modern Tulpamancy',
        content: 'Online communities practice creating tulpas as mental companions. Practitioners report their tulpas developing independent personalities, opinions, and the ability to control the body (switching).',
      },
      {
        title: 'The Danger',
        content: 'Some tulpas reportedly become hostile or refuse to be dismissed. The Slender Man stabbing case raised questions about whether collective belief can manifest thought-forms into reality.',
      },
    ],
  },
  {
    id: 'cd-7',
    name: 'The Hollow Earth Theory',
    description: 'The belief that Earth contains massive habitable spaces within',
    category: 'Alternative History',
    sections: [
      {
        title: 'The Theory',
        content: 'Proponents believe Earth is hollow with openings at the poles, containing an inner sun and advanced civilizations. Admiral Byrd allegedly discovered a lush paradise beyond the North Pole in 1947.',
      },
      {
        title: 'Agartha and Shambhala',
        content: 'Legends speak of Agartha, an underground kingdom inhabited by advanced beings. Shambhala, a mystical city, is said to be the capital. Some believe UFOs originate from these inner-Earth civilizations.',
      },
      {
        title: 'Evidence Claimed',
        content: 'Supporters point to unexplained seismic readings, warm water at the poles, strange compass behavior, and satellite images showing holes at the poles (actually image artifacts).',
      },
    ],
  },
  {
    id: 'cd-8',
    name: 'Synchronicity',
    description: 'Meaningful coincidences that seem too perfect to be random',
    category: 'Psychological Phenomena',
    sections: [
      {
        title: 'Carl Jung\'s Concept',
        content: 'Psychologist Carl Jung defined synchronicity as "meaningful coincidences" that occur with no causal relationship yet seem significantly related. He believed they revealed a deeper order to reality.',
      },
      {
        title: 'Examples',
        content: 'Thinking of someone right before they call, repeatedly seeing the same numbers (11:11), or encountering the same symbol in unrelated contexts. Jung experienced a scarab beetle appearing during a therapy session about scarabs.',
      },
      {
        title: 'Explanations',
        content: 'Theories include the collective unconscious, quantum entanglement of consciousness, confirmation bias, or evidence that consciousness affects reality. Some see it as messages from the universe.',
      },
    ],
  },
  {
    id: 'cd-9',
    name: 'The Backrooms',
    description: 'An endless maze of liminal spaces beyond reality',
    category: 'Modern Mythology',
    sections: [
      {
        title: 'The Concept',
        content: 'The Backrooms are described as an infinite maze of empty office spaces, fluorescent lights, and yellow wallpaper. People "noclip" out of reality and become trapped in this endless, monotonous dimension.',
      },
      {
        title: 'The Levels',
        content: 'The Backrooms have multiple levels, each more dangerous than the last. Level 0 is the yellow office maze. Deeper levels contain entities, darkness, and reality-bending phenomena. Few escape.',
      },
      {
        title: 'Cultural Impact',
        content: 'Starting as a creepypasta, the Backrooms became a collaborative horror project. Thousands have contributed to the lore, creating a modern mythology about liminal spaces and existential dread.',
      },
    ],
  },
  {
    id: 'cd-10',
    name: 'Egregores',
    description: 'Collective thought-forms created by groups',
    category: 'Occult Phenomena',
    sections: [
      {
        title: 'Definition',
        content: 'An egregore is an autonomous psychic entity created by the collective thoughts, emotions, and beliefs of a group. It feeds on the group\'s energy and can influence members\' thoughts and actions.',
      },
      {
        title: 'Formation',
        content: 'Egregores form when groups share intense beliefs, rituals, or emotions. Corporations, nations, religions, and online communities can create egregores. The more energy fed to it, the more powerful it becomes.',
      },
      {
        title: 'Examples',
        content: 'Some believe corporate brands, political movements, and internet memes are egregores. The "Pepe the Frog" phenomenon is cited as a modern egregore that took on a life of its own.',
      },
    ],
  },
  {
    id: 'cd-11',
    name: 'The Phantom Time Hypothesis',
    description: 'The theory that 297 years of history were fabricated',
    category: 'Alternative History',
    sections: [
      {
        title: 'The Claim',
        content: 'Proposed by Heribert Illig, this hypothesis suggests the years 614-911 AD never existed. The Holy Roman Emperor and the Pope allegedly added these years to place themselves in the year 1000 AD.',
      },
      {
        title: 'Evidence Cited',
        content: 'Proponents point to a lack of archaeological evidence from this period, inconsistencies in the Julian calendar, and the sudden appearance of Romanesque architecture. Charlemagne\'s existence is questioned.',
      },
      {
        title: 'Debunking',
        content: 'Historians reject this theory, citing astronomical records, Islamic and Chinese historical documents, and dendrochronology (tree ring dating) that confirm the timeline. It remains a fringe theory.',
      },
    ],
  },
  {
    id: 'cd-12',
    name: 'Morphic Resonance',
    description: 'The theory that memory is inherent in nature',
    category: 'Fringe Science',
    sections: [
      {
        title: 'Rupert Sheldrake\'s Theory',
        content: 'Biologist Rupert Sheldrake proposes that natural systems inherit a collective memory from previous similar systems. This "morphic field" allows organisms to learn from their species\' past experiences.',
      },
      {
        title: 'Evidence',
        content: 'Sheldrake cites experiments where rats learn mazes faster if other rats have learned them before, even in different locations. Crystals form more easily after being created once. Dogs know when owners are coming home.',
      },
      {
        title: 'Implications',
        content: 'If true, it would explain instincts, telepathy, and collective consciousness. It suggests memory isn\'t stored in the brain but accessed from a universal field. Mainstream science remains skeptical.',
      },
    ],
  },
  {
    id: 'cd-13',
    name: 'The Fermi Paradox',
    description: 'If aliens exist, where is everybody?',
    category: 'Cosmic Mystery',
    sections: [
      {
        title: 'The Paradox',
        content: 'Given the billions of stars and planets in the universe, intelligent life should be common. Yet we\'ve found no evidence of aliens. This contradiction between high probability and lack of evidence is the Fermi Paradox.',
      },
      {
        title: 'Possible Solutions',
        content: 'The Great Filter: civilizations destroy themselves before achieving interstellar travel. The Zoo Hypothesis: aliens are watching but not interfering. The Dark Forest: civilizations hide to avoid predators.',
      },
      {
        title: 'Disturbing Implications',
        content: 'If the Great Filter is ahead of us, humanity may be doomed. If it\'s behind us, we may be alone. If aliens exist but hide, what are they afraid of? The silence may be more terrifying than contact.',
      },
    ],
  },
  {
    id: 'cd-14',
    name: 'Quantum Immortality',
    description: 'The theory that consciousness never experiences death',
    category: 'Quantum Theory',
    sections: [
      {
        title: 'The Concept',
        content: 'Based on the Many-Worlds Interpretation of quantum mechanics, quantum immortality suggests that consciousness always survives in at least one branch of reality. You can never experience your own death.',
      },
      {
        title: 'The Thought Experiment',
        content: 'Imagine a quantum suicide machine that kills you if a quantum event occurs one way, but spares you if it occurs another. From your perspective, you\'ll always survive, even if you die in other timelines.',
      },
      {
        title: 'Implications',
        content: 'This could explain near-death experiences, the Mandela Effect (jumping timelines), and why some people survive impossible odds. It suggests we\'re constantly dying in parallel universes.',
      },
    ],
  },
  {
    id: 'cd-15',
    name: 'The Stoned Ape Theory',
    description: 'Did psychedelic mushrooms accelerate human evolution?',
    category: 'Alternative Science',
    sections: [
      {
        title: 'Terence McKenna\'s Hypothesis',
        content: 'Ethnobotanist Terence McKenna proposed that early humans consuming psilocybin mushrooms led to increased brain activity, language development, and the rapid evolution of human consciousness.',
      },
      {
        title: 'The Evidence',
        content: 'Psilocybin increases visual acuity, pattern recognition, and neural connectivity. Ancient cave art suggests shamanic mushroom use. The rapid development of human consciousness 100,000 years ago remains unexplained.',
      },
      {
        title: 'Controversy',
        content: 'While mainstream science dismisses this theory, recent studies show psilocybin creates new neural pathways and may have therapeutic benefits. The role of psychedelics in human evolution remains debated.',
      },
    ],
  },
];

export const getCodexEntryById = (id: string): CodexEntry | undefined => {
  return codexData.find(entry => entry.id === id);
};

export const getCodexEntryByName = (name: string): CodexEntry | undefined => {
  return codexData.find(entry => 
    entry.name.toLowerCase() === name.toLowerCase()
  );
};
