
import { TopicSection } from './types';

export interface GlossaryEntry {
  id: string;
  term: string;
  definition: string;
  category: string;
  sections: TopicSection[];
}

export const glossaryData: GlossaryEntry[] = [
  // A
  {
    id: 'gl-1',
    term: 'Apparition',
    definition: 'A supernatural appearance of a person or thing, especially a ghost',
    category: 'Paranormal Terms',
    sections: [
      {
        title: 'Types',
        content: 'Full-body apparitions appear as complete figures. Partial apparitions show only parts of a body. Crisis apparitions appear at the moment of death or trauma. Residual apparitions replay past events.',
      },
      {
        title: 'Characteristics',
        content: 'Apparitions may be transparent or solid, aware or unaware of observers. They can appear in mirrors, photographs, or directly to witnesses. Some interact with the environment, while others pass through objects.',
      },
      {
        title: 'Scientific Theories',
        content: 'Explanations include hallucinations, electromagnetic field effects on the brain, quantum consciousness, or actual spirits. Parapsychologists study apparitions using EMF meters and thermal cameras.',
      },
    ],
  },
  {
    id: 'gl-2',
    term: 'Astral Plane',
    definition: 'A plane of existence believed to be inhabited by spirits and accessible through astral projection',
    category: 'Metaphysical Concepts',
    sections: [
      {
        title: 'Description',
        content: 'The astral plane is described as a dimension parallel to the physical world, inhabited by spirits, thought-forms, and other non-physical entities. It\'s said to be accessible through meditation or out-of-body experiences.',
      },
      {
        title: 'Characteristics',
        content: 'Time and space work differently on the astral plane. Thought manifests instantly, allowing travelers to fly, teleport, or change their appearance. The environment reflects the traveler\'s mental state.',
      },
      {
        title: 'Dangers',
        content: 'Practitioners warn of negative entities, getting lost, or the silver cord (connecting astral and physical bodies) being severed. Skeptics attribute astral experiences to lucid dreaming or sleep paralysis.',
      },
    ],
  },
  {
    id: 'gl-3',
    term: 'Aura',
    definition: 'An energy field believed to surround living beings',
    category: 'Psychic Phenomena',
    sections: [
      {
        title: 'Description',
        content: 'Auras are described as colored energy fields surrounding the body. Different colors allegedly indicate different emotional, spiritual, or physical states. Some people claim to see auras naturally.',
      },
      {
        title: 'Reading Auras',
        content: 'Practitioners use various techniques to read auras, including meditation, special photography (Kirlian), or natural psychic ability. Each color has specific meanings - red for passion, blue for calm, etc.',
      },
      {
        title: 'Scientific Perspective',
        content: 'Scientists attribute aura sightings to optical illusions, synesthesia, or the brain\'s edge detection systems. Kirlian photography is explained by corona discharge, not spiritual energy.',
      },
    ],
  },
  // B
  {
    id: 'gl-4',
    term: 'Banshee',
    definition: 'A female spirit in Irish folklore whose wailing warns of death',
    category: 'Folklore',
    sections: [
      {
        title: 'Legend',
        content: 'The banshee is a harbinger of death in Irish and Scottish folklore. Her mournful wail or keening is heard when someone is about to die. She appears as a woman washing bloody clothes at a river.',
      },
      {
        title: 'Appearance',
        content: 'Banshees are described as beautiful young women, matrons, or old hags. They wear white, gray, or green cloaks. Their eyes are red from constant weeping. Some families have specific banshees attached to them.',
      },
      {
        title: 'Modern Sightings',
        content: 'Reports of banshee encounters continue in Ireland and Scotland. Witnesses describe hearing unearthly wailing before family deaths. Some claim to have seen the washing woman by rivers at night.',
      },
    ],
  },
  {
    id: 'gl-5',
    term: 'Bilocation',
    definition: 'The ability to be in two places at once',
    category: 'Paranormal Abilities',
    sections: [
      {
        title: 'Phenomenon',
        content: 'Bilocation is the alleged ability to be physically present in two different locations simultaneously. Religious figures, mystics, and saints have been credited with this ability throughout history.',
      },
      {
        title: 'Famous Cases',
        content: 'Padre Pio, a Catholic saint, was reportedly seen in two places at once multiple times. Witnesses testified to seeing him in Italy while he was simultaneously appearing to soldiers in battle.',
      },
      {
        title: 'Explanations',
        content: 'Theories include astral projection, quantum entanglement, mistaken identity, or actual supernatural ability. Skeptics suggest mass hallucination or coordinated deception.',
      },
    ],
  },
  // C
  {
    id: 'gl-6',
    term: 'Clairvoyance',
    definition: 'The ability to gain information about objects, people, or events through extrasensory perception',
    category: 'Psychic Abilities',
    sections: [
      {
        title: 'Types',
        content: 'Clairvoyance (clear seeing), clairaudience (clear hearing), clairsentience (clear feeling), and claircognizance (clear knowing) are the main types. Each involves receiving information through different psychic senses.',
      },
      {
        title: 'Historical Use',
        content: 'Clairvoyants have been consulted by royalty, military leaders, and police departments. Edgar Cayce, Nostradamus, and Baba Vanga are famous clairvoyants who made predictions that allegedly came true.',
      },
      {
        title: 'Scientific Testing',
        content: 'Controlled experiments have produced mixed results. Some studies show statistical significance above chance, while others find no evidence. The debate between believers and skeptics continues.',
      },
    ],
  },
  {
    id: 'gl-7',
    term: 'Cryptid',
    definition: 'An animal whose existence is disputed or unsubstantiated',
    category: 'Cryptozoology',
    sections: [
      {
        title: 'Famous Examples',
        content: 'Bigfoot, Loch Ness Monster, Chupacabra, Mothman, and the Jersey Devil are well-known cryptids. Some, like the giant squid and okapi, were once cryptids but are now confirmed to exist.',
      },
      {
        title: 'Evidence',
        content: 'Cryptid evidence includes eyewitness accounts, footprints, hair samples, photographs, and videos. Most evidence is inconclusive or proven to be hoaxes, but some cases remain unexplained.',
      },
      {
        title: 'Cryptozoology',
        content: 'The study of cryptids is called cryptozoology. While not recognized as a legitimate science, cryptozoologists have occasionally discovered new species, lending some credibility to the field.',
      },
    ],
  },
  {
    id: 'gl-8',
    term: 'Curse',
    definition: 'A supernatural invocation of harm or punishment',
    category: 'Occult Practices',
    sections: [
      {
        title: 'Types',
        content: 'Curses can be spoken, written, or performed through rituals. They may target individuals, families, or objects. Famous curses include the Hope Diamond curse and the curse of Tutankhamun\'s tomb.',
      },
      {
        title: 'Breaking Curses',
        content: 'Various traditions offer methods to break curses: cleansing rituals, counter-spells, spiritual protection, or simply refusing to believe in the curse. Some require the original caster to remove it.',
      },
      {
        title: 'Psychological Impact',
        content: 'Whether real or not, belief in curses can cause genuine harm through the nocebo effect. People who believe they\'re cursed may experience real physical and psychological symptoms.',
      },
    ],
  },
  // D
  {
    id: 'gl-9',
    term: 'Demon',
    definition: 'A malevolent supernatural entity',
    category: 'Paranormal Entities',
    sections: [
      {
        title: 'Characteristics',
        content: 'Demons are described as evil spirits that can possess humans, cause illness, and create chaos. Different religions and cultures have varying beliefs about their nature, hierarchy, and powers.',
      },
      {
        title: 'Possession',
        content: 'Demonic possession involves a demon taking control of a human body. Signs include speaking in unknown languages, supernatural strength, aversion to holy objects, and knowledge of hidden information.',
      },
      {
        title: 'Exorcism',
        content: 'Exorcism is the practice of expelling demons. The Catholic Church has official exorcists, and the ritual involves prayers, holy water, and commanding the demon to leave in God\'s name.',
      },
    ],
  },
  {
    id: 'gl-10',
    term: 'Doppelgänger',
    definition: 'A paranormal double or look-alike of a living person',
    category: 'Paranormal Phenomena',
    sections: [
      {
        title: 'Characteristics',
        content: 'A doppelgänger is an exact duplicate of a living person, often seen by the person themselves or by others. It may mimic the person\'s behavior or act independently. Seeing one\'s doppelgänger is considered an omen of death.',
      },
      {
        title: 'Famous Cases',
        content: 'Abraham Lincoln saw his doppelgänger in a mirror before his assassination. Queen Elizabeth I saw hers lying in bed. Percy Shelley saw his doppelgänger pointing at the sea before drowning.',
      },
      {
        title: 'Explanations',
        content: 'Theories include bilocation (being in two places at once), astral projection, parallel universe crossovers, or neurological conditions like autoscopy. The phenomenon remains unexplained.',
      },
    ],
  },
  {
    id: 'gl-11',
    term: 'Dowsing',
    definition: 'Using a rod or pendulum to locate underground water, metals, or other objects',
    category: 'Divination',
    sections: [
      {
        title: 'Method',
        content: 'Dowsers hold a forked stick, metal rods, or pendulum while walking over an area. The tool allegedly moves when passing over the target. Some dowsers claim to find water, minerals, or lost objects.',
      },
      {
        title: 'History',
        content: 'Dowsing has been practiced for thousands of years. It was used to locate water wells, mineral deposits, and even buried treasure. Some military forces have used dowsers to find landmines.',
      },
      {
        title: 'Scientific Testing',
        content: 'Controlled tests show dowsing performs no better than chance. Scientists attribute any success to the ideomotor effect, geological knowledge, or coincidence. Yet some dowsers maintain impressive success rates.',
      },
    ],
  },
  // E
  {
    id: 'gl-12',
    term: 'Ectoplasm',
    definition: 'A supernatural substance said to emanate from mediums during séances',
    category: 'Spiritualism',
    sections: [
      {
        title: 'Description',
        content: 'Ectoplasm is described as a viscous, cloudy substance that exudes from the orifices of mediums. It can take various forms, from mist to solid shapes, and allegedly allows spirits to manifest physically.',
      },
      {
        title: 'Historical Context',
        content: 'Popular in the late 19th and early 20th centuries during the Spiritualism movement. Many famous mediums were caught faking ectoplasm using cheesecloth, egg whites, and other materials.',
      },
      {
        title: 'Modern Perspective',
        content: 'Most scientists consider ectoplasm a hoax. However, some parapsychologists believe genuine ectoplasm may exist as a form of psychokinetic energy that can be photographed under specific conditions.',
      },
    ],
  },
  {
    id: 'gl-13',
    term: 'Egregore',
    definition: 'A collective thought-form created by groups',
    category: 'Occult Phenomena',
    sections: [
      {
        title: 'Definition',
        content: 'An egregore is an autonomous psychic entity created by the collective thoughts, emotions, and beliefs of a group. It feeds on the group\'s energy and can influence members\' thoughts and actions.',
      },
      {
        title: 'Formation',
        content: 'Egregores form when groups share intense beliefs, rituals, or emotions. Corporations, nations, religions, and online communities can create egregores. The more energy fed to it, the more powerful it becomes.',
      },
      {
        title: 'Examples',
        content: 'Some believe corporate brands, political movements, and internet memes are egregores. The "Pepe the Frog" phenomenon is cited as a modern egregore that took on a life of its own.',
      },
    ],
  },
  {
    id: 'gl-14',
    term: 'EMF',
    definition: 'Electromagnetic Field - often associated with paranormal activity',
    category: 'Investigation Tools',
    sections: [
      {
        title: 'Paranormal Connection',
        content: 'Ghost hunters use EMF meters to detect electromagnetic fields, believing spirits manipulate these fields. Spikes in EMF readings are considered evidence of paranormal presence.',
      },
      {
        title: 'Natural Sources',
        content: 'EMF is produced by electrical wiring, appliances, power lines, and natural sources. High EMF exposure can cause hallucinations, paranoia, and feelings of being watched - mimicking haunting symptoms.',
      },
      {
        title: 'The Debate',
        content: 'Skeptics argue EMF readings in haunted locations are from mundane sources and that EMF-induced hallucinations explain ghost sightings. Believers maintain that spirits use EMF to manifest.',
      },
    ],
  },
  {
    id: 'gl-15',
    term: 'EVP',
    definition: 'Electronic Voice Phenomena - mysterious voices captured on recording devices',
    category: 'Paranormal Evidence',
    sections: [
      {
        title: 'Description',
        content: 'EVP are sounds or voices found on electronic recordings that weren\'t audible during recording. They allegedly represent communication from spirits, often answering questions or making statements.',
      },
      {
        title: 'Classification',
        content: 'EVP are classified by clarity: Class A (clearly audible), Class B (requires interpretation), Class C (barely audible). Most EVP fall into Class B or C, leading to subjective interpretation.',
      },
      {
        title: 'Explanations',
        content: 'Skeptics attribute EVP to radio interference, pareidolia (hearing patterns in random noise), or audio artifacts. Believers maintain that some EVP are too clear and contextually relevant to dismiss.',
      },
    ],
  },
  {
    id: 'gl-16',
    term: 'Exorcism',
    definition: 'The practice of expelling demons or evil spirits',
    category: 'Religious Practices',
    sections: [
      {
        title: 'Procedure',
        content: 'Exorcisms involve prayers, commands, holy water, and religious symbols. The Catholic Church requires medical and psychological evaluation before performing exorcisms. The ritual can last hours or days.',
      },
      {
        title: 'Signs of Possession',
        content: 'Indicators include speaking unknown languages, supernatural strength, knowledge of hidden information, aversion to holy objects, and dramatic personality changes. Medical conditions must be ruled out first.',
      },
      {
        title: 'Modern Practice',
        content: 'The Catholic Church still trains exorcists and performs exorcisms. Reports of possessions have increased in recent years. Other religions and cultures have their own exorcism traditions.',
      },
    ],
  },
  // F
  {
    id: 'gl-17',
    term: 'Familiar',
    definition: 'A spirit or animal that assists a witch or magician',
    category: 'Occult Practices',
    sections: [
      {
        title: 'Description',
        content: 'Familiars are supernatural entities that serve witches, often taking animal form. Cats, ravens, toads, and snakes are common. They allegedly help with magic, provide protection, and carry out tasks.',
      },
      {
        title: 'Historical Context',
        content: 'During witch trials, owning unusual pets was evidence of witchcraft. Many innocent people were executed because they had cats or other animals. The familiar was said to be a demon in animal form.',
      },
      {
        title: 'Modern Interpretation',
        content: 'Contemporary witches view familiars as spiritual companions or animal guides rather than demons. Some believe familiars are astral entities, while others see them as physical animals with special bonds.',
      },
    ],
  },
  {
    id: 'gl-18',
    term: 'Feng Shui',
    definition: 'Ancient Chinese practice of harmonizing energy in spaces',
    category: 'Energy Work',
    sections: [
      {
        title: 'Principles',
        content: 'Feng Shui involves arranging spaces to optimize the flow of chi (life energy). Proper placement of furniture, colors, and objects allegedly brings health, wealth, and happiness.',
      },
      {
        title: 'Elements',
        content: 'The five elements (wood, fire, earth, metal, water) must be balanced. Each element corresponds to colors, shapes, and directions. The bagua map divides spaces into areas affecting different life aspects.',
      },
      {
        title: 'Western Adoption',
        content: 'Feng Shui has become popular in Western interior design and architecture. While some dismiss it as superstition, others report improved well-being after applying its principles.',
      },
    ],
  },
  // G
  {
    id: 'gl-19',
    term: 'Ghost',
    definition: 'The spirit or soul of a deceased person',
    category: 'Paranormal Entities',
    sections: [
      {
        title: 'Types',
        content: 'Intelligent ghosts interact with the living. Residual ghosts replay past events like recordings. Poltergeists move objects and create noise. Shadow people appear as dark silhouettes.',
      },
      {
        title: 'Why Ghosts Remain',
        content: 'Theories include unfinished business, traumatic death, strong emotional attachment, or not realizing they\'re dead. Some believe ghosts are trapped between worlds or choose to stay.',
      },
      {
        title: 'Evidence',
        content: 'Ghost evidence includes photographs, videos, EVP, EMF readings, and eyewitness accounts. While most can be explained naturally, some cases remain genuinely mysterious.',
      },
    ],
  },
  {
    id: 'gl-20',
    term: 'Grimoire',
    definition: 'A book of magic spells and invocations',
    category: 'Occult Texts',
    sections: [
      {
        title: 'Contents',
        content: 'Grimoires contain spells, rituals, magical symbols, and instructions for summoning spirits. Famous examples include the Key of Solomon, the Lesser Key of Solomon, and the Book of Abramelin.',
      },
      {
        title: 'Historical Significance',
        content: 'Medieval grimoires were highly sought after and dangerous to possess. Owning one could result in execution for witchcraft. They were often attributed to legendary figures like King Solomon.',
      },
      {
        title: 'Modern Use',
        content: 'Contemporary occultists still use grimoires, though many create personal ones (Book of Shadows). Some view them as psychological tools, while others believe they contain genuine magical power.',
      },
    ],
  },
  // H
  {
    id: 'gl-21',
    term: 'Haunting',
    definition: 'Persistent paranormal activity in a location',
    category: 'Paranormal Phenomena',
    sections: [
      {
        title: 'Types',
        content: 'Residual hauntings replay past events. Intelligent hauntings involve interactive spirits. Poltergeist hauntings feature moving objects and loud noises. Demonic hauntings are malevolent and dangerous.',
      },
      {
        title: 'Common Signs',
        content: 'Cold spots, unexplained sounds, objects moving, doors opening/closing, apparitions, feelings of being watched, electronic malfunctions, and pets acting strangely are typical haunting signs.',
      },
      {
        title: 'Causes',
        content: 'Hauntings may be caused by traumatic events, deaths, strong emotions, or ley lines. Some locations seem more prone to hauntings - old buildings, battlefields, hospitals, and cemeteries.',
      },
    ],
  },
  {
    id: 'gl-22',
    term: 'Hex',
    definition: 'A spell or curse intended to cause harm',
    category: 'Occult Practices',
    sections: [
      {
        title: 'Practice',
        content: 'Hexes are cast through rituals, spoken words, or symbolic actions. They may target health, relationships, finances, or luck. Some traditions forbid hexing, while others see it as justified in certain situations.',
      },
      {
        title: 'Protection',
        content: 'Protection methods include amulets, counter-spells, salt circles, and spiritual cleansing. Some believe simply not believing in hexes renders them powerless.',
      },
      {
        title: 'Ethical Debate',
        content: 'The Wiccan Rede states "harm none," forbidding hexes. However, some practitioners believe in defensive magic or karmic justice. The ethics of hexing remain controversial in magical communities.',
      },
    ],
  },
  // I
  {
    id: 'gl-23',
    term: 'Incubus',
    definition: 'A male demon that sexually assaults sleeping women',
    category: 'Demonic Entities',
    sections: [
      {
        title: 'Legend',
        content: 'Incubi are demons that visit women at night, causing sleep paralysis and nightmares. Medieval accounts describe them as seductive but ultimately terrifying. They allegedly father children called cambions.',
      },
      {
        title: 'Historical Context',
        content: 'Incubus attacks were used to explain pregnancy outside marriage, nocturnal emissions, and sleep disorders. Many women were accused of consorting with demons during witch trials.',
      },
      {
        title: 'Modern Interpretation',
        content: 'Scientists attribute incubus experiences to sleep paralysis, hypnagogic hallucinations, and sexual dreams. However, some people still report terrifying encounters matching historical descriptions.',
      },
    ],
  },
  {
    id: 'gl-24',
    term: 'Intuition',
    definition: 'The ability to understand something without conscious reasoning',
    category: 'Psychic Abilities',
    sections: [
      {
        title: 'Description',
        content: 'Intuition is often called a "gut feeling" or "sixth sense." It involves knowing something without knowing how you know it. Some believe it\'s a form of psychic ability, while others see it as subconscious pattern recognition.',
      },
      {
        title: 'Development',
        content: 'Intuition can be strengthened through meditation, paying attention to subtle cues, and trusting initial impressions. Many successful people credit intuition for important decisions.',
      },
      {
        title: 'Scientific View',
        content: 'Neuroscientists believe intuition is the brain rapidly processing information below conscious awareness. It draws on past experiences and pattern recognition to make quick judgments.',
      },
    ],
  },
  // J
  {
    id: 'gl-25',
    term: 'Jinx',
    definition: 'A curse or spell that brings bad luck',
    category: 'Superstition',
    sections: [
      {
        title: 'Concept',
        content: 'A jinx is a minor curse that causes bad luck or misfortune. It can be intentional or accidental. Common jinxes include breaking mirrors, walking under ladders, or saying something will go well.',
      },
      {
        title: 'Breaking Jinxes',
        content: 'Methods include knocking on wood, throwing salt over the shoulder, or performing counter-rituals. Some believe acknowledging a jinx gives it power, while others think awareness helps break it.',
      },
      {
        title: 'Psychological Impact',
        content: 'Belief in jinxes can create self-fulfilling prophecies. People who think they\'re jinxed may unconsciously sabotage themselves or notice bad luck more readily, reinforcing the belief.',
      },
    ],
  },
  // K
  {
    id: 'gl-26',
    term: 'Karma',
    definition: 'The spiritual principle of cause and effect',
    category: 'Spiritual Concepts',
    sections: [
      {
        title: 'Principle',
        content: 'Karma states that actions have consequences, either in this life or future lives. Good actions create positive karma, bad actions create negative karma. It\'s central to Hinduism, Buddhism, and Jainism.',
      },
      {
        title: 'Misconceptions',
        content: 'Karma isn\'t cosmic revenge or instant justice. It\'s about learning and spiritual growth. Bad things happening to good people doesn\'t disprove karma - it may be from past lives or serve a purpose.',
      },
      {
        title: 'Western Interpretation',
        content: 'In the West, karma is often simplified to "what goes around comes around." While this captures the basic idea, traditional karma is more complex, involving intention, action, and spiritual evolution.',
      },
    ],
  },
  {
    id: 'gl-27',
    term: 'Kirlian Photography',
    definition: 'A technique that allegedly captures auras on film',
    category: 'Paranormal Investigation',
    sections: [
      {
        title: 'Method',
        content: 'Kirlian photography uses high voltage to create corona discharge around objects. The resulting images show colorful halos that some interpret as auras or life energy.',
      },
      {
        title: 'Claims',
        content: 'Proponents claim Kirlian photos reveal health, emotions, and spiritual states. Changes in the corona allegedly reflect changes in the subject\'s energy field or consciousness.',
      },
      {
        title: 'Scientific Explanation',
        content: 'Scientists attribute Kirlian effects to moisture, pressure, and electrical conductivity - not spiritual energy. The corona discharge is a well-understood physical phenomenon.',
      },
    ],
  },
  // L
  {
    id: 'gl-28',
    term: 'Levitation',
    definition: 'Rising or floating in the air without physical support',
    category: 'Paranormal Phenomena',
    sections: [
      {
        title: 'Religious Context',
        content: 'Many saints and mystics allegedly levitated during prayer or meditation. St. Joseph of Cupertino reportedly levitated so often it became a problem. Witnesses documented these events.',
      },
      {
        title: 'Mediumship',
        content: 'Spiritualist mediums claimed to levitate during séances. While many were exposed as frauds using hidden wires and tricks, some cases remain unexplained.',
      },
      {
        title: 'Modern Claims',
        content: 'Transcendental Meditation practitioners claim to achieve "yogic flying" through meditation. Videos show people bouncing in lotus position, though critics say it\'s not true levitation.',
      },
    ],
  },
  {
    id: 'gl-29',
    term: 'Ley Lines',
    definition: 'Alleged alignments of ancient sites and natural features',
    category: 'Earth Mysteries',
    sections: [
      {
        title: 'Concept',
        content: 'Ley lines are hypothetical alignments connecting ancient monuments, megaliths, and sacred sites. Proponents believe they represent paths of spiritual or electromagnetic energy crisscrossing the Earth.',
      },
      {
        title: 'Claims',
        content: 'Believers say ley lines mark ancient trade routes, astronomical alignments, or energy currents. Paranormal activity, UFO sightings, and spiritual experiences are said to be more common along ley lines.',
      },
      {
        title: 'Skepticism',
        content: 'Archaeologists and geographers dismiss ley lines as coincidental alignments. With enough points on a map, lines can be drawn connecting any sites. No scientific evidence supports energy currents.',
      },
    ],
  },
  {
    id: 'gl-30',
    term: 'Lucid Dreaming',
    definition: 'Being aware you\'re dreaming while still asleep',
    category: 'Consciousness',
    sections: [
      {
        title: 'Experience',
        content: 'Lucid dreamers can control their dreams, fly, visit impossible places, and interact with dream characters. Some use it for problem-solving, creativity, or spiritual exploration.',
      },
      {
        title: 'Techniques',
        content: 'Methods include reality checks, dream journals, MILD (Mnemonic Induction), WILD (Wake-Initiated), and supplements like galantamine. With practice, most people can learn to lucid dream.',
      },
      {
        title: 'Paranormal Connection',
        content: 'Some believe lucid dreams allow access to astral planes or communication with spirits. Others think they\'re purely neurological. The line between lucid dreaming and astral projection is debated.',
      },
    ],
  },
  // M
  {
    id: 'gl-31',
    term: 'Medium',
    definition: 'A person who communicates with spirits of the dead',
    category: 'Spiritualism',
    sections: [
      {
        title: 'Abilities',
        content: 'Mediums claim to receive messages from deceased spirits through clairvoyance, clairaudience, or channeling. They may relay specific information, personality traits, or messages from the other side.',
      },
      {
        title: 'Types',
        content: 'Mental mediums receive information psychically. Physical mediums produce phenomena like table tipping, ectoplasm, or materialization. Trance mediums allow spirits to speak through them.',
      },
      {
        title: 'Controversy',
        content: 'Many mediums have been exposed as frauds using cold reading and research. However, some provide information they seemingly couldn\'t know, keeping the debate alive.',
      },
    ],
  },
  {
    id: 'gl-32',
    term: 'Morphic Resonance',
    definition: 'The theory that memory is inherent in nature',
    category: 'Fringe Science',
    sections: [
      {
        title: 'Theory',
        content: 'Biologist Rupert Sheldrake proposes that natural systems inherit a collective memory from previous similar systems. This "morphic field" allows organisms to learn from their species\' past experiences.',
      },
      {
        title: 'Evidence',
        content: 'Sheldrake cites experiments where rats learn mazes faster if other rats have learned them before, even in different locations. Crystals form more easily after being created once.',
      },
      {
        title: 'Implications',
        content: 'If true, it would explain instincts, telepathy, and collective consciousness. It suggests memory isn\'t stored in the brain but accessed from a universal field. Mainstream science remains skeptical.',
      },
    ],
  },
  // N
  {
    id: 'gl-33',
    term: 'Near-Death Experience',
    definition: 'Profound experiences reported by people who nearly died',
    category: 'Consciousness',
    sections: [
      {
        title: 'Common Elements',
        content: 'NDEs often include out-of-body experiences, moving through a tunnel, seeing a bright light, meeting deceased relatives, life review, and feeling peace. Many report being told to return.',
      },
      {
        title: 'Transformative Effects',
        content: 'People who have NDEs often lose fear of death, become more spiritual, and report increased psychic abilities. The experience profoundly changes their worldview and priorities.',
      },
      {
        title: 'Explanations',
        content: 'Theories include oxygen deprivation, DMT release, brain activity during death, or actual glimpses of the afterlife. Research continues, with no consensus reached.',
      },
    ],
  },
  {
    id: 'gl-34',
    term: 'Necromancy',
    definition: 'The practice of communicating with the dead',
    category: 'Occult Practices',
    sections: [
      {
        title: 'History',
        content: 'Necromancy has been practiced since ancient times. It involves summoning spirits of the dead for divination, knowledge, or to command them. Most religions forbid it as dangerous and evil.',
      },
      {
        title: 'Methods',
        content: 'Techniques include rituals at graveyards, using personal items of the deceased, blood offerings, and specific incantations. Necromancers allegedly gain power over spirits through these practices.',
      },
      {
        title: 'Dangers',
        content: 'Practitioners warn that necromancy can attract malevolent entities, cause possession, or trap the necromancer between worlds. Many who dabbled in it reported terrifying consequences.',
      },
    ],
  },
  // O
  {
    id: 'gl-35',
    term: 'Orb',
    definition: 'Spherical anomalies appearing in photographs',
    category: 'Paranormal Evidence',
    sections: [
      {
        title: 'Appearance',
        content: 'Orbs appear as translucent or glowing spheres in photos and videos. They vary in size, color, and brightness. Some show internal patterns or move in intelligent ways.',
      },
      {
        title: 'Paranormal Interpretation',
        content: 'Ghost hunters believe orbs are spirits in their purest energy form. Different colors allegedly indicate different types of spirits or energy. Moving orbs are considered more significant.',
      },
      {
        title: 'Skeptical View',
        content: 'Most orbs are dust, moisture, or insects reflecting camera flash. Digital cameras are especially prone to creating orbs. True anomalous orbs are extremely rare.',
      },
    ],
  },
  {
    id: 'gl-36',
    term: 'Ouija Board',
    definition: 'A board used to communicate with spirits',
    category: 'Divination Tools',
    sections: [
      {
        title: 'How It Works',
        content: 'Users place their fingers on a planchette that moves across a board marked with letters, numbers, and words. The planchette allegedly spells out messages from spirits in response to questions.',
      },
      {
        title: 'History',
        content: 'Patented in 1890 as a parlor game, the Ouija board became associated with spiritualism. It gained popularity during WWI when families sought to contact deceased soldiers.',
      },
      {
        title: 'Controversy',
        content: 'Skeptics attribute movement to the ideomotor effect (unconscious muscle movements). Believers warn of demonic possession and negative entities. Many religions forbid its use.',
      },
    ],
  },
  {
    id: 'gl-37',
    term: 'Out-of-Body Experience',
    definition: 'The sensation of floating outside one\'s physical body',
    category: 'Consciousness',
    sections: [
      {
        title: 'Experience',
        content: 'OBEs involve feeling separated from the physical body, often floating above it. People report seeing their body from outside, traveling to distant locations, and passing through walls.',
      },
      {
        title: 'Triggers',
        content: 'OBEs can occur during sleep, meditation, near-death experiences, or spontaneously. Some people learn to induce them through specific techniques. They\'re more common than generally believed.',
      },
      {
        title: 'Explanations',
        content: 'Theories include actual soul separation, lucid dreaming, brain malfunction, or psychological dissociation. Some OBE reports include verifiable information about distant events.',
      },
    ],
  },
  // P
  {
    id: 'gl-38',
    term: 'Parapsychology',
    definition: 'The scientific study of paranormal phenomena',
    category: 'Scientific Study',
    sections: [
      {
        title: 'Focus Areas',
        content: 'Parapsychology studies ESP, telepathy, precognition, psychokinesis, and survival of consciousness after death. Researchers use controlled experiments and statistical analysis.',
      },
      {
        title: 'Controversy',
        content: 'Mainstream science largely rejects parapsychology due to lack of reproducible results and methodological concerns. However, some universities have parapsychology departments.',
      },
      {
        title: 'Notable Research',
        content: 'The Rhine Research Center, Princeton\'s PEAR lab, and the Koestler Parapsychology Unit have conducted decades of research. Some studies show statistically significant results.',
      },
    ],
  },
  {
    id: 'gl-39',
    term: 'Poltergeist',
    definition: 'A ghost or spirit that manifests by moving objects and creating noise',
    category: 'Paranormal Phenomena',
    sections: [
      {
        title: 'Activity',
        content: 'Poltergeist activity includes objects moving or flying, loud noises, doors slamming, lights flickering, and items disappearing and reappearing. Activity often escalates over time.',
      },
      {
        title: 'Theories',
        content: 'Some believe poltergeists are spirits of the dead. Others think they\'re manifestations of psychokinetic energy from living people, often adolescents experiencing emotional turmoil.',
      },
      {
        title: 'Famous Cases',
        content: 'The Enfield Poltergeist (1977), the Rosenheim Poltergeist (1967), and the Bell Witch (1817) are well-documented cases. Many have been debunked, but some remain unexplained.',
      },
    ],
  },
  {
    id: 'gl-40',
    term: 'Possession',
    definition: 'Control of a person by a supernatural entity',
    category: 'Paranormal Phenomena',
    sections: [
      {
        title: 'Signs',
        content: 'Possession symptoms include personality changes, speaking unknown languages, supernatural strength, aversion to religious objects, and knowledge of hidden information. Medical causes must be ruled out.',
      },
      {
        title: 'Types',
        content: 'Demonic possession involves evil spirits. Spirit possession may involve deceased humans. Some cultures practice voluntary possession for religious purposes.',
      },
      {
        title: 'Treatment',
        content: 'Exorcism is the traditional treatment. Modern approaches include psychological therapy, as some cases are mental illness. The Catholic Church requires medical evaluation before exorcism.',
      },
    ],
  },
  {
    id: 'gl-41',
    term: 'Precognition',
    definition: 'Knowledge of future events before they occur',
    category: 'Psychic Abilities',
    sections: [
      {
        title: 'Manifestations',
        content: 'Precognition appears as prophetic dreams, visions, or sudden knowledge. It may be specific or symbolic. Some people have consistent precognitive abilities, while others experience it rarely.',
      },
      {
        title: 'Famous Cases',
        content: 'Abraham Lincoln dreamed of his assassination. Many people reported premonitions before the Titanic sank. Some claim to have foreseen 9/11 or other disasters.',
      },
      {
        title: 'Theories',
        content: 'Explanations include time being non-linear, quantum entanglement, accessing the Akashic Records, or coincidence and selective memory. Laboratory tests show mixed results.',
      },
    ],
  },
  {
    id: 'gl-42',
    term: 'Psychic',
    definition: 'A person with extrasensory perception abilities',
    category: 'Psychic Abilities',
    sections: [
      {
        title: 'Abilities',
        content: 'Psychics may possess telepathy, clairvoyance, precognition, psychometry, or mediumship. Some specialize in one ability, while others have multiple gifts.',
      },
      {
        title: 'Professional Psychics',
        content: 'Some psychics work with police on missing persons cases, offer readings for clients, or perform demonstrations. Success rates vary widely, and fraud is common.',
      },
      {
        title: 'Scientific Testing',
        content: 'Controlled tests of psychic abilities have produced inconsistent results. Some psychics perform above chance in laboratory settings, but results are rarely replicated.',
      },
    ],
  },
  {
    id: 'gl-43',
    term: 'Psychokinesis',
    definition: 'The ability to move or manipulate objects with the mind',
    category: 'Psychic Abilities',
    sections: [
      {
        title: 'Types',
        content: 'Macro-PK involves visible movement of objects. Micro-PK affects random number generators or quantum systems. Telekinesis specifically refers to moving objects at a distance.',
      },
      {
        title: 'Famous Claims',
        content: 'Uri Geller claimed to bend spoons with his mind. Nina Kulagina allegedly moved objects on camera. The Stargate Project investigated PK for military applications. Most claims have been debunked.',
      },
      {
        title: 'Scientific Studies',
        content: 'Laboratory experiments have produced inconsistent results. Some studies show statistical anomalies, but effects are small and difficult to replicate. Mainstream science remains skeptical.',
      },
    ],
  },
  {
    id: 'gl-44',
    term: 'Psychometry',
    definition: 'Obtaining information about an object or its owner through touch',
    category: 'Psychic Abilities',
    sections: [
      {
        title: 'Practice',
        content: 'Psychometrists hold objects and receive impressions about their history, owners, or associated events. They may see visions, feel emotions, or simply "know" information.',
      },
      {
        title: 'Theory',
        content: 'Believers think objects absorb energy or memories from their owners. Touching the object allows psychics to access this stored information. Older objects allegedly hold stronger impressions.',
      },
      {
        title: 'Applications',
        content: 'Police have consulted psychometrists on cold cases. Archaeologists have worked with them to understand artifacts. Results are anecdotal and difficult to verify scientifically.',
      },
    ],
  },
  // Q
  {
    id: 'gl-45',
    term: 'Quantum Consciousness',
    definition: 'The theory that consciousness arises from quantum processes',
    category: 'Consciousness Theory',
    sections: [
      {
        title: 'Theory',
        content: 'Quantum consciousness proposes that the mind operates on quantum mechanical principles. Consciousness may involve quantum entanglement, superposition, or collapse of wave functions in the brain.',
      },
      {
        title: 'Implications',
        content: 'If true, it could explain psychic phenomena, non-locality of consciousness, and survival after death. It suggests consciousness is fundamental to reality, not just a brain byproduct.',
      },
      {
        title: 'Controversy',
        content: 'Most neuroscientists reject quantum consciousness, arguing the brain is too warm and wet for quantum effects. However, some physicists and philosophers take it seriously.',
      },
    ],
  },
  // R
  {
    id: 'gl-46',
    term: 'Reincarnation',
    definition: 'The rebirth of a soul in a new body after death',
    category: 'Spiritual Concepts',
    sections: [
      {
        title: 'Beliefs',
        content: 'Reincarnation is central to Hinduism, Buddhism, and other Eastern religions. The soul undergoes multiple lifetimes to learn lessons and evolve spiritually. Past life karma affects current circumstances.',
      },
      {
        title: 'Evidence',
        content: 'Children who remember past lives, birthmarks matching past life wounds, and past life regression under hypnosis are cited as evidence. Dr. Ian Stevenson documented thousands of cases.',
      },
      {
        title: 'Skepticism',
        content: 'Critics attribute past life memories to fantasy, false memories, or cultural influence. However, some cases include verifiable details the person couldn\'t have known normally.',
      },
    ],
  },
  {
    id: 'gl-47',
    term: 'Remote Viewing',
    definition: 'Perceiving distant or unseen targets using extrasensory perception',
    category: 'Psychic Abilities',
    sections: [
      {
        title: 'Practice',
        content: 'Remote viewers attempt to describe locations, objects, or events they cannot see. They may sketch what they perceive or provide detailed descriptions. Coordinates or photos may be used as targets.',
      },
      {
        title: 'Military Use',
        content: 'The US military\'s Stargate Project trained remote viewers for espionage. The program ran for 20 years before being declassified. Results were mixed, with some impressive hits.',
      },
      {
        title: 'Current Status',
        content: 'Remote viewing is still practiced by enthusiasts and some private organizations. Training protocols exist, and practitioners claim consistent results. Scientific validation remains elusive.',
      },
    ],
  },
  {
    id: 'gl-48',
    term: 'Residual Haunting',
    definition: 'A paranormal recording that replays past events',
    category: 'Paranormal Phenomena',
    sections: [
      {
        title: 'Characteristics',
        content: 'Residual hauntings are like recordings - they replay the same scene repeatedly without awareness of observers. They occur at specific times or under certain conditions.',
      },
      {
        title: 'Theory',
        content: 'Strong emotions or traumatic events may imprint on the environment. Stone tape theory suggests buildings record events like magnetic tape. Certain materials may be better "recorders."',
      },
      {
        title: 'Examples',
        content: 'Phantom armies marching, ghostly footsteps on stairs, or apparitions walking through walls (where doors once were) are typical residual hauntings. They never interact with the living.',
      },
    ],
  },
  {
    id: 'gl-49',
    term: 'Ritual Magic',
    definition: 'Ceremonial practices to invoke supernatural forces',
    category: 'Occult Practices',
    sections: [
      {
        title: 'Components',
        content: 'Ritual magic involves specific words, gestures, symbols, tools, and timing. Practitioners create sacred space, invoke entities, and direct energy toward goals. Precision is considered crucial.',
      },
      {
        title: 'Traditions',
        content: 'Western ceremonial magic draws from Kabbalah, Hermeticism, and grimoires. Eastern traditions include tantra and Taoist magic. Each has unique symbols, deities, and methods.',
      },
      {
        title: 'Modern Practice',
        content: 'Contemporary magicians practice ritual magic for spiritual development, manifestation, or communication with higher beings. Some view it psychologically, others as literally invoking spirits.',
      },
    ],
  },
  {
    id: 'gl-50',
    term: 'Runes',
    definition: 'Ancient Germanic alphabet used for divination and magic',
    category: 'Divination Tools',
    sections: [
      {
        title: 'History',
        content: 'Runes were the alphabet of Germanic peoples. Each rune has a name, sound, and meaning. They were carved on stones, weapons, and amulets for protection and power.',
      },
      {
        title: 'Divination',
        content: 'Rune casting involves drawing or throwing runes and interpreting their meanings. Each rune represents concepts like journey, harvest, or transformation. Combinations create complex readings.',
      },
      {
        title: 'Modern Use',
        content: 'Contemporary pagans and occultists use runes for divination, meditation, and magic. Rune sets are widely available, and various casting methods exist.',
      },
    ],
  },
  // S
  {
    id: 'gl-51',
    term: 'Séance',
    definition: 'A meeting where people attempt to communicate with spirits',
    category: 'Spiritualism',
    sections: [
      {
        title: 'Procedure',
        content: 'Participants sit in a circle, often holding hands, while a medium attempts to contact spirits. The room is usually darkened. Spirits may communicate through the medium, table tipping, or automatic writing.',
      },
      {
        title: 'History',
        content: 'Séances became popular in the 19th century during the Spiritualism movement. Famous mediums like the Fox Sisters and Eusapia Palladino held séances for thousands, though many were exposed as frauds.',
      },
      {
        title: 'Modern Practice',
        content: 'While less common today, séances are still conducted by spiritualists and paranormal investigators. Critics attribute phenomena to cold reading, suggestion, and trickery.',
      },
    ],
  },
  {
    id: 'gl-52',
    term: 'Shadow People',
    definition: 'Dark humanoid figures seen in peripheral vision',
    category: 'Paranormal Entities',
    sections: [
      {
        title: 'Description',
        content: 'Shadow people are dark, humanoid silhouettes typically seen in peripheral vision. They appear to move quickly and disappear when looked at directly. Some have glowing red eyes, while others are completely featureless.',
      },
      {
        title: 'Common Encounters',
        content: 'Most sightings occur at night or in dimly lit areas. Witnesses report feelings of dread, being watched, or paralysis. The "Hat Man" is a specific shadow person wearing a wide-brimmed hat, reported worldwide.',
      },
      {
        title: 'Explanations',
        content: 'Theories include sleep paralysis hallucinations, interdimensional beings, demons, time travelers, or manifestations of negative energy. Some researchers link them to electromagnetic fields.',
      },
    ],
  },
  {
    id: 'gl-53',
    term: 'Shaman',
    definition: 'A spiritual practitioner who mediates between the physical and spirit worlds',
    category: 'Spiritual Practices',
    sections: [
      {
        title: 'Role',
        content: 'Shamans heal illness, communicate with spirits, perform divination, and guide souls to the afterlife. They enter trance states through drumming, dancing, or plant medicines.',
      },
      {
        title: 'Practices',
        content: 'Soul retrieval, extraction of spiritual intrusions, power animal retrieval, and journeying to other worlds are common shamanic practices. Each culture has unique traditions.',
      },
      {
        title: 'Modern Shamanism',
        content: 'Core shamanism, developed by Michael Harner, teaches universal shamanic techniques. Neo-shamanism adapts traditional practices for modern Western practitioners. Authenticity is debated.',
      },
    ],
  },
  {
    id: 'gl-54',
    term: 'Sigil',
    definition: 'A magical symbol created for a specific purpose',
    category: 'Occult Practices',
    sections: [
      {
        title: 'Creation',
        content: 'Sigils are created by combining letters of a desire into an abstract symbol. The creator charges it through meditation, visualization, or ritual, then forgets the original intent.',
      },
      {
        title: 'Theory',
        content: 'Sigils work by bypassing the conscious mind and programming the subconscious. Forgetting the intent prevents the conscious mind from interfering with manifestation.',
      },
      {
        title: 'Use',
        content: 'Modern chaos magicians popularized sigil magic. It\'s considered one of the simplest and most effective magical techniques. Sigils can be drawn, carved, or digitally created.',
      },
    ],
  },
  {
    id: 'gl-55',
    term: 'Sleep Paralysis',
    definition: 'Temporary inability to move or speak while falling asleep or waking',
    category: 'Sleep Phenomena',
    sections: [
      {
        title: 'Experience',
        content: 'During sleep paralysis, people are conscious but cannot move. They often sense a presence, feel pressure on their chest, or see shadowy figures. It can be terrifying.',
      },
      {
        title: 'Paranormal Interpretation',
        content: 'Many cultures interpret sleep paralysis as demonic attack, alien abduction, or spirit visitation. The "Old Hag" syndrome describes a witch sitting on the chest.',
      },
      {
        title: 'Scientific Explanation',
        content: 'Sleep paralysis occurs when the brain wakes before the body. REM atonia (muscle paralysis during dreaming) persists while conscious. Hallucinations are hypnagogic or hypnopompic.',
      },
    ],
  },
  {
    id: 'gl-56',
    term: 'Spirit Guide',
    definition: 'A non-physical entity that provides guidance and protection',
    category: 'Spiritual Concepts',
    sections: [
      {
        title: 'Types',
        content: 'Spirit guides may be deceased ancestors, ascended masters, angels, animal spirits, or other entities. Some people have one guide, others have multiple guides for different purposes.',
      },
      {
        title: 'Communication',
        content: 'Guides communicate through intuition, dreams, synchronicities, or direct channeling. Some people see or hear their guides, while others simply sense their presence.',
      },
      {
        title: 'Purpose',
        content: 'Spirit guides offer wisdom, protection, and support on one\'s spiritual path. They allegedly help navigate life challenges and fulfill one\'s purpose. Skeptics see them as psychological constructs.',
      },
    ],
  },
  {
    id: 'gl-57',
    term: 'Succubus',
    definition: 'A female demon that sexually assaults sleeping men',
    category: 'Demonic Entities',
    sections: [
      {
        title: 'Legend',
        content: 'Succubi are demons that seduce men in their sleep. They drain life energy through sexual encounters. Medieval texts describe them as beautiful but ultimately deadly.',
      },
      {
        title: 'Historical Context',
        content: 'Succubus encounters explained nocturnal emissions, erotic dreams, and sleep disorders. Men who claimed succubus visitation were sometimes accused of consorting with demons.',
      },
      {
        title: 'Modern Reports',
        content: 'People still report succubus encounters, describing sleep paralysis with sexual sensations and seeing seductive female figures. Scientists attribute this to sleep disorders and sexual dreams.',
      },
    ],
  },
  {
    id: 'gl-58',
    term: 'Synchronicity',
    definition: 'Meaningful coincidences that seem too perfect to be random',
    category: 'Psychological Phenomena',
    sections: [
      {
        title: 'Concept',
        content: 'Psychologist Carl Jung defined synchronicity as "meaningful coincidences" that occur with no causal relationship yet seem significantly related. He believed they revealed a deeper order to reality.',
      },
      {
        title: 'Examples',
        content: 'Thinking of someone right before they call, repeatedly seeing the same numbers (11:11), or encountering the same symbol in unrelated contexts. Jung experienced a scarab beetle appearing during a therapy session about scarabs.',
      },
      {
        title: 'Explanations',
        content: 'Theories include the collective unconscious, quantum entanglement of consciousness, confirmation bias, or evidence that consciousness affects reality. Some see it as messages from the universe.',
      },
    ],
  },
  // T
  {
    id: 'gl-59',
    term: 'Tarot',
    definition: 'A deck of cards used for divination and spiritual guidance',
    category: 'Divination Tools',
    sections: [
      {
        title: 'Structure',
        content: 'A tarot deck has 78 cards: 22 Major Arcana (archetypal energies) and 56 Minor Arcana (everyday situations). Each card has symbolic imagery and multiple meanings.',
      },
      {
        title: 'Reading',
        content: 'Cards are shuffled and laid in spreads. Their positions and combinations create a narrative. Readers interpret based on traditional meanings, intuition, and the querent\'s situation.',
      },
      {
        title: 'Perspectives',
        content: 'Some view tarot as accessing universal wisdom or the collective unconscious. Others see it as a psychological tool for self-reflection. Skeptics attribute accuracy to cold reading and vague interpretations.',
      },
    ],
  },
  {
    id: 'gl-60',
    term: 'Telepathy',
    definition: 'Mind-to-mind communication without physical interaction',
    category: 'Psychic Abilities',
    sections: [
      {
        title: 'Types',
        content: 'Telepathy may involve sending thoughts, emotions, or images. It can be spontaneous or intentional. Some people report telepathic bonds with close family members or twins.',
      },
      {
        title: 'Research',
        content: 'Ganzfeld experiments test telepathy in controlled settings. Some studies show results above chance, but replication is inconsistent. The CIA investigated telepathy for espionage.',
      },
      {
        title: 'Theories',
        content: 'Proposed mechanisms include quantum entanglement, electromagnetic fields, or accessing a shared consciousness field. Skeptics attribute apparent telepathy to coincidence and body language.',
      },
    ],
  },
  {
    id: 'gl-61',
    term: 'Third Eye',
    definition: 'The sixth chakra, associated with intuition and psychic abilities',
    category: 'Spiritual Concepts',
    sections: [
      {
        title: 'Location',
        content: 'The third eye is located between the eyebrows, corresponding to the pineal gland. It\'s the sixth chakra (ajna) in Hindu and Buddhist traditions.',
      },
      {
        title: 'Abilities',
        content: 'An open third eye allegedly grants clairvoyance, intuition, spiritual insight, and the ability to see auras or spirits. It\'s associated with wisdom and higher consciousness.',
      },
      {
        title: 'Activation',
        content: 'Meditation, yoga, crystals, and specific practices are said to open the third eye. Some report seeing colors, having visions, or experiencing heightened intuition.',
      },
    ],
  },
  {
    id: 'gl-62',
    term: 'Thoughtform',
    definition: 'An entity created through focused thought and intention',
    category: 'Occult Phenomena',
    sections: [
      {
        title: 'Creation',
        content: 'Thoughtforms are created through sustained visualization, emotion, and belief. They can be simple (like a protective sphere) or complex (like a servitor with specific tasks).',
      },
      {
        title: 'Types',
        content: 'Servitors are simple thoughtforms for specific tasks. Tulpas are complex, autonomous entities. Egregores are collective thoughtforms created by groups.',
      },
      {
        title: 'Dangers',
        content: 'Thoughtforms can become autonomous and difficult to control. They may drain the creator\'s energy or act contrary to intentions. Proper banishing techniques are essential.',
      },
    ],
  },
  {
    id: 'gl-63',
    term: 'Tulpa',
    definition: 'A being or object created through spiritual or mental powers',
    category: 'Thought-Forms',
    sections: [
      {
        title: 'Origin',
        content: 'The concept comes from Tibetan Buddhism, where monks create sentient beings through intense meditation and visualization. The tulpa becomes autonomous and can be perceived by others.',
      },
      {
        title: 'Creation Process',
        content: 'Creating a tulpa requires sustained concentration, visualization, and belief. The creator must imagine every detail of the tulpa\'s appearance, personality, and voice until it becomes independent.',
      },
      {
        title: 'Dangers',
        content: 'Tulpas can become hostile or refuse to be dismissed. Alexandra David-Néel\'s tulpa monk became malevolent and took months to dissolve. Some believe Slender Man became a tulpa through collective belief.',
      },
    ],
  },
  // U
  {
    id: 'gl-64',
    term: 'UFO',
    definition: 'Unidentified Flying Object - aerial phenomena without conventional explanation',
    category: 'Ufology',
    sections: [
      {
        title: 'Sightings',
        content: 'UFO reports include lights in the sky, disc-shaped craft, triangular objects, and cigar-shaped vessels. Some perform impossible maneuvers - instant acceleration, right-angle turns, or hovering silently.',
      },
      {
        title: 'Government Interest',
        content: 'The US military has investigated UFOs through Project Blue Book, AATIP, and now the UAP Task Force. Recent Pentagon videos show objects defying known physics.',
      },
      {
        title: 'Theories',
        content: 'Explanations include extraterrestrial craft, secret military technology, interdimensional beings, time travelers, or misidentified natural phenomena. The truth remains elusive.',
      },
    ],
  },
  // V
  {
    id: 'gl-65',
    term: 'Vampire',
    definition: 'An undead being that feeds on the life essence of the living',
    category: 'Folklore',
    sections: [
      {
        title: 'Legend',
        content: 'Vampires are corpses that rise from the grave to drink blood. They have supernatural strength, immortality, and various powers. Sunlight, garlic, crosses, and stakes through the heart can destroy them.',
      },
      {
        title: 'Historical Context',
        content: 'Vampire beliefs existed worldwide. Eastern European folklore is most famous. Exhumations of suspected vampires showed bodies that hadn\'t decomposed normally, fueling beliefs.',
      },
      {
        title: 'Modern Vampirism',
        content: 'Some people identify as vampires, claiming to need blood or energy to feel healthy. Medical conditions like porphyria may have inspired vampire legends.',
      },
    ],
  },
  {
    id: 'gl-66',
    term: 'Vortex',
    definition: 'A location where spiritual or electromagnetic energy is concentrated',
    category: 'Earth Mysteries',
    sections: [
      {
        title: 'Characteristics',
        content: 'Vortexes are said to be swirling centers of energy that affect spiritual, emotional, and physical well-being. They may enhance meditation, psychic abilities, or cause unusual phenomena.',
      },
      {
        title: 'Famous Vortexes',
        content: 'Sedona, Arizona is known for multiple vortexes. Stonehenge, the Bermuda Triangle, and the Oregon Vortex are other famous locations. Visitors report feeling energized, dizzy, or experiencing time distortions.',
      },
      {
        title: 'Scientific Perspective',
        content: 'Geologists find no evidence of unusual energy at vortex sites. Skeptics attribute experiences to suggestion, natural beauty, or geological features affecting balance. Believers insist the energy is real.',
      },
    ],
  },
  // W
  {
    id: 'gl-67',
    term: 'Warlock',
    definition: 'A male practitioner of witchcraft',
    category: 'Occult Practitioners',
    sections: [
      {
        title: 'Etymology',
        content: 'Warlock comes from Old English meaning "oath-breaker" or "deceiver." It was historically a negative term. Modern male witches often prefer "witch" over "warlock."',
      },
      {
        title: 'Historical Context',
        content: 'During witch trials, warlocks were men accused of making pacts with the devil. They allegedly gained magical powers in exchange for their souls.',
      },
      {
        title: 'Modern Usage',
        content: 'Some contemporary male practitioners embrace the term warlock, while others reject it as inaccurate or offensive. The debate over terminology continues in magical communities.',
      },
    ],
  },
  {
    id: 'gl-68',
    term: 'Werewolf',
    definition: 'A human who transforms into a wolf or wolf-like creature',
    category: 'Folklore',
    sections: [
      {
        title: 'Legend',
        content: 'Werewolves are humans who transform into wolves, usually during full moons. They may transform voluntarily or involuntarily. In wolf form, they\'re savage and uncontrollable.',
      },
      {
        title: 'Causes',
        content: 'Lycanthropy (werewolf transformation) allegedly results from curses, bites from other werewolves, or deals with dark forces. Silver bullets are the traditional cure.',
      },
      {
        title: 'Medical Explanation',
        content: 'Clinical lycanthropy is a rare psychiatric condition where people believe they\'re transforming into animals. Hypertrichosis (excessive hair growth) may have inspired werewolf legends.',
      },
    ],
  },
  {
    id: 'gl-69',
    term: 'Witch',
    definition: 'A practitioner of witchcraft and magic',
    category: 'Occult Practitioners',
    sections: [
      {
        title: 'Historical Persecution',
        content: 'Witch hunts killed thousands in Europe and America. Accused witches were tortured and executed. Most were innocent people, often women who didn\'t conform to social norms.',
      },
      {
        title: 'Modern Witchcraft',
        content: 'Contemporary witches practice various traditions: Wicca, traditional witchcraft, eclectic witchcraft, and more. They work with herbs, crystals, spells, and natural cycles.',
      },
      {
        title: 'Beliefs',
        content: 'Modern witches generally follow the Wiccan Rede ("harm none") or similar ethics. They honor nature, practice magic, and celebrate seasonal festivals. Beliefs vary widely.',
      },
    ],
  },
  // X
  {
    id: 'gl-70',
    term: 'Xenoglossy',
    definition: 'The ability to speak or write in a language one has never learned',
    category: 'Paranormal Abilities',
    sections: [
      {
        title: 'Types',
        content: 'Recitative xenoglossy involves speaking or singing in an unknown language. Responsive xenoglossy includes understanding and conversing in the language. Both are extremely rare.',
      },
      {
        title: 'Cases',
        content: 'Under hypnosis, some people have spoken ancient languages they never studied. Mediums have channeled entities speaking foreign languages. Reincarnation researchers cite xenoglossy as evidence of past lives.',
      },
      {
        title: 'Explanations',
        content: 'Skeptics suggest cryptomnesia (forgotten memories), fraud, or speaking gibberish that sounds like a language. Believers see it as proof of reincarnation, spirit possession, or genetic memory.',
      },
    ],
  },
  // Y
  {
    id: 'gl-71',
    term: 'Yin and Yang',
    definition: 'Complementary forces in Chinese philosophy',
    category: 'Spiritual Concepts',
    sections: [
      {
        title: 'Concept',
        content: 'Yin and yang represent opposite but complementary forces: dark/light, feminine/masculine, passive/active. They exist in dynamic balance, each containing a seed of the other.',
      },
      {
        title: 'Applications',
        content: 'Yin-yang philosophy influences Chinese medicine, feng shui, martial arts, and spiritual practices. Balance between opposites is considered essential for health and harmony.',
      },
      {
        title: 'Universal Principle',
        content: 'The concept has been adopted globally as a symbol of balance and duality. It represents the idea that seemingly opposite forces are interconnected and interdependent.',
      },
    ],
  },
  {
    id: 'gl-72',
    term: 'Yoga',
    definition: 'Ancient spiritual and physical practices for union with the divine',
    category: 'Spiritual Practices',
    sections: [
      {
        title: 'Origins',
        content: 'Yoga originated in ancient India as a path to spiritual enlightenment. It includes physical postures (asanas), breathing techniques (pranayama), and meditation.',
      },
      {
        title: 'Types',
        content: 'Hatha yoga focuses on physical postures. Raja yoga emphasizes meditation. Kundalini yoga works with energy centers. Bhakti yoga is devotional. Each path leads to the same goal.',
      },
      {
        title: 'Paranormal Aspects',
        content: 'Advanced yogis allegedly develop siddhis (supernatural powers): levitation, telepathy, bilocation, and more. These are considered distractions from the true goal of enlightenment.',
      },
    ],
  },
  // Z
  {
    id: 'gl-73',
    term: 'Zeitgeist',
    definition: 'The defining spirit or mood of a particular period of history',
    category: 'Cultural Concepts',
    sections: [
      {
        title: 'Paranormal Connection',
        content: 'Some believe the zeitgeist is a collective consciousness or egregore that influences society. Paranormal phenomena may reflect the zeitgeist - UFO sightings increased during the Space Age, internet creepypastas in the digital age.',
      },
      {
        title: 'Manifestation',
        content: 'The zeitgeist manifests through art, literature, fashion, and shared beliefs. Carl Jung\'s collective unconscious may be the psychological basis for zeitgeist. It shapes what paranormal phenomena people experience and report.',
      },
      {
        title: 'Modern Examples',
        content: 'The current zeitgeist includes simulation theory, AI consciousness, and digital hauntings. As technology advances, paranormal experiences evolve - from ghosts to glitches, demons to data corruption.',
      },
    ],
  },
  {
    id: 'gl-74',
    term: 'Zombie',
    definition: 'A reanimated corpse or person under magical control',
    category: 'Folklore',
    sections: [
      {
        title: 'Haitian Vodou',
        content: 'In Haitian tradition, bokors (sorcerers) create zombies using poison and magic. Victims appear dead, are buried, then exhumed and enslaved. Some cases have been documented.',
      },
      {
        title: 'Scientific Explanation',
        content: 'Ethnobotanist Wade Davis proposed that tetrodotoxin from pufferfish creates a death-like state. Combined with datura, it causes amnesia and suggestibility, creating zombie-like behavior.',
      },
      {
        title: 'Pop Culture',
        content: 'Modern zombie fiction depicts reanimated corpses that eat human flesh. While fictional, it reflects fears of loss of identity, disease, and societal collapse.',
      },
    ],
  },
  {
    id: 'gl-75',
    term: 'Zozo',
    definition: 'A malevolent entity allegedly contacted through Ouija boards',
    category: 'Demonic Entities',
    sections: [
      {
        title: 'Reports',
        content: 'Zozo is a demon frequently reported in Ouija board sessions. It allegedly moves the planchette in figure-eight patterns, spells its name, and causes negative events in users\' lives.',
      },
      {
        title: 'Characteristics',
        content: 'Zozo is described as deceptive, starting friendly then becoming threatening. It may claim to be other entities. Users report feeling drained, experiencing nightmares, or witnessing poltergeist activity.',
      },
      {
        title: 'Skeptical View',
        content: 'Critics suggest Zozo is an urban legend spread through the internet. The name is easy to spell with the ideomotor effect. Fear and suggestion may cause reported negative experiences.',
      },
    ],
  },
];

export const getGlossaryEntryById = (id: string): GlossaryEntry | undefined => {
  return glossaryData.find(entry => entry.id === id);
};

export const getGlossaryEntryByName = (term: string): GlossaryEntry | undefined => {
  return glossaryData.find(entry => 
    entry.term.toLowerCase() === term.toLowerCase()
  );
};

export const getGlossaryByLetter = (letter: string): GlossaryEntry[] => {
  return glossaryData.filter(entry => 
    entry.term.charAt(0).toUpperCase() === letter.toUpperCase()
  );
};

export const getAllLetters = (): string[] => {
  const letters = new Set<string>();
  glossaryData.forEach(entry => {
    letters.add(entry.term.charAt(0).toUpperCase());
  });
  return Array.from(letters).sort();
};
