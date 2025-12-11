// data/paranormal/folklore.ts
/**
 * Folklore Category Data
 * Mythical creatures and legendary beings from world folklore
 * 
 * Includes: Fairies, Vampires, Werewolves, Dragons, The Kraken
 */

import { categoryColors } from '@/constants/Colors';
import type { TopicSection, CategoryId } from './types';

export interface FolkloreTopic {
  id: string;
  name: string;
  description: string;
  categoryId: CategoryId;
  icon: string;
  sections: TopicSection[];
}

export const folkloreData: readonly FolkloreTopic[] = [
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
  {
    id: 'fl-6',
    name: 'Aatxe Red Bull',
    description: 'A fiery Basque spirit that appears as a red bull to punish evildoers',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'In Basque folklore, the Aatxe emerges from caves to protect the innocent, often appearing as a massive red bull glowing like molten iron.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Connected to ancient Basque deities of nature and justice, the Aatxe may have been a guardian spirit associated with mountainous regions.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'It chases wrongdoers and guides lost travelers. Some legends claim it can shape-shift into a human warrior when needed.',
      },
    ],
  },
  {
    id: 'fl-7',
    name: 'Acheri Death Child',
    description: 'A ghostly child spirit believed to bring illness to the living',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Acheri appear in the Himalayan region as mountain spirits of children who died tragically, haunting villages at dusk and dawn.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Often linked to real historical childhood mortality, the Acheri myth blends grief with supernatural cautionary themes.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'They spread sickness with their shadows; charms of red thread or bells are said to ward off their influence.',
      },
    ],
  },
  {
    id: 'fl-8',
    name: 'Adhene Manx Fairies',
    description: 'Mischievous but unpredictable fairies from the Isle of Man',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Known as “themselves,” the Adhene resemble humans but smaller and more beautiful, living underground in a parallel world.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Their mythology blends Celtic fairy lore with Manx seafaring beliefs, painting them as tricksters capable of blessing or cursing humans.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'People avoid speaking ill of them. Offerings of bread and milk ensure peace, while disrespect invites chaos or misfortune.',
      },
    ],
  },
  {
    id: 'fl-9',
    name: 'Angels Celestial Beings',
    description: 'Divine messengers appearing in countless world religions',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Angels appear in Judaism, Christianity, Islam, Zoroastrianism, and more—sometimes winged, sometimes purely radiant beings.',
      },
      {
        title: 'Origins & Evolution',
        content: 'They evolved from ancient Near Eastern guardian spirits and divine intermediaries, later becoming highly structured hierarchies of beings.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Guardian angels, fallen angels, and archangels populate myths. Encounters range from benevolent visions to terrifying apocalyptic messengers.',
      },
    ],
  },
  {
    id: 'fl-10',
    name: 'Asasabonsam Forest Vampire',
    description: 'A vampiric creature from West African folklore that hunts from treetops',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'The Asasabonsam lurks in Ghanaian forests, described as humanoid with iron hooks for feet that dangle from branches.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Hunter traditions may have inspired tales of unseen predators. The Asanbosam is a related Ashanti being with overlapping traits.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'It captures humans from above, draining their vitality. Amulets and offerings to forest spirits were believed to prevent attacks.',
      },
    ],
  },
  {
    id: 'fl-11',
    name: 'Aswang Shapeshifter',
    description: 'A Filipino shapeshifting creature infamous for nocturnal feeding',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Aswangs take many forms—vampires, ghouls, witches, or animal mimics—depending on region. Some detach their upper bodies to fly.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Spanish colonial accounts blended local mythological beings into one overarching archetype of the Aswang.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Salt, garlic, and coconut oil reveal or repel them. Pregnant women are said to be especially targeted by these entities.',
      },
    ],
  },
  {
    id: 'fl-12',
    name: 'Baba Dochia Witch',
    description: 'A Romanian weather witch tied to the arrival of spring',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Baba Dochia symbolizes winter’s wrath. As she sheds her magical coats, the weather becomes unpredictable during early spring.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Her myth may preserve ancient agrarian rituals marking seasonal change and the hardships of cold months.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'People say her final transformation turns her to stone. March 1–9 are called “Baba Days,” each reflecting her shifting moods.',
      },
    ],
  },
  {
    id: 'fl-13',
    name: 'Baba Yaga Witch',
    description: 'A powerful Slavic witch who lives in a hut on chicken legs',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Baba Yaga appears as an ancient crone with immense magical power, sometimes helping heroes and sometimes devouring them.',
      },
      {
        title: 'Origins & Evolution',
        content: 'She may originate from pre-Christian mother goddess archetypes, later demonized into a monstrous forest witch.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Her hut spins to confuse visitors. She travels in a mortar and pestle. Only clever or pure-hearted travelers survive her tests.',
      },
    ],
  },
  {
    id: 'fl-14',
    name: 'Banshee Wailing Spirit',
    description: 'An Irish spirit whose mournful cry foretells death',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'She appears as a young maiden, a matron, or an old hag. Some families have hereditary banshees linked to their ancestral lines.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Derived from the “bean sídhe,” meaning “woman of the fairy mound,” connecting her to Irish fairy nobility.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Her keening cry is heard before a relative’s death. She does not cause death—she only announces it.',
      },
    ],
  },
  {
    id: 'fl-15',
    name: 'Barmanou Himalayan Yeti',
    description: 'A humanoid mountain creature said to roam Afghanistan and Pakistan',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'The Barmanou is similar to the Yeti or Bigfoot, described as a wild humanlike creature that sometimes steals livestock or women.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Central Asian mountain cultures developed parallel legends of wild men representing nature’s untamed frontier.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Some stories depict it wearing animal skins and mimicking human speech. Others portray it as a dangerous nocturnal predator.',
      },
    ],
  },
  {
    id: 'fl-16',
    name: 'Batutut Vietnam Bigfoot',
    description: 'A small but muscular forest humanoid of Vietnam and Laos',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Known as the “Forest People,” Batutut are described as 4–5 feet tall with reddish hair, living deep in remote jungles.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Vietnamese highland tribes may have passed down memories of isolated hominids or encounters with unknown primates.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'They avoid humans but become aggressive when threatened. Hunters report hooting calls and stone-throwing encounters.',
      },
    ],
  },
  {
    id: 'fl-17',
    name: 'Beaked Shaman',
    description: 'A mysterious spirit or masked figure with a long birdlike face',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Across Eurasia and the Americas, shamans donned bird masks to channel spiritual sight or communicate with sky spirits.',
      },
      {
        title: 'Origins & Evolution',
        content: 'The figure reflects ancient beliefs in human-animal transformation and intermediaries between worlds.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Some tales claim the Beaked Shaman appears during liminal times—dusk, solstice nights, or funerary rites.',
      },
    ],
  },
  {
    id: 'fl-18',
    name: 'Berserker Werewolf Rage',
    description: 'A Norse warrior possessed by animal fury, often compared to werewolves',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Berserkers entered trance states channeling bear or wolf spirits, fighting with superhuman strength and no fear of injury.',
      },
      {
        title: 'Origins & Evolution',
        content: 'The phenomenon may derive from ritual intoxication, ecstatic religion, or psychological dissociation during battle.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Some sagas describe them literally transforming or manifesting animal traits, blurring myth and martial tradition.',
      },
    ],
  },
  {
    id: 'fl-19',
    name: 'Bhoot Indian Ghost',
    description: 'A restless spirit from Indian folklore, often tied to unfinished life tasks',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Bhoots may appear with backwards feet, floating shadows, or distorted voices. They haunt fields, trees, and abandoned homes.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Rooted in Hindu beliefs about reincarnation, improper funerary rites, or violent deaths.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Lamps, mantras, and offerings protect against them. Some Bhoots attempt to possess the living or mimic loved ones.',
      },
    ],
  },
  {
    id: 'fl-20',
    name: 'Black Eyed Children',
    description: 'Sinister children with fully black eyes who appear at night requesting entry',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Modern folklore describes them as emotionless children in outdated clothing, speaking with unnatural formality.',
      },
      {
        title: 'Origins & Evolution',
        content: 'The legend emerged in the 1990s from eyewitness accounts and internet forums, blending UFO lore, ghost myths, and demonic motifs.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'They seek permission to enter homes or vehicles. Witnesses feel overwhelming dread. Refusing them seems to be the only defense.',
      },
    ],
  },
  {
    id: 'fl-21',
    name: 'Black Shuck Hellhound',
    description: 'A spectral black dog with glowing eyes that haunts English coastlands',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Black Shuck appears as a massive dog with fiery eyes, connected to death omens throughout East Anglia.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Stories date to medieval times, possibly inspired by Viking warhounds or natural dangers of coastal travel.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Seeing Black Shuck is believed to foretell death. Some sightings involve scorch marks or claw scratches left behind.',
      },
    ],
  },
  {
    id: 'fl-22',
    name: 'Black Stick Men',
    description: 'Shadowlike humanoids described as thin, faceless, and rigid',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Encounters often describe beings resembling living stick figures, moving with jerky or inhuman motions.',
      },
      {
        title: 'Origins & Evolution',
        content: 'The phenomenon grew in the 2000s, overlapping with shadow person encounters and modern urban legends.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Witnesses report overwhelming dread and paralysis. They seem to appear briefly before vanishing silently.',
      },
    ],
  },
  {
    id: 'fl-23',
    name: 'Blemmyes Headless Humanoids',
    description: 'Mythical beings with faces on their chests instead of heads',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Mentioned by Herodotus and medieval travelers, Blemmyes allegedly lived in North Africa with mouths and eyes on their torsos.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Likely arose from misinterpreted foreign customs, war helmets, or exaggerated reports of distant peoples.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'They symbolize the “unknown other” in ancient geography—exotic, frightening, yet strangely human.',
      },
    ],
  },
  {
    id: 'fl-24',
    name: 'Bloody Mary',
    description: 'A spirit said to appear when her name is chanted into a mirror',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'The ritual varies: chanting three times, spinning, or using candlelight. She may appear as a ghost, witch, or vengeful queen.',
      },
      {
        title: 'Origins & Evolution',
        content: 'The myth blends urban legend with earlier mirror divination practices used to reveal future spouses.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Outcomes range from harmless jump-scares to violent visions. Mirrors are seen as portals that must be respected.',
      },
    ],
  },
  {
    id: 'fl-25',
    name: 'Bloody Mary Triple Chant',
    description: 'A dangerous variant of the mirror-summoning ritual requiring repeated invocations',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'This version emphasizes chanting her name three times without interruption, often performed at sleepovers or abandoned locations.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Likely a modern embellishment of the core Bloody Mary legend, designed to intensify fear.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Breaking the chant mid-sequence is believed to provoke the spirit. Participants report sudden cold, shadows, or distorted reflections.',
      },
    ],
  },
  {
    id: 'fl-26',
    name: 'Bone Harp Fairy',
    description: 'A mournful fairy that crafts harps from human bone',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Common in Celtic and Scandinavian tales, these fairies use the bones of the drowned to make enchanted instruments.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Likely derived from cautionary tales about river spirits and the dangers of wandering alone at night.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Music from these harps reveals hidden truths or summons the dead. Hearing it is considered a death omen.',
      },
    ],
  },
  {
    id: 'fl-27',
    name: 'Bubak Scarecrow Demon',
    description: 'A Czech scarecrow-like creature that mimics infants to lure victims',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Bubaks appear as scarecrows in ravines or fields, weaving human souls into ghostly cloth.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Likely inspired by agricultural fears and night predators calling in forests.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'The Bubak imitates a crying baby to draw travelers closer before abducting them into the mist.',
      },
    ],
  },
  {
    id: 'fl-28',
    name: 'Cat-sìth Spectral Cat',
    description: 'A fairy cat of Scottish lore, large as a dog and jet-black with a white spot',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Said to steal souls before burial, the Cat-sìth roams the Highlands and is linked to Samhain traditions.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Possibly inspired by Kellas cats or monks’ tales warning about witches’ familiars.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Wakes were held with constant watch to prevent the Cat-sìth from claiming a soul.',
      },
    ],
  },
  {
    id: 'fl-29',
    name: 'Changelings Fairy Swap',
    description: 'Human infants replaced by fairy offspring in disguise',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'European families believed sickly or unusual children might be changelings placed by fairies.',
      },
      {
        title: 'Origins & Evolution',
        content: 'A tragic reflection of misunderstood disabilities, postpartum stress, and infant illness.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Iron, fire, or rituals could expose the changeling and force fairies to return the true child.',
      },
    ],
  },
  {
    id: 'fl-30',
    name: 'Char Man Burned Revenant',
    description: 'A charred ghostly figure said to haunt rural California roads',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Described as a burned man dripping soot and ash, shrieking near bridges and campsites.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Emerging from mid-20th-century campfire stories about forest fires and tragedy.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Encounters involve screams, burned smells, or sudden warm gusts of air.',
      },
    ],
  },
  {
    id: 'fl-31',
    name: 'Cockatrice Basilisk',
    description: 'A mythical serpent-rooster hybrid whose gaze or breath is deadly',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Seen as the cousin of the basilisk, the cockatrice hatches from an egg laid by a rooster and incubated by a toad.',
      },
      {
        title: 'Origins & Evolution',
        content: 'First described in medieval bestiaries, combining reptilian fears with symbolic imagery.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'The only creature immune is the weasel. Mirrors were believed to make the cockatrice destroy itself.',
      },
    ],
  },
  {
    id: 'fl-32',
    name: 'Corrupted Blood Plague Folklore',
    description: 'Legends of illnesses that warp the body or spirit through cursed transmission',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Stories across the world speak of plagues that alter appearance or morality, spreading through shadowy forces.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Likely based on real epidemics paired with supernatural explanations for behavior shifts.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Some versions claim the infected join monstrous hordes or wander as undead carriers.',
      },
    ],
  },
  {
    id: 'fl-33',
    name: 'Crooked Man Specter',
    description: 'A tall, bent spirit that stalks lonely paths and homes',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Often depicted with limbs curved unnaturally, whispering rhymes before appearing.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Grew from English nursery rhymes twisted into darker interpretations.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Seeing the Crooked Man is believed to herald misfortune, madness, or familial discord.',
      },
    ],
  },
  {
    id: 'fl-34',
    name: 'Crooked Tree Demon',
    description: 'A forest entity said to inhabit twisted or lightning-scarred trees',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Appears as a gnarled humanoid with bark-like skin. Forest cultures worldwide warn of spirits in warped trees.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Likely linked to animist beliefs about guardian trees and woodland boundaries.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Offerings of water or coins are left to avoid provoking the spirit’s wrath.',
      },
    ],
  },
  {
    id: 'fl-35',
    name: 'Cthulhu Mythos Entities',
    description: 'Cosmic beings drawn from Lovecraftian lore and later expanded mythologies',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Though modern, these entities—Cthulhu, Nyarlathotep, Yog-Sothoth—have become folklore as they seep into collective imagination.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Originated in the early 20th century as horror fiction but now exist as urban myth with global fan interpretation.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Themes revolve around forbidden knowledge, human insignificance, and cults worshiping sleeping titans.',
      },
    ],
  },
  {
    id: 'fl-36',
    name: 'Cucuy Boogeyman',
    description: 'A Latin American boogeyman who kidnaps misbehaving children',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Appears as a shapeless shadow or small hairy creature hiding under beds or in closets.',
      },
      {
        title: 'Origins & Evolution',
        content: 'A cautionary tale used by parents, evolving from Iberian “Coco” legends.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Disappears children who defy their parents, storing them in bags or shadow realms.',
      },
    ],
  },
  {
    id: 'fl-37',
    name: 'Dark Watchers',
    description: 'Mysterious tall silhouettes seen on California ridgelines at dusk',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Described as towering humanoids wearing wide-brim hats or cloaks, silently observing travelers.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Appears in Chumash legends and early Spanish accounts. May be tied to atmospheric shadows or optical illusions.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'They vanish if approached. Some hikers report feelings of calm—others of dread.',
      },
    ],
  },
  {
    id: 'fl-38',
    name: 'Djinn Genie',
    description: 'Powerful spirits of smokeless fire from Middle Eastern mythology',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Djinn can be benevolent, malevolent, or neutral. They possess free will and live parallel to humanity.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Pre-Islamic desert spirits later integrated into Islamic cosmology as beings made from fire.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Djinn grant wishes but twist them if asked unwisely. They inhabit ruins, deserts, and abandoned places.',
      },
    ],
  },
  {
    id: 'fl-39',
    name: 'Drekavac Screaming Spirit',
    description: 'A Slavic childlike creature whose scream warns of coming death',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Appears as a ghostly child, a long-necked beast, or a skeletal creature depending on region.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Born from souls of unbaptized children or those who died violently.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Its scream causes illness or madness. Dogs are said to sense it before humans do.',
      },
    ],
  },
  {
    id: 'fl-40',
    name: 'Dullahan Headless Horseman',
    description: 'A headless rider carrying his own flaming head',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Irish lore describes him riding a black horse with eyes that shoot sparks. German versions inspired Sleepy Hollow.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Likely tied to ancient Celtic death gods and battlefield spirits.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'He stops riding only to call out names—those named die instantly. Gates and gold can repel him.',
      },
    ],
  },
  {
    id: 'fl-41',
    name: 'Dziwożona Swamp Fairy',
    description: 'A Slavic water fairy blamed for kidnappings and drownings',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Appears as a wild-haired woman lurking near swamps, replacing babies with changelings.',
      },
      {
        title: 'Origins & Evolution',
        content: 'A personification of dangerous marshlands and childbirth fears.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Iron needles in cradles prevented her meddling. She avoids fire, bells, and church grounds.',
      },
    ],
  },
  {
    id: 'fl-42',
    name: 'El Silbón Whistler',
    description: 'A Venezuelan ghost whose whistle foretells death',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Appears as a tall skeletal figure carrying a sack of bones. His whistling pattern ascends and descends unnervingly.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Born from the tale of a patricidal son cursed to wander forever.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'If his whistle sounds close, he’s far away. If it sounds distant, he’s right behind you.',
      },
    ],
  },
  {
    id: 'fl-43',
    name: 'Encantado Dolphin Shifter',
    description: 'A shapeshifting river dolphin from Amazonian folklore that seduces humans',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Encantados become handsome humans at festivals, often wearing hats to hide their blowholes.',
      },
      {
        title: 'Origins & Evolution',
        content: 'River dolphins’ intelligence and eerie humanlike whistles helped build the legend.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Victims fall ill or vanish into the river. Musicians are said to be especially vulnerable.',
      },
    ],
  },
  {
    id: 'fl-44',
    name: 'Eyes-in-Grass Spirit',
    description: 'A low-lying entity whose glowing eyes peer from tall grass at night',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Stories appear in Africa, Australia, and the Americas, describing a flat entity moving silently at ankle height.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Possibly inspired by nocturnal predators or optical afterimages in dim light.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Stepping on its “body” brings illness or bad luck. Whispered songs keep it at bay.',
      },
    ],
  },
  {
    id: 'fl-45',
    name: 'Field Walker',
    description: 'A tall, thin entity seen at dusk striding through open fields',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Field Walkers appear in rural stories as pale giants moving across farmland with impossible smoothness.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Likely evolved from scarecrow myths and fears of solitary travel.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Approaching one causes disorientation. They never deviate from their path, as if following ancient routes.',
      },
    ],
  },
  {
    id: 'fl-46',
    name: 'Firebird Slavic Phoenix',
    description: 'A radiant bird whose feathers glow like living flame',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Across Russia and Eastern Europe, the Firebird appears as a shimmering phoenix that brings both fortune and calamity.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Rooted in solar cults and Indo-European myths of divine birds bearing light or prophecy.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'A single feather grants luck but attracts dangerous quests as rulers demand the bird be captured.',
      },
    ],
  },
  {
    id: 'fl-47',
    name: 'Frost Eater',
    description: 'A chilling creature said to devour the warmth of living beings',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Northern tales describe it as a pale, skeletal spirit that drains heat from homes or travelers.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Likely tied to real winter deaths explained through supernatural storytelling.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Hearth fires and iron charms drive it away. Sudden cold spots signal its presence.',
      },
    ],
  },
  {
    id: 'fl-48',
    name: 'Frost Hag North',
    description: 'A winter witch who rides Arctic winds and freezes wanderers',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Appears as an elderly crone covered in rime, her breath forming deadly ice storms.',
      },
      {
        title: 'Origins & Evolution',
        content: 'A personification of deadly winter, similar to the Celtic Cailleach.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'She tests travelers’ humility; those who show arrogance freeze where they stand.',
      },
    ],
  },
  {
    id: 'fl-49',
    name: 'Gashadokuro Giant Skeleton',
    description: 'A massive skeletal spirit formed from unburied dead',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Japanese legends describe Gashadokuro as skeletons towering over treetops, wandering at night in search of prey.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Born from mass deaths due to famine or war, the spirits merge into a giant composite being.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Its approach is silent until the victim hears ringing in the ears—a sign it is too late.',
      },
    ],
  },
  {
    id: 'fl-50',
    name: 'Genie Djinn',
    description: 'A variant name for Djinn—spirits of smokeless fire in Middle Eastern lore',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Genies may grant wishes but often twist them with ironic outcomes.',
      },
      {
        title: 'Origins & Evolution',
        content: 'European translations of Islamic lore popularized the “genie in a lamp” image.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'They live long lives, form tribes, and interact with humans unpredictably.',
      },
    ],
  },
  {
    id: 'fl-51',
    name: 'Ghoul Flesh Eater',
    description: 'Undead beings that feast on corpses or living flesh',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Arabic folklore describes ghouls as desert-dwelling shapeshifters mimicking travelers to ambush them.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Misinterpretations of grave robbery, starvation, or scavenging animals may have contributed.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Ghouls fear iron and recite backwards prayers. They are often linked to haunted burial grounds.',
      },
    ],
  },
  {
    id: 'fl-52',
    name: 'Gorgon Medusa',
    description: 'A serpent-haired woman whose gaze can turn victims to stone',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Greek myths depict three Gorgons, with Medusa being the only mortal and most iconic.',
      },
      {
        title: 'Origins & Evolution',
        content: 'May represent ancient priestess orders, demonized over time into monstrous figures.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Her severed head was used as a protective symbol against evil—the Gorgoneion.',
      },
    ],
  },
  {
    id: 'fl-53',
    name: 'Green Children Woolpit',
    description: 'Two mysterious green-skinned children who appeared in medieval England',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'The children spoke an unknown language and claimed to be from a sunless land.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Interpretations range from legend to displaced immigrants to supernatural beings.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'The girl eventually integrated into society while the boy died soon after arrival.',
      },
    ],
  },
  {
    id: 'fl-54',
    name: 'Grim Reaper Death',
    description: 'The personification of death, often appearing as a cloaked skeleton with a scythe',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Appears worldwide in different forms—Azrael in Islam, Yama in Hinduism, Santa Muerte in Mexico.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Popularized during the Black Death when skeletal imagery became common.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'He escorts souls to the afterlife, though not always maliciously.',
      },
    ],
  },
  {
    id: 'fl-55',
    name: 'Gwrach-y-Rhibyn Hag',
    description: 'A Welsh death spirit known as the “Hag of the Mist”',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Appears as a gaunt woman with long black hair and leathery wings, shrieking outside homes.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Related to banshee and other Celtic wailing spirits.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Her cries herald death in the family she calls out by name.',
      },
    ],
  },
  {
    id: 'fl-56',
    name: 'Hag of the Dribble',
    description: 'A frightening hag spirit said to haunt dripping caves and wells',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'She emerges at night, dripping water and slime, dragging victims into subterranean tunnels.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Likely arose from cave dangers and water-associated ghost myths.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Her presence is marked by constant dripping sounds that never stop, even in dryness.',
      },
    ],
  },
  {
    id: 'fl-57',
    name: 'Headless Horseman',
    description: 'A spectral rider who hunts the living while carrying his own severed head',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Variants appear across Europe and America, symbolizing unfinished vengeance or battlefield death.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Washington Irving popularized the American version in “The Legend of Sleepy Hollow.”',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'He haunts crossroads and battlefields, seeking his lost head or collecting new ones.',
      },
    ],
  },
  {
    id: 'fl-58',
    name: 'Hellhounds',
    description: 'Supernatural dogs associated with death, omens, and the underworld',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Examples include Cerberus, Garmr, Black Dogs, and spectral hunting packs.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Guardians of the dead in Indo-European mythologies and symbols of liminal boundaries.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Glowing eyes, sulfur smell, and scorched footprints mark their presence.',
      },
    ],
  },
  {
    id: 'fl-59',
    name: 'Hinderwell Rider',
    description: 'A ghostly horseman who appears along North Yorkshire cliffs',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Said to chase trespassers or protect hidden treasure buried near ancient landmarks.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Possibly derived from smugglers’ tales mixed with coastal ghost lore.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'A distant gallop is heard before his spectral steed emerges from the fog.',
      },
    ],
  },
  {
    id: 'fl-60',
    name: 'Hircocervus Hybrid',
    description: 'A mythical creature with traits of a goat and a deer',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Appears in medieval texts as a philosophical paradox creature.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Likely created to illustrate the concept of impossible hybrids.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Represents contradiction or magical duality in nature.',
      },
    ],
  },
  {
    id: 'fl-61',
    name: 'Hollow Shepherd',
    description: 'A faceless, hollow-bodied figure seen wandering foggy fields at dawn',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Stories describe a tall shepherd with a straw hat whose chest is completely hollow.',
      },
      {
        title: 'Origins & Evolution',
        content: 'May stem from scarecrow symbolism and agricultural ghost traditions.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Following him leads travelers into bogs or across thresholds into fairy realms.',
      },
    ],
  },
  {
    id: 'fl-62',
    name: 'Hopi Ant People',
    description: 'Benevolent subterranean beings who aid humanity during cataclysms',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Hopi myths say the Ant People sheltered the tribe underground during past world destructions.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Possibly inspired by ancient memories of cave refuge or symbolic teachings of humility.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'They will return during future earth changes to guide those who listen.',
      },
    ],
  },
  {
    id: 'fl-63',
    name: 'Horned Serpent',
    description: 'A powerful water serpent with antlers or horns found in Native American lore',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Appears across Eastern Woodlands tribes as a guardian, adversary, or storm spirit.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Represents rivers, power, and transformation; often opposed by heroic thunder beings.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Encountering one brings visions or death. Its scales grant protection or healing.',
      },
    ],
  },
  {
    id: 'fl-64',
    name: 'Ifrit Fire Jinn',
    description: 'A powerful and fearsome class of fire-based Djinn',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Ifrits are enormous, winged beings of smokeless fire known for strength and cunning.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Featured in Middle Eastern folklore and Islamic texts as rebellious spirits.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'They rarely interact with humans except through pacts, curses, or vengeance.',
      },
    ],
  },
  {
    id: 'fl-65',
    name: 'Ijiraq Shape Shifter',
    description: 'An Inuit shapeshifter that abducts travelers and hides them in the wilds',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Ijiraq switch between human and animal forms, often appearing distorted or shadowlike.',
      },
      {
        title: 'Origins & Evolution',
        content: 'May be based on survival stories of disorientation and missing hunters in Arctic regions.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'They hide victims in liminal spaces only visible through peripheral vision or dream states.',
      },
    ],
  },
  {
    id: 'fl-66',
    name: 'Jötunn Frost Giants',
    description: 'Primordial giant beings of ice and chaos from Norse myth',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'In Norse mythology, the Jötnar are powerful giants living in Jötunheimr, often associated with frost, mountains, and wild nature.',
      },
      {
        title: 'Origins & Evolution',
        content: 'They descend from Ymir, the primeval giant whose body formed the world, embodying forces older than the gods themselves.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Though enemies of the Aesir, they intermarry with gods. During Ragnarök, frost giants march against the divine order.',
      },
    ],
  },
  {
    id: 'fl-67',
    name: 'Kappa Water Imp',
    description: 'A mischievous, dangerous water spirit from Japanese folklore',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Kappa are turtle-like humanoids with a water-filled bowl on their heads, dwelling in rivers and ponds.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Likely grew from river safety tales warning children away from deep or fast-moving water.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'They love cucumbers and politeness—bowing makes them spill the water in their head-dish, weakening them.',
      },
    ],
  },
  {
    id: 'fl-68',
    name: 'Kelpie Water Horse',
    description: 'A shape-shifting water spirit that lures riders to drowning',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Scottish Kelpies appear as beautiful horses or humans near rivers and lochs, especially at dusk.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Likely born from the dangers of fast rivers, floods, and deep black lochs in rural Scotland.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Victims stick to the creature’s hide and are dragged underwater. A bridle or silver bit can sometimes control it.',
      },
    ],
  },
  {
    id: 'fl-69',
    name: 'King Stag Spirit',
    description: 'A regal horned spirit ruling over forest animals and cycles of the hunt',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Across Europe, white or golden stags mark sacred places or herald encounters with the Otherworld.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Possibly rooted in ancient horned god worship, linking sovereignty, wildlife, and renewal.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Hunters who follow the King Stag too far may vanish into fairy realms or never return from the woods.',
      },
    ],
  },
  {
    id: 'fl-70',
    name: 'Kirin Mythical Beast',
    description: 'A gentle, auspicious chimera-like creature from East Asian tradition',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'In Chinese and Japanese lore, the Qilin/Kirin is a hooved, dragon-like being that appears during the reign of wise rulers.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Sometimes likened to a unicorn, it symbolizes justice, prosperity, and cosmic harmony.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'The Kirin walks so lightly it does not crush grass or insects, and its presence is a sign of heaven’s favor.',
      },
    ],
  },
  {
    id: 'fl-71',
    name: 'Kitsune Fox Possession',
    description: 'Shape-shifting fox spirits known for trickery and spirit possession',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Japanese Kitsune can be benevolent or malicious, serving deities like Inari or acting as independent tricksters.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Foxes’ intelligence and nocturnal behavior fed beliefs in their magic and ability to assume human form.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Fox possession explains sudden personality changes; exorcisms require prayer, offerings, and negotiation with the spirit.',
      },
    ],
  },
  {
    id: 'fl-72',
    name: 'Knockers Mine Spirits',
    description: 'Small underground spirits said to knock on mine walls as omens',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Cornish miners believed Knockers warned of tunnels about to collapse—or led them to rich veins of ore.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Probably evolved from older Celtic earth spirits and miners’ superstition in dangerous conditions.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Miners left scraps of food as offerings; ignoring the Knockers’ warnings invited disaster.',
      },
    ],
  },
  {
    id: 'fl-73',
    name: 'Krampus Christmas Demon',
    description: 'A horned, demonic figure who punishes misbehaving children in midwinter',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'In Alpine regions, Krampus accompanies Saint Nicholas, carrying chains, birch rods, and a basket for abducting children.',
      },
      {
        title: 'Origins & Evolution',
        content: 'May derive from pre-Christian horned fertility or wilderness spirits adapted into Christian morality tales.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Krampusnacht parades keep the legend alive as costumed figures roam streets rattling chains and bells.',
      },
    ],
  },
  {
    id: 'fl-74',
    name: 'Kuchisake-onna Slit-Mouthed Woman',
    description: 'A modern Japanese urban legend of a vengeful, mutilated woman',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'She wears a mask and asks, “Am I pretty?” before revealing a mouth slit to her ears.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Spread widely in the 1970s and 1980s, blending ghost story, moral warning, and schoolyard rumor.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Trick answers or offering candy may distract her; otherwise she mirrors her wound onto the victim.',
      },
    ],
  },
  {
    id: 'fl-75',
    name: 'La Llorona Weeping Woman',
    description: 'A mourning spirit said to wander waterways crying for her lost children',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'In Latin American lore, La Llorona drowned her children in despair and now searches rivers endlessly.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Blends colonial legends, indigenous beliefs, and social warnings about neglect and violence.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Children are warned not to play near water at night, or La Llorona may mistake them for her own.',
      },
    ],
  },
  {
    id: 'fl-76',
    name: 'Lady in White',
    description: 'An archetypal ghostly woman in white associated with grief and betrayal',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Found globally—haunting roadsides, bridges, and hotels as a symbol of tragic romance or murder.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Likely emerged from countless local tragedies stitched into a shared archetype.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'She may warn travelers of danger, seek rides from motorists, or vanish at the place of her death.',
      },
    ],
  },
  {
    id: 'fl-77',
    name: 'Lamassu Winged Bull',
    description: 'A protective hybrid deity with human head, bull or lion body, and wings',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Assyrian and Babylonian art places Lamassu at city gates and palace entrances as guardians.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Represents royal authority and divine protection, blending man, beast, and bird.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Their gaze wards off evil spirits; the carved beings are thought to remain spiritually active.',
      },
    ],
  },
  {
    id: 'fl-78',
    name: 'Lantern Men',
    description: 'Ghostly lights that lure travelers into marshes and fens',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'English and European fenlands tell of Lantern Men or Will-o’-the-Wisps dancing over bogs.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Likely linked to marsh gas ignition and optical illusions in misty conditions.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Following the lights leads to drowning; turning your coat inside out or swearing at them breaks the spell.',
      },
    ],
  },
  {
    id: 'fl-79',
    name: 'Leprechaun Little People',
    description: 'Mischievous shoemakers of Irish lore, guarding hidden gold',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Small, solitary fairies fond of drink, pipes, and pranks, not the rainbow mascots of pop culture.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Possibly related to older household or craft spirits that became commercialized in modern times.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Capturing one may win three wishes or a pot of gold—but they are expert escape artists and liars.',
      },
    ],
  },
  {
    id: 'fl-80',
    name: 'Leshy Forest Spirit',
    description: 'A Slavic guardian of forests who can change size and shape',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Leshy appears as a green-bearded man, tree-high or man-sized, sometimes with horns or hooves.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Represents the personified will of wild woods and their dangers to outsiders.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'He leads travelers astray but can befriend respectful hunters. Leaving bread and tobacco calms him.',
      },
    ],
  },
  {
    id: 'fl-81',
    name: 'Lich Undead Sorcerer',
    description: 'A powerful magician who extends life by becoming undead',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Though popularized by fantasy games, liches echo older European fears of necromantic nobles and sorcerers.',
      },
      {
        title: 'Origins & Evolution',
        content: 'The term “lich” originally meant corpse; later fiction turned it into a specific undead archetype.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Their soul is hidden in a phylactery or distant object—destroying it is the only way to end them.',
      },
    ],
  },
  {
    id: 'fl-82',
    name: 'Manticore Man-Eater',
    description: 'A Persian man-eating monster with lion body, human face, and lethal tail',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Manticores appear in Persian, Greek, and medieval bestiaries as elite apex predators of the mythic world.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Possibly inspired by exaggerated accounts of tigers or other big cats filtered through travelers’ tales.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Some versions shoot spines from their tail; others simply devour victims whole, leaving no trace.',
      },
    ],
  },
  {
    id: 'fl-83',
    name: 'Mantahungal Horned Beast',
    description: 'A lesser-known horned creature from regional lore, associated with deep forests',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Described as a shaggy, bull-sized beast with branching horns and glowing eyes.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Likely a compression of big-game encounters, amplified by fear and oral storytelling.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Appearing at the edge of campfires, it is seen as a test of courage—running marks you as prey.',
      },
    ],
  },
  {
    id: 'fl-84',
    name: 'Melon Heads Big Heads',
    description: 'Small humanoids with oversized, misshapen heads said to haunt rural roads',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Ohio, Michigan, and Connecticut legends describe Melon Heads living in woods, attacking travelers.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Stories often reference escaped asylum patients, unethical experiments, or inbred clans.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'They throw rocks at cars, stalk lovers’ lanes, and vanish into culverts and drainage tunnels.',
      },
    ],
  },
  {
    id: 'fl-85',
    name: 'Menehune Hawaiian People',
    description: 'Small, secretive craftspeople said to build structures overnight in Hawaii',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Menehune are expert builders and fishpond-makers, working at night and avoiding human contact.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Some think they represent early, displaced inhabitants remembered as a “little people” race.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'If observed at work, they abandon the project. Many ancient fishponds and temples are credited to them.',
      },
    ],
  },
  {
    id: 'fl-86',
    name: 'Monopods One-Legged',
    description: 'Mythical one-legged beings with giant feet used as shade',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Greek and medieval accounts describe Monopods hopping swiftly on one leg and using their enormous foot as a sunshade.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Likely inspired by traveler exaggerations or symbolic depictions of distant people.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Said to be shy but fast, vanishing into forests before travelers could approach.',
      },
    ],
  },
  {
    id: 'fl-87',
    name: 'Moon-eyed People',
    description: 'Pale, nocturnal humanoids said to inhabit ancient America',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Cherokee legends describe them as small, light-skinned beings with large eyes who could not tolerate sunlight.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Possibly cultural memory of early inhabitants or encounters exaggerated into myth.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Said to emerge only at night and flee when confronted, leaving behind mysterious stone structures.',
      },
    ],
  },
  {
    id: 'fl-88',
    name: 'Naree Pons Fairy Plants',
    description: 'Alleged mummified plant-fairy hybrids from Thai lore',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Tiny humanoid forms that supposedly grow from lotus plants, resembling miniature maidens.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Likely hoaxes or plant roots shaped into figures, though folklore frames them as forest spirits.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Said to bring luck in fertility and prosperity when kept reverently.',
      },
    ],
  },
  {
    id: 'fl-89',
    name: 'Native American Skinwalkers',
    description: 'Witches capable of transforming into animals or monstrous forms',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Navajo yee naaldlooshii are practitioners of dark rites who assume animal shapes through ritual garments.',
      },
      {
        title: 'Origins & Evolution',
        content: 'The legend stems from taboos surrounding witchcraft, transgression, and misuse of sacred knowledge.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Skinwalkers can mimic voices, run unnaturally fast, and are nearly impervious to bullets without ceremonial countermeasures.',
      },
    ],
  },
  {
    id: 'fl-90',
    name: 'Nightmarchers Hawaiian Ghosts',
    description: 'Phantom warrior processions that march across Hawaii at night',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Seen carrying torches, beating drums, and chanting—ancient warriors crossing old paths.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Believed to be spirits reenacting their final marches or guarding sacred sites.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Witnesses must lie face-down; looking at Nightmarchers may bring death unless protected by lineage.',
      },
    ],
  },
  {
    id: 'fl-91',
    name: 'Nisse House Spirit',
    description: 'A Scandinavian household guardian known for helping—or sabotaging—families',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Small, bearded helpers who care for farms but react harshly to disrespect.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Descends from ancestral spirits tied to land and family property.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Leaving porridge with butter pleases the Nisse; forgetting invites pranks or disaster.',
      },
    ],
  },
  {
    id: 'fl-92',
    name: 'Nuckelavee Skinless Centaur',
    description: 'A terrifying Scottish sea demon with exposed muscles and toxic breath',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Half horse, half man fused grotesquely with no skin, dripping foul fluids and spreading blight.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Possibly born from fears of disease, famine, and sea storms personified as an unstoppable horror.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Fresh water repels it; crossing a stream is said to be the only escape from its pursuit.',
      },
    ],
  },
  {
    id: 'fl-93',
    name: 'Nunnehi Spirits',
    description: 'Friendly Cherokee spirit people who assist lost travelers or warriors in need',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Appearing as tall, glowing humans, they dwell in mountain caverns and sacred places.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Often linked to ancestral spirits or parallel-world beings that coexist unseen.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'They guide the lost and heal the wounded; but approaching their homes without permission is forbidden.',
      },
    ],
  },
  {
    id: 'fl-94',
    name: 'Nymphs Nature Spirits',
    description: 'Beautiful elemental beings tied to trees, rivers, and mountains',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Greek nymphs include dryads (trees), naiads (water), oreads (mountains), and more.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Nymphs personify natural forces and were part of everyday religious life in ancient Greece.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'They can bless, seduce, inspire madness, or punish disrespect toward nature.',
      },
    ],
  },
  {
    id: 'fl-95',
    name: 'Oni Demon Ogre',
    description: 'A fearsome Japanese demon known for brute strength and cruelty',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Oni appear as horned giants with clubs, representing punishment and chaos.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Influenced by Buddhism, folk spirits, and imported demon imagery across centuries.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Setsubun rituals drive Oni away with beans—symbolically expelling misfortune.',
      },
    ],
  },
  {
    id: 'fl-96',
    name: 'Orc Mythical Beast',
    description: 'A bestial humanoid warrior featured in various mythic and modern traditions',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Early references depict Orcs as monstrous sea beings; modern fantasy shaped their brutish warrior archetype.',
      },
      {
        title: 'Origins & Evolution',
        content: 'The word may derive from Latin “orcus,” meaning underworld or demon.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Associated with violence and chaos, often embodying the destructive side of humanity.',
      },
    ],
  },
  {
    id: 'fl-97',
    name: 'Pallid Man',
    description: 'A ghostly, elongated humanoid with blank features seen in nightmares and folklore',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'A modern folkloric entity representing dread, illness, or unseen predation.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Likely emerges from sleep paralysis and liminal humanoid archetypes.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Witnesses describe him watching silently from doorways before vanishing.',
      },
    ],
  },
  {
    id: 'fl-98',
    name: 'Peryton Shadow Stag',
    description: 'A winged stag whose shadow appears human rather than animal',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Described in medieval bestiaries as an omen of death or battle.',
      },
      {
        title: 'Origins & Evolution',
        content: 'May originate in mistranslated or embellished travel tales from Spain or North Africa.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'The creature’s shadow shifts from human to stag after feeding—a sign of its cursed nature.',
      },
    ],
  },
  {
    id: 'fl-99',
    name: 'Pishacha Flesh-Eater',
    description: 'A demonic entity in Hindu lore associated with madness and death',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Pishachas are ghoulish, dark beings haunting cremation grounds and feasting on carrion.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Their mythology blends fears of disease, possession, and nocturnal predators.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Rituals, fire, and mantras repel them, preserving sanity and health.',
      },
    ],
  },
  {
    id: 'fl-100',
    name: 'Pixies Fairy Folk',
    description: 'Mischievous but charming fairy beings from Southwest England',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Pixies dance in circles, ride horses, and lead travelers astray with laughter.',
      },
      {
        title: 'Origins & Evolution',
        content: 'May derive from Celtic spirits or ancient peoples mythologized after displacement.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Wearing garments inside out breaks pixie enchantment and frees the lost.',
      },
    ],
  },
  {
    id: 'fl-101',
    name: 'Pooka Shape Shifter',
    description: 'A chaotic Irish shapeshifter that appears as animals or monstrous forms',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'The Pooka appears as a horse, goat, dog, or human-like creature with glowing eyes.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Represents wild, unpredictable forces of nature.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'It offers dangerous midnight rides; refusing politely is the safest option.',
      },
    ],
  },
  {
    id: 'fl-102',
    name: 'Púca Trickster',
    description: 'A mischievous fairy relative of the Pooka known for pranks and transformations',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Appears as animals with jet-black fur and golden eyes, delighting in startling travelers.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Shares roots with other Celtic trickster beings tied to liminality.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Offerings of bread and cream keep the Púca from causing mischief on farms.',
      },
    ],
  },
  {
    id: 'fl-103',
    name: 'Puckwudgie Dwarf Trickster',
    description: 'Small, magical beings from Wampanoag lore known for pranks and dangerous magic',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Sometimes helpful, sometimes deadly—they shoot poison arrows and can turn invisible.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Possibly rooted in ancient spirits of the land before colonial reinterpretations.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Avoiding their territory is wise; angering them leads to misfortune or madness.',
      },
    ],
  },
  {
    id: 'fl-104',
    name: 'Qalupalik Inuit Siren',
    description: 'A green, clawed humanoid that lures children toward icy waters',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Said to hum haunting melodies beneath ice, wearing an amauti to carry stolen children.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Likely arose to warn children away from thin ice and treacherous shores.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Children who stray too close are taken and transformed into beings like the Qalupalik.',
      },
    ],
  },
  {
    id: 'fl-105',
    name: 'Qiqirn Fear Dog',
    description: 'A large, hairless Arctic dog spirit feared for causing seizures or terror',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'In Inuit lore, the Qiqirn is a nervous, skittish creature whose presence induces convulsions.',
      },
      {
        title: 'Origins & Evolution',
        content: 'May represent fears of wild dogs, disease, or shamanic visions.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Shamans alone can control or calm the Qiqirn, whose fearfulness mirrors those who behold it.',
      },
    ],
  },
  {
    id: 'fl-106',
    name: 'Rakshasa Demon',
    description: 'Shape-shifting demons from Hindu lore known for deception and sorcery',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Rakshasas appear as fierce humanoids with fangs, claws, and illusory powers. They can disguise themselves to trick humans.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Ancient Sanskrit epics depict them as enemies of heroes, though some Rakshasas practice asceticism and gain great power.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'They feed on flesh, manipulate dreams, and cast illusions. Ritual purity and mantras repel their influence.',
      },
    ],
  },
  {
    id: 'fl-107',
    name: 'Raijū Thunder Beast',
    description: 'A lightning-born creature in Japanese folklore associated with storms and thunder gods',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Raijū may appear as a wolf, dog, weasel, or cat made of lightning. It leaps from cloud to cloud during storms.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Linked to Raijin, the thunder god. Explanations may stem from ball lightning or storm-related animal behavior.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Raijū sometimes nests in sleeping humans’ bellies; thunderclaps are said to be Raijin trying to retrieve it.',
      },
    ],
  },
  {
    id: 'fl-108',
    name: 'Raven Mocker Witch',
    description: 'A Cherokee witch that steals the lives of the dying while imitating raven cries',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Raven Mockers transform into birds or invisible spirits that torment the dying.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Represents fear of predatory sorcery and unexplained wasting illness.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Only powerful medicine men can see or fight Raven Mockers, who gain years of life from each victim.',
      },
    ],
  },
  {
    id: 'fl-109',
    name: 'Red Dancer Jaipur',
    description: 'A mysterious spectral figure seen dancing in red garments in Rajasthan legends',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Described as a woman in crimson veils appearing at crossroads, performing silent, hypnotic dances.',
      },
      {
        title: 'Origins & Evolution',
        content: 'May arise from ghost lore around performers, courtesans, or tragic historical figures.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Watching her dance is said to bring madness or vanish the witness into another realm.',
      },
    ],
  },
  {
    id: 'fl-110',
    name: 'Red Eyed Creatures',
    description: 'Humanoid or animal spirits marked by glowing red eyes across global folklore',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Seen in forests, abandoned buildings, or dream states — often silent and watching.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Interpreted as ghosts, demons, or shape-shifters depending on regional beliefs.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Red eyes symbolize danger, spiritual imbalance, or entities crossing from the other side.',
      },
    ],
  },
  {
    id: 'fl-111',
    name: 'Red-Faced Smith',
    description: 'A mysterious folkloric figure who appears as a soot-stained or burning-faced wanderer',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Depicted as a traveling smith with a glowing or embers-like face.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Possibly tied to blacksmith myths, fire spirits, or the dangerous power of iron.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Meeting him is either a blessing or curse — he may forge miracles or doom.',
      },
    ],
  },
  {
    id: 'fl-112',
    name: 'Rougarou Swamp Werewolf',
    description: 'A Cajun werewolf legend haunting Louisiana’s swamps and bayous',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Appears as a wolf-headed man stalking those who break Lent or community rules.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Blends French loup-garou lore with Cajun and Creole traditions.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Victims become Rougarou if they bleed; secrecy is required for breaking the curse.',
      },
    ],
  },
  {
    id: 'fl-113',
    name: 'Rusalka Water Spirit',
    description: 'A Slavic spirit of drowned women who lure men near rivers and lakes',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Rusalki appear as pale maidens with long hair, sometimes green or waterlogged.',
      },
      {
        title: 'Origins & Evolution',
        content: 'May derive from tragic drownings, fertility rites, or river guardians.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'They sing or dance to lure victims; appeasing them requires ritual offerings.',
      },
    ],
  },
  {
    id: 'fl-114',
    name: 'Santa Compaña Death Procession',
    description: 'A spectral procession of souls wandering through Galicia at night',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Torch-bearing spirits walk silently, led by a living person under a curse.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Likely rooted in medieval European ghost procession beliefs.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Crossing paths brings misfortune unless the living person can pass on the curse.',
      },
    ],
  },
  {
    id: 'fl-115',
    name: 'Scary Mary Mirror',
    description: 'A reflection-based entity that appears in haunted mirror rituals',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Similar to Bloody Mary but associated with silent, staring apparitions in glass.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Likely emerges from optical illusions and ritual-focused ghost lore.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Witnesses report the mirror figure stepping closer each time they blink.',
      },
    ],
  },
  {
    id: 'fl-116',
    name: 'Sea Bride Brittany',
    description: 'A ghostly bride said to wander French coasts calling sailors to the sea',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Appears soaked in wedding attire, her veil drifting like sea foam.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Likely based on drowned brides or lost fiancés awaiting their return.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Hearing her cries foretells storms or shipwrecks.',
      },
    ],
  },
  {
    id: 'fl-117',
    name: 'Sea Monks',
    description: 'Monstrous humanoid sea creatures resembling monks or robed figures',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Early sailors described creatures with tonsured “heads” and flowing “robes.”',
      },
      {
        title: 'Origins & Evolution',
        content: 'Possibly giant rays, unusual fish, or misinterpreted carcasses.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Seen as omens of war or plague by medieval chroniclers.',
      },
    ],
  },
  {
    id: 'fl-118',
    name: 'Selkie Seal Shifters',
    description: 'Shape-shifting seal beings who become human by shedding their skins',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Found in Scottish, Irish, and Faroese lore — often tragic romances.',
      },
      {
        title: 'Origins & Evolution',
        content: 'May reflect outsider marriages, sea dangers, or seal-human symbolism.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Whoever steals a selkie’s skin controls them; returning it sets them free.',
      },
    ],
  },
  {
    id: 'fl-119',
    name: 'Shen Chinese Dragon People',
    description: 'Mythical beings who can shift between human and dragon forms',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Shen embody wisdom, protection, rain, and cosmic balance.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Connected to ancient dragon cults and imperial mythologies.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Contact with Shen can bestow visions or profound insight.',
      },
    ],
  },
  {
    id: 'fl-120',
    name: 'Siren Head',
    description: 'A modern horror entity with towering height and sirens for a head',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Depicted as a thin, skeletal giant emitting distorted siren calls.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Originated online but now integrated into modern folklore and urban legend cycles.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Its calls mimic emergency signals or familiar voices to lure victims.',
      },
    ],
  },
  {
    id: 'fl-121',
    name: 'Siren Song',
    description: 'The irresistible, dangerous music of sirens across global mythology',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Greek sirens sang sailors to their doom; later tales frame them as mermaids.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Symbolizes temptation, illusion, and fatal beauty.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Wax in the ears or binding oneself prevents succumbing to the song.',
      },
    ],
  },
  {
    id: 'fl-122',
    name: 'Skinwalkers Navajo Witches',
    description: 'Malevolent shapeshifting witches distinct from the broader Skinwalker lore',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Skinwalkers wear animal skins to assume supernatural forms.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Deeply tied to cultural taboos and misuse of healing practices.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Mentioning them openly is avoided; only ceremonies can counteract their power.',
      },
    ],
  },
  {
    id: 'fl-123',
    name: 'Slenderman Modern Tulpa',
    description: 'A faceless humanoid entity born from internet lore but treated as a modern myth',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Depicted as a tall, thin figure with blank features and extending limbs.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Created in 2009 but absorbed into global mythology as a digital-age boogeyman.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Some interpret Slenderman as a tulpa — a thoughtform gaining power through belief.',
      },
    ],
  },
  {
    id: 'fl-124',
    name: 'Smiling Man Encounters',
    description: 'Reports of an unnaturally grinning humanoid approaching people at night',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Appears in alleys, roadsides, or cities — walking oddly, smiling impossibly wide.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Likely connected to liminal horror archetypes and uncanny valley fear responses.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Witnesses describe profound dread, paralysis, or missing time.',
      },
    ],
  },
  {
    id: 'fl-125',
    name: 'Strigoi Vampire',
    description: 'Romanian undead spirits believed to rise from graves and torment the living',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Strigoi can become invisible, shapeshift, or drain vitality from victims.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Influenced by Slavic vampire lore and burial superstitions.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Rites include removing the heart or burning the body to stop a Strigoi.',
      },
    ],
  },
  {
    id: 'fl-126',
    name: 'Succubus Demon',
    description: 'A seductive female demon that drains vitality from sleeping victims',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'In medieval lore, succubi seduce men in dreams; some traditions pair them with incubi, male counterparts.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Likely derived from sleep paralysis, erotic dreams, and demonological texts.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Prolonged encounters weaken the victim, causing illness or obsession.',
      },
    ],
  },
  {
    id: 'fl-127',
    name: 'Sylphs Air Spirits',
    description: 'Elemental beings associated with wind, sky, and inspiration',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Paracelsus popularized sylphs as invisible humanoids ruling the air element.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Blend of classical air nymphs, angels, and alchemical philosophy.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Said to inspire poets, influence weather, and whisper intuitive knowledge.',
      },
    ],
  },
  {
    id: 'fl-128',
    name: 'Taniwha Maori Guardian',
    description: 'Powerful water or land guardians that protect—or punish—communities in Maori lore',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Taniwha can be dragon-like, serpent-like, or whale-like beings tied to rivers, caves, or seas.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Associated with tribal ancestry and sacred geography.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Communities honor taniwha for protection, but disrespect can bring floods or storms.',
      },
    ],
  },
  {
    id: 'fl-129',
    name: 'Tar Man Zombie',
    description: 'A sludge-covered undead figure associated with swamps or cursed burial grounds',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Appears as a dripping black humanoid emerging from muck, moaning for life force.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Likely influenced by bog bodies, tar pits, and revenant lore.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Sighting a Tar Man foretells sickness, loss, or the return of forgotten sins.',
      },
    ],
  },
  {
    id: 'fl-130',
    name: 'Teke Teke Railway Ghost',
    description: 'A Japanese vengeful spirit of a girl severed in a railway accident',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'She drags her upper body along the ground, making a scraping “teke-teke” sound.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Modern urban legend tied to railway danger and ghostly vengeance stories.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'She chases victims with unnatural speed and can appear when her name is spoken.',
      },
    ],
  },
  {
    id: 'fl-131',
    name: 'Tengu Bird Demon',
    description: 'A Japanese supernatural being with avian or red-faced humanoid form',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Tengu range from trickster bird spirits to warrior monk-like demons with long noses.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Influenced by mountain spirits, Shinto kami, and imported demon elements.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Tengu test human arrogance and may teach martial arts to worthy individuals.',
      },
    ],
  },
  {
    id: 'fl-132',
    name: 'Throat Collector',
    description: 'A mysterious being that steals voices or breath from travelers at night',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Appears as a shadow figure or pale humanoid leaning over sleeping victims.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Likely tied to sleep paralysis and nocturnal suffocation myths.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Victims awaken voiceless or unable to breathe; charms of iron or salt repel it.',
      },
    ],
  },
  {
    id: 'fl-133',
    name: 'Tzitzimitl Star Demon',
    description: 'Fearsome skeletal star demons from Aztec mythology that devour humans during eclipses',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Tzitzimitl appear as gigantic skeletal women descending from the heavens.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Symbolize cosmic danger and the uncertainty of celestial cycles.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'People hid indoors during eclipses to avoid their wrath.',
      },
    ],
  },
  {
    id: 'fl-134',
    name: 'Umibōzu Sea Monk',
    description: 'A ghostly sea spirit that rises from calm waters to capsize ships in Japanese lore',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Appears as a bald, monk-like giant emerging silently at sea.',
      },
      {
        title: 'Origins & Evolution',
        content: 'May reflect drowned monks, giant sea creatures, or rogue waves mythologized.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Sailors give it a barrel without a bottom to confuse it long enough to escape.',
      },
    ],
  },
  {
    id: 'fl-135',
    name: 'Undead General',
    description: 'A revenant warlord commanding spectral armies long after death',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Seen in Slavic, Chinese, and medieval European tales of ghostly commanders.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Represents unresolved warfare, dishonored burials, or cursed leadership.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Sua army appears on foggy nights; breaking the curse requires returning stolen relics.',
      },
    ],
  },
  {
    id: 'fl-136',
    name: 'Undines Water Spirits',
    description: 'Elemental beings of streams, lakes, and waterfalls tied to emotion and intuition',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Appear as translucent maiden-like spirits or flowing, liquid forms.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Medieval alchemy categorized undines as water elementals.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'They bless purity but punish betrayal; marrying a human grants them a soul.',
      },
    ],
  },
  {
    id: 'fl-137',
    name: 'Unicorn Sightings',
    description: 'Reports and legends of horned, horse-like creatures symbolizing purity and magic',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Unicorns appear in European, Persian, Chinese, and Indian mythology.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Possible roots include rhinoceroses, oryx, and misinterpreted fossils.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Their horns purify water and detect poison; only the pure-hearted may approach.',
      },
    ],
  },
  {
    id: 'fl-138',
    name: 'Veles Slavic God',
    description: 'A Slavic god of the underworld, earth, magic, and trickery',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Depicted as a serpent, bear, or bearded wanderer challenging the sky god Perun.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Represents cycles of chaos, death, and rebirth.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Storms mark the cosmic battle between Veles and Perun each year.',
      },
    ],
  },
  {
    id: 'fl-139',
    name: 'Vetala Revenant Spirit',
    description: 'A malevolent Hindu revenant that possesses corpses and manipulates the living',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Vetala inhabit dead bodies, contorting them and speaking through them.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Likely influenced by cremation-ground spirit worship and early ghost lore.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'They predict the future, reveal secrets, and torment those who approach burial grounds.',
      },
    ],
  },
  {
    id: 'fl-140',
    name: 'Wampus Cat Werecat',
    description: 'A fierce cat-like creature of Cherokee legend, sometimes a cursed woman-warrior',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Appears as a cougar-like cryptid or a half-human werecat.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Linked to both shapeshifting lore and real large-cat encounters.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Said to stalk hunters and protect sacred woods from intruders.',
      },
    ],
  },
  {
    id: 'fl-141',
    name: 'Wandjina Cloud Beings',
    description: 'Australian Aboriginal sky spirits associated with rain, clouds, and creation',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Depicted in ancient rock art as mouthless, haloed beings with large eyes.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Central figures in Dreamtime stories tied to land stewardship.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Wandjina control weather and watch over the land; disturbing their images brings storms.',
      },
    ],
  },
  {
    id: 'fl-142',
    name: 'White Eyed Children',
    description: 'Paranormal children with unnervingly blank white eyes',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Seen wandering roadsides, forests, or abandoned homes, asking to be let inside.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Likely modern variations of changeling and ghost-child myths.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Encounters bring dread and illness; refusing them is essential for safety.',
      },
    ],
  },
  {
    id: 'fl-143',
    name: 'White Lady Ghost',
    description: 'A global archetype of a mourning, wandering female spirit in white garments',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Found in European, Latin American, and Asian ghost lore.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Represents grief, betrayal, or tragic death — often tied to bodies of water.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Seeing one foretells death, heartbreak, or unresolved ancestral trauma.',
      },
    ],
  },
  {
    id: 'fl-144',
    name: 'Wild Hunt Spectral',
    description: 'A ghostly procession of hunters or warriors traversing the night sky',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Led by Odin, Herne, or other mythic figures depending on region.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Linked to storms, winter omens, and ancestral spirits.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Witnesses risk being swept into the Hunt or cursed with misfortune.',
      },
    ],
  },
  {
    id: 'fl-145',
    name: 'Winged Humanoids',
    description: 'Mysterious human-like beings with wings seen in global folklore and modern sightings',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Includes angels, harpies, gargoyles, and modern winged cryptids.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Possibly derived from bird-gods, omens, or symbolic messengers.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Often perceived as warnings, guardians, or intermediaries between realms.',
      },
    ],
  },
  {
    id: 'fl-146',
    name: 'Wolfsegen Werewolf Charm',
    description: 'A magical charm or spell used in European folklore to repel or control werewolves',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Wolfsegen could be prayers, amulets, or carved symbols meant to ward off wolf-spirits.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Common in medieval Germanic regions where wolf fears mixed with witchcraft beliefs.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'A properly blessed Wolfsegen prevented wolf attacks and broke lycanthropic curses.',
      },
    ],
  },
  {
    id: 'fl-147',
    name: 'Woman in Black Ghost',
    description: 'A spectral woman dressed in black seen as an omen of death or sorrow',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Appears in European, American, and Latin ghost traditions as a mourning figure.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Likely stems from funeral attire symbolism and tragedies involving widows or mothers.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Sightings precede tragedy or signal unresolved grief in a place.',
      },
    ],
  },
  {
    id: 'fl-148',
    name: 'Woman of Ashes',
    description: 'A ghostly figure composed of drifting ash and soot, haunting burned places',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Described as a silent, ash-shedding woman appearing at the sites of old fires.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Possibly tied to historical fires, cremation ghostlore, or volcanic myths.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Those who breathe her ash may see visions of past tragedies.',
      },
    ],
  },
  {
    id: 'fl-149',
    name: 'Xenoglossy Unknown Languages',
    description: 'Phenomenon where individuals speak languages they never learned, framed in folklore as possession or spirit influence',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Appears in spirit mediumship, possession accounts, and miracle stories.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Debated by psychologists, theologians, and paranormal researchers alike.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Said to be proof of divine intervention or demonic manipulation.',
      },
    ],
  },
  {
    id: 'fl-150',
    name: 'Xenu Scientology',
    description: 'A controversial extraterrestrial figure from Scientology mythology involving ancient cosmic events',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Though modern, Xenu has taken on folkloric structure with mythic narrative cycles.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Introduced in mid-20th century religious literature and expanded through cultural retellings.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Stories frame Xenu as a cosmic tyrant whose actions shaped human spiritual struggle.',
      },
    ],
  },
  {
    id: 'fl-151',
    name: 'Yakub Giant Creator',
    description: 'A mythic scientist said to have engineered giant or altered humans on a distant island',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Emerges in Afrocentric and modern myth cycles where Yakub alters human forms.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Likely evolved from metaphorical stories about identity, oppression, and transformation.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Portrayed as both a wise creator and a dangerous manipulator of life.',
      },
    ],
  },
  {
    id: 'fl-152',
    name: 'Yara-ma-yha-who Vampire',
    description: 'A small, red, frog-like creature from Australian lore that drains blood with suckers on its fingers',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Hides in fig trees waiting for victims to rest beneath its branches.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Stories warn children away from wandering alone in the bush.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Victims grow shorter with each encounter until they become Yara-ma-yha-who themselves.',
      },
    ],
  },
  {
    id: 'fl-153',
    name: 'Yōkai Japanese Spirits',
    description: 'A diverse class of Japanese supernatural beings ranging from playful to terrifying',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Includes kappa, tengu, kitsune, and countless others across regions.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Rooted in Shinto, Buddhist, and animistic traditions blended with storytelling art.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Yōkai appear at boundaries — dusk, crossroads, abandoned roads — testing or tricking humans.',
      },
    ],
  },
  {
    id: 'fl-154',
    name: 'Yuki-onna Snow Woman',
    description: 'A ghostly, beautiful woman who appears in snowstorms to lead victims to icy deaths',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Appears pale, ethereal, and cold to the touch, gliding without footprints.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Embodies winter’s danger and the isolation of mountain snows.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'She may spare those she pities, but traditional warnings urge travelers never to speak to her.',
      },
    ],
  },
  {
    id: 'fl-155',
    name: 'Zombie Undead',
    description: 'Reanimated corpses or mindless undead beings found in global folklore and modern mythos',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Haitian zombies are created through magic; modern zombies stem from viral or apocalyptic reinterpretations.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Rooted in Haitian Vodou, colonial fears, and later horror fiction.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Traditional zombies lacked free will; modern zombies represent societal collapse and contagion.',
      },
    ],
  },
  {
    id: 'fl-156',
    name: 'Ziz Giant Bird',
    description: 'A colossal bird from Jewish mythology said to be large enough to block out the sun',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Companion to the Behemoth and Leviathan in mythic triads.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Symbolizes cosmic scale, divine wonders, and protective forces.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Its eggs could shatter mountains, and its wings guard the righteous.',
      },
    ],
  },
  {
    id: 'fl-157',
    name: 'Shadow Dwellers',
    description: 'Humanoid shadows believed to move independently and observe humans from dark corners',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Global accounts describe shadow-like entities watching silently at night.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Tied to sleep paralysis, liminal fears, and ghostly archetypes.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Seeing one may indicate psychic sensitivity or personal haunting.',
      },
    ],
  },
  {
    id: 'fl-158',
    name: 'Shadow Eaters',
    description: 'Paranormal beings said to consume a person’s shadow, weakening their life force',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Stories appear in African, Caribbean, and Asian shadow-lore traditions.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Shadows symbolize the soul; consuming them represents spiritual theft.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Victims become listless and sickly; rituals restore the stolen shadow.',
      },
    ],
  },
  {
    id: 'fl-159',
    name: 'Shadow Hounds',
    description: 'Black spectral dogs associated with crossroads, graveyards, and omens of death',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Related to Black Shuck, Barghest, and other European hellhound myths.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Likely arose from fear of wolves, stray dogs, and liminal spaces.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Red or glowing eyes signal imminent danger or spiritual intrusion.',
      },
    ],
  },
  {
    id: 'fl-160',
    name: 'Shadow Men',
    description: 'Dark humanoid figures glimpsed in peripheral vision or haunting night hours',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Seen worldwide as silent watchers or oppressive nighttime visitors.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Connected to hypnagogia, trauma, or supernatural interpretations.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Some see them as interdimensional beings or thoughtforms fed by fear.',
      },
    ],
  },
  {
    id: 'fl-161',
    name: 'Shadow Stalker',
    description: 'A malevolent entity that follows individuals silently over long periods',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Described as a tall shadow that trails a person but never fully appears.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Perhaps a narrative for chronic anxiety or spiritual attachment.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Breaking its attention requires cleansing rituals or altering life patterns.',
      },
    ],
  },
  {
    id: 'fl-162',
    name: 'Shadow Woman',
    description: 'A dark, feminine silhouette associated with sorrow, seduction, or warning',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Appears silently at bedsides or in mirrors before disappearing.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Possibly tied to bereavement spirits, succubus lore, or guardian archetypes.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Witnesses report dread but also sometimes comfort, depending on the encounter.',
      },
    ],
  },
  {
    id: 'fl-163',
    name: 'Shadow Wolves',
    description: 'Spectral wolf-like beings said to travel between realms at dusk and dawn',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Stories arise in Arctic, European, and Indigenous American traditions.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Represent transitions, twilight, and the liminal veil.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Their howl is believed to warn travelers of shifting spiritual boundaries.',
      },
    ],
  },
  {
    id: 'fl-164',
    name: 'Shapeshifting Spirits',
    description: 'Beings capable of taking multiple forms, often tricking or testing humans',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Includes fox spirits, were-creatures, river maidens, and trickster gods.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Reflect human fears and desires about identity and change.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Encounters test honesty, humility, or respect for nature.',
      },
    ],
  },
  {
    id: 'fl-165',
    name: 'Shen Spirits Variant',
    description: 'Additional manifestations of Shen-like divine or semi-divine beings in Chinese lore',
    categoryId: 'folklore',
    icon: '🧚',
    sections: [
      {
        title: 'Cultural Variations',
        content: 'Shen appear as protectors, messengers, or embodiments of natural forces.',
      },
      {
        title: 'Origins & Evolution',
        content: 'Evolution of ancient spirit classes and Taoist mystical traditions.',
      },
      {
        title: 'Folklore & Beliefs',
        content: 'Offerings invite their blessing; disrespect invites storms or misfortune.',
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

/**
 * Get all folklore topics
 * @returns Array of all folklore topics
 */
export const getAllFolklore = (): readonly FolkloreTopic[] => {
  return folkloreData;
};

/**
 * Get count of folklore topics
 * @returns Total number of folklore topics
 */
export const getFolkloreCount = (): number => {
  return folkloreData.length;
};
