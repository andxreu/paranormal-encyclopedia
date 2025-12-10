
import { categoryColors } from '@/constants/Colors';

export interface TopicSection {
  title: string;
  content: string;
}

export interface FolkloreTopic {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  icon: string;
  sections: TopicSection[];
}

export const folkloreData: FolkloreTopic[] = [
  {
    id: 'fl-1',
    name: 'Fairies',
    description: 'The magical beings of Celtic folklore',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Celtic fairies range from tiny winged sprites to human-sized beings. Irish sidhe are noble fairy folk living in mounds. Scottish brownies help with household chores. Welsh Tylwyth Teg are beautiful but dangerous. Each culture has unique fairy traditions and rules for interaction.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Fairies may derive from pre-Christian nature spirits or memories of ancient peoples. Medieval Christianity demonized them as fallen angels. Victorian era romanticized them as tiny, benevolent creatures. Modern fantasy continues evolving fairy mythology.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Never thank fairies or accept their food—you\'ll be trapped in their realm. Iron repels them. Fairy rings (mushroom circles) are gateways to their world. Changelings were fairy children swapped for human babies. Many rural communities still respect fairy forts.',
      },
    ],
  },
  {
    id: 'fl-2',
    name: 'Vampires',
    description: 'The immortal blood-drinking creatures of the night',
    categoryId: 'folklore',
    icon: '🧛',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Vampire legends exist worldwide with different characteristics. European vampires fear garlic, crosses, and sunlight. Chinese jiangshi are hopping corpses. Malaysian penanggalan are flying heads with trailing organs. Slavic vampires could appear as butterflies or animals.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Vampire myths may stem from misunderstood decomposition, porphyria disease, or rabies. The 1897 novel Dracula by Bram Stoker codified modern vampire mythology. Real historical figures like Vlad the Impaler inspired vampire legends.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Traditional protections include garlic, holy water, and wooden stakes. Vampires cannot enter homes uninvited. They cast no reflection and fear running water. Burial practices evolved to prevent vampires: staking corpses, placing stones in mouths, or burying at crossroads.',
      },
    ],
  },
  {
    id: 'fl-3',
    name: 'Werewolves',
    description: 'Humans who transform into wolves',
    categoryId: 'folklore',
    icon: '🐺',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Lycanthropy appears in cultures worldwide. European werewolves transform during full moons. Native American skinwalkers are witches who become animals. African and Asian cultures have similar shape-shifting traditions. Some transformations are voluntary, others cursed.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Werewolf legends date to ancient Greece and Rome. Medieval Europe saw werewolf trials alongside witch hunts. Clinical lycanthropy is a rare psychiatric condition where people believe they\'re transforming. The full moon association is relatively modern.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Silver bullets are the traditional cure. Wolfsbane plant repels werewolves. Transformation triggers include full moons, curses, or wearing wolf pelts. Some legends say werewolves retain human intelligence, others become mindless beasts. The curse often passes through bites.',
      },
    ],
  },
  {
    id: 'fl-4',
    name: 'Dragons',
    description: 'The legendary fire-breathing serpents',
    categoryId: 'folklore',
    icon: '🐉',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Western dragons are typically evil, hoarding treasure and breathing fire. Eastern dragons are benevolent, associated with water and wisdom. They bring rain and good fortune. Norse dragons like Fafnir guard treasure. Welsh dragons symbolize national identity.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Dragon myths may stem from dinosaur fossil discoveries or exaggerated reptile encounters. They appear in Mesopotamian, Greek, Chinese, and Norse mythology. Medieval bestiaries treated dragons as real creatures. Saint George\'s dragon-slaying became legendary.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Dragons possess immense power, intelligence, and magical abilities. They guard treasures and sacred places. Dragon blood grants invincibility or understanding of animals. Their scales are impenetrable armor. Many cultures see dragons as primordial forces of nature.',
      },
    ],
  },
  {
    id: 'fl-5',
    name: 'The Kraken',
    description: 'The giant sea monster of Norse legend',
    categoryId: 'folklore',
    icon: '🦑',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Norse legends describe the Kraken as a massive cephalopod capable of dragging ships underwater. Scandinavian sailors feared it more than storms. Similar creatures appear in other maritime cultures: the Japanese Akkorokamui, Greek Scylla, and various sea serpents.',
      },
      {
        title: 'Origins & Evolution',
        content: 'The Kraken likely originated from sightings of giant squid, which can reach 40+ feet. Carl Linnaeus included it in his 1735 taxonomy. The creature became popular in literature and film. Real giant squid weren\'t photographed alive until 2004.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'The Kraken was said to be so large it was mistaken for an island. Its movements created whirlpools and maelstroms. Fishermen believed good catches meant the Kraken was below, stirring up fish. The creature represented the ocean\'s terrifying unknown depths.',
      },
    ],
  },
];

export const getFolkloreById = (id: string): FolkloreTopic | undefined => {
  return folkloreData.find(folklore => folklore.id === id);
};

export const getFolkloreByName = (name: string): FolkloreTopic | undefined => {
  return folkloreData.find(folklore => folklore.name.toLowerCase() === name.toLowerCase());
};
