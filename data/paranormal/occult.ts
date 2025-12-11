// data/paranormal/occult.ts
/**
 * Occult Category Data
 * Esoteric practices, ceremonial magic, and mystical traditions
 * 
 * Includes: Alchemy, Necronomicon, Aleister Crowley, Ouija Board, Voodoo Practices
 */

import { categoryColors } from '@/constants/Colors';
import type { TopicSection, CategoryId } from './types';

export interface OccultTopic {
  id: string;
  name: string;
  description: string;
  categoryId: CategoryId;
  icon: string;
  sections: TopicSection[];
}

export const occultData: readonly OccultTopic[] = [
  {
    id: 'oc-1',
    name: 'Alchemy',
    description: 'The ancient practice of transmutation and spiritual transformation',
    categoryId: 'occult',
    icon: '⚗️',
    sections: [
      {
        title: 'Practices & Methods',
        content: 'Alchemy combines chemistry, metallurgy, and mysticism. Practitioners sought to transmute base metals into gold and create the Philosopher\'s Stone. The Great Work involved purification through stages: nigredo (blackening), albedo (whitening), citrinitas (yellowing), and rubedo (reddening).',
      },
      {
        title: 'Symbols & Meanings',
        content: 'Alchemical symbols represent elements, planets, and processes. The Ouroboros (snake eating its tail) symbolizes eternal cycles. The union of opposites is represented by the marriage of Sol (sun/gold) and Luna (moon/silver). Hermetic principles guide the work.',
      },
      {
        title: 'Historical Significance',
        content: 'Famous alchemists include Hermes Trismegistus, Nicolas Flamel, and Paracelsus. Alchemy influenced the development of modern chemistry. Isaac Newton devoted more time to alchemy than physics. The practice spread from ancient Egypt through medieval Europe.',
      },
    ],
  },
  {
    id: 'oc-2',
    name: 'The Necronomicon',
    description: 'The legendary grimoire of forbidden knowledge',
    categoryId: 'occult',
    icon: '📖',
    sections: [
      {
        title: 'Practices & Methods',
        content: 'Created by H.P. Lovecraft for his fiction, the Necronomicon allegedly contains rituals to summon ancient entities. Despite being fictional, several "real" versions have been published. The book supposedly drives readers insane with forbidden knowledge.',
      },
      {
        title: 'Symbols & Meanings',
        content: 'Associated with the Cthulhu Mythos and Elder Gods. The book\'s author, the "Mad Arab" Abdul Alhazred, allegedly learned dark secrets in the Empty Quarter. Symbols include the Elder Sign for protection and various sigils for summoning.',
      },
      {
        title: 'Historical Significance',
        content: 'While fictional, the Necronomicon has influenced occult culture significantly. Multiple authors have created "real" versions, blending Lovecraft\'s fiction with actual occult practices. It represents the archetype of forbidden knowledge in popular culture.',
      },
    ],
  },
  {
    id: 'oc-3',
    name: 'Aleister Crowley',
    description: 'The infamous occultist and ceremonial magician',
    categoryId: 'occult',
    icon: '🎩',
    sections: [
      {
        title: 'Practices & Methods',
        content: 'Crowley developed Thelema, a spiritual philosophy based on "Do what thou wilt shall be the whole of the Law." He practiced ceremonial magic, sex magic, and drug-induced mystical experiences. His rituals combined elements from various traditions including Kabbalah and Eastern mysticism.',
      },
      {
        title: 'Symbols & Meanings',
        content: 'The unicursal hexagram became Thelema\'s primary symbol. Crowley called himself "The Great Beast 666" and "Perdurabo." His Book of the Law, allegedly channeled from the entity Aiwass, forms Thelema\'s foundation. The number 93 represents Thelema and Agape (love).',
      },
      {
        title: 'Historical Significance',
        content: 'Crowley (1875-1947) was a member of the Hermetic Order of the Golden Dawn before founding his own orders. He influenced modern occultism, Wicca, and popular culture. Despite controversy, he\'s considered one of the most influential occultists of the 20th century.',
      },
    ],
  },
  {
    id: 'oc-4',
    name: 'The Ouija Board',
    description: 'The controversial spirit communication device',
    categoryId: 'occult',
    icon: '🔤',
    sections: [
      {
        title: 'Practices & Methods',
        content: 'Users place fingers on a planchette that moves across a board marked with letters, numbers, and "yes/no." Participants ask questions, and the planchette allegedly moves to spell out answers from spirits. Sessions typically involve multiple participants in a darkened room.',
      },
      {
        title: 'Symbols & Meanings',
        content: 'The board features the alphabet, numbers 0-9, "YES," "NO," and "GOODBYE." The sun and moon symbols represent positive and negative forces. The planchette\'s heart shape with a window allows users to see letters. The name combines French "oui" and German "ja" (both meaning "yes").',
      },
      {
        title: 'Historical Significance',
        content: 'Patented in 1891 as a parlor game, the Ouija board became associated with spiritualism. Psychologists attribute its function to the ideomotor effect (unconscious muscle movements). Despite scientific explanations, many believe it genuinely contacts spirits.',
      },
    ],
  },
  {
    id: 'oc-5',
    name: 'Voodoo Practices',
    description: 'The misunderstood spiritual tradition',
    categoryId: 'occult',
    icon: '🗿',
    sections: [
      {
        title: 'Practices & Methods',
        content: 'Vodou (proper spelling) combines West African Vodun with Catholicism. Practitioners honor loa (spirits) through ceremonies involving drumming, dancing, and possession. Rituals include offerings, prayers, and the creation of veves (symbolic drawings). Contrary to stereotypes, it\'s primarily a healing tradition.',
      },
      {
        title: 'Symbols & Meanings',
        content: 'Each loa has specific veves, colors, and offerings. Papa Legba guards the crossroads between worlds. Erzulie represents love and beauty. Baron Samedi rules the dead. Voodoo dolls, popularized by Hollywood, are rarely used in actual practice.',
      },
      {
        title: 'Historical Significance',
        content: 'Vodou originated in West Africa and evolved in Haiti during slavery. It played a role in the Haitian Revolution. The religion has been demonized by colonizers and popular media. Today, it\'s practiced by millions in Haiti, Louisiana, and worldwide.',
      },
    ],
  },
	  {
    id: 'oc-6',
    name: '99942 Apophis',
    description: 'A real near-Earth asteroid woven into modern apocalyptic and occult narratives',
    categoryId: 'occult',
    icon: '🔮',
    sections: [
      {
        title: 'Overview',
        content: '99942 Apophis is a real asteroid that briefly sparked fears of a catastrophic Earth impact in the 21st century. Occult and esoteric circles quickly adopted it as a symbol of endings, judgment, and destructive transformation.',
      },
      {
        title: 'Occult Associations',
        content: 'Named after the Egyptian serpent of chaos, Apophis became linked to ideas of world-ages ending, timeline resets, and karmic reckoning. Some modern practitioners treat it as an archetype of cosmic course correction rather than literal doom.',
      },
      {
        title: 'Cultural Impact',
        content: 'While astronomers significantly reduced the impact risk, the panic left a mark on internet-era prophecy lore. Apophis is now a recurring motif in doomsday timelines, YouTube prophecies, and numerological speculation.',
      },
    ],
  },
  {
    id: 'oc-7',
    name: 'Abramelin Operation',
    description: 'A legendary months-long ritual to contact the “Holy Guardian Angel”',
    categoryId: 'occult',
    icon: '📜',
    sections: [
      {
        title: 'Overview',
        content: 'The Abramelin Operation comes from the 15th-century Book of Abramelin, describing an intensive retreat meant to establish conscious contact with one’s Holy Guardian Angel—a higher spiritual guide or true self.',
      },
      {
        title: 'Structure & Demands',
        content: 'Traditional versions describe months of strict discipline, prayer, purification, and isolation. Only after that phase does the magician confront and symbolically bind disruptive or “demonic” forces.',
      },
      {
        title: 'Modern Reception',
        content: 'Modern occultists often treat the work symbolically or adapt it into safer, shorter meditative practices. Even within esoteric circles, attempting a literal Abramelin working is considered extreme and rarely recommended.',
      },
    ],
  },
  {
    id: 'oc-8',
    name: 'Alchemy Transmutation',
    description: 'The philosophical and symbolic side of turning base matter into gold',
    categoryId: 'occult',
    icon: '⚗️',
    sections: [
      {
        title: 'Overview',
        content: 'Transmutation in alchemy is not just about metal; it represents the refinement of the self. Lead-to-gold symbolism mirrors the journey from ignorance to wisdom, heaviness to illumination.',
      },
      {
        title: 'Inner vs Outer Work',
        content: 'Some alchemists focused on laboratory experiments, while others emphasized inner transformation—burning away ego, clarifying intention, and integrating shadow aspects as part of the “Great Work.”',
      },
      {
        title: 'Legacy in Modern Occultism',
        content: 'Modern esoteric traditions often speak of “psychological alchemy,” using the language of transmutation for trauma healing, shadow work, and spiritual growth rather than literal metalworking.',
      },
    ],
  },
  {
    id: 'oc-9',
    name: 'Aghori Sect',
    description: 'A radical ascetic tradition often mythologized as occult and terrifying',
    categoryId: 'occult',
    icon: '🕉️',
    sections: [
      {
        title: 'Overview',
        content: 'The Aghori are a small Hindu sect associated with cremation grounds, skull imagery, and ritual transgression. Popular media exaggerates them into horror-movie figures, blurring the line between reality and legend.',
      },
      {
        title: 'Philosophical Core',
        content: 'At the heart of Aghori practice is the idea that the divine pervades everything, including what society calls impure. Symbolic contact with death and taboo substances is meant to dismantle fear and ego—not to perform “black magic.”',
      },
      {
        title: 'Misconceptions & Ethics',
        content: 'Sensational stories often overshadow the nuanced, disciplined side of the tradition. Most modern discussions treat lurid claims with skepticism and stress that real Aghori practice is not a playground for thrill-seeking or harm.',
      },
    ],
  },
  {
    id: 'oc-10',
    name: 'Angelic Armor Rituals',
    description: 'Visualizations and prayers framing divine protection as radiant armor',
    categoryId: 'occult',
    icon: '🕊️',
    sections: [
      {
        title: 'Overview',
        content: 'Angelic armor concepts appear in Christian mysticism, ceremonial magic, and modern energy-work traditions. Practitioners imagine being clothed in light, shields, or armor associated with protective angels.',
      },
      {
        title: 'Symbolism',
        content: 'The “armor” symbolizes courage, moral clarity, and spiritual protection rather than literal battle. Pieces like helmets, breastplates, and shields represent guarded thoughts, emotions, and boundaries.',
      },
      {
        title: 'Modern Use',
        content: 'Many people adapt angelic armor imagery into simple meditations or prayers for safety, grounding, and resilience—far removed from complex ritual manuals.',
      },
    ],
  },
  {
    id: 'oc-11',
    name: 'Angelic Evocation Rites',
    description: 'Ceremonial systems aimed at contacting benevolent spiritual intelligences',
    categoryId: 'occult',
    icon: '👼',
    sections: [
      {
        title: 'Overview',
        content: 'From the Key of Solomon to Enochian magic, angelic evocation describes formal attempts to communicate with high spiritual beings for wisdom, guidance, or protection.',
      },
      {
        title: 'Ritual Framework',
        content: 'Traditional systems involve consecrated tools, sacred names, fasting, and intensive preparation. The focus is ideally on ethical intent, humility, and respect rather than command-and-control fantasies.',
      },
      {
        title: 'Cautions & Interpretation',
        content: 'Even within occult circles, such rites are considered advanced and psychologically intense. Many modern practitioners prefer simple prayer, contemplation, or journaling to explore “angelic” archetypes in a grounded way.',
      },
    ],
  },
  {
    id: 'oc-12',
    name: 'Ash Circle Invocation',
    description: 'The use of ashes as a symbolic boundary in folk and ritual magic',
    categoryId: 'occult',
    icon: '🌀',
    sections: [
      {
        title: 'Overview',
        content: 'In various folk traditions, circles of ash are used as symbolic barriers—marking a liminal space between ordinary life and the spirit realm, or setting a boundary of protection.',
      },
      {
        title: 'Symbolic Meaning',
        content: 'Ash represents what has survived the fire: memory, consequence, and transformation. Drawing a circle of ash can signify leaving the past outside and stepping into a purified inner chamber.',
      },
      {
        title: 'Folkloric Uses',
        content: 'Legends mention ash circles protecting sleepers from malevolent spirits or keeping fairy beings at bay. These stories emphasize respect for boundaries and the unseen rather than detailed ritual instructions.',
      },
    ],
  },
  {
    id: 'oc-13',
    name: 'Azazel Fallen Angel',
    description: 'A contentious figure at the crossroads of myth, scripture, and demonology',
    categoryId: 'occult',
    icon: '⚡',
    sections: [
      {
        title: 'Overview',
        content: 'Azazel appears in ancient Hebrew texts associated with the wilderness and scapegoat rituals, later evolving in apocrypha and demonology as a rebel angel or teacher of forbidden arts.',
      },
      {
        title: 'Occult Interpretations',
        content: 'Some esoteric systems portray Azazel as an archetype of exiled knowledge, shadow aspects, or the drive to break oppressive structures. Others frame the figure purely as dangerous and best avoided.',
      },
      {
        title: 'Cultural Influence',
        content: 'Azazel shows up in grimoires, modern fantasy, and heavy metal lyrics, symbolizing rebellion, exile, and the weight of unintegrated guilt.',
      },
    ],
  },
  {
    id: 'oc-14',
    name: 'Baal Demon',
    description: 'A once-revered deity rebranded as a demon in later traditions',
    categoryId: 'occult',
    icon: '🜏',
    sections: [
      {
        title: 'Overview',
        content: '“Baal” originally meant “lord” and referred to various ancient Near Eastern deities. Over time, rival religions demonized Baal, turning the name into a title for powerful infernal beings.',
      },
      {
        title: 'In Grimoires',
        content: 'Renaissance demonological texts list Bael/Baal as a high-ranking spirit commanding legions. Descriptions range from toad-like forms to multi-headed kings, rich with symbolic imagery.',
      },
      {
        title: 'Mythic Reframing',
        content: 'Modern scholarship treats Baal as a window into how gods of one culture can become devils of another, revealing more about human conflict than literal spiritual hierarchies.',
      },
    ],
  },
  {
    id: 'oc-15',
    name: 'Black Door Spell',
    description: 'A symbolic motif for thresholds to forbidden or hidden knowledge',
    categoryId: 'occult',
    icon: '🚪',
    sections: [
      {
        title: 'Overview',
        content: 'The “black door” appears in occult fiction, ritual symbolism, and meditation narratives as an entrance to taboo information or repressed parts of the psyche.',
      },
      {
        title: 'Psychological Lens',
        content: 'Crossing a dark threshold can represent confronting trauma, shadow material, or truths we have avoided. The danger is often more emotional than supernatural.',
      },
      {
        title: 'Narrative Role',
        content: 'Stories warn that opening every door just because it exists is unwise. The black door archetype emphasizes discernment: not all knowledge is helpful, and timing matters.',
      },
    ],
  },
  {
    id: 'oc-16',
    name: 'Black Pullet Grimoire',
    description: 'An 18th-century French text of talismans, wealth charms, and magical lore',
    categoryId: 'occult',
    icon: '📚',
    sections: [
      {
        title: 'Overview',
        content: 'Le Dragon Noir and Le Poulet Noir (“The Black Pullet”) are part of a family of French grimoires promising riches, protection, and esoteric knowledge through symbolic talismans.',
      },
      {
        title: 'Content & Style',
        content: 'The Black Pullet mixes pseudo-Eastern stories about a Napoleonic officer with diagrams of magical rings and seals, blending Orientalist fantasy with European occultism.',
      },
      {
        title: 'Legacy',
        content: 'Modern collectors treat it as a curiosity—less a practical manual, more a snapshot of how 18th-19th century Europeans fantasized about hidden Eastern wisdom and instant wealth.',
      },
    ],
  },
  {
    id: 'oc-17',
    name: 'Blood Moon Hex Rites',
    description: 'Folklore tying eclipses and red moons to heightened curse energy',
    categoryId: 'occult',
    icon: '🌕',
    sections: [
      {
        title: 'Overview',
        content: 'Across cultures, eclipses and reddish “blood moons” have been seen as ominous omens. In some folk magic, they are treated as moments when baneful workings are symbolically amplified.',
      },
      {
        title: 'Symbolism',
        content: 'The reddened moon evokes spilled blood, imbalance, and crisis—fertile ground for stories about heightened danger or spiritual backlash for malicious acts.',
      },
      {
        title: 'Ethical Framing',
        content: 'Modern practitioners who emphasize ethics often flip the script, focusing lunar eclipses on release, cleansing, and breaking harmful patterns instead of casting harm.',
      },
    ],
  },
  {
    id: 'oc-18',
    name: 'Blood Quenching Rituals',
    description: 'Dark folklore about “feeding” spirits or curses with symbolic lifeforce',
    categoryId: 'occult',
    icon: '🩸',
    sections: [
      {
        title: 'Overview',
        content: 'Legends describe rituals where blood—animal or otherwise—is offered to entities or used to “strengthen” spells. These tales typically underline how far desperation or obsession can push people.',
      },
      {
        title: 'Myth & Warning',
        content: 'Stories almost always end badly: bindings backfire, hauntings worsen, or the practitioner is consumed by guilt or paranoia. The moral is usually that trading harm for power comes with a brutal price.',
      },
      {
        title: 'Modern Perspective',
        content: 'Most contemporary occult communities strongly discourage any harmful, coercive, or self-injuring practices, focusing instead on symbolic offerings and nonviolent forms of devotion or magic.',
      },
    ],
  },
  {
    id: 'oc-19',
    name: 'Blood Sigils',
    description: 'Charged symbols written or envisioned using the idea of lifeforce',
    categoryId: 'occult',
    icon: '🖋️',
    sections: [
      {
        title: 'Overview',
        content: 'Sigils are abstract symbols created to represent an intention. Myths and edgy fiction sometimes add blood as a dramatic “power source,” emphasizing intensity and commitment.',
      },
      {
        title: 'Symbolic Use',
        content: 'Even when treated metaphorically, blood relates to identity, lineage, and vitality. A “blood sigil” can thus be read as an intention bound deeply to the self or ancestral story.',
      },
      {
        title: 'Safety & Ethics',
        content: 'Most modern occult writing stresses that self-harm is neither necessary nor wise for effective symbolism. Visualization, ink, paint, and breath work are safer, equally meaningful routes.',
      },
    ],
  },
  {
    id: 'oc-20',
    name: 'Bone Divination Zulu',
    description: 'A traditional Southern African form of divination using bones and objects',
    categoryId: 'occult',
    icon: '🦴',
    sections: [
      {
        title: 'Overview',
        content: 'In Zulu and related traditions, trained diviners cast bones and other curated items—shells, dice, carved pieces—interpreting how they land to gain insight for clients.',
      },
      {
        title: 'Cultural Context',
        content: 'The practice is intertwined with ancestor veneration and community healing. The bones function as a language through which the living and the ancestral realm communicate.',
      },
      {
        title: 'Respectful Lens',
        content: 'For outsiders, bone divination is best understood as part of a rich, living spiritual system—not a spooky prop or gimmick. Authentic practice requires apprenticeship and cultural grounding.',
      },
    ],
  },
  {
    id: 'oc-21',
    name: 'Bottle Demon Traps',
    description: 'Folklore about imprisoning malevolent spirits in bottles or jars',
    categoryId: 'occult',
    icon: '🫙',
    sections: [
      {
        title: 'Overview',
        content: 'Stories from Europe, the Middle East, and the Americas describe witches, cunning folk, or priests trapping harmful entities inside containers sealed with symbols or wax.',
      },
      {
        title: 'Narrative Role',
        content: 'These tales often revolve around curiosity: someone opens the bottle and unleashes trouble, or the container is lost and discovered centuries later in walls or under floors.',
      },
      {
        title: 'Symbolic Meaning',
        content: 'The motif speaks to our urge to contain what we fear—and the risk of bottling up trauma or resentment instead of healing it.',
      },
    ],
  },
  {
    id: 'oc-22',
    name: 'Breath Sorcery Curses',
    description: 'Beliefs that spoken words, sighs, or whispers can carry harmful intent',
    categoryId: 'occult',
    icon: '💨',
    sections: [
      {
        title: 'Overview',
        content: 'In many cultures, breath is tied to life-force. Folklore suggests that curses spoken under the breath, or into bottles or knots, can linger and affect the target.',
      },
      {
        title: 'Voice & Intention',
        content: 'The idea that words “have power” underpins prayer, mantra, and hex stories alike. Breath magic re-emphasizes how tone, repetition, and emotion can shape psychological impact.',
      },
      {
        title: 'Modern Reframing',
        content: 'Today, similar principles are often redirected into affirmations, healing mantras, and therapeutic speech work, focusing on constructive rather than destructive intent.',
      },
    ],
  },
  {
    id: 'oc-23',
    name: 'Ceremonial Stone Stacking',
    description: 'The ritual arrangement of stones as markers, offerings, or focal points',
    categoryId: 'occult',
    icon: '🪨',
    sections: [
      {
        title: 'Overview',
        content: 'From cairns on lonely hills to labyrinths made of rocks, stacked stones are used to mark sacred sites, guide travelers, or create meditative patterns.',
      },
      {
        title: 'Spiritual Symbolism',
        content: 'Each stone can represent a burden, prayer, or ancestor. Stacks may embody patience, balance, and the layered nature of memory.',
      },
      {
        title: 'Modern Considerations',
        content: 'In some natural areas, authorities discourage random stone stacking because it disrupts habitat and confuses trail markers, so respectful practice today includes leaving wild spaces intact.',
      },
    ],
  },
  {
    id: 'oc-24',
    name: 'Cernunnos Horned God',
    description: 'A Celtic horned deity associated with nature, animals, and liminal wildness',
    categoryId: 'occult',
    icon: '🦌',
    sections: [
      {
        title: 'Overview',
        content: 'Cernunnos appears on ancient carvings as an antlered figure seated cross-legged, often holding a torc and surrounded by animals. His exact myths are fragmentary, but he is commonly linked to fertility, abundance, and the untamed forest.',
      },
      {
        title: 'Occult Revival',
        content: 'Modern pagan and occult traditions have embraced Cernunnos as an archetype of the Wild God—representing instinct, ecological connection, and the cycle of life and death.',
      },
      {
        title: 'Cultural Impact',
        content: 'The horned god motif influenced depictions of devils and satyrs in later Christian Europe, showing how older nature deities were reframed as threatening or diabolical.',
      },
    ],
  },
  {
    id: 'oc-25',
    name: 'Clay Golem Variants',
    description: 'Legends of man-shaped beings molded from earth and animated by sacred words',
    categoryId: 'occult',
    icon: '🧱',
    sections: [
      {
        title: 'Overview',
        content: 'In Jewish folklore, a golem is a figure formed from clay and brought to life to protect a community, often through divine names inscribed on its body or placed in its mouth.',
      },
      {
        title: 'Variants & Themes',
        content: 'Later stories expand the idea to straw, mud, or stone constructs. Many tales end with the golem becoming uncontrollable, exploring themes of responsibility, unintended consequences, and the limits of human authority.',
      },
      {
        title: 'Modern Echoes',
        content: 'Golems inspired countless fictional constructs—robots, androids, AI narratives—where creations designed to serve humans raise hard questions about ethics and autonomy.',
      },
    ],
  },
  {
    id: 'oc-26',
    name: 'Corpse Ointments Lore',
    description: 'Folk tales of witches using graveyard ointments for flight or second-sight',
    categoryId: 'occult',
    icon: '🧴',
    sections: [
      {
        title: 'Overview',
        content: 'European witchcraft lore describes ointments made from graveyard materials, poisonous herbs, and animal fats. These were said to induce visions, spirit-flight, or trance states.',
      },
      {
        title: 'Mythic Role',
        content: 'Such ointments symbolized the boundary between life and death. Their described effects align with hallucinogenic plants like belladonna, mandrake, and henbane.',
      },
      {
        title: 'Modern Interpretation',
        content: 'Historians view these ointments as folklore exaggerations, misremembered herbal recipes, or metaphors for altered consciousness—not literal necromantic salves.',
      },
    ],
  },
  {
    id: 'oc-27',
    name: 'Crossroads Pacts',
    description: 'The legendary practice of making deals with spirits at liminal road crossings',
    categoryId: 'occult',
    icon: '🛣️',
    sections: [
      {
        title: 'Overview',
        content: 'In many cultures, crossroads are spiritual junctions where worlds overlap. Tales describe seekers meeting spirits, demons, or trickster figures to exchange favors.',
      },
      {
        title: 'Folklore Variants',
        content: 'African-American blues lore includes meeting the “devil” at a crossroads for musical talent. European myths speak of guardians, psychopomps, or restless souls lingering there.',
      },
      {
        title: 'Symbolic Meaning',
        content: 'Crossroads represent choice, identity, and risk. Pacts reflect internal negotiation more than supernatural contracts.',
      },
    ],
  },
  {
    id: 'oc-28',
    name: 'Cursed Objects',
    description: 'Items believed to carry harmful energy, misfortune, or spiritual attachment',
    categoryId: 'occult',
    icon: '📦',
    sections: [
      {
        title: 'Overview',
        content: 'Folklore attributes curses to heirlooms, artifacts, and objects associated with tragedy. Museums, private owners, and paranormal investigators report misfortunes tied to them.',
      },
      {
        title: 'Common Themes',
        content: 'Stories emphasize emotional residue, unresolved trauma, or symbolic weight. Doll hauntings, cursed jewels, and ghost-attached furniture are recurring motifs.',
      },
      {
        title: 'Rational Interpretations',
        content: 'Psychology points to confirmation bias and fear shaping perception. Still, cursed-object stories thrive because they externalize invisible burdens.',
      },
    ],
  },
  {
    id: 'oc-29',
    name: 'Cursed Silver Coins',
    description: 'Legends of coins carrying betrayal, blood guilt, or supernatural misfortune',
    categoryId: 'occult',
    icon: '🪙',
    sections: [
      {
        title: 'Overview',
        content: 'From the “thirty pieces of silver” trope to cursed pirate treasure, stories portray silver coins as vessels of treachery or unresolved spiritual debt.',
      },
      {
        title: 'Folklore Patterns',
        content: 'Coins are said to return to their owner, burn their carrier, or draw vengeful spirits. Some legends claim cursed coins cannot be spent.',
      },
      {
        title: 'Symbolic Role',
        content: 'Silver is tied to purity and the moon, making its corruption a dramatic metaphor for moral compromise.',
      },
    ],
  },
  {
    id: 'oc-30',
    name: 'Death-Mirror Shattering',
    description: 'A folk belief that breaking a mirror during death traps the soul or invites spirits',
    categoryId: 'occult',
    icon: '🪞',
    sections: [
      {
        title: 'Overview',
        content: 'In many cultures, mirrors are covered or removed when someone dies. Breaking one during this time is considered an omen of unrest or a breach between worlds.',
      },
      {
        title: 'Symbolism',
        content: 'Mirrors represent identity, reflection, and soul. Their shattering during death amplifies fear of lost boundaries.',
      },
      {
        title: 'Modern Interpretations',
        content: 'The superstition likely arose from ritual mourning customs and psychological discomfort rather than actual necromancy.',
      },
    ],
  },
  {
    id: 'oc-31',
    name: 'Demonic Possession',
    description: 'The belief that hostile entities can influence or inhabit the human body',
    categoryId: 'occult',
    icon: '😈',
    sections: [
      {
        title: 'Overview',
        content: 'Possession narratives appear in Christianity, Islam, Judaism, and various folk traditions. Symptoms include altered voice, contortions, or knowledge the person should not have.',
      },
      {
        title: 'Cultural Framework',
        content: 'Some cultures see possession as spiritual imbalance, ancestral intervention, or psychological crisis rather than demonic control.',
      },
      {
        title: 'Modern View',
        content: 'Psychology recognizes cases often overlap with trauma or dissociative disorders—but belief in possession remains widespread.',
      },
    ],
  },
  {
    id: 'oc-32',
    name: 'Demonology Study',
    description: 'The academic and esoteric study of demons across religions and myths',
    categoryId: 'occult',
    icon: '📘',
    sections: [
      {
        title: 'Overview',
        content: 'Demonology catalogs malevolent spirits, fallen angels, and chaotic entities. It blends religious texts, folklore, and metaphysics.',
      },
      {
        title: 'Historical Roots',
        content: 'Medieval grimoires, apocrypha, and early Christian writings shaped much of Western demonology. Other cultures contribute their own classifications.',
      },
      {
        title: 'Role Today',
        content: 'Modern demonology often appears in paranormal research and comparative mythology rather than literal summoning.',
      },
    ],
  },
  {
    id: 'oc-33',
    name: 'Devil’s Trees Cursed',
    description: 'Folklore about solitary trees associated with hangings, curses, or restless spirits',
    categoryId: 'occult',
    icon: '🌳',
    sections: [
      {
        title: 'Overview',
        content: 'Certain ancient trees are said to radiate dread, kill livestock, or trap wandering spirits. Some are tied to tragic executions.',
      },
      {
        title: 'Folklore Themes',
        content: 'Lonely trees at crossroads, borders, or hills often become markers of fear stories, warnings, or forbidden rites.',
      },
      {
        title: 'Symbolic Interpretation',
        content: 'The “cursed tree” motif reflects ancestral grief, taboo, and nature’s memory of violence.',
      },
    ],
  },
  {
    id: 'oc-34',
    name: 'Dreamstone Rituals',
    description: 'Using stones or crystals for visionary dreams, guidance, or spiritual messages',
    categoryId: 'occult',
    icon: '💎',
    sections: [
      {
        title: 'Overview',
        content: 'Cultures worldwide place stones under pillows or hang them by beds to invite prophetic dreams, protection, or ancestral contact.',
      },
      {
        title: 'Symbolism',
        content: 'The stone becomes a dream-anchor, representing stillness and clarity amid the subconscious.',
      },
      {
        title: 'Modern Use',
        content: 'Today, dreamstones appear in New Age and folk practices as tools for journaling, meditation, and sleep clarity.',
      },
    ],
  },
  {
    id: 'oc-35',
    name: 'Eating Flesh Ritual',
    description: 'Disturbing folklore about consuming symbolic or literal flesh for power',
    categoryId: 'occult',
    icon: '🍖',
    sections: [
      {
        title: 'Overview',
        content: 'Stories of ritual flesh consumption appear in tribal rites, fear-based propaganda, and mythic narratives—not mainstream occult practice.',
      },
      {
        title: 'Narrative Purpose',
        content: 'These stories often demonize rival groups or explore the boundaries of taboo, mortality, and identity.',
      },
      {
        title: 'Modern Perspective',
        content: 'Researchers consider most such tales exaggerations or symbolic warnings rather than historical routine.',
      },
    ],
  },
  {
    id: 'oc-36',
    name: 'Egregors Thoughtforms',
    description: 'Collective psychic entities formed by shared focus or belief',
    categoryId: 'occult',
    icon: '🧠',
    sections: [
      {
        title: 'Overview',
        content: 'An egregor is thought to arise when a group’s sustained attention or intention creates an independent-feeling psychic pattern.',
      },
      {
        title: 'Applications',
        content: 'Occult groups treat egregors as guardians, symbols, or mythic embodiments—rarely as literal beings.',
      },
      {
        title: 'Modern Parallels',
        content: 'Internet memes, fandom identities, and viral narratives resemble secular egregors—ideas gaining emergent life.',
      },
    ],
  },
  {
    id: 'oc-37',
    name: 'Exorcism Rites',
    description: 'Ceremonial methods for expelling harmful spirits or influences',
    categoryId: 'occult',
    icon: '✝️',
    sections: [
      {
        title: 'Overview',
        content: 'Exorcism exists in Christianity, Judaism, Islam, Hinduism, and folk magic. Rites seek to restore balance between person and spirit.',
      },
      {
        title: 'Components',
        content: 'Holy texts, protective symbols, salt, and prayer are commonly used. Some traditions emphasize the healer’s emotional centeredness.',
      },
      {
        title: 'Modern Approach',
        content: 'Responsible clergy and practitioners screen for mental health issues before assuming spiritual causes.',
      },
    ],
  },
  {
    id: 'oc-38',
    name: 'Fallen Angels',
    description: 'Spirits said to have rebelled against divine order in ancient lore',
    categoryId: 'occult',
    icon: '🪽',
    sections: [
      {
        title: 'Overview',
        content: 'Texts like 1 Enoch describe angels who descended to Earth, taught forbidden arts, and produced giant offspring.',
      },
      {
        title: 'Symbolism',
        content: 'Fallen angels represent rebellion, wisdom, temptation, and the price of autonomy.',
      },
      {
        title: 'Occult Influence',
        content: 'Modern systems reinterpret them as psychological archetypes or mythic cautionary tales.',
      },
    ],
  },
  {
    id: 'oc-39',
    name: 'Fire Scrying',
    description: 'Gazing into flame to induce visions or symbolic impressions',
    categoryId: 'occult',
    icon: '🔥',
    sections: [
      {
        title: 'Overview',
        content: 'Used in ancient Greece, Persia, and medieval Europe, fire scrying invites messages through shifting flame, smoke, or shadow.',
      },
      {
        title: 'Symbolic Nature',
        content: 'Fire represents transformation, illumination, and the boundary between physical and nonphysical realms.',
      },
      {
        title: 'Modern Usage',
        content: 'Often practiced as a meditative visualization rather than literal divination.',
      },
    ],
  },
  {
    id: 'oc-40',
    name: 'Fire-and-Iron Banishing',
    description: 'Folk methods using flame and iron to repel harm or unwanted spirits',
    categoryId: 'occult',
    icon: '🪓',
    sections: [
      {
        title: 'Overview',
        content: 'Iron is widely believed to repel fae, spirits, and curse energy. Combined with controlled flame, it becomes a symbolic purifying force.',
      },
      {
        title: 'Cultural Roots',
        content: 'European, Middle Eastern, and Asian traditions use iron tools above doorways or in ritual circles for protection.',
      },
      {
        title: 'Modern Practice',
        content: 'Now interpreted mostly as metaphor for boundary-setting, grounding, and emotional cleansing.',
      },
    ],
  },
  {
    id: 'oc-41',
    name: 'Forest Gate Ceremony',
    description: 'Rites performed at thresholds between human land and the wild',
    categoryId: 'occult',
    icon: '🌲',
    sections: [
      {
        title: 'Overview',
        content: 'Folk rituals across Europe and Asia speak of leaving offerings at forest gates—paths, arches, or tree clusters marking the edge of the unknown.',
      },
      {
        title: 'Symbolism',
        content: 'The forest gate represents crossing into mystery, seeking protection from local spirits, or acknowledging nature’s sovereignty.',
      },
      {
        title: 'Story Function',
        content: 'These rites often warn against disrespect or arrogance when entering liminal spaces.',
      },
    ],
  },
  {
    id: 'oc-42',
    name: 'Golem Creation',
    description: 'Legends of animating clay or inanimate matter through sacred names',
    categoryId: 'occult',
    icon: '🧱',
    sections: [
      {
        title: 'Overview',
        content: 'Rooted in Jewish folklore, golem creation symbolizes humanity’s attempt to wield divine power for protection or justice.',
      },
      {
        title: 'Consequences',
        content: 'Tales consistently warn that creations without free will or moral agency can grow dangerous.',
      },
      {
        title: 'Modern Influence',
        content: 'Inspires stories of robots, clones, and AI ethics—modern golems built of circuits instead of clay.',
      },
    ],
  },
  {
    id: 'oc-43',
    name: 'Goetic Demons',
    description: 'Entities catalogued in the Ars Goetia, part of the Lesser Key of Solomon',
    categoryId: 'occult',
    icon: '📜',
    sections: [
      {
        title: 'Overview',
        content: 'The Ars Goetia lists 72 spirits, each with symbolic attributes, seals, and mythic roles. Most entries blend medieval imagination with older Mesopotamian and Near Eastern motifs.',
      },
      {
        title: 'Occult Role',
        content: 'Goetic demons are often reframed today as psychological forces, archetypes, or creative metaphors rather than literal beings.',
      },
      {
        title: 'Cautions',
        content: 'Even esoteric groups emphasize grounding, consent, and mental health when studying intense symbolism.',
      },
    ],
  },
  {
    id: 'oc-44',
    name: 'Grave Whispering Rituals',
    description: 'Folk tales of speaking to the dead by leaning close to burial mounds',
    categoryId: 'occult',
    icon: '🪦',
    sections: [
      {
        title: 'Overview',
        content: 'Various cultures describe whispering questions to graves at night to receive guidance, omens, or forgiveness.',
      },
      {
        title: 'Symbolism',
        content: 'The grave becomes a boundary-crossing point—a place where memory, longing, and unresolved grief speak louder.',
      },
      {
        title: 'Modern Reflection',
        content: 'Grave whispering is often viewed through a psychological lens: a ritual of closure, sorrow, and emotional release.',
      },
    ],
  },
  {
    id: 'oc-45',
    name: 'Grave-Coin Divination',
    description: 'Folk divination using coins tossed at graves for yes/no answers',
    categoryId: 'occult',
    icon: '🪙',
    sections: [
      {
        title: 'Overview',
        content: 'Coins tossed on graves were read by position, tilt, or number of flips to reveal guidance from ancestors or spirits.',
      },
      {
        title: 'Narrative Pattern',
        content: 'The dead were believed to offer warnings or blessings in symbolic form, not literal conversation.',
      },
      {
        title: 'Legacy',
        content: 'Modern variations exist in wishing wells, ancestor altars, and intuitive coin readings detached from literal necromancy.',
      },
    ],
  },
  {
    id: 'oc-46',
    name: 'Graveyard Dirt Rituals',
    description: 'The folk-magical use of cemetery soil for spells, protection, or curses',
    categoryId: 'occult',
    icon: '⚰️',
    sections: [
      {
        title: 'Overview',
        content: 'Across Hoodoo, folk magic, and European traditions, graveyard dirt acts as a symbolic link to ancestors or the dead. Its meaning changes depending on whose grave it comes from.',
      },
      {
        title: 'Cultural Variants',
        content: 'Dirt from a loved one is used for protection, while soil from criminals or unknown graves appears in cursing lore. Payment to spirits or caretakers is sometimes required.',
      },
      {
        title: 'Modern Interpretation',
        content: 'Most modern practitioners treat graveyard dirt as symbolic earth tied to memory and intention, rather than literal necromantic power.',
      },
    ],
  },
  {
    id: 'oc-47',
    name: 'Grimoires of Honorius',
    description: 'Medieval texts attributed to Pope Honorius III describing spirit rites',
    categoryId: 'occult',
    icon: '📚',
    sections: [
      {
        title: 'Overview',
        content: 'These grimoires detail angelic summoning, exorcism formulas, and ceremonial instructions. Though attributed to Honorius, historians agree they are pseudonymous.',
      },
      {
        title: 'Folklore Role',
        content: 'They became feared in Europe, believed to grant control over spirits or demons. Copies circulated secretly among ritual magicians.',
      },
      {
        title: 'Legacy',
        content: 'Today, they are studied for their influence on later ritual magic systems rather than used for literal invocation.',
      },
    ],
  },
  {
    id: 'oc-48',
    name: 'Hand of Glory',
    description: 'A desiccated hand used in European witchcraft lore to immobilize households',
    categoryId: 'occult',
    icon: '🖐️',
    sections: [
      {
        title: 'Overview',
        content: 'Made from the hand of an executed criminal, the Hand of Glory was said to freeze sleeping victims or unlock doors when lit like a candle.',
      },
      {
        title: 'Symbolic Meaning',
        content: 'It embodies fear of thieves, nighttime intrusion, and punishment. Its grotesque imagery made it a staple of witch trial confessions.',
      },
      {
        title: 'Modern Analysis',
        content: 'No evidence suggests the Hand of Glory was ever actually used—most stories arose from superstition and moral panic.',
      },
    ],
  },
  {
    id: 'oc-49',
    name: 'Hellfire Caves Hauntings',
    description: 'The ritual tunnels linked to mysterious rites of the Hellfire Club',
    categoryId: 'occult',
    icon: '🕳️',
    sections: [
      {
        title: 'Overview',
        content: 'The caves beneath West Wycombe, England were used in the 18th century for meetings of the Hellfire Club—a notorious society rumored to perform occult rites.',
      },
      {
        title: 'Legends',
        content: 'Visitors report apparitions, chanting, and oppressive dread. Some stories hint at mock rituals, while others claim true occult activity.',
      },
      {
        title: 'Historical Context',
        content: 'Most historians agree activities were more political satire than dark magic, but the legends persist.',
      },
    ],
  },
  {
    id: 'oc-50',
    name: 'Hoodoo Spells Recipes',
    description: 'Traditional African-American folk magic blending herbs, roots, and intention',
    categoryId: 'occult',
    icon: '🪴',
    sections: [
      {
        title: 'Overview',
        content: 'Hoodoo uses candles, oils, roots, and personal concerns to attract luck, love, protection, or justice. It is not a religion but a practice.',
      },
      {
        title: 'Core Components',
        content: 'Common items include John the Conqueror root, red brick dust, mojo bags, and condition oils.',
      },
      {
        title: 'Cultural Importance',
        content: 'Born from African traditions shaped by enslavement, Hoodoo remains a powerful cultural legacy.',
      },
    ],
  },
  {
    id: 'oc-51',
    name: 'Hungry Ghost Gate',
    description: 'A ritual belief involving spirits released during the Ghost Festival',
    categoryId: 'occult',
    icon: '🚪',
    sections: [
      {
        title: 'Overview',
        content: 'In East Asian tradition, the Ghost Gate opens during the seventh lunar month, allowing restless spirits to roam.',
      },
      {
        title: 'Practices',
        content: 'Food offerings, incense, and paper money are given to appease hungry ghosts and ancestors.',
      },
      {
        title: 'Symbolism',
        content: 'The rite reflects respect for the dead and fear of neglected ancestral spirits.',
      },
    ],
  },
  {
    id: 'oc-52',
    name: 'Illuminati Conspiracy',
    description: 'Beliefs about a hidden elite manipulating world events',
    categoryId: 'occult',
    icon: '🛸',
    sections: [
      {
        title: 'Overview',
        content: 'Though the historical Illuminati dissolved in the 18th century, modern conspiracy theories cast them as omnipotent puppet masters.',
      },
      {
        title: 'Occult Overlay',
        content: 'Symbols like the all-seeing eye and pyramids became associated with secret rituals, despite lacking historical grounding.',
      },
      {
        title: 'Cultural Impact',
        content: 'The Illuminati myth persists because it externalizes societal anxieties about power and invisibility.',
      },
    ],
  },
  {
    id: 'oc-53',
    name: 'Incubus Succubus',
    description: 'Male and female entities said to seduce or drain humans in their sleep',
    categoryId: 'occult',
    icon: '😈',
    sections: [
      {
        title: 'Overview',
        content: 'Medieval lore describes these beings sitting on sleepers’ chests, causing nightmares, paralysis, or exhaustion.',
      },
      {
        title: 'Interpretations',
        content: 'Many cases overlap with sleep paralysis or cultural beliefs about nocturnal visitations.',
      },
      {
        title: 'Legacy',
        content: 'They remain iconic embodiments of forbidden desire and nighttime fear.',
      },
    ],
  },
  {
    id: 'oc-54',
    name: 'Iron Nail Hexes',
    description: 'Using iron nails to bind, repel, or protect against harmful magic',
    categoryId: 'occult',
    icon: '🔩',
    sections: [
      {
        title: 'Overview',
        content: 'Hammering nails into thresholds, dolls, or cursed bags appears in European, African, and Caribbean traditions.',
      },
      {
        title: 'Symbolism',
        content: 'Iron stands for strength and finality. Nails “pin down” harmful influences.',
      },
      {
        title: 'Modern Practice',
        content: 'Many see the ritual psychologically: setting boundaries or “closing” emotional wounds.',
      },
    ],
  },
  {
    id: 'oc-55',
    name: 'Iron Wand Rituals',
    description: 'Ceremonial use of iron rods to command or repel unseen forces',
    categoryId: 'occult',
    icon: '🪄',
    sections: [
      {
        title: 'Overview',
        content: 'Iron wands appear in Nordic, Slavic, and Celtic lore as tools against fae or malevolent spirits.',
      },
      {
        title: 'Roles',
        content: 'They channel intent and represent authority in the unseen world.',
      },
      {
        title: 'Interpretation',
        content: 'Modern readers view them as symbols of personal resolve rather than literal weapons.',
      },
    ],
  },
  {
    id: 'oc-56',
    name: 'Knot of Silence Ritual',
    description: 'A binding ritual intended to prevent gossip or harmful speech',
    categoryId: 'occult',
    icon: '🪢',
    sections: [
      {
        title: 'Overview',
        content: 'Practitioners tie knots in cord or cloth while reciting intentions to silence slander or contain secrets.',
      },
      {
        title: 'Symbolism',
        content: 'The knot binds the tongue metaphorically, not physically.',
      },
      {
        title: 'Cultural Roots',
        content: 'Similar rituals appear globally, from European witchcraft to African protective charms.',
      },
    ],
  },
  {
    id: 'oc-57',
    name: 'Lucifer Fallen Angel',
    description: 'The mythic figure associated with rebellion and enlightenment',
    categoryId: 'occult',
    icon: '🔥',
    sections: [
      {
        title: 'Overview',
        content: 'Lucifer’s identity blends Hebrew scripture, Latin mistranslation, and later Christian mythology.',
      },
      {
        title: 'Symbolic Role',
        content: 'He represents pride, willpower, or the quest for forbidden knowledge depending on tradition.',
      },
      {
        title: 'Modern Context',
        content: 'Occult groups interpret Lucifer in psychological and archetypal terms, not as a literal being.',
      },
    ],
  },
  {
    id: 'oc-58',
    name: 'Lycanthropy Werewolf Curse',
    description: 'The belief that humans can transform into wolves through curse or ritual',
    categoryId: 'occult',
    icon: '🐺',
    sections: [
      {
        title: 'Overview',
        content: 'Folklore links lycanthropy to cursed objects, demonic pacts, or magical ointments.',
      },
      {
        title: 'Cultural Variants',
        content: 'European werewolves differ from African, Asian, and Native shapeshifting tales.',
      },
      {
        title: 'Modern Interpretation',
        content: 'Seen more as psychological metaphor or mythic archetype than actual occult practice.',
      },
    ],
  },
  {
    id: 'oc-59',
    name: 'Madame Blavatsky Theosophy',
    description: 'The esoteric philosophy blending Eastern mysticism and Western occultism',
    categoryId: 'occult',
    icon: '🕉️',
    sections: [
      {
        title: 'Overview',
        content: 'Blavatsky founded the Theosophical Society in 1875, teaching reincarnation, root races, and hidden masters.',
      },
      {
        title: 'Teachings',
        content: 'Her writings attempted to synthesize global mystical traditions into a unified spiritual framework.',
      },
      {
        title: 'Legacy',
        content: 'Theosophy influenced New Age movements and modern esoteric thought.',
      },
    ],
  },
  {
    id: 'oc-60',
    name: 'Mandragora Screaming Root',
    description: 'The legendary plant said to scream when uprooted',
    categoryId: 'occult',
    icon: '🪴',
    sections: [
      {
        title: 'Overview',
        content: 'Medieval lore claimed mandrakes emitted lethal shrieks when pulled from the earth.',
      },
      {
        title: 'Symbolism',
        content: 'Their human-shaped roots inspired stories of magical potency and danger.',
      },
      {
        title: 'Reality',
        content: 'Mandrake contains hallucinogenic alkaloids, fueling its mythic reputation.',
      },
    ],
  },
  {
    id: 'oc-61',
    name: 'Mirror Binding Spells',
    description: 'Rituals using mirrors to trap, reflect, or immobilize harmful spirits',
    categoryId: 'occult',
    icon: '🪞',
    sections: [
      {
        title: 'Overview',
        content: 'Practitioners place mirrors around ritual circles or face them inward to “bind” negative influences.',
      },
      {
        title: 'Symbolic Role',
        content: 'Mirrors act as portals, traps, or reflectors depending on lore.',
      },
      {
        title: 'Modern Use',
        content: 'Often reframed as psychological work around boundaries and self-reflection.',
      },
    ],
  },
  {
    id: 'oc-62',
    name: 'Mirror Shadow Summoning',
    description: 'A darker ritual involving shadows or reflections as intermediaries',
    categoryId: 'occult',
    icon: '🌑',
    sections: [
      {
        title: 'Overview',
        content: 'Tales describe practitioners calling forth “shadow doubles” from mirrors to deliver messages or reveal hidden truths.',
      },
      {
        title: 'Interpretations',
        content: 'Often a metaphor for confronting one’s hidden self or suppressed emotions.',
      },
      {
        title: 'Folklore Roots',
        content: 'European, Middle Eastern, and Asian traditions all warn against mirror rites performed at night.',
      },
    ],
  },
  {
    id: 'oc-63',
    name: 'Mock Crucifixion',
    description: 'Symbolic reenactments interpreted as extreme ritual purification',
    categoryId: 'occult',
    icon: '✝️',
    sections: [
      {
        title: 'Overview',
        content: 'Some fringe groups adopted staged crucifixions to test spiritual endurance or invoke martyr symbolism.',
      },
      {
        title: 'Purpose',
        content: 'These acts were usually symbolic rather than literal—meant to represent surrender or transformation.',
      },
      {
        title: 'Modern View',
        content: 'Considered psychologically hazardous and not representative of mainstream occultism.',
      },
    ],
  },
  {
    id: 'oc-64',
    name: 'Necromancy Raising Dead',
    description: 'Legends of summoning the dead for counsel, prophecy, or power',
    categoryId: 'occult',
    icon: '🧟',
    sections: [
      {
        title: 'Overview',
        content: 'Ancient Greeks, Hebrews, and medieval sorcerers all described rituals to consult spirits of the deceased.',
      },
      {
        title: 'Symbolism',
        content: 'Necromancy represents desire for forbidden knowledge and fear of mortality.',
      },
      {
        title: 'Modern Perspective',
        content: 'Most accounts were symbolic divination, trance work, or literary invention—not literal resurrection.',
      },
    ],
  },
  {
    id: 'oc-65',
    name: 'Necronomicon Fictional Grimoire',
    description: 'Lovecraft’s mythical book reinterpreted through occult subcultures',
    categoryId: 'occult',
    icon: '📕',
    sections: [
      {
        title: 'Overview',
        content: 'Though invented by Lovecraft, many occultists experimented with symbolic uses of its imagery.',
      },
      {
        title: 'Cultural Role',
        content: 'It represents the allure of sealed knowledge and the terror of opening the wrong door.',
      },
      {
        title: 'Legacy',
        content: 'Its influence spans horror fiction, ritual magic, and pop culture.',
      },
    ],
  },
  {
    id: 'oc-66',
    name: 'Nocebo Curse Effect',
    description: 'The belief in being cursed causing real physical and emotional symptoms',
    categoryId: 'occult',
    icon: '🩺',
    sections: [
      {
        title: 'Overview',
        content: 'The nocebo effect is the dark twin of the placebo effect: negative expectations alone can trigger real pain, anxiety, or illness-like symptoms. In occult and folk traditions, this often manifests as people believing they have been cursed.',
      },
      {
        title: 'Curses & Suggestion',
        content: 'Stories of witchcraft, evil eye, or spoken hexes can deeply influence a person’s mindset. Once someone believes they are cursed, normal bad luck and bodily sensations may be reinterpreted as proof of supernatural attack.',
      },
      {
        title: 'Modern Perspective',
        content: 'Psychologists see many “curse” cases as powerful mind–body responses amplified by fear, stress, and cultural belief. Breaking such a curse often involves reassurance, supportive rituals, or therapy rather than literal magic.',
      },
    ],
  },
  {
    id: 'oc-67',
    name: 'Ninth House Societies',
    description: 'Secretive groups rumored to blend academia, astrology, and occult study',
    categoryId: 'occult',
    icon: '🏛️',
    sections: [
      {
        title: 'Overview',
        content: 'The “Ninth House” label is applied in rumors and fiction to elite student societies said to mix classical learning with ritual magic. The name nods to astrological ninth-house themes: higher learning, philosophy, and long journeys.',
      },
      {
        title: 'Legends & Claims',
        content: 'Whispers describe candlelit libraries, hidden archives, and initiations framed as intellectual tests. Some tales depict these groups influencing campus politics or guarding dangerous arcane texts.',
      },
      {
        title: 'Reality Check',
        content: 'While real secret societies exist, concrete evidence of overtly magical Ninth House–style groups is lacking. The concept thrives mostly in novels, campus urban legends, and online speculation.',
      },
    ],
  },
  {
    id: 'oc-68',
    name: 'Numerology Occult Numbers',
    description: 'Mystical interpretations of numbers and their hidden meanings',
    categoryId: 'occult',
    icon: '🔢',
    sections: [
      {
        title: 'Overview',
        content: 'Numerology assigns symbolic meaning to numbers, names, and birth dates. Systems range from Pythagorean to Chaldean, each with its own way of reducing words to core digits.',
      },
      {
        title: 'Sacred Numbers',
        content: 'Numbers like 3, 7, 9, 11, and 13 recur in occult lore—linked to cycles, completion, initiation, or taboo. Repeating patterns (111, 333, 777) are sometimes interpreted as “angel numbers.”',
      },
      {
        title: 'Modern Use',
        content: 'Today, numerology appears in personal readings, sigil design, and magical timing. Skeptics view it as pattern-finding, while practitioners see it as a symbolic language layered onto life events.',
      },
    ],
  },
  {
    id: 'oc-69',
    name: 'Occult General',
    description: 'An umbrella term for hidden knowledge, esoteric practice, and mystery schools',
    categoryId: 'occult',
    icon: '🜁',
    sections: [
      {
        title: 'Overview',
        content: 'From the Latin occultus, meaning “hidden,” the occult covers practices and philosophies concerned with unseen forces, symbolic systems, and inner transformation.',
      },
      {
        title: 'Traditions Included',
        content: 'Astrology, alchemy, ceremonial magic, divination, Western esotericism, and many folk practices all get grouped under the “occult” banner, even when their origins differ greatly.',
      },
      {
        title: 'Modern Landscape',
        content: 'Contemporary occultism ranges from scholarly study of historical grimoires to personal spiritual experimentation. Many practitioners treat it as psychological and symbolic rather than literally supernatural.',
      },
    ],
  },
  {
    id: 'oc-70',
    name: 'Ouija Board Spirit',
    description: 'Entities said to arise from or attach to repeated Ouija board sessions',
    categoryId: 'occult',
    icon: '🔤',
    sections: [
      {
        title: 'Overview',
        content: 'Beyond the board itself, folklore speaks of “board spirits” that linger across multiple sessions—sometimes presenting as guides, sometimes as tricksters.',
      },
      {
        title: 'Patterns in Reports',
        content: 'Groups describe recurring names, personalities, or symbols that appear no matter who participates. Over time, the presence may be blamed for knocks, shadows, or unsettling dreams outside the session.',
      },
      {
        title: 'Skeptical & Occult Views',
        content: 'Skeptics point to the ideomotor effect, group dynamics, and suggestibility. Some occultists interpret board spirits as thoughtforms, subconscious fragments, or low-level entities rather than powerful demons.',
      },
    ],
  },
  {
    id: 'oc-71',
    name: 'Penitente Flagellation',
    description: 'Historical self-scourging rituals practiced for penance and devotion',
    categoryId: 'occult',
    icon: '🩸',
    sections: [
      {
        title: 'Overview',
        content: 'Certain lay brotherhoods, such as the Penitentes in the American Southwest, historically practiced self-flagellation and Passion reenactments as intense forms of Christian devotion.',
      },
      {
        title: 'Symbolic Meaning',
        content: 'The acts were framed as sharing in Christ’s suffering, seeking forgiveness, or interceding for the community. The body became a visible canvas for invisible guilt and faith.',
      },
      {
        title: 'Modern Perspective',
        content: 'Most contemporary religious and medical voices strongly discourage self-harm practices. Today this topic is approached as a historical and psychological phenomenon, not something to emulate.',
      },
    ],
  },
  {
    id: 'oc-72',
    name: 'Picatrix Grimoire',
    description: 'A medieval Arabic text on astrological magic and talismans',
    categoryId: 'occult',
    icon: '📜',
    sections: [
      {
        title: 'Overview',
        content: 'The Picatrix is a Latin translation of the Arabic Ghāyat al-Ḥakīm, a dense compendium of planetary correspondences, spirit lists, and ritual theory.',
      },
      {
        title: 'Content & Themes',
        content: 'It describes how different planets, hours, herbs, and images correspond, and how talismans were believed to harness these influences symbolically.',
      },
      {
        title: 'Legacy',
        content: 'The Picatrix influenced Renaissance mages and modern ceremonial systems. Today it is mostly studied as a historical cornerstone of astrological magic, rather than followed literally.',
      },
    ],
  },
  {
    id: 'oc-73',
    name: 'Planetary Hours Magic',
    description: 'Timing rituals according to traditional planetary rulerships of hours',
    categoryId: 'occult',
    icon: '🕰️',
    sections: [
      {
        title: 'Overview',
        content: 'In traditional magic, each day is ruled by a planet, and day and night are divided into twelve “planetary hours” cycling through the seven classical planets.',
      },
      {
        title: 'Usage in Lore',
        content: 'Love workings might be timed to Venus hours, protection to Mars or Saturn hours, and divination to Mercury or the Moon—symbolic alignment rather than proven causality.',
      },
      {
        title: 'Modern Interpretation',
        content: 'Many modern practitioners treat planetary hours as a way to ritualize intention and rhythm, not as a requirement. Skeptics see them as a structured focus tool rather than a cosmic law.',
      },
    ],
  },
  {
    id: 'oc-74',
    name: 'Planetary Talismans',
    description: 'Inscribed images meant to embody the influence of specific planets',
    categoryId: 'occult',
    icon: '💫',
    sections: [
      {
        title: 'Overview',
        content: 'Planetary talismans appear on metal plates, parchment, or jewelry, bearing sigils, seals, and symbolic images linked to a given planet’s virtues.',
      },
      {
        title: 'Symbolic Role',
        content: 'Rather than “containing” a planet, they act as visual anchors for intentions like courage (Mars), wisdom (Jupiter), or discipline (Saturn).',
      },
      {
        title: 'Contemporary Use',
        content: 'Modern occultists often adapt traditional designs for meditation, altar decor, or personal symbolism, avoiding literal claims of guaranteed results.',
      },
    ],
  },
  {
    id: 'oc-75',
    name: 'Poppet Magic Cursing',
    description: 'The use of doll-like figures as symbolic targets in folk magic',
    categoryId: 'occult',
    icon: '🧵',
    sections: [
      {
        title: 'Overview',
        content: 'In European and American folk magic, poppets are small figures made of cloth, wax, or other materials, linked symbolically to a person through names or personal items.',
      },
      {
        title: 'Cursing & Healing',
        content: 'While horror focuses on stabbing and pins, many traditions also used poppets for healing, protection, or luck—transferring positive intent to the stand-in figure.',
      },
      {
        title: 'Ethical & Psychological Angles',
        content: 'Modern practitioners often emphasize consent, harm-free workings, and the psychological impact of focusing anger into symbolic acts. Skeptics view poppets as ritualized catharsis rather than literal remote influence.',
      },
    ],
  },
  {
    id: 'oc-76',
    name: 'Possession Demonic',
    description: 'The belief that hostile entities can inhabit or influence the human body',
    categoryId: 'occult',
    icon: '😨',
    sections: [
      {
        title: 'Overview',
        content: 'Demonic possession is found in Christian, Islamic, and global traditions. Symptoms include altered voice, unusual strength, aversion to sacred objects, and perceived loss of control.',
      },
      {
        title: 'Cultural Interpretations',
        content: 'Some cultures view possession as a spiritual imbalance, ancestral visitation, or trance state rather than invasion. Western portrayals emphasize hostile takeover.',
      },
      {
        title: 'Modern Perspective',
        content: 'Most cases today involve psychological, neurological, or trauma-related explanations, though some religious groups still perform exorcisms.',
      },
    ],
  },
  {
    id: 'oc-77',
    name: 'Red Thread Warding',
    description: 'A protective folk practice using red string to repel harm or evil eye',
    categoryId: 'occult',
    icon: '🧶',
    sections: [
      {
        title: 'Overview',
        content: 'Red thread appears in Jewish, Slavic, Mediterranean, and Asian traditions as a charm against ill intentions or bad luck.',
      },
      {
        title: 'Symbolism',
        content: 'The color red symbolizes vitality and protection. Tying knots “binds” harmful influences.',
      },
      {
        title: 'Modern Use',
        content: 'Worn on wrists or door handles, it is treated as a symbolic reminder of resilience rather than a literal shield.',
      },
    ],
  },
  {
    id: 'oc-78',
    name: 'Sacred Fire Leaps',
    description: 'Ritual jumping over flames for purification and renewal',
    categoryId: 'occult',
    icon: '🔥',
    sections: [
      {
        title: 'Overview',
        content: 'In Persian, Slavic, and Celtic festivals, participants leap over sacred fires to shed misfortune and invite health.',
      },
      {
        title: 'Symbolism',
        content: 'Fire is a purifier, burning away old energy. The leap marks transition into a renewed state.',
      },
      {
        title: 'Modern Interpretation',
        content: 'Seen more as cultural celebration than occult rite, though some still treat it as symbolic cleansing.',
      },
    ],
  },
  {
    id: 'oc-79',
    name: 'Salt Circle Warding',
    description: 'Using salt to create boundaries against spirits or harmful forces',
    categoryId: 'occult',
    icon: '🧂',
    sections: [
      {
        title: 'Overview',
        content: 'Salt circles appear in European folk magic, ceremonial rituals, and pop culture as protective barriers.',
      },
      {
        title: 'Symbolic Power',
        content: 'Salt represents purity, preservation, and grounding. Circles symbolize completeness.',
      },
      {
        title: 'Modern View',
        content: 'Often used symbolically to establish emotional or psychological boundaries during ritual work.',
      },
    ],
  },
  {
    id: 'oc-80',
    name: 'Salt-and-Iron Wards',
    description: 'A combined protection method against spirits and fae',
    categoryId: 'occult',
    icon: '⛓️',
    sections: [
      {
        title: 'Overview',
        content: 'Iron repels supernatural beings, while salt purifies. Together they appear in folklore from Ireland to Japan.',
      },
      {
        title: 'Uses',
        content: 'Wards are placed at windowsills, doorways, or carried in pouches.',
      },
      {
        title: 'Contemporary Use',
        content: 'Modern practitioners treat these wards as symbolic protection tools for psychological grounding.',
      },
    ],
  },
  {
    id: 'oc-81',
    name: 'Salt-and-Smoke Purification',
    description: 'A cleansing practice combining smoke and mineral purification',
    categoryId: 'occult',
    icon: '💨',
    sections: [
      {
        title: 'Overview',
        content: 'Salt anchors energy, while smoke disperses it. Many cultures combine both in cleansing rituals.',
      },
      {
        title: 'Folk Variants',
        content: 'Herbs like sage, rosemary, and juniper are common. Salt lines protect thresholds.',
      },
      {
        title: 'Modern Interpretation',
        content: 'Used today as a mindfulness or meditative practice rather than literal energetic cleansing.',
      },
    ],
  },
  {
    id: 'oc-82',
    name: 'Sangreal Sodality',
    description: 'A rumored esoteric order devoted to Holy Grail mysteries',
    categoryId: 'occult',
    icon: '🍷',
    sections: [
      {
        title: 'Overview',
        content: 'Legends describe a secret brotherhood studying Grail lore, sacred bloodlines, and mystical kingship.',
      },
      {
        title: 'Lore & Symbols',
        content: 'The chalice symbolizes divine wisdom and hidden lineage claims.',
      },
      {
        title: 'Historical Status',
        content: 'No verified evidence exists; most stories derive from romantic-era mythmaking.',
      },
    ],
  },
  {
    id: 'oc-83',
    name: 'Seasonal Occult Rituals',
    description: 'Ceremonies tied to solstices, equinoxes, and agricultural cycles',
    categoryId: 'occult',
    icon: '🌒',
    sections: [
      {
        title: 'Overview',
        content: 'Seasonal rites honor natural cycles—rebirth in spring, harvest in autumn, darkness in winter.',
      },
      {
        title: 'Traditions',
        content: 'Wiccan Sabbats, Slavic fire rituals, Celtic cross-quarter days, and more.',
      },
      {
        title: 'Modern Meaning',
        content: 'Practitioners use these dates for reflection, renewal, and symbolic transformation.',
      },
    ],
  },
  {
    id: 'oc-84',
    name: 'Self-Flagellation Penitente',
    description: 'A ritualized act of penance practiced historically in religious brotherhoods',
    categoryId: 'occult',
    icon: '🩸',
    sections: [
      {
        title: 'Overview',
        content: 'Penitente groups in the Southwest reenacted Passion scenes and performed controlled self-scourging.',
      },
      {
        title: 'Symbolic Role',
        content: 'The practice aimed to embody sacrifice and communal atonement.',
      },
      {
        title: 'Modern View',
        content: 'Now studied historically; discouraged as a physical practice.',
      },
    ],
  },
  {
    id: 'oc-85',
    name: 'Sephirothic Pathworking',
    description: 'A meditative journey through Kabbalah’s Tree of Life',
    categoryId: 'occult',
    icon: '🌳',
    sections: [
      {
        title: 'Overview',
        content: 'Practitioners visualize traveling through the ten sephiroth, each representing a stage of spiritual development.',
      },
      {
        title: 'Symbolism',
        content: 'The Tree maps divine emanations, bridging human and cosmic consciousness.',
      },
      {
        title: 'Modern Practice',
        content: 'Used for guided meditation, introspection, and metaphysical study.',
      },
    ],
  },
  {
    id: 'oc-86',
    name: 'Servitor Constructs',
    description: 'Psychic constructs created through intention and visualization',
    categoryId: 'occult',
    icon: '🧠',
    sections: [
      {
        title: 'Overview',
        content: 'Chaos magicians claim servitors are thoughtforms programmed for specific tasks.',
      },
      {
        title: 'Mechanics',
        content: 'Created through sigils, names, and “charging” rituals.',
      },
      {
        title: 'Interpretation',
        content: 'Most view them as psychological tools rather than literal entities.',
      },
    ],
  },
  {
    id: 'oc-87',
    name: 'Seventh Book Moses',
    description: 'A grimoire attributed (falsely) to Moses, filled with seals and rituals',
    categoryId: 'occult',
    icon: '📜',
    sections: [
      {
        title: 'Overview',
        content: 'Popular in folk magic, this book includes angelic seals, conjurations, and protective rites.',
      },
      {
        title: 'Folklore',
        content: 'Linked to African-American Hoodoo, Caribbean traditions, and Pennsylvania Dutch magic.',
      },
      {
        title: 'Reality',
        content: 'A 19th-century creation, not a biblical artifact.',
      },
    ],
  },
  {
    id: 'oc-88',
    name: 'Spirit-Binding Runes',
    description: 'Symbols said to restrain, trap, or command unseen forces',
    categoryId: 'occult',
    icon: 'ᚠ',
    sections: [
      {
        title: 'Overview',
        content: 'Runic inscriptions appear in Norse lore as protective or controlling marks.',
      },
      {
        title: 'Usage',
        content: 'Used to “seal” objects or block malevolent spirits.',
      },
      {
        title: 'Modern Interpretation',
        content: 'Treated symbolically as tools of mental focus.',
      },
    ],
  },
  {
    id: 'oc-89',
    name: 'Stigmata Wounds',
    description: 'Mystical wounds mirroring Christ’s crucifixion marks',
    categoryId: 'occult',
    icon: '✝️',
    sections: [
      {
        title: 'Overview',
        content: 'Individuals throughout history reported spontaneous wounds in hands, feet, or side.',
      },
      {
        title: 'Interpretations',
        content: 'Seen as divine favor, psychosomatic manifestation, or self-inflicted.',
      },
      {
        title: 'Debate',
        content: 'No verified supernatural cases exist, but the phenomenon remains culturally powerful.',
      },
    ],
  },
  {
    id: 'oc-90',
    name: 'Table Tipping',
    description: 'A séance technique where spirits allegedly move a table',
    categoryId: 'occult',
    icon: '🪑',
    sections: [
      {
        title: 'Overview',
        content: 'Participants rest fingertips on a table which then tilts, rotates, or knocks.',
      },
      {
        title: 'Explanations',
        content: 'Often attributed to the ideomotor effect or subtle coordinated pressure.',
      },
      {
        title: 'Cultural Role',
        content: 'A staple of Victorian spiritualism.',
      },
    ],
  },
  {
    id: 'oc-91',
    name: 'Thunderstone Invocation',
    description: 'Using ancient “thunderstones” in protective or storm rituals',
    categoryId: 'occult',
    icon: '⚡',
    sections: [
      {
        title: 'Overview',
        content: 'Thunderstones—often Neolithic axes or fossils—were believed to fall from lightning.',
      },
      {
        title: 'Uses',
        content: 'Used to bless fields, shield homes, or focus storm magic.',
      },
      {
        title: 'Modern View',
        content: 'Now treated as archaeological relics with folklore value.',
      },
    ],
  },
  {
    id: 'oc-92',
    name: 'Triple-Circle Curse Seals',
    description: 'A ritual diagram used to bind, contain, or repel hostile forces',
    categoryId: 'occult',
    icon: '⭕',
    sections: [
      {
        title: 'Overview',
        content: 'Three concentric circles appear in Solomonic magic as containment zones.',
      },
      {
        title: 'Symbolism',
        content: 'Circles signify protection, stability, and layered boundaries.',
      },
      {
        title: 'Current Use',
        content: 'Mainly symbolic diagrams in modern ceremonial practice.',
      },
    ],
  },
  {
    id: 'oc-93',
    name: 'Turning Spoon Rite',
    description: 'A minor folk ritual using a bent spoon for divination or curse-breaking',
    categoryId: 'occult',
    icon: '🥄',
    sections: [
      {
        title: 'Overview',
        content: 'Spoons heated or twisted were believed to “turn fortunes” or reveal hidden truths.',
      },
      {
        title: 'Folklore',
        content: 'Appears in rural European and Appalachian traditions.',
      },
      {
        title: 'Modern View',
        content: 'Interpreted as symbolic decision-making rather than literal magic.',
      },
    ],
  },
  {
    id: 'oc-94',
    name: 'Warding Sigils',
    description: 'Drawn symbols intended to protect spaces, objects, or people',
    categoryId: 'occult',
    icon: '🧿',
    sections: [
      {
        title: 'Overview',
        content: 'Warding sigils are stylized symbols created to “seal” a space against harm, misfortune, or unwanted influences. They appear in grimoires, folk magic, and modern chaos magic as personal or inherited protective marks.',
      },
      {
        title: 'Uses & Beliefs',
        content: 'Practitioners inscribe sigils on doorframes, jewelry, tools, or paper, treating them as spiritual locks or alarms. The power is believed to come from focused intent anchored into the symbol’s geometry.',
      },
      {
        title: 'Modern Interpretation',
        content: 'Today, many see warding sigils as psychological anchors and mindfulness tools—visual reminders of boundaries and safety rather than literal forcefields.',
      },
    ],
  },
  {
    id: 'oc-95',
    name: 'Water-Mirror Magic',
    description: 'Divination and vision work using still water as a reflective surface',
    categoryId: 'occult',
    icon: '🪞',
    sections: [
      {
        title: 'Overview',
        content: 'Water scrying is an ancient practice in which a bowl, pool, or darkened mirror filled with water is used to induce visions. The practitioner gazes into the reflection until images or impressions seem to emerge.',
      },
      {
        title: 'Traditions & Lore',
        content: 'Greek oracles, medieval magicians, and folk seers alike were said to “see” answers in water. Folklore warns that lakes and wells can show omens of death, lost lovers, or distant events to the properly attuned viewer.',
      },
      {
        title: 'Modern View',
        content: 'Parapsychological and psychological interpretations treat water scrying as a way to access the subconscious through pareidolia—finding meaningful patterns in random reflections.',
      },
    ],
  },
  {
    id: 'oc-96',
    name: 'Widdershins Walking Curse',
    description: 'Folk belief that circling a place counterclockwise can invite misfortune',
    categoryId: 'occult',
    icon: '🔁',
    sections: [
      {
        title: 'Overview',
        content: 'In British and European folklore, moving “widdershins” (counterclockwise) around a church, graveyard, or hill was said to invert luck, unsettle spirits, or symbolically reverse blessings.',
      },
      {
        title: 'Folkloric Role',
        content: 'Tales warn that repeated widdershins circuits can attract ill luck, strange noises, or ghostly apparitions. In some witchcraft trials, witnesses claimed suspects walked ritual circles against the sun’s path.',
      },
      {
        title: 'Interpretation',
        content: 'Modern interpreters see the taboo as a way to mark disrespect for sacred order. In contemporary practice, widdershins often simply symbolizes banishing or “unmaking” rather than literal cursing.',
      },
    ],
  },
  {
    id: 'oc-97',
    name: 'Wiccan Psychic Deterrence',
    description: 'Protective techniques in Wiccan and neo-pagan traditions to deflect negative intent',
    categoryId: 'occult',
    icon: '🧙',
    sections: [
      {
        title: 'Overview',
        content: 'Within modern Wicca, practitioners may use visualization, protective symbols, or affirmations to “shield” themselves from hostile thoughts, gossip, or so-called psychic attack.',
      },
      {
        title: 'Common Themes',
        content: 'Light shields, mirrored bubbles, and grounding exercises are described as ways to maintain emotional sovereignty rather than to harm others in return.',
      },
      {
        title: 'Modern Framing',
        content: 'Many see these methods as spiritualized forms of boundary-setting and stress management, blending occult symbolism with personal psychology.',
      },
    ],
  },
  {
    id: 'oc-98',
    name: 'Witch Bottles',
    description: 'Ceramic or glass containers filled with apotropaic charms and buried as protection',
    categoryId: 'occult',
    icon: '🫙',
    sections: [
      {
        title: 'Overview',
        content: 'Witch bottles originated in early modern England and later appeared in North America. They were created to trap and neutralize curses, ill will, or malevolent spirits aimed at a household.',
      },
      {
        title: 'Archaeological Finds',
        content: 'Excavated bottles contain pins, nails, hair, herbs, and sometimes urine or wine. They have been discovered under hearths, thresholds, and old floors during renovations.',
      },
      {
        title: 'Interpretation',
        content: 'Historians view them as tangible folk magic rooted in fear of witchcraft and envy. Modern occultists sometimes recreate symbolic versions as protective art objects.',
      },
    ],
  },
  {
    id: 'oc-99',
    name: 'Witch Ladders',
    description: 'Strings or cords threaded with feathers, beads, or knots, used in folk magic',
    categoryId: 'occult',
    icon: '🪢',
    sections: [
      {
        title: 'Overview',
        content: 'A witch ladder is a braided or knotted cord with charms attached. In folklore, they were blamed for storm-raising, livestock illness, or, conversely, used as protective talismans.',
      },
      {
        title: 'Historical Accounts',
        content: 'A famous example was found in an English cottage in the late 19th century, initially interpreted as a “witch tool.” Some scholars later suggested it might have been simple folk art or a devotional object.',
      },
      {
        title: 'Modern Reimagining',
        content: 'Contemporary practitioners use witch ladders as meditative tools, assigning prayers or intentions to each knot or feather rather than focusing on malefic uses.',
      },
    ],
  },
  {
    id: 'oc-100',
    name: 'Witch’s Heart Ritual',
    description: 'Folk charm centered on a heart-shaped symbol to bind or protect',
    categoryId: 'occult',
    icon: '💔',
    sections: [
      {
        title: 'Overview',
        content: 'The “witch’s heart” is a stylized, crooked heart motif found in European and American folk art. It has been associated both with romantic binding charms and with protection from enchantment.',
      },
      {
        title: 'Symbolism',
        content: 'Depending on context, the bent heart can represent love that defies convention, or a heart guarded against harm. In some stories, it marks objects or places that cannot be easily bewitched.',
      },
      {
        title: 'Cultural Echoes',
        content: 'Today the symbol appears in jewelry and decor more as an aesthetic motif than an active magical device, but lore about “hearts under spell” persists in ghost stories and legends.',
      },
    ],
  },
  {
    id: 'oc-101',
    name: 'Witching Hour',
    description: 'The liminal time of night traditionally linked to heightened supernatural activity',
    categoryId: 'occult',
    icon: '🕒',
    sections: [
      {
        title: 'Overview',
        content: 'The witching hour is most often placed around midnight or 3 AM, depending on tradition. Folklore claims that spirits, witches, and other entities are most active when the world is quiet and boundaries are thin.',
      },
      {
        title: 'Historical Roots',
        content: 'Curfews, church bells, and monastic night offices shaped perceptions of “forbidden hours.” In some cultures, being abroad at those times was suspicious or dangerous.',
      },
      {
        title: 'Modern Perspectives',
        content: 'Sleep scientists note that 3–4 AM is a common time for waking anxiety and sleep paralysis, which may have helped seed tales of nocturnal visitations and looming presences.',
      },
    ],
  },
  {
    id: 'oc-102',
    name: 'Witchcraft General',
    description: 'A broad term for magical practices, folk charms, and spellcraft across cultures',
    categoryId: 'occult',
    icon: '🧹',
    sections: [
      {
        title: 'Overview',
        content: '“Witchcraft” has meant very different things in different eras—from village healers and midwives to demonized figures in witch trials, to modern Wiccan and neo-pagan practitioners reclaiming the term.',
      },
      {
        title: 'Persecution & Myth',
        content: 'Early modern Europe saw thousands accused of pacts with the devil, flying on broomsticks, or cursing neighbors, often under torture and social panic rather than evidence.',
      },
      {
        title: 'Contemporary Practice',
        content: 'Modern witches typically focus on nature reverence, personal symbolism, and ethical spellwork that emphasizes self-development and emotional healing rather than harm.',
      },
    ],
  },
  {
    id: 'oc-103',
    name: 'Wolfsegen Werewolf Charm',
    description: 'A historical charm reputed to protect against or control werewolves',
    categoryId: 'occult',
    icon: '🐺',
    sections: [
      {
        title: 'Overview',
        content: 'The Wolfsegen was a Germanic protective formula—sometimes a written charm, sometimes an incantation—meant to ward off wolves, both literal and supernatural.',
      },
      {
        title: 'Folklore',
        content: 'Some stories claim that certain charms could halt a werewolf mid-attack or sever the curse, while darker variants supposedly granted influence over wolves and wolf-men.',
      },
      {
        title: 'Historical Assessment',
        content: 'Surviving Wolfsegen texts resemble other Christianized folk charms that blend scripture with local superstition, illustrating how communities tried to manage fear of predators and shapeshifters.',
      },
    ],
  },
  {
    id: 'oc-104',
    name: 'Zozo Ouija Demon',
    description: 'A notorious alleged spirit said to appear in Ouija sessions under the name “Zozo”',
    categoryId: 'occult',
    icon: '⚠️',
    sections: [
      {
        title: 'Overview',
        content: 'From the late 20th century onward, many Ouija users have reported encounters with an entity calling itself “Zozo,” often associated with aggressive behavior, mockery, and frightening coincidences.',
      },
      {
        title: 'Patterns & Reports',
        content: 'Accounts describe the planchette rapidly spelling Z-O-Z-O, figure-eight movements, or fixation on certain letters. Some claim subsequent bad luck or disturbing dreams after sessions where Zozo appeared.',
      },
      {
        title: 'Skeptical & Cultural Views',
        content: 'Researchers point out that internet forums and horror media amplified the Zozo legend, creating expectations that shape Ouija experiences through suggestion and the ideomotor effect. Many see Zozo as a modern tulpa-like archetype—a story-powered mask the subconscious wears during spirit board sessions.',
      },
    ],
  },
];

export const getOccultById = (id: string): OccultTopic | undefined => {
  return occultData.find(occult => occult.id === id);
};

export const getOccultByName = (name: string): OccultTopic | undefined => {
  return occultData.find(occult => occult.name.toLowerCase() === name.toLowerCase());
};

/**
 * Get all occult topics
 * @returns Array of all occult topics
 */
export const getAllOccult = (): readonly OccultTopic[] => {
  return occultData;
};

/**
 * Get count of occult topics
 * @returns Total number of occult topics
 */
export const getOccultCount = (): number => {
  return occultData.length;
};
