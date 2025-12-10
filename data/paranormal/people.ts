
import { categoryColors } from '@/constants/Colors';

export interface TopicSection {
  title: string;
  content: string;
}

export interface PeopleTopic {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  icon: string;
  sections: TopicSection[];
}

export const peopleData: PeopleTopic[] = [
  {
    id: 'pe-1',
    name: 'Edgar Cayce',
    description: 'The sleeping prophet and medical clairvoyant',
    categoryId: 'people',
    icon: '😴',
    sections: [
      {
        title: 'Biography & Life',
        content: 'Edgar Cayce (1877-1945) was an American mystic who gave psychic readings while in a trance state. He provided over 14,000 readings on topics including health, past lives, and prophecy. Despite limited education, he discussed complex medical and metaphysical concepts.',
      },
      {
        title: 'Contributions & Legacy',
        content: 'Cayce\'s medical readings diagnosed illnesses and prescribed treatments, often successfully. He spoke of Atlantis, reincarnation, and future events. The Association for Research and Enlightenment preserves his readings. Many of his health remedies are still used today.',
      },
      {
        title: 'Controversies & Debates',
        content: 'Skeptics note many prophecies failed, including Earth changes predicted for the 1990s. His medical advice sometimes contradicted established medicine. Believers point to documented healing successes and accurate diagnoses. His readings remain studied by researchers and followers worldwide.',
      },
    ],
  },
  {
    id: 'pe-2',
    name: 'Nostradamus',
    description: 'The prophet who predicted the future',
    categoryId: 'people',
    icon: '📜',
    sections: [
      {
        title: 'Biography & Life',
        content: 'Michel de Nostredame (1503-1566) was a French physician and astrologer. He published "Les Prophéties" in 1555, containing 942 poetic quatrains allegedly predicting future events. He served as physician to King Charles IX of France.',
      },
      {
        title: 'Contributions & Legacy',
        content: 'Nostradamus\'s quatrains have been interpreted as predicting major historical events: the French Revolution, Napoleon, Hitler, 9/11, and more. His writings remain bestsellers centuries later. He\'s become synonymous with prophecy and prediction.',
      },
      {
        title: 'Controversies & Debates',
        content: 'Critics argue his quatrains are vague and can be retrofitted to any event. Translations vary widely, changing meanings. Skeptics note failed predictions and the lack of specific dates. Believers claim his symbolic language requires proper interpretation. The debate continues.',
      },
    ],
  },
  {
    id: 'pe-3',
    name: 'Rasputin',
    description: 'The mystic who influenced Russian royalty',
    categoryId: 'people',
    icon: '🧙',
    sections: [
      {
        title: 'Biography & Life',
        content: 'Grigori Rasputin (1869-1916) was a Russian mystic who gained influence over Tsar Nicholas II\'s family. He allegedly healed the Tsarevich\'s hemophilia through prayer. His wild lifestyle and political influence made him controversial and feared.',
      },
      {
        title: 'Contributions & Legacy',
        content: 'Rasputin\'s influence on the royal family during WWI contributed to the Russian Revolution. His reputation as a healer and mystic was legendary. His death became mythical—he survived poisoning, shooting, and beating before finally drowning.',
      },
      {
        title: 'Controversies & Debates',
        content: 'Historians debate whether Rasputin possessed genuine healing abilities or used hypnosis and suggestion. His political influence was likely exaggerated by enemies. His death has been embellished over time. He remains a symbol of mystical power and political intrigue.',
      },
    ],
  },
  {
    id: 'pe-4',
    name: 'John Dee',
    description: 'The occultist advisor to Queen Elizabeth I',
    categoryId: 'people',
    icon: '🔮',
    sections: [
      {
        title: 'Biography & Life',
        content: 'John Dee (1527-1608) was an English mathematician, astronomer, and occultist. He served as advisor to Queen Elizabeth I on matters scientific and mystical. With Edward Kelley, he developed Enochian magic, allegedly communicating with angels.',
      },
      {
        title: 'Contributions & Legacy',
        content: 'Dee\'s library was one of the largest in England. He contributed to navigation, mathematics, and astronomy. His Enochian system influenced modern ceremonial magic. The Monas Hieroglyphica symbol he created remains significant in occultism.',
      },
      {
        title: 'Controversies & Debates',
        content: 'Skeptics question whether Dee was deceived by Kelley, who may have fabricated angelic communications. His occult work overshadowed his legitimate scientific contributions. Modern magicians still use his Enochian system. He represents the Renaissance blend of science and mysticism.',
      },
    ],
  },
  {
    id: 'pe-5',
    name: 'The Count of St. Germain',
    description: 'The immortal alchemist and adventurer',
    categoryId: 'people',
    icon: '💎',
    sections: [
      {
        title: 'Biography & Life',
        content: 'The Count of St. Germain appeared in European high society in the 1700s. He claimed to be centuries old, never ate in public, and spoke numerous languages. He was a skilled musician, artist, and chemist. His true identity and origins remain unknown.',
      },
      {
        title: 'Contributions & Legacy',
        content: 'St. Germain advised European royalty and was involved in diplomatic affairs. He demonstrated knowledge of alchemy and gemstone creation. Witnesses claimed he looked the same over decades. Theosophists believe he was an Ascended Master still guiding humanity.',
      },
      {
        title: 'Controversies & Debates',
        content: 'Skeptics suggest he was a skilled con artist who fabricated his immortality claims. His wealth and knowledge could be explained by conventional means. However, consistent accounts from credible witnesses are difficult to dismiss. He remains one of history\'s most enigmatic figures.',
      },
    ],
  },
];

export const getPeopleById = (id: string): PeopleTopic | undefined => {
  return peopleData.find(people => people.id === id);
};

export const getPeopleByName = (name: string): PeopleTopic | undefined => {
  return peopleData.find(people => people.name.toLowerCase() === name.toLowerCase());
};
