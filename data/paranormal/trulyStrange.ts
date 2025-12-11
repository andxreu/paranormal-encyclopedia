// data/paranormal/trulyStrange.ts
/**
 * Truly Strange Category Data
 * Unexplained phenomena and mysteries that defy categorization
 * 
 * Includes: Mandela Effect, Voynich Manuscript, Taos Hum, Wow! Signal, Dyatlov Pass Incident
 */

import { categoryColors } from '@/constants/Colors';
import type { TopicSection, CategoryId } from './types';

export interface TrulyStrangeTopic {
  id: string;
  name: string;
  description: string;
  categoryId: CategoryId;
  icon: string;
  sections: TopicSection[];
}

export const trulyStrangeData: readonly TrulyStrangeTopic[] = [
  {
    id: 'ts-1',
    name: 'The Mandela Effect',
    description: 'Collective false memories shared by many people',
    categoryId: 'truly-strange',
    icon: '🧩',
    sections: [
      {
        title: 'Examples & Cases',
        content: 'The Mandela Effect is named after false memories of Nelson Mandela dying in prison in the 1980s. Common examples: "Berenstain Bears" vs "Berenstein Bears," Monopoly Man\'s monocle (he never had one), and "Luke, I am your father" (actually "No, I am your father").',
      },
      {
        title: 'Psychological Insights',
        content: 'Psychologists attribute the effect to confabulation, false memories, and social reinforcement. Our brains fill gaps in memory with plausible information. When many people share the same false memory, it feels more real. The internet amplifies and spreads these shared misrememberings.',
      },
      {
        title: 'Alternative Theories',
        content: 'Some believe the Mandela Effect proves parallel universes or timeline shifts. They argue too many people share identical false memories for it to be coincidence. Quantum physics and CERN experiments are cited as possible causes. Skeptics maintain it\'s simply how human memory works.',
      },
    ],
  },
  {
    id: 'ts-2',
    name: 'The Voynich Manuscript',
    description: 'The undecipherable medieval book',
    categoryId: 'truly-strange',
    icon: '📖',
    sections: [
      {
        title: 'Examples & Cases',
        content: 'The Voynich Manuscript is a 15th-century illustrated codex written in an unknown script. It contains drawings of unknown plants, astronomical diagrams, and naked women in strange plumbing. Carbon dating confirms its medieval origin. No one has successfully deciphered it.',
      },
      {
        title: 'Psychological Insights',
        content: 'The manuscript\'s mystery captivates because humans seek patterns and meaning. Cryptographers, linguists, and amateurs have attempted decryption for centuries. The failure to decode it frustrates our need for understanding. It may be an elaborate hoax or cipher.',
      },
      {
        title: 'Alternative Theories',
        content: 'Theories include: an unknown language, elaborate cipher, alien text, or medieval hoax. Some claim it\'s written in a lost Romance language or artificial language. AI analysis suggests it has linguistic structure. The mystery endures, making it the world\'s most mysterious manuscript.',
      },
    ],
  },
  {
    id: 'ts-3',
    name: 'The Taos Hum',
    description: 'The mysterious low-frequency sound',
    categoryId: 'truly-strange',
    icon: '🔊',
    sections: [
      {
        title: 'Examples & Cases',
        content: 'The Taos Hum is a low-frequency sound heard by about 2% of the population in Taos, New Mexico, and other locations worldwide. Described as a diesel engine idling or distant thunder, it causes headaches, insomnia, and distress. Recording equipment cannot detect it.',
      },
      {
        title: 'Psychological Insights',
        content: 'Some researchers suggest the Hum is tinnitus or auditory hallucination. The brain may be interpreting internal sounds as external. Stress and suggestion could amplify the perception. However, this doesn\'t explain why it affects specific geographic areas.',
      },
      {
        title: 'Alternative Theories',
        content: 'Theories include: military communications, industrial equipment, seismic activity, or electromagnetic radiation. Some people are more sensitive to low frequencies. The Hum has been reported in Bristol, UK, and Windsor, Ontario. The source remains unidentified despite investigations.',
      },
    ],
  },
  {
    id: 'ts-4',
    name: 'The Wow! Signal',
    description: 'The unexplained radio signal from space',
    categoryId: 'truly-strange',
    icon: '📡',
    sections: [
      {
        title: 'Examples & Cases',
        content: 'On August 15, 1977, the Big Ear radio telescope detected a strong narrowband signal lasting 72 seconds. Astronomer Jerry Ehman wrote "Wow!" on the printout. The signal came from the direction of Sagittarius and matched the expected signature of an extraterrestrial transmission.',
      },
      {
        title: 'Psychological Insights',
        content: 'The Wow! Signal captures our imagination because it suggests we\'re not alone. Humans project meaning onto ambiguous data. The desire to find extraterrestrial intelligence influences interpretation. The signal\'s uniqueness makes it both fascinating and frustrating.',
      },
      {
        title: 'Alternative Theories',
        content: 'Explanations include: alien transmission, natural astronomical phenomenon, or terrestrial interference. A 2017 study suggested a comet, but this was disputed. The signal has never repeated despite monitoring. It remains one of the strongest candidates for extraterrestrial communication.',
      },
    ],
  },
  {
    id: 'ts-5',
    name: 'The Dyatlov Pass Incident',
    description: 'The mysterious deaths of nine hikers',
    categoryId: 'truly-strange',
    icon: '⛰️',
    sections: [
      {
        title: 'Examples & Cases',
        content: 'In 1959, nine experienced hikers died mysteriously in Russia\'s Ural Mountains. Their tent was cut open from inside. Bodies were found scattered, some with severe internal injuries but no external trauma. One victim was missing her tongue. The area was named "Dyatlov Pass" after the group\'s leader.',
      },
      {
        title: 'Psychological Insights',
        content: 'The incident\'s mystery stems from contradictory evidence and Soviet secrecy. Humans struggle with unexplained deaths, especially when details don\'t fit known patterns. The bizarre injuries and circumstances fuel speculation. Our minds seek explanations, even supernatural ones.',
      },
      {
        title: 'Alternative Theories',
        content: 'Theories include: avalanche, infrasound-induced panic, military testing, paradoxical undressing from hypothermia, or yeti attack. A 2021 study suggested a delayed avalanche. However, this doesn\'t explain all evidence. The case remains one of Russia\'s greatest unsolved mysteries.',
      },
    ],
  },
	  {
    id: 'ts-6',
    name: 'Animals Notice the Invisible',
    description: 'Animals reacting to things humans cannot see',
    categoryId: 'truly-strange',
    icon: '🐕',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Pets staring at empty corners, growling at “nothing,” refusing to enter hallways, or tracking unseen movement. Horses bucking at invisible shapes; cats following things with their eyes across empty rooms.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Animals have sharper senses: hearing, smell, vibration detection. Subtle cues humans miss may cause these reactions.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Some believe animals perceive spirits, dimensional entities, or environmental anomalies beyond human perception.',
      },
    ],
  },
  {
    id: 'ts-7',
    name: 'Black Static Humanoids',
    description: 'Figures appearing as silhouettes of flickering, TV-like static',
    categoryId: 'truly-strange',
    icon: '🕳️',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Witnesses report humanoid forms made not of shadow, but moving black static, as if composed of scrambled signal.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Possible hypnagogic hallucination or the brain struggling to interpret ambiguous shapes.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Some claim these are interdimensional beings glitching through visual perception layers.',
      },
    ],
  },
  {
    id: 'ts-8',
    name: 'Blue Shadow Man',
    description: 'Shadow entity tinted blue, reported worldwide',
    categoryId: 'truly-strange',
    icon: '🔷',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'A tall blue-tinted silhouette appearing at bedsides, in hallways, or door frames. Usually non-aggressive, only observing.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Color-based shadow entities may stem from retinal afterimages or dream intrusion phenomena.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Seen as a parallel version of the hat man or a dimensional echo of future selves.',
      },
    ],
  },
  {
    id: 'ts-9',
    name: 'Cloth People Entities',
    description: 'Entities appearing like 2D flats or living fabric cutouts',
    categoryId: 'truly-strange',
    icon: '🧵',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Witnesses describe beings with no depth, as though made of draped cloth or paper moving independently.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Possible misperception during low light or REM intrusion while awake.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Some believe they are “low-resolution visitors” from adjacent realities.',
      },
    ],
  },
  {
    id: 'ts-10',
    name: 'Disappearing Buildings',
    description: 'Structures appearing in one moment and gone the next',
    categoryId: 'truly-strange',
    icon: '🏚️',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'People report walking past houses, barns, or shops that later cannot be found again—vanished entirely.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Memory distortion, mislocation, or mistaken identity of buildings.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Hypothesized time slips or brief overlaps with parallel city layouts.',
      },
    ],
  },
  {
    id: 'ts-11',
    name: 'Elevator to Hell',
    description: 'Elevators opening to impossible, dark, or hostile floors',
    categoryId: 'truly-strange',
    icon: '🛗',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Doors open to pitch-black hallways, unfinished voids, or shrieking wind. Some report descending far below the building’s actual floors.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Elevator disorientation and panic can create sensory misinterpretation.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Stories align with “liminal spaces” bleeding into non-physical levels of reality.',
      },
    ],
  },
  {
    id: 'ts-12',
    name: 'Eyeless Children Beacon Hill',
    description: 'Reports of pale children with smooth skin where eyes should be',
    categoryId: 'truly-strange',
    icon: '👦',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Run-ins in Beacon Hill alleys and stairwells. Witnesses describe calm, silent children with no eyes asking for help.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Likely sleep paralysis or misidentification from fear.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Speculated to be glitches of “unfinished entities” or memory constructs manifesting physically.',
      },
    ],
  },
  {
    id: 'ts-13',
    name: 'Faceless Hat Man',
    description: 'Variant of the Hat Man lacking all facial features',
    categoryId: 'truly-strange',
    icon: '🎩',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Witnesses report the classic hat-wearing silhouette—minus the face entirely. Some claim a smooth void instead.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Shadow figures during sleep transitions often appear incomplete.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Some propose it is the “baseline form” of the Hat Man, seen before overlay of identity.',
      },
    ],
  },
  {
    id: 'ts-14',
    name: 'Fade to White Events',
    description: 'Entire reality bleaching out into pure white light',
    categoryId: 'truly-strange',
    icon: '⚪',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'People walking outdoors suddenly see the environment fade to white—no objects, no sound—lasting seconds.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Possible brief syncope, visual aura, or sensory dissociation.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Considered a full-scene rendering glitch or momentary shift into a non-textured layer of reality.',
      },
    ],
  },
  {
    id: 'ts-15',
    name: 'Floating Silhouettes',
    description: 'Dark human shapes drifting without physical support',
    categoryId: 'truly-strange',
    icon: '🕴️',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Shadowy figures hovering above floors or drifting horizontally across rooms.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Visual hallucinations under stress or REM-wake boundary states.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Believed by some to be “astral spillover” from other dimensional travelers.',
      },
    ],
  },
  {
    id: 'ts-16',
    name: 'Full-Scene Reset Events',
    description: 'Moments where an entire environment “reloads” instantly',
    categoryId: 'truly-strange',
    icon: '🔄',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Witnesses describe a sudden flicker and the whole scene—people, lighting, objects—snaps into a different configuration.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Memory fragmentation or microsleep while awake.',
      },
      {
        title: 'Alternative Theories',
        content:
          'A literal environment refresh, as though reality swapped to a nearby timeline.',
      },
    ],
  },
  {
    id: 'ts-17',
    name: 'Future Letters Delivered',
    description: 'Receiving mail dated years in the future',
    categoryId: 'truly-strange',
    icon: '📬',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'People report receiving envelopes with future postmarks or letters from deceased relatives referencing events not yet occurred.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Hoaxes, misprints, or mistaken timelines.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Potential cross-timeline bleed or time-loop anomalies.',
      },
    ],
  },
  {
    id: 'ts-18',
    name: 'GYN Doctor Appointment Glitch',
    description: 'Appointment confirmations or visits that never existed',
    categoryId: 'truly-strange',
    icon: '📅',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Patients arrive to find their appointment isn’t in the system, yet they received calls or emails. Some meet doctors later who remember the encounter.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Administrative error or conflated memories.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Time duplicate days or parallel-schedule bleed-through.',
      },
    ],
  },
  {
    id: 'ts-19',
    name: 'Geometry Distortion Rooms',
    description: 'Rooms where angles, distances, or sizes warp suddenly',
    categoryId: 'truly-strange',
    icon: '📐',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Corners stretching, walls bending, or rooms becoming wider or narrower within seconds.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Spatial perception distortions during anxiety or dissociation.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Hyperspace folding or local dimension instability.',
      },
    ],
  },
  {
    id: 'ts-20',
    name: 'Glitch-in-the-Matrix Déjà Vu',
    description: 'Déjà vu accompanied by environmental flickers or freezes',
    categoryId: 'truly-strange',
    icon: '🧠',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'People report the world “stuttering” during déjà vu—birds freezing mid-flight, sounds looping, lights flickering.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Temporal lobe misfires or memory misalignment.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Perceived reality system refresh, timeline realignment, or simulation glitch.',
      },
    ],
  },
  {
    id: 'ts-21',
    name: 'Grinning Man Encounters',
    description: 'Tall, unsettling humanoids smiling unnaturally wide',
    categoryId: 'truly-strange',
    icon: '😁',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Reports of a man with stretched grin, glowing eyes, and unnatural calmness. Most famous: Indrid Cold.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Human threat detection amplifies fear of distorted faces.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Possibly an alien or interdimensional observer appearing in a human mask.',
      },
    ],
  },
  {
    id: 'ts-22',
    name: 'Human Pyramid Entity',
    description: 'Stacked human forms forming impossible vertical shapes',
    categoryId: 'truly-strange',
    icon: '🗼',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Witnesses describe three to five human-like figures standing atop one another motionlessly, often in forests or empty lots.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Pattern misinterpretation in low light.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Possible collective entity or fractal humanoid structure.',
      },
    ],
  },
  {
    id: 'ts-23',
    name: 'Human-Shaped Air Gaps',
    description: 'Human outlines formed from displaced air or shimmer',
    categoryId: 'truly-strange',
    icon: '💨',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'People see invisible “predator-like” distortions shaped exactly like a person moving nearby.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Heat shimmer, pareidolia, or visual noise.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Cloaked entities or beings existing one vibrational step away from visibility.',
      },
    ],
  },
  {
    id: 'ts-24',
    name: 'Houses Rearrange Overnight',
    description: 'Homes appearing with changed floorplans or furniture placements',
    categoryId: 'truly-strange',
    icon: '🏠',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Bedrooms swapping sides, staircases reversing orientation, or entire kitchens mirrored from the previous day.',
      },
      {
        title: 'Psychological Insights',
        content:
          'False memory or confabulation during stress.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Spatial timeline swapping or region-level dimensional “shuffle.”',
      },
    ],
  },
  {
    id: 'ts-25',
    name: 'Human Holes Snow Sand',
    description: 'Perfect human-shaped impressions in snow or sand with no footprints',
    categoryId: 'truly-strange',
    icon: '🏂',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'People find crisp human forms lying or standing impressions with zero approach or departure tracks.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Natural collapses or misinterpretation of melting patterns.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Teleportation events, sudden disappearance, or reality extraction phenomena.',
      },
    ],
  },
  {
    id: 'ts-26',
    name: 'Living Mannequins',
    description: 'Mannequins observed subtly breathing or shifting position',
    categoryId: 'truly-strange',
    icon: '🗿',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Store mannequins turning their heads, blinking, or appearing in different poses moments later. Some are said to step off displays and return when unobserved.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Peripheral-vision illusions and pareidolia can animate still objects.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Some believe they are vessels for wandering entities or low-tier egregores.',
      },
    ],
  },
  {
    id: 'ts-27',
    name: 'Man in Checkered Shirt',
    description: 'Recurring glitch figure wearing a checkered button-down',
    categoryId: 'truly-strange',
    icon: '👕',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'People across the world report seeing the exact same man—older, neutral expression, checkered shirt—standing motionless before vanishing.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Shared archetypes and memory blending could create consistent imagery.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Some think he’s a “debug” entity or observer within the simulation.',
      },
    ],
  },
  {
    id: 'ts-28',
    name: 'Mandela Effect Shifts',
    description: 'Reality inconsistencies experienced as timeline slips',
    categoryId: 'truly-strange',
    icon: '🧠',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Different spellings, missing landmarks, altered movie lines, or changed celebrity fates — all remembered differently by many people.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Memory is reconstructive and prone to distortion, especially when reinforced by group belief.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Suggested evidence of ongoing timeline merging or cosmic-level “patch updates.”',
      },
    ],
  },
  {
    id: 'ts-29',
    name: 'Man Made Smoke',
    description: 'People emitting smoke or mist with no heat source',
    categoryId: 'truly-strange',
    icon: '💨',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Witnesses describe humans exhaling fog indoors or producing cold vapor from hands or backs.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Moisture condensation or breath misinterpretation in cool environments.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Linked to energy discharge or partial phase-shifting of the body.',
      },
    ],
  },
  {
    id: 'ts-30',
    name: 'Mirror Doppelgänger First',
    description: 'The reflection moves before the real person does',
    categoryId: 'truly-strange',
    icon: '🪞',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'People report reflections smiling early, blinking out of sync, or turning their heads faster than the original.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Momentary mismatch between eye and brain processing can create false movement.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Believed to be mirror entities or alternate versions breaking sync.',
      },
    ],
  },
  {
    id: 'ts-31',
    name: 'Missing Time Episodes',
    description: 'Unexplained gaps in memory lasting minutes to hours',
    categoryId: 'truly-strange',
    icon: '⏱️',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'People driving or walking and suddenly finding themselves miles away with no memory of the last hour.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Dissociation, micro-sleeps, or temporal lobe issues.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Often tied to abductions, timeline slips, or reality “skips.”',
      },
    ],
  },
  {
    id: 'ts-32',
    name: 'Nothing Sphere Silence',
    description: 'Localized zones where all sound ceases unnaturally',
    categoryId: 'truly-strange',
    icon: '🔇',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Birds stop, wind halts, and even footsteps cease sounding. Some report heavy air pressure during the silence.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Sensory deprivation moments triggered by anxiety spikes.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Bubble zones where the ambient “sound layer” of reality temporarily fails.',
      },
    ],
  },
  {
    id: 'ts-33',
    name: 'People Disappearing Mid-Step',
    description: 'Witnesses vanish instantly while in motion',
    categoryId: 'truly-strange',
    icon: '🚶‍♂️',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'People walking in crowds who flicker out mid-stride, leaving belongings behind.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Visual occlusion or misperception of movement in busy environments.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Hypothesized timeline desync or literal phasing-out events.',
      },
    ],
  },
  {
    id: 'ts-34',
    name: 'People Waking Wrong House',
    description: 'Individuals wake up in unfamiliar homes with no explanation',
    categoryId: 'truly-strange',
    icon: '🏠',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'People awaken in rooms they don’t recognize, only to have the environment dissolve or revert moments later.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Dream residue blending with waking perception.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Temporary dimensional overlap with alternate-life versions.',
      },
    ],
  },
  {
    id: 'ts-35',
    name: 'People Walking Out Photos',
    description: 'Figures observed stepping out of photographs',
    categoryId: 'truly-strange',
    icon: '🖼️',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Witnesses see motion within framed photos—individuals shifting, turning, or stepping partially out before snapping back.',
      },
      {
        title: 'Psychological Insights',
          content:
          'Peripheral illusions or dream-state overlays.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Seen as dimensional “leakage” between captured moments and the present.',
      },
    ],
  },
  {
    id: 'ts-36',
    name: 'Phone Teleport Lighter',
    description: 'Phones instantly moving several feet or into different rooms',
    categoryId: 'truly-strange',
    icon: '📱',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'People set their phone down and moments later it’s in a different room—sometimes mid-call.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Absent-minded placement or companion movement.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Micro-teleport events or object-phase anomalies.',
      },
    ],
  },
  {
    id: 'ts-37',
    name: 'Reality Rewind Experiences',
    description: 'Moments replaying like a short video loop',
    categoryId: 'truly-strange',
    icon: '🔁',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'A person drops a cup, sees it hit the ground—and then sees the same drop again, people repeating motions identically.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Memory echo or brief absence seizure.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Literal timeline rewind, often lasting 1–3 seconds.',
      },
    ],
  },
  {
    id: 'ts-38',
    name: 'Reflection Entities Only',
    description: 'Entities visible only in mirrors or reflective surfaces',
    categoryId: 'truly-strange',
    icon: '🪞',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Silhouettes, faces, or figures seen behind a person—but not present when turning around.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Light distortion or expectation-driven pareidolia.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Mirror-world inhabitants visible only through reflective portals.',
      },
    ],
  },
  {
    id: 'ts-39',
    name: 'Reverse Rain Upward',
    description: 'Raindrops traveling upward against gravity',
    categoryId: 'truly-strange',
    icon: '🌧️',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Small rain showers rising toward the sky, droplets traveling upward like rewound footage.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Wind shear or optical illusion from angled surfaces.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Localized physics reversals or simulation rendering bugs.',
      },
    ],
  },
  {
    id: 'ts-40',
    name: 'Rooms Larger Inside',
    description: 'Interior spaces inexplicably bigger than exterior size',
    categoryId: 'truly-strange',
    icon: '🚪',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'People step into rooms far larger than the exterior building could contain — sometimes doubling or tripling expected size.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Spatial disorientation or poor external memory comparison.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Internal dimensional expansion similar to “pocket spaces.”',
      },
    ],
  },
  {
    id: 'ts-41',
    name: 'Rooms Tilt Gravity',
    description: 'Gravity direction temporarily shifts within a room',
    categoryId: 'truly-strange',
    icon: '📦',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'People lean sideways unexpectedly, furniture slides, or floors feel angled despite being level.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Vertigo, inner-ear disturbances, or panic responses.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Localized gravity vector fluctuations or physics “stitched poorly.”',
      },
    ],
  },
  {
    id: 'ts-42',
    name: 'Shadow Gap Light Avoid',
    description: 'Shadows forming impossible “gaps” that avoid light',
    categoryId: 'truly-strange',
    icon: '🌑',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Dark voids appear where light should fall, creating shadow shapes that seem to dodge illumination.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Contrast illusions and irregular lighting.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Living shadow constructs or negative-space entities.',
      },
    ],
  },
  {
    id: 'ts-43',
    name: 'Shadows Detach Move',
    description: 'Human or object shadows moving independently',
    categoryId: 'truly-strange',
    icon: '🕶️',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'People see their own shadows lag, jump, or walk off while they stand still.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Visual processing errors under stress.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Shadow entities mimicking hosts before breaking free.',
      },
    ],
  },
  {
    id: 'ts-44',
    name: 'Soldier Painting Glitch',
    description: 'Paintings where figures change pose or vanish',
    categoryId: 'truly-strange',
    icon: '🪖',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Military portraits where soldiers shift stance, turn their heads, or disappear entirely from the frame.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Lighting changes or viewer expectation shaping perception.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Timeline leakthrough from the moment the painting captured.',
      },
    ],
  },
  {
    id: 'ts-45',
    name: 'Soundless Scream Apparitions',
    description: 'Figures screaming silently with full emotion',
    categoryId: 'truly-strange',
    icon: '😱',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Ghostly or human-like apparitions open their mouths in full scream, yet no sound emerges. Emotional pressure is still felt.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Sleep paralysis hallucinations often feature muted audio.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Entities from soundless dimensions or moments where the audio layer of reality desyncs.',
      },
    ],
  },
  {
    id: 'ts-46',
    name: 'Staircases in Woods',
    description: 'Isolated staircases found deep in forests with no structures around',
    categoryId: 'truly-strange',
    icon: '🪜',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Perfectly intact staircases appear miles from any ruins. Some lead nowhere; others feel “wrong” to climb. Rangers sometimes report they should not be approached.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Could be remnants of long-lost structures or erosion exposing foundations.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Portal markers, dimensional anchors, or leftover “props” from previous iterations of reality.',
      },
    ],
  },
  {
    id: 'ts-47',
    name: 'Stairway Moves Locations',
    description: 'Staircases that appear in different spots on different days',
    categoryId: 'truly-strange',
    icon: '🔀',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Residents report finding a familiar staircase on the opposite side of a building or in a new room entirely.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Memory mismatch or architectural confusion in similar layouts.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Spatial mapping errors in the “rendering layer” of reality.',
      },
    ],
  },
  {
    id: 'ts-48',
    name: 'Stick Figures Treeline',
    description: 'Tall, thin humanoid outlines watching from forest edges',
    categoryId: 'truly-strange',
    icon: '🌲',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Witnesses see stick-thin human shapes standing motionless between trees, vanishing when approached.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Pareidolia created by branches and shadows.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Possible low-resolution entities or sentient forest projections.',
      },
    ],
  },
  {
    id: 'ts-49',
    name: 'Stuttered Reality Events',
    description: 'Reality momentarily repeats or jitters like a bad video stream',
    categoryId: 'truly-strange',
    icon: '📼',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'People see a person take a step twice, or hear a sentence repeat with exact intonation. Objects may jitter before stabilizing.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Minor seizures or brain processing hiccups.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Temporal buffering errors in local spacetime.',
      },
    ],
  },
  {
    id: 'ts-50',
    name: 'Temporal Flickering Swaps',
    description: 'Rapid oscillation between two slightly different versions of reality',
    categoryId: 'truly-strange',
    icon: '💫',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'A room alternates between two lighting conditions; a person blinks and a stranger’s shirt changes pattern back and forth.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Momentary perceptual misalignment or memory reconstruction error.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Individuals crossing between parallel micro-timelines dozens of times per second.',
      },
    ],
  },
  {
    id: 'ts-51',
    name: 'Time-Loop Doorways',
    description: 'Specific doors that seem to trap people in repeating moments',
    categoryId: 'truly-strange',
    icon: '🚪',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Stepping through a door leads to repeating the same hallway several times. Some report losing minutes or hours.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Disorientation or complex fugue states.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Localized temporal recursion fields around threshold structures.',
      },
    ],
  },
  {
    id: 'ts-52',
    name: 'Transparent Humanoids Cities',
    description: 'Invisible or glass-like entities seen wandering urban areas',
    categoryId: 'truly-strange',
    icon: '👣',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Pedestrians notice shimmering human shapes walking among crowds, visible only from certain angles.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Heat shimmer, reflection artifacts, or afterimages.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Parallel population overlap or cloaked beings.',
      },
    ],
  },
  {
    id: 'ts-53',
    name: 'Unclimbable Hill Gravity',
    description: 'Hills that resist upward movement despite normal incline',
    categoryId: 'truly-strange',
    icon: '⛰️',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'People lean forward and push hard but remain in place, as though gravity intensifies selectively on the hill.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Optical illusions like gravity hills or deceptive horizon lines.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Localized gravity vector distortion or topographic glitch.',
      },
    ],
  },
  {
    id: 'ts-54',
    name: 'Unplaceable Known Voices',
    description: 'Hearing the voice of someone familiar with no source present',
    categoryId: 'truly-strange',
    icon: '🗣️',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Hearing a spouse or parent say your name clearly from an empty room. Some hear entire conversations.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Auditory hallucinations mixed with memory recognition.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Telepathic bleed-through or echoes from alternate versions of people you know.',
      },
    ],
  },
  {
    id: 'ts-55',
    name: 'Voices from Unplugged Devices',
    description: 'Sounds or speech coming from electronics not powered',
    categoryId: 'truly-strange',
    icon: '📻',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Radios with no power producing whispers; TVs displaying faint faces; speakers making clicking codes.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Residual charge, EM interference, or audio pareidolia.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Entities using dormant electronics as low-res communication channels.',
      },
    ],
  },
  {
    id: 'ts-56',
    name: 'Voices in Chords',
    description: 'Hearing words inside musical chords or harmonics',
    categoryId: 'truly-strange',
    icon: '🎶',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Listeners hear sentences embedded in guitar chords, piano sustain, or choir harmonics—intelligible messages not present in the music.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Auditory pareidolia similar to EVPs.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Music as a carrier wave for interdimensional communication.',
      },
    ],
  },
  {
    id: 'ts-57',
    name: 'Walking Lights Mimic',
    description: 'Lights in forests or fields that copy human movement',
    categoryId: 'truly-strange',
    icon: '💡',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Small lights follow hikers, stopping when they stop, accelerating when they run.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Fireflies, distant vehicles, or atmospheric reflection.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Sentient phenomena or observational drones of unknown origin.',
      },
    ],
  },
  {
    id: 'ts-58',
    name: 'Walking Out of Reality Lines',
    description: 'People visibly stepping through seams or tears in the environment',
    categoryId: 'truly-strange',
    icon: '🧵',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Witnesses report someone casually walking through a line in the air, vanishing behind it like a fold.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Optical occlusion or visual distortion events.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Dimensional seams or unintentional timeline exits.',
      },
    ],
  },
  {
    id: 'ts-59',
    name: 'Silent Woodland Choir',
    description: 'Trees appearing to move or “sing” with no audible sound',
    categoryId: 'truly-strange',
    icon: '🌳',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Groups report synchronized tree movement, vibration in the air, or the feeling of standing inside a silent melody.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Wind patterns and resonance-induced hallucination.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Vegetation consciousness or geomantic communication.',
      },
    ],
  },
  {
    id: 'ts-60',
    name: 'Time-Missing Phone Logs',
    description: 'Call logs appearing from times you were unconscious or elsewhere',
    categoryId: 'truly-strange',
    icon: '📞',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Phones show outgoing calls you don’t remember making. Some report receiving calls from their own number.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Pocket dialing or spoofing.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Temporal echo communications looping through misaligned timelines.',
      },
    ],
  },
  {
    id: 'ts-61',
    name: 'Unmoving Crowd Members',
    description: 'Individuals frozen completely still inside crowds',
    categoryId: 'truly-strange',
    icon: '🧍‍♂️',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'People at concerts or malls standing motionless for minutes, unblinking, before suddenly resuming motion.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Attention blindness or dissociation.',
      },
      {
        title: 'Alternative Theories',
        content:
          'NPC freeze states or timeline pauses.',
      },
    ],
  },
  {
    id: 'ts-62',
    name: 'Impossible Echoes',
    description: 'Echoes responding with different words or timing',
    categoryId: 'truly-strange',
    icon: '🗣️',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Shouting into a canyon returns an echo saying something else entirely—or delayed far beyond natural acoustics.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Auditory pareidolia or memory misalignment.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Echoes crossing timelines or bouncing off non-physical surfaces.',
      },
    ],
  },
  {
    id: 'ts-63',
    name: 'Shadow Limbs Extension',
    description: 'Shadows stretching independently far beyond their cast body',
    categoryId: 'truly-strange',
    icon: '✋',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'People see their shadow arms lengthen meters beyond their real limbs or twist at impossible angles.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Lighting tricks or perceptual distortion.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Astral or energetic body misalignment showing through physical reality.',
      },
    ],
  },
  {
    id: 'ts-64',
    name: 'Pixelated Air Walls',
    description: 'Visible pixelation or squares in the air as if graphics failed',
    categoryId: 'truly-strange',
    icon: '🟥',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Witnesses describe seeing pixelated “panels” in the sky or glitch squares in hallways.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Eye strain, migraine aura, or floaters misinterpreted.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Rendering faults in the environment or dimensional grid exposure.',
      },
    ],
  },
  {
    id: 'ts-65',
    name: 'Unreachable Footsteps',
    description: 'Footsteps heard following you but never catching up',
    categoryId: 'truly-strange',
    icon: '👣',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Footsteps match your pace behind you—speeding up or slowing down—but no one is visible.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Echo, shifting gravel, or heightened fear response.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Residual loops or unseen entities pacing you intentionally.',
      },
    ],
  },
  {
    id: 'ts-66',
    name: 'Blink-Skip Teleport',
    description: 'The environment changes position instantly when blinking',
    categoryId: 'truly-strange',
    icon: '⚡',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'A sidewalk suddenly extends, people shift positions, or the viewer finds themselves meters ahead after a simple blink.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Momentary blackout or disorientation.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Micro-teleportation or timeline skipping between eye-shutter frames.',
      },
    ],
  },
  {
    id: 'ts-67',
    name: 'Walking Lights Mimic',
    description: 'Lights that behave as if imitating human movement',
    categoryId: 'truly-strange',
    icon: '💡',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Small orbs drift through forests, fields, or backroads — matching the pace of hikers, pausing when they pause, fleeing when chased.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Possible fireflies, reflections, or distant vehicle lights distorted by terrain.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Some propose sentient atmospheric organisms or reconnaissance lights from unknown origins.',
      },
    ],
  },
  {
    id: 'ts-68',
    name: 'Human-Shaped Air Gaps',
    description: 'Humanoid distortions in air, like invisible figures',
    categoryId: 'truly-strange',
    icon: '🌫️',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Witnesses see clear outlines in the air — heat-shimmer figures walking, standing, or leaning.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Heat waves, refraction, or pareidolia.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Cloaked beings or entities vibrating just outside visible wavelengths.',
      },
    ],
  },
  {
    id: 'ts-69',
    name: 'People Walking Out Photos',
    description: 'Photographs showing subjects stepping out of the frame',
    categoryId: 'truly-strange',
    icon: '🖼️',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Picture frames that show figures in slightly different positions each viewing — or appearing halfway through stepping into the room.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Memory reconstruction or changes in lighting affecting perception.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Temporal echoes bleeding into the present or “recorded moments” coming alive.',
      },
    ],
  },
  {
    id: 'ts-70',
    name: 'People Waking Wrong House',
    description: 'Individuals waking up in unfamiliar homes before reality corrects',
    categoryId: 'truly-strange',
    icon: '🏚️',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'People awaken in a different home layout — unfamiliar walls, objects, or people — before everything snaps back to normal.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Sleep inertia mixing dreams into waking reality.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Brief existence in a parallel life where the sleeper “woke up in the wrong save file.”',
      },
    ],
  },
  {
    id: 'ts-71',
    name: 'Geometry Distortion Rooms',
    description: 'Rooms warping size, angle, or shape impossibly',
    categoryId: 'truly-strange',
    icon: '📐',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Walls bend, ceilings lower, or whole rooms deepen as if shifting dimensions temporarily.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Spatial misperception under stress or fatigue.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Dimensional elasticity or architectural instability at reality’s boundaries.',
      },
    ],
  },
  {
    id: 'ts-72',
    name: 'Floating Silhouettes',
    description: 'Levitation-like silhouettes drifting across spaces',
    categoryId: 'truly-strange',
    icon: '🕴️',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Flat shadows or full silhouettes drift a few feet above ground in hallways, woods, or over roads.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Hypnagogic hallucinations or mistaken shadow projection.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Entities caught in partial decoupling from physical space.',
      },
    ],
  },
  {
    id: 'ts-73',
    name: 'Shadow Gap Light Avoid',
    description: 'Shadow shapes behaving as if avoiding illumination',
    categoryId: 'truly-strange',
    icon: '🌑',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Shadows shift positions against light sources, creating the impression of something dodging light.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Contrast illusions or dynamic low-light motion blur.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Negative-space entities feeding on darkness.',
      },
    ],
  },
  {
    id: 'ts-74',
    name: 'Stairway Moves Locations',
    description: 'Staircases appearing in new locations day-to-day',
    categoryId: 'truly-strange',
    icon: '🪜',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Residents swear stairs were on one side yesterday but are on the other today — or missing entirely.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Memory error or misremembered floorplans.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Spatial shifting from dimensional instability.',
      },
    ],
  },
  {
    id: 'ts-75',
    name: 'Temporal Flickering Swaps',
    description: 'Reality oscillating between multiple possible states',
    categoryId: 'truly-strange',
    icon: '⚡',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Objects, people, or rooms flicker between variations like alternate cuts of reality.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Dissociation or perceptual jump-cutting.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Micro-timeline interference or dimensional overlap.',
      },
    ],
  },
  {
    id: 'ts-76',
    name: 'Time-Loop Doorways',
    description: 'Doorways that reset the moment upon passing through',
    categoryId: 'truly-strange',
    icon: '🔁',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'People walk through a door and immediately re-enter the same space as if looping, sometimes for minutes.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Disorientation or fugue-state navigation.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Threshold-level temporal recursion zones.',
      },
    ],
  },
  {
    id: 'ts-77',
    name: 'Reverse Rain Upward',
    description: 'Rain visibly rising from ground to sky',
    categoryId: 'truly-strange',
    icon: '🌧️',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Droplets accelerate upward, as though gravity inverts briefly.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Wind tunnels or optical misinterpretation.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Physics-desync events or local gravity inversion.',
      },
    ],
  },
  {
    id: 'ts-78',
    name: 'Rooms Tilt Gravity',
    description: 'Gravity shifts sideways or downward unexpectedly',
    categoryId: 'truly-strange',
    icon: '📦',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'People slide toward walls, feel pulled off-center, or see objects roll in impossible directions.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Inner ear disturbances or vertigo.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Localized gravitational vector anomalies.',
      },
    ],
  },
  {
    id: 'ts-79',
    name: 'Rooms Larger Inside',
    description: 'Inside of rooms far larger than exterior suggests',
    categoryId: 'truly-strange',
    icon: '🚪',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Individuals enter rooms that stretch far beyond the visible exterior — sometimes doubling or tripling spatial volume.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Memory mismatch or external dimension misjudgment.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Dimensional pocket expansion zones.',
      },
    ],
  },
  {
    id: 'ts-80',
    name: 'Reflection Entities Only',
    description: 'Beings visible solely through mirrored surfaces',
    categoryId: 'truly-strange',
    icon: '🪞',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Figures stand behind the viewer in the mirror but vanish when looking directly.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Visual lag or expectation-induced hallucination.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Entities inhabiting “reflection planes” adjacent to ours.',
      },
    ],
  },
  {
    id: 'ts-81',
    name: 'Soundless Scream Apparitions',
    description: 'Entities seen screaming silently yet emotionally intense',
    categoryId: 'truly-strange',
    icon: '😱',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Apparitions open their mouths in terror or rage but emit no sound — yet witnesses feel the emotional impact.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Sleep paralysis or muted dream imagery overflow.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Beings from a “no-sound” dimension interfacing poorly with ours.',
      },
    ],
  },
  {
    id: 'ts-82',
    name: 'Stick Figures Treeline',
    description: 'Thin humanoid outlines appearing among the trees',
    categoryId: 'truly-strange',
    icon: '🌲',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Tall skeletal shapes stand motionless among trees, vanishing instantly when approached.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Branches, shadows, pareidolia.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Forest-bound observers of unknown origin.',
      },
    ],
  },
  {
    id: 'ts-83',
    name: 'Transparent Humanoids Cities',
    description: 'Glass-like beings moving through urban crowds unnoticed',
    categoryId: 'truly-strange',
    icon: '👁️',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Witnesses notice body-shaped refractions walking through crowds, only visible through angled reflections.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Heat distortion or reflective glare effects.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Adjacent-population beings overlapping with our density.',
      },
    ],
  },
  {
    id: 'ts-84',
    name: 'Unplaceable Known Voices',
    description: 'Hearing clear voices of familiar people with no source',
    categoryId: 'truly-strange',
    icon: '🗣️',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Your mother calling your name when she’s miles away. A friend whispering from an empty hallway.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Auditory hallucination + memory association.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Cross-timeline leakage or psychic resonance from alternate selves.',
      },
    ],
  },
  {
    id: 'ts-85',
    name: 'Walking Lights Mimic (Variant)',
    description: 'Behavioral mimicry from luminous entities',
    categoryId: 'truly-strange',
    icon: '🔆',
    sections: [
      {
        title: 'Examples & Cases',
        content:
          'Lights mirror gestures, jump side to side, or mimic hand movements.',
      },
      {
        title: 'Psychological Insights',
        content:
          'Reflections, insects, or trick of depth perception.',
      },
      {
        title: 'Alternative Theories',
        content:
          'Intelligent plasma-like organisms or nonphysical observers.',
      },
    ],
  },
];

export const getTrulyStrangeById = (id: string): TrulyStrangeTopic | undefined => {
  return trulyStrangeData.find(strange => strange.id === id);
};

export const getTrulyStrangeByName = (name: string): TrulyStrangeTopic | undefined => {
  return trulyStrangeData.find(strange => strange.name.toLowerCase() === name.toLowerCase());
};

/**
 * Get all truly strange topics
 * @returns Array of all truly strange topics
 */
export const getAllTrulyStrange = (): readonly TrulyStrangeTopic[] => {
  return trulyStrangeData;
};

/**
 * Get count of truly strange topics
 * @returns Total number of truly strange topics
 */
export const getTrulyStrangeCount = (): number => {
  return trulyStrangeData.length;
};
