
import { TopicSection } from './types';

export interface GlossaryEntry {
  id: string;
  term: string;
  definition: string;
  category: string;
  sections: TopicSection[];
}

export const glossaryData: GlossaryEntry[] = [
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
    id: 'gl-3',
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
    id: 'gl-4',
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
    id: 'gl-5',
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
    id: 'gl-8',
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
    id: 'gl-9',
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
    id: 'gl-10',
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
    id: 'gl-11',
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
    id: 'gl-12',
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
  {
    id: 'gl-13',
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
  {
    id: 'gl-14',
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
  {
    id: 'gl-15',
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
];

export const getGlossaryEntryById = (id: string): GlossaryEntry | undefined => {
  return glossaryData.find(entry => entry.id === id);
};

export const getGlossaryEntryByName = (term: string): GlossaryEntry | undefined => {
  return glossaryData.find(entry => 
    entry.term.toLowerCase() === term.toLowerCase()
  );
};
