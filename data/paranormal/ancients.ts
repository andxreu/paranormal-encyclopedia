// data/paranormal/ancients.ts
/**
 * Ancient Mysteries Category Data
 * Lost civilizations, unexplained structures, and archaeological enigmas
 * 
 * Includes: Atlantis, Pyramids of Giza, Stonehenge, Nazca Lines, Easter Island Moai
 */

import { categoryColors } from '@/constants/Colors';
import type { TopicSection, CategoryId } from './types';

export interface AncientTopic {
  id: string;
  name: string;
  description: string;
  categoryId: CategoryId;
  icon: string;
  sections: TopicSection[];
}

export const ancientsData: readonly AncientTopic[] = [
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
	  {
    id: 'am-6',
    name: 'Aaru Afterlife Realm',
    description: 'The ancient Egyptian field of reeds where worthy souls dwell after death',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Aaru, the Field of Reeds, was envisioned as a perfected Egypt: endless fertile fields, clear canals, and an idealized continuation of earthly life. Souls who passed the Weighing of the Heart in the Hall of Ma’at could enter this paradise, living among the gods and ancestors.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Funerary texts like the Pyramid Texts, Coffin Texts, and the Book of the Dead describe the journey to Aaru in symbolic detail. Scholars debate whether these passages encode ritual knowledge, astronomical cycles, or purely spiritual metaphors for moral order and cosmic balance.',
      },
      {
        title: 'Modern Theories',
        content: 'Occult and esoteric traditions sometimes equate Aaru with astral planes or higher vibrational realms. Some paranormal interpretations treat near-death experiences and lucid afterlife visions as modern echoes of the Aaru concept, suggesting a shared archetypal geography of the beyond.',
      },
    ],
  },
  {
    id: 'am-7',
    name: 'Akakor Lost City',
    description: 'A rumored hidden city in the Amazon described by a mysterious guide',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Akakor entered modern lore through tales of an underground city in the Amazon ruled by a priestly elite descended from ancient sky gods. Stories describe enormous tunnels, stone chambers, and a civilization that survived cataclysms by retreating below ground.',
      },
      {
        title: 'Archaeological Debates',
        content: 'The primary accounts of Akakor trace back to a controversial informant whose stories mix indigenous lore with unverifiable claims. Archaeologists argue that no solid evidence for Akakor exists, though the Amazon still hides thousands of undocumented sites beneath jungle canopy.',
      },
      {
        title: 'Modern Theories',
        content: 'Alternate history writers tie Akakor to a global network of subterranean cities, Nazi expeditions, and ancient alien contact. Some believe it may be a distorted memory of real pre-Columbian settlements or lost mound-building cultures deep in the rainforest.',
      },
    ],
  },
  {
    id: 'am-8',
    name: 'Anatolian Goddess Statues',
    description: 'Mysterious ancient female figurines from Anatolia linked to fertility cults',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Across ancient Anatolia, enigmatic goddess figurines depict powerful, often voluptuous female forms, sometimes enthroned or flanked by animals. They are linked in legend to earth goddesses who governed fertility, birth, and the seasonal cycles of life and death.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Scholars debate whether these figurines represent actual deities, priestesses, or symbolic ancestors. Some see them as household cult objects; others argue they may reflect a broader, organized goddess-centered religion that predated later patriarchal pantheons.',
      },
      {
        title: 'Modern Theories',
        content: 'Neo-pagan and goddess spirituality movements view the Anatolian statues as relics of a primordial Mother Goddess tradition. Fringe interpretations suggest encoded knowledge of celestial cycles or lost matriarchal societies suppressed by later empires.',
      },
    ],
  },
  {
    id: 'am-9',
    name: 'Antikythera Mechanism Mystery',
    description: 'An ancient mechanical device believed to track celestial movements',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Recovered from a shipwreck off the Greek island of Antikythera, this corroded bronze device stunned researchers with its intricate gears. To some, it became a symbol of forgotten ancient genius rivaling modern clockwork and computers.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Most scholars view the mechanism as an advanced astronomical calculator that predicted eclipses and planetary positions. The level of precision raises questions about how widespread such technology was, and whether other devices remain undiscovered or destroyed.',
      },
      {
        title: 'Modern Theories',
        content: 'Alternative theorists argue the mechanism hints at an even older technological lineage, possibly lost in catastrophes. A few suggest influence from Atlantean or extraterrestrial knowledge, framing it as a surviving “artifact out of time.”',
      },
    ],
  },
  {
    id: 'am-10',
    name: 'Ark Covenant Fate',
    description: 'The enduring mystery of what happened to the Ark of the Covenant',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'The Ark of the Covenant was said to house the tablets of the Law and to radiate divine power—toppling walls, parting waters, and striking the unworthy. Legends claim it vanished from the Temple before or during the Babylonian conquest, spirited away by priests or angels.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Mainstream scholars see the Ark as a cult object whose fate was lost amid wars and temple destruction. Some traditions place it in hidden chambers beneath Jerusalem, while others point toward Egypt, Ethiopia, or Arabia. No verified archaeological discovery has confirmed any claim.',
      },
      {
        title: 'Modern Theories',
        content: 'Alternative and paranormal theories describe the Ark as an energy weapon, ancient battery, or communication device with other realms. Modern treasure hunters, secret society narratives, and conspiracy lore all preserve the idea that the Ark survives in some guarded sanctuary.',
      },
    ],
  },
  {
    id: 'am-11',
    name: 'Aswan Granite Cuts',
    description: 'Strange precision cuts in granite blocks near Aswan quarries',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'In the quarries around Aswan, massive unfinished obelisks and cut marks hint at ambitious projects abandoned long ago. Local lore sometimes attributes these feats to giants, gods, or magicians able to shape stone as if it were clay.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Egyptologists argue that the cuts were made with copper tools, pounding stones, and abrasives. Critics point to neat drill-like holes and smooth channels in hard granite, questioning whether the known toolset fully explains the observed precision and speed.',
      },
      {
        title: 'Modern Theories',
        content: 'Ancient technology enthusiasts suggest the use of advanced saws, sonic tools, or lost machining methods. Some propose that the quarries recorded experiments with techniques later suppressed or forgotten, hinting at a technological peak in deep antiquity.',
      },
    ],
  },
  {
    id: 'am-12',
    name: 'Atlantean Crystals',
    description: 'Legendary power crystals said to be used by the people of Atlantis',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Stories of Atlantis often include descriptions of enormous crystals powering temples, healing centers, and energy networks. Some legends claim these crystals focused cosmic rays or Earth energies, sustaining an age of wonder before catastrophic misuse.',
      },
      {
        title: 'Archaeological Debates',
        content: 'No physical “Atlantean crystal” has ever been authenticated. Crystals found at ancient sites fit within normal mineralogical expectations. Scholars argue that Atlantean crystal lore likely emerged from esoteric traditions and 19th–20th century occult writings rather than direct historical memory.',
      },
      {
        title: 'Modern Theories',
        content: 'New Age and metaphysical communities treat Atlantean crystals as archetypes of high-frequency tools, sometimes channeled or psychically accessed. Some speculate that certain anomalous quartz formations or underwater structures in the Atlantic may be remnants of lost crystal technology.',
      },
    ],
  },
  {
    id: 'am-13',
    name: 'Baalbek Megaliths',
    description: 'Colossal stone blocks forming part of the Baalbek temple complex',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'The ancient site of Baalbek in Lebanon includes the “Stone of the Pregnant Woman” and other titanic blocks weighing hundreds of tons. Local myths attribute their placement to giants, djinn, or even biblical figures like Nimrod or Solomon.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Engineers puzzle over how such enormous stones were quarried, moved, and set with apparent precision using ancient techniques. Some researchers hold that ingenious ramp systems and massive labor forces suffice, while others question whether purely manual methods are realistic at that scale.',
      },
      {
        title: 'Modern Theories',
        content: 'Alternative researchers see Baalbek as evidence of a much older, global megalithic culture, possibly pre-dating Roman construction. Theorists invoke advanced lost engineering, antigravity technologies, or even landing platforms for visiting sky beings.',
      },
    ],
  },
  {
    id: 'am-14',
    name: 'Baalbek Underground Tunnels',
    description: 'Rumored subterranean tunnels beneath the Baalbek complex',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Stories circulate of hidden tunnels and chambers beneath Baalbek, said to contain treasures, forbidden texts, or the resting places of ancient kings and gods. Some tales describe secret passages used by priests to perform oracular rites.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Limited excavations and restricted access mean that much of the subsurface remains poorly documented. Some cavities and foundations are known, but sweeping tunnel networks remain unverified, blurring the line between architectural reality and rumor.',
      },
      {
        title: 'Modern Theories',
        content: 'Speculative theories link Baalbek’s supposed tunnels to a vast underground grid connecting other sacred sites. In paranormal circles, these routes are imagined as conduits for earth energies, portals, or even hidden technologies from a lost age.',
      },
    ],
  },
  {
    id: 'am-15',
    name: 'Baghdad Battery Artifact',
    description: 'Ancient jars some believe functioned as primitive electric batteries',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'The so-called Baghdad Battery consists of clay jars, copper cylinders, and iron rods discovered near Baghdad. Popular lore paints them as electric devices used for electroplating, healing rituals, or mysterious temple technologies.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Many archaeologists argue these jars were simple storage vessels or ritual containers, not batteries. Experiments show they can produce small voltages when filled with acidic liquid, but evidence for their deliberate use as power sources remains circumstantial.',
      },
      {
        title: 'Modern Theories',
        content: 'Paranormal and fringe authors view the Baghdad Battery as proof of a forgotten scientific tradition, hinting that electricity was harnessed long before the modern era. Some extend this notion to imagine entire lost laboratories and workshops across the ancient Near East.',
      },
    ],
  },
  {
    id: 'am-16',
    name: 'Baigong Pipes Anomaly',
    description: 'Bizarre pipe-like formations found in remote Chinese rock formations',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Near Mount Baigong in China, strange pipe-like structures embedded in rock sparked tales of an ancient alien base or prehistoric facility. Local legends arose of star visitors and mysterious builders who left behind technological relics.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Analyses suggest many of the “pipes” may be natural formations, possibly fossilized tree roots or iron-rich concretions shaped by geological processes. However, their regular diameters and patterns continue to puzzle observers and fuel debate.',
      },
      {
        title: 'Modern Theories',
        content: 'Ancient astronaut proponents argue that the Baigong Pipes are corroded infrastructure from a long-vanished advanced civilization. Others speculate that they may be remnants of an unknown mining or water system predating recorded regional history.',
      },
    ],
  },
  {
    id: 'am-17',
    name: 'Balochistan Sleeping Beauty',
    description: 'A peculiar rock formation resembling a reclining woman in Pakistan',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'In Balochistan, a mountain ridge known as the “Sleeping Beauty” resembles a woman lying on her back. Local folklore attributes the shape to a cursed princess, petrified goddess, or slumbering giantess awaiting some cosmic signal to awaken.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Most geologists view the formation as an example of pareidolia—humans seeing familiar shapes in natural landscapes. There is little evidence of deliberate carving, though some speculate that minor shaping or embellishment could have accentuated natural contours.',
      },
      {
        title: 'Modern Theories',
        content: 'Esoteric and energy-grid theorists connect the Sleeping Beauty to a global network of mountain effigies and “sleeping gods” landscapes. Some claim the formation marks a node of telluric currents or an astral gateway tied to feminine archetypal energies.',
      },
    ],
  },
  {
    id: 'am-18',
    name: 'Bimini Road Alignments',
    description: 'Submerged stone formations near Bimini linked to Atlantis lore',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Off the coast of Bimini in the Bahamas, underwater blocks arranged like a roadway inspired claims that they are the remains of Atlantean structures. Prophecies by seers were cited as predicting a great discovery of Atlantis in this exact region.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Many geologists believe the Bimini formations are natural beachrock fractured and eroded into linear shapes. Others argue that the regularity, right angles, and multi-layered blocks suggest at least partial human modification or use as harbor works.',
      },
      {
        title: 'Modern Theories',
        content: 'Atlantis enthusiasts see Bimini Road as a surviving fragment of a larger complex now buried under sediments. Alternative researchers propose that the alignments correspond to celestial patterns or energy lines, functioning as a maritime temple or marker.',
      },
    ],
  },
  {
    id: 'am-19',
    name: 'Black Ziggurat Legend',
    description: 'Stories of a dark, forgotten ziggurat hidden in the desert sands',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Rumors persist of a “Black Ziggurat” somewhere in the Middle Eastern deserts—an obsidian-like stepped temple devoted to shadowy gods or forbidden rites. Tales speak of entrances sealed by sandstorms and guardians that drive intruders mad.',
      },
      {
        title: 'Archaeological Debates',
        content: 'No confirmed site matches the Black Ziggurat description. Some historians suggest the legend may be a composite memory of several ruined temples, while others think it arose from mistranslated texts or embellished explorer stories.',
      },
      {
        title: 'Modern Theories',
        content: 'Occult and Lovecraft-inspired traditions have adopted the Black Ziggurat as a symbol of hidden cult centers. Fringe theories suggest it may be a literal ruin yet to be uncovered, possibly holding records of pre-Sumerian civilizations or non-human entities.',
      },
    ],
  },
  {
    id: 'am-20',
    name: 'Chichen Itza Cenote Sacrifices',
    description: 'Ritual offerings and human remains found in sacred cenotes of Chichen Itza',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'At Chichen Itza, sacred cenotes were believed to be portals to the gods. Chronicles and oral tradition describe offerings of gold, jade, and sometimes humans cast into the deep waters to appease deities of rain, fertility, and the underworld.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Dredging and dives have recovered artifacts and human bones from cenotes, confirming sacrificial practices. Debate continues over how frequent and widespread these rites were, and whether all remains represent sacrifices or a mixture of burials and offerings.',
      },
      {
        title: 'Modern Theories',
        content: 'Some paranormal interpretations cast cenotes as literal gates between dimensions, suggesting sacrificial victims entered other realms. Others link the acoustics, geometry, and sky alignments of the site with a sophisticated system of water magic and celestial ritual.',
      },
    ],
  },
  {
    id: 'am-21',
    name: 'Cleopatra Tomb Location',
    description: 'The still-unknown final resting place of Cleopatra VII of Egypt',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Cleopatra’s dramatic death alongside Mark Antony birthed legends of a secret burial overseen by loyal followers. Some stories claim she rests in a hidden coastal temple, others that her tomb lies beneath modern Alexandria or near a sacred shrine to Isis.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Despite intensive excavations in and around Alexandria, Cleopatra’s tomb has never been definitively identified. Some archaeologists focus on submerged ruins offshore; others explore temple sites inland, arguing over textual clues and historical accounts.',
      },
      {
        title: 'Modern Theories',
        content: 'Speculative theories place Cleopatra’s tomb in unexcavated chambers, underwater vaults, or even sealed complexes detected by ground-penetrating radar. In mystical circles, her resting place is imagined as a power node holding ritual artifacts and encoded wisdom.',
      },
    ],
  },
  {
    id: 'am-22',
    name: 'Copper Scroll Mystery',
    description: 'A unique Dead Sea Scroll listing hidden treasures in coded form',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Unlike other Dead Sea Scrolls, the Copper Scroll is literally inscribed on metal and reads like a treasure map, listing caches of gold, silver, and sacred objects hidden at dozens of secret locations. Legends tie these hoards to the First or Second Temple.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Scholars debate whether the Copper Scroll describes real stashes or symbolic wealth. Many proposed locations are ambiguous or impossible to match to modern geography. No massive treasure troves tied directly to the scroll have yet been found.',
      },
      {
        title: 'Modern Theories',
        content: 'Treasure hunters and conspiracy theorists speculate that the scroll encodes not only physical treasure but lost records of Israelite rituals or even the Ark of the Covenant. Some suggest parts of the hoard were secretly recovered in modern times and quietly removed.',
      },
    ],
  },
  {
    id: 'am-23',
    name: 'Crystal Pyramids Bermuda',
    description: 'Claims of submerged crystal-like pyramids in the Bermuda region',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Stories emerged of divers and sonar operators detecting glassy or crystal-like pyramid structures beneath the waters of the Bermuda Triangle. These rumored edifices are said to glow, distort instruments, or influence the strange disappearances in the area.',
      },
      {
        title: 'Archaeological Debates',
        content: 'No verified scientific documentation confirms the existence of such crystal pyramids. Many images and reports are considered misinterpretations of natural formations, sonar artifacts, or outright hoaxes, though a few anomalies remain unexplained.',
      },
      {
        title: 'Modern Theories',
        content: 'In alternative lore, the Bermuda crystal pyramids are remnants of Atlantis or an advanced sea-based civilization. Some claim they function as energy resonators or atmospheric control devices whose malfunction contributes to navigational anomalies and time distortions.',
      },
    ],
  },
  {
    id: 'am-24',
    name: 'Crystal Skulls',
    description: 'Carved crystal skulls surrounded by tales of prophecy and power',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Crystal skulls, often attributed to Mesoamerican origins, are said to hold ancient wisdom, healing power, or apocalyptic prophecies. Legends speak of thirteen master skulls that must be reunited to unlock global transformation or avert catastrophe.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Scientific tests show that many famous crystal skulls likely date to the 19th or 20th centuries, fashioned with modern tools. Their supposed pre-Columbian origins are heavily disputed, though some smaller or less-known specimens remain less thoroughly analyzed.',
      },
      {
        title: 'Modern Theories',
        content: 'Despite authenticity disputes, crystal skulls remain central to New Age and paranormal narratives. They are viewed as consciousness amplifiers, data crystals, or psychic interfaces created by advanced beings—human or otherwise—long before modern technology.',
      },
    ],
  },
  {
    id: 'am-25',
    name: 'Curse of the Pharaohs',
    description: 'The alleged supernatural curse striking those who disturb pharaonic tombs',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Stories of the Curse of the Pharaohs claim that anyone who violates a royal tomb will suffer misfortune, illness, or death. The deaths of some members of the team that opened Tutankhamun’s tomb fueled global headlines about ancient vengeance.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Researchers note that many people involved in tomb excavations lived long, normal lives, and attribute early deaths to disease, mold spores, or coincidence. Inscriptions interpreted as “curses” may instead be standard protective or ritual texts.',
      },
      {
        title: 'Modern Theories',
        content: 'Paranormal investigators consider the possibility of psychic imprinting or residual energies defending tombs. Others see the curse as a thoughtform: a belief so widely accepted that it shapes outcomes through fear, suggestion, and synchronicity around the excavation of ancient graves.',
      },
    ],
  },
  {
    id: 'am-26',
    name: 'Derinkuyu Underground City',
    description: 'A vast subterranean city in Turkey capable of housing thousands',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Derinkuyu is said to have sheltered entire populations from enemies, plagues, or celestial catastrophes. Some myths claim it was carved by mystical beings or ancient engineers who hid from a world-changing event on the surface.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Mainstream views attribute the city’s construction to Phrygians or early Christians. Yet questions persist: why build so deep, how was ventilation perfected, and what earlier structures lie beneath the known tunnels?',
      },
      {
        title: 'Modern Theories',
        content: 'Alternative researchers propose Derinkuyu as a survival bunker for prehistoric cataclysms. Others suggest it connects to a pan-continental tunnel network created by a lost civilization with advanced geotechnical knowledge.',
      },
    ],
  },
  {
    id: 'am-27',
    name: 'Devil’s Arrows Alignments',
    description: 'Massive standing stones in England aligned to celestial patterns',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Folklore says the Devil hurled these stones toward nearby monasteries, missing his mark. Their mysterious alignment made them revered as ancient markers of power and possibly magical pathways.',
      },
      {
        title: 'Archaeological Debates',
        content: 'The stones belong to a broader Neolithic landscape, possibly aligned to solar events. Their original purpose—ritual, territorial, or astronomical—remains contested among archaeologists.',
      },
      {
        title: 'Modern Theories',
        content: 'Energy-grid theorists claim the Arrows mark intersections of ley lines. Others imagine them as remnants of a larger stone complex that once connected multiple megalithic sites across Britain.',
      },
    ],
  },
  {
    id: 'am-28',
    name: 'Dropa Stones',
    description: 'Strange carved disks from China allegedly containing alien inscriptions',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'The Dropa Stones are linked to legends of star beings who crash-landed in remote mountains. Stories claim the disks once told their story in spiraling pictographs describing cosmic journeys.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Most Dropa Stones reports lack verifiable provenance, leading many researchers to dismiss them as hoaxes. Yet a few stones resembling unusual carved disks do exist, fueling debate over their true origins.',
      },
      {
        title: 'Modern Theories',
        content: 'Ancient astronaut theorists treat the Dropa Stones as evidence of extraterrestrial contact. Some fringe scholars propose they encode astronomical data or a pre-human migration narrative.',
      },
    ],
  },
  {
    id: 'am-29',
    name: 'Fairy Coffins Arthur’s Seat',
    description: 'Tiny carved coffins found hidden in a hillside near Edinburgh',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'In 1836, small wooden coffins containing tiny figures were discovered on Arthur’s Seat. Locals linked them to fairy burials, witchcraft rites, or miniature effigy magic.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Theories range from memorial objects for lost sailors to symbolic burials for murder victims. Their craftsmanship and arrangement hint at ritual intent, but no consensus exists.',
      },
      {
        title: 'Modern Theories',
        content: 'Occult interpretations cast the coffins as repositories of charm magic. Others see them as expressions of folk spirituality, reenacting burial customs on a miniature or symbolic scale.',
      },
    ],
  },
  {
    id: 'am-30',
    name: 'Forbidden Archaeology',
    description: 'Claims that evidence of ancient advanced civilizations is suppressed',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Stories circulate of artifacts that rewrite human history—giant skeletons, anomalous tools, and impossible fossils—said to be quietly removed from museums or dig sites.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Most alleged forbidden artifacts lack verified excavation records. Scholars argue that extraordinary claims require extraordinary evidence, which many of these items fail to provide.',
      },
      {
        title: 'Modern Theories',
        content: 'Conspiracy theorists believe academic institutions suppress data that threatens established timelines. Others propose that powerful groups hide ancient technologies that could change society.',
      },
    ],
  },
  {
    id: 'am-31',
    name: 'Giants Biblical Modern',
    description: 'Accounts suggesting giants once walked the Earth—and perhaps still do',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Biblical texts describe the Nephilim—mighty giants born of divine-human unions. Global folklore contains similar tales of towering beings who shaped landscapes and kingdoms.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Sporadic reports of giant bones generally trace to misidentifications or hoaxes. Yet questions persist about unusually large ancient structures and tools seemingly made for oversized hands.',
      },
      {
        title: 'Modern Theories',
        content: 'Some theorists argue that giant lineages survived into early historical periods. Others link giants to extraterrestrial or interdimensional visitors who influenced human development.',
      },
    ],
  },
  {
    id: 'am-32',
    name: 'Glastonbury Tor Ley Lines',
    description: 'The mystical hill in England said to sit atop powerful earth energies',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Glastonbury Tor is steeped in Arthurian lore, goddess worship traditions, and tales of the Isle of Avalon. Some believe the hill conceals a gateway to the Otherworld.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Archaeological findings show ancient terracing and early Christian occupation. Whether these align with celestial events or ritual landscapes remains an open question.',
      },
      {
        title: 'Modern Theories',
        content: 'Ley-line enthusiasts claim the Tor is a major node in a global energy grid. Some view it as a chakra point of the Earth, radiating spiritual frequency across the region.',
      },
    ],
  },
  {
    id: 'am-33',
    name: 'Göbekli Tepe Anomalies',
    description: 'Unexpected features at one of the world’s oldest known megalithic sites',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Göbekli Tepe’s T-pillars, animal carvings, and enclosures evoke tales of early priest-kings or sky beings who brought knowledge to humanity at the dawn of civilization.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Scholars debate how hunter-gatherers achieved such architectural complexity 12,000 years ago. Some argue it forces a rewrite of humanity’s timeline and the origins of organized religion.',
      },
      {
        title: 'Modern Theories',
        content: 'Theories range from star maps and catastrophic-event memorials to decoding astronomical cycles. Some fringe views treat Göbekli Tepe as a remnant of a lost Ice Age civilization.',
      },
    ],
  },
  {
    id: 'am-34',
    name: 'Göbekli Tepe Purse Symbols',
    description: 'Recurring “purse-shaped” carvings appearing across ancient cultures',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'The purse symbol appears on Göbekli Tepe pillars and in Mesoamerican, Sumerian, and other ancient art. Legends interpret them as containers of divine knowledge or cosmic seeds.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Scholars suggest these shapes may represent tools, baskets, ritual objects, or symbolic motifs. The cross-cultural similarity remains intriguing and unexplained.',
      },
      {
        title: 'Modern Theories',
        content: 'Alternative historians claim the symbols represent technological devices carried by ancient gods—perhaps energy packs or portable knowledge modules.',
      },
    ],
  },
  {
    id: 'am-35',
    name: 'Great Sphinx',
    description: 'The monumental lion-bodied guardian of the Giza Plateau',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Ancient lore portrays the Sphinx as a guardian of forbidden chambers or star-aligned mysteries. Some stories claim its true face was altered to conceal an older identity.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Mainstream Egyptology dates the Sphinx to Khafre’s reign. Controversial geological evidence suggests erosion patterns that may push its age back thousands of years earlier.',
      },
      {
        title: 'Modern Theories',
        content: 'Speculations include hidden rooms beneath the paws, encoded star maps, and links to a lost high civilization that predated dynastic Egypt.',
      },
    ],
  },
  {
    id: 'am-36',
    name: 'Hellinikon Pyramid',
    description: 'A mysterious pyramid-like structure in Greece of uncertain age',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Local traditions speak of ancient heroes or kings buried within the structure, and its unusual shape has inspired rumors of magical or astronomical significance.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Dating attempts have produced conflicting results, with some suggesting it predates the Egyptian pyramids—while others argue it is far more recent.',
      },
      {
        title: 'Modern Theories',
        content: 'Some fringe theorists view Hellinikon as part of a forgotten pyramid-building culture that once spanned the Mediterranean, encoding celestial knowledge in stone.',
      },
    ],
  },
  {
    id: 'am-37',
    name: 'Hollow Earth Theory',
    description: 'The belief that vast realms or civilizations exist within the Earth',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Global folklore describes subterranean lands inhabited by gods, giants, or advanced beings. Tales like Agartha and Shambhala speak of radiant inner kingdoms.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Science dismisses a literal hollow Earth as impossible, yet ancient cave networks and underground cities fuel speculation about older, deeper structures still unexplored.',
      },
      {
        title: 'Modern Theories',
        content: 'Esoteric traditions interpret Hollow Earth as a metaphysical realm. Fringe theories imagine portals at the poles leading to inner worlds inhabited by non-human intelligences.',
      },
    ],
  },
  {
    id: 'am-38',
    name: 'Ica Stones',
    description: 'Carved stones in Peru depicting dinosaurs, surgeries, and ancient sciences',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Discovered near Ica, Peru, the stones portray impossible scenes—humans riding dinosaurs, advanced surgeries, and star maps. Legends claim they record prehistoric knowledge.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Most scholars view the stones as modern creations sold to tourists, though a small number of stones have questionable origins that keep debate alive.',
      },
      {
        title: 'Modern Theories',
        content: 'Some suggest the stones are remnants of a lost high civilization that coexisted with ancient megafauna. Others see them as encoded messages rescued from primordial cataclysms.',
      },
    ],
  },
  {
    id: 'am-39',
    name: 'Impossible Granite Cuts',
    description: 'Precision-cut granite structures beyond known ancient tool capabilities',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Ancient builders in Egypt and South America left behind impossibly smooth cuts, drill holes, and interlocking blocks, inspiring stories of divine or magical stone-workers.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Conventional explanations cite copper tools, abrasives, and manpower, but skeptics question whether these techniques can truly account for machine-like precision.',
      },
      {
        title: 'Modern Theories',
        content: 'Some theorists propose advanced lost machining methods—sonic cutters, diamond-tipped tools, or technologies inherited from a forgotten civilization.',
      },
    ],
  },
  {
    id: 'am-40',
    name: 'Kaimanawa Wall Controversy',
    description: 'A debated stone structure in New Zealand once thought to be ancient',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'When discovered, the Kaimanawa Wall sparked rumors of a lost pre-Māori people or megalithic builders who once inhabited the islands.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Geologists argue the wall is a natural ignimbrite formation fractured over time. Others insist the symmetry suggests deliberate construction.',
      },
      {
        title: 'Modern Theories',
        content: 'Some fringe researchers maintain the wall is a surviving fragment of a Pacific civilization erased by rising seas or volcanic catastrophes.',
      },
    ],
  },
  {
    id: 'am-41',
    name: 'Lake Titicaca Ruins',
    description: 'Submerged ruins beneath South America’s highest navigable lake',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Indigenous legends speak of gods emerging from the waters, and of ancient cities now drowned beneath Titicaca’s depths.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Dives have revealed stone terraces, walls, and artifacts, but dating difficulties obscure whether they belonged to Tiwanaku, pre-Tiwanaku cultures, or something older.',
      },
      {
        title: 'Modern Theories',
        content: 'Some propose rapid ancient flooding events. Others connect the submerged structures to lost Andean civilizations with sophisticated water engineering.',
      },
    ],
  },
  {
    id: 'am-42',
    name: 'Ley Lines Energy',
    description: 'Hypothetical straight alignments linking ancient sacred sites',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Ley lines are said to be channels of earth energy, used by ancient priests, shamans, and builders to align temples, mounds, and monoliths.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Many scholars argue alignments are coincidental pattern-seeking. Yet statistical clusters and worldwide parallels keep the controversy alive.',
      },
      {
        title: 'Modern Theories',
        content: 'Some believe ley lines correspond to telluric currents or subtle energy grids. Others imagine them as navigational systems for ancient aerial or spiritual travelers.',
      },
    ],
  },
  {
    id: 'am-43',
    name: 'Longyou Caves Mystery',
    description: 'Immense hand-carved caverns in China of unknown age and purpose',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Local legends claim the caves were the work of immortals or vanished dynasties wielding forgotten tools.',
      },
      {
        title: 'Archaeological Debates',
        content: 'The caves feature uniform chisel marks, massive scale, and no historical records of construction—leaving their creators unidentified.',
      },
      {
        title: 'Modern Theories',
        content: 'Some think Longyou was a ceremonial complex, flood bunker, or astronomical observatory. Others say it represents an unknown high culture of antiquity.',
      },
    ],
  },
  {
    id: 'am-44',
    name: 'Lost City of Z',
    description: 'A legendary jungle city sought by explorers like Percy Fawcett',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Stories describe an Amazonian El Dorado—a city of roads, walls, and stone towers hidden by dense rainforest and protected by spirits or guardians.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Modern lidar surveys confirm the Amazon held extensive ancient settlements. Whether any match Fawcett’s “Z” remains unproven.',
      },
      {
        title: 'Modern Theories',
        content: 'Some believe Z was real and intentionally concealed. Others propose Fawcett tapped into indigenous memories of pre-Columbian civilizations with advanced infrastructure.',
      },
    ],
  },
  {
    id: 'am-45',
    name: 'Lost Legion China',
    description: 'The theory that Roman soldiers settled in ancient China',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Legends tell of foreign warriors with rectangular shields and formation tactics aiding Chinese armies centuries ago.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Evidence is sparse—some sites hint at foreign influences, but definitive Roman artifacts remain elusive.',
      },
      {
        title: 'Modern Theories',
        content: 'Some theorists argue a lost Roman legion migrated east after capture. Others view it as myth blended with Silk Road cultural exchange.',
      },
    ],
  },
  {
    id: 'am-46',
    name: 'Madagascar Mounds',
    description: 'Mysterious mound formations on Madagascar with unclear origins',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Local stories speak of ancient peoples, spirits, or giants who raised earthen mounds as dwellings, tombs, or ritual altars. Some tales link them to vanished kingdoms swallowed by jungle and time.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Some mounds may be natural termite structures or erosional features, but others show patterns suggestive of human modification. Sparse excavation data leaves their cultural context largely unknown.',
      },
      {
        title: 'Modern Theories',
        content: 'Alternative researchers propose that Madagascar’s mounds are remnants of an Indian Ocean mound-building culture, perhaps connected to other enigmatic earthworks across Africa and Asia.',
      },
    ],
  },
  {
    id: 'am-47',
    name: 'Mars Face Anomalies',
    description: 'Apparent facial formations on the surface of Mars seen in NASA images',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'The “Face on Mars” captured the imagination as a colossal carved visage staring skyward, inspiring stories of Martian civilizations and titanic statues built to signal distant worlds.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Higher-resolution imagery reveals the face as a natural mesa with light and shadow creating the illusion of features. Most scientists regard it as classic pareidolia—seeing patterns in random forms.',
      },
      {
        title: 'Modern Theories',
        content: 'Some insist that subtle symmetry and surrounding formations hint at artificial design. They suggest Mars once hosted intelligent life and that the face is a weathered monument or coded marker.',
      },
    ],
  },
  {
    id: 'am-48',
    name: 'Mummy Curses',
    description: 'Alleged supernatural punishments linked to disturbing ancient mummies',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'From pharaohs to priests, stories abound of mummies bringing misfortune to tomb raiders, collectors, and curators. Strange deaths and accidents are often attributed to wrathful spirits or protective deities.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Skeptics point to coincidences, infections, and psychological suggestion as explanations for “cursed” events. Yet some cases cluster enough odd incidents to leave room for unsettling questions.',
      },
      {
        title: 'Modern Theories',
        content: 'Paranormal interpretations include lingering energetic fields, ancestral guardians, or thoughtforms attached to burial goods. Others suggest that intense media focus amplifies synchronicity around mummy openings.',
      },
    ],
  },
  {
    id: 'am-49',
    name: 'Nan Madol Megaliths',
    description: 'A mysterious city of stone built atop a lagoon in Micronesia',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Local legend claims Nan Madol was built by twin sorcerers who flew massive basalt logs into place using magic. The complex is associated with royal dynasties, sea spirits, and vanished power.',
      },
      {
        title: 'Archaeological Debates',
        content: 'The site consists of stacked prismatic basalt columns weighing many tons. How they were quarried, transported, and set on a coral reef platform remains a matter of engineering debate.',
      },
      {
        title: 'Modern Theories',
        content: 'Some see Nan Madol as evidence of a lost Pacific maritime empire. Others imagine it as a surviving outpost of Lemuria or Mu, constructed with techniques now lost to history.',
      },
    ],
  },
  {
    id: 'am-50',
    name: 'Nephilim Giant Offspring',
    description: 'Beings described in ancient texts as the giant offspring of gods and humans',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Biblical and apocryphal writings describe the Nephilim as mighty men of renown, born when “sons of God” took human wives. They are portrayed as giants who dominated early ages before the Flood.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Mainstream scholars interpret Nephilim tales as mythic or symbolic, not literal giants. Claims of giant skeleton discoveries almost always collapse under scrutiny, fraud, or misidentification.',
      },
      {
        title: 'Modern Theories',
        content: 'Some fringe theorists see Nephilim as genetic experiments, hybrid extraterrestrials, or remnants of a non-human lineage. They link megalithic structures and oversized tools to a giant-builder tradition.',
      },
    ],
  },
  {
    id: 'am-51',
    name: 'Oak Island Money Pit',
    description: 'A legendary booby-trapped shaft on Oak Island rumored to hold treasure',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'For over two centuries, seekers have dug into Oak Island’s “Money Pit,” chasing tales of pirate hoards, Templar treasure, or secret archives buried beneath layers of traps and flooding tunnels.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Excavations have found intriguing but inconclusive artifacts—wood, metal fragments, coconut fiber—without definitive proof of a vast treasure. Some argue the pit may be a collapsed natural sinkhole modified by early diggers.',
      },
      {
        title: 'Modern Theories',
        content: 'Speculations range from Templar documents and Shakespearean manuscripts to relics from Jerusalem. Others suggest the Money Pit saga is a self-perpetuating mystery fueled by sunk costs and legend.',
      },
    ],
  },
  {
    id: 'am-52',
    name: 'Olmec Were-Jaguar Mystery',
    description: 'Strange hybrid human–jaguar figures in Olmec art and ritual',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Olmec sculptures frequently depict infants or elites with jaguar features—fangs, slitted eyes, and feline heads—suggesting shapeshifting shamans, jaguar gods, or divine offspring.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Interpretations include rain deities, thunder spirits, royal lineages, and trance imagery. Scholars debate whether the were-jaguar motif encodes mythic narratives or ritual transformations.',
      },
      {
        title: 'Modern Theories',
        content: 'Some see the figures as evidence of shamanic journeys into animal consciousness. Others speculate about genetic memory, totemic hybridization, or encounters with non-human intelligences symbolized as jaguars.',
      },
    ],
  },
  {
    id: 'am-53',
    name: 'Phaistos Disc Code',
    description: 'A fired clay disc from Crete bearing undeciphered spiral symbols',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'The Phaistos Disc has been cast as a magical talisman, hymn, or message from a vanished Aegean culture. Its enigmatic symbols invite comparisons to spells or star maps.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Scholars disagree whether the disc records a true script, a syllabary, or pictorial code. With no bilingual text or long corpus, attempts at decipherment remain speculative.',
      },
      {
        title: 'Modern Theories',
        content: 'Some propose the disc encodes calendar cycles or initiation rites. Fringe theories suggest it is an artifact from a technologically advanced culture using a compact data format.',
      },
    ],
  },
  {
    id: 'am-54',
    name: 'Piri Reis Map',
    description: 'A 16th-century map with puzzlingly accurate coastal outlines',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'The Piri Reis Map is said to show parts of the Americas and even ice-free Antarctic coastlines at a time when such knowledge should have been impossible, hinting at older source charts.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Historians note that early explorers shared charts, and that perceived Antarctic details may be misinterpretations of South American coasts. Still, some placements and proportions seem oddly advanced.',
      },
      {
        title: 'Modern Theories',
        content: 'Alternative historians argue the map draws on ancient seafaring surveys conducted by lost civilizations with global navigation. They see it as a surviving fragment of a forgotten world atlas.',
      },
    ],
  },
  {
    id: 'am-55',
    name: 'Piri Mountains Ice Giants',
    description: 'Legends of giant beings associated with icy mountains and ancient maps',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Stories circulate of colossal beings inhabiting remote ice-clad peaks, woven together with interpretations of old maps that seem to show strange forms or humanoid figures in polar regions.',
      },
      {
        title: 'Archaeological Debates',
        content: 'There is no direct archaeological evidence for literal ice giants. However, myths of mountain spirits, titans, and glacier gods recur in cultures across the world, hinting at shared archetypes.',
      },
      {
        title: 'Modern Theories',
        content: 'Some suggest that tales of ice giants preserve distorted memories of encounters with massive hominids or glacial catastrophes. Others see them as psychic projections onto harsh and alien landscapes.',
      },
    ],
  },
  {
    id: 'am-56',
    name: 'Pyramid Void Scans',
    description: 'Large internal voids detected by muon scans inside the Great Pyramid',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Ancient and modern legends alike speak of hidden chambers within the Great Pyramid containing lost knowledge, star maps, or powerful relics. The idea of secret rooms has haunted imaginations for centuries.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Muon tomography has revealed previously unknown voids above the Grand Gallery, but their function—structural relief, abandoned passage, or hidden chamber—is hotly contested.',
      },
      {
        title: 'Modern Theories',
        content: 'Some believe the voids house undiscovered chambers with texts or devices from an earlier epoch. Others view them as part of an energy system or acoustic architecture still poorly understood.',
      },
    ],
  },
  {
    id: 'am-57',
    name: 'Sacsayhuamán Stonework',
    description: 'Incredibly precise interlocking stone walls above Cusco, Peru',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Local lore attributes Sacsayhuamán to the work of gods or giants who softened stone like wax. The fortress-like site is tied to lightning deities and cosmic battles.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Inca masonry techniques explain some aspects, yet the tight, multi-angled joints and massive block sizes challenge conventional tool and labor models.',
      },
      {
        title: 'Modern Theories',
        content: 'Some theorists posit lost stone-softening formulas, sonic shaping, or advanced measuring tools. Others argue Sacsayhuamán is a surviving fragment of a much older Andean civilization.',
      },
    ],
  },
  {
    id: 'am-58',
    name: 'Seven Sleepers Mystery',
    description: 'Legends of youths who slept for centuries in a hidden cave',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Christian and Islamic traditions preserve tales of the Seven Sleepers, persecuted youths who miraculously slept in a cave for centuries and awoke to a transformed world.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Multiple sites claim to be the Sleepers’ cave, with tombs and inscriptions supporting competing local traditions. None can be definitively authenticated as the original story’s location.',
      },
      {
        title: 'Modern Theories',
        content: 'Some view the legend as an allegory for spiritual awakening or cyclical time. Others speculate about suspended animation, time dilation, or anomalous temporal zones encoded in mythic form.',
      },
    ],
  },
  {
    id: 'am-59',
    name: 'Shroud of Turin',
    description: 'A linen cloth bearing a faint image believed by some to be Jesus’s burial shroud',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'The Shroud is venerated by many as a miraculous imprint left by a divine resurrection event, a relic imbued with healing power and profound spiritual significance.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Radiocarbon dating suggests a medieval origin, while supporters argue contamination or repair patches skewed results. The mechanism behind the image’s formation remains unexplained by simple painting theories.',
      },
      {
        title: 'Modern Theories',
        content: 'Some propose the image was formed by an intense burst of radiation or light. Skeptics favor sophisticated medieval artistry, while others keep the Shroud at the boundary between faith, science, and mystery.',
      },
    ],
  },
  {
    id: 'am-60',
    name: 'Sri Lanka Sky Palace',
    description: 'Legends and ruins linked to a palace in the sky over Sri Lanka',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Sites like Sigiriya inspire tales of sky palaces where kings, gods, or flying chariots descended. Frescoes of celestial maidens add to the impression of an airborne court or divine aerodrome.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Most archaeologists regard such sites as royal citadels built atop lofty rock outcrops, with decorative art reflecting mythic themes rather than literal aerial technology.',
      },
      {
        title: 'Modern Theories',
        content: 'Ancient astronaut narratives interpret the Sky Palace as a landing platform or command center. Esoteric writers see it as a ceremonial space where rulers communed with higher realms.',
      },
    ],
  },
  {
    id: 'am-61',
    name: 'Stone Spheres Costa Rica',
    description: 'Nearly perfect stone spheres scattered across Costa Rica',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Local stories claim the spheres belonged to gods, giants, or ancestral heroes, and that they once formed patterns aligned to stars or sacred landscapes.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Carved by pre-Columbian cultures, the spheres show impressive craftsmanship but uncertain purpose. They may have marked status, boundaries, or cosmological models.',
      },
      {
        title: 'Modern Theories',
        content: 'Some theorists connect the spheres to global “orbs” and megalithic traditions, suggesting a shared symbolic language of planets, atoms, or energy nodes.',
      },
    ],
  },
  {
    id: 'am-62',
    name: 'Stonehenge Anomalies',
    description: 'Strange features and unexplained aspects of the Stonehenge complex',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Beyond its primary circle, Stonehenge is said to harbor ghost lights, time slips, and spectral processions. Folklore insists that on certain nights, the stones move or speak.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Ground surveys reveal postholes, pits, and buried features suggesting multiple construction phases and changing uses. Some anomalies resist easy integration into current models of the site.',
      },
      {
        title: 'Modern Theories',
        content: 'Paranormal theories link the anomalies to geomagnetic quirks or interdimensional thin spots. Others see Stonehenge as only one node in a far larger ritual landscape still being mapped.',
      },
    ],
  },
  {
    id: 'am-63',
    name: 'Sumerian Dream Tablets',
    description: 'Ancient tablets recording dreams and their interpretations in Sumer',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Sumerian texts describe gods speaking through dreams, sending warnings, prophecies, and instructions. Temples sometimes maintained dream interpreters as official oracles.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Clay tablets catalog dream symbols and outcomes, hinting at early systematic approaches to the unconscious. Scholars debate how much was spiritual, psychological, or political control.',
      },
      {
        title: 'Modern Theories',
        content: 'Some see these tablets as evidence of early experiments with altered states and astral travel. Occultists believe Sumerian dream practices tapped into stable “dream temples” on inner planes.',
      },
    ],
  },
  {
    id: 'am-64',
    name: 'Sumerian Stargate Theories',
    description: 'Speculation that Sumerian sites housed portals to other worlds',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Myths of gods descending from the heavens, traveling between realms, or using gates in temple courtyards inspire the notion of ancient stargates embedded in ziggurat complexes.',
      },
      {
        title: 'Archaeological Debates',
        content: 'There is no direct archaeological evidence for literal portals, but ceremonial gateways and processional routes clearly held symbolic importance in Sumerian religious life.',
      },
      {
        title: 'Modern Theories',
        content: 'Ancient astronaut and occult traditions claim some Sumerian sites are dormant gateways once used by non-human intelligences. Rituals, alignments, and specific materials are thought to “tune” these stargates.',
      },
    ],
  },
  {
    id: 'am-65',
    name: 'Tartary Giants',
    description: 'Legends of giant rulers and builders from a forgotten empire of Tartary',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'In alternative history circles, Tartary is portrayed as a vast, erased empire whose giant inhabitants built monumental cities and star forts, only to be wiped from official records.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Mainstream historians regard “Tartary” as a loose geographic label, not a single empire. Claims of giant skeletons and impossibly large doorways are typically anecdotal or misinterpreted architecture.',
      },
      {
        title: 'Modern Theories',
        content: 'Conspiracy narratives link Tartary giants to global mudflood events, altered maps, and suppressed chronicles. For some, they embody a sense that our true ancient history is far stranger than textbooks admit.',
      },
    ],
  },
  {
    id: 'am-66',
    name: 'Tartessos Lost Kingdom',
    description: 'A wealthy ancient Iberian kingdom believed to have vanished mysteriously',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Greek writers described Tartessos as a rich land ruled by King Argantonius, blessed with metals, ships, and longevity. Legends portray it as a radiant coastal civilization that vanished beneath storms or advancing seas.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Excavations in southwestern Spain reveal signs of early urbanization and metalworking cultures possibly tied to Tartessos. The precise borders, capital, and cause of decline remain elusive.',
      },
      {
        title: 'Modern Theories',
        content: 'Some link Tartessos to Atlantis traditions, seeing it as one of several Atlantic civilizations destroyed by catastrophes. Others suggest trade collapse, climate change, or assimilation erased it from history.',
      },
    ],
  },
  {
    id: 'am-67',
    name: 'Tarim Mummies',
    description: 'Naturally preserved mummies found in China’s Tarim Basin with unusual features',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'The striking appearance of the Tarim mummies—tall, light-haired individuals with intricate textiles—sparked stories of forgotten tribes, priest-kings, and travelers from distant lands.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Genetic studies show connections to ancient Eurasian populations, complicating narratives about early migrations. Their burial customs and technologies challenge assumptions about Bronze Age Central Asia.',
      },
      {
        title: 'Modern Theories',
        content: 'Some see the mummies as evidence of global prehistoric contact networks. Others speculate about lost Indo-European migrations or influential priestly castes that shaped Silk Road cultures.',
      },
    ],
  },
  {
    id: 'am-68',
    name: 'Tayos Cave Library',
    description: 'A rumored metallic library said to be hidden within Ecuador’s Tayos Caves',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Stories describe a secret chamber deep within Tayos containing metallic books, golden artifacts, and records of a vanished civilization. Indigenous legends speak of guardians and ancient beings dwelling in the darkness.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Despite expeditions—including one famously involving astronaut Neil Armstrong—no metallic library has been confirmed. The cave system is vast, dangerous, and poorly mapped, leaving room for speculation.',
      },
      {
        title: 'Modern Theories',
        content: 'Fringe theorists link the alleged library to Atlantean refugees, pre-human intelligences, or alien visitors. Some believe the knowledge cache is intentionally concealed until humanity reaches a new stage of development.',
      },
    ],
  },
  {
    id: 'am-69',
    name: 'Tiwanaku Gateway',
    description: 'The monumental “Gateway of the Sun” at Tiwanaku with enigmatic carvings',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Local lore ties Tiwanaku to creator gods who emerged after a great flood. The Gateway of the Sun is said to depict cosmological cycles, divine rulers, and portals between worlds.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Scholars debate the purpose and origin of the Gateway, its astronomical alignments, and its relationship to Tiwanaku’s ceremonial layout. Weathering suggests multiple construction phases or reuse.',
      },
      {
        title: 'Modern Theories',
        content: 'Some believe the Gateway encodes an ancient calendar far older than the Tiwanaku culture. Others view it as an interdimensional symbol or memory of a lost Andean high civilization.',
      },
    ],
  },
  {
    id: 'am-70',
    name: 'Ubar Atlantis Sands',
    description: 'A legendary Arabian city lost beneath the desert, sometimes called the “Atlantis of the Sands”',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Arabian tradition speaks of Iram of the Pillars, a mighty city punished by God and swallowed by shifting dunes. Travelers told of ruins glimpsed during storms and nights when the sands glowed eerily.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Satellite archaeology identified collapsed subsurface voids at Shisr that may represent a lost caravan city. Whether this is truly the legendary Ubar remains contested.',
      },
      {
        title: 'Modern Theories',
        content: 'Some equate Ubar with an outpost of a Bronze Age desert empire or with global cataclysms that erased desert civilizations. Others see it as an allegory woven around multiple abandoned settlements.',
      },
    ],
  },
  {
    id: 'am-71',
    name: 'Ural Pygmy Tools',
    description: 'Tiny, precise tools found in the Ural Mountains attributed in legend to miniature beings',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Folklore in the Urals speaks of dwarfish craftsmen or subterranean tribes mastering metallurgy and leaving behind tools too small for human hands.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Some objects identified as tiny “tools” may be natural formations or misinterpreted artifacts. Authentic miniature implements remain rare and difficult to classify.',
      },
      {
        title: 'Modern Theories',
        content: 'Speculative interpretations tie the tools to beings like brownies, gnomes, or ancient fairy folk. Others imagine them as ritual miniatures used in sympathetic magic or symbolic craftsmanship.',
      },
    ],
  },
  {
    id: 'am-72',
    name: 'Vinča Script Enigma',
    description: 'Symbols from Neolithic Europe that may represent one of the world’s earliest writing systems',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Some believe the Vinča symbols encode sacred teachings, star lore, or instructions from gods who taught early Europeans agriculture and crafts.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Scholars disagree whether the symbols constitute true writing, proto-writing, or decorative motifs. Their spread across settlements suggests cultural complexity in the Balkans far earlier than assumed.',
      },
      {
        title: 'Modern Theories',
        content: 'Alternative researchers propose that the Vinča script represents a forgotten Old European civilization erased by later migrations. Some theorize connections to Sumerian or global symbol systems.',
      },
    ],
  },
  {
    id: 'am-73',
    name: 'Vinland Stone Inscriptions',
    description: 'Controversial runic stones suggesting Norse presence in North America pre-Columbus',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'The idea of Viking explorers leaving runic messages deep inland fuels tales of secret expeditions, lost settlements, and heroic journeys beyond known history.',
      },
      {
        title: 'Archaeological Debates',
        content: 'While Norse presence at L’Anse aux Meadows is verified, runestones like the Kensington Stone remain disputed, with arguments over linguistic authenticity, carving weathering, and historical plausibility.',
      },
      {
        title: 'Modern Theories',
        content: 'Some theorists believe Norse explorers explored far deeper into North America than accepted, leaving coded trail markers. Others see the stones as intentional hoaxes or folk art later mistaken for ancient evidence.',
      },
    ],
  },
  {
    id: 'am-74',
    name: 'Yangshan Unfinished Block',
    description: 'A massive stone block in China’s Yangshan Quarry abandoned mid-carve',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Legends claim the stone block—over a thousand tons—was meant for an emperor’s monument but proved too heavy even for divine or supernatural laborers.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Engineers note that the block’s immense size would have made transportation nearly impossible with known ancient methods. Its abandonment shows the limits of imperial ambition.',
      },
      {
        title: 'Modern Theories',
        content: 'Some argue the quarry reveals knowledge of stone extraction techniques that scaled far beyond practical needs, possibly inherited from older, more capable cultures.',
      },
    ],
  },
  {
    id: 'am-75',
    name: 'Yonaguni Underwater Ruins',
    description: 'Submerged step-like formations off Japan that resemble ancient architecture',
    categoryId: 'ancients',
    icon: '🏛️',
    sections: [
      {
        title: 'Myths & Legends',
        content: 'Local divers describe pyramid-like terraces, stairs, and plazas belonging to a sunken kingdom. Stories speak of temples drowned by sudden cataclysm.',
      },
      {
        title: 'Archaeological Debates',
        content: 'Geologists argue many formations are natural fracturing of sandstone. Yet some features—right angles, pillars, apparent carving—suggest possible human modification.',
      },
      {
        title: 'Modern Theories',
        content: 'Speculations include an Ice Age civilization, lost Pacific empire, or ceremonial center destroyed by seismic events. Some link Yonaguni to Lemuria or Mu traditions.',
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

/**
 * Get all ancient mystery topics
 * @returns Array of all ancient mystery topics
 */
export const getAllAncients = (): readonly AncientTopic[] => {
  return ancientsData;
};

/**
 * Get count of ancient mystery topics
 * @returns Total number of ancient mystery topics
 */
export const getAncientsCount = (): number => {
  return ancientsData.length;
};
