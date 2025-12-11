// data/paranormal/people.ts
/**
 * People Category Data
 * Famous mystics, prophets, and paranormal figures throughout history
 * 
 * Includes: Edgar Cayce, Nostradamus, Rasputin, John Dee, Count of St. Germain
 */

import { categoryColors } from '@/constants/Colors';
import type { TopicSection, CategoryId } from './types';

export interface PeopleTopic {
  id: string;
  name: string;
  description: string;
  categoryId: CategoryId;
  icon: string;
  sections: TopicSection[];
}

export const peopleData: readonly PeopleTopic[] = [
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
  {
    id: 'pe-6',
    name: 'Baba Vanga Predictions',
    description: 'The blind Bulgarian mystic famed for her prophecies',
    categoryId: 'people',
    icon: '🧙',
    sections: [
      {
        title: 'Biography & Life',
        content: 'Vangelia Pandeva Dimitrova (1911–1996), known as Baba Vanga, was a blind mystic from Bulgaria. After losing her sight in a childhood storm, she claimed to receive visions and insights about people, world events, and future disasters. Pilgrims traveled from across Eastern Europe to seek her guidance.',
      },
      {
        title: 'Prophecies & Claims',
        content: 'Attributed predictions include the sinking of the Kursk submarine, the Chernobyl disaster, and broad references to global unrest and technological change. Many of her prophecies are phrased symbolically or retroactively translated, making them highly interpretive and contested.',
      },
      {
        title: 'Skepticism & Legacy',
        content: 'Critics argue that most predictions are vague, altered in retelling, or assigned after the fact. Supporters cite specific hits and personal readings they believe were uncannily accurate. Baba Vanga remains a cultural icon in the Balkans and a recurring figure in modern prophecy lore.',
      },
    ],
  },
  {
    id: 'pe-7',
    name: 'Bob Lazar – Whistleblower',
    description: 'The controversial figure who claimed to work on reverse-engineered UFOs',
    categoryId: 'people',
    icon: '🧙',
    sections: [
      {
        title: 'Background & Claims',
        content: 'Bob Lazar came to prominence in 1989 claiming he worked at a secret site known as S-4 near Area 51, where he allegedly helped reverse-engineer exotic craft of non-human origin. He described gravity-manipulating propulsion systems powered by a mysterious element.',
      },
      {
        title: 'Impact on UFO Lore',
        content: 'His interviews helped cement Area 51 in public imagination and popularized concepts like element-based alien fuel and hangars carved into desert hills. Many details from his story shaped later UFO conspiracy narratives and media depictions of black projects.',
      },
      {
        title: 'Controversies & Doubts',
        content: 'Skeptics point to missing or unverifiable academic records and inconsistencies in his story. Supporters argue that erasing records would be expected in a coverup. Decades later, Lazar remains a polarizing figure—either a key insider or one of UFOlogy’s most elaborate fabricators.',
      },
    ],
  },
  {
    id: 'pe-8',
    name: 'Brother Dismas Ghost Monk',
    description: 'A spectral monk said to guide lost travelers and penitents',
    categoryId: 'people',
    icon: '🧙',
    sections: [
      {
        title: 'Legend & Identity',
        content: 'Brother Dismas is said to have been a monk who died while attempting to aid plague victims. In the centuries since, his robed figure reportedly appears on foggy roads near ruined monasteries, offering wordless guidance to those in danger or despair.',
      },
      {
        title: 'Reported Encounters',
        content: 'Witnesses describe a hooded monk with a faint inner glow, visible lantern, or rosary, who leads them away from cliffs, bandits, or storms before vanishing. Some claim to later discover records of a Brother Dismas who perished in service to the sick.',
      },
      {
        title: 'Interpretations & Theories',
        content: 'Believers view him as a classic “helping ghost,” a soul bound to service beyond death. Skeptics argue that the story is a traveling legend mapped onto different ruins over time. The Dismas archetype blends Christian sainthood with classic European ghost-monk lore.',
      },
    ],
  },
  {
    id: 'pe-9',
    name: 'Charles Fort – Collector',
    description: 'The chronicler of anomalies who inspired modern Fortean studies',
    categoryId: 'people',
    icon: '🧙',
    sections: [
      {
        title: 'Biography & Life',
        content: 'Charles Fort (1874–1932) was an American researcher who obsessively collected reports of anomalous events—strange rains, mysterious lights, odd creatures, and impossible coincidences. He spent years in libraries, copying accounts into notebooks.',
      },
      {
        title: 'Contributions & Legacy',
        content: 'His books, including “The Book of the Damned,” presented these anomalies as data rejected by mainstream science. Rather than offering firm conclusions, Fort emphasized the weirdness itself, inspiring the term “Fortean” for unexplained phenomena research.',
      },
      {
        title: 'Skepticism & Influence',
        content: 'Fort’s style was sarcastic, playful, and speculative. Critics say he cherry-picked cases and favored mystery over rigor. Supporters see him as an early champion of pattern-spotting across disparate reports, a proto-archivist for the paranormal and bizarre.',
      },
    ],
  },
  {
    id: 'pe-10',
    name: 'Charles Walton Murder',
    description: 'A rural English murder case steeped in witchcraft rumors',
    categoryId: 'people',
    icon: '🧙',
    sections: [
      {
        title: 'Case Overview',
        content: 'In 1945, farm laborer Charles Walton was found murdered near Lower Quinton, England—stabbed with his own pitchfork and slashed with a billhook. The brutal scene sparked whispers of ritual killing and witchcraft in the surrounding countryside.',
      },
      {
        title: 'Occult Associations',
        content: 'Local stories tied the case to ancient folk magic, animal sacrifice, and fears of a “cursed” hill. Some believed Walton himself possessed uncanny abilities or that he had angered practitioners of rural magic.',
      },
      {
        title: 'Unsolved Mystery',
        content: 'Despite investigation by Scotland Yard, the crime remains unsolved. Official files emphasize human motives, while folklore frames it as a modern witchcraft murder. Walton’s death lives on at the intersection of true crime and occult legend.',
      },
    ],
  },
  {
    id: 'pe-11',
    name: 'Colorado Time-Loss Woman',
    description: 'An anonymous driver who allegedly skipped hours on a lonely highway',
    categoryId: 'people',
    icon: '🧙',
    sections: [
      {
        title: 'Incident Summary',
        content: 'An often-retold case describes a woman driving a familiar Colorado route at night who suddenly found herself many miles down the road with several hours missing from her memory. Her fuel gauge and odometer readings did not match the time she believed had passed.',
      },
      {
        title: 'Physical & Psychological Effects',
        content: 'Afterward, she reported nosebleeds, vivid dreams of bright lights, and a lingering sense of displacement. Hypnosis sessions (according to some versions) produced fragmented images of a roadside stop and shadowy figures.',
      },
      {
        title: 'Theories & Interpretations',
        content: 'Explanations range from micro-sleep episodes and highway hypnosis to alien abduction and literal time slip. With no verifiable identity or official documentation, the Colorado Time-Loss Woman occupies a liminal space between folklore, abduction lore, and urban legend.',
      },
    ],
  },
  {
    id: 'pe-12',
    name: 'Daniel Dunglas Home Levitation',
    description: 'The Victorian medium famed for alleged levitations and psychokinesis',
    categoryId: 'people',
    icon: '🧙',
    sections: [
      {
        title: 'Biography & Career',
        content: 'Daniel Dunglas Home (1833–1886) was a Scottish-born medium who became famous across Europe for séances involving levitations, spirit hands, and moving objects. Unlike many contemporaries, he rarely charged fees, enhancing his reputation for sincerity.',
      },
      {
        title: 'Famous Levitation Accounts',
        content: 'Witnesses, including nobles and scientists, claimed to see Home float above tables and even out one third-story window and in through another. These events were allegedly observed in good light and at close range, baffling many present.',
      },
      {
        title: 'Skepticism & Debate',
        content: 'Magicians and skeptics suggest clever stagecraft, collusion, or misperception. Supporters note that Home was never conclusively exposed as a fraud despite intense scrutiny. His feats remain central to debates about physical mediumship.',
      },
    ],
  },
  {
    id: 'pe-13',
    name: 'Dr. Yara Aktar',
    description: 'A researcher rumored to map hauntings as if they were a contagion',
    categoryId: 'people',
    icon: '🧙',
    sections: [
      {
        title: 'Profile & Rumors',
        content: 'Dr. Yara Aktar is described in paranormal circles as an epidemiologist-turned-investigator who treats hauntings like outbreaks—tracking “index cases,” clusters, and transmission patterns across regions and generations.',
      },
      {
        title: 'Methods & Cases',
        content: 'According to scattered reports, she combines field interviews, environmental monitoring, and statistical modeling, building maps where ghost sightings spread along bloodlines, river systems, or ancient trade routes rather than random locations.',
      },
      {
        title: 'Status & Mystery',
        content: 'No formal publications under her name are widely known, leading some to suspect a pseudonym used in classified work or a composite figure created by investigators. Whether real or mythic, “Dr. Aktar” embodies a scientific approach to the paranormal that treats spirits like patterns waiting to be graphed.',
      },
    ],
  },
  {
    id: 'pe-14',
    name: 'Evelyn Harlow Dreams',
    description: 'A woman whose recurring dreams allegedly predicted local tragedies',
    categoryId: 'people',
    icon: '🧙',
    sections: [
      {
        title: 'Life & Claims',
        content: 'Evelyn Harlow, a small-town schoolteacher in mid-20th-century lore, reportedly suffered vivid dreams showing fires, accidents, and drownings in symbolic detail days before they occurred. Her journals, kept privately, later became the basis of regional legends.',
      },
      {
        title: 'Documented Episodes',
        content: 'Stories include dreams of smoke-filled hallways prior to a real electrical fire at a nearby boarding house, and visions of overturned rowboats before an actual lake accident. Community members later claimed she had “warned” them, though often in cryptic terms.',
      },
      {
        title: 'Skeptical Views',
        content: 'Critics note that many people have disturbing dreams and only the “hits” are remembered. They argue that journals and memories may have been edited after the fact. To believers, Evelyn Harlow stands as an example of prophetic dreaming in a modern setting.',
      },
    ],
  },
  {
    id: 'pe-15',
    name: 'Fox Sisters Spiritualism',
    description: 'The sisters whose rappings helped launch the Spiritualist movement',
    categoryId: 'people',
    icon: '🧙',
    sections: [
      {
        title: 'Origins of the Rappings',
        content: 'In 1848, sisters Maggie and Kate Fox of Hydesville, New York, claimed to communicate with a murdered peddler’s spirit through coded knocks. Their demonstrations of “spirit rappings” quickly drew crowds and newspaper coverage.',
      },
      {
        title: 'Rise of Spiritualism',
        content: 'The Fox sisters became celebrities, holding séances in which spirits answered questions with taps and knocks. Their fame helped ignite the Spiritualist movement, which blended séance culture with ideas of afterlife communication and mediumship across America and Europe.',
      },
      {
        title: 'Confession & Aftermath',
        content: 'Years later, one sister publicly confessed that the rappings were produced by toe and joint cracking—then partially retracted the confession. Spiritualists often downplay the fraud claims, while skeptics see the sisters as proof that powerful movements can begin with simple stage tricks.',
      },
    ],
  },
  {
    id: 'pe-16',
    name: 'Jacques Bergier Occult',
    description: 'The chemist, spy, and mystic who bridged science and esoterica',
    categoryId: 'people',
    icon: '🧙',
    sections: [
      {
        title: 'Biography & Life',
        content: 'Jacques Bergier (1912–1978) was a French chemical engineer, resistance fighter, and writer. A polymath with ties to espionage and occult circles, he moved effortlessly between laboratories, intelligence briefings, and metaphysical speculation.',
      },
      {
        title: 'Contributions & Legacy',
        content: 'Co-author of “The Morning of the Magicians,” Bergier helped spark the field of “fantastic realism,” blending ancient mysteries with futuristic science. He explored alchemy, secret societies, and anomalous knowledge, influencing generations of fringe researchers.',
      },
      {
        title: 'Controversies & Debates',
        content: 'Scholars argue that Bergier blurred fact with myth, mixing unverifiable claims with documented history. Fans see him as a visionary who dared to connect hidden threads; critics view him as too credulous. His eclectic legacy still inspires modern esoterica.',
      },
    ],
  },
  {
    id: 'pe-17',
    name: 'John A. Keel',
    description: 'The investigator behind Mothman and ultraterrestrial theories',
    categoryId: 'people',
    icon: '🧙',
    sections: [
      {
        title: 'Biography & Life',
        content: 'John Alva Keel (1930–2009) was an American journalist and UFO investigator best known for “The Mothman Prophecies.” His work blended reportage with speculation about non-human intelligences interacting with humanity.',
      },
      {
        title: 'Contributions & Legacy',
        content: 'Keel introduced the idea of “ultraterrestrials,” beings from parallel realms rather than distant planets. His research into Mothman sightings, Men in Black, and window areas shaped modern paranormal studies and pop culture.',
      },
      {
        title: 'Controversies & Debates',
        content: 'Some accuse Keel of sensationalism or relying on unverified witness claims. Others see him as a pioneer warning that paranormal encounters may reflect a deeper reality. His narrative style continues to resonate in UFO and cryptid communities.',
      },
    ],
  },
  {
    id: 'pe-18',
    name: 'Karl Edvard Wind Walker',
    description: 'A Sámi wanderer famed for weather lore and uncanny intuition',
    categoryId: 'people',
    icon: '🧙',
    sections: [
      {
        title: 'Biography & Identity',
        content: 'Wind Walker is a semi-legendary figure said to have lived among Sámi herders in the 19th century. Tales describe him as a healer, tracker, and seer with an extraordinary talent for predicting storms and natural dangers.',
      },
      {
        title: 'Strange Abilities',
        content: 'Stories claim he could sense approaching blizzards days before signs appeared, locate lost travelers, and calm injured animals through quiet humming chants. Some accounts attribute his intuition to ancestral spirits or shamanic training.',
      },
      {
        title: 'Folklore or Reality?',
        content: 'Scholars debate whether he was a real person or a composite of several Sámi wise men. Regardless, Wind Walker remains a symbol of deep intuition and harmony with harsh northern landscapes.',
      },
    ],
  },
  {
    id: 'pe-19',
    name: 'Linda Napolitano Abduction',
    description: 'One of the most controversial modern abduction cases',
    categoryId: 'people',
    icon: '🧙',
    sections: [
      {
        title: 'Incident Summary',
        content: 'In 1989, Linda Napolitano claimed she was abducted from her Manhattan apartment by beings who levitated her through a window and into a craft. The account gained traction due to alleged witnesses, including security officers.',
      },
      {
        title: 'Supporting Testimony',
        content: 'Researcher Budd Hopkins published correspondence from witnesses describing a glowing craft near the Brooklyn Bridge. Some claimed high-level political figures also saw the event, escalating the case’s profile.',
      },
      {
        title: 'Debates & Criticism',
        content: 'Skeptics point to anonymous sources, inconsistent timelines, and psychological explanations. Believers cite the number of independent testimonies as compelling. The case remains a cornerstone—divisive but iconic—in UFO abduction lore.',
      },
    ],
  },
  {
    id: 'pe-20',
    name: 'Missing Astronomer – Chile',
    description: 'A Chilean stargazer who vanished after claiming a cosmic message',
    categoryId: 'people',
    icon: '🧙',
    sections: [
      {
        title: 'Disappearance',
        content: 'A local astronomer in northern Chile allegedly disappeared after telling friends he intercepted an unusual radio pattern resembling structured communication. His abandoned equipment was found perfectly arranged at his hillside observatory.',
      },
      {
        title: 'Clues & Accounts',
        content: 'Neighbors reported bright lights in the sky that night. His notebook contained references to “encoded pulses” and “reply expected.” Authorities found no evidence of foul play, and he was declared missing.',
      },
      {
        title: 'Interpretations',
        content: 'Some view this as a cautionary tale or urban legend; others believe he stumbled upon something he should not have. In UFO circles, the case remains one of Chile’s most whispered mysteries.',
      },
    ],
  },
  {
    id: 'pe-21',
    name: 'Monk Bilocation – Spain',
    description: 'A monk seen in two places at once during the 17th century',
    categoryId: 'people',
    icon: '🧙',
    sections: [
      {
        title: 'Reported Phenomenon',
        content: 'Accounts describe a Spanish monk who preached in two distant monasteries on the same day, with monks at both swearing he never left their presence. His bilocation episodes were recorded in ecclesiastical diaries.',
      },
      {
        title: 'Witness Statements',
        content: 'Descriptions emphasize identical speech, gestures, and clothing. Some stated the second “copy” faded like mist after delivering his sermon.',
      },
      {
        title: 'Interpretations',
        content: 'The Church considered bilocation possible for saints; skeptics argue transcription errors, mistaken identity, or embellishment. The story remains a classic example of religious paranormal mystery.',
      },
    ],
  },
  {
    id: 'pe-22',
    name: 'Overtoun Bridge Chronicler',
    description: 'A writer obsessed with the dog-jumping mystery of Overtoun Bridge',
    categoryId: 'people',
    icon: '🧙',
    sections: [
      {
        title: 'Background',
        content: 'Overtoun Bridge in Scotland is known for dogs inexplicably leaping to their deaths. The chronicler is an anonymous researcher who has documented patterns, interviews, and possible causes—natural and supernatural.',
      },
      {
        title: 'Investigations',
        content: 'He cataloged wind patterns, scent trails, acoustic anomalies, and historical folklore suggesting the bridge may be a liminal site. His writings brought global attention to the phenomenon.',
      },
      {
        title: 'Ongoing Mystery',
        content: 'Despite exhaustive work, no single explanation fully fits. The chronicler himself became a figure of intrigue, rumored to be living near the bridge to continue observations.',
      },
    ],
  },
  {
    id: 'pe-23',
    name: 'Pam Reynolds NDE',
    description: 'A near-death experience often cited as evidence of consciousness beyond the brain',
    categoryId: 'people',
    icon: '🧙',
    sections: [
      {
        title: 'Medical Context',
        content: 'Pam Reynolds underwent a rare operation requiring hypothermic cardiac arrest. During the surgery, she later reported detailed perceptions despite having no measurable brain activity.',
      },
      {
        title: 'Experience Report',
        content: 'She described floating above her body, witnessing tools and conversations, then moving through a tunnel toward deceased relatives before being pulled back.',
      },
      {
        title: 'Scientific Debate',
        content: 'Critics argue that residual brain activity or anesthesia effects could explain parts of the experience. Supporters consider her case one of the strongest pieces of evidence for NDE phenomena.',
      },
    ],
  },
  {
    id: 'pe-24',
    name: 'Psychic Cartographer',
    description: 'An individual who claimed to map energy lines and spirit paths',
    categoryId: 'people',
    icon: '🧙',
    sections: [
      {
        title: 'Profile',
        content: 'Known only by initials in surviving writings, the Psychic Cartographer created maps allegedly showing ley lines, “spirit rivers,” and hotspots of paranormal activity across continents.',
      },
      {
        title: 'Methods',
        content: 'They used pendulums, trance states, and automatic drawing to produce intricate charts. Some locations mapped by the cartographer later became known for hauntings and UFO sightings.',
      },
      {
        title: 'Legacy',
        content: 'Skeptics view the maps as imaginative art, while occultists study them as proto-geomantic diagrams. Original manuscripts circulate quietly among collectors.',
      },
    ],
  },
  {
    id: 'pe-25',
    name: 'Rania Johnson Mirror Messages',
    description: 'A woman who reported receiving writings from an unseen presence on reflective surfaces',
    categoryId: 'people',
    icon: '🧙',
    sections: [
      {
        title: 'Phenomenon Description',
        content: 'Rania Johnson claimed that fogged mirrors, windows, and even phone screens would reveal short messages addressed to her—warnings, riddles, or emotional statements appearing for seconds before fading.',
      },
      {
        title: 'Documentation & Patterns',
        content: 'She kept photographs and a journal cataloging the appearances. Messages often coincided with stressful events or major decisions in her life, leading her to believe the presence was protective.',
      },
      {
        title: 'Possible Explanations',
        content: 'Psychologists cite pareidolia, condensation patterns, and subconscious writing. Paranormal investigators consider it a form of mediumship or latent telekinetic imprinting.',
      },
    ],
  },
  {
    id: 'pe-26',
    name: 'Rose Mackenberg – Investigator',
    description: 'The woman who exposed fraudulent mediums during the Spiritualist era',
    categoryId: 'people',
    icon: '🧙',
    sections: [
      {
        title: 'Biography & Life',
        content: 'Rose Mackenberg (1892–1968) worked as a detective for Harry Houdini, traveling across the United States to infiltrate séances, spiritualist churches, and medium gatherings. She attended thousands of sittings and became one of the era’s leading debunkers.',
      },
      {
        title: 'Investigative Work',
        content: 'She specialized in disguise, observation, and note-taking, collecting evidence of hidden assistants, mechanical devices, luminous paints, and ventriloquism. Her reports were used in legal battles and congressional hearings on fraudulent mediumship.',
      },
      {
        title: 'Legacy & Impact',
        content: 'Though lesser known than Houdini, Mackenberg was instrumental in dismantling dozens of con operations. Today she is considered a pioneering female investigator in a field dominated by men and mystique.',
      },
    ],
  },
  {
    id: 'pe-27',
    name: 'Ryan Zacherl – Investigator',
    description: 'A contemporary ghost researcher known for methodical case logging',
    categoryId: 'people',
    icon: '🧙',
    sections: [
      {
        title: 'Background',
        content: 'Ryan Zacherl emerged from the modern paranormal investigation scene, building a reputation for rigorous documentation and a structured approach to hauntings. His case logs circulate widely in investigator forums.',
      },
      {
        title: 'Methods & Findings',
        content: 'He emphasizes environmental baselines, redundancy across audio/video gear, and precise timestamps. Reports describe encounters with shadow figures, disembodied voices, and high-coherence EVPs.',
      },
      {
        title: 'Community Influence',
        content: 'Zacherl’s meticulous style helped shift younger investigators away from sensationalism toward measurable on-site data collection. His guides are referenced in training groups and amateur teams.',
      },
    ],
  },
  {
    id: 'pe-28',
    name: 'Shirdi Sai Baba Materializations',
    description: 'The Indian saint associated with miraculous appearances and bilocation',
    categoryId: 'people',
    icon: '🧙',
    sections: [
      {
        title: 'Life & Background',
        content: 'Sai Baba of Shirdi (c.1838–1918) was a mystic revered across Hindu and Muslim communities. His teachings emphasized compassion, charity, and inner realization.',
      },
      {
        title: 'Miraculous Accounts',
        content: 'Followers reported materializations of food, ash, and sacred objects; sudden appearances in distant places; and healings attributed to his presence. Accounts often came from merchants, soldiers, and village families.',
      },
      {
        title: 'Interpretations',
        content: 'Believers view these events as siddhis—spiritual powers arising from enlightenment. Skeptics attribute them to legend expansion and devotional storytelling. Sai Baba remains a unifying figure in Indian spiritual culture.',
      },
    ],
  },
  {
    id: 'pe-29',
    name: 'Smith Ghost Hunts',
    description: 'A family line said to experience hauntings across generations',
    categoryId: 'people',
    icon: '🧙',
    sections: [
      {
        title: 'Family History',
        content: 'The Smith family appears in multiple regional legends as a lineage “followed” by spirits. Generations reportedly recorded hauntings in diaries dating back to the 1800s.',
      },
      {
        title: 'Patterns of Activity',
        content: 'Claims include recurring footsteps, voices calling by name, and apparitions resembling ancestors. Some members took up paranormal investigation to better understand the activity.',
      },
      {
        title: 'Folkloric Significance',
        content: 'Storytellers use the Smiths as an example of inherited sensitivity or ancestral guardianship. The legend varies by region but retains themes of generational haunting.',
      },
    ],
  },
  {
    id: 'pe-30',
    name: 'St. Joseph of Cupertino',
    description: 'The levitating saint known for ecstatic trances',
    categoryId: 'people',
    icon: '🧙',
    sections: [
      {
        title: 'Biography',
        content: 'St. Joseph of Cupertino (1603–1663) was an Italian Franciscan friar whose ecstatic states caused spontaneous levitations witnessed by clergy, nobles, and commoners. He became known as the “Flying Saint.”',
      },
      {
        title: 'Miraculous Accounts',
        content: 'Reports describe him rising off the ground during mass, floating toward religious statues, or soaring above crowds. These events were documented by multiple witnesses, including church officials.',
      },
      {
        title: 'Debates',
        content: 'Skeptics suggest trance-induced muscle spasms, exaggeration, or misreporting. The Catholic Church accepted the accounts and canonized him in 1767. He remains a patron of students and aviators.',
      },
    ],
  },
  {
    id: 'pe-31',
    name: 'Ted Owens PK Man',
    description: 'A self-proclaimed psychokinetic who claimed to control storms and UFOs',
    categoryId: 'people',
    icon: '🧙',
    sections: [
      {
        title: 'Life & Claims',
        content: 'Ted Owens (1920–1987) asserted he possessed enormous psychokinetic abilities aided by “space intelligences.” He predicted disasters, manipulated weather, and attempted to prove his powers under observation.',
      },
      {
        title: 'Documented Tests',
        content: 'Parapsychologists recorded sessions where Owens predicted lightning strikes, rainstorms, and power outages. Some predictions aligned with outcomes; others failed dramatically.',
      },
      {
        title: 'Interpretations',
        content: 'Supporters cite uncanny hits and Owens’ unusual psychological profile. Critics consider him charismatic, delusional, or lucky. His story remains one of psychic lore’s most flamboyant chapters.',
      },
    ],
  },
  {
    id: 'pe-32',
    name: 'Telepathic Twins York',
    description: 'Siblings rumored to share thoughts and dreams across distance',
    categoryId: 'people',
    icon: '🧙',
    sections: [
      {
        title: 'Background',
        content: 'Twin sisters from York, England, reportedly displayed synchronous speech, shared dreams, and simultaneous emotional reactions even when separated.',
      },
      {
        title: 'Phenomena',
        content: 'Teachers documented moments where both answered questions at the exact same instant or wrote identical essays without collaborating. Family accounts describe shared nightmares and sudden messages “felt, not heard.”',
      },
      {
        title: 'Explanations',
        content: 'Researchers cite twin bonding and subconscious cues; psychics point to telepathic resonance. Their case is often referenced in discussions of biological psi-links.',
      },
    ],
  },
  {
    id: 'pe-33',
    name: 'The Alaskan Three Whisperers',
    description: 'Three hikers who returned from a trek speaking a language no one recognized',
    categoryId: 'people',
    icon: '🧙',
    sections: [
      {
        title: 'Incident Summary',
        content: 'After a multi-day hike in remote Alaska, three friends emerged disoriented and whispering an unknown language. They were dehydrated but otherwise unharmed.',
      },
      {
        title: 'Unusual Features',
        content: 'The whispered speech continued for days, consisting of rhythmic syllables and repeated sequences. Linguists found no match to known languages. The hikers had no memory of learning or speaking it.',
      },
      {
        title: 'Speculations',
        content: 'Hypotheses range from trauma-induced glossolalia to contact with non-human intelligences. The event remains an eerie linguistic anomaly.',
      },
    ],
  },
  {
    id: 'pe-34',
    name: 'The Drowned Prophet',
    description: 'A man foretold disasters after surviving a near-fatal drowning',
    categoryId: 'people',
    icon: '🧙',
    sections: [
      {
        title: 'Origin Story',
        content: 'According to regional accounts, a fisherman revived after a prolonged submersion began uttering cryptic predictions involving storms, deaths, and failed harvests.',
      },
      {
        title: 'Recorded Predictions',
        content: 'Villagers claimed several statements aligned with later tragedies, including a fatal boating accident and a crop blight. His demeanor shifted permanently to calm detachment.',
      },
      {
        title: 'Interpretations',
        content: 'Some view him as a trauma survivor whose mind manifested symbolic warnings; others consider him a channeler awakened by the near-death episode.',
      },
    ],
  },
  {
    id: 'pe-35',
    name: 'The Iron Lung Prophet',
    description: 'A polio survivor who delivered eerie predictions from within his respirator',
    categoryId: 'people',
    icon: '🧙',
    sections: [
      {
        title: 'Life in the Iron Lung',
        content: 'Bedridden inside an iron lung for decades, this unnamed patient reportedly experienced vivid visions during bouts of fever and oxygen deprivation.',
      },
      {
        title: 'Prophetic Statements',
        content: 'Nurses recorded warnings of pandemics, political assassinations, and local tragedies. Some predictions matched later events, though often in symbolic language.',
      },
      {
        title: 'Legacy',
        content: 'The story endures as a haunting tale of isolation, altered consciousness, and the boundary between illness and inspiration.',
      },
    ],
  },
  {
    id: 'pe-36',
    name: 'The Man Who Woke Twice',
    description: 'A patient pronounced dead who revived—twice—with strange messages',
    categoryId: 'people',
    icon: '🧙',
    sections: [
      {
        title: 'Incident Summary',
        content: 'Hospital staff reported a man who flatlined, revived unexpectedly, spoke cryptic warnings, and then flatlined again—only to revive a second time hours later. Each revival was marked by disorientation and prophetic statements.',
      },
      {
        title: 'Unusual Features',
        content: 'Witnesses described electrical spikes on nearby equipment during each revival. The man insisted he heard “voices on the other side” telling him to return with specific messages.',
      },
      {
        title: 'Interpretations',
        content: 'Some believe he experienced layered near-death visions; others propose temporal distortion or hallucination. His final message remained unsettlingly incomplete.',
      },
    ],
  },
  {
    id: 'pe-37',
    name: 'The Missing Mountain Shepherd',
    description: 'A shepherd who vanished for days and returned with impossible knowledge',
    categoryId: 'people',
    icon: '🧙',
    sections: [
      {
        title: 'Disappearance',
        content: 'A shepherd in the Carpathians disappeared during a storm. Search parties found no trace. He reappeared seven days later, calm and unharmed, holding a carved staff no one recognized.',
      },
      {
        title: 'Post-Return Changes',
        content: 'He spoke of “being taught by three figures of light” and demonstrated knowledge of herbs, astronomy, and long-forgotten local dialects.',
      },
      {
        title: 'Folkloric Context',
        content: 'Villagers linked his experience to legends of mountain guardians. Skeptics suggest trauma-induced hallucination or hidden survival skills.',
      },
    ],
  },
  {
    id: 'pe-38',
    name: 'The Whispering Curator',
    description: 'A museum archivist who received historical information from disembodied whispers',
    categoryId: 'people',
    icon: '🧙',
    sections: [
      {
        title: 'Background',
        content: 'A curator in New England reportedly heard whispers while cataloguing artifacts. The voices provided details about object origins later confirmed by experts.',
      },
      {
        title: 'Phenomena',
        content: 'Whispers grew stronger near certain relics, often in languages the curator did not consciously know. Audio recordings picked up faint murmurs.',
      },
      {
        title: 'Explanations',
        content: 'Hypotheses include hyper intuition, past-life memories, or object-imprinted psychic impressions. The curator retired quietly, refusing interviews.',
      },
    ],
  },
  {
    id: 'pe-39',
    name: 'Walter Ashurst – Telephone Ghost',
    description: 'A man who allegedly communicated with the dead through phone calls',
    categoryId: 'people',
    icon: '🧙',
    sections: [
      {
        title: 'Biography & Claims',
        content: 'Walter Ashurst, a British engineer, became known for receiving phone calls from deceased relatives and strangers. Recordings captured static-laced voices identifying themselves as the dead.',
      },
      {
        title: 'Investigations',
        content: 'Paranormal researchers analyzed Ashurst’s tapes, noting unusual frequency bands and speech patterns inconsistent with typical interference. He claimed the calls increased during thunderstorms.',
      },
      {
        title: 'Legacy',
        content: 'His case is cited in discussions of Instrumental Transcommunication (ITC). Skeptics argue misinterpretation of noise; believers see it as evidence of a technological bridge to the afterlife.',
      },
    ],
  },
  {
    id: 'pe-40',
    name: 'The Alaskan Whisperer',
    description: 'A recluse claimed to predict deaths after hearing forest murmurs',
    categoryId: 'people',
    icon: '🧙',
    sections: [
      {
        title: 'Background',
        content: 'Living alone near Juneau, the man insisted that the wind and trees whispered warnings about upcoming tragedies. Local rangers documented several predictions aligning with accidents.',
      },
      {
        title: 'Phenomenon',
        content: 'He described the voices as layered and metallic, as though transmitted through nature itself. He avoided populated areas, saying the whispers became overwhelming.',
      },
      {
        title: 'Interpretations',
        content: 'Some attribute his insights to hyper-awareness of environmental cues; others suggest psychic attunement. His later disappearance fueled speculation.',
      },
    ],
  },
  {
    id: 'pe-41',
    name: 'Pam Reynolds NDE',
    description: 'A near-death experiencer whose case is considered groundbreaking',
    categoryId: 'people',
    icon: '🧙',
    sections: [
      {
        title: 'Medical Context',
        content: 'During brain surgery in 1991, Pam Reynolds underwent hypothermic cardiac arrest. With her brain activity flatlined, she later reported vivid perceptions of the surgery.',
      },
      {
        title: 'NDE Features',
        content: 'She described seeing instruments, hearing conversations, and feeling herself float upward. Details she recounted matched medical staff reports.',
      },
      {
        title: 'Debates',
        content: 'Researchers cite her case as profound evidence for consciousness independent of brain function. Skeptics argue residual hearing or memory reconstruction.',
      },
    ],
  },
  {
    id: 'pe-42',
    name: 'Psychic Cartographer',
    description: 'A mapmaker who claimed to sense hidden locations psychically',
    categoryId: 'people',
    icon: '🧙',
    sections: [
      {
        title: 'Background',
        content: 'A European cartographer in the mid-1900s gained a reputation for locating lost villages, mineral veins, and ancient roads without visiting the sites.',
      },
      {
        title: 'Abilities',
        content: 'He said maps “whispered” to him—he could feel energy lines, settlements, or buried structures through tracing paper alone.',
      },
      {
        title: 'Impact',
        content: 'Archaeologists later validated several of his placements. Critics suggest pattern recognition; admirers see claircognizance.',
      },
    ],
  },
  {
    id: 'pe-43',
    name: 'Rania Johnson – Mirror Messages',
    description: 'A woman who reported receiving written messages from her reflection',
    categoryId: 'people',
    icon: '🧙',
    sections: [
      {
        title: 'Incident Summary',
        content: 'Messages allegedly appeared on her bathroom mirror after steam cleared—warnings, names, and instructions she claimed were not her doing.',
      },
      {
        title: 'Notable Events',
        content: 'Her husband documented words forming in real time during arguments or emotional moments. Paranormal groups recorded unexplained temperature drops around the mirror.',
      },
      {
        title: 'Possible Explanations',
        content: 'Condensation artifacts, subconscious writing, or a classic poltergeist catalyst case. Her story remains a modern haunting curiosity.',
      },
    ],
  },
  {
    id: 'pe-44',
    name: 'The Man Who Walked Out of Time',
    description: 'A wanderer who reappeared decades after vanishing—unchanged',
    categoryId: 'people',
    icon: '🧙',
    sections: [
      {
        title: 'Disappearance',
        content: 'A traveler disappeared in the 1950s while hiking. He returned in the 1980s wearing the same clothes, claiming only minutes had passed.',
      },
      {
        title: 'Behavior',
        content: 'He displayed confusion about new technology but recognized modern geography. DNA confirmed his identity.',
      },
      {
        title: 'Interpretations',
        content: 'Time slip, abduction, or mistaken identity? His case remains one of the strangest temporal anomalies in folklore.',
      },
    ],
  },
  {
    id: 'pe-45',
    name: 'Walter Ashurst – Telephone Ghost',
    description: 'The investigator associated with spectral phone communications',
    categoryId: 'people',
    icon: '🧙',
    sections: [
      {
        title: 'Life & Work',
        content: 'Ashurst collected hundreds of reports of phone calls from the deceased. He believed electrical devices acted as weak conduits for spirit contact.',
      },
      {
        title: 'Famous Cases',
        content: 'His files included families who heard long-dead relatives call out their names, phones ringing without lines connected, and static resolving into recognizable voices.',
      },
      {
        title: 'Legacy',
        content: 'Ashurst’s archive inspired later ITC researchers and remains a cornerstone of electronic haunting lore.',
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

/**
 * Get all people topics
 * @returns Array of all people topics
 */
export const getAllPeople = (): readonly PeopleTopic[] => {
  return peopleData;
};

/**
 * Get count of people topics
 * @returns Total number of people topics
 */
export const getPeopleCount = (): number => {
  return peopleData.length;
};
