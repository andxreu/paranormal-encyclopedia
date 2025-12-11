// data/paranormal/psychic.ts
/**
 * Psychic Category Data
 * ESP phenomena, remote viewing, and paranormal abilities
 * 
 * Includes: Telepathy, Remote Viewing, Precognition, Psychokinesis, Stargate Project
 */

import { categoryColors } from '@/constants/Colors';
import type { TopicSection, CategoryId } from './types';

export interface PsychicTopic {
  id: string;
  name: string;
  description: string;
  categoryId: CategoryId;
  icon: string;
  sections: TopicSection[];
}

export const psychicData: readonly PsychicTopic[] = [
  {
    id: 'ps-1',
    name: 'Telepathy',
    description: 'Mind-to-mind communication without physical means',
    categoryId: 'psychic',
    icon: '🧠',
    sections: [
      {
        title: 'Experiments & Research',
        content: 'The Ganzfeld experiment tests telepathy by isolating subjects from sensory input. The CIA\'s Stargate Project studied remote viewing and telepathy from 1978-1995. Rhine\'s ESP cards tested telepathic abilities using symbols. Results remain controversial with some showing statistical significance.',
      },
      {
        title: 'Skeptics\' Views',
        content: 'Critics attribute positive results to cold reading, confirmation bias, and statistical anomalies. James Randi offered $1 million to anyone proving psychic abilities under controlled conditions—never claimed. Skeptics argue that replication failures indicate telepathy doesn\'t exist.',
      },
      {
        title: 'Notable Cases',
        content: 'Twin studies show some pairs report telepathic connections. The Maimonides Dream Laboratory conducted experiments in the 1960s-70s with intriguing results. Rupert Sheldrake\'s telephone telepathy experiments showed above-chance success rates. Debate continues in parapsychology circles.',
      },
    ],
  },
  {
    id: 'ps-2',
    name: 'Remote Viewing',
    description: 'The ability to see distant locations psychically',
    categoryId: 'psychic',
    icon: '👁️',
    sections: [
      {
        title: 'Experiments & Research',
        content: 'The Stargate Project trained military personnel in remote viewing protocols. Viewers attempted to describe distant locations using only coordinates. Ingo Swann and Pat Price were among the most successful participants. The program was declassified in 1995.',
      },
      {
        title: 'Skeptics\' Views',
        content: 'The CIA concluded remote viewing showed no actionable intelligence value. Critics cite lack of replication and vague descriptions that could apply to many locations. Skeptics argue successes result from lucky guesses and retrofitting descriptions to targets.',
      },
      {
        title: 'Notable Cases',
        content: 'Pat Price allegedly described a secret Soviet facility with remarkable accuracy. Joe McMoneagle claimed to remote view Mars and Jupiter. The program\'s existence proves government interest, though effectiveness remains debated. Some viewers continue practicing commercially.',
      },
    ],
  },
  {
    id: 'ps-3',
    name: 'Precognition',
    description: 'Seeing events before they happen',
    categoryId: 'psychic',
    icon: '🔮',
    sections: [
      {
        title: 'Experiments & Research',
        content: 'Dean Radin\'s presentiment experiments show physiological responses before random stimuli. Daryl Bem\'s controversial studies suggested people could sense future events. Dream precognition has been studied extensively, with some subjects reporting accurate predictions.',
      },
      {
        title: 'Skeptics\' Views',
        content: 'Critics argue precognition violates causality and physics. Failed replications of Bem\'s studies cast doubt on results. Skeptics attribute apparent precognition to coincidence, false memories, and the tendency to remember hits while forgetting misses.',
      },
      {
        title: 'Notable Cases',
        content: 'Abraham Lincoln allegedly dreamed of his assassination. Many claimed to have premonitions before the Titanic disaster. The Aberfan disaster in Wales was preceded by reported precognitive dreams. Such cases are difficult to verify scientifically.',
      },
    ],
  },
  {
    id: 'ps-4',
    name: 'Psychokinesis',
    description: 'Moving objects with the power of the mind',
    categoryId: 'psychic',
    icon: '✨',
    sections: [
      {
        title: 'Experiments & Research',
        content: 'Princeton\'s PEAR lab studied micro-PK effects on random number generators for 28 years. Nina Kulagina was filmed allegedly moving objects with her mind. Spoon bending experiments with Uri Geller attracted scientific attention. Results remain controversial and difficult to replicate.',
      },
      {
        title: 'Skeptics\' Views',
        content: 'Magicians have replicated PK effects using sleight of hand. James Randi exposed Uri Geller\'s tricks on television. Statistical analyses of RNG experiments show effects too small to be practically significant. Critics argue all PK demonstrations involve fraud or misperception.',
      },
      {
        title: 'Notable Cases',
        content: 'Uri Geller became famous for bending spoons on television. Nina Kulagina\'s demonstrations were filmed by Soviet scientists. The Philip Experiment allegedly created a thoughtform through group concentration. Poltergeist cases sometimes involve apparent PK effects.',
      },
    ],
  },
  {
    id: 'ps-5',
    name: 'The Stargate Project',
    description: 'The CIA\'s secret psychic spy program',
    categoryId: 'psychic',
    icon: '🎖️',
    sections: [
      {
        title: 'Experiments & Research',
        content: 'From 1978-1995, the U.S. government spent $20 million studying psychic phenomena for intelligence gathering. Remote viewers attempted to locate hostages, describe enemy facilities, and predict events. The program involved multiple agencies including CIA, DIA, and Army Intelligence.',
      },
      {
        title: 'Skeptics\' Views',
        content: 'The CIA\'s final assessment concluded the program produced no actionable intelligence. Skeptics note the program was shut down after independent review. Critics argue any successes were due to conventional intelligence sources, not psychic abilities.',
      },
      {
        title: 'Notable Cases',
        content: 'Viewers allegedly located a downed Soviet bomber and described secret facilities. Joe McMoneagle received the Legion of Merit for his remote viewing work. Despite official closure, some claim similar programs continue in classified form. Declassified documents reveal extensive research.',
      },
    ],
  },
  {
    id: 'ps-6',
    name: '11:11 Phenomenon',
    description: 'Recurring 11:11 time prompts linked to synchronicity and awakening',
    categoryId: 'psychic',
    icon: '⏱️',
    sections: [
      {
        title: 'Overview',
        content:
          'The 11:11 phenomenon describes repeated encounters with the number pattern 11:11, most often on clocks but also in receipts, screens, or documents. Many experiencers interpret it as a “cosmic nudge,” angel number, or sign of spiritual awakening and heightened intuition.',
      },
      {
        title: 'Experiences & Patterns',
        content:
          'Witnesses report uncanny streaks of noticing 11:11 during emotionally charged periods or before major life changes. Some associate the pattern with spirit guides, manifestation “portals,” or alignment with a soul path. Journals, meditation, and intention-setting rituals are often paired with 11:11 sightings.',
      },
      {
        title: 'Skeptical Views',
        content:
          'Skeptics point to confirmation bias and apophenia: once someone fixes on 11:11, they are more likely to notice it and forget the many times they look at a clock and see nothing special. Statistically, all four-digit combinations should appear over time, but 11:11 is especially visually striking and memorable.',
      },
    ],
  },
  {
    id: 'ps-7',
    name: '3:33 Phenomenon',
    description: 'Mysterious 3:33 a.m. wakeups and ominous number sequences',
    categoryId: 'psychic',
    icon: '🌒',
    sections: [
      {
        title: 'Overview',
        content:
          'The 3:33 phenomenon centers on repeated awakenings or encounters with the time 3:33, often framed as a “witching hour” or psychic alert. Many experiencers link it with spirit contact, psychic activation, or warnings from the subconscious.',
      },
      {
        title: 'Experiences & Patterns',
        content:
          'Reports describe jolting awake at 3:33 a.m. with a sense of presence in the room, vivid dreams, or sudden insights. Some interpret 3:33 as a triple amplification of the number three, associated with creativity, communication, and spiritual triads. Others treat it as a call to pay attention to unresolved issues.',
      },
      {
        title: 'Skeptical Views',
        content:
          'Skeptics argue that normal sleep cycles often cause brief awakenings in the early morning and that the brain retrofits significance onto a random time. Digital clocks make symmetrical times stand out, and once 3:33 is emotionally charged, it becomes easier to remember than ordinary wakeups.',
      },
    ],
  },
  {
    id: 'ps-8',
    name: 'Astral Parasites',
    description: 'Hostile entities believed to feed on human life force in the astral plane',
    categoryId: 'psychic',
    icon: '🪰',
    sections: [
      {
        title: 'Overview',
        content:
          'Astral parasites are described as non-physical entities that attach to human energy bodies, draining vitality, mood, or willpower. They appear in occult lore, modern energy-healing narratives, and some shamanic traditions as “attachments” or “energetic hitchhikers.”',
      },
      {
        title: 'Reported Signs',
        content:
          'Experiencers report sudden exhaustion, intrusive thoughts, persistent nightmares, and difficulty focusing after intense emotional events, occult rituals, or substance use. Psychic workers describe seeing leech-like forms, shadow clumps, or cords feeding on the aura during clairvoyant scans.',
      },
      {
        title: 'Clearing Practices',
        content:
          'Practitioners recommend cleansing rituals, banishing techniques, salt baths, and mental discipline to remove attachments. Skeptics view astral parasites as symbolic language for depression, anxiety, or trauma, but believers insist that deliberate spiritual hygiene noticeably improves their condition.',
      },
    ],
  },
  {
    id: 'ps-9',
    name: 'Astral Projection',
    description: 'Conscious separation of awareness from the physical body',
    categoryId: 'psychic',
    icon: '🚪',
    sections: [
      {
        title: 'Overview',
        content:
          'Astral projection is the practice of leaving the physical body in a subtle “astral” form while retaining full awareness. Practitioners claim to travel through non-physical realms, visiting distant locations, symbolic landscapes, or other beings while the physical body remains at rest.',
      },
      {
        title: 'Techniques & Experiences',
        content:
          'Common methods include relaxation, vibration states, rope techniques, and visualization of floating above the body. Experiencers describe seeing their sleeping form, feeling pulled through ceilings, or entering realms with shifting colors and thought-responsive environments.',
      },
      {
        title: 'Scientific & Skeptical Views',
        content:
          'Researchers compare astral projection to lucid dreaming and out-of-body experiences generated by the brain. Neurological models tie it to altered body-schema processing and sleep paralysis. No controlled studies have conclusively verified veridical perception during astral trips, keeping the phenomenon controversial.',
      },
    ],
  },
  {
    id: 'ps-10',
    name: 'Astral Travel',
    description: 'Extended journeys through non-physical realms beyond the body',
    categoryId: 'psychic',
    icon: '🛸',
    sections: [
      {
        title: 'Overview',
        content:
          'Astral travel expands on astral projection by emphasizing purposeful journeys through layered, non-physical worlds. Occult systems describe structured planes populated by thought-forms, guides, and entities, where travelers can seek knowledge, healing, or initiation.',
      },
      {
        title: 'Maps & Destinations',
        content:
          'Esoteric traditions chart astral zones such as lower emotional realms, luminous “cities,” and archetypal temples. Travelers report libraries of living light, training halls with teachers, and dense regions reflecting collective human fears and desires.',
      },
      {
        title: 'Risks & Protections',
        content:
          'Practitioners warn about disorientation, frightening encounters, and exposure to astral parasites. Protective visualization, calling on guardians, and maintaining emotional stability are considered essential. Skeptics interpret these narratives as rich lucid dream mythologies rather than literal voyages.',
      },
    ],
  },
  {
    id: 'ps-11',
    name: 'Aura Resonance Spikes',
    description: 'Sudden energetic surges sensed in the human aura field',
    categoryId: 'psychic',
    icon: '📡',
    sections: [
      {
        title: 'Overview',
        content:
          'Aura resonance spikes are reports of sudden, intense changes in a person’s energy field, perceived by sensitives as flares, pulses, or color flashes. They are often linked to emotional breakthroughs, incoming danger, or psychic downloads.',
      },
      {
        title: 'Reported Triggers',
        content:
          'Witnesses describe spikes during strong déjà vu, near-accidents, spiritual ceremonies, and encounters with soulmates or rivals. Some healers claim to feel these as sharp tingles, warmth, or electric pressure around the heart, head, or hands.',
      },
      {
        title: 'Interpretations',
        content:
          'Believers view resonance spikes as the aura reacting to unseen information, aligning with guidance or warning of subtle threats. Skeptical explanations include adrenaline surges, micro-perception of environmental cues, and the power of suggestion in group settings.',
      },
    ],
  },
  {
    id: 'ps-12',
    name: 'Auras Energy Fields',
    description: 'Subtle luminous fields said to surround living beings',
    categoryId: 'psychic',
    icon: '🌈',
    sections: [
      {
        title: 'Overview',
        content:
          'An aura is described as a multi-layered energy field surrounding the body, showing colors and patterns that reflect health, emotions, and spiritual state. Claims of aura perception appear in mystical, religious, and New Age traditions worldwide.',
      },
      {
        title: 'Perception & Practice',
        content:
          'Aura readers report seeing halos, colored outlines, or shimmering heat around people and animals. Training often involves soft focus exercises, hand-sensing, and working with color symbolism. Kirlian photography is sometimes cited as evidence, though it captures coronal discharges rather than a proven “soul field.”',
      },
      {
        title: 'Skeptical Views',
        content:
          'Controlled tests of aura readers have generally failed to outperform chance when identifying or describing unseen subjects. Skeptics attribute aura perception to afterimages, eye strain, expectation, and misinterpretation of natural light effects.',
      },
    ],
  },
  {
    id: 'ps-13',
    name: 'Automatic Drawing',
    description: 'Art created while the conscious mind steps aside',
    categoryId: 'psychic',
    icon: '✏️',
    sections: [
      {
        title: 'Overview',
        content:
          'Automatic drawing is the practice of allowing the hand to sketch without deliberate control, with images emerging from the subconscious or alleged spiritual sources. It is used to contact guides, explore inner symbolism, or channel messages through visual form.',
      },
      {
        title: 'Methods & Motifs',
        content:
          'Artists typically enter a light trance, relax, and let their hand move freely. Early marks often form spirals, sigils, faces, or abstract landscapes that later seem meaningful. Some mediums claim detailed portraits of spirits or deceased loved ones have appeared this way.',
      },
      {
        title: 'Psychological Theories',
        content:
          'Researchers interpret automatic drawing as a form of ideomotor action and creative flow, where unconscious material surfaces without censorship. While no supernatural source has been proven, the technique can reveal emotional themes and archetypal imagery that feel “other” to the artist.',
      },
    ],
  },
  {
    id: 'ps-14',
    name: 'Automatic Sigil Creation',
    description: 'Spontaneous generation of symbolic glyphs under trance',
    categoryId: 'psychic',
    icon: '⚙️',
    sections: [
      {
        title: 'Overview',
        content:
          'Automatic sigil creation combines automatic drawing with magical symbol craft. Practitioners allow their hand to sketch unknown glyphs, which are later treated as keys for protection, manifestation, or spirit communication.',
      },
      {
        title: 'Use in Occult Practice',
        content:
          'These sigils are often charged through meditation, candle work, or ritual. Some report that spontaneously drawn symbols repeatedly appear in dreams, or match historical motifs they had never consciously studied.',
      },
      {
        title: 'Interpretation & Critique',
        content:
          'Believers see the process as the subconscious and higher self collaborating to craft personalized runes. Skeptics note that the human brain excels at pattern invention and that meaning is assigned after the fact, turning random squiggles into apparently potent designs.',
      },
    ],
  },
  {
    id: 'ps-15',
    name: 'Automatic Writing',
    description: 'Text produced without conscious control of the pen',
    categoryId: 'psychic',
    icon: '🖊️',
    sections: [
      {
        title: 'Overview',
        content:
          'Automatic writing involves allowing words to flow onto paper or screen while the conscious mind “steps aside.” Many mediums and channelers claim that guides, spirits, or higher aspects of self dictate messages through this method.',
      },
      {
        title: 'Historical Cases',
        content:
          'Spiritualist mediums of the 19th and 20th centuries produced long manuscripts allegedly from deceased authors or ascended beings. Some texts contained philosophical teachings, prophecies, or complex diagrams beyond the writer’s usual style.',
      },
      {
        title: 'Scientific Perspectives',
        content:
          'Psychologists treat automatic writing as an ideomotor effect combined with dissociation, where hidden thoughts and creativity surface without normal editing. Tests have not verified non-human authorship, but the process can access surprising insights and emotional truths for practitioners.',
      },
    ],
  },
  {
    id: 'ps-16',
    name: 'Bi-location Dual Consciousness',
    description: 'Being present in two places at once in awareness or apparition',
    categoryId: 'psychic',
    icon: '🌀',
    sections: [
      {
        title: 'Overview',
        content:
          'Bi-location is the alleged ability to exist or appear in two locations simultaneously. Mystics, saints, and occult adepts are said to have attended distant events while their physical body remained elsewhere, sometimes witnessed by multiple observers.',
      },
      {
        title: 'Reported Manifestations',
        content:
          'Accounts describe a person seen in prayer in one city while also teaching or assisting someone miles away. In some stories, the distant presence has physical effects, such as moving objects or leaving footprints, while in others it appears ghostlike.',
      },
      {
        title: 'Interpretations',
        content:
          'Explanations range from advanced astral projection and time anomalies to thoughtforms shaped by intense intention. Skeptics attribute bi-location to mistaken identity, faulty memory, and myth-making around revered figures.',
      },
    ],
  },
  {
    id: 'ps-17',
    name: 'Biokinesis Body Control',
    description: 'Alleged mental influence over one’s own biology',
    categoryId: 'psychic',
    icon: '🫀',
    sections: [
      {
        title: 'Overview',
        content:
          'Biokinesis refers to the claimed ability to consciously alter bodily processes using the mind, from shifting eye color to speeding healing or changing metabolism. It appears in internet subcultures, occult systems, and extreme mind-over-body narratives.',
      },
      {
        title: 'Practices & Claims',
        content:
          'Practitioners focus on visualization, affirmation, and deep trance to “rewrite” cellular instructions. Claims include pain control, increased muscle growth, and resistance to cold. Documented medical cases, however, usually involve more modest feats like heart-rate slowing or pain reduction through meditation.',
      },
      {
        title: 'Scientific Views',
        content:
          'Science recognizes that placebo effects, biofeedback, and meditation can influence heart rate, immune markers, and stress hormones. However, dramatic biokinetic claims like permanent eye-color change lack verifiable evidence and are generally considered anecdotal.',
      },
    ],
  },
  {
    id: 'ps-18',
    name: 'Channeling Spirits',
    description: 'Acting as a conduit for non-physical intelligences',
    categoryId: 'psychic',
    icon: '📣',
    sections: [
      {
        title: 'Overview',
        content:
          'Channeling involves allowing an external entity—spirit, guide, or collective consciousness—to speak or write through the medium. The channel may remain partially aware or enter a deep trance while messages are delivered to an audience.',
      },
      {
        title: 'Forms & Traditions',
        content:
          'From ancient oracles to modern trance mediums, cultures worldwide have hosted channeling practices. Messages often address spiritual growth, cosmic history, or personal guidance, sometimes in distinct voices or mannerisms unlike the channel’s usual style.',
      },
      {
        title: 'Skeptical Explanations',
        content:
          'Psychologists interpret channeling as a form of dissociation, role-play, or creative improvisation guided by the medium’s beliefs and expectations. Despite occasional accurate personal details, controlled tests have not confirmed independent spirit sources.',
      },
    ],
  },
  {
    id: 'ps-19',
    name: 'Clairagustine Taste Sense',
    description: 'Psychic perception through unexplained tastes',
    categoryId: 'psychic',
    icon: '🍋',
    sections: [
      {
        title: 'Overview',
        content:
          'Clairagustine is the alleged ability to receive information via sudden, unexplained tastes in the mouth. Practitioners report metallic, sweet, bitter, or specific food flavors that correlate with spirit presence, health impressions, or emotional states.',
      },
      {
        title: 'Reported Uses',
        content:
          'Mediums may interpret a smoky flavor as linked to a deceased smoker, or a medicinal taste as a warning about health issues. Some healers treat recurring tastes as diagnostic markers during energy work sessions.',
      },
      {
        title: 'Skeptical Views',
        content:
          'Skeptics note that anxiety, reflux, medication, and minor neurological issues can cause phantom tastes. They argue that meaning is imposed afterward, turning random sensations into apparently accurate psychic hits.',
      },
    ],
  },
  {
    id: 'ps-20',
    name: 'Clairalience Smell Sense',
    description: 'Psychic information received through anomalous scents',
    categoryId: 'psychic',
    icon: '🌬️',
    sections: [
      {
        title: 'Overview',
        content:
          'Clairalience refers to smelling odors that have no physical source, interpreted as messages from spirits or energetic impressions. Common examples include perfume associated with a loved one, cigarette smoke, or flowers appearing in closed rooms.',
      },
      {
        title: 'Experiences',
        content:
          'Witnesses report waves of scent arriving during meditation, grief, or paranormal encounters, sometimes coinciding with cold spots or emotional surges. In hauntings, recurring smells of decay, smoke, or perfume are cited as evidence of a lingering presence.',
      },
      {
        title: 'Alternative Explanations',
        content:
          'Medical conditions, environmental traces, and memory-association can all create powerful phantom smells. Skeptics argue that the brain may recreate remembered scents during emotional moments, giving the illusion of external origin.',
      },
    ],
  },
  {
    id: 'ps-21',
    name: 'Claircognizance Knowing',
    description: 'Sudden, clear knowing without logical source',
    categoryId: 'psychic',
    icon: '💡',
    sections: [
      {
        title: 'Overview',
        content:
          'Claircognizance is the sense of simply “knowing” information without reasoning or evidence. The knowledge often arrives fully formed, accompanied by a strong inner certainty that feels different from guessing or ordinary intuition.',
      },
      {
        title: 'Common Themes',
        content:
          'Experiencers describe abruptly knowing someone is lying, sensing future events, or receiving solutions to complex problems in a flash. The information may later prove accurate, reinforcing the belief that it came from guides or a higher mind.',
      },
      {
        title: 'Skeptical Views',
        content:
          'Skeptics see claircognizance as rapid subconscious processing, where the brain connects subtle cues faster than conscious awareness. When a hunch proves correct, it stands out; when it fails, it is quietly forgotten, creating a skewed sense of accuracy.',
      },
    ],
  },
  {
    id: 'ps-22',
    name: 'Clairtangency Touch Clairvoyance',
    description: 'Receiving impressions through physical contact with objects',
    categoryId: 'psychic',
    icon: '✋',
    sections: [
      {
        title: 'Overview',
        content:
          'Clairtangency, often called psychometry, is the claimed ability to obtain information by touching objects, places, or people. Practitioners say that emotional events and strong experiences imprint into materials as residual energy.',
      },
      {
        title: 'Reported Abilities',
        content:
          'Psychics may hold jewelry, photos, or relics and describe past owners, emotional states, or historical scenes. Investigators sometimes use clairtangency at haunted sites or in cold cases to gain leads, though results are difficult to verify.',
      },
      {
        title: 'Scientific Assessment',
        content:
          'No controlled experiments have reliably demonstrated object-reading beyond chance. Skeptics attribute apparent hits to cold reading, educated guesses, and the sitter unconsciously supplying confirming details.',
      },
    ],
  },
  {
    id: 'ps-23',
    name: 'Clairvoyance Future Sight',
    description: 'Visual impressions of events beyond normal vision',
    categoryId: 'psychic',
    icon: '🔭',
    sections: [
      {
        title: 'Overview',
        content:
          'Clairvoyance is the ability to see images, scenes, or symbols that represent distant, hidden, or future events. The visions may appear in the mind’s eye, dreams, or fleeting flashes, sometimes accompanied by strong emotion.',
      },
      {
        title: 'Forms of Vision',
        content:
          'Some clairvoyants see symbolic images that must be interpreted, while others report clear, literal scenes. Crystal gazing, scrying mirrors, and closed-eye visualization are classic tools used to focus the faculty.',
      },
      {
        title: 'Skeptical Views',
        content:
          'Skeptics argue that a mix of coincidence, selective memory, and broad symbolism can make many visions seem accurate after the fact. Laboratory tests of remote perception have produced mixed and controversial results, leaving clairvoyance unproven.',
      },
    ],
  },
  {
    id: 'ps-24',
    name: 'Collective Clairaudience',
    description: 'Groups hearing the same anomalous inner or outer voice',
    categoryId: 'psychic',
    icon: '🎧',
    sections: [
      {
        title: 'Overview',
        content:
          'Collective clairaudience refers to multiple people simultaneously perceiving the same voice, phrase, or sound that others nearby do not hear. It is sometimes reported in séances, group meditations, and intense paranormal events.',
      },
      {
        title: 'Reported Incidents',
        content:
          'Witnesses describe shared hearing of names, warnings, or chants in otherwise quiet rooms. In rare accounts, a whole circle hears a disembodied knock or word in their minds at the same instant, later confirming details with each other.',
      },
      {
        title: 'Possible Explanations',
        content:
          'Believers suggest a common telepathic broadcast, group spirit contact, or the amplification of subtle impressions through shared expectation. Skeptics point to suggestion, misheard environmental sounds, and social contagion where one person’s remark shapes everyone’s memory.',
      },
    ],
  },
  {
    id: 'ps-25',
    name: 'Déjà Vu Paranormal',
    description: 'Eerie sense of reliving a moment with possible psychic overtones',
    categoryId: 'psychic',
    icon: '♻️',
    sections: [
      {
        title: 'Overview',
        content:
          'Déjà vu is the uncanny feeling that a present moment has already been lived before. While commonly studied in neurology and psychology, some interpret intense or detailed déjà vu episodes as evidence of precognition, parallel timelines, or past-life bleedthrough.',
      },
      {
        title: 'Paranormal Interpretations',
        content:
          'Experiencers may recall pre-dreaming the scene, recognizing people they have never met, or sensing that a choice at this point has been made in another reality. Strong déjà vu is sometimes reported at power spots, haunted locations, or moments of major life decision.',
      },
      {
        title: 'Scientific Views',
        content:
          'Mainstream theories link déjà vu to brief glitches in memory processing, where current perception is mistakenly tagged as familiar. Temporal lobe activity, fatigue, and stress can increase episodes. Paranormal interpretations remain speculative but continue to fascinate investigators.',
      },
    ],
  },
  {
    id: 'ps-26',
    name: 'Definitive Dreaming',
    description: 'Hyper-lucid dreams with objective clarity and narrative control',
    categoryId: 'psychic',
    icon: '🌙',
    sections: [
      {
        title: 'Overview',
        content:
          'Definitive dreaming refers to dream states so vivid, coherent, and self-directed that they feel more real than waking life. Practitioners describe them as lucid dreams elevated into full sensory immersion with stable environments and conscious decision-making.',
      },
      {
        title: 'Uses & Reports',
        content:
          'People use definitive dreams to practice skills, receive symbolic guidance, or explore alternate versions of themselves. Some report receiving verifiable information or having shared experiences with another dreamer.',
      },
      {
        title: 'Explanations',
        content:
          'Neuroscientists compare these states to highly active REM cycles with elevated prefrontal engagement. Paranormal interpretations frame them as portal states where consciousness travels beyond the body.',
      },
    ],
  },
  {
    id: 'ps-27',
    name: 'Dermo-optical Perception',
    description: 'Claimed ability to “see” through the skin by touch alone',
    categoryId: 'psychic',
    icon: '🖐️',
    sections: [
      {
        title: 'Overview',
        content:
          'Dermo-optical perception involves allegedly identifying colors, shapes, or written text through direct skin contact, usually with fingertips. Controlled demonstrations date back to the 20th century, particularly in Eastern Europe.',
      },
      {
        title: 'Experiments',
        content:
          'Some subjects report sensing vibrational differences between pigments or textures imperceptible to most people. Soviet-era studies claimed above-chance accuracy, though replication has been inconsistent.',
      },
      {
        title: 'Skeptical Views',
        content:
          'Critics suggest subtle visual cues, sensory leakage, or tactile pattern recognition. No definitive mechanism has been identified to support true “skin sight.”',
      },
    ],
  },
  {
    id: 'ps-28',
    name: 'Dimensional Bleeding',
    description: 'Perceived overlap between parallel realities',
    categoryId: 'psychic',
    icon: '🪞',
    sections: [
      {
        title: 'Overview',
        content:
          'Dimensional bleeding refers to brief anomalies where objects, sounds, or entities appear out of place, as if from another timeline. Witnesses describe shifts in atmosphere, déjà vu intensification, or impossible objects manifesting momentarily.',
      },
      {
        title: 'Common Signs',
        content:
          'Reports include unfamiliar buildings that vanish, phantom voices calling one’s name, and glimpses of people wearing outdated or unfamiliar clothing. Some link these events to dream precognition and time slips.',
      },
      {
        title: 'Interpretations',
        content:
          'Believers propose overlapping realities or consciousness momentarily tuning into adjacent dimensions. Skeptics attribute such events to memory distortions, sleep deprivation, or perceptual errors.',
      },
    ],
  },
  {
    id: 'ps-29',
    name: 'Dream Telepathy',
    description: 'Communication through shared dreamspace',
    categoryId: 'psychic',
    icon: '💤',
    sections: [
      {
        title: 'Overview',
        content:
          'Dream telepathy explores the idea that individuals can send or receive information during dreaming. Experiments at the Maimonides Dream Laboratory showed intriguing results where targets appeared in dream imagery.',
      },
      {
        title: 'Modern Accounts',
        content:
          'People report knowing someone dreamed of them, receiving warnings, or sharing near-identical dreams with partners or twins. Some traditions treat dreams as natural telepathic channels.',
      },
      {
        title: 'Skeptical Views',
        content:
          'Skeptics cite chance, memory editing, and the fluid nature of dream recall. Controlled replications remain limited.',
      },
    ],
  },
  {
    id: 'ps-30',
    name: 'Emotion Imprint Hauntings',
    description: 'Residual psychic energy from intense emotional events',
    categoryId: 'psychic',
    icon: '💔',
    sections: [
      {
        title: 'Overview',
        content:
          'Emotion imprint hauntings occur when traumatic, ecstatic, or highly charged events allegedly leave psychic impressions on locations. These imprints replay like recordings, without conscious spirits involved.',
      },
      {
        title: 'Reported Signs',
        content:
          'Witnesses hear footsteps, voices, or emotional atmospheres repeating identically. Investigators note that imprints often activate under similar environmental conditions.',
      },
      {
        title: 'Interpretation',
        content:
          'Some theories propose that human emotion interacts with physical environments in ways not yet understood. Skeptics argue for misinterpretation of ambient sounds or suggestion.',
      },
    ],
  },
  {
    id: 'ps-31',
    name: 'Ether Drift Sensitivity',
    description: 'Heightened perception of subtle energetic currents',
    categoryId: 'psychic',
    icon: '🌬️',
    sections: [
      {
        title: 'Overview',
        content:
          'Ether drift sensitivity describes the felt sensation of subtle flows or pressure in the environment, often linked to geomagnetic activity, spiritual presence, or emotional residues.',
      },
      {
        title: 'Experiences',
        content:
          'People feel tingling, heaviness, directional pulls, or atmospheric shifts in haunted or sacred spaces. Some claim these drifts intensify before psychic events.',
      },
      {
        title: 'Explanations',
        content:
          'Interpretations vary from geomagnetic sensitivity to empathic attunement. Skeptics point toward subconscious environmental perception and expectation.',
      },
    ],
  },
  {
    id: 'ps-32',
    name: 'Etheric Blueprint Shifting',
    description: 'Alleged alteration of the subtle template of the human body',
    categoryId: 'psychic',
    icon: '🧬',
    sections: [
      {
        title: 'Overview',
        content:
          'Etheric blueprint shifting suggests humans possess a non-physical energetic template that can change through healing, intention, or trauma, affecting the physical body over time.',
      },
      {
        title: 'Claims',
        content:
          'Practitioners describe spontaneous posture corrections, rapid healing, or emotional shifts after blueprint realignment sessions.',
      },
      {
        title: 'Skeptical Views',
        content:
          'Mainstream medicine attributes such changes to placebo, somatic release, or improved body awareness rather than an etheric template.',
      },
    ],
  },
  {
    id: 'ps-33',
    name: 'Etheric Cords',
    description: 'Energetic links between people',
    categoryId: 'psychic',
    icon: '🪢',
    sections: [
      {
        title: 'Overview',
        content:
          'Etheric cords are metaphorical or literalized energy bonds formed through relationships. They are said to transmit emotions, thoughts, and psychic impressions across distance.',
      },
      {
        title: 'Experiences',
        content:
          'People report sudden waves of emotion from distant loved ones, intuitive knowing of danger, or feeling drained by unhealthy connections.',
      },
      {
        title: 'Practices',
        content:
          'Cord cutting rituals aim to release old ties. Skeptics frame cords as psychological attachments expressed symbolically.',
      },
    ],
  },
  {
    id: 'ps-34',
    name: 'Hypnosis Regression Abduction',
    description: 'Recovered memories of abduction experiences through hypnosis',
    categoryId: 'psychic',
    icon: '🌀',
    sections: [
      {
        title: 'Overview',
        content:
          'This phenomenon involves recalling alleged alien or paranormal abductions during hypnotic regression. Sessions often reveal missing time, medical procedures, or telepathic communication.',
      },
      {
        title: 'Controversy',
        content:
          'Some researchers argue the memories represent genuine encounters, while critics warn of suggestibility and therapist influence creating false narratives.',
      },
      {
        title: 'Notable Cases',
        content:
          'Betty and Barney Hill’s groundbreaking case relied heavily on regression testimony, shaping modern abduction lore.',
      },
    ],
  },
  {
    id: 'ps-35',
    name: 'Indigo Children',
    description: 'Children believed to possess heightened psychic or spiritual abilities',
    categoryId: 'psychic',
    icon: '🧒',
    sections: [
      {
        title: 'Overview',
        content:
          'Indigo children are described as intuitive, empathic, and rebellious souls with a mission to uplift human consciousness. The term rose to popularity in the 1990s New Age movement.',
      },
      {
        title: 'Traits',
        content:
          'Common traits include sensitivity, creativity, strong will, and a sense of purpose. Some claim telepathy or healing abilities.',
      },
      {
        title: 'Skeptical Views',
        content:
          'Critics argue the concept romanticizes neurodivergence and normal childhood traits, offering spiritual explanations instead of developmental ones.',
      },
    ],
  },
  {
    id: 'ps-36',
    name: 'Kundalini Awakening Paranormal',
    description: 'Extreme energetic events linked with spiritual awakening',
    categoryId: 'psychic',
    icon: '🔥',
    sections: [
      {
        title: 'Overview',
        content:
          'Kundalini awakenings involve powerful surges of energy rising through the spine, often producing psychic sensitivity, visions, and altered states of consciousness.',
      },
      {
        title: 'Reported Effects',
        content:
          'Witnesses report heat waves, spontaneous body movements, intuitive downloads, and emotional purging. Some experience temporary clairvoyance or telepathy.',
      },
      {
        title: 'Risks',
        content:
          'Without grounding, Kundalini events may trigger anxiety, dissociation, or overwhelming sensations. Traditional systems emphasize gradual preparation.',
      },
    ],
  },
  {
    id: 'ps-37',
    name: 'Levitation Phenomena',
    description: 'Apparent defiance of gravity through psychic force',
    categoryId: 'psychic',
    icon: '🕊️',
    sections: [
      {
        title: 'Overview',
        content:
          'Levitation phenomena include humans or objects rising without physical support. Claims appear in spiritualist séances, saintly biographies, and occult literature.',
      },
      {
        title: 'Reported Cases',
        content:
          'Mystics such as St. Joseph of Cupertino allegedly levitated during ecstatic states. Some séance rooms reported floating trumpets or tables.',
      },
      {
        title: 'Skeptical Views',
        content:
          'Magicians can replicate many levitation effects with wires or illusions. No verified case has withstood controlled investigation.',
      },
    ],
  },
  {
    id: 'ps-38',
    name: 'Mediumship Channeling',
    description: 'Communication with spirits through a medium',
    categoryId: 'psychic',
    icon: '📜',
    sections: [
      {
        title: 'Overview',
        content:
          'Mediumship involves receiving messages from the deceased or otherworldly entities. Techniques range from trance states to clairaudient impressions.',
      },
      {
        title: 'Practices',
        content:
          'Cold reading, automatic writing, and table phenomena are often associated. Skilled mediums claim verifiable details unknown to them.',
      },
      {
        title: 'Criticism',
        content:
          'Skeptics cite fraud, inference, and memory manipulation. Controlled tests of mediums yield mixed results.',
      },
    ],
  },
  {
    id: 'ps-39',
    name: 'Mirror Telepathy',
    description: 'Telepathic impressions amplified through reflective surfaces',
    categoryId: 'psychic',
    icon: '🪩',
    sections: [
      {
        title: 'Overview',
        content:
          'Mirror telepathy suggests reflective surfaces act as amplifiers or gateways for mental signals. Partners attempt to send thoughts while gazing into mirrors.',
      },
      {
        title: 'Experiences',
        content:
          'Participants report shared imagery, sudden emotional impressions, or distortions appearing in reflections during sessions.',
      },
      {
        title: 'Interpretations',
        content:
          'Believers treat mirrors as liminal tools. Skeptics call it expectation-driven imagery and pareidolia.',
      },
    ],
  },
  {
    id: 'ps-40',
    name: 'Muse Paranormal Inspiration',
    description: 'Creative insights believed to originate from non-physical sources',
    categoryId: 'psychic',
    icon: '🎨',
    sections: [
      {
        title: 'Overview',
        content:
          'Artists throughout history have credited muses—external or internal—as the source of sudden brilliance. Paranormal muse theory suggests these inspirations come from guides or collective consciousness.',
      },
      {
        title: 'Experiences',
        content:
          'Writers wake with full poems in their minds, musicians dream melodies, and inventors receive sudden solutions to complex problems.',
      },
      {
        title: 'Skepticism',
        content:
          'Neurologists see creative insight as subconscious processing reaching awareness. The mystical framing persists due to the mysterious feel of inspiration.',
      },
    ],
  },
  {
    id: 'ps-41',
    name: 'Old Hag Syndrome',
    description: 'Paralytic encounters with oppressive entities during sleep',
    categoryId: 'psychic',
    icon: '😨',
    sections: [
      {
        title: 'Overview',
        content:
          'Old Hag Syndrome describes the classic sleep paralysis scenario where a person wakes immobilized while sensing a heavy, malevolent presence on their chest.',
      },
      {
        title: 'Accounts',
        content:
          'Witnesses often see shadow figures, hear whispering, or feel claws or weight pushing down. Cultures interpret the entity in unique mythic forms.',
      },
      {
        title: 'Scientific Views',
        content:
          'Neurological models explain it as REM intrusion mixed with hallucinatory fear imagery. Yet the consistency across cultures keeps paranormal theories alive.',
      },
    ],
  },
  {
    id: 'ps-42',
    name: 'Out-of-Body Experience',
    description: 'Perceiving oneself outside the physical body',
    categoryId: 'psychic',
    icon: '🚀',
    sections: [
      {
        title: 'Overview',
        content:
          'OBEs occur during trauma, meditation, or sleep transitions. Experiencers report floating above their body, seeing the room, or moving through walls.',
      },
      {
        title: 'Common Elements',
        content:
          'Vibrations, buzzing sensations, tunnel vision, and detachment feelings often precede OBEs. Some claim veridical perceptions later confirmed.',
      },
      {
        title: 'Skepticism',
        content:
          'Scientists attribute OBEs to disorientation in the temporoparietal junction. Paranormal investigators view them as genuine consciousness separation.',
      },
    ],
  },
  {
    id: 'ps-43',
    name: 'Paranormal Portals',
    description: 'Locations believed to act as gateways between realms',
    categoryId: 'psychic',
    icon: '🌀',
    sections: [
      {
        title: 'Overview',
        content:
          'Paranormal portals are spots where energies, entities, or timelines reportedly cross into ours. They are associated with hauntings, UFO activity, and dimensional anomalies.',
      },
      {
        title: 'Characteristics',
        content:
          'Witnesses describe sudden cold, time distortion, static charge, and apparitions entering or exiting localized areas.',
      },
      {
        title: 'Interpretations',
        content:
          'Some propose geomagnetic anomalies or trauma imprints. Skeptics cite natural sound funnels and psychological suggestion.',
      },
    ],
  },
  {
    id: 'ps-44',
    name: 'Parapsychology Study',
    description: 'Scientific investigation of psychic phenomena',
    categoryId: 'psychic',
    icon: '📘',
    sections: [
      {
        title: 'Overview',
        content:
          'Parapsychology examines telepathy, PK, ESP, and survival after death through controlled experiments, statistical methods, and case studies.',
      },
      {
        title: 'Major Research Areas',
        content:
          'Dream telepathy, Ganzfeld experiments, RNG psychokinesis, and near-death experiences remain central areas of inquiry.',
      },
      {
        title: 'Skeptical Perspective',
        content:
          'Critics argue the field lacks replicability and clear mechanisms. Supporters point to statistical anomalies and decades of consistent data patterns.',
      },
    ],
  },
  {
    id: 'ps-45',
    name: 'Past Life Regression',
    description: 'Recalling previous incarnations under hypnosis',
    categoryId: 'psychic',
    icon: '♾️',
    sections: [
      {
        title: 'Overview',
        content:
          'Past life regression aims to uncover memories from previous lifetimes to resolve phobias, patterns, or spiritual questions. Sessions often yield vivid imagery.',
      },
      {
        title: 'Reported Experiences',
        content:
          'Subjects describe historical settings, relationships, traumas, or deaths with emotional realism. Some claim verifiable details.',
      },
      {
        title: 'Criticism',
        content:
          'Psychologists warn that hypnosis increases imagination and confabulation. Empirical evidence for literal past lives remains inconclusive.',
      },
    ],
  },
  {
    id: 'ps-46',
    name: 'Phantom Touch PSI',
    description: 'Unexplained tactile sensations without physical contact',
    categoryId: 'psychic',
    icon: '🤲',
    sections: [
      {
        title: 'Overview',
        content:
          'Phantom touch refers to sensations such as brushing, tapping, or pressure perceived without any physical source. These experiences often occur during meditation, sleep transitions, hauntings, or heightened psychic states.',
      },
      {
        title: 'Reports',
        content:
          'Witnesses describe feeling fingers trace their shoulders, a hand placed on their back, or tingling across the skin during spirit contact sessions. Some mediums interpret these touches as attempts at communication.',
      },
      {
        title: 'Explanations',
        content:
          'Skeptics attribute phantom touch to nerve misfires, hypnagogic hallucinations, and expectation effects. Psychic practitioners view it as direct interaction from non-physical beings.',
      },
    ],
  },
  {
    id: 'ps-47',
    name: 'Premonitory Chills',
    description: 'Sudden chills believed to signal incoming psychic information',
    categoryId: 'psychic',
    icon: '❄️',
    sections: [
      {
        title: 'Overview',
        content:
          'Premonitory chills are abrupt waves of cold that occur independently of temperature, often interpreted as a warning, emotional signal, or intuitive download.',
      },
      {
        title: 'Experiences',
        content:
          'People report chills moments before receiving bad news, encountering danger, or experiencing déjà vu. Some treat these chills as early precognitive markers.',
      },
      {
        title: 'Theories',
        content:
          'Possible explanations include micro-perception of environmental cues or subconscious pattern recognition. Paranormal theorists tie chills to spirit presence or future-event resonance.',
      },
    ],
  },
  {
    id: 'ps-48',
    name: 'Precognitive Flashes',
    description: 'Brief psychic impressions of future events',
    categoryId: 'psychic',
    icon: '⚡',
    sections: [
      {
        title: 'Overview',
        content:
          'Precognitive flashes are rapid, fragmentary visions or feelings about the future. They may appear as images, phrases, or sudden gut certainties.',
      },
      {
        title: 'Common Triggers',
        content:
          'High emotion, altered states, or liminal moments like falling asleep. Many claim flashes precede major accidents or life changes.',
      },
      {
        title: 'Skeptical Views',
        content:
          'Critics point to coincidence and selective recall. Supporters argue certain flashes have been confirmed in personal journals.',
      },
    ],
  },
  {
    id: 'ps-49',
    name: 'Psychic Anesthesia',
    description: 'Reduced or absent physical pain during psychic states',
    categoryId: 'psychic',
    icon: '💤',
    sections: [
      {
        title: 'Overview',
        content:
          'Psychic anesthesia refers to sudden loss of pain sensation during meditation, trance, or intense paranormal events. Some report feeling detached from the body entirely.',
      },
      {
        title: 'Examples',
        content:
          'Mediums standing on hot coals, mystics undergoing ritual piercing, and individuals experiencing OBEs often report little or no pain.',
      },
      {
        title: 'Scientific Theories',
        content:
          'Psychology recognizes dissociation and endorphin release as powerful analgesics, though paranormal practitioners attribute anesthetic effects to altered consciousness.',
      },
    ],
  },
  {
    id: 'ps-50',
    name: 'Psychic Cold Spots',
    description: 'Localized drops in temperature linked to entities or events',
    categoryId: 'psychic',
    icon: '🥶',
    sections: [
      {
        title: 'Overview',
        content:
          'Cold spots occur when a patch of air becomes drastically colder than the surrounding environment. Paranormal investigators treat them as indicators of spirit presence or energy consumption.',
      },
      {
        title: 'Witness Accounts',
        content:
          'People report sudden freezing pockets in hallways, bedrooms, or sacred sites. Cold spots often accompany EMF spikes and emotional shifts.',
      },
      {
        title: 'Alternate Explanations',
        content:
          'Drafts, HVAC anomalies, and humidity variations may contribute. The debate remains open.',
      },
    ],
  },
  {
    id: 'ps-51',
    name: 'Psychic Contagion',
    description: 'Spread of psychic impressions through groups',
    categoryId: 'psychic',
    icon: '🌐',
    sections: [
      {
        title: 'Overview',
        content:
          'Psychic contagion describes the rapid transmission of emotions, visions, or impressions between individuals, often in charged environments like séances.',
      },
      {
        title: 'Examples',
        content:
          'A group suddenly sensing dread, seeing the same mental image, or collectively predicting an event. Some call these “psi cascades.”',
      },
      {
        title: 'Theories',
        content:
          'Telepathic resonance, emotional mirroring, and mass suggestion are all proposed explanations.',
      },
    ],
  },
  {
    id: 'ps-52',
    name: 'Psychic Dilation Time',
    description: 'Altered perception of time during psychic events',
    categoryId: 'psychic',
    icon: '⏳',
    sections: [
      {
        title: 'Overview',
        content:
          'Time dilation phenomena occur when moments stretch, compress, or loop during high-intensity psychic experiences. Some report hours passing in minutes or vice versa.',
      },
      {
        title: 'Occurrences',
        content:
          'Most common in OBEs, deep meditation, or near-death experiences. Some remote viewers claim time behaves plastically during sessions.',
      },
      {
        title: 'Scientific Parallels',
        content:
          'Neuroscience notes similar distortions in trauma and flow states. Paranormal models suggest consciousness temporarily exits linear time.',
      },
    ],
  },
  {
    id: 'ps-53',
    name: 'Psychic Dream Incubation',
    description: 'Intentionally shaping dreams to receive guidance',
    categoryId: 'psychic',
    icon: '🛏️',
    sections: [
      {
        title: 'Overview',
        content:
          'Dream incubation involves setting intentions before sleep to receive answers, visions, or contact from guides.',
      },
      {
        title: 'Methods',
        content:
          'Writing questions, using symbols, chanting, or meditating before sleep. Practitioners claim results appear as symbolic or literal dream content.',
      },
      {
        title: 'Perspectives',
        content:
          'Psychologists attribute effects to subconscious priming. Mystics view it as an invitation to the astral realm.',
      },
    ],
  },
  {
    id: 'ps-54',
    name: 'Psychic Mirror Fractures',
    description: 'Anomalous distortions seen in reflective surfaces',
    categoryId: 'psychic',
    icon: '🪞',
    sections: [
      {
        title: 'Overview',
        content:
          'Mirror fractures refer to perceived warping, shadow shapes, or double-images appearing briefly during psychic moments. They may occur during scrying or hauntings.',
      },
      {
        title: 'Reports',
        content:
          'People describe reflections lagging behind, smiling independently, or showing entities not physically present.',
      },
      {
        title: 'Interpretations',
        content:
          'Possible explanations include pareidolia, dissociation, or reflective illusions. Paranormal perspectives tie mirrors to dimensional access points.',
      },
    ],
  },
  {
    id: 'ps-55',
    name: 'Psychic Scent Perception',
    description: 'Receiving psychic information through anomalous smells',
    categoryId: 'psychic',
    icon: '👃',
    sections: [
      {
        title: 'Overview',
        content:
          'Also known as “olfactory clairvoyance,” this involves detecting smells with no physical origin—often connected to spirits or emotional imprints.',
      },
      {
        title: 'Examples',
        content:
          'Perfume associated with a deceased relative, sulfur during negative encounters, or flowers indicating protective presence.',
      },
      {
        title: 'Alternate Views',
        content:
          'Neurological misfires, memory associations, and subtle environmental cues may play a role.',
      },
    ],
  },
  {
    id: 'ps-56',
    name: 'Psychic Shielding',
    description: 'Protective techniques for spiritual and energetic defense',
    categoryId: 'psychic',
    icon: '🛡️',
    sections: [
      {
        title: 'Overview',
        content:
          'Psychic shielding involves visualized or ritualized defenses against intrusive energies, entities, or emotional contamination.',
      },
      {
        title: 'Methods',
        content:
          'Light barriers, grounding exercises, sigils, amulets, and breathwork are common techniques. Some create multi-layered shields.',
      },
      {
        title: 'Perspectives',
        content:
          'Energy workers treat shielding as essential psychic hygiene. Skeptics frame it as a calming psychological tool.',
      },
    ],
  },
  {
    id: 'ps-57',
    name: 'Psychic Temperature Manipulation',
    description: 'Influencing ambient or bodily temperature through intent',
    categoryId: 'psychic',
    icon: '🌡️',
    sections: [
      {
        title: 'Overview',
        content:
          'Practitioners claim to raise or lower temperature via concentration. Tibetan monks demonstrate similar heat control during Tummo meditation.',
      },
      {
        title: 'Examples',
        content:
          'Reports include warming cold rooms, cooling overheated skin, or withstanding snow barefoot.',
      },
      {
        title: 'Scientific Parallels',
        content:
          'Biofeedback studies show humans can influence peripheral temperature modestly. Stronger claims remain unverified.',
      },
    ],
  },
  {
    id: 'ps-58',
    name: 'Psychic Tinnitus',
    description: 'Ringing interpreted as energetic or telepathic signals',
    categoryId: 'psychic',
    icon: '🔔',
    sections: [
      {
        title: 'Overview',
        content:
          'Psychic tinnitus refers to sudden high-frequency tones believed to accompany spiritual communication, downloads, or energetic shifts.',
      },
      {
        title: 'Reports',
        content:
          'Distinct tones may correspond with emotional messages or presences. Some experience directional ringing as a warning.',
      },
      {
        title: 'Skeptical Views',
        content:
          'Medical tinnitus, ear muscle spasms, or pressure changes explain many cases. Paranormal practitioners believe some tones have intelligent timing.',
      },
    ],
  },
  {
    id: 'ps-59',
    name: 'Psychic Vertigo',
    description: 'Dizziness triggered by psychic or energetic overload',
    categoryId: 'psychic',
    icon: '🌀',
    sections: [
      {
        title: 'Overview',
        content:
          'Psychic vertigo is sudden disorientation during paranormal encounters, energy shifts, or intuitive bursts.',
      },
      {
        title: 'Experiences',
        content:
          'People report floor tilting, swirling sensations, or gravitational shifts when entering haunted or sacred areas.',
      },
      {
        title: 'Interpretations',
        content:
          'Explanations range from EMF sensitivity to subconscious stress responses. Some see it as the aura stabilizing after sudden expansion.',
      },
    ],
  },
  {
    id: 'ps-60',
    name: 'Psychokinesis Object Movement',
    description: 'Moving or influencing objects using mental energy',
    categoryId: 'psychic',
    icon: '🧲',
    sections: [
      {
        title: 'Overview',
        content:
          'This phenomenon describes physical objects shifting, rattling, or levitating under mental focus. Common in poltergeist accounts and psi experiments.',
      },
      {
        title: 'Experiments',
        content:
          'Tests include spoon bending, micro-PK RNG deviation, and sealed-container motion. Results are debated.',
      },
      {
        title: 'Critics',
        content:
          'Magicians demonstrate that many PK feats can be faked. Still, long-term statistical anomalies remain intriguing.',
      },
    ],
  },
  {
    id: 'ps-61',
    name: 'Psychomanteum Mirror Gazing',
    description: 'Using reflective surfaces to contact spirits or the subconscious',
    categoryId: 'psychic',
    icon: '🔍',
    sections: [
      {
        title: 'Overview',
        content:
          'A psychomanteum is a darkened chamber with a mirror angled to evoke visions. Dr. Raymond Moody popularized the modern method.',
      },
      {
        title: 'Reported Experiences',
        content:
          'People claim to see deceased relatives, symbolic imagery, or shapes forming from darkness. Emotional messages are common.',
      },
      {
        title: 'Skeptical Views',
        content:
          'Low-light conditions can trigger perceptual drift and autokinetic illusions. Yet many participants insist the visions felt autonomous.',
      },
    ],
  },
  {
    id: 'ps-62',
    name: 'Psi Storms',
    description: 'Bursts of chaotic psychic energy affecting people or environments',
    categoryId: 'psychic',
    icon: '🌩️',
    sections: [
      {
        title: 'Overview',
        content:
          'Psi storms are energetic outbursts where emotions, electrical disturbances, and telepathic impressions surge simultaneously.',
      },
      {
        title: 'Signs',
        content:
          'Sudden malfunctioning electronics, group anxiety spikes, telepathic bleed-through, and poltergeist-like activity.',
      },
      {
        title: 'Interpretations',
        content:
          'Believers link them to geomagnetic stress or collective emotional peaks. Skeptics point to coincidence amplified by expectation.',
      },
    ],
  },
  {
    id: 'ps-63',
    name: 'Pyrokinesis Fire Control',
    description: 'Alleged ability to ignite or manipulate fire psychically',
    categoryId: 'psychic',
    icon: '🔥',
    sections: [
      {
        title: 'Overview',
        content:
          'Pyrokinesis is the claimed psychic control over flames, ignition, or heat direction. Stories include spontaneous fires near emotional individuals.',
      },
      {
        title: 'Cases',
        content:
          'Accounts range from matches lighting unexpectedly to curtains or paper combusting in poltergeist settings.',
      },
      {
        title: 'Skeptical View',
        content:
          'Most cases have been attributed to unnoticed heat sources or fraud. True pyrokinesis remains unverified.',
      },
    ],
  },
  {
    id: 'ps-64',
    name: 'Remote Empathy Spikes',
    description: 'Sudden emotional surges linked to distant people',
    categoryId: 'psychic',
    icon: '💞',
    sections: [
      {
        title: 'Overview',
        content:
          'Remote empathy spikes occur when a person feels another’s emotions from afar—often during moments of crisis or intense joy.',
      },
      {
        title: 'Examples',
        content:
          'Parents sensing danger to children, twins sharing emotional highs, or partners feeling unexplained dread simultaneously.',
      },
      {
        title: 'Theories',
        content:
          'Telepathic resonance, emotional entanglement, and subconscious cue detection are competing explanations.',
      },
    ],
  },
  {
    id: 'ps-65',
    name: 'Remote Viewing',
    description: 'Perceiving distant locations through psychic means',
    categoryId: 'psychic',
    icon: '👁️',
    sections: [
      {
        title: 'Overview',
        content:
          'Remote viewing involves describing hidden or distant targets using mental imagery. The method was central to the U.S. Stargate Project.',
      },
      {
        title: 'Methods',
        content:
          'Structured protocols, coordinate-based sessions, and sensory descriptors form the backbone of modern RV techniques.',
      },
      {
        title: 'Skepticism',
        content:
          'Critics argue that descriptions are vague and easily retrofitted. Still, many RV practitioners claim consistent above-chance accuracy.',
      },
    ],
  },
  {
    id: 'ps-66',
    name: 'Retrocognition Past Sight',
    description: 'Perceiving past events through psychic impressions',
    categoryId: 'psychic',
    icon: '📜',
    sections: [
      {
        title: 'Overview',
        content:
          'Retrocognition refers to gaining knowledge of past events through visions, sounds, or empathic impressions. Unlike historical research, the information arises spontaneously or through trance.',
      },
      {
        title: 'Examples',
        content:
          'People report seeing battlefields before they existed, hearing past conversations, or sensing tragedies that happened in specific locations.',
      },
      {
        title: 'Theories',
        content:
          'Some propose time is layered and impressions linger. Skeptics cite suggestibility and subconscious inference.',
      },
    ],
  },
  {
    id: 'ps-67',
    name: 'Séance Spirit Contact',
    description: 'Group attempts to communicate with spirits',
    categoryId: 'psychic',
    icon: '🕯️',
    sections: [
      {
        title: 'Overview',
        content:
          'Séances are structured gatherings meant to communicate with spirits. Techniques range from table-tipping to automatic writing and trance mediumship.',
      },
      {
        title: 'Reported Phenomena',
        content:
          'Voices, knocks, temperature drops, shadow forms, and moving objects are commonly reported during sessions.',
      },
      {
        title: 'Skeptical Views',
        content:
          'Many séance phenomena have been replicated with stage magic. However, some recordings and testimonies defy easy explanation.',
      },
    ],
  },
  {
    id: 'ps-68',
    name: 'Sensory Bleed-through',
    description: 'Cross-sensory psychic impressions blending senses',
    categoryId: 'psychic',
    icon: '🎚️',
    sections: [
      {
        title: 'Overview',
        content:
          'Sensory bleed-through occurs when psychic impressions manifest as mixed sensations—seeing sounds, tasting emotions, or hearing colors.',
      },
      {
        title: 'Reports',
        content:
          'Empaths describe feeling physical sensations when perceiving others’ emotions. Clairvoyants sometimes “hear” symbols or “feel” visions.',
      },
      {
        title: 'Interpretations',
        content:
          'Linked to synesthesia, dissociation, or heightened intuition. Some say it reflects multidimensional perception.',
      },
    ],
  },
  {
    id: 'ps-69',
    name: 'Shadow People',
    description: 'Dark humanoid figures perceived in peripheral or direct vision',
    categoryId: 'psychic',
    icon: '👤',
    sections: [
      {
        title: 'Overview',
        content:
          'Shadow people are fast-moving, featureless humanoid shapes seen during waking or liminal states. They may appear curious, watchful, or threatening.',
      },
      {
        title: 'Encounters',
        content:
          'Witnesses report figures standing in doorways, darting across rooms, or looming during sleep paralysis episodes.',
      },
      {
        title: 'Theories',
        content:
          'Interpretations range from interdimensional beings to hypnagogic hallucinations. Some link them to psychic vampires or astral parasites.',
      },
    ],
  },
  {
    id: 'ps-70',
    name: 'Shapeshifting Ability',
    description: 'Alleged transformation of body or astral form',
    categoryId: 'psychic',
    icon: '🐺',
    sections: [
      {
        title: 'Overview',
        content:
          'Shapeshifting appears in occult and shamanic traditions as the ability to assume animal or altered forms. Most claims describe astral or energetic shifts, not physical transformation.',
      },
      {
        title: 'Reports',
        content:
          'Practitioners report seeing themselves as wolves, birds, or shadow forms during trances. Others claim temporary facial distortions witnessed by observers.',
      },
      {
        title: 'Perspectives',
        content:
          'Some interpret it as symbolic merging with animal archetypes. Skeptics cite pareidolia and dim lighting.',
      },
    ],
  },
  {
    id: 'ps-71',
    name: 'Shared Consciousness Epiphanies',
    description: 'Moments where multiple people share identical insights',
    categoryId: 'psychic',
    icon: '🔗',
    sections: [
      {
        title: 'Overview',
        content:
          'Shared epiphanies occur when two or more people receive the same idea or revelation simultaneously, often during deep conversations or spiritual practices.',
      },
      {
        title: 'Examples',
        content:
          'Groups report identical mental images, identical solutions to problems, or synchronized emotional breakthroughs.',
      },
      {
        title: 'Interpretations',
        content:
          'Some attribute it to a shared consciousness field or telepathic resonance. Others cite subconscious mirroring.',
      },
    ],
  },
  {
    id: 'ps-72',
    name: 'Shared Dreaming',
    description: 'Two or more individuals experiencing the same dream narrative',
    categoryId: 'psychic',
    icon: '🌌',
    sections: [
      {
        title: 'Overview',
        content:
          'Shared dreaming involves two or more people independently reporting the same dream, characters, or events—sometimes with matching details.',
      },
      {
        title: 'Cases',
        content:
          'Partners, twins, and close friends report meeting each other in dream worlds or sharing identical dream settings.',
      },
      {
        title: 'Skepticism',
        content:
          'Skeptics suggest post-dream discussion influences memory. Supporters argue some accounts contain verified, independent overlap.',
      },
    ],
  },
  {
    id: 'ps-73',
    name: 'Shared Hallucinations',
    description: 'Multiple people perceiving the same anomalous stimulus',
    categoryId: 'psychic',
    icon: '🫂',
    sections: [
      {
        title: 'Overview',
        content:
          'Shared hallucinations occur when groups simultaneously see or hear an entity, shape, or sound that has no apparent physical source.',
      },
      {
        title: 'Reports',
        content:
          'Documented cases include ghost sightings, battlefield apparitions, and mass visions during religious events.',
      },
      {
        title: 'Interpretations',
        content:
          'Theories include telepathic projection, emotional entrainment, and mass psychogenic events.',
      },
    ],
  },
  {
    id: 'ps-74',
    name: 'Sleep Paralysis Demons',
    description: 'Entities perceived during paralysis episodes',
    categoryId: 'psychic',
    icon: '🛌',
    sections: [
      {
        title: 'Overview',
        content:
          'Sleep paralysis demons appear as humanoid or monstrous forms encountered during REM intrusion. They often coincide with Old Hag Syndrome.',
      },
      {
        title: 'Reports',
        content:
          'Shadow beings, faceless figures, crawling creatures, or whispering presences are commonly reported.',
      },
      {
        title: 'Explanation',
        content:
          'Neurology links them to dream imagery crossing into waking perception. Paranormal theories interpret them as real entities interacting with vulnerable states.',
      },
    ],
  },
  {
    id: 'ps-75',
    name: 'Soul Flight Shamanic',
    description: 'Shamanic travel through spirit realms',
    categoryId: 'psychic',
    icon: '🦅',
    sections: [
      {
        title: 'Overview',
        content:
          'Soul flight is a core shamanic practice where the practitioner’s spirit journeys to upper, middle, or lower worlds for healing or knowledge.',
      },
      {
        title: 'Experiences',
        content:
          'Shamans describe flying over landscapes, meeting guides, and interacting with ancestor spirits.',
      },
      {
        title: 'Interpretation',
        content:
          'Anthropologists view it as controlled visionary trance. Mystics argue it represents genuine non-physical travel.',
      },
    ],
  },
  {
    id: 'ps-76',
    name: 'Subconscious Overflow Phenomena',
    description: 'Uncontrolled release of psychic information or emotion',
    categoryId: 'psychic',
    icon: '🌊',
    sections: [
      {
        title: 'Overview',
        content:
          'This term describes sudden bursts of psychic impressions, visions, or emotional surges when the subconscious becomes overloaded.',
      },
      {
        title: 'Examples',
        content:
          'Automatic writing outbursts, spontaneous crying with no cause, or visions erupting during stress.',
      },
      {
        title: 'Theories',
        content:
          'Could reflect psi sensitivity combined with emotional saturation. Psychologists parallel it with dissociation or trauma release.',
      },
    ],
  },
  {
    id: 'ps-77',
    name: 'Telekinesis',
    description: 'Moving objects with mental intent',
    categoryId: 'psychic',
    icon: '✨',
    sections: [
      {
        title: 'Overview',
        content:
          'Telekinesis involves influencing the physical world with thought alone. It overlaps with psychokinesis but often refers to macro-scale motion.',
      },
      {
        title: 'Reports',
        content:
          'Sliding objects, flickering lights, or bending utensils under intense focus.',
      },
      {
        title: 'Skepticism',
        content:
          'Most demonstrations fail under controlled conditions. Still, parapsychology continues micro-PK research.',
      },
    ],
  },
  {
    id: 'ps-78',
    name: 'Telepathic Triangulation',
    description: 'Three-way telepathic exchanges forming stable networks',
    categoryId: 'psychic',
    icon: '📡',
    sections: [
      {
        title: 'Overview',
        content:
          'Triangulated telepathy involves three individuals sharing impressions simultaneously, forming a stable psychic circuit stronger than one-to-one telepathy.',
      },
      {
        title: 'Cases',
        content:
          'Groups claim shared symbols, emotions, and synchronized thought streams during meditation.',
      },
      {
        title: 'Theories',
        content:
          'Some propose resonance amplification when three minds align. Skeptics cite group dynamics and suggestion.',
      },
    ],
  },
  {
    id: 'ps-79',
    name: 'Telepathy Mind Reading',
    description: 'Direct reception of another’s thoughts or emotions',
    categoryId: 'psychic',
    icon: '🧠',
    sections: [
      {
        title: 'Overview',
        content:
          'Telepathy is the transmission of thoughts or feelings without physical interaction. It is one of the most widely reported psychic abilities.',
      },
      {
        title: 'Cases',
        content:
          'Twins anticipating each other’s words, partners sensing emotional shifts, and experimental successes in Ganzfeld studies.',
      },
      {
        title: 'Criticism',
        content:
          'Skeptics argue that subconscious cues and inference explain most results, though statistical anomalies persist.',
      },
    ],
  },
  {
    id: 'ps-80',
    name: 'Teleportation Cases',
    description: 'Claims of instantaneous relocation',
    categoryId: 'psychic',
    icon: '🌀',
    sections: [
      {
        title: 'Overview',
        content:
          'Teleportation cases involve sudden disappearance from one location and reappearance in another, often with missing time.',
      },
      {
        title: 'Historical Reports',
        content:
          'Monks, saints, and occultists have alleged teleportation events. Some abductees claim instantaneous relocation during encounters.',
      },
      {
        title: 'Scientific Views',
        content:
          'No verified case exists. Misperception, memory gaps, or altered states likely contribute.',
      },
    ],
  },
  {
    id: 'ps-81',
    name: 'Temporal Bleedthrough Dreams',
    description: 'Dreams overlapping with past or future timelines',
    categoryId: 'psychic',
    icon: '🕰️',
    sections: [
      {
        title: 'Overview',
        content:
          'These dreams appear as vivid experiences of events from another time—past or future—that later correlate with real-world details.',
      },
      {
        title: 'Examples',
        content:
          'Dreaming of a future conversation verbatim, or witnessing past scenes that match later-discovered history.',
      },
      {
        title: 'Interpretations',
        content:
          'Supporters cite nonlinear consciousness. Skeptics cite memory stitching and subconscious deduction.',
      },
    ],
  },
  {
    id: 'ps-82',
    name: 'Third Eye Activation',
    description: 'Awakening of intuitive and psychic perception',
    categoryId: 'psychic',
    icon: '👁️‍🗨️',
    sections: [
      {
        title: 'Overview',
        content:
          'Third eye activation involves the perceived opening of the inner eye, expanding intuition, clairvoyance, and energy perception.',
      },
      {
        title: 'Effects',
        content:
          'Vivid visions, increased synchronicity, pressure at the forehead, and emotional clarity.',
      },
      {
        title: 'Perspectives',
        content:
          'Mystical systems see it as spiritual evolution. Science sees altered states from meditation or expectation.',
      },
    ],
  },
  {
    id: 'ps-83',
    name: 'Tulpas Thoughtforms',
    description: 'Entities created through concentrated mental energy',
    categoryId: 'psychic',
    icon: '🪷',
    sections: [
      {
        title: 'Overview',
        content:
          'Tulpas are mental constructs that gain autonomous behavior through sustained focus and emotional investment.',
      },
      {
        title: 'Evidence',
        content:
          'Practitioners report their tulpas communicating independently, showing preferences, or influencing dreams.',
      },
      {
        title: 'Skeptical Views',
        content:
          'Likely a form of dissociative imagination, though some experiences suggest complex subconscious processes.',
      },
    ],
  },
  {
    id: 'ps-84',
    name: 'Vardøger Spirit Precursor',
    description: 'Phenomenon where one’s double is perceived before arrival',
    categoryId: 'psychic',
    icon: '👥',
    sections: [
      {
        title: 'Overview',
        content:
          'A vardøger is a spiritual “forerunner” appearing or making sounds before the real person arrives—common in Scandinavian lore.',
      },
      {
        title: 'Reports',
        content:
          'Footsteps, voices, or full apparitions of someone moments before they walk through the door.',
      },
      {
        title: 'Explanations',
        content:
          'Seen as psychic echoes, astral projections, or time slips. Skeptics cite misheard sounds and expectation.',
      },
    ],
  },
  {
    id: 'ps-85',
    name: 'Xenoglossy Unknown Languages',
    description: 'Speaking or writing languages never learned',
    categoryId: 'psychic',
    icon: '📖',
    sections: [
      {
        title: 'Overview',
        content:
          'Xenoglossy involves spontaneous fluency in foreign or ancient languages during trance, possession, or trauma.',
      },
      {
        title: 'Cases',
        content:
          'Individuals speaking Sanskrit, Aramaic, or fluently conversing in languages they have never studied.',
      },
      {
        title: 'Criticism',
        content:
          'Skeptics argue mispronunciation, fragmentary recall, or subconscious exposure explain these cases. Some remain enigmatic.',
      },
    ],
  },
  {
    id: 'ps-86',
    name: 'Zener Card Experiments',
    description: 'Classic ESP tests using symbolic cards',
    categoryId: 'psychic',
    icon: '🃏',
    sections: [
      {
        title: 'Overview',
        content:
          'Zener cards were created in the 1930s by psychologist Karl Zener and parapsychologist J.B. Rhine to test telepathy and clairvoyance. The deck uses five symbols: star, square, waves, circle, and cross.',
      },
      {
        title: 'Experiments',
        content:
          'Subjects attempt to guess cards unseen or send the symbols telepathically. Thousands of trials at Duke University produced statistical anomalies that supporters believed indicated ESP.',
      },
      {
        title: 'Skeptical Views',
        content:
          'Critics noted sensory leakage, poor controls, and methodological flaws. Later replications yielded inconsistent results. Despite debate, Zener cards remain iconic in parapsychology.',
      },
    ],
  },
  {
    id: 'ps-87',
    name: '11:11 Phenomenon (Expanded Variant)',
    description: 'Deep-dive variant describing synchronicity triggers',
    categoryId: 'psychic',
    icon: '⏱️',
    sections: [
      {
        title: 'Overview',
        content:
          'This expanded entry explores the metaphysical framing of 11:11 beyond simple pattern recognition, diving into numerology, awakening phases, and psychic resonance.',
      },
      {
        title: 'Activation Reports',
        content:
          'People describe life-changing moments, sudden awakenings, and intuitive surges triggered by repeated 11:11 alignments. Some interpret it as a cosmic alignment signal.',
      },
      {
        title: 'Interpretation',
        content:
          'Mystics see 11:11 as a gateway number reflecting symmetry between realms. Critics maintain it is a cognitive bias enhanced by emotional meaning-making.',
      },
    ],
  },
  {
    id: 'ps-88',
    name: 'Psychic Residue Imprints',
    description: 'Lingering energy signatures left by strong emotions',
    categoryId: 'psychic',
    icon: '🫧',
    sections: [
      {
        title: 'Overview',
        content:
          'Psychic residue refers to emotional or mental impressions left behind in spaces, objects, or people. These imprints are weaker than full hauntings but can influence mood and perception.',
      },
      {
        title: 'Common Signs',
        content:
          'Sudden sadness entering a room, magnetic emotional pull toward certain objects, or atmospheric heaviness in sites of historical trauma.',
      },
      {
        title: 'Perspectives',
        content:
          'Investigators link residue to stone tape theory. Skeptics argue environmental cues trigger subconscious emotional responses.',
      },
    ],
  },
  {
    id: 'ps-89',
    name: 'Psi Amplification Fields',
    description: 'Areas where psychic abilities appear heightened',
    categoryId: 'psychic',
    icon: '📈',
    sections: [
      {
        title: 'Overview',
        content:
          'Certain locations—mountaintops, ancient temples, underground caverns—are reported to “boost” psychic perception. These areas may coincide with geologic anomalies or historical ritual sites.',
      },
      {
        title: 'Reported Effects',
        content:
          'Clearer visions, stronger telepathy, intense synchronicities, and amplified emotional release during meditation or rituals.',
      },
      {
        title: 'Possible Causes',
        content:
          'Geomagnetism, infrasound, or cultural expectation may play roles. Mystics see them as natural energy vortices.',
      },
    ],
  },
  {
    id: 'ps-90',
    name: 'Thoughtform Echoes',
    description: 'Reverberations of repeated thoughts creating psychic feedback',
    categoryId: 'psychic',
    icon: '🪰',
    sections: [
      {
        title: 'Overview',
        content:
          'Thoughtform echoes are low-level psychic constructs created unintentionally through obsessive thinking, grief, or fixation. They behave like semi-conscious loops.',
      },
      {
        title: 'Experiences',
        content:
          'People describe feeling “followed” by an emotional pattern or hearing a recurring phrase internally that isn’t their own voice.',
      },
      {
        title: 'Interpretation',
        content:
          'Occultists see echoes as proto-tulpas. Psychologists interpret them as cognitive ruts manifesting symbolically.',
      },
    ],
  },
];

export const getPsychicById = (id: string): PsychicTopic | undefined => {
  return psychicData.find(psychic => psychic.id === id);
};

export const getPsychicByName = (name: string): PsychicTopic | undefined => {
  return psychicData.find(psychic => psychic.name.toLowerCase() === name.toLowerCase());
};

/**
 * Get all psychic topics
 * @returns Array of all psychic topics
 */
export const getAllPsychic = (): readonly PsychicTopic[] => {
  return psychicData;
};

/**
 * Get count of psychic topics
 * @returns Total number of psychic topics
 */
export const getPsychicCount = (): number => {
  return psychicData.length;
};
