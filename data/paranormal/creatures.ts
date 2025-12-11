// data/paranormal/creatures.ts
/**
 * Creatures Category Data
 * Cryptids and legendary creatures from around the world
 * 
 * Includes: Bigfoot, Loch Ness Monster, Chupacabra, Mothman, Jersey Devil
 */

// data/paranormal/creatures.ts
/**
 * Creatures Category Data
 * Cryptids and legendary creatures from around the world
 * 
 * Includes: Bigfoot, Loch Ness Monster, Chupacabra, Mothman, Jersey Devil
 */

import { categoryColors } from '@/constants/Colors';
import type { TopicSection, CategoryId } from './types';

export interface CreatureTopic {
  id: string;
  name: string;
  description: string;
  categoryId: CategoryId;
  icon: string;
  sections: TopicSection[];
}

export const creaturesData: readonly CreatureTopic[] = [
  {
    id: 'cr-1',
    name: 'Bigfoot',
    description: 'The legendary ape-like creature of North American forests',
    categoryId: 'creatures',
    icon: '🦍',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Bigfoot, also known as Sasquatch, is a cryptid said to inhabit forests of North America. Native American tribes have legends of wild men dating back centuries. The creature is typically described as a large, hairy, bipedal humanoid standing 6-9 feet tall.',
      },
      {
        title: 'Notable Sightings',
        content: 'The Patterson-Gimlin film from 1967 remains the most famous alleged footage. Thousands of sightings have been reported across the Pacific Northwest, with footprints measuring up to 24 inches long discovered at various locations.',
      },
      {
        title: 'Evidence & Research',
        content: 'Physical evidence includes hair samples, footprint casts, and audio recordings of alleged vocalizations. The Bigfoot Field Researchers Organization maintains a database of over 5,000 reported sightings. DNA analysis of samples has been inconclusive.',
      },
    ],
  },
  {
    id: 'cr-2',
    name: 'Loch Ness Monster',
    description: 'The mysterious aquatic creature of Scottish waters',
    categoryId: 'creatures',
    icon: '🐉',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Nessie is a cryptid said to inhabit Loch Ness in the Scottish Highlands. The first recorded sighting dates to 565 AD when Saint Columba encountered a "water beast." Modern interest began with the famous "Surgeon\'s Photograph" in 1934.',
      },
      {
        title: 'Notable Sightings',
        content: 'Over 1,000 sightings have been reported. The creature is typically described as having a long neck, small head, and humps protruding from the water. Sonar readings have detected large, unexplained objects in the loch\'s depths.',
      },
      {
        title: 'Evidence & Research',
        content: 'Multiple expeditions have used sonar, submarines, and underwater cameras. Operation Deepscan in 1987 covered the entire loch. While no conclusive evidence has been found, the mystery continues to attract researchers and tourists worldwide.',
      },
    ],
  },
  {
    id: 'cr-3',
    name: 'Chupacabra',
    description: 'The blood-sucking beast of Latin American folklore',
    categoryId: 'creatures',
    icon: '🦇',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'The Chupacabra, meaning "goat-sucker" in Spanish, first appeared in Puerto Rico in 1995. Described as a reptilian creature with leathery skin, sharp spines, and glowing red eyes, it allegedly drains the blood of livestock.',
      },
      {
        title: 'Notable Sightings',
        content: 'Reports spread rapidly through Latin America and into the southern United States. Farmers discovered livestock with puncture wounds and completely drained of blood. Descriptions vary from reptilian to canine-like creatures.',
      },
      {
        title: 'Evidence & Research',
        content: 'Several carcasses claimed to be Chupacabras have been examined and identified as coyotes or dogs with mange. However, the pattern of livestock deaths and eyewitness accounts continue to fuel the legend.',
      },
    ],
  },
  {
    id: 'cr-4',
    name: 'Mothman',
    description: 'The winged humanoid creature of West Virginia',
    categoryId: 'creatures',
    icon: '🦋',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Mothman is a cryptid first sighted in Point Pleasant, West Virginia in 1966. Described as a large humanoid figure with massive wings and glowing red eyes, it became associated with the tragic Silver Bridge collapse in 1967.',
      },
      {
        title: 'Notable Sightings',
        content: 'Over 100 people reported sightings between November 1966 and December 1967. Witnesses described a creature 6-7 feet tall with a 10-foot wingspan. Sightings ceased after the bridge disaster that killed 46 people.',
      },
      {
        title: 'Evidence & Research',
        content: 'The Mothman has become a cultural phenomenon, inspiring books, films, and an annual festival. Some researchers suggest it was a sandhill crane, while others believe it was a harbinger of disaster. The mystery remains unsolved.',
      },
    ],
  },
  {
    id: 'cr-5',
    name: 'Jersey Devil',
    description: 'The legendary creature of the New Jersey Pine Barrens',
    categoryId: 'creatures',
    icon: '😈',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Legend states the Jersey Devil was born in 1735 as the 13th child of Mother Leeds. The infant transformed into a creature with hooves, bat wings, a forked tail, and a horse-like head before flying up the chimney.',
      },
      {
        title: 'Notable Sightings',
        content: 'The most famous wave of sightings occurred in January 1909, with thousands of people across New Jersey and Pennsylvania reporting encounters. Footprints in snow, livestock attacks, and aerial sightings were documented.',
      },
      {
        title: 'Evidence & Research',
        content: 'The creature has been blamed for livestock deaths and strange sounds in the Pine Barrens for over 280 years. Despite numerous searches and investigations, no physical evidence has been conclusively linked to the Jersey Devil.',
      },
    ],
  },
	  {
    id: 'cr-6',
    name: 'Abura-sumashi Oil Dwarf',
    description: 'A squat yokai said to haunt mountain roads in Japan',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Abura-sumashi is a spirit from Kumamoto folklore, often described as a short, stout figure with a stone-like head and straw cloak. It is said to be the ghost of someone who stole cooking oil, cursed to wander lonely mountain paths.',
      },
      {
        title: 'Notable Sightings',
        content: 'Stories typically involve travelers glimpsing a motionless figure by the roadside, watching silently from the shadows. When approached, the entity vanishes or is found to be much closer than expected.',
      },
      {
        title: 'Evidence & Research',
        content: 'No physical evidence exists beyond folktales and illustrated scrolls. Modern paranormal researchers treat Abura-sumashi as a classic guilt-based yokai born from moral cautionary stories.',
      },
    ],
  },
  {
    id: 'cr-7',
    name: 'Adaro Mer-Warriors',
    description: 'Violent merman-like beings from Solomon Islands lore',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Adaro are described as half-human, half-fish warriors who inhabit the seas around the Solomon Islands. They are said to travel in waterspouts, wield deadly fish as weapons, and harbor hatred for humans.',
      },
      {
        title: 'Notable Sightings',
        content: 'Fishermen tell of strange humanoid figures seen riding water spouts or lurking under boats. Mysterious drownings and sudden storms are sometimes blamed on Adaro attacks.',
      },
      {
        title: 'Evidence & Research',
        content: 'Researchers view Adaro as a personification of dangerous waters and storms. No verifiable encounters exist, but the lore reflects deep respect and fear of the ocean among island communities.',
      },
    ],
  },
  {
    id: 'cr-8',
    name: 'Aghori Sect',
    description: 'Ascetic practitioners associated with terrifying cemetery rituals',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'The Aghori are a real sect of ascetics in India known for extreme practices that embrace death and impurity—meditating in cremation grounds and using skulls in ritual. Legends exaggerate them into almost inhuman beings wielding dark powers.',
      },
      {
        title: 'Notable Sightings',
        content: 'Travel accounts describe eerie encounters with ash-covered figures, sometimes attributed supernatural insight or healing, other times feared as necromantic sorcerers.',
      },
      {
        title: 'Evidence & Research',
        content: 'Anthropologists emphasize that Aghori are human practitioners within a complex spiritual system. Cryptid-style stories about them often blur into sensationalism and horror fiction.',
      },
    ],
  },
  {
    id: 'cr-9',
    name: 'Ahool Giant Bat',
    description: 'An enormous bat-like cryptid reported in Indonesian jungles',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'The Ahool is said to be a massive bat or bat-like creature with a wingspan up to 10 feet, grey fur, and a flat, almost human-like face. Its name comes from its loud “a-hooool” call echoing through the rainforest.',
      },
      {
        title: 'Notable Sightings',
        content: 'Explorers and locals alike have reported huge shadowy shapes passing overhead at night, accompanied by strange cries. Some accounts describe it swooping low over rivers and campsites.',
      },
      {
        title: 'Evidence & Research',
        content: 'No specimens or clear photographs exist. Skeptics suggest misidentified large bats, owls, or birds, while cryptozoologists argue that undocumented megabats could still exist in remote regions.',
      },
    ],
  },
  {
    id: 'cr-10',
    name: 'Ahuizotl Aztec Predator',
    description: 'A dog-sized aquatic predator from Aztec mythology with a hand on its tail',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'The Ahuizotl is described in Aztec codices as an aggressive water creature resembling a small dog or otter with a hand at the end of its tail. It was said to drown victims and pluck out their eyes and nails.',
      },
      {
        title: 'Notable Sightings',
        content: 'Colonial reports mention suspicious drownings in lakes and canals attributed to the Ahuizotl. Some modern encounters with unknown aquatic animals in Mexico echo elements of the legend.',
      },
      {
        title: 'Evidence & Research',
        content: 'Historians see Ahuizotl tales as a mix of myth and warnings about dangerous waters. No biological candidate fully matches the description, though comparisons are made to otters, seals, or large fish.',
      },
    ],
  },
  {
    id: 'cr-11',
    name: 'Aigamuxa Eyes-on-Feet',
    description: 'A desert-dwelling man-eater whose eyes are located on its feet',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'In Khoisan folklore of southern Africa, the Aigamuxa is a man-eating creature that looks human but has its eyes on its feet, forcing it to stop and bend down to see.',
      },
      {
        title: 'Notable Sightings',
        content: 'Tales describe travelers vanishing on lonely dunes, with survivors claiming to have seen strange, stumbling figures that seemed blind until they bent toward the sand.',
      },
      {
        title: 'Evidence & Research',
        content: 'Folklorists interpret the Aigamuxa as a symbolic predator of the desert, reminding people to respect the dangers of isolation and dehydration. No physical evidence exists beyond oral tradition.',
      },
    ],
  },
  {
    id: 'cr-12',
    name: 'Akhlut Wolf-Orca',
    description: 'An Inuit shapeshifting creature that alternates between wolf and orca',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'The Akhlut in Inuit lore is a fierce creature that shifts between a killer whale in the sea and a wolf on land, leaving eerie tracks that begin or end at the shoreline.',
      },
      {
        title: 'Notable Sightings',
        content: 'Stories from Arctic communities describe unexplained wolf tracks leading straight into open water, as well as aggressive, unusually coordinated orca behavior near coasts.',
      },
      {
        title: 'Evidence & Research',
        content: 'Researchers see Akhlut lore as an expression of respect for apex predators and the fluid boundary between land and sea in Arctic life. No shapeshifting hybrid has ever been documented.',
      },
    ],
  },
  {
    id: 'cr-13',
    name: 'Albatwitch Apple Thief',
    description: 'A small ape-like creature said to steal apples in Pennsylvania',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'The Albatwitch is a diminutive, hairy humanoid said to inhabit the forests near Columbia, Pennsylvania. Its name comes from “apple-snitch,” reflecting its habit of raiding orchards.',
      },
      {
        title: 'Notable Sightings',
        content: 'Reports describe quick, child-sized figures darting among trees, pelting people with stolen apples or watching from branches. Sightings peaked in the 19th and early 20th centuries.',
      },
      {
        title: 'Evidence & Research',
        content: 'No physical trace of the Albatwitch has been confirmed. Modern enthusiasts treat it as a regional mini–Bigfoot legend, kept alive through festivals and storytelling.',
      },
    ],
  },
  {
    id: 'cr-14',
    name: 'Almasty Caucasus Wildman',
    description: 'A shaggy human-like cryptid reported in the Caucasus Mountains',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'The Almasty (or Almas) is described as a primitive, hairy hominid living in remote regions of the Caucasus and Central Asia. It is often portrayed as more humanlike and smaller than Bigfoot.',
      },
      {
        title: 'Notable Sightings',
        content: 'Witnesses include shepherds, hunters, and soldiers who claim to have seen upright, hair-covered figures moving swiftly over rugged terrain. Some stories describe brief interactions or captured individuals.',
      },
      {
        title: 'Evidence & Research',
        content: 'Hair samples and tracks have been collected, but analyses yield ambiguous results. Some researchers propose surviving archaic humans or undiscovered primates; skeptics suggest misidentifications and folklore.',
      },
    ],
  },
  {
    id: 'cr-15',
    name: 'Am Fear Liath Mòr',
    description: 'The “Big Grey Man” said to haunt Scotland’s Ben MacDhui',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Am Fear Liath Mòr is described as a tall, shadowy figure or presence on Ben MacDhui in the Cairngorms. It is associated with overwhelming dread, disembodied footsteps, and a sense of pursuit.',
      },
      {
        title: 'Notable Sightings',
        content: 'Mountaineers report hearing an extra set of footsteps, seeing a towering form through mist, or feeling compelled to flee without clear cause. Some claim to have glimpsed a gigantic grey figure on the ridgelines.',
      },
      {
        title: 'Evidence & Research',
        content: 'Psychologists point to infrasound, exhaustion, and Brocken specter effects as explanations. Paranormal investigators consider it a mountain spirit, tulpa, or environmental entity linked to extreme isolation.',
      },
    ],
  },
  {
    id: 'cr-16',
    name: 'Amemaita Sea Creature',
    description: 'A little-known aquatic cryptid from South American waters',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Amemaita is described in scattered accounts as a strange sea creature inhabiting South American rivers or coastal waters, sometimes linked to serpentine or fish-like monsters of local tradition.',
      },
      {
        title: 'Notable Sightings',
        content: 'Fishermen report brief glimpses of hump-backed forms or long, finned bodies breaking the surface before diving away. Some stories claim attacks on nets or small boats.',
      },
      {
        title: 'Evidence & Research',
        content: 'Documentation is sparse, and many researchers treat Amemaita as a name applied to various unidentified aquatic animals rather than a single defined species.',
      },
    ],
  },
  {
    id: 'cr-17',
    name: 'Amomongo Ape',
    description: 'A feral ape-like cryptid reported in the Philippines',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'The Amomongo is described as a white-haired, long-clawed ape that lurks in caves and attacks livestock and occasionally humans in rural Philippine regions.',
      },
      {
        title: 'Notable Sightings',
        content: 'Reports include goats and chickens torn apart, claw marks on trees, and witnesses seeing a hunched, hairy figure fleeing into the jungle. Media coverage has occasionally sparked brief “Amomongo scares.”',
      },
      {
        title: 'Evidence & Research',
        content: 'No body or clear photograph has surfaced. Some suggest misidentified macaques or other monkeys; others argue that an unknown primate species could still hide in remote areas.',
      },
    ],
  },
  {
    id: 'cr-18',
    name: 'Artrellia Papuan Dragon',
    description: 'A winged reptilian cryptid said to inhabit Papua New Guinea',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Artrellia is referenced in some accounts as a dragon-like flying creature in Papua New Guinea, blending local stories of dangerous sky-reptiles and modern dragon sightings.',
      },
      {
        title: 'Notable Sightings',
        content: 'Witnesses describe large, leathery-winged forms gliding over forests at dusk, with long tails and glowing eyes. Some connect these sightings with pterosaur-like cryptids from the same region.',
      },
      {
        title: 'Evidence & Research',
        content: 'Reports are rare and often secondhand. Cryptozoologists group Artrellia with global “living pterosaur” legends, while skeptics point to misidentified birds, bats, or atmospheric illusions.',
      },
    ],
  },
  {
    id: 'cr-19',
    name: 'Atmospheric Beasts',
    description: 'Supposed living entities made of cloud-like or plasma-like matter in the sky',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Atmospheric beasts are speculative cryptids described as jellyfish-like, amorphous creatures drifting in the upper sky, partially invisible or mistaken for clouds or UFOs.',
      },
      {
        title: 'Notable Sightings',
        content: 'Witnesses claim to see semi-transparent, structured shapes moving against the wind, changing color, or glowing faintly before dissolving into the clouds.',
      },
      {
        title: 'Evidence & Research',
        content: 'No solid evidence exists. Researchers who entertain the idea suggest unknown atmospheric life or plasma phenomena, while mainstream science attributes sightings to clouds, mirages, or psychological effects.',
      },
    ],
  },
  {
    id: 'cr-20',
    name: 'Ayia Napa Sea Serpent',
    description: 'A sea serpent-like creature reported off Ayia Napa, Cyprus',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Known locally as “To Filiko” (The Friendly One), this alleged sea serpent is said to inhabit the waters near Ayia Napa, blending modern tourism tales with older maritime monster legends.',
      },
      {
        title: 'Notable Sightings',
        content: 'Residents and visitors report long, dark shapes just below the surface, humps moving in a line, or a serpent-like head rising briefly from waves along the rocky coast.',
      },
      {
        title: 'Evidence & Research',
        content: 'Videos and photos are inconclusive, often explainable as wakes, debris, or known marine animals. Still, the Ayia Napa serpent has become part of local identity and cryptid tourism.',
      },
    ],
  },
  {
    id: 'cr-21',
    name: 'Batsquatch Mt St Helens',
    description: 'A bat-winged humanoid cryptid linked to Mount St. Helens',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Batsquatch is described as a towering, muscular humanoid with bat-like wings, glowing eyes, and blue-tinged fur, said to have appeared after the 1980 eruption of Mount St. Helens.',
      },
      {
        title: 'Notable Sightings',
        content: 'Witnesses in the Pacific Northwest report a flying creature with a 20–30 foot wingspan, seen near mountains and highways, sometimes compared to a demonic gargoyle.',
      },
      {
        title: 'Evidence & Research',
        content: 'Evidence is limited to anecdotes and blurry sketches. Many consider Batsquatch a modern folklore mashup of Bigfoot, Mothman, and pop culture monsters.',
      },
    ],
  },
  {
    id: 'cr-22',
    name: 'Beast of Béarn',
    description: 'A mysterious predator said to stalk the Béarn region of France',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Similar to other French beast legends, the Beast of Béarn is described as a large, wolf-like or feline predator responsible for livestock killings and fear in rural communities.',
      },
      {
        title: 'Notable Sightings',
        content: 'Reports speak of a dark, powerful animal moving quickly across fields, sometimes walking with an oddly deliberate gait or showing little fear of humans.',
      },
      {
        title: 'Evidence & Research',
        content: 'Local authorities typically attribute attacks to wolves, feral dogs, or big cats. Cryptid interpretations persist where patterns of kills seem unusually ferocious or precise.',
      },
    ],
  },
  {
    id: 'cr-23',
    name: 'Beast of Bladenboro',
    description: 'A vampiric feline-like beast reported in North Carolina in the 1950s',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'In 1953–54, Bladenboro, North Carolina was terrorized by reports of a mysterious beast killing dogs and draining them of blood. Descriptions varied from a large cat to a panther-like monster.',
      },
      {
        title: 'Notable Sightings',
        content: 'Residents described a sleek, cat-like creature with a long tail and eerie screams. Panic grew as more animals were found mutilated, prompting organized hunts that never caught the culprit.',
      },
      {
        title: 'Evidence & Research',
        content: 'Tracks and carcasses were documented, but no body was recovered. Explanations include cougars, feral dogs, or a series of unrelated attacks woven into a single legend.',
      },
    ],
  },
  {
    id: 'cr-24',
    name: 'Beast of Bodmin Moor',
    description: 'A phantom big cat said to roam Bodmin Moor in Cornwall, England',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Since the late 20th century, Bodmin Moor has been associated with a mysterious black panther-like cat, said to be responsible for livestock killings and eerie sightings on the moor.',
      },
      {
        title: 'Notable Sightings',
        content: 'Witnesses report a large, sleek cat with a long tail moving across fields and ridges. Photos, videos, and pawprints have been presented, though none are conclusive.',
      },
      {
        title: 'Evidence & Research',
        content: 'Official investigations found no proof of a breeding big cat population, but did not entirely rule out escaped exotics. The Beast of Bodmin remains a flagship “phantom cat” case in the UK.',
      },
    ],
  },
  {
    id: 'cr-25',
    name: 'Beast of Bray Road',
    description: 'A werewolf-like creature reported near Bray Road, Wisconsin',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Beginning in the late 1980s, witnesses near Elkhorn, Wisconsin reported encounters with a bipedal, wolf-headed creature prowling rural Bray Road, blending traditional werewolf lore with modern sightings.',
      },
      {
        title: 'Notable Sightings',
        content: 'Accounts describe a muscular, fur-covered figure with glowing eyes, seen hunched over roadkill or chasing vehicles. The creature often retreats into cornfields or tree lines when noticed.',
      },
      {
        title: 'Evidence & Research',
        content: 'Researchers have collected tracks and testimony but no definitive physical proof. Explanations range from misidentified dogs or bears to an unknown canid or supernatural shapeshifter.',
      },
    ],
  },
  {
    id: 'cr-26',
    name: 'Beast of Busco Turtle',
    description: 'A giant snapping turtle said to inhabit Fulk Lake in Indiana',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Known as “Oscar,” this enormous turtle was first reported in the 1890s and resurged in 1949, described as the size of a dining table and capable of dragging livestock underwater.',
      },
      {
        title: 'Notable Sightings',
        content: 'Large disturbances in the water, overturned boats, and glimpses of a massive shell sparked frenzied attempts to capture Oscar—none successful. Crowds gathered for days hoping to see the creature.',
      },
      {
        title: 'Evidence & Research',
        content: 'Searches using divers, traps, and even cranes found nothing conclusive. Skeptics cite exaggeration, while believers argue that giant snapping turtles can reach improbable sizes.',
      },
    ],
  },
  {
    id: 'cr-27',
    name: 'Beast of Gévaudan',
    description: 'A mysterious wolf-like beast that terrorized 18th-century France',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Between 1764 and 1767, a monstrous predator killed dozens in Gévaudan. Described as a massive wolf with an elongated body and supernatural resilience, it became a legend of fear.',
      },
      {
        title: 'Notable Sightings',
        content: 'Eyewitnesses spoke of a reddish mane, immense jaws, and the ability to shrug off gunfire. Multiple “kills” of the beast occurred, yet attacks continued.',
      },
      {
        title: 'Evidence & Research',
        content: 'Theories include large wolves, wolf-dog hybrids, escaped exotic animals, or multiple predators. Autopsy records of alleged beasts leave the mystery unresolved.',
      },
    ],
  },
  {
    id: 'cr-28',
    name: 'Big Grey Man Ben MacDhui',
    description: 'A towering spectral presence haunting Scotland’s Ben MacDhui',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Often conflated with Am Fear Liath Mòr, the Big Grey Man appears as a giant humanoid shape accompanied by footsteps and intense dread on the Cairngorm peaks.',
      },
      {
        title: 'Notable Sightings',
        content: 'Climbers report seeing a massive grey silhouette in fog or hearing footsteps pacing behind them. Some flee the mountain in panic without ever seeing a form directly.',
      },
      {
        title: 'Evidence & Research',
        content: 'Explanations include Brocken specter illusions, infrasound, or psychological stress. However, hikers insist the presence feels consciously aware and malevolent.',
      },
    ],
  },
  {
    id: 'cr-29',
    name: 'Big Muddy Monster',
    description: 'A swamp-dwelling humanoid reported in Murphysboro, Illinois',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Also called the Murphysboro Mud Monster, it is described as a large, white-furred, foul-smelling creature emerging from the Big Muddy River.',
      },
      {
        title: 'Notable Sightings',
        content: 'In 1973, multiple witnesses—including police officers—reported seeing a tall creature covered in mud and slime. Its shrieks and heavy steps were heard for weeks.',
      },
      {
        title: 'Evidence & Research',
        content: 'Tracks, odors, and disturbed vegetation were recorded, but no creature was captured. The case is considered one of Illinois’s strongest Bigfoot-type reports.',
      },
    ],
  },
  {
    id: 'cr-30',
    name: 'Bigfoot Sasquatch',
    description: 'A widespread term for North American wildman creatures',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'While often associated with Pacific Northwest Bigfoot, the term Sasquatch comes from Salish languages and represents numerous tribal stories of giant, hairy forest beings.',
      },
      {
        title: 'Notable Sightings',
        content: 'Encounters span Canada and the U.S., including roadside sightings, wood knocks, howls, and encounters near remote cabins. Some describe peaceful giants; others describe territorial behavior.',
      },
      {
        title: 'Evidence & Research',
        content: 'Footprints, hair, and audio recordings continue to surface. Genetic studies remain inconclusive but fuel ongoing debate over a possible undiscovered primate species.',
      },
    ],
  },
  {
    id: 'cr-31',
    name: 'Blue Mountain Panther',
    description: 'A phantom big cat reported in Australia’s Blue Mountains',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Stories of large black cats roaming the Blue Mountains have persisted for decades. Some suggest escaped circus cats or wartime mascots started a breeding population.',
      },
      {
        title: 'Notable Sightings',
        content: 'Hikers and farmers report sleek black felines larger than any native species. Photos and grainy videos show ambiguous panther-like shapes.',
      },
      {
        title: 'Evidence & Research',
        content: 'Government investigations found no physical evidence. Yet, livestock kills and prints keep the legend alive, placing it among persistent “Australian phantom cat” mysteries.',
      },
    ],
  },
  {
    id: 'cr-32',
    name: 'Blue Ridge Howler',
    description: 'A wolf-like Appalachian cryptid with glowing red eyes and a screaming call',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Described as a large creature with horns, a bushy tail, and red eyes, the Howler is said to stalk the Blue Ridge Mountains.',
      },
      {
        title: 'Notable Sightings',
        content: 'Witnesses hear blood-curdling screams echoing across valleys. Some report seeing a dark mass dart between trees or watching from ridgelines.',
      },
      {
        title: 'Evidence & Research',
        content: 'Recordings of eerie howls exist but lack clarity. Researchers propose misidentified bears, elk, or escaped exotics, though none perfectly match the creature’s description.',
      },
    ],
  },
  {
    id: 'cr-33',
    name: 'Bucan Beast',
    description: 'A little-known European cryptid described as a hulking, shadowy predator',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Reports from rural Europe describe a dark, bulky animal attacking livestock, often said to move silently despite its size.',
      },
      {
        title: 'Notable Sightings',
        content: 'Farmers recount seeing a crouched black form with reflective eyes. Some describe it leaping over fences with unnatural ease.',
      },
      {
        title: 'Evidence & Research',
        content: 'Little documentation exists, leaving the Bucan Beast in the realm of localized legend. Hypotheses include large dogs, wolves, or exaggerated folklore.',
      },
    ],
  },
  {
  id: 'cr-34',
  name: 'Bukit Timah Monkey',
  description: 'A small ape-like creature reported in Singapore’s Bukit Timah forests',
  categoryId: 'creatures',
  icon: '🐾',
  sections: [
    {
      title: 'Lore & Origins',
      content: 'Stories describe a small, bipedal primate living in Bukit Timah Nature Reserve, unlike any known local species.',
    },
    {
      title: 'Notable Sightings',
      content: 'Hikers report seeing a diminutive humanoid darting behind trees or squatting beside trails, sometimes emitting chattering noises.',
    },
    {
      title: 'Evidence & Research',
      content: 'No confirmed evidence exists. Possibilities include misidentified macaques, escaped pets, or purely urban legend.',
    },
  ],
},
  {
    id: 'cr-35',
    name: 'Bunyip Swamp Beast',
    description: 'A mysterious water monster from Australian Aboriginal lore',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'The Bunyip is said to lurk in swamps, billabongs, and rivers, described variously as dog-headed, seal-like, or feathered, with a terrifying bellow.',
      },
      {
        title: 'Notable Sightings',
        content: 'Colonial accounts describe strange roars at night and massive tracks near water. Aboriginal stories warn of children being taken by the creature.',
      },
      {
        title: 'Evidence & Research',
        content: 'Some researchers connect Bunyip sightings to extinct marsupials like Diprotodon. Others view it as a mythic guardian of sacred waterholes.',
      },
    ],
  },
  {
    id: 'cr-36',
    name: 'Burrunjor Australian Dinosaur',
    description: 'A giant reptilian predator said to roam Australia’s Northern Territory',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Aboriginal stories describe enormous, bipedal reptilian animals reminiscent of theropod dinosaurs.',
      },
      {
        title: 'Notable Sightings',
        content: 'Witnesses claim to have seen a massive, long-tailed animal crossing roads or stalking livestock. Reports increased during the 20th century.',
      },
      {
        title: 'Evidence & Research',
        content: 'No physical traces have been confirmed. Skeptics suspect exaggerations of crocodiles or large monitors, while others believe an unknown reptile species survives in remote Outback regions.',
      },
    ],
  },
  {
    id: 'cr-37',
    name: 'Cactus Cat',
    description: 'A prickly-furred feline said to inhabit deserts of the American Southwest',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Cowboy folklore describes the Cactus Cat as a spiky-coated feline that drinks fermented cactus juice and scratches saguaro trunks.',
      },
      {
        title: 'Notable Sightings',
        content: 'Stories include drunken yowls echoing across deserts and spiny cats seen weaving between cacti at night.',
      },
      {
        title: 'Evidence & Research',
        content: 'Most view the Cactus Cat as tall-tale folklore, though some link it to exaggerated sightings of bobcats or porcupines.',
      },
    ],
  },
  {
    id: 'cr-38',
    name: 'Cadborosaurus Sea Serpent',
    description: 'A long, serpentine marine creature reported along the Pacific Northwest coast',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Cadborosaurus, or “Caddy,” is described as having a horse-like head, serpentine body, and flippers.',
      },
      {
        title: 'Notable Sightings',
        content: 'Fishermen, sailors, and residents from British Columbia to Alaska report serpentine animals swimming near shorelines.',
      },
      {
        title: 'Evidence & Research',
        content: 'Alleged carcasses have been examined but none conclusively identified as unknown species. Likely candidates include eels, sharks, or decomposed whales.',
      },
    ],
  },
  {
    id: 'cr-39',
    name: 'Canvey Island Monster',
    description: 'A strange carcass that washed ashore on Canvey Island in the 1950s',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Two bizarre humanoid-like carcasses were found with thick skin, no eyes, and clawed feet, sparking fears of mutated sea creatures.',
      },
      {
        title: 'Notable Sightings',
        content: 'No live creature has been reported, but the strange bodies created widespread speculation in the press.',
      },
      {
        title: 'Evidence & Research',
        content: 'Some scientists believe the carcasses were decomposed anglerfish or monkfish, while others insist the morphology was too unusual for known species.',
      },
    ],
  },
  {
    id: 'cr-40',
    name: 'Capybara Man',
    description: 'A humanoid cryptid with features resembling a giant capybara',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Reports from South America describe a human-sized being with rodent-like features and coarse fur.',
      },
      {
        title: 'Notable Sightings',
        content: 'Witnesses near rivers claim to see a tall, capybara-headed humanoid moving awkwardly upright.',
      },
      {
        title: 'Evidence & Research',
        content: 'No physical evidence exists, leading many to categorize Capybara Man as modern folklore or misidentified wildlife.',
      },
    ],
  },
  {
    id: 'cr-41',
    name: 'Chonchon Flying Head',
    description: 'A flying head with large ears from Chilean folklore',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'In Mapuche lore, the Chonchon is the severed head of a sorcerer that flies through the night on giant ears like wings.',
      },
      {
        title: 'Notable Sightings',
        content: 'People claim to hear the creature’s eerie cry—“Tui-tui-tui!”—and see a glowing head flitting between treetops.',
      },
      {
        title: 'Evidence & Research',
        content: 'Scholars treat it as a witchcraft legend, though some UFO and cryptid researchers speculate on unknown nocturnal creatures behind the myth.',
      },
    ],
  },
  {
    id: 'cr-42',
    name: 'Chupacabras Avian Variant',
    description: 'A winged or bird-like version of the Chupacabra reported in some regions',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Unlike the reptilian or canine forms, this variant is described as a feathered or winged creature with talons used to extract blood from livestock.',
      },
      {
        title: 'Notable Sightings',
        content: 'Reports from Mexico and Puerto Rico describe livestock found with avian-like punctures and sightings of bat-like silhouettes circling farms.',
      },
      {
        title: 'Evidence & Research',
        content: 'Many consider it misidentified large birds or owls. Others propose that multiple cryptid species have been bundled under the “Chupacabra” name.',
      },
    ],
  },
  {
    id: 'cr-43',
    name: 'Crawler Humanoids',
    description: 'Pale, emaciated humanoids reported crawling on all fours in forests and rural areas',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Stories describe Crawlers as hairless, bone-thin beings with long limbs, glowing eyes, and jerky movements—sometimes tied to caves or abandoned buildings.',
      },
      {
        title: 'Notable Sightings',
        content: 'Encounters often happen at night on remote roads, where motorists report pale figures scuttling across asphalt or clinging to trees.',
      },
      {
        title: 'Evidence & Research',
        content: 'Some attribute sightings to misidentified animals, while others believe they could be unknown primates or psychological projections rooted in fear responses.',
      },
    ],
  },
  {
    id: 'cr-44',
    name: 'Dingonek Aquatic Chimera',
    description: 'A multi-animal hybrid water creature reported in Africa',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'The Dingonek is described as a scaly, saber-toothed aquatic beast with a lionlike mane and crocodilian tail, said to dwell in East African rivers.',
      },
      {
        title: 'Notable Sightings',
        content: 'Early explorer accounts describe large, armored creatures attacking hippos or overturning canoes.',
      },
      {
        title: 'Evidence & Research',
        content: 'No remains have been found. The creature is often compared to exaggerated sightings of monitor lizards or Nile crocodiles.',
      },
    ],
  },
  {
    id: 'cr-45',
    name: 'Dire Wolf Crypto',
    description: 'A purported modern descendant of the extinct dire wolf',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Reports suggest large, prehistoric-looking wolves surviving in remote North American regions long after dire wolves went extinct.',
      },
      {
        title: 'Notable Sightings',
        content: 'Hunters and hikers describe enormous wolves with unusually broad heads and thick fur, sometimes unfazed by gunfire.',
      },
      {
        title: 'Evidence & Research',
        content: 'DNA testing of alleged fur samples typically points to known wolf species. Still, the idea of a surviving ancient lineage persists among cryptozoologists.',
      },
    ],
  },
  {
    id: 'cr-46',
    name: 'Dodo-gaki Tree Beast',
    description: 'A Japanese yokai resembling a monstrous tree-dwelling creature',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Dodo-gaki is a yokai described as a creature that lurks within trees, often resembling a cross between an ape and a twisted wooden spirit. Stories portray it as territorial and cunning.',
      },
      {
        title: 'Notable Sightings',
        content: 'Travelers in old Japanese forests claimed to see humanoid forms melting into bark or emerging from hollow trunks at dusk.',
      },
      {
        title: 'Evidence & Research',
        content: 'As with most yokai, no physical evidence exists. Folklorists believe the Dodo-gaki represents fears of dense, unexplored forests.',
      },
    ],
  },
  {
    id: 'cr-47',
    name: 'Dover Demon',
    description: 'A strange pale humanoid reported in Dover, Massachusetts in 1977',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'The Dover Demon is described as a small, hairless creature with a bulbous head and glowing orange eyes, walking on long, spindly limbs.',
      },
      {
        title: 'Notable Sightings',
        content: 'Multiple teenagers reported seeing the creature over a 25-hour span along rural roads. Sketches depict a creature unlike any known animal.',
      },
      {
        title: 'Evidence & Research',
        content: 'No further sightings or tracks were found. Researchers debate whether it was a misidentified animal, alien, or a one-time anomaly.',
      },
    ],
  },
  {
    id: 'cr-48',
    name: 'Dover Lights Beast',
    description: 'A cryptid associated with the mysterious Dover Lights of Arkansas',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Some reports claim the mysterious glowing lights near Dover are accompanied by a shadowy, stalking creature.',
      },
      {
        title: 'Notable Sightings',
        content: 'Witnesses describe a humanoid or bestial form lurking beyond the glowing orbs, sometimes chasing observers before vanishing.',
      },
      {
        title: 'Evidence & Research',
        content: 'Most treat it as folklore intertwined with ghost lights. Little documentation exists beyond anecdotal stories.',
      },
    ],
  },
  {
    id: 'cr-49',
    name: 'Dragon Sightings Modern',
    description: 'Contemporary reports of dragon-like flying creatures worldwide',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Dragon legends are ancient and widespread, but modern sightings describe winged reptilian creatures in rural skies or mountains.',
      },
      {
        title: 'Notable Sightings',
        content: 'Reports from Wales, China, the U.S., and Papua New Guinea mention large reptilian shapes gliding over valleys or ridgelines.',
      },
      {
        title: 'Evidence & Research',
        content: 'Most are dismissed as misidentified birds or hoaxes, though some cryptozoologists argue for rare megafauna or unknown flying reptiles.',
      },
    ],
  },
  {
    id: 'cr-50',
    name: 'Drowning Creek Monster',
    description: 'A reptilian water creature said to inhabit Kentucky’s Drowning Creek',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Locals describe a large, scaly creature with a crocodilian head patrolling the murky waters of Drowning Creek.',
      },
      {
        title: 'Notable Sightings',
        content: 'Fishermen tell of large wakes, sudden splashes, or glimpses of a serrated tail breaking the surface.',
      },
      {
        title: 'Evidence & Research',
        content: 'Likely candidates include large fish, gar, or misidentified debris. Still, some claim the creature moves with deliberate, animal-like intent.',
      },
    ],
  },
  {
    id: 'cr-51',
    name: 'Dry Body Death Worm',
    description: 'A desiccated, worm-like desert cryptid likened to the Mongolian Death Worm',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Stories speak of a dried, leathery worm-like being that emerges from desert sands, sometimes associated with poison or electrical discharge.',
      },
      {
        title: 'Notable Sightings',
        content: 'Reports describe elongated, rigid bodies moving stiffly across dunes before disappearing beneath the surface.',
      },
      {
        title: 'Evidence & Research',
        content: 'No specimens have been found. Some hypothesize misidentified snakes or decomposed animal remains mistaken for a creature.',
      },
    ],
  },
  {
    id: 'cr-52',
    name: 'Ebu Gogo Hobbit People',
    description: 'Small, hairy humanoids from Indonesian folklore, linked to Homo floresiensis claims',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Ebu Gogo are described as small, primitive people who lived on Flores island, said to mimic speech and steal food.',
      },
      {
        title: 'Notable Sightings',
        content: 'Stories continued well into modern times, describing small figures fleeing into caves or forests when approached.',
      },
      {
        title: 'Evidence & Research',
        content: 'Some researchers believe Ebu Gogo lore may preserve cultural memory of Homo floresiensis—an extinct hominin discovered in 2003.',
      },
    ],
  },
  {
    id: 'cr-53',
    name: 'Enfield Horror',
    description: 'A bizarre three-legged creature reported in Enfield, Illinois in the 1970s',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'The Enfield Horror is described as a pale creature with three legs, glowing eyes, and a hopping gait, associated with eerie screeches.',
      },
      {
        title: 'Notable Sightings',
        content: 'Families reported the creature attacking porches and window screens. Tracks showed three oddly spaced footprints.',
      },
      {
        title: 'Evidence & Research',
        content: 'Explanations include escaped exotic pets, deformed animals, or hoaxes. However, multiple witnesses swear the creature was real.',
      },
    ],
  },
  {
    id: 'cr-54',
    name: 'Flathead Lake Nessie',
    description: 'A lake monster reported in Montana’s Flathead Lake',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Similar to Loch Ness legends, Flathead Lake has long been associated with a large serpent-like creature.',
      },
      {
        title: 'Notable Sightings',
        content: 'Sightings describe a dark, sleek creature swimming rapidly near the surface. Hundreds of reports exist across decades.',
      },
      {
        title: 'Evidence & Research',
        content: 'Most evidence consists of testimonies and wake patterns. Biological candidates include large fish, sturgeon, or misidentified debris.',
      },
    ],
  },
  {
    id: 'cr-55',
    name: 'Flatwoods Monster',
    description: 'A bizarre, mechanical-looking entity encountered in Flatwoods, West Virginia in 1952',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Witnesses described a tall figure with a spade-shaped head, glowing eyes, and metallic body, following a UFO sighting.',
      },
      {
        title: 'Notable Sightings',
        content: 'Seven locals reported the creature emitting hissing sounds and floating rather than walking. The encounter made national headlines.',
      },
      {
        title: 'Evidence & Research',
        content: 'The event is often linked to UFO activity. Skeptics propose an owl misinterpretation heightened by panic and gas emissions.',
      },
    ],
  },
  {
    id: 'cr-56',
    name: 'Flying Humanoids Mexico',
    description: 'Winged or levitating humanoids frequently reported over Mexico',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Reports describe dark humanoid shapes flying upright or hovering motionless in the sky.',
      },
      {
        title: 'Notable Sightings',
        content: 'Videos and eyewitness accounts show humanoid figures drifting over cities like Monterrey or near mountains.',
      },
      {
        title: 'Evidence & Research',
        content: 'Analyses often conclude drones, balloons, or misidentified birds—but some cases remain unexplained due to unusual motion patterns.',
      },
    ],
  },
  {
    id: 'cr-57',
    name: 'Flying Ray Cryptid Chile',
    description: 'A manta-like flying creature reported gliding over valleys in Chile',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Witnesses describe a winged, ray-shaped animal soaring silently over mountains, resembling a manta ray in flight.',
      },
      {
        title: 'Notable Sightings',
        content: 'Several hikers claimed to see large black shapes with rippling wings drifting across ravines.',
      },
      {
        title: 'Evidence & Research',
        content: 'Likely explanations include large birds or kites, though the undulating, ray-like movement remains puzzling to some observers.',
      },
    ],
  },
  {
    id: 'cr-58',
    name: 'Forest Cow Mongolia',
    description: 'A mysterious bovine-like creature said to inhabit remote Mongolian forests',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Stories tell of a massive, shaggy cow-beast with unusual horns and aggressive behavior.',
      },
      {
        title: 'Notable Sightings',
        content: 'Hunters report unexpected encounters with large, dark bovines that behave unlike known species.',
      },
      {
        title: 'Evidence & Research',
        content: 'Possible candidates include wild yaks or rare hybrids. Cryptozoologists argue for an unknown forest-dwelling species.',
      },
    ],
  },
  {
    id: 'cr-59',
    name: 'Forest Shadow Hound',
    description: 'A dark, spectral canine seen in wooded areas, often associated with omens',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Reports describe a massive black dog with glowing eyes, sometimes seen phasing in and out of shadows.',
      },
      {
        title: 'Notable Sightings',
        content: 'Hikers claim the creature follows silently before vanishing. In some regions, it is considered a death omen.',
      },
      {
        title: 'Evidence & Research',
        content: 'Some sightings may be linked to large dogs or wolves. Paranormal theorists suggest the hound may be a spiritual entity rather than a biological one.',
      },
    ],
  },
  {
    id: 'cr-60',
    name: 'Fresno Nightcrawlers',
    description: 'Thin, walking-leg creatures captured on security cameras in California',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Described as tall, white, leg-like beings with no torso, the Nightcrawlers became famous after eerie footage surfaced.',
      },
      {
        title: 'Notable Sightings',
        content: 'Videos show two-legged, cloth-like figures drifting across lawns. Additional sightings occurred in Yosemite.',
      },
      {
        title: 'Evidence & Research',
        content: 'Skeptics point to puppets or CGI, but no definitive hoax has been confirmed. The creatures remain one of modern cryptozoology’s strangest cases.',
      },
    ],
  },
  {
    id: 'cr-61',
    name: 'Frogman Loveland',
    description: 'A humanoid frog-like creature reported in Loveland, Ohio',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'The Loveland Frogman is described as a 3–4 foot tall humanoid frog seen near rivers and bridges.',
      },
      {
        title: 'Notable Sightings',
        content: 'Police officers in the 1970s reported seeing a creature with leathery skin and frog-like features standing upright.',
      },
      {
        title: 'Evidence & Research',
        content: 'Later explanations include escaped reptiles or misidentified iguanas, though some sightings remain unexplained.',
      },
    ],
  },
  {
    id: 'cr-62',
    name: 'Gambo Sea Creature',
    description: 'A small, unidentified carcass found on a Gambian beach in 1983',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'A bizarre carcass resembling a small plesiosaur-like creature washed ashore, sparking speculation about surviving prehistoric animals.',
      },
      {
        title: 'Notable Sightings',
        content: 'The body was buried before scientists could examine it, leaving only sketches and descriptions.',
      },
      {
        title: 'Evidence & Research',
        content: 'Most researchers think it was a decomposed dolphin or shark. Without remains, Gambo remains an enigma.',
      },
    ],
  },
  {
    id: 'cr-63',
    name: 'Gargoyle Sightings',
    description: 'Reports of winged, stone-like humanoids resembling gargoyles',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Gargoyles originate from Gothic architecture, but modern sightings describe living stone-skinned beings perched on rooftops.',
      },
      {
        title: 'Notable Sightings',
        content: 'Witnesses in the U.S. and Europe report winged humanoids with stone-like texture launching from buildings or hovering silently.',
      },
      {
        title: 'Evidence & Research',
        content: 'No evidence supports literal stone creatures. The sightings may reflect misidentified birds, bats, or hypnagogic experiences.',
      },
    ],
  },
  {
    id: 'cr-64',
    name: 'Gef Talking Mongoose',
    description: 'A mysterious talking mongoose said to haunt a farmhouse in the 1930s',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Gef allegedly lived in the walls of a farmhouse on the Isle of Man, speaking to the family and claiming supernatural abilities.',
      },
      {
        title: 'Notable Sightings',
        content: 'The family reported conversations, thrown objects, and glimpses of a small yellow mongoose-like creature.',
      },
      {
        title: 'Evidence & Research',
        content: 'Skeptics consider it ventriloquism or a hoax. The family insisted the entity was real, making Gef an enduring paranormal oddity.',
      },
    ],
  },
  {
    id: 'cr-65',
    name: 'Globsters Decomposed Monsters',
    description: 'Large unidentified carcasses washed ashore, often mistaken for sea monsters',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Globsters are huge, amorphous masses of decaying tissue lacking visible bones—frequently labeled as sea monsters.',
      },
      {
        title: 'Notable Sightings',
        content: 'Famous cases include the St. Augustine Monster and the Tasmanian globster—tangled masses with strange textures.',
      },
      {
        title: 'Evidence & Research',
        content: 'Modern analysis shows most globsters are decomposed whales or sharks, but some remain unidentified due to incomplete sampling.',
      },
    ],
  },
  {
    id: 'cr-66',
    name: 'Grinning Canine Louisiana',
    description: 'A sinister dog-like entity reported with a human-like grin',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Reports from Louisiana describe a dark canine creature with glowing eyes and an unnatural, human-like smile.',
      },
      {
        title: 'Notable Sightings',
        content: 'Witnesses claim encounters on rural roads at night, describing the creature slowly turning its head to reveal a wide, eerie grin.',
      },
      {
        title: 'Evidence & Research',
        content: 'No physical trace has been recorded. The creature is often compared to skinwalker lore or paranormal canines rather than biological animals.',
      },
    ],
  },
  {
    id: 'cr-67',
    name: 'Gumberoo',
    description: 'A folklore creature said to be an invulnerable, rubber-skinned bear-like beast',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Logging-camp folklore describes the Gumberoo as a large, hairless, rubbery creature that bullets bounce off of.',
      },
      {
        title: 'Notable Sightings',
        content: 'Stories include failed hunting attempts where bullets ricochet wildly, and sightings of smooth black creatures emerging from burned forests.',
      },
      {
        title: 'Evidence & Research',
        content: 'Generally considered tall-tale material, though some cryptid enthusiasts compare its description to mutated bears or disease-afflicted animals.',
      },
    ],
  },
  {
    id: 'cr-68',
    name: 'Gumbaroo Flaming Bear',
    description: 'A variant of the Gumberoo said to burst into flames when angered',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'A more dangerous version of the Gumberoo supposedly ignites when enraged, torching nearby forests.',
      },
      {
        title: 'Notable Sightings',
        content: 'Old lumberjack tales describe fiery beasts charging through camps, leaving blackened ground behind.',
      },
      {
        title: 'Evidence & Research',
        content: 'Likely exaggerations tied to wildfires and bear encounters, though the legend persists in Pacific Northwest storytelling.',
      },
    ],
  },
  {
    id: 'cr-69',
    name: 'Himalayan Glacier Man',
    description: 'A tall humanoid figure said to roam glacial regions of the Himalayas',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Revered or feared in various Himalayan communities, the Glacier Man is described as a large, spectral humanoid associated with avalanches and icy winds.',
      },
      {
        title: 'Notable Sightings',
        content: 'Trekkers describe seeing tall silhouettes on ridgelines, accompanied by sudden storms or collapsing ice.',
      },
      {
        title: 'Evidence & Research',
        content: 'Some believe these sightings blend Yeti lore with mountain ghost traditions. No physical evidence exists.',
      },
    ],
  },
  {
    id: 'cr-70',
    name: 'Honey Island Swamp Ape',
    description: 'A cryptid resembling Bigfoot reported in Louisiana’s Honey Island Swamp',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Described as a 7-foot swamp-dwelling ape-man with yellow eyes and a foul stench, the Swamp Ape is a major Louisiana cryptid.',
      },
      {
        title: 'Notable Sightings',
        content: 'Large tracks with three toes have been found. Sightings describe gray-haired, agile figures moving silently through wetlands.',
      },
      {
        title: 'Evidence & Research',
        content: 'Tracks and alleged hair samples exist but remain inconclusive. The creature is sometimes tied to escaped primates or misidentified wildlife.',
      },
    ],
  },
  {
    id: 'cr-71',
    name: 'Honey Island Swamp Phantom',
    description: 'A ghostly or supernatural variant of the Swamp Ape legend',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Some claim that the swamp ape is not a physical animal but a spiritual guardian or vengeful entity.',
      },
      {
        title: 'Notable Sightings',
        content: 'Witnesses report translucent or shadowy humanoids moving through fog, sometimes accompanied by glowing eyes.',
      },
      {
        title: 'Evidence & Research',
        content: 'Believed to stem from overlapping ghost and cryptid traditions in the region’s folklore.',
      },
    ],
  },
  {
    id: 'cr-72',
    name: 'Hook Island Sea Monster',
    description: 'A massive serpentine creature photographed near Hook Island, Australia in 1964',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'The Hook Island photo shows a gigantic tadpole-like creature lurking beneath the surface, sparking global interest.',
      },
      {
        title: 'Notable Sightings',
        content: 'The photographer claimed the creature was over 80 feet long and fled when approached.',
      },
      {
        title: 'Evidence & Research',
        content: 'Analysts often point to photographic trickery or shadows. Some believe the image depicts a real unknown species.',
      },
    ],
  },
  {
    id: 'cr-73',
    name: 'Huallepen Lake Creature',
    description: 'A shapeshifting water creature from Mapuche legend in Chile',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'The Huallepen is said to appear as a hybrid of cow, horse, and aquatic animal, capable of causing sickness or misfortune.',
      },
      {
        title: 'Notable Sightings',
        content: 'Fishermen speak of odd, bellowing creatures breaking the surface or luring animals into the water.',
      },
      {
        title: 'Evidence & Research',
        content: 'Most accounts are folkloric, though some suggest misidentified seals or livestock accidents inspired the tales.',
      },
    ],
  },
  {
    id: 'cr-74',
    name: 'Igopogo Lake Monster',
    description: 'A Canadian lake monster said to inhabit Lake Simcoe, Ontario',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Igopogo is described as a long, dark creature with a dog-like head and multiple humps.',
      },
      {
        title: 'Notable Sightings',
        content: 'Sonar readings, videos, and eyewitness accounts have surfaced since the 1950s.',
      },
      {
        title: 'Evidence & Research',
        content: 'Skeptics cite logs, sturgeon, or wakes; supporters argue for a distinct aquatic species.',
      },
    ],
  },
  {
    id: 'cr-75',
    name: 'Inkanyamba Serpent Spirit',
    description: 'A massive serpent-like cryptid from South African and Zulu tradition',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Inkanyamba is said to live in deep water and control storms. It appears as a giant eel or serpent with a horse-like head.',
      },
      {
        title: 'Notable Sightings',
        content: 'Sightings cluster around Howick Falls, where locals claim to see long, dark shapes moving beneath turbulent waters.',
      },
      {
        title: 'Evidence & Research',
        content: 'Potential explanations include freshwater eels or mass hallucination during storms, but no direct evidence has verified the creature.',
      },
    ],
  },
  {
    id: 'cr-76',
    name: 'J’ba Fofi Giant Spider',
    description: 'A legendary giant spider said to exist in the Congo and Cameroon forests',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Locals describe enormous spiders capable of weaving ground-level webs to trap prey, with leg spans up to several feet.',
      },
      {
        title: 'Notable Sightings',
        content: 'Missionaries and hunters have reported car-sized webs or glimpses of massive brown spiders fleeing into burrows.',
      },
      {
        title: 'Evidence & Research',
        content: 'Biologists consider such sizes infeasible due to respiration limits, yet cultural memory keeps the legend alive.',
      },
    ],
  },
  {
    id: 'cr-77',
    name: 'Jackalope Horned Rabbit',
    description: 'A mythical North American rabbit with antelope horns or deer antlers',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Born from tall tales and taxidermy jokes, the Jackalope later merged with folklore describing aggressive horned rabbits.',
      },
      {
        title: 'Notable Sightings',
        content: 'Travelers claim to see antlered rabbits darting across fields or hear them mimic human voices.',
      },
      {
        title: 'Evidence & Research',
        content: 'Likely roots include viral infections causing horn-like growths on rabbits. But the mythic Jackalope remains a cultural icon.',
      },
    ],
  },
  {
    id: 'cr-78',
    name: 'Jersey Devil',
    description: 'A winged, hoofed creature from New Jersey folklore',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Born to Mother Leeds as her cursed 13th child, the creature sprouted wings and flew into the Pine Barrens.',
      },
      {
        title: 'Notable Sightings',
        content: 'Waves of sightings occurred in 1909, with reports of hooved tracks and aerial creatures terrorizing towns.',
      },
      {
        title: 'Evidence & Research',
        content: 'Despite mass panic and investigations, no physical evidence was found. It remains one of America’s top cryptids.',
      },
    ],
  },
  {
    id: 'cr-79',
    name: 'Kaiju Sightings',
    description: 'Reports of giant monster-like creatures inspired by Japanese kaiju lore',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'While kaiju are cinematic creations, some modern sightings describe immense, dinosaurian or reptilian shapes emerging from oceans or mountains.',
      },
      {
        title: 'Notable Sightings',
        content: 'Fishermen have reported seeing silhouettes of massive, lumbering shapes beneath waves, and hikers claim distant roars in volcanic regions.',
      },
      {
        title: 'Evidence & Research',
        content: 'Most reports correlate with underwater shadows, whales, or exaggerated perception across long distances.',
      },
    ],
  },
  {
    id: 'cr-80',
    name: 'Kalanoro Madagascar Dwarf',
    description: 'A small, hairy humanoid said to inhabit Madagascar’s jungles',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Described as a small, fast-moving figure with long nails and a childlike voice, associated with mischief and nighttime thefts.',
      },
      {
        title: 'Notable Sightings',
        content: 'Villagers report seeing tiny humanoids raiding gardens or fleeing into dense undergrowth.',
      },
      {
        title: 'Evidence & Research',
        content: 'Some speculate it could be a surviving lemur species or cultural memory of extinct primates.',
      },
    ],
  },
  {
    id: 'cr-81',
    name: 'Karkadann Persian Beast',
    description: 'A dangerous one-horned beast from Persian and Indian mythology',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'The Karkadann is portrayed as a fierce horned animal, possibly inspired by rhinoceroses or legendary unicorn-like creatures.',
      },
      {
        title: 'Notable Sightings',
        content: 'Historical accounts describe deadly encounters with large, armored beasts roaming grasslands.',
      },
      {
        title: 'Evidence & Research',
        content: 'Scholars believe Karkadann tales blend rhino behavior with mythical embroidery.',
      },
    ],
  },
  {
    id: 'cr-82',
    name: 'Kentucky Goblins',
    description: 'Small, glowing-eyed humanoids from the famous Kelly–Hopkinsville encounter',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'The 1955 incident involved metallic-skinned, goblin-like beings emerging from the woods near a farmhouse.',
      },
      {
        title: 'Notable Sightings',
        content: 'Witnesses described large eyes, pointed ears, and floating movements. Gunfire allegedly had no effect.',
      },
      {
        title: 'Evidence & Research',
        content: 'Explanations range from owls to mass hysteria to extraterrestrial visitation. The case remains iconic in UFO and cryptid circles.',
      },
    ],
  },
  {
    id: 'cr-83',
    name: 'Kikiyaon Owl Spirit',
    description: 'A terrifying owl-like humanoid from West African lore',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'The Kikiyaon (“soul-eater”) is said to be a large, humanoid owl spirit that attacks people at night.',
      },
      {
        title: 'Notable Sightings',
        content: 'Witnesses describe a 6-foot tall owl creature with glowing red eyes flying noiselessly above villages.',
      },
      {
        title: 'Evidence & Research',
        content: 'Some think the legend may be inspired by giant owls or eagle species. Others tie it to spiritual beliefs about death and witchcraft.',
      },
    ],
  },
  {
    id: 'cr-84',
    name: 'Kiritimati Sea Worm',
    description: 'A massive worm-like creature reported off Kiritimati Island in the Pacific',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Fishermen describe long, segmented creatures rising from deep waters, sometimes glowing faintly.',
      },
      {
        title: 'Notable Sightings',
        content: 'Observers claim the creature thrashes violently near boats or coils beneath the surface.',
      },
      {
        title: 'Evidence & Research',
        content: 'Potential explanations include giant eels or ribbon worms, though sizes described often exceed biological norms.',
      },
    ],
  },
  {
    id: 'cr-85',
    name: 'Kongamato Pterosaur-like',
    description: 'A flying reptile-like creature from Zambia and Angola resembling a pterosaur',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Local stories describe the Kongamato as a leathery-winged creature with a long beak and aggressive behavior.',
      },
      {
        title: 'Notable Sightings',
        content: 'Miners and villagers report encounters with dark, winged animals attacking boats or swooping low over rivers.',
      },
      {
        title: 'Evidence & Research',
        content: 'Skeptics attribute sightings to birds or bats. Cryptozoologists suggest a surviving pterosaur species or unknown megabat.',
      },
    ],
  },
	  {
    id: 'cr-86',
    name: 'Lake Champlain Champ',
    description: 'A plesiosaur-like lake monster said to inhabit Lake Champlain',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Champ is described as a long-necked, hump-backed creature dwelling in the deep waters of Lake Champlain, bordering New York, Vermont, and Quebec.',
      },
      {
        title: 'Notable Sightings',
        content: 'Sightings date back to Indigenous Abenaki stories and colonial accounts. Modern witnesses report multiple humps, a serpentine neck, or a dark shape surfacing and diving quickly.',
      },
      {
        title: 'Evidence & Research',
        content: 'Photographs, sonar hits, and audio recordings have been presented but remain inconclusive. Explanations range from large fish and sturgeon to misperceived waves.',
      },
    ],
  },
  {
    id: 'cr-87',
    name: 'Lake Okanagan Ogopogo Calf',
    description: 'Smaller alleged offspring of the Ogopogo lake monster in British Columbia',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'While Ogopogo is the famed monster of Lake Okanagan, some stories describe smaller “calves” seen swimming alongside or separately from the main creature.',
      },
      {
        title: 'Notable Sightings',
        content: 'Witnesses report multiple smaller humps trailing behind a larger one, or lone juvenile-sized creatures near shorelines.',
      },
      {
        title: 'Evidence & Research',
        content: 'Researchers suggest schools of fish, otters, or waves as explanations, but believers argue such reports imply a breeding population of unknown animals.',
      },
    ],
  },
  {
    id: 'cr-88',
    name: 'Lake Simcoe Monster',
    description: 'A general term for unidentified creatures reported in Lake Simcoe, Ontario',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Separate from the Igopogo name, “Lake Simcoe Monster” refers broadly to serpentine or hump-backed creatures seen in the lake.',
      },
      {
        title: 'Notable Sightings',
        content: 'Boaters report long, dark shapes cruising just under the surface, and occasional splashes with no obvious cause.',
      },
      {
        title: 'Evidence & Research',
        content: 'Most evidence is anecdotal. Some researchers treat it as another facet of the Igopogo tradition rather than a distinct monster.',
      },
    ],
  },
  {
    id: 'cr-89',
    name: 'Lake Tianchi Monster',
    description: 'A lake monster reported in Heaven Lake on the China–North Korea border',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Creatures in Lake Tianchi are described as seal-like or serpent-like animals appearing in groups, sometimes chasing boats.',
      },
      {
        title: 'Notable Sightings',
        content: 'Videos and reports describe multiple dark objects moving in unison, occasionally breaching the surface with visible heads or backs.',
      },
      {
        title: 'Evidence & Research',
        content: 'Analyses suggest known animals such as seals or large fish, though the lake’s extreme location keeps speculation alive.',
      },
    ],
  },
  {
    id: 'cr-90',
    name: 'Lake Worth Monster',
    description: 'A goatman-like creature reported near Lake Worth, Texas in the 1960s',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'The Lake Worth Monster is described as a half-man, half-goat or scaly, horned creature haunting the shores and cliffs around the lake.',
      },
      {
        title: 'Notable Sightings',
        content: 'Teens in the late 1960s reported the creature hurling tires and rocks at cars. Newspaper coverage turned it into a regional sensation.',
      },
      {
        title: 'Evidence & Research',
        content: 'Many suspect pranksters in costumes, though a few witnesses insist the being moved in ways no human could.',
      },
    ],
  },
  {
    id: 'cr-91',
    name: 'Lampago Lion-Goat Hybrid',
    description: 'A chimeric beast said to combine traits of lions and goats',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Lampago is described as having the body of a lion with goat-like horns or features, appearing in obscure bestiaries and regional tales.',
      },
      {
        title: 'Notable Sightings',
        content: 'Stories mention horned big cats attacking livestock or being glimpsed on rocky hillsides.',
      },
      {
        title: 'Evidence & Research',
        content: 'Likely inspired by misidentified big cats, malformed animals, or artistic inventions, Lampago sits between mythology and cryptozoology.',
      },
    ],
  },
  {
    id: 'cr-92',
    name: 'Loveland Frog',
    description: 'Another name for the frog-like humanoid reported around Loveland, Ohio',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Closely tied to the Frogman Loveland legend, the Loveland Frog is described as a small, upright frog or lizard-like humanoid near bridges and rivers.',
      },
      {
        title: 'Notable Sightings',
        content: 'Motorists report seeing a frog-headed figure standing by guardrails or crossing the road at night, sometimes holding a wand-like object in early tellings.',
      },
      {
        title: 'Evidence & Research',
        content: 'Skeptics point to escaped pets or iguanas. The creature’s persistence in local lore keeps debates active among enthusiasts.',
      },
    ],
  },
  {
    id: 'cr-93',
    name: 'Loveland Lizard Variant',
    description: 'A lizard-like version of the Loveland cryptid legend',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Some accounts frame the Loveland entity as more reptilian than amphibian, with scaly skin and a lizard-like head.',
      },
      {
        title: 'Notable Sightings',
        content: 'Witnesses describe a bipedal lizard, 3–4 feet tall, slipping quickly over embankments or into the river.',
      },
      {
        title: 'Evidence & Research',
        content: 'This variant may reflect differing witness perceptions or later reinterpretations of the original Frogman story.',
      },
    ],
  },
  {
    id: 'cr-94',
    name: 'Mahaha Ice Demon',
    description: 'A chilling Inuit entity that kills victims through tickling laughter',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Mahaha is described as a thin, blue-skinned figure with long claws and a twisted smile, roaming Arctic regions and leaving corpses frozen with grins.',
      },
      {
        title: 'Notable Sightings',
        content: 'Stories tell of travelers found dead from exposure, their faces locked in unnatural smiles, attributed to Mahaha’s deadly tickling.',
      },
      {
        title: 'Evidence & Research',
        content: 'Folklorists see Mahaha as a personification of lethal cold and madness brought by isolation in polar climates.',
      },
    ],
  },
  {
    id: 'cr-95',
    name: 'Mamlambo River Deity',
    description: 'A reptilian, horse-headed water monster from South African legend',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Mamlambo is said to resemble a hybrid of horse, fish, and serpent, dwelling in rivers and demanding sacrifices or claiming lives.',
      },
      {
        title: 'Notable Sightings',
        content: 'Reports describe glowing, elongated creatures in rivers and mysterious drownings blamed on the “Brain-Sucker,” as some call Mamlambo.',
      },
      {
        title: 'Evidence & Research',
        content: 'Authorities attribute deaths to flooding and currents, but locals maintain that something powerful and dangerous lives beneath the surface.',
      },
    ],
  },
  {
    id: 'cr-96',
    name: 'Mantis Man',
    description: 'A humanoid praying mantis-like creature reported in New Jersey',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Witnesses describe a 7-foot tall, mantis-shaped being standing upright near rivers and roads in rural New Jersey.',
      },
      {
        title: 'Notable Sightings',
        content: 'Reports involve suddenly noticing an insectoid figure with long arms and a triangular head, which then vanishes into thin air or leaps away.',
      },
      {
        title: 'Evidence & Research',
        content: 'No physical trace exists. Some connect Mantis Man with insectoid alien reports or misidentified deer glimpsed at odd angles.',
      },
    ],
  },
  {
    id: 'cr-97',
    name: 'Mapinguari Sloth Monster',
    description: 'A giant ground-sloth-like cryptid of Amazonian legend',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Mapinguari is described as a towering, foul-smelling creature with long claws and sometimes a single eye or a mouth on its belly.',
      },
      {
        title: 'Notable Sightings',
        content: 'Indigenous accounts and rubber tappers tell of massive beasts crashing through the forest, impervious to bullets and leaving deep tracks.',
      },
      {
        title: 'Evidence & Research',
        content: 'Some cryptozoologists link Mapinguari to surviving giant ground sloths; skeptics argue it is myth woven around real wildlife hazards.',
      },
    ],
  },
  {
    id: 'cr-98',
    name: 'Maricopa Monster',
    description: 'An elusive creature reported in the deserts near Maricopa, Arizona',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Descriptions vary from a large lizard-like animal to a bipedal reptilian figure stalking desert roads at night.',
      },
      {
        title: 'Notable Sightings',
        content: 'Drivers report seeing glowing eyes and a tall, thin body crossing highways or standing beside saguaro cacti.',
      },
      {
        title: 'Evidence & Research',
        content: 'Likely candidates include coyotes, deer, and optical illusions in heat shimmer; nonetheless, the legend persists among locals.',
      },
    ],
  },
  {
    id: 'cr-99',
    name: 'Mngwa Giant Cat',
    description: 'A mysterious oversized feline from Tanzanian lore',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'The Mngwa is described as larger than a lion, with grey, mottled fur and incredible ferocity, attacking villages silently at night.',
      },
      {
        title: 'Notable Sightings',
        content: 'Historical accounts mention mauled victims and tracks unlike any known big cat, along with reports from hunters who feared to pursue it.',
      },
      {
        title: 'Evidence & Research',
        content: 'Some propose unusually large leopards or unknown feline species; others say the Mngwa belongs to the spirit world.',
      },
    ],
  },
  {
    id: 'cr-100',
    name: 'Mokele-mbembe Dinosaur',
    description: 'A sauropod-like river monster of Central African legend',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Mokele-mbembe is said to inhabit remote Congo Basin rivers, resembling a small sauropod dinosaur with a long neck and tail.',
      },
      {
        title: 'Notable Sightings',
        content: 'Explorers and locals report large, humped animals creating wakes, overturning canoes, or bellowing from hidden lagoons.',
      },
      {
        title: 'Evidence & Research',
        content: 'Expeditions have produced tracks and stories but no confirmed photos or remains. Most biologists doubt a dinosaur could survive unnoticed into modern times.',
      },
    ],
  },
  {
    id: 'cr-101',
    name: 'Momo Missouri Monster',
    description: 'A Bigfoot-like creature reported along the Mississippi River in Missouri',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Momo is described as a tall, shaggy, foul-smelling humanoid with glowing orange eyes, often seen carrying or surrounded by a foul odor.',
      },
      {
        title: 'Notable Sightings',
        content: 'In the early 1970s, multiple sightings near Louisiana, Missouri triggered media attention and organized searches.',
      },
      {
        title: 'Evidence & Research',
        content: 'Tracks and hair samples were collected but never conclusively analyzed. Momo remains a classic regional Bigfoot variant.',
      },
    ],
  },
  {
    id: 'cr-102',
    name: 'Mongolian Death Worm',
    description: 'A feared, venomous cryptid said to inhabit Mongolia’s Gobi Desert',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Described as a red, sausage-shaped worm up to several feet long, capable of spitting acid or discharging electricity to kill at a distance.',
      },
      {
        title: 'Notable Sightings',
        content: 'Nomads speak of animals and people collapsing after encountering a strange burrowing creature. Some expeditions have searched for it with no success.',
      },
      {
        title: 'Evidence & Research',
        content: 'Researchers suggest it may be inspired by venomous snakes or burrowing lizards. No specimen has ever been documented.',
      },
    ],
  },
  {
    id: 'cr-103',
    name: 'Monkey Man Delhi',
    description: 'A mysterious, aggressive ape- or monkey-like figure reported in Delhi, India',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'In 2001, panic spread as residents reported a “Monkey Man” attacking people at night—described as a short, muscular figure with metal claws or a helmet.',
      },
      {
        title: 'Notable Sightings',
        content: 'Dozens of reports and injuries were logged, some due to people fleeing in fear and falling from rooftops or stairs.',
      },
      {
        title: 'Evidence & Research',
        content: 'Police never found the attacker. Explanations center on mass hysteria, copycat assaults, or misidentified actual monkeys.',
      },
    ],
  },
  {
    id: 'cr-104',
    name: 'Mothman Winged Harbinger',
    description: 'A variant framing Mothman specifically as a prophetic omen of disaster',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Beyond being a cryptid, some portray Mothman as a harbinger of catastrophe, appearing before bridge collapses, industrial accidents, or conflicts.',
      },
      {
        title: 'Notable Sightings',
        content: 'Reports claim Mothman-like beings were seen near Chernobyl, Fukushima, and other disaster sites, though evidence is anecdotal.',
      },
      {
        title: 'Evidence & Research',
        content: 'Skeptics see pattern-seeking and retroactive association. Believers argue Mothman may be a warning entity rather than a simple monster.',
      },
    ],
  },
  {
    id: 'cr-105',
    name: 'Mountain Giants',
    description: 'Enormous humanoid beings said to dwell in remote mountain ranges',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Mountain giants appear in global lore as towering, humanlike beings who hurl rocks, guard passes, or observe travelers from high cliffs.',
      },
      {
        title: 'Notable Sightings',
        content: 'Modern reports include hikers claiming to see immense silhouettes on ridgelines or hearing thunderous footsteps on scree slopes.',
      },
      {
        title: 'Evidence & Research',
        content: 'Most explanations point to optical illusions, rock formations, or misjudged scale at great distance. To believers, they are the last remnants of a hidden race.',
      },
    ],
  },
  {
    id: 'cr-106',
    name: 'Nessi Loch Ness',
    description: 'A variant name for the Loch Ness Monster emphasizing regional tradition',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: '“Nessi” is a colloquial name used by some locals and researchers to distinguish folkloric aspects of the creature from modern sightings.',
      },
      {
        title: 'Notable Sightings',
        content: 'Stories emphasize ancestral encounters, describing serpentine beings in the loch long before photographic evidence became popular.',
      },
      {
        title: 'Evidence & Research',
        content: 'While similar to modern Nessie reports, Nessi lore emphasizes spiritual or ancestral interpretations rather than purely biological theories.',
      },
    ],
  },
  {
    id: 'cr-107',
    name: 'Ningen Antarctic Humanoid',
    description: 'A mysterious human-shaped creature said to inhabit Antarctic waters',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Ningen are described as pale, enormous humanoids seen by fishing crews or research vessels in frigid southern oceans.',
      },
      {
        title: 'Notable Sightings',
        content: 'Witnesses claim to observe white, featureless forms with arm-like appendages gliding just beneath icy waters, sometimes surfacing briefly.',
      },
      {
        title: 'Evidence & Research',
        content: 'No evidence exists, and many suspect internet-era mythmaking. Some propose misidentified whales observed under extreme conditions.',
      },
    ],
  },
  {
    id: 'cr-108',
    name: 'Northfield Pigman',
    description: 'A pig-headed humanoid said to stalk the woods of Northfield, Vermont',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'The Pigman is described as a tall, naked humanoid with the head of a pig, tied to urban legends of a missing teenager in the 1970s.',
      },
      {
        title: 'Notable Sightings',
        content: 'Reports describe eerie encounters in abandoned barns or forest paths where witnesses claim to see a pig-faced figure lurking.',
      },
      {
        title: 'Evidence & Research',
        content: 'Folklorists see this as a classic campfire story rooted in local tragedy, though some maintain sightings continue today.',
      },
    ],
  },
  {
    id: 'cr-109',
    name: 'Not Deer Cryptid',
    description: 'A disturbing deer-like creature reported across Appalachia',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'The Not Deer is described as a deer that moves or appears “wrong”—too tall, too thin, uncanny proportions, or predator-like behavior.',
      },
      {
        title: 'Notable Sightings',
        content: 'Drivers report the creature staring with forward-facing eyes, walking on malformed limbs, or approaching vehicles without fear.',
      },
      {
        title: 'Evidence & Research',
        content: 'Theories include diseased deer, misidentified elk, or mass psychological phenomena. Others frame it as a supernatural shapeshifter.',
      },
    ],
  },
  {
    id: 'cr-110',
    name: 'Nue Chimera',
    description: 'A Japanese chimera-like creature with multiple animal traits',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Nue is described as having the face of a monkey, body of a tiger, legs of a tanuki, and a snake for a tail, known for bringing illness and misfortune.',
      },
      {
        title: 'Notable Sightings',
        content: 'Stories from the Heian period describe a dark, cloud-riding creature terrorizing nobles until slain by a famous warrior.',
      },
      {
        title: 'Evidence & Research',
        content: 'Primarily mythological, though some interpret Nue tales as symbolic accounts of plague or political unrest.',
      },
    ],
  },
  {
    id: 'cr-111',
    name: 'Ogopogo Lake Monster',
    description: 'A major lake monster of British Columbia, famous for serpentine sightings',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Ogopogo is described as a long, serpentine creature with multiple humps and a horse-like head living in Okanagan Lake.',
      },
      {
        title: 'Notable Sightings',
        content: 'Thousands of witnesses report humps gliding across the lake; some describe dark shapes pacing alongside boats.',
      },
      {
        title: 'Evidence & Research',
        content: 'Evidence includes footage and sonar hits, though skeptics argue for otters, logs, or wave trains as explanations.',
      },
    ],
  },
  {
    id: 'cr-112',
    name: 'Old Ned Monster',
    description: 'A lesser-known sea serpent reported off Newfoundland',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Old Ned is described as a long, eel-like creature surfacing near fishing communities and following boats.',
      },
      {
        title: 'Notable Sightings',
        content: 'Accounts from the 1800s mention a dark, ridged back moving in smooth arcs through cold Atlantic waters.',
      },
      {
        title: 'Evidence & Research',
        content: 'Some suggest misidentified whales or oarfish; others argue for a distinct regional serpent tradition.',
      },
    ],
  },
  {
    id: 'cr-113',
    name: 'Orang Mawas Impakta',
    description: 'A violent variant of the Malaysian wildman Orang Mawas',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'The Impakta version portrays Orang Mawas as more aggressive, capable of attacking livestock or travelers.',
      },
      {
        title: 'Notable Sightings',
        content: 'Witnesses describe 8-foot, red-haired figures tearing apart vegetation or chasing motorcyclists on jungle roads.',
      },
      {
        title: 'Evidence & Research',
        content: 'Likely overlaps with sun bear sightings or escaped orangutans; some researchers propose a surviving hominid species.',
      },
    ],
  },
  {
    id: 'cr-114',
    name: 'Orang Pendek Small Bigfoot',
    description: 'A short, humanlike cryptid reported in the Sumatran rainforest',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Orang Pendek is described as a strong, short biped covered in dark hair, with human-like footprints and great agility.',
      },
      {
        title: 'Notable Sightings',
        content: 'Forest workers and researchers report glimpses of a small ape-like figure fleeing into dense vegetation.',
      },
      {
        title: 'Evidence & Research',
        content: 'Footprints, hair samples, and eyewitness reports exist but remain inconclusive. Some consider Orang Pendek one of the most plausible hominid cryptids.',
      },
    ],
  },
  {
    id: 'cr-115',
    name: 'Owlman Cornish',
    description: 'A winged humanoid resembling an owl, reported in Cornwall since the 1970s',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Owlman is described as a tall, owl-like humanoid with glowing eyes and large wings, often seen near old churches.',
      },
      {
        title: 'Notable Sightings',
        content: 'Young girls in the 1970s reported repeated encounters; later witnesses describe silent flight and piercing shrieks.',
      },
      {
        title: 'Evidence & Research',
        content: 'Some propose misidentified eagle owls. Others link Owlman psychologically to Mothman-type archetypes.',
      },
    ],
  },
  {
    id: 'cr-116',
    name: 'Ozark Howler',
    description: 'A horned, panther-like beast said to prowl the Ozark Mountains',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Descriptions vary between a black feline with horns and a shaggy bear-like creature emitting a blood-curdling howl.',
      },
      {
        title: 'Notable Sightings',
        content: 'Witnesses hear unearthly screams echoing across valleys. Some report red-eyed animals stalking tree lines.',
      },
      {
        title: 'Evidence & Research',
        content: 'Skeptics propose cougars or hoaxes; believers argue consistent patterns across decades indicate a real species.',
      },
    ],
  },
  {
    id: 'cr-117',
    name: 'Palmyra Black Panther',
    description: 'A phantom big cat reported around Palmyra Island in the Pacific',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Sailors describe a sleek black feline prowling beaches or jungle clearings—despite no native big cats existing in the region.',
      },
      {
        title: 'Notable Sightings',
        content: 'Reports include glowing eyes reflected in lantern light, and dark shapes slinking through abandoned military ruins.',
      },
      {
        title: 'Evidence & Research',
        content: 'Likely explanations include feral cats or optical illusions in moonlight; still, Palmyra’s eerie history enhances belief in the panther.',
      },
    ],
  },
  {
    id: 'cr-118',
    name: 'Palmyra Wolves',
    description: 'Large wolf-like animals allegedly seen on Palmyra Atoll',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Despite being a remote atoll, some claim wolf-like creatures prowl its dense interior.',
      },
      {
        title: 'Notable Sightings',
        content: 'Witnesses describe pairs of glowing eyes and deep howls echoing at night, unusual for the island environment.',
      },
      {
        title: 'Evidence & Research',
        content: 'No wolves exist there; stories may reflect fear, misidentification, or imported animals long vanished.',
      },
    ],
  },
  {
    id: 'cr-119',
    name: 'Pale Crawlers',
    description: 'Gaunt, pallid humanoids reported crawling on all fours in forests, caves, or abandoned sites',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Accounts describe hairless, pale figures with elongated limbs, sunken eyes, and unnervingly fluid movement.',
      },
      {
        title: 'Notable Sightings',
        content: 'Motorists, hikers, and campers report glimpses of crawling humanoids at night—often moving faster than expected or scaling vertical surfaces.',
      },
      {
        title: 'Evidence & Research',
        content: 'Possible explanations include misidentified animals, viral internet horror, or psychological responses to darkness. Some consider Crawlers a distinct cryptid class.',
      },
    ],
  },
  {
    id: 'cr-120',
    name: 'Pallas Cat Cryptid',
    description: 'A mysterious oversized or anomalous Pallas cat reported in remote regions',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Pallas cats are real, small wildcats native to Central Asia—but some stories describe much larger, unusually bold or intelligent individuals behaving almost like cryptids.',
      },
      {
        title: 'Notable Sightings',
        content: 'Travelers report stocky, wide-faced cats far larger than normal, watching from rocks or following caravans at a distance.',
      },
      {
        title: 'Evidence & Research',
        content: 'Most accounts likely stem from misjudged scale and rare encounters with normal Pallas cats, though legends elevate them into near-mythic mountain spirits.',
      },
    ],
  },
  {
    id: 'cr-121',
    name: 'Pérák Spring Man',
    description: 'A leaping humanoid figure from World War II–era Czech folklore',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Pérák was said to be a man or entity with incredible jumping ability, vaulting over streets and rooftops in occupied Prague—akin to Spring-heeled Jack.',
      },
      {
        title: 'Notable Sightings',
        content: 'Witnesses claimed to see a dark figure with spring-loaded boots or mechanical legs, escaping Nazi patrols with superhuman leaps.',
      },
      {
        title: 'Evidence & Research',
        content: 'Likely a mix of urban legend, resistance propaganda, and exaggerated sightings, though some suggest an unknown acrobat or stuntman started the tales.',
      },
    ],
  },
  {
    id: 'cr-122',
    name: 'Pegasus Sightings',
    description: 'Modern reports of winged horse-like creatures in the sky',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Pegasus is rooted in Greek mythology, but occasional modern stories describe winged horses flying over mountains or plains.',
      },
      {
        title: 'Notable Sightings',
        content: 'Witnesses sometimes report horse-shaped silhouettes with wings passing in front of the moon or clouds at dusk.',
      },
      {
        title: 'Evidence & Research',
        content: 'Most cases are likely misidentified birds, drones, or pareidolia. Still, Pegasus-themed cryptid reports persist in fringe literature.',
      },
    ],
  },
  {
    id: 'cr-123',
    name: 'Phantom Cats Big',
    description: 'Large mystery cats reported in regions with no native big cat populations',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'From the UK to Australia, “phantom cats” or alien big cats are described as panther- or puma-like predators roaming countryside and moorland.',
      },
      {
        title: 'Notable Sightings',
        content: 'Reports include livestock killings, paw prints, and fleeting glimpses of big cats crossing roads or ridgelines.',
      },
      {
        title: 'Evidence & Research',
        content: 'Evidence is mixed: some tracks and hair samples suggest big cats, possibly escaped exotics, but no confirmed breeding populations have been proven.',
      },
    ],
  },
  {
    id: 'cr-124',
    name: 'Phantom Kangaroos',
    description: 'Kangaroo-like creatures reported on continents where they should not exist',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Numerous sightings in the U.S. and Europe describe kangaroo-shaped animals bounding across fields or roads, far from Australia.',
      },
      {
        title: 'Notable Sightings',
        content: 'Police and civilians alike have reported “hopping” creatures with long tails. Some are caught on low-resolution video or photos.',
      },
      {
        title: 'Evidence & Research',
        content: 'Escaped zoo animals, wallabies, and misidentified deer likely explain most cases. Still, phantom kangaroos remain a quirky global mini-cryptid.',
      },
    ],
  },
  {
    id: 'cr-125',
    name: 'Pooka Shape Shifter',
    description: 'A mischievous shapeshifting spirit from Celtic lore, often appearing as a horse or dog',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'The Pooka (or Púca) is a fairy or spirit said to assume forms such as a black horse, goat, dog, or even human, often tricking travelers.',
      },
      {
        title: 'Notable Sightings',
        content: 'Stories tell of people lured onto a Pooka’s back for wild midnight rides or encountering talking animals with gleaming eyes at crossroads.',
      },
      {
        title: 'Evidence & Research',
        content: 'Firmly folkloric, the Pooka symbolizes unpredictable nature spirits. Modern “sightings” are usually viewed as ghost or fae encounters rather than biological cryptids.',
      },
    ],
  },
  {
    id: 'cr-126',
    name: 'Pope Lick Monster',
    description: 'A goatman-like creature said to haunt the Pope Lick Trestle in Kentucky',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Described as a human-goat hybrid, sometimes with fur, horns, and cloven hooves, the Pope Lick Monster is tied to a deadly train trestle near Louisville.',
      },
      {
        title: 'Notable Sightings',
        content: 'Witnesses report seeing a horned figure on or under the bridge, sometimes luring victims onto the tracks through hypnosis or mimicry.',
      },
      {
        title: 'Evidence & Research',
        content: 'Tragically, real deaths have occurred from people exploring the trestle. Most researchers view the monster as urban legend amplified by the site’s inherent danger.',
      },
    ],
  },
  {
    id: 'cr-127',
    name: 'Rake Creature',
    description: 'A pale, emaciated humanoid with long claws popularized by internet lore and alleged sightings',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'The Rake is described as a hairless, crouching humanoid with long fingers, associated with home invasions and bedside encounters.',
      },
      {
        title: 'Notable Sightings',
        content: 'People report seeing the creature perched at the foot of their bed, crawling on all fours near forests, or captured on trail cams as a gaunt figure.',
      },
      {
        title: 'Evidence & Research',
        content: 'Originating partly from creepypasta, some insist on real sightings. Skeptics frame it as a modern myth blending sleep paralysis, misidentifications, and viral stories.',
      },
    ],
  },
  {
    id: 'cr-128',
    name: 'River Dragon Mekong',
    description: 'A serpentine or dragon-like creature said to inhabit the Mekong River',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Local traditions speak of nagas and river dragons in the Mekong—massive serpents or dragon-like beings living in deep channels.',
      },
      {
        title: 'Notable Sightings',
        content: 'Fishermen report undulating bodies beneath boats, huge wakes, or strange fireballs over the river associated with naga lore.',
      },
      {
        title: 'Evidence & Research',
        content: 'As a cryptid, the River Dragon likely represents cultural nagas fused with sightings of large fish, giant catfish, or wave phenomena.',
      },
    ],
  },
  {
    id: 'cr-129',
    name: 'Sandown Clown Entity',
    description: 'A bizarre, clown-like humanoid encountered by children in Sandown, Isle of Wight in the 1970s',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'The Sandown entity was described as a tall, thin figure with a strange mask-like face, ragged clothes, and mechanical-sounding voice.',
      },
      {
        title: 'Notable Sightings',
        content: 'Two children claimed to speak with the being near a golf course, describing it as neither quite human nor fully robotic or ghostly.',
      },
      {
        title: 'Evidence & Research',
        content: 'No other witnesses came forward. Researchers variously categorize it as a fae, extraterrestrial, or psychological anomaly.',
      },
    ],
  },
  {
    id: 'cr-130',
    name: 'Sasquatch Bigfoot',
    description: 'A term emphasizing Indigenous and regional names for the Bigfoot phenomenon',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Sasquatch is derived from Salish words describing wild hairy people of the forest, predating the popularized term “Bigfoot.”',
      },
      {
        title: 'Notable Sightings',
        content: 'Accounts across the Pacific Northwest and Canada describe tall, hair-covered beings leaving large tracks and emitting powerful howls.',
      },
      {
        title: 'Evidence & Research',
        content: 'This entry highlights the cultural context of Sasquatch as a spiritual or semi-physical being in Indigenous lore, not just a zoological mystery.',
      },
    ],
  },
  {
    id: 'cr-131',
    name: 'Scape Ore Lizard Man',
    description: 'A reptilian humanoid said to stalk the Scape Ore Swamp in South Carolina',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'The Lizard Man is described as a 7-foot, scaly humanoid with glowing red eyes, associated with vehicle damage and roadside encounters.',
      },
      {
        title: 'Notable Sightings',
        content: 'In the late 1980s, reports surfaced of a reptilian creature attacking cars and chasing teenagers near the swamp.',
      },
      {
        title: 'Evidence & Research',
        content: 'Footprints and scratches were documented, but no creature was caught. Explanations range from hoax to misidentified animals to genuine cryptid.',
      },
    ],
  },
  {
    id: 'cr-132',
    name: 'Sea Serpents',
    description: 'A broad class of long, serpentine marine cryptids reported worldwide',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'From Norse Jörmungandr tales to Victorian sea-monster reports, long-necked or snake-like creatures have haunted sailors’ stories for centuries.',
      },
      {
        title: 'Notable Sightings',
        content: 'Icons include the HMS Daedalus sighting, Gloucester Sea Serpent, and countless accounts of undulating backs and horse-like heads at sea.',
      },
      {
        title: 'Evidence & Research',
        content: 'Many classic cases have been reinterpreted as whales, oarfish, squid, or wave optical illusions, but the archetype of the sea serpent persists.',
      },
    ],
  },
  {
    id: 'cr-133',
    name: 'Sharlie Payette Lake',
    description: 'A lake monster said to haunt Payette Lake in Idaho, nicknamed Sharlie',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Sharlie is described as a large, dark, serpentine creature inhabiting the deep glacier-carved waters of Payette Lake.',
      },
      {
        title: 'Notable Sightings',
        content: 'Sightings date back to the 1920s and include reports of a 30–40 foot creature with multiple humps moving through the lake.',
      },
      {
        title: 'Evidence & Research',
        content: 'No solid evidence has been produced. Candidates include logs, wakes, and large fish misperceived at distance.',
      },
    ],
  },
  {
    id: 'cr-134',
    name: 'Sheepsquatch Sheep Monster',
    description: 'A woolly, horned cryptid reported in West Virginia and surrounding states',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Sheepsquatch is depicted as a large, white-furred creature with ram horns, a dog-like head, and musky odor, roaming forested hills.',
      },
      {
        title: 'Notable Sightings',
        content: 'Witnesses report it standing on two or four legs, sometimes charging at cars or campers before retreating.',
      },
      {
        title: 'Evidence & Research',
        content: 'Likely inspired by misidentified bears, goats, or prank costumes, Sheepsquatch has nonetheless become a staple of Appalachian cryptid lore.',
      },
    ],
  },
  {
    id: 'cr-135',
    name: 'Shug Monkey',
    description: 'A hybrid dog-ape cryptid reported in Cambridgeshire, England',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'The Shug Monkey blends black dog and ape-man archetypes—described as a creature with a dog’s body and monkey-like face.',
      },
      {
        title: 'Notable Sightings',
        content: 'Sightings along country lanes describe a shaggy beast with an unsettling, almost human expression, sometimes vanishing suddenly.',
      },
      {
        title: 'Evidence & Research',
        content: 'It may be a fusion of phantom black dog folklore and escaped primate rumors. No physical evidence has surfaced.',
      },
    ],
  },
  {
    id: 'cr-136',
    name: 'Shunka Warakin Hyena',
    description: 'A hyena-like beast from Native American and frontier lore in the U.S. Midwest',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Shunka Warakin is said to resemble a wolf-hyena hybrid with a sloping back and dark mane, preying on livestock and travelers.',
      },
      {
        title: 'Notable Sightings',
        content: 'Historical accounts describe strange canids shot by ranchers, one of which was taxidermied and displayed before vanishing for decades.',
      },
      {
        title: 'Evidence & Research',
        content: 'Some specimens may have been unusually built wolves or dogs; others remain unidentified, fueling speculation about an unknown canid.',
      },
    ],
  },
  {
    id: 'cr-137',
    name: 'Sigbin Vampire Dog',
    description: 'A vampire-like creature from Philippine folklore said to resemble a hornless goat or hairless dog',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'The Sigbin is said to walk backwards, hide in shadows, and suck blood from victims through their shadows or necks.',
      },
      {
        title: 'Notable Sightings',
        content: 'Stories tell of strange, backward-walking animals seen near villages at night, vanishing when pursued.',
      },
      {
        title: 'Evidence & Research',
        content: 'Scholars link Sigbin lore to cultural fears of disease and nocturnal predators. Some cryptid fans connect it to reports of odd canids or hairless animals.',
      },
    ],
  },
  {
    id: 'cr-138',
    name: 'Skunk Ape Florida Bigfoot',
    description: 'A foul-smelling, smaller Bigfoot variant reported in Florida and the Southeast U.S.',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'The Skunk Ape is described as a 5–7 foot tall, ape-like creature with reddish hair and a powerful, skunk-like odor, inhabiting swamps and hammocks.',
      },
      {
        title: 'Notable Sightings',
        content: 'Sightings cluster in the Everglades and Big Cypress areas. Famous photographs and law enforcement reports have kept the legend alive.',
      },
      {
        title: 'Evidence & Research',
        content: 'Hair and scat samples have never conclusively proven a new species. Possibilities include misidentified bears or feral apes, though no clear consensus exists.',
      },
    ],
  },
  {
    id: 'cr-139',
    name: 'Sky Serpents',
    description: 'Serpentine, dragon-like shapes seen moving through clouds or along the horizon',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Sky serpents appear in global lore as dragons or snake-like beings slithering across the sky, sometimes linked to storms or omens.',
      },
      {
        title: 'Notable Sightings',
        content: 'Modern witnesses report wavy, tube-like forms gliding behind clouds or silhouetted against the sun, occasionally mistaken for UFOs.',
      },
      {
        title: 'Evidence & Research',
        content: 'Likely explanations include contrails, cloud formations, or strings of balloons. Paranormal interpretations tie them to atmospheric beasts or sky-dwelling entities.',
      },
    ],
  },
  {
    id: 'cr-140',
    name: 'Spring-heeled Jack',
    description: 'A leaping, fire-breathing humanoid terror of Victorian England known for impossible jumps',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Spring-heeled Jack emerged in 1837 London, described as a demonic gentleman with metallic claws and the ability to leap rooftops effortlessly.',
      },
      {
        title: 'Notable Sightings',
        content: 'Victims reported a tall figure spewing blue fire and fleeing with superhuman bounds. Sightings spread across England for decades.',
      },
      {
        title: 'Evidence & Research',
        content: 'Theories range from pranksters to mass hysteria to paranormal entity. No identity was ever confirmed.',
      },
    ],
  },
  {
    id: 'cr-141',
    name: 'Swamp Monsters',
    description: 'A catch-all for murky, reptilian or humanoid creatures reported in southern swamps',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'From the American South to the Amazon, swamp creatures appear as lizard-men, hairy hominids, or amphibious humanoids.',
      },
      {
        title: 'Notable Sightings',
        content: 'Reports often involve glowing eyes over water, massive splashes, or creatures retreating into reeds.',
      },
      {
        title: 'Evidence & Research',
        content: 'Swamp terrain creates ideal conditions for misidentification, though some researchers believe unknown animals remain undiscovered.',
      },
    ],
  },
  {
    id: 'cr-142',
    name: 'Tahoe Tessie Lake Monster',
    description: 'A serpent-like creature said to dwell in Lake Tahoe',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Tessie lore traces back to Washoe and Paiute stories of large underwater beings inhabiting Tahoe’s deep, cold waters.',
      },
      {
        title: 'Notable Sightings',
        content: 'Reports include dark shapes pacing boats, multiple humps, and massive underwater sonar returns.',
      },
      {
        title: 'Evidence & Research',
        content: 'Sonar anomalies intrigue some researchers, though skeptics point to fish schools, logs, or illusions.',
      },
    ],
  },
  {
    id: 'cr-143',
    name: 'Tell-tale Sea Serpent',
    description: 'A classic New England sea monster known for rhythmic, storytelling-like humps surfacing in waves',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Named for its signature undulating “tale,” this serpent appeared in 19th-century maritime folklore.',
      },
      {
        title: 'Notable Sightings',
        content: 'Sailors described long, rolling humps surfacing in sequence, moving too fast and too coordinated to be logs.',
      },
      {
        title: 'Evidence & Research',
        content: 'Probably wave trains or whales, but reports helped shape modern sea serpent archetypes.',
      },
    ],
  },
  {
    id: 'cr-144',
    name: 'Thetis Lake Monster',
    description: 'A silver-scaled humanoid encountered near Thetis Lake, British Columbia',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Described as a gilled creature with sharp fins and fish-like skin, first reported by teenagers in 1972.',
      },
      {
        title: 'Notable Sightings',
        content: 'Witnesses claimed it emerged from the lake and chased them. Subsequent sightings described a fish-man figure.',
      },
      {
        title: 'Evidence & Research',
        content: 'Widely believed to be a hoax or misidentified animal, though some cryptid enthusiasts consider it a regional gill-man legend.',
      },
    ],
  },
  {
    id: 'cr-145',
    name: 'Thunderbird Giant Bird',
    description: 'Massive winged creatures reported across North America, often linked to Indigenous legends',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Thunderbirds are sacred beings said to control storms, depicted with enormous wings and powerful cries.',
      },
      {
        title: 'Notable Sightings',
        content: 'Modern reports describe condor-sized birds carrying deer, blocking sunlight, or gliding with 15–20 foot wingspans.',
      },
      {
        title: 'Evidence & Research',
        content: 'Sightings may reflect misidentified eagles or extinct megafauna. Some believe prehistoric teratorns survived.',
      },
    ],
  },
  {
    id: 'cr-146',
    name: 'Tizheruk Inuit Serpent',
    description: 'A long, snake-like creature from Inuit lore said to snatch people from docks or ice edges',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Tizheruk are said to have 7-foot heads and eel-like bodies, lurking beneath Arctic waters.',
      },
      {
        title: 'Notable Sightings',
        content: 'Fishermen report smooth, serpentine forms under the ice or sudden pulls on equipment or people.',
      },
      {
        title: 'Evidence & Research',
        content: 'Possibly inspired by Greenland sharks or giant eels mixed with regional cautionary tales.',
      },
    ],
  },
  {
    id: 'cr-147',
    name: 'Tokeloshe Aquatic Variant',
    description: 'A water-adapted form of the Tokoloshe, a mischievous creature from Zulu folklore',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'While Tokoloshe are typically land spirits, some stories describe an aquatic version haunting rivers and lakes.',
      },
      {
        title: 'Notable Sightings',
        content: 'Reports include small humanoids with waterlogged fur or slick skin, seen swimming or emerging from reeds.',
      },
      {
        title: 'Evidence & Research',
        content: 'Firmly folkloric, though tied to safety warnings about dangerous waters and unseen hazards.',
      },
    ],
  },
  {
    id: 'cr-148',
    name: 'Trunko Furred Monster',
    description: 'A bizarre, fur-covered “whale-like” creature beached in South Africa in 1924',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Trunko was described as a furry, elephant-trunked sea creature engaged in battle with orcas.',
      },
      {
        title: 'Notable Sightings',
        content: 'Newspaper accounts reported a white-furred mass with a long appendage, later washed ashore.',
      },
      {
        title: 'Evidence & Research',
        content: 'Most researchers now identify it as a “globster”—decomposed whale tissue forming bizarre shapes.',
      },
    ],
  },
  {
    id: 'cr-149',
    name: 'Tuttle Bottoms Monster',
    description: 'A hairy, tusked creature reported near Harrisburg, Illinois',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Witnesses describe a large, boar-faced beast with humanlike posture haunting local waterways.',
      },
      {
        title: 'Notable Sightings',
        content: 'Reports surged in the 1960s: glowing eyes, foul odors, and lumbering movement through brush.',
      },
      {
        title: 'Evidence & Research',
        content: 'Possibly wild hogs, escaped exotics, or misidentified bear sightings. No physical evidence found.',
      },
    ],
  },
  {
    id: 'cr-150',
    name: 'Tumatauenga Shadow Swimmer',
    description: 'A shadowy aquatic entity connected to Māori war-god traditions',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Said to be spirits or shadow forms moving beneath water surfaces, linked to ancestral and warrior symbolism.',
      },
      {
        title: 'Notable Sightings',
        content: 'People report dark shapes streaking beneath canoes or surfacing as humanlike silhouettes.',
      },
      {
        title: 'Evidence & Research',
        content: 'Generally viewed as spiritual manifestations within Māori cosmology rather than a biological cryptid.',
      },
    ],
  },
  {
    id: 'cr-151',
    name: 'Van Meter Visitor',
    description: 'A winged, glowing-eyed creature reported in Van Meter, Iowa in 1903',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Described as a bat-like humanoid with a horn projecting bright light, emerging from an abandoned mine.',
      },
      {
        title: 'Notable Sightings',
        content: 'Multiple townspeople shot at the creature; bullets had no effect. It escaped underground with a second entity.',
      },
      {
        title: 'Evidence & Research',
        content: 'Now considered a cornerstone Midwestern cryptid; theories include pterosaurs, demons, or misidentified birds.',
      },
    ],
  },
  {
    id: 'cr-152',
    name: 'Van Meter Winged Larvae',
    description: 'Small, winged creatures allegedly accompanying the Van Meter Visitor',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Some accounts describe small, larva-like beings with wings flying around the main Visitor.',
      },
      {
        title: 'Notable Sightings',
        content: 'Witnesses felt swarmed by buzzing, moth-like shapes that fled into darkness.',
      },
      {
        title: 'Evidence & Research',
        content: 'Likely embellishments or misinterpreted insects amplified by fear, though tied closely to the main Van Meter legend.',
      },
    ],
  },
  {
    id: 'cr-153',
    name: 'Wampus Cat Werecat',
    description: 'A feline humanoid entity rooted in Cherokee lore and Appalachian folklore',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'The Wampus Cat is said to be a cursed woman transformed into a wrathful feline-being after witnessing sacred rituals.',
      },
      {
        title: 'Notable Sightings',
        content: 'Reports describe glowing eyes, panther-like bodies, and eerie screams echoing through forests.',
      },
      {
        title: 'Evidence & Research',
        content: 'Mostly folkloric but occasionally cited in modern cryptid circles as a southeastern U.S. mystery predator.',
      },
    ],
  },
  {
    id: 'cr-154',
    name: 'Water Leaper',
    description: 'A winged, frog-like creature from Welsh lore known as a dangerous lake predator',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Water Leapers (Llamhigyn Y Dŵr) are said to leap from water, slice fishing lines, and attack livestock or fishers.',
      },
      {
        title: 'Notable Sightings',
        content: 'Accounts describe large, bat-winged frogs or fish with long tails whipping at boats.',
      },
      {
        title: 'Evidence & Research',
        content: 'Likely symbolic cautionary tales about dangerous waters; biological explanations include large fish or otters.',
      },
    ],
  },
  {
    id: 'cr-155',
    name: 'Werecat Shapeshifter',
    description: 'Humans believed to transform into large cats such as panthers or lions',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Werecats appear in African, Asian, and European lore as witches or cursed individuals taking feline form.',
      },
      {
        title: 'Notable Sightings',
        content: 'Reports include panther-like beings walking on two legs or shifting between human and animal shapes.',
      },
      {
        title: 'Evidence & Research',
        content: 'Seen as mythological extensions of werewolf narratives; modern sightings may reflect misidentified animals.',
      },
    ],
  },
  {
    id: 'cr-156',
    name: 'Werehyena',
    description: 'Shapeshifting humans or sorcerers taking the form of hyenas, common in African folklore',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Stories depict witches or cursed individuals transforming into hyena-like beasts at night.',
      },
      {
        title: 'Notable Sightings',
        content: 'Witnesses describe unnaturally large hyenas walking upright or showing humanlike intelligence.',
      },
      {
        title: 'Evidence & Research',
        content: 'Folkloric at its core, though linked to cultural anxieties and real hyena behavior.',
      },
    ],
  },
  {
    id: 'cr-157',
    name: 'Werewolf Lycanthrope',
    description: 'Humans transforming into wolves, one of the world’s oldest shapeshifting legends',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Werewolves appear globally as cursed, enchanted, or voluntarily transformed humans taking wolf form.',
      },
      {
        title: 'Notable Sightings',
        content: 'Reports from medieval Europe to modern America describe upright wolf-creatures stalking roads or forests.',
      },
      {
        title: 'Evidence & Research',
        content: 'Explanations include rabies, hypertrichosis, delusion, and misidentified dogs or wolves. Folklorically rich, biologically unlikely.',
      },
    ],
  },
  {
    id: 'cr-158',
    name: 'Yeren Chinese Wildman',
    description: 'A reddish-haired hominid said to inhabit remote mountain regions of China',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'The Yeren resembles Bigfoot but is often described as more humanlike, with reddish fur and a shy demeanor.',
      },
      {
        title: 'Notable Sightings',
        content: 'Villagers and soldiers report large, bipedal figures fleeing into misty forests.',
      },
      {
        title: 'Evidence & Research',
        content: 'China has hosted multiple official expeditions, but findings remain inconclusive.',
      },
    ],
  },
  {
    id: 'cr-159',
    name: 'Yeti Abominable Snowman',
    description: 'A massive, white-furred ape-like cryptid said to inhabit the Himalayas',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Sherpa traditions describe the Yeti as a powerful mountain spirit or creature dwelling in high-altitude caves.',
      },
      {
        title: 'Notable Sightings',
        content: 'Mountaineers report footprints in snow, distant silhouettes, and guttural calls echoing through valleys.',
      },
      {
        title: 'Evidence & Research',
        content: 'Hair and bone samples often test as bear species. Still, Yeti remains one of the world’s most iconic cryptids.',
      },
    ],
  },
  {
    id: 'cr-160',
    name: 'Yowie Australian Bigfoot',
    description: 'A large, ape-like creature reported across Australian bushland',
    categoryId: 'creatures',
    icon: '🐾',
    sections: [
      {
        title: 'Lore & Origins',
        content: 'Aboriginal lore includes hairy, manlike beings wandering the outback long before European settlement.',
      },
      {
        title: 'Notable Sightings',
        content: 'Witnesses describe tall, shaggy figures crossing roads, screaming in forests, or leaving large tracks in sand.',
      },
      {
        title: 'Evidence & Research',
        content: 'As with Bigfoot, evidence is mostly anecdotal, though Yowie hotspots produce recurring witness clusters.',
      },
    ],
  },
];

export const getCreatureById = (id: string): CreatureTopic | undefined => {
  return creaturesData.find(creature => creature.id === id);
};

export const getCreatureByName = (name: string): CreatureTopic | undefined => {
  return creaturesData.find(creature => creature.name.toLowerCase() === name.toLowerCase());
};

/**
 * Get all creature topics
 * @returns Array of all creature topics
 */
export const getAllCreatures = (): readonly CreatureTopic[] => {
  return creaturesData;
};

/**
 * Get count of creature topics
 * @returns Total number of creatures
 */
export const getCreaturesCount = (): number => {
  return creaturesData.length;
};
