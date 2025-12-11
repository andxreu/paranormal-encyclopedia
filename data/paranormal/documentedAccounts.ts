
import { TopicSection } from './types';

export interface DocumentedAccount {
  id: string;
  name: string;
  description: string;
  year: string;
  location: string;
  credibilityRating: number; // 1-5 stars
  sections: TopicSection[];
}

export const documentedAccountsData: DocumentedAccount[] = [
  {
    id: 'da-1',
    name: 'The Enfield Poltergeist',
    description: 'One of the most documented poltergeist cases in history',
    year: '1977-1979',
    location: 'Enfield, London, England',
    credibilityRating: 5,
    sections: [
      {
        title: 'The Investigation',
        content: 'Over 18 months, the Hodgson family experienced violent poltergeist activity. Maurice Grosse and Guy Lyon Playfair from the Society for Psychical Research documented over 2,000 incidents, including furniture moving, objects flying, and levitation.',
      },
      {
        title: 'Key Evidence',
        content: 'Police officers witnessed chairs sliding across the floor. Photographers captured objects in mid-flight. Voice recordings documented an elderly male voice speaking through 11-year-old Janet Hodgson, claiming to be the previous occupant who died in the house.',
      },
      {
        title: 'Credible Witnesses',
        content: 'Over 30 witnesses including police, journalists, neighbors, and psychical researchers documented the phenomena. BBC and Daily Mirror reporters witnessed and recorded events. The case remains one of the most thoroughly investigated poltergeist cases.',
      },
    ],
  },
  {
    id: 'da-2',
    name: 'The Amityville Horror',
    description: 'America\'s most famous haunted house case',
    year: '1975-1976',
    location: 'Amityville, New York, USA',
    credibilityRating: 3,
    sections: [
      {
        title: 'The DeFeo Murders',
        content: 'On November 13, 1974, Ronald DeFeo Jr. murdered his entire family in the house. One year later, the Lutz family moved in and reported 28 days of terrifying paranormal activity before fleeing.',
      },
      {
        title: 'Documented Phenomena',
        content: 'The Lutzes reported green slime oozing from walls, swarms of flies in winter, cold spots, foul odors, and demonic apparitions. Ed and Lorraine Warren investigated and documented evidence of demonic presence.',
      },
      {
        title: 'Controversy',
        content: 'While the DeFeo murders are fact, skeptics claim the Lutzes fabricated the haunting for profit. However, subsequent owners have reported unexplained phenomena, and the house\'s dark history remains undisputed.',
      },
    ],
  },
  {
    id: 'da-3',
    name: 'Ariel School UFO Encounter',
    description: '62 children witness UFO landing at their school',
    year: '1994',
    location: 'Ruwa, Zimbabwe',
    credibilityRating: 5,
    sections: [
      {
        title: 'Mass Sighting',
        content: 'On September 16, 1994, 62 children aged 6-12 witnessed a silver craft land near their school playground. Small beings with large eyes emerged and communicated telepathically about environmental destruction.',
      },
      {
        title: 'Consistent Testimonies',
        content: 'Harvard psychiatrist Dr. John Mack interviewed the children separately. Their accounts were remarkably consistent, with detailed drawings of the craft and beings. The children showed genuine fear and conviction.',
      },
      {
        title: 'Long-term Impact',
        content: 'Decades later, the witnesses maintain their stories. Many report the experience changed their lives, making them more environmentally conscious. BBC documented follow-up interviews in 2022, with witnesses still standing by their accounts.',
      },
    ],
  },
  {
    id: 'da-4',
    name: 'Rendlesham Forest Incident',
    description: 'Britain\'s Roswell - military personnel encounter UFO',
    year: '1980',
    location: 'Suffolk, England',
    credibilityRating: 5,
    sections: [
      {
        title: 'Military Witnesses',
        content: 'US Air Force personnel stationed at RAF Woodbridge reported seeing strange lights in Rendlesham Forest. Deputy Base Commander Lt. Col. Charles Halt led an investigation and documented the encounter in an official memo.',
      },
      {
        title: 'Physical Evidence',
        content: 'Three indentations were found in a triangular pattern where the craft allegedly landed. Radiation readings were significantly higher than background levels. Trees showed burn marks and broken branches.',
      },
      {
        title: 'The Halt Memo',
        content: 'Lt. Col. Halt\'s official memo to the Ministry of Defence described a metallic triangular object with colored lights. Audio recordings captured real-time observations. The UK government released classified files on the incident in 2001.',
      },
    ],
  },
  {
    id: 'da-5',
    name: 'The Dyatlov Pass Incident',
    description: 'Nine experienced hikers die under mysterious circumstances',
    year: '1959',
    location: 'Ural Mountains, Russia',
    credibilityRating: 5,
    sections: [
      {
        title: 'The Mystery',
        content: 'Nine experienced hikers died mysteriously in the Ural Mountains. Their tent was cut open from the inside, and they fled into -30°C weather in their underwear. Bodies were found scattered across the mountainside.',
      },
      {
        title: 'Disturbing Evidence',
        content: 'Some victims had massive internal injuries with no external trauma - equivalent to a car crash. One was missing her tongue and eyes. Clothing showed traces of radiation. The official cause was listed as "unknown compelling force."',
      },
      {
        title: 'Theories and Investigation',
        content: 'Declassified Soviet documents revealed military testing in the area. Witnesses reported strange orange spheres in the sky. In 2019, Russian authorities reopened the case, concluding an avalanche was responsible, though many experts dispute this.',
      },
    ],
  },
  {
    id: 'da-6',
    name: 'The Phoenix Lights',
    description: 'Thousands witness massive UFO over Arizona',
    year: '1997',
    location: 'Phoenix, Arizona, USA',
    credibilityRating: 5,
    sections: [
      {
        title: 'Mass Sighting',
        content: 'On March 13, 1997, thousands of people across Arizona and Nevada witnessed a massive V-shaped craft with lights spanning over a mile. The event lasted several hours and was seen by witnesses including pilots, police, and the governor.',
      },
      {
        title: 'Video Evidence',
        content: 'Multiple videos captured the lights from different locations. The craft moved silently and slowly across the sky. Witnesses described it as blocking out stars as it passed overhead, indicating a solid structure.',
      },
      {
        title: 'Official Response',
        content: 'The military initially denied knowledge, then claimed it was flares from training exercises. However, the timing and behavior of the lights contradicted this explanation. Governor Fife Symington later admitted he saw the craft and believed it was extraterrestrial.',
      },
    ],
  },
  {
    id: 'da-7',
    name: 'The Valentich Disappearance',
    description: 'Pilot vanishes after reporting UFO encounter',
    year: '1978',
    location: 'Bass Strait, Australia',
    credibilityRating: 4,
    sections: [
      {
        title: 'The Final Transmission',
        content: 'Pilot Frederick Valentich reported being followed by an unknown aircraft with four bright lights. His final radio transmission described the craft hovering above him before his radio went dead with metallic scraping sounds.',
      },
      {
        title: 'The Investigation',
        content: 'Australian authorities conducted an extensive search but found no trace of Valentich or his aircraft. The Department of Transport released the full radio transcript, which remains unexplained.',
      },
      {
        title: 'Witness Accounts',
        content: 'Multiple witnesses reported seeing a green light in the sky at the time of Valentich\'s disappearance. Some reported seeing an object attached to or near a small aircraft. No wreckage has ever been found.',
      },
    ],
  },
  {
    id: 'da-8',
    name: 'The Westall UFO Encounter',
    description: 'Over 200 students and teachers witness UFO landing',
    year: '1966',
    location: 'Melbourne, Australia',
    credibilityRating: 5,
    sections: [
      {
        title: 'Mass School Sighting',
        content: 'Over 200 students and staff at Westall High School witnessed a silver disc-shaped craft land in a nearby field, then take off at incredible speed. The event lasted 20 minutes with multiple witnesses.',
      },
      {
        title: 'Government Response',
        content: 'Military personnel arrived quickly and cordoned off the area. Witnesses were told not to discuss the incident. The headmaster held an assembly warning students not to talk about what they saw.',
      },
      {
        title: 'Long-term Documentation',
        content: 'Decades later, witnesses came forward with consistent accounts. A documentary in 2010 interviewed multiple witnesses who maintained their stories. Physical evidence included a circular depression in the field and scorched grass.',
      },
    ],
  },
  {
    id: 'da-9',
    name: 'The Hessdalen Lights',
    description: 'Unexplained lights studied by scientists for decades',
    year: '1981-Present',
    location: 'Hessdalen Valley, Norway',
    credibilityRating: 5,
    sections: [
      {
        title: 'Ongoing Phenomenon',
        content: 'Since 1981, mysterious lights have appeared regularly in Hessdalen Valley. The lights vary in color, size, and behavior - sometimes hovering, sometimes moving at high speed, sometimes pulsating.',
      },
      {
        title: 'Scientific Study',
        content: 'The Hessdalen Project, established in 1983, uses automated cameras, radar, and spectrum analyzers to study the lights. Scientists from multiple countries have documented thousands of occurrences with no definitive explanation.',
      },
      {
        title: 'Theories',
        content: 'Proposed explanations include ionized iron dust, piezoelectric effects from tectonic strain, and combustion of scandium. However, none fully explain all observed characteristics. The phenomenon remains under active scientific investigation.',
      },
    ],
  },
  {
    id: 'da-10',
    name: 'The Skinwalker Ranch Phenomena',
    description: 'Decades of documented paranormal activity on Utah ranch',
    year: '1994-Present',
    location: 'Uintah County, Utah, USA',
    credibilityRating: 4,
    sections: [
      {
        title: 'The Sherman Family',
        content: 'The Sherman family purchased the ranch in 1994 and immediately experienced bizarre phenomena: cattle mutilations, UFO sightings, poltergeist activity, and encounters with unknown creatures including a wolf-like beast immune to bullets.',
      },
      {
        title: 'Scientific Investigation',
        content: 'Billionaire Robert Bigelow purchased the ranch and funded the National Institute for Discovery Science (NIDS) to study it. Scientists documented anomalous phenomena including magnetic anomalies, radiation spikes, and unexplained lights.',
      },
      {
        title: 'Government Interest',
        content: 'The Pentagon\'s Advanced Aerospace Threat Identification Program (AATIP) studied the ranch. Declassified documents reveal military interest in the phenomena. Current owner Brandon Fugal continues scientific investigation with documented results.',
      },
    ],
  },
  {
    id: 'da-11',
    name: 'The Lubbock Lights',
    description: 'Formation of lights photographed and witnessed by scientists',
    year: '1951',
    location: 'Lubbock, Texas, USA',
    credibilityRating: 4,
    sections: [
      {
        title: 'Credible Witnesses',
        content: 'Three Texas Tech professors witnessed a V-formation of 20-30 lights flying silently overhead at high speed. Over several nights, hundreds of residents reported seeing the same phenomenon.',
      },
      {
        title: 'Photographic Evidence',
        content: 'Carl Hart Jr., a college student, photographed the lights on multiple occasions. The photos were analyzed by the Air Force and deemed authentic. They remain some of the most credible UFO photographs ever taken.',
      },
      {
        title: 'Project Blue Book',
        content: 'The US Air Force\'s Project Blue Book investigated extensively. While they publicly claimed the lights were birds reflecting city lights, internal documents show investigators were baffled and the case remains officially "unidentified."',
      },
    ],
  },
  {
    id: 'da-12',
    name: 'The Voronezh UFO Landing',
    description: 'Soviet newspaper reports UFO landing with multiple witnesses',
    year: '1989',
    location: 'Voronezh, Russia',
    credibilityRating: 3,
    sections: [
      {
        title: 'The Encounter',
        content: 'Multiple witnesses, including children, reported seeing a large spherical craft land in a park. Three tall beings emerged, one carrying what appeared to be a weapon. When a boy screamed, the being pointed the device at him, making him invisible temporarily.',
      },
      {
        title: 'Official Coverage',
        content: 'The Soviet news agency TASS officially reported the incident, lending it unusual credibility. Local authorities investigated and found physical evidence including a 20-meter circle of flattened grass and four deep indentations.',
      },
      {
        title: 'Physical Evidence',
        content: 'Soil samples from the landing site showed unusual properties. Witnesses reported the craft left behind a reddish substance. The incident occurred during a wave of UFO sightings across the Soviet Union in 1989.',
      },
    ],
  },
  {
    id: 'da-13',
    name: 'The Flatwoods Monster',
    description: 'Multiple witnesses encounter alien being after UFO crash',
    year: '1952',
    location: 'Flatwoods, West Virginia, USA',
    credibilityRating: 4,
    sections: [
      {
        title: 'The Sighting',
        content: 'Seven people, including a local sheriff, witnessed a bright object crash on a hillside. Investigating the site, they encountered a 10-foot tall being with a blood-red face and green body, emitting a foul mist that made them ill.',
      },
      {
        title: 'Physical Effects',
        content: 'Multiple witnesses experienced nausea, vomiting, and throat irritation after the encounter. A local newspaper editor who visited the site the next day also became ill. Skid marks and an oil-like substance were found at the location.',
      },
      {
        title: 'Investigation',
        content: 'The US Air Force investigated as part of Project Blue Book. While they attributed it to a meteor and an owl, this explanation doesn\'t account for the physical effects on witnesses or the consistency of their testimonies.',
      },
    ],
  },
  {
    id: 'da-14',
    name: 'The Pascagoula Abduction',
    description: 'Two men claim abduction by robotic beings',
    year: '1973',
    location: 'Pascagoula, Mississippi, USA',
    credibilityRating: 4,
    sections: [
      {
        title: 'The Abduction',
        content: 'Charles Hickson and Calvin Parker claimed they were taken aboard a craft by robotic beings with crab-like claws while fishing. They were examined and released. Both men were terrified and their story never changed.',
      },
      {
        title: 'Polygraph Tests',
        content: 'Both men passed polygraph tests. Secret recordings of them alone in a police interrogation room showed genuine fear and confusion. Hickson underwent hypnotic regression, providing consistent details.',
      },
      {
        title: 'Credibility',
        content: 'Neither man sought publicity or profit. Parker was so traumatized he didn\'t speak publicly about it for 45 years. Hickson maintained his story until his death in 2011. The case is considered one of the most credible abduction accounts.',
      },
    ],
  },
  {
    id: 'da-15',
    name: 'The Tehran UFO Incident',
    description: 'Iranian Air Force jets encounter UFO, confirmed by radar',
    year: '1976',
    location: 'Tehran, Iran',
    credibilityRating: 5,
    sections: [
      {
        title: 'Military Encounter',
        content: 'Iranian Air Force F-4 Phantom jets were scrambled to intercept a bright object over Tehran. As jets approached, their instruments malfunctioned. When pilots attempted to fire missiles, their weapons systems failed.',
      },
      {
        title: 'Multiple Confirmations',
        content: 'The object was tracked on radar by multiple installations. Ground witnesses including the airport control tower saw the object. A US Defense Intelligence Agency document classified the incident as having "outstanding" reliability.',
      },
      {
        title: 'Official Documentation',
        content: 'The DIA report detailed how the UFO released smaller objects, one of which followed a jet. Another descended and landed, creating a bright illuminated area. The next day, the landing site showed high levels of radiation.',
      },
    ],
  },
];

export const getDocumentedAccountById = (id: string): DocumentedAccount | undefined => {
  return documentedAccountsData.find(account => account.id === id);
};

export const getDocumentedAccountByName = (name: string): DocumentedAccount | undefined => {
  return documentedAccountsData.find(account => 
    account.name.toLowerCase() === name.toLowerCase()
  );
};
