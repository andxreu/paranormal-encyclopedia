// data/paranormal/codex.ts
/**
 * Codex Data
 * Deep dives into complex paranormal phenomena and theories
 * 
 * Covers modern mysteries, metaphysical concepts, and fringe theories
 */

import type { TopicSection } from './types';

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
    name: 'Ley Line Theory',
    description: 'Energy pathways said to connect sacred and haunted sites across the world',
    category: 'Earth Mysteries',
    sections: [
      {
        title: 'Planetary Energy Grid',
        content: 'Ley lines are believed to form an invisible network of straight energy paths crisscrossing the Earth, linking ancient monuments, burial mounds, stone circles, and holy wells. Many cultures built temples and ritual structures along these alignments as if sensing a subtle current beneath the land.'
      },
      {
        title: 'Sacred Alignments',
        content: 'Enthusiasts point to alignments of megaliths, cathedrals, and standing stones as evidence of an old knowledge of these currents. Pilgrimage routes, dragon lines in Asian traditions, and songlines in Indigenous lore are often interpreted as different expressions of the same underlying idea.'
      },
      {
        title: 'Energetic Effects',
        content: 'Experiencers report tingling sensations, vivid dreams, heightened intuition, and increased paranormal activity near ley line crossings. Some sites are described as healing and luminous, while others feel heavy or unsettling, suggesting that not all currents are alike.'
      }
    ]
  },
  {
    id: 'cd-2',
    name: 'Portal and Vortex Zones',
    description: 'Locations believed to act as gateways between dimensions or realms',
    category: 'Interdimensional Phenomena',
    sections: [
      {
        title: 'Places Where Reality Thins',
        content: 'Portal and vortex zones are described as spots where the boundary between dimensions is thinner than usual. People report time slips, vanishing paths, strange weather, and sudden emotional shifts, as though they have stepped into a different layer of reality.'
      },
      {
        title: 'Signs of a Vortex',
        content: 'Common signs include spiraling wind patterns on still days, animals avoiding specific spots, odd electromagnetic readings, and repeated reports of apparitions or lights in the same area. Sensitive visitors often describe a “pull” or dizziness near the heart of the vortex.'
      },
      {
        title: 'Uses and Dangers',
        content: 'Mystical traditions describe using these zones for spirit contact, astral travel, or vision quests. At the same time, many warn about disorientation, energetic drain, or encounters with non-human intelligences, viewing portals as powerful but unpredictable.'
      }
    ]
  },
  {
    id: 'cd-3',
    name: 'Residual Hauntings',
    description: 'Energy recordings of past events replaying in the present',
    category: 'Hauntology',
    sections: [
      {
        title: 'Echoes in the Walls',
        content: 'A residual haunting is often described as a psychic “recording” of a powerful event or emotion stamped into a place. Witnesses see the same figure walk the same route, hear the same footsteps on the same stair, or catch fragments of a long-ago argument with no awareness from the apparition itself.'
      },
      {
        title: 'Characteristics',
        content: 'Residual phenomena usually do not react to people. The figures seem unaware of observers, never change their routine, and may repeat on specific dates, times, or environmental conditions. It behaves more like a looped video than a conscious spirit.'
      },
      {
        title: 'The Stone Tape Idea',
        content: 'The “stone tape” concept proposes that materials like stone, brick, and water can absorb emotional and psychic energy and later replay it. While not proven in mainstream science, it remains one of the most widely used models for explaining non-interactive hauntings.'
      }
    ]
  },
  {
    id: 'cd-4',
    name: 'Intelligent Hauntings',
    description: 'Spirits or entities that respond to the living with awareness',
    category: 'Spiritual Phenomena',
    sections: [
      {
        title: 'Interactive Presence',
        content: 'In an intelligent haunting, the entity appears to notice, respond to, or even anticipate the actions of the living. Witnesses report direct communication through knocks, EVPs, visions, dreams, or apparitions that change behavior based on questions or emotions.'
      },
      {
        title: 'Communication Methods',
        content: 'Common interaction methods include object manipulation, meaningful patterns of knocks, flickering lights on request, and responses captured on audio. Mediums report impressions, names, and memories that match the history of the place or the deceased.'
      },
      {
        title: 'Motivations',
        content: 'Theories suggest that intelligent spirits may linger due to unfinished business, strong emotional ties, duty, or a desire to protect loved ones. Others may be confused, attached to familiar locations, or drawn to the attention of investigators.'
      }
    ]
  },
  {
    id: 'cd-5',
    name: 'Astral Projection',
    description: 'The practice of consciously leaving the body to travel in non-physical realms',
    category: 'Psychic Phenomena',
    sections: [
      {
        title: 'Separation of Awareness',
        content: 'Astral projection is the experience of one’s awareness detaching from the physical body and moving through an “astral” or subtle plane. Practitioners often describe floating above their bodies, traveling through their homes, or visiting distant locations with vivid clarity.'
      },
      {
        title: 'Common Experiences',
        content: 'Many report vibrations, buzzing, or a sense of heaviness followed by sudden lightness as they separate. Others describe seeing a cord of light connecting them to the physical body, meeting guides or deceased relatives, or entering landscapes with dreamlike but consistent physics.'
      },
      {
        title: 'Practices and Safeguards',
        content: 'Techniques include meditation, trance work, lucid dreaming, and visualization methods such as the “rope technique.” Many traditions emphasize grounding, protection prayers, and clear intentions before leaving the body, treating astral travel as a serious spiritual discipline rather than a casual thrill.'
      }
    ]
  },
  {
    id: 'cd-6',
    name: 'Akashic Records',
    description: 'A metaphysical archive said to contain every thought, action, and event',
    category: 'Esoteric Knowledge',
    sections: [
      {
        title: 'The Cosmic Library',
        content: 'The Akashic Records are described as a vast energetic archive storing the memory of every soul, event, and possibility. Rather than a physical library, they are seen as a subtle field that can be accessed through altered states of consciousness.'
      },
      {
        title: 'Accessing the Records',
        content: 'Mystics, mediums, and intuitives use meditation, prayer, ritual, and guided visualization to reach the Records. Those who claim to access them report receiving symbolic imagery, direct knowing, or conversations with guides who help interpret what is shown.'
      },
      {
        title: 'Purpose and Ethics',
        content: 'The Records are said to hold information about soul lessons, karmic patterns, and future potentials rather than fixed fates. Ethical traditions emphasize consent, privacy, and using Akashic insights for healing, growth, and understanding rather than control.'
      }
    ]
  },
  {
    id: 'cd-7',
    name: 'Thoughtforms and Tulpas',
    description: 'Constructs created from focused intent and repeated visualization',
    category: 'Mind and Manifestation',
    sections: [
      {
        title: 'From Idea to Entity',
        content: 'Thoughtforms are mental constructs given shape and energy through intense focus. Over time, they are believed to develop a kind of semi-autonomy, acting according to their original purpose or the emotions that created them.'
      },
      {
        title: 'Tibetan and Modern Perspectives',
        content: 'In Tibetan traditions, intentional constructs can be created through disciplined visualization over long periods. In modern “tulpamancy” communities, people cultivate inner companions through structured dialogue and attention, often reporting distinct personalities emerging over time.'
      },
      {
        title: 'Risks and Responsibilities',
        content: 'Most systems stress that thoughtforms should be created consciously and respectfully, with clear boundaries and intentions. Unwanted or chaotic constructs are said to arise from obsessive worry, anger, or grief, contributing to haunting-like phenomena or emotional disturbance.'
      }
    ]
  },
  {
    id: 'cd-8',
    name: 'Egregores',
    description: 'Group-created psychic entities that embody collective beliefs',
    category: 'Occult Phenomena',
    sections: [
      {
        title: 'Collective Mind Made Form',
        content: 'An egregore is described as a psychic entity formed by the thoughts, rituals, and emotions of a group. Over time, it becomes a kind of “group spirit,” influencing members and drawing energy from their attention and actions.'
      },
      {
        title: 'Examples and Expressions',
        content: 'Occult orders, fan communities, political movements, and even brands can develop egregoric qualities. Members may feel a powerful presence associated with the group, as though it has a will and mood of its own.'
      },
      {
        title: 'Empowerment and Control',
        content: 'Groups can intentionally feed an egregore through symbols, chants, repeated imagery, and shared goals. Some traditions teach methods to cleanse, reshape, or dissolve egregores that have become stagnant, oppressive, or parasitic.'
      }
    ]
  },
  {
    id: 'cd-9',
    name: 'Synchronicity',
    description: 'Meaningful coincidences that appear guided rather than random',
    category: 'Psychic Perception',
    sections: [
      {
        title: 'More Than Chance',
        content: 'Synchronicity refers to coincidences that carry personal meaning—numbers repeating at key moments, songs answering unspoken questions, or a needed message appearing exactly when someone is struggling. The events feel orchestrated, as if reality is responding.'
      },
      {
        title: 'Inner and Outer Mirrors',
        content: 'Many experiencers report that synchronicities intensify during spiritual awakening, emotional crisis, or deep prayer. The outer world seems to mirror inner thoughts and feelings, blurring the line between private mind and external events.'
      },
      {
        title: 'Possible Sources',
        content: 'Explanations range from a shared unconscious field to guidance from spirits, ancestors, or higher aspects of the self. Even when natural explanations exist, the deep personal resonance of these moments leads many to view them as signs, confirmations, or course-corrections.'
      }
    ]
  },
  {
    id: 'cd-10',
    name: 'Ultra-Terrestrial Hypothesis',
    description: 'The idea that many “aliens” and entities originate from hidden layers of Earth, not outer space',
    category: 'Entity Theories',
    sections: [
      {
        title: 'Neighbors, Not Visitors',
        content: 'The ultra-terrestrial hypothesis suggests that some non-human intelligences share the planet with us but exist in neighboring dimensions, subterranean realms, or subtle layers of reality. Rather than traveling from distant stars, they slip sideways through the fabric of our world.'
      },
      {
        title: 'Masks and Personas',
        content: 'According to this view, the same core beings may appear through history as fairies, djinn, trickster spirits, or advanced “aliens,” adapting their masks to human expectations. This could explain why different cultures have strikingly similar stories with different costumes.'
      },
      {
        title: 'Motives and Behavior',
        content: 'Ultra-terrestrials are often portrayed as curious, mischievous, protective, or predatory, depending on the tradition. Some researchers see them as guardians of hidden knowledge, others as opportunistic entities that use fear and wonder to feed on attention and emotion.'
      }
    ]
  },
  {
    id: 'cd-11',
    name: 'Shadow People Phenomenon',
    description: 'Dark humanoid figures glimpsed at the edge of perception',
    category: 'Paranormal Entities',
    sections: [
      {
        title: 'Common Features',
        content: 'Shadow people are usually described as tall, human-shaped silhouettes darker than the surrounding darkness. They are often seen in the corner of the eye, in doorways, or at the foot of the bed, vanishing when looked at directly.'
      },
      {
        title: 'Varieties of Shadows',
        content: 'Reports include simple featureless figures, hat-wearing shapes, and forms with glowing eyes. Some seem curious and neutral, while others radiate intense fear or hostility. Unlike typical ghosts, they rarely appear in historical clothing and seem less tied to specific identities.'
      },
      {
        title: 'Interpretations',
        content: 'Theories range from astral parasites and interdimensional scouts to manifestations of repressed emotion or psychic self-defense. Whatever they are, the consistency of reports across cultures suggests a distinct class of entity rather than random illusion.'
      }
    ]
  },
  {
    id: 'cd-12',
    name: 'Psychic Shielding and Protection',
    description: 'Methods used to maintain energetic boundaries against harmful influences',
    category: 'Practical Paranormal',
    sections: [
      {
        title: 'Why Shields Matter',
        content: 'Those who work with spirits, energy, or psychic perception often describe feeling drained, overwhelmed, or targeted if they remain wide open. Shielding practices create a boundary between one’s own field and outside forces, whether human, environmental, or non-physical.'
      },
      {
        title: 'Common Techniques',
        content: 'Visualizing light around the body, invoking protective symbols, using charms or talismans, carrying certain stones or metals, and reciting prayers or mantras are all widely used methods. Many practitioners layer multiple approaches for extra resilience.'
      },
      {
        title: 'Healthy Boundaries',
        content: 'Good shielding is not about fear; it is about clarity. When someone sets firm energetic and emotional boundaries, genuine guidance and contact can still occur—just without the chaos and intrusion that leave many sensitives exhausted.'
      }
    ]
  },
  {
    id: 'cd-13',
    name: 'Psi Sensitivity',
    description: 'The innate or trained ability to sense subtle information beyond the five senses',
    category: 'Psychic Perception',
    sections: [
      {
        title: 'Forms of Psi',
        content: 'Psi sensitivity can appear as clairvoyant visions, telepathic impressions, empathic awareness of others’ emotions, psychometry (reading objects), or knowing things before they happen. Many experiencers don’t have just one ability; instead, several overlap.'
      },
      {
        title: 'Awakening and Training',
        content: 'Sensitivity often strengthens after major life events, spiritual practice, or near-death experiences. Training focuses on quieting the mind, noticing subtle impressions, and discerning genuine psi signals from imagination or fear.'
      },
      {
        title: 'Living With Sensitivity',
        content: 'Highly sensitive people may need extra grounding, alone time, and protective practices to avoid burnout. When respected and managed, psi can become a powerful tool for guidance, healing, and navigating the unseen currents of daily life.'
      }
    ]
  },
  {
    id: 'cd-14',
    name: 'Vibration and Frequency Model',
    description: 'The idea that beings and realms exist at different energetic frequencies',
    category: 'Energy Metaphysics',
    sections: [
      {
        title: 'A Layered Universe',
        content: 'In the vibration model, reality is made of layers of frequency, from dense physical matter to increasingly subtle planes. Spirits, guides, and non-human entities are said to exist on higher or parallel bands, normally invisible until frequencies align.'
      },
      {
        title: 'Shifting States',
        content: 'Meditation, music, ritual, ecstatic movement, intense emotion, and altered states can raise or shift personal frequency, making contact easier. Likewise, fear, heavy environments, and exhaustion can pull frequency downward and attract draining influences.'
      },
      {
        title: 'Explaining Phenomena',
        content: 'This model is used to explain why some people see ghosts where others see nothing, why certain places always feel “off,” and why paranormal events often cluster around strong emotional or spiritual activity.'
      }
    ]
  },
  {
    id: 'cd-15',
    name: 'Temporal Echo Theory',
    description: 'The concept that time can fold, allowing glimpses of other eras',
    category: 'Time Anomalies',
    sections: [
      {
        title: 'Time as a Landscape',
        content: 'Temporal echo theory treats time not as a straight line, but as a terrain with hills, valleys, and folds. Under certain conditions, two different eras may briefly brush against each other, allowing people to see, hear, or even walk through scenes from the past or future.'
      },
      {
        title: 'Characteristics of Time Slips',
        content: 'Witnesses describe sudden shifts in light, sound, and atmosphere: streets going quiet, colors changing, people in outdated clothing appearing solid and real, then vanishing. Often, no one else nearby notices anything unusual.'
      },
      {
        title: 'Residual vs. Active Echoes',
        content: 'Some echoes feel like fixed recordings, while others seem to involve living people on both sides. In rare stories, those in the “other time” appear to notice the intruder, suggesting more than a one-way replay.'
      }
    ]
  },
  {
    id: 'cd-16',
    name: 'Psychopomps and Soul Guides',
    description: 'Beings whose role is to escort the dead between worlds',
    category: 'Afterlife Lore',
    sections: [
      {
        title: 'Ancient Role',
        content: 'Many cultures describe specific beings—spirits, deities, animals, or ancestral figures—who guide souls after death. Their task is to help the newly dead cross rivers, bridges, tunnels, or thresholds into the next realm without becoming lost.'
      },
      {
        title: 'Modern Encounters',
        content: 'Near-death experiencers often report relatives, radiant figures, or animal companions arriving to escort them. Mediums describe guides appearing at hospital bedsides and accident scenes, waiting patiently until the soul is ready to move on.'
      },
      {
        title: 'Comfort and Continuity',
        content: 'The presence of psychopomps suggests a compassionate structure built into the afterlife process: no one has to cross alone. For the living, this idea offers both comfort and a spiritual framework for understanding visitation dreams and deathbed visions.'
      }
    ]
  },
  {
    id: 'cd-17',
    name: 'Ancestral Reverence and Spirit Lines',
    description: 'The belief that ancestors remain active in the lives of their descendants',
    category: 'Spiritual Lineage',
    sections: [
      {
        title: 'Living Bloodlines',
        content: 'Ancestral traditions hold that those who came before us are not gone—they stand just beyond the veil, influencing luck, protection, health, and guidance. Family lines are seen as spiritual rivers, with the living and the dead sharing one continuous current.'
      },
      {
        title: 'Offerings and Contact',
        content: 'Practices include altars with photos and heirlooms, shared meals, candles, incense, and spoken prayers. Dreams are a common channel: ancestors may offer warnings, blessings, or teachings that carry the feel of deep recognition.'
      },
      {
        title: 'Healing the Line',
        content: 'Many systems teach that unresolved traumas can pass down the line energetically. By acknowledging, honoring, and healing ancestral wounds, the living can shift patterns for future generations—and, some believe, bring peace to the dead as well.'
      }
    ]
  },
  {
    id: 'cd-18',
    name: 'Astral Parasites',
    description: 'Non-physical entities believed to feed on emotional and psychic energy',
    category: 'Metaphysical Entities',
    sections: [
      {
        title: 'Feeding on Emotion',
        content: 'Astral parasites are described as formless or shape-shifting entities that attach to people, places, or groups and feed on fear, anger, grief, or obsession. They are drawn to turbulence the way insects are drawn to light.'
      },
      {
        title: 'Signs of Attachment',
        content: 'Common signs include sudden mood crashes, recurring intrusive thoughts, disturbed sleep, and a sense of being watched or drained with no clear cause. Activity often spikes during stress, conflict, or substance abuse.'
      },
      {
        title: 'Clearing and Prevention',
        content: 'Protective traditions recommend cleansing rituals, firm emotional boundaries, cutting cords, and choosing environments and relationships that do not constantly generate chaos. When the “food source” dries up, parasites weaken and release their hold.'
      }
    ]
  },
  {
    id: 'cd-19',
    name: 'Dream Gateways',
    description: 'The use of dreams as portals for contact, travel, and messages',
    category: 'Oneiric Phenomena',
    sections: [
      {
        title: 'More Than Imagination',
        content: 'Many experiencers report dreams that feel more real than waking life—consistent locations, recurring guides, detailed lessons, or meetings with the dead. These dreams function like gateways, opening into shared or stable realms rather than random subconscious imagery.'
      },
      {
        title: 'Lucid and Initiatory Dreams',
        content: 'Lucid dreams, where the dreamer becomes aware and can act with intention, are often used to explore spiritual landscapes, ask questions, or confront fears. Initiatory dreams may come uninvited, marking turning points with symbolic death, rebirth, or encounters with powerful beings.'
      },
      {
        title: 'Dream Hygiene',
        content: 'Keeping a dream journal, setting clear intentions before sleep, and cleansing the sleeping space can strengthen the dream gateway in constructive ways. Many traditions consider the dream world a training ground for both psychic development and afterlife navigation.'
      }
    ]
  },
  {
    id: 'cd-20',
    name: 'Shadow Ecology',
    description: 'A model where paranormal activity responds to human emotion, belief, and attention',
    category: 'Para-Theoretical Models',
    sections: [
      {
        title: 'Hauntings as Ecosystems',
        content: 'Shadow Ecology views paranormal phenomena as part of an energetic ecosystem. Human emotions, stories, and rituals act like weather patterns, feeding certain entities and starving others, shaping which manifestations appear in a given place.'
      },
      {
        title: 'Attention as Fuel',
        content: 'Investigations, media coverage, and repeated storytelling can intensify activity by focusing collective attention. In this view, fear and fascination are resources: the more people think about a site or entity, the more vivid and persistent it can become.'
      },
      {
        title: 'Working With the System',
        content: 'Instead of treating hauntings as random intrusions, Shadow Ecology encourages people to look at the relationships between land, history, trauma, belief, and behavior. Changing how a community relates to a place—through respect, healing, or conscious ritual—can gradually transform the activity that occurs there.'
      }
    ]
  },
  {
    id: 'cd-21',
    name: 'Energetic Imprinting',
    description: 'The idea that human emotion and trauma leave lasting energetic signatures on places',
    category: 'Hauntology',
    sections: [
      {
        title: 'The Psychic Residue',
        content: 'Energetic imprinting proposes that powerful emotions—fear, grief, rage, devotion—can embed themselves into objects, rooms, or landscapes. These impressions remain long after the original event, influencing the atmosphere and triggering paranormal perception.'
      },
      {
        title: 'Imprints vs. Spirits',
        content: 'Unlike intelligent hauntings, imprints behave like emotional echoes rather than conscious beings. They may replay sensations or moods, causing visitors to feel sudden sadness, heaviness, or anxiety with no obvious source.'
      },
      {
        title: 'Sensitivity and Activation',
        content: 'People with heightened intuition tend to sense imprints more vividly. Renovation, excavation, storms, or emotionally charged gatherings can reactivate dormant impressions, making them seem newly alive.'
      }
    ]
  },
  {
    id: 'cd-22',
    name: 'The Collective Unconscious',
    description: 'A shared psychic reservoir underlying all human minds',
    category: 'Psycho-Spiritual Theory',
    sections: [
      {
        title: 'A Shared Dreamscape',
        content: 'The collective unconscious, as described by Jung, refers to a buried layer of mind shared by all humans. It contains ancestral memories, archetypes, and universal symbols that shape dreams, myths, and even paranormal encounters.'
      },
      {
        title: 'Archetypal Beings',
        content: 'Angels, shadow figures, tricksters, and guides appear consistently across cultures. Some researchers propose that these forms arise from the collective unconscious itself, while others argue they are independent beings who use archetypes as “interfaces” to communicate.'
      },
      {
        title: 'Paranormal Overlap',
        content: 'Synchronicity, shared visions, and psychic connections may occur when individuals tap into this deep, interconnected layer of mind—a place where personal boundaries blur and meaning flows freely.'
      }
    ]
  },
  {
    id: 'cd-23',
    name: 'The Etheric Body',
    description: 'A subtle energetic layer surrounding the physical body',
    category: 'Subtle Anatomy',
    sections: [
      {
        title: 'The First Layer',
        content: 'The etheric body is believed to be the energetic blueprint of the physical form. It regulates vitality, health, and energetic flow. Sensitive individuals perceive it as a faint glow or vibration surrounding the body.'
      },
      {
        title: 'Interaction with Spirits',
        content: 'Spirit contact, healing work, and psychic perception often occur through the etheric layer. Disturbances here can manifest as fatigue, illness, anxiety, or misalignment even when no physical cause is present.'
      },
      {
        title: 'Strengthening the Etheric Field',
        content: 'Meditation, breathwork, grounding, diet, and connection with nature are said to fortify the etheric body, making a person more resilient to psychic intrusion or energetic drain.'
      }
    ]
  },
  {
    id: 'cd-24',
    name: 'Astral Wildlife',
    description: 'Non-human entities that inhabit the astral plane',
    category: 'Metaphysical Entities',
    sections: [
      {
        title: 'Beyond Human Spirits',
        content: 'Not all entities encountered during astral travel are human or even humanoid. Many describe encountering animal-like beings, shifting forms, luminous shapes, and consciousnesses with motives unrelated to human concerns.'
      },
      {
        title: 'Neutral to Curious',
        content: 'Most astral wildlife is believed to be neutral, neither benevolent nor malicious. They may investigate travelers the way animals approach new scents—curious, cautious, and reactive to emotional tone.'
      },
      {
        title: 'Avoiding Entanglement',
        content: 'Experienced travelers emphasize maintaining emotional clarity. Strong fear or aggression can attract predatory astral creatures, while calm observation allows movement without disruption.'
      }
    ]
  },
  {
    id: 'cd-25',
    name: 'Frequency Bleedthrough',
    description: 'Moments when different layers of reality overlap',
    category: 'Interdimensional Phenomena',
    sections: [
      {
        title: 'Cross-Realm Contact',
        content: 'Frequency bleedthrough occurs when two or more realms temporarily align, allowing entities, sounds, or images to appear where they ordinarily would not. This can explain fleeting apparitions, phantom voices, and sudden atmospheric shifts.'
      },
      {
        title: 'Natural or Triggered?',
        content: 'Bleedthrough may happen naturally at dusk, dawn, solstices, or geomagnetic peaks. Rituals, emotional intensity, or accidents can also trigger temporary alignment between realms.'
      },
      {
        title: 'Witness Variability',
        content: 'Not everyone observes the same event; those whose personal frequency aligns more closely with the overlapping realm are far more likely to perceive the anomaly.'
      }
    ]
  },
  {
    id: 'cd-26',
    name: 'The World Tree Archetype',
    description: 'A symbolic structure linking heaven, earth, and the underworld',
    category: 'Mythic Cosmology',
    sections: [
      {
        title: 'Axis of Realms',
        content: 'The World Tree, known as Yggdrasil, Ceiba, Irminsul, or the Tree of Life in various cultures, is a universal symbol for the connection between realms. Its branches reach skyward while its roots dig into the unseen worlds below.'
      },
      {
        title: 'Shamanic Pathways',
        content: 'Visions of climbing or descending a great tree appear in shamanic journeys worldwide. The branches lead to higher realms of guidance, while the roots lead to ancestral and hidden knowledge.'
      },
      {
        title: 'Energetic Structure',
        content: 'Some esoteric systems treat the World Tree not as metaphor but as a map of the subtle structure of reality, with pathways corresponding to energetic meridians or astral highways.'
      }
    ]
  },
  {
    id: 'cd-27',
    name: 'Karmic Echoes',
    description: 'The belief that actions create energetic ripples that return over time',
    category: 'Spiritual Law',
    sections: [
      {
        title: 'Cause and Resonance',
        content: 'Karmic echoes occur when past actions—whether from this life or others—reverberate into the present. These echoes may appear as repeating patterns, life lessons, synchronicities, or opportunities for healing.'
      },
      {
        title: 'Lessons Over Punishment',
        content: 'Karma is often misunderstood as retribution. Many spiritual traditions teach it instead as an educational force—situations arise so individuals can grow, release, or realign with their deeper values.'
      },
      {
        title: 'Clearing Karma',
        content: 'Intentional acts of forgiveness, ritual cleansing, compassionate action, and self-reflection can shift karmic momentum, opening new pathways and easing spiritual burdens.'
      }
    ]
  },
  {
    id: 'cd-28',
    name: 'Dreamwalking',
    description: 'The ability to enter or interact with the dreams of others',
    category: 'Oneiric Phenomena',
    sections: [
      {
        title: 'Shared Dream Spaces',
        content: 'Dreamwalking traditions teach that dreams are not strictly private. Skilled practitioners claim to enter another person’s dream to deliver messages, provide comfort, or explore shared dreamscapes with full awareness.'
      },
      {
        title: 'Signs of a Dream Visitor',
        content: 'Dreamers may recall hyper-real encounters, sudden clarity within a dream, or conversations that feel distinctly external rather than symbolic. Two people may even report the same dream independently.'
      },
      {
        title: 'Ethical Considerations',
        content: 'Traditions emphasize consent and restraint. Entering dreams uninvited is considered intrusive, and many systems include protective methods to shield one’s dreams from unwanted visitors.'
      }
    ]
  },
  {
    id: 'cd-29',
    name: 'The Subconscious Gatekeeper',
    description: 'A psychological-energetic filter that manages paranormal perception',
    category: 'Psychic Perception',
    sections: [
      {
        title: 'Filtering the Unseen',
        content: 'The gatekeeper serves as an inner protector, filtering out psychic impressions that a person is not ready to process. When it relaxes—through trauma, exhaustion, ritual, or training—paranormal perception often increases.'
      },
      {
        title: 'Overactive vs. Underactive',
        content: 'An overactive gatekeeper can block intuition and result in emotional numbness. An underactive one may lead to overwhelming psychic input, erratic dreams, or difficulty distinguishing inner impressions from external energies.'
      },
      {
        title: 'Working With the Gatekeeper',
        content: 'Meditation, journaling, and guided visualization help align the conscious mind with the gatekeeper, allowing gradual, controlled opening of psychic channels.'
      }
    ]
  },
  {
    id: 'cd-30',
    name: 'Living Ghosts',
    description: 'Spirits or doubles of people who are still alive',
    category: 'Paranormal Entities',
    sections: [
      {
        title: 'The Spirit Double',
        content: 'Reports of “living ghosts” involve apparitions that resemble living individuals, often appearing at moments of crisis, emotional intensity, or near-death experiences. They may function as a subconscious projection or a protective extension of the person’s spirit.'
      },
      {
        title: 'Bilocation',
        content: 'Mystics and saints across various traditions describe appearing in two places at once. Witnesses report interacting with these doubles as though they were fully physical.'
      },
      {
        title: 'Purposes and Messages',
        content: 'Living ghosts often appear to deliver warnings, say farewells, or guide loved ones through danger, suggesting a deep psychic connection rather than coincidence.'
      }
    ]
  },
  {
    id: 'cd-31',
    name: 'Spiritual Attachments',
    description: 'Entities that bond to individuals, feeding on energy or influencing behavior',
    category: 'Spiritual Phenomena',
    sections: [
      {
        title: 'Forms of Attachment',
        content: 'Attachments may arise from trauma, addiction, grief, or places of intense emotional residue. They range from benign hitchhikers to draining parasitic entities that influence thoughts or moods.'
      },
      {
        title: 'Symptoms',
        content: 'Sudden personality shifts, unexplained fatigue, obsessive thoughts, or uncharacteristic cravings may indicate an attachment. Many experiencers describe a sense of intrusion or “not feeling like themselves.”'
      },
      {
        title: 'Releasing Attachments',
        content: 'Clearing methods include cleansing rituals, energy healing, therapy, boundary-setting, and spiritual intervention. Healing underlying emotional wounds often prevents reattachment.'
      }
    ]
  },
  {
    id: 'cd-32',
    name: 'Energetic Cords',
    description: 'Invisible connections formed between people and places',
    category: 'Subtle Anatomy',
    sections: [
      {
        title: 'Connections That Bind',
        content: 'Energetic cords form through emotional bonds, shared experiences, trauma, or repeated interaction. These cords can transmit emotions or drain energy long after physical contact ends.'
      },
      {
        title: 'Types of Cords',
        content: 'Positive cords enhance connection, empathy, and love. Negative or entangling cords can cause exhaustion, recurring thoughts, or difficulty detaching from relationships or events.'
      },
      {
        title: 'Cord Cutting',
        content: 'Rituals for severing unhealthy cords emphasize forgiveness, self-healing, and reclaiming personal energy. The goal is not to erase memories but to restore autonomy and balance.'
      }
    ]
  },
  {
    id: 'cd-33',
    name: 'Spontaneous Mediumship',
    description: 'Untrained individuals suddenly experiencing spirit communication',
    category: 'Psychic Phenomena',
    sections: [
      {
        title: 'Unexpected Openings',
        content: 'Some people report sudden onset of mediumistic abilities after trauma, illness, childbirth, or near-death experiences. Messages, visions, or voices may emerge without prior interest in the paranormal.'
      },
      {
        title: 'Challenges',
        content: 'This sudden openness can feel overwhelming—disturbed sleep, emotional flooding, and intrusive impressions are common until skills develop to control the flow.'
      },
      {
        title: 'Integration',
        content: 'Grounding, mentorship, and supportive communities help spontaneous mediums gain confidence and discernment as they learn to manage the connection rather than be controlled by it.'
      }
    ]
  },
  {
    id: 'cd-34',
    name: 'Sacred Geometry',
    description: 'Symbolic patterns believed to reflect the structure of the universe',
    category: 'Esoteric Knowledge',
    sections: [
      {
        title: 'Universal Patterns',
        content: 'Sacred geometry includes forms such as the Flower of Life, Metatron’s Cube, and the Golden Ratio—patterns said to underlie creation itself. These shapes appear in art, architecture, nature, and mystical visions worldwide.'
      },
      {
        title: 'Vibrational Language',
        content: 'Some traditions view geometry as the language of vibration. Each form has its own energetic signature that can enhance meditation, alter consciousness, or attract specific types of spiritual contact.'
      },
      {
        title: 'Applications',
        content: 'Sacred geometry is used in talismans, altars, healing rituals, and architectural design to anchor harmony and spiritual resonance in a space.'
      }
    ]
  },
  {
    id: 'cd-35',
    name: 'Sigil Craft',
    description: 'The creation of symbols charged with intention',
    category: 'Occult Practice',
    sections: [
      {
        title: 'Symbols with Purpose',
        content: 'Sigils are personalized symbols crafted to embody a specific intention or desire. Once created, they serve as a psychic anchor for the practitioner’s goal, whether for protection, manifestation, or inner change.'
      },
      {
        title: 'Charging Methods',
        content: 'Ritual methods include meditation, breathwork, ecstatic movement, fire, and moon phases. The sigil becomes “activated” when emotion and focus charge it with psychic energy.'
      },
      {
        title: 'Manifestation Through Forgetting',
        content: 'Some practices recommend releasing conscious thought about the sigil after activation, allowing the intention to move into the subconscious and manifest without interference from doubt or overthinking.'
      }
    ]
  },
  {
    id: 'cd-36',
    name: 'Astral Weather',
    description: 'Shifts in the psychic environment that influence spiritual activity',
    category: 'Paranormal Theory',
    sections: [
      {
        title: 'Energetic Climate',
        content: 'Just as physical weather affects mood and behavior, astral weather influences dreams, intuition, hauntings, and spiritual contact. Storms, geomagnetic disturbances, and lunar cycles appear to correlate with heightened activity.'
      },
      {
        title: 'Patterns and Predictors',
        content: 'Many sensitives report that paranormal encounters peak during solar storms, thunderstorms, and strong emotional events. These conditions may thin the veil or amplify psychic signals.'
      },
      {
        title: 'Using the Forecast',
        content: 'Monitoring geomagnetic data, moon phases, and personal energy rhythms can help practitioners identify favorable times for ritual work, divination, or astral travel.'
      }
    ]
  },
  {
    id: 'cd-37',
    name: 'Memory of Water',
    description: 'The belief that water can store energetic or informational imprints',
    category: 'Fringe Science',
    sections: [
      {
        title: 'Imprinting Capacity',
        content: 'The idea proposes that water can “remember” substances, emotions, or vibrations it has been exposed to, even after dilution. Some healers believe this memory can influence emotions, health, or spiritual experience.'
      },
      {
        title: 'Sacred Springs and Ritual Baths',
        content: 'Cultures around the world use water for cleansing, blessing, and spiritual renewal. These practices rely on the belief that water absorbs intention and transmits healing or purification energy to those who interact with it.'
      },
      {
        title: 'Modern Investigation',
        content: 'Though debated, experiments continue exploring water’s structural responsiveness to sound, thought, and emotion. Photographs of crystalline patterns often serve as visual evidence for these subtle effects.'
      }
    ]
  },
  {
    id: 'cd-38',
    name: 'Liminal Beings',
    description: 'Entities that dwell in threshold places and times',
    category: 'Paranormal Entities',
    sections: [
      {
        title: 'Between Worlds',
        content: 'Liminal beings appear in areas between states—doorways, crossroads, shorelines, twilight hours, and borderlands. Their presence reflects transition, transformation, and the blurring of boundaries between realms.'
      },
      {
        title: 'Types of Liminal Entities',
        content: 'Folklore describes tricksters, guides, guardians, and shapeshifters inhabiting liminal spaces. Their motives can vary wildly: some protect travelers while others test, confuse, or mislead.'
      },
      {
        title: 'Why Thresholds Matter',
        content: 'Thresholds act as natural weak points in the veil. Encounters here may carry deeper symbolism, reflecting inner transitions such as coming-of-age, spiritual awakening, or emotional crossroads.'
      }
    ]
  },
  {
    id: 'cd-39',
    name: 'Psychic Resonance',
    description: 'The phenomenon of tuning into another person’s emotional or mental state',
    category: 'Psychic Perception',
    sections: [
      {
        title: 'Emotional Frequency Matching',
        content: 'Psychic resonance occurs when two individuals “tune” to each other’s emotional wavelength. This may happen between close friends, partners, parents and children, or during intense shared experiences.'
      },
      {
        title: 'Signs of Resonance',
        content: 'Sudden mood shifts that mirror another person’s feelings, knowing when someone is in danger, or receiving impressions during strong emotional events are common indicators.'
      },
      {
        title: 'Strengthening or Reducing Resonance',
        content: 'Meditation, grounding, and emotional boundaries help control resonance. When consciously harnessed, it supports healing, empathy, and deeper connection.'
      }
    ]
  },
  {
    id: 'cd-40',
    name: 'Manifestation Mechanics',
    description: 'A conceptual model for how intention influences reality',
    category: 'Energy Metaphysics',
    sections: [
      {
        title: 'Intention as Force',
        content: 'In manifestation models, focused intention interacts with subtle realms to shape probability. Thoughts combine with emotion and visualization to create a coherent energetic signal.'
      },
      {
        title: 'The Role of Belief',
        content: 'Belief acts as the amplifier or limiter of intention. Doubt fragments the signal, while trust strengthens it. Ritual, symbolism, and repetition help stabilize belief and reinforce psychic momentum.'
      },
      {
        title: 'Real-World Effects',
        content: 'Manifestation does not override free will or physics, but influences pathways and opportunities. Synchronicities, intuitive nudges, and timely encounters often mark the early stages of a successful manifestation.'
      }
    ]
  },
  {
    id: 'cd-41',
    name: 'Astral Architecture',
    description: 'Structures that exist in non-physical realms and appear during deep spiritual states',
    category: 'Metaphysical Realms',
    sections: [
      {
        title: 'Cities of Light',
        content: 'Many mystics describe encountering vast cities made of shifting light, geometric towers, and crystalline bridges during astral travel. These structures seem alive, responding to intention rather than gravity.'
      },
      {
        title: 'Temples and Halls',
        content: 'Repeated reports describe temples, libraries, and ceremonial halls where spiritual beings teach or guide travelers. The architecture varies but often feels ancient, intelligent, and purposeful.'
      },
      {
        title: 'Constructed or Discovered?',
        content: 'Some traditions propose that astral architecture is co-created by collective consciousness, while others assert it is part of a pre-existing spiritual landscape that humans occasionally access.'
      }
    ]
  },
  {
    id: 'cd-42',
    name: 'The Veil',
    description: 'A metaphysical boundary separating the physical world from unseen realms',
    category: 'Interdimensional Phenomena',
    sections: [
      {
        title: 'A Necessary Divider',
        content: 'The Veil is often described as a protective film that limits constant awareness of spirits, energies, and higher dimensions. Without it, the flood of information could overwhelm the human mind.'
      },
      {
        title: 'When the Veil Thins',
        content: 'At certain times—dusk, midnight, Samhain, solstices, moments of grief, childbirth, or liminality—the Veil becomes thinner, allowing increased paranormal encounters and intuitive clarity.'
      },
      {
        title: 'Crossing Points',
        content: 'Doorways, forests, mist, mirrors, and bodies of water are often cited as natural weak points where the Veil is more permeable, allowing glimpses into other realms.'
      }
    ]
  },
  {
    id: 'cd-43',
    name: 'Spiritual Alchemy',
    description: 'The transformation of the inner self through symbolic and energetic processes',
    category: 'Esoteric Practice',
    sections: [
      {
        title: 'The Inner Work',
        content: 'Spiritual alchemy uses symbolic language—lead into gold—to describe the refinement of the soul. Emotional wounds become catalysts for transformation, revealing deeper truth and clarity.'
      },
      {
        title: 'Stages of Transmutation',
        content: 'Traditional steps include purification, dissolution, illumination, and integration. Each stage brings new insights, often accompanied by synchronicities and shifts in awareness.'
      },
      {
        title: 'Modern Applications',
        content: 'Alchemy has evolved into a psychological-spiritual discipline, blending ritual, meditation, shadow work, and energy practices to refine the practitioner’s inner landscape.'
      }
    ]
  },
  {
    id: 'cd-44',
    name: 'Psychic Entanglement',
    description: 'A phenomenon where two individuals remain linked across distance',
    category: 'Psychic Perception',
    sections: [
      {
        title: 'Bonds Beyond Space',
        content: 'Psychic entanglement can form between partners, twins, close friends, or those who shared heightened emotional events. The bond allows one person to feel the other’s emotions or distress from afar.'
      },
      {
        title: 'Indicators of Entanglement',
        content: 'Simultaneous dreams, speaking the same words, sudden mood changes, or knowing the other person’s state before being told are common signs.'
      },
      {
        title: 'Strengthening or Releasing',
        content: 'Meditation, intention-setting, and energy work can strengthen positive entanglements or release unhealthy ones. Awareness is key to understanding the influence the bond exerts.'
      }
    ]
  },
  {
    id: 'cd-45',
    name: 'Astral Mirrors',
    description: 'Reflective surfaces believed to act as gateways or scrying portals',
    category: 'Divination',
    sections: [
      {
        title: 'Mirrors as Thresholds',
        content: 'Across cultures, mirrors hold symbolic power as portals between worlds. In the astral realm, mirrors often appear as gateways through which travelers pass or through which entities observe.'
      },
      {
        title: 'Scrying Practices',
        content: 'Practitioners use dark mirrors, polished obsidian, or water to receive visions, messages, or glimpses of other timelines. These sessions rely on stillness and focused intention.'
      },
      {
        title: 'Protective Measures',
        content: 'Mirrors should be cleansed and covered when not in use. Many traditions warn against leaving a “door” open unintentionally.'
      }
    ]
  },
  {
    id: 'cd-46',
    name: 'Phantom Scents',
    description: 'Unexplained smells associated with spirits or energetic phenomena',
    category: 'Sensory Phenomena',
    sections: [
      {
        title: 'Smells from Nowhere',
        content: 'Witnesses sometimes report sudden scents—flowers, perfume, tobacco, sulfur, or decay—without any physical source. These scents often correlate with spirit presence or emotional memories attached to a location.'
      },
      {
        title: 'Identifying Signatures',
        content: 'Pleasant scents may indicate benevolent spirits or ancestors, while acrid or sulfuric odors are traditionally associated with distress or negative entities.'
      },
      {
        title: 'Energetic Mechanism',
        content: 'Some theories propose that spirits stimulate the brain’s olfactory center directly rather than producing actual airborne particles, creating a vivid sensory impression.'
      }
    ]
  },
  {
    id: 'cd-47',
    name: 'Astral Guardians',
    description: 'Beings that protect sacred places, individuals, or hidden knowledge',
    category: 'Metaphysical Entities',
    sections: [
      {
        title: 'Role of the Guardian',
        content: 'Astral guardians appear as animals, humanoids, or shifting light forms. They protect boundaries, guide travelers, or prevent intrusions by hostile entities. Encounters often carry a sense of ancient authority.'
      },
      {
        title: 'Guardian Selection',
        content: 'Some guardians attach to bloodlines or spiritual practitioners. Others seem bound to locations—temples, forests, or thresholds where the veil is thin.'
      },
      {
        title: 'Working with Guardians',
        content: 'Respect, intention, and humility are emphasized. Guardians respond to sincerity and purpose rather than command or coercion.'
      }
    ]
  },
  {
    id: 'cd-48',
    name: 'The Ether Winds',
    description: 'Subtle currents that influence astral travel and psychic perception',
    category: 'Paranormal Theory',
    sections: [
      {
        title: 'Invisible Currents',
        content: 'Sensitive individuals sometimes describe feeling energetic “winds” that push, pull, or guide them during meditation or astral projection. These winds may indicate shifts in the subtle environment.'
      },
      {
        title: 'Navigational Use',
        content: 'Some practitioners learn to ride these currents, using them to reach deeper realms or avoid turbulent zones associated with fear or chaotic entities.'
      },
      {
        title: 'Environmental Factors',
        content: 'Geomagnetic storms, thunderstorms, and emotional collective energy can intensify ether winds, making astral travel more vivid—and sometimes more difficult.'
      }
    ]
  },
  {
    id: 'cd-49',
    name: 'Time Loops and Anomalies',
    description: 'Occurrences where time appears to repeat, stall, or behave irregularly',
    category: 'Time Phenomena',
    sections: [
      {
        title: 'Temporal Distortion',
        content: 'People report experiencing minutes that feel like hours, or vice versa, often during paranormal encounters. Some describe repeating the same moment twice or witnessing an event before it occurs.'
      },
      {
        title: 'Localized Loops',
        content: 'Certain locations seem prone to repeating sounds, footsteps, or visual scenes without any living source—possibly due to the environment trapping energetic or temporal residue.'
      },
      {
        title: 'Human Influence',
        content: 'Meditation, trauma, or heightened emotion can alter subjective time, potentially opening awareness to moments beyond linear sequence.'
      }
    ]
  },
  {
    id: 'cd-50',
    name: 'The Astral Ocean',
    description: 'A vast, fluid-like realm that connects spiritual dimensions',
    category: 'Metaphysical Realms',
    sections: [
      {
        title: 'A Sea Between Worlds',
        content: 'The Astral Ocean is described as a shimmering expanse of consciousness connecting different planes. Travelers report floating, drifting, or swimming through luminous waters that respond to thought.'
      },
      {
        title: 'Currents and Depths',
        content: 'Shallow astral waters feel gentle and dreamlike, while deeper regions can become intense or overwhelming, populated by powerful beings and archetypal forces.'
      },
      {
        title: 'Symbol or Reality?',
        content: 'Some view the Astral Ocean as metaphor; others insist it is a literal realm encountered during out-of-body experiences. Either way, it remains a foundational concept in many esoteric systems.'
      }
    ]
  },
  {
    id: 'cd-51',
    name: 'Etheric Intrusions',
    description: 'Moments when non-physical entities briefly manifest in physical space',
    category: 'Paranormal Entities',
    sections: [
      {
        title: 'Partial Manifestation',
        content: 'Etheric intrusions occur when a spirit or entity partially intersects with the physical world, creating shadows, distortions, vibrations, or fleeting forms. These events may last fractions of a second.'
      },
      {
        title: 'Environmental Clues',
        content: 'Cold spots, static electricity, flickering lights, and pressure changes often accompany these manifestations, suggesting a temporary blending of dimensions.'
      },
      {
        title: 'Intent or Accident?',
        content: 'Some intrusions appear purposeful, as if the entity is attempting communication. Others seem accidental—like a ripple in a sheet briefly revealing what lies beneath.'
      }
    ]
  },
  {
    id: 'cd-52',
    name: 'Psychic Anchors',
    description: 'Objects or locations that hold concentrated psychic energy',
    category: 'Hauntology',
    sections: [
      {
        title: 'Focused Resonance',
        content: 'Personal items, heirlooms, altars, graves, and ritual sites can absorb emotional or spiritual charge over time. These anchors amplify paranormal perception and serve as focal points for communication.'
      },
      {
        title: 'Positive and Negative Anchors',
        content: 'Some anchors radiate peace and protection, while others carry heavy grief or unresolved tension. The emotional history of the anchor determines the energy it emits.'
      },
      {
        title: 'Cleansing and Activation',
        content: 'Ritual cleansing, intention-setting, and proper placement can transform dormant anchors into tools for meditation, manifestation, or spiritual contact.'
      }
    ]
  },
  {
    id: 'cd-53',
    name: 'Reincarnational Memory',
    description: 'The persistence of past-life experiences in dreams and intuition',
    category: 'Afterlife Lore',
    sections: [
      {
        title: 'Echoes from Before',
        content: 'Some individuals recall vivid scenes, skills, or emotions that seem to belong to another lifetime. These memories may emerge spontaneously or through meditation and regression.'
      },
      {
        title: 'Signs of Past-Life Influence',
        content: 'Phobias without known cause, déjà vu in unfamiliar places, immediate rapport with strangers, or innate talents are often cited as indicators of reincarnational memory.'
      },
      {
        title: 'Healing Through Recall',
        content: 'Understanding past-life wounds or unfinished patterns can help resolve present challenges and free emotional or karmic blockages.'
      }
    ]
  },
  {
    id: 'cd-54',
    name: 'Dream Seed Theory',
    description: 'The idea that dreams plant energetic seeds that manifest in waking life',
    category: 'Oneiric Phenomena',
    sections: [
      {
        title: 'Dreams as Creators',
        content: 'In this model, dreams are not passive but generative; they shape future thoughts, emotions, and even events. A powerful dream can act like a blueprint that unfolds into reality.'
      },
      {
        title: 'Cultivating Seeds',
        content: 'Recording dreams, interpreting symbols, and aligning actions with dream insights can accelerate manifestation. Conversely, ignoring repeated dreams may delay important life lessons.'
      },
      {
        title: 'Shared Seeds',
        content: 'Group dreams or collective visions can create seeds that influence entire communities—a phenomenon noted in indigenous traditions and spiritual movements.'
      }
    ]
  },
  {
    id: 'cd-55',
    name: 'Astral Soundscapes',
    description: 'Music, tones, and voices perceived during spiritual or paranormal experiences',
    category: 'Sensory Phenomena',
    sections: [
      {
        title: 'Voices Without Bodies',
        content: 'Some individuals hear singing, footsteps, whispers, or chimes during meditation, sleep transitions, or haunting events. These sounds often lack any physical source and may carry emotional or symbolic meaning.'
      },
      {
        title: 'Vibrational Information',
        content: 'Tones and frequencies in the astral plane can communicate emotion, guidance, or warnings more directly than words. Some traditions teach specific chants to tune into these higher layers.'
      },
      {
        title: 'Environmental Sensitivity',
        content: 'Old buildings, forests, and sacred sites often amplify astral acoustics, allowing more frequent perception of non-physical sound.'
      }
    ]
  },
  {
    id: 'cd-56',
    name: 'Para-Temporal Entities',
    description: 'Beings that do not exist fully within linear time',
    category: 'Entity Theories',
    sections: [
      {
        title: 'Outside Time',
        content: 'These entities are described as experiencing past, present, and future simultaneously. Encounters may involve sudden flashes of insight, prophetic visions, or beings who speak as though time is irrelevant.'
      },
      {
        title: 'Behavioral Traits',
        content: 'Para-temporal beings often move erratically, appearing in multiple places at once or shifting form. Their presence can cause time distortion or déjà vu.'
      },
      {
        title: 'Motives Unknown',
        content: 'Because they perceive time differently, their interactions with humans may seem cryptic or symbolic rather than direct.'
      }
    ]
  },
  {
    id: 'cd-57',
    name: 'Spiritual Echo Bodies',
    description: 'Temporary energetic forms created during strong emotion or ritual',
    category: 'Energy Metaphysics',
    sections: [
      {
        title: 'Emotional Constructs',
        content: 'During intense emotional moments—grief, rage, devotion—the human energy field can project temporary forms visible to sensitives or cameras. These echoes dissipate quickly but may resemble faint apparitions.'
      },
      {
        title: 'Ritual Projection',
        content: 'Ceremonial practitioners intentionally create echo bodies during trance or invocation, serving as a vessel for communication or manifestation.'
      },
      {
        title: 'Not True Spirits',
        content: 'While visually impressive, echo bodies are not independent entities; they are temporary expressions of human energy.'
      }
    ]
  },
  {
    id: 'cd-58',
    name: 'The Luminous Body',
    description: 'A higher energetic layer associated with spiritual awakening',
    category: 'Subtle Anatomy',
    sections: [
      {
        title: 'Brightness of Spirit',
        content: 'The luminous body is said to glow with increased clarity during moments of profound insight, compassion, or spiritual expansion. It appears in mystical art as halos, auras, or radiant fields.'
      },
      {
        title: 'Activation Events',
        content: 'Near-death experiences, meditation, fasting, and major life transitions can temporarily brighten the luminous body, increasing intuition and psychic sight.'
      },
      {
        title: 'Purpose',
        content: 'This layer acts as a bridge to higher consciousness, enabling communication with guides, ancestors, and transcendent realms.'
      }
    ]
  },
  {
    id: 'cd-59',
    name: 'Spirit Contracts',
    description: 'Agreements made before birth that shape life lessons and relationships',
    category: 'Afterlife Lore',
    sections: [
      {
        title: 'Blueprint of a Lifetime',
        content: 'Spirit contracts lay out key experiences, relationships, and challenges that the soul chooses for growth. These contracts are believed to guide but not rigidly dictate the path.'
      },
      {
        title: 'Recognizing Contracts',
        content: 'Fateful encounters, intense relationships, and recurring obstacles may indicate a contract at play. Many people describe an inner knowing or déjà vu when meeting a contract partner.'
      },
      {
        title: 'Rewriting Agreements',
        content: 'Through healing, intention, and spiritual work, some traditions teach that contracts can be renegotiated or released if they no longer serve growth.'
      }
    ]
  },
  {
    id: 'cd-60',
    name: 'Astral Threshold Guardians',
    description: 'Beings stationed at crossings between realms to test or guide travelers',
    category: 'Metaphysical Entities',
    sections: [
      {
        title: 'Gatekeepers of the Realms',
        content: 'Threshold guardians appear during deep meditation, dream transitions, or astral travel. They may guard gates, tunnels, bridges, or doorways leading to more advanced or hidden realms.'
      },
      {
        title: 'Lessons and Challenges',
        content: 'Encounters often involve symbolic tests—answering questions, demonstrating emotional mastery, or releasing fear. Passing the test grants access to deeper layers of experience.'
      },
      {
        title: 'Benevolent but Firm',
        content: 'Though intimidating, guardians rarely harm travelers. Their presence ensures that unprepared visitors do not stumble into realms they cannot navigate safely.'
      }
    ]
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

/**
 * Get all codex entries
 * @returns Array of all codex entries
 */
export const getAllCodexEntries = (): readonly CodexEntry[] => {
  return codexData;
};

/**
 * Get count of codex entries
 * @returns Total number of codex entries
 */
export const getCodexCount = (): number => {
  return codexData.length;
};

/**
 * Get codex entries by category
 * @param category - Category name
 * @returns Codex entries in that category
 */
export const getCodexByCategory = (category: string): CodexEntry[] => {
  return codexData.filter(entry => 
    entry.category.toLowerCase() === category.toLowerCase()
  );
};