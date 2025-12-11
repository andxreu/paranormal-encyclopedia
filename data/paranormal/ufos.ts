// data/paranormal/ufos.ts
/**
 * UFOs Category Data
 * Famous UFO sightings and alien encounter cases
 * 
 * Includes: Roswell, Area 51, Phoenix Lights, Betty and Barney Hill, Rendlesham Forest
 */

import { categoryColors } from '@/constants/Colors';
import type { TopicSection, CategoryId } from './types';

export interface UFOTopic {
  id: string;
  name: string;
  description: string;
  categoryId: CategoryId;
  icon: string;
  sections: TopicSection[];
}

export const ufosData: readonly UFOTopic[] = [
  {
    id: 'uf-1',
    name: 'Roswell Incident',
    description: 'The famous 1947 UFO crash in New Mexico',
    categoryId: 'ufos',
    icon: '🛸',
    sections: [
      {
        title: 'Timeline of Events',
        content: 'In July 1947, a rancher discovered unusual debris near Roswell, New Mexico. The military initially announced they had recovered a "flying disc," then quickly retracted the statement, claiming it was a weather balloon. This sparked decades of controversy.',
      },
      {
        title: 'Theories & Speculation',
        content: 'Theories range from extraterrestrial spacecraft to secret military projects. The Air Force later claimed it was Project Mogul, a classified balloon program. Witnesses reported seeing alien bodies, though the military denies this.',
      },
      {
        title: 'Cultural Impact',
        content: 'Roswell became synonymous with UFO phenomena and government cover-ups. The incident spawned countless books, documentaries, and films. The town now embraces its UFO heritage with museums and annual festivals.',
      },
    ],
  },
  {
    id: 'uf-2',
    name: 'Area 51',
    description: 'The secretive military base linked to alien research',
    categoryId: 'ufos',
    icon: '🔒',
    sections: [
      {
        title: 'Timeline of Events',
        content: 'Area 51, officially known as Groom Lake, is a highly classified U.S. Air Force facility in Nevada. Established in 1955, it has been used to test experimental aircraft including the U-2 spy plane and stealth technology.',
      },
      {
        title: 'Theories & Speculation',
        content: 'Conspiracy theories claim Area 51 houses recovered alien spacecraft and extraterrestrial beings. Bob Lazar\'s 1989 claims of working on alien technology there fueled speculation. The government acknowledged the base\'s existence only in 2013.',
      },
      {
        title: 'Cultural Impact',
        content: 'Area 51 has become a pop culture icon representing government secrecy and alien research. The "Storm Area 51" event in 2019 attracted worldwide attention. It remains one of the most restricted and mysterious locations in America.',
      },
    ],
  },
  {
    id: 'uf-3',
    name: 'Phoenix Lights',
    description: 'The massive UFO sighting over Arizona in 1997',
    categoryId: 'ufos',
    icon: '✨',
    sections: [
      {
        title: 'Timeline of Events',
        content: 'On March 13, 1997, thousands of people across Arizona witnessed a massive V-shaped formation of lights. The event lasted several hours, with sightings from Henderson, Nevada to Tucson, Arizona. Videos and photographs documented the phenomenon.',
      },
      {
        title: 'Theories & Speculation',
        content: 'The military claimed the lights were flares from training exercises, but many witnesses dispute this explanation. The formation\'s size, estimated at over a mile wide, and its silent movement remain unexplained. Some believe it was an extraterrestrial craft.',
      },
      {
        title: 'Cultural Impact',
        content: 'The Phoenix Lights remain one of the most witnessed UFO events in history. Even Arizona\'s governor, Fife Symington, later admitted to seeing something extraordinary. The incident continues to be investigated by researchers worldwide.',
      },
    ],
  },
  {
    id: 'uf-4',
    name: 'Betty and Barney Hill',
    description: 'The first widely publicized alien abduction case',
    categoryId: 'ufos',
    icon: '👽',
    sections: [
      {
        title: 'Timeline of Events',
        content: 'On September 19, 1961, Betty and Barney Hill were driving through New Hampshire when they encountered a bright light. They experienced missing time and later recalled being taken aboard a spacecraft through hypnotic regression.',
      },
      {
        title: 'Theories & Speculation',
        content: 'Under hypnosis, the Hills described medical examinations by gray-skinned beings with large eyes. Betty drew a star map showing the aliens\' home system, later identified as Zeta Reticuli. Skeptics attribute the experience to sleep paralysis and false memories.',
      },
      {
        title: 'Cultural Impact',
        content: 'The Hill case established the template for alien abduction narratives. It introduced the "gray alien" archetype to popular culture. Their story has been extensively studied and remains one of the most credible abduction accounts.',
      },
    ],
  },
  {
    id: 'uf-5',
    name: 'Rendlesham Forest',
    description: 'The British Roswell incident of 1980',
    categoryId: 'ufos',
    icon: '🌲',
    sections: [
      {
        title: 'Timeline of Events',
        content: 'In December 1980, U.S. Air Force personnel stationed at RAF Woodbridge in England witnessed strange lights in Rendlesham Forest. Multiple servicemen, including Deputy Base Commander Lt. Col. Charles Halt, observed and documented the phenomena over several nights.',
      },
      {
        title: 'Theories & Speculation',
        content: 'Witnesses described a triangular craft with colored lights that left physical traces including radiation readings and ground impressions. Official explanations ranged from a lighthouse to a meteor, but military personnel maintain they saw something extraordinary.',
      },
      {
        title: 'Cultural Impact',
        content: 'Known as "Britain\'s Roswell," the incident involved credible military witnesses and official documentation. Declassified files and witness testimonies continue to fuel debate. It remains one of the best-documented UFO cases in history.',
      },
    ],
  },
	  {
    id: 'uf-6',
    name: '1942 Battle of Los Angeles',
    description: 'Mystery air raid over Los Angeles during WWII',
    categoryId: 'ufos',
    icon: '🎇',
    sections: [
      {
        title: 'Timeline of Events',
        content:
          'In February 1942, air raid sirens sounded over Los Angeles shortly after Pearl Harbor. Anti-aircraft batteries fired thousands of rounds at unidentified objects in the sky. Searchlights tracked shapes but no enemy aircraft were confirmed.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Photos show glowing objects amid searchlights and flak bursts. Witnesses claimed to see slow-moving craft impervious to gunfire. The military later blamed weather balloons and war nerves.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Ideas range from secret Japanese aircraft to UFOs testing defenses. Skeptics lean toward misidentified balloons and panic. The lack of wreckage keeps the mystery alive.',
      },
    ],
  },
  {
    id: 'uf-7',
    name: '1947 Maury Island Incident',
    description: 'Early UFO and alleged debris recovery in Washington State',
    categoryId: 'ufos',
    icon: '🌊',
    sections: [
      {
        title: 'Timeline of Events',
        content:
          'In June 1947, Harold Dahl claimed six doughnut-shaped craft appeared over Maury Island, dropping hot slag-like material that injured his crew and killed a dog. The case predated and foreshadowed the Kenneth Arnold sighting.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Dahl said military investigators examined the debris; later, a B-25 carrying samples crashed. The FBI called the case a hoax after conflicting testimonies.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Some researchers see Maury Island as disinformation or a staged event tied to early UFO secrecy. Others dismiss it as a fabrication that accidentally intersected real intelligence operations.',
      },
    ],
  },
  {
    id: 'uf-8',
    name: '1952 Washington DC Flap',
    description: 'Multiple UFO radar and visual sightings over the U.S. capital',
    categoryId: 'ufos',
    icon: '🏛️',
    sections: [
      {
        title: 'Timeline of Events',
        content:
          'In July 1952, radar operators and pilots tracked unknown objects over Washington DC on two consecutive weekends. Fighters scrambled but reported the objects outran them or vanished.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Radar returns appeared on multiple scopes; controllers and pilots confirmed strange lights executing sharp maneuvers over restricted airspace.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'The Air Force blamed temperature inversions causing false radar targets. Ufologists argue the combination of radar and visual sightings suggests genuine unknown craft.',
      },
    ],
  },
  {
    id: 'uf-9',
    name: '1961 Betty Barney Hill Abduction',
    description: 'Pioneering alien abduction case from New Hampshire',
    categoryId: 'ufos',
    icon: '🚗',
    sections: [
      {
        title: 'Timeline of Events',
        content:
          'Driving home in September 1961, Betty and Barney Hill encountered a strange light that seemed to follow their car. They later realized they had hours of missing time. Under hypnosis, both described being taken aboard a craft.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Betty reported recurring nightmares, a torn dress, and unusual marks on their car. A “star map” she drew under hypnosis was later linked by some to Zeta Reticuli.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Skeptics point to stress, suggestibility, and UFO media influence. Supporters highlight consistent dual testimony and physical oddities, making it a cornerstone abduction case.',
      },
    ],
  },
  {
    id: 'uf-10',
    name: '1966 West Virginia Mothman',
    description: 'Winged humanoid linked with UFOs and high strangeness',
    categoryId: 'ufos',
    icon: '🦇',
    sections: [
      {
        title: 'Timeline of Events',
        content:
          'Between 1966–1967, residents around Point Pleasant, West Virginia, reported a red-eyed, winged figure and waves of UFO sightings, phone interference, and Men in Black encounters.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Witnesses described a 6–7 foot tall being with wings and glowing eyes, often appearing near the TNT area. Sightings culminated around the collapse of the Silver Bridge.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Ideas range from misidentified birds to interdimensional entities tied to UFO phenomena. The Mothman case is often treated as a cluster of overlapping high-strange events rather than a single creature sighting.',
      },
    ],
  },
  {
    id: 'uf-11',
    name: '1967 Shag Harbour Crash',
    description: 'UFO that allegedly crashed into the waters off Nova Scotia',
    categoryId: 'ufos',
    icon: '⚓',
    sections: [
      {
        title: 'Timeline of Events',
        content:
          'On October 4, 1967, witnesses saw a glowing object descend into Shag Harbour, Canada. Authorities believed an aircraft had crashed and launched a search-and-rescue operation.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'No wreckage or missing aircraft were found. Official documents list the object as a UFO. Some later testimonies describe underwater tracking of an unknown target.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Hypotheses include a secret craft, a meteor, or a submerged UFO escorted by other objects. The case is notable for official recognition of an “unidentified flying object” by Canadian authorities.',
      },
    ],
  },
  {
    id: 'uf-12',
    name: '1975 Travis Walton Abduction',
    description: 'Logging crew witness and alleged alien abduction in Arizona',
    categoryId: 'ufos',
    icon: '🌲',
    sections: [
      {
        title: 'Timeline of Events',
        content:
          'On November 5, 1975, logger Travis Walton approached a glowing object in the woods near Snowflake, Arizona. A beam reportedly struck him, and he vanished for five days.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Walton reappeared with a disoriented story of waking aboard a craft and interacting with humanoid and hybrid beings. The remaining crew passed polygraph tests about witnessing the encounter.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Skeptics argue a hoax or misperception; supporters cite the polygraphs and Walton’s consistent decades-long testimony as strong evidence of a genuine abduction.',
      },
    ],
  },
  {
    id: 'uf-13',
    name: '1977 Colares UFO Flap',
    description: 'Aggressive UFO encounters and beam attacks in Brazil',
    categoryId: 'ufos',
    icon: '🌩️',
    sections: [
      {
        title: 'Timeline of Events',
        content:
          'In 1977, residents of Colares, Brazil, reported numerous low-flying luminous objects firing beams at people. Injuries included burns, puncture marks, and weakness.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'The Brazilian Air Force launched Operation Saucer, gathering photos, medical reports, and witness testimony. Declassified documents and sketches later surfaced.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Some believe the objects were extraterrestrial probes or advanced drones. Others suggest mass hysteria, misidentified phenomena, or covert weapons testing.',
      },
    ],
  },
  {
    id: 'uf-14',
    name: '1980 Cash-Landrum Incident',
    description: 'UFO encounter causing severe medical effects in Texas',
    categoryId: 'ufos',
    icon: '☢️',
    sections: [
      {
        title: 'Timeline of Events',
        content:
          'In December 1980, Betty Cash, Vickie Landrum, and Vickie’s grandson encountered a diamond-shaped glowing object near Huffman, Texas, accompanied by military helicopters.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'The witnesses later suffered burns, eye damage, nausea, and hair loss consistent with radiation exposure. Legal action against the U.S. government was dismissed for lack of proof.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Explanations include a secret nuclear-powered craft, an alien vehicle, or misinterpreted atmospheric phenomena. The serious medical aftereffects keep this case unique.',
      },
    ],
  },
  {
    id: 'uf-15',
    name: '1986 JAL Flight 1628 UFO',
    description: 'Airliner crew encounters giant craft over Alaska',
    categoryId: 'ufos',
    icon: '✈️',
    sections: [
      {
        title: 'Timeline of Events',
        content:
          'On November 17, 1986, a Japan Air Lines cargo flight reported multiple UFOs pacing the aircraft over Alaska, including a massive craft estimated at several times the size of a jumbo jet.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Captain Kenju Terauchi described detailed shapes and lights. FAA logs and radar data partially corroborated the encounter, though official explanations later downplayed it.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Some believe the crew encountered a structured, intelligently controlled craft. Skeptical views cite radar anomalies and misidentification of celestial objects, though the captain never recanted.',
      },
    ],
  },
  {
    id: 'uf-16',
    name: '1989 Voronezh UFO Landing',
    description: 'Claimed landed craft and entities in Soviet-era Russia',
    categoryId: 'ufos',
    icon: '🧒',
    sections: [
      {
        title: 'Timeline of Events',
        content:
          'In September 1989, children and adults in Voronezh, USSR, reported a large UFO landing in a park and tall humanoid beings accompanied by a robot-like figure.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Witnesses described a glowing object, a doorway, and a being allegedly firing a device that made a boy vanish temporarily. Soviet news agencies surprisingly reported the story.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Some consider the case exaggerated children’s testimony amplified by state media. Others see it as a rare large-scale close encounter during the late Soviet period.',
      },
    ],
  },
  {
    id: 'uf-17',
    name: '1990 Belgian UFO Wave',
    description: 'Prolonged wave of triangular UFOs over Belgium',
    categoryId: 'ufos',
    icon: '🔺',
    sections: [
      {
        title: 'Timeline of Events',
        content:
          'From 1989 to 1990, thousands in Belgium reported large, silent triangular craft with lights at each corner. A famous sighting on March 30–31, 1990, triggered F-16 scrambles.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Police officers, military personnel, and civilians all provided testimony. Radar data recorded unusual targets; the iconic triangle photo later faced accusations of being a hoax.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Explanations include experimental aircraft, mass misidentification, or coordinated hoaxes. The scale and consistency of reports keep the Belgian wave as a cornerstone triangle case.',
      },
    ],
  },
  {
    id: 'uf-18',
    name: '1991 STS-48 UFO Footage',
    description: 'Shuttle video showing anomalous objects in orbit',
    categoryId: 'ufos',
    icon: '🛰️',
    sections: [
      {
        title: 'Timeline of Events',
        content:
          'During the STS-48 Space Shuttle mission in 1991, NASA cameras captured small bright objects maneuvering and then darting away as a flash appears in frame.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'The footage shows sudden changes in direction that some claim rule out ice particles or debris. NASA attributed the motion to thruster firings.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Ufologists cite the sharp-angle maneuvers as evidence of non-human craft. Skeptics argue that perspective, micro-debris, and camera motion can explain the behavior.',
      },
    ],
  },
  {
    id: 'uf-19',
    name: '1994 Ariel School Landing',
    description: 'Schoolchildren encounter beings near a landed craft in Zimbabwe',
    categoryId: 'ufos',
    icon: '🏫',
    sections: [
      {
        title: 'Timeline of Events',
        content:
          'On September 16, 1994, over 60 children at Ariel School in Ruwa, Zimbabwe, reported a silver disc landing near the playground and small beings emerging.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'The children gave remarkably consistent drawings and interviews, describing large-eyed beings who communicated telepathic warnings about the environment. Psychologist John Mack later interviewed them in depth.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Skeptics suggest group fantasy, suggestion, or misidentified adults in costumes. Supporters point to the lasting impact on witnesses and the consistency of their independent testimonies.',
      },
    ],
  },
  {
    id: 'uf-20',
    name: '1996 Yukon UFO Sighting',
    description: 'Enormous craft reported over the Yukon Territory',
    categoryId: 'ufos',
    icon: '❄️',
    sections: [
      {
        title: 'Timeline of Events',
        content:
          'On December 11, 1996, multiple witnesses along a 200-km stretch of the Klondike Highway in Canada reported a gigantic, silent craft blocking out stars.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Witness estimates suggested a craft up to a mile wide, with rows of lights and slow, deliberate movement. Weather conditions were clear, and descriptions were strikingly similar.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'No conventional aircraft fits the reported size and behavior. The sighting is often classed with other “mega-craft” cases like the Phoenix Lights.',
      },
    ],
  },
  {
    id: 'uf-21',
    name: '1997 Phoenix Lights',
    description: 'Massive V-shaped craft over Arizona',
    categoryId: 'ufos',
    icon: '🌃',
    sections: [
      {
        title: 'Timeline of Events',
        content:
          'On March 13, 1997, a giant V-shaped formation of lights was seen by thousands from Nevada to Arizona. Many witnesses described a solid craft blocking out the stars.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Home video captured persistent lights near Phoenix later that evening. Witnesses included police officers, pilots, and then-Governor Fife Symington, who later spoke publicly about the event.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'The U.S. military claimed the later lights were flare drops, but this does not fully explain the earlier enormous, silent craft. The event remains one of the most compelling mass sightings in UFO history.',
      },
    ],
  },
  {
    id: 'uf-22',
    name: '2004 Nimitz Tic-Tac UFO',
    description: 'Famous Navy encounter with a Tic-Tac-shaped craft',
    categoryId: 'ufos',
    icon: '🎖️',
    sections: [
      {
        title: 'Timeline of Events',
        content:
          'In November 2004, U.S. Navy pilots from the USS Nimitz Carrier Strike Group encountered a white, Tic-Tac-shaped object off the coast of California during training exercises.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'AATFLIR video, radar tracks, and pilot testimonies describe the object dropping from high altitude to near sea level rapidly, with no visible propulsion or wings. Commander David Fravor’s account became central to modern UAP discussions.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Explanations include advanced black projects, sensor glitches, or non-human craft. The case was highlighted in Pentagon-linked UAP programs and mainstream media coverage.',
      },
    ],
  },
  {
    id: 'uf-23',
    name: '2006 O’Hare Airport UFO',
    description: 'Disc-shaped object hovering above a major U.S. airport',
    categoryId: 'ufos',
    icon: '🛫',
    sections: [
      {
        title: 'Timeline of Events',
        content:
          'On November 7, 2006, United Airlines employees and pilots at Chicago’s O’Hare Airport reported a gray, disc-shaped object hovering silently over Gate C-17 before shooting upward through the clouds.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Witnesses described a crisp circular hole punched in the cloud layer. The FAA dismissed the event as weather, but internal airline chatter and FOIA documents confirmed multiple credible observers.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Some argue for a misidentified balloon or optical illusion. Others see a controlled craft operating in a high-security airspace, making it one of the most compelling modern UFO cases.',
      },
    ],
  },
  {
    id: 'uf-24',
    name: '2008 Stephenville Lights',
    description: 'Large, silent craft reported over Texas',
    categoryId: 'ufos',
    icon: '⭐',
    sections: [
      {
        title: 'Timeline of Events',
        content:
          'In January 2008, residents of Stephenville, Texas, reported a massive object with bright lights silently crossing the sky, sometimes pursued by jet aircraft.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Dozens of witnesses, including pilots and law enforcement, gave statements. Radar data obtained by researchers suggested unknown targets in the area inconsistent with official explanations.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'The Air Force later acknowledged training flights but denied unusual activity. Many believe the event was another appearance of a huge structured craft similar to the Phoenix Lights.',
      },
    ],
  },
  {
    id: 'uf-25',
    name: '2015 GoFast Gimbal Videos',
    description: 'Leaked Navy UAP videos sparking global UAP interest',
    categoryId: 'ufos',
    icon: '🎥',
    sections: [
      {
        title: 'Timeline of Events',
        content:
          'Videos known as “GoFast” and “Gimbal,” filmed by U.S. Navy pilots around 2014–2015, were leaked and later confirmed as authentic by the Pentagon, showing fast-moving and rotating objects with no visible control surfaces.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'FLIR footage captures anomalous motion and apparent lack of wings or exhaust. Pilots’ audio expresses confusion and excitement at the objects’ behavior.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Skeptical analyses propose distant jets, sensor artifacts, or balloons. Others argue the performance characteristics and official acknowledgement point toward truly unexplained aerial phenomena.',
      },
    ],
  },
  {
    id: 'uf-26',
    name: '2017 Pentagon UAP Release',
    description: 'First official acknowledgment of military UAP encounters',
    categoryId: 'ufos',
    icon: '📄',
    sections: [
      {
        title: 'Timeline of Events',
        content:
          'In December 2017, The New York Times published a report revealing the Pentagon’s secret AATIP program and released three Navy UAP videos. This marked the first major official admission of unexplained aerial phenomena.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Videos showed objects defying conventional aerodynamics. Pilots and radar operators confirmed these were part of ongoing encounters.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Some believe the release signaled a slow disclosure. Skeptics argue the videos show sensor artifacts. Official statements acknowledge UAP but not origin.',
      },
    ],
  },
  {
    id: 'uf-27',
    name: '2020 USS Omaha Sphere',
    description: 'Spherical UAP tracked entering the ocean',
    categoryId: 'ufos',
    icon: '⚫',
    sections: [
      {
        title: 'Timeline of Events',
        content:
          'In 2019–2020, Navy personnel aboard the USS Omaha tracked a spherical object that entered the ocean without slowing. Footage was later leaked by investigators.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Radar and infrared showed a 6-foot craft exhibiting intelligent movement before plunging into the sea. No debris recovered.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possibilities include transmedium craft or classified drones. Some researchers link this with earlier Shag Harbour-like “water entry” cases.',
      },
    ],
  },
  {
    id: 'uf-28',
    name: '2021 Pentagon UAP Report',
    description: 'Government review stating most UAP remain unexplained',
    categoryId: 'ufos',
    icon: '📝',
    sections: [
      {
        title: 'Timeline of Events',
        content:
          'Congress ordered an unclassified UAP assessment, released June 2021. Of 144 cases reviewed, 143 remained unexplained.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Report acknowledged objects with unusual flight characteristics, lack of means of propulsion, and safety hazards to pilots.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'The report avoided attributing origin, noting insufficient data. Researchers viewed this as the most credible acknowledgment to date that the phenomena are real and anomalous.',
      },
    ],
  },
  {
    id: 'uf-29',
    name: '2023 Las Vegas Backyard Crash',
    description: 'Claim of crashed craft and tall beings in a residential yard',
    categoryId: 'ufos',
    icon: '🌾',
    sections: [
      {
        title: 'Timeline of Events',
        content:
          'In April 2023, a green fireball descended over Las Vegas. A family later called 911 claiming 8–10 foot beings were in their yard after a loud impact.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Police bodycam captured the falling object. Investigators noted a circular imprint in the soil; official explanations remain limited.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Some call it a hoax; others see it as a modern Roswell-style crash with rapid recovery. The family never retracted their story.',
      },
    ],
  },
  {
    id: 'uf-30',
    name: '2023 Mexican Congress Bodies',
    description: 'Presentation of alleged non-human corpses in Mexico',
    categoryId: 'ufos',
    icon: '🧫',
    sections: [
      {
        title: 'Timeline of Events',
        content:
          'In September 2023, journalist Jaime Maussan unveiled two small mummified bodies during a public hearing on UAPs.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'CT scans and X-rays were shown, though scientists criticized the provenance and possible hoax origins.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Many suspect composite artifacts. Others argue the bodies match no known species. The debate remains heated and unresolved.',
      },
    ],
  },
  {
    id: 'uf-31',
    name: '2023 Miami Mall Shadows',
    description: 'Chaotic reports of tall shadow-like entities in a mall',
    categoryId: 'ufos',
    icon: '🕴️',
    sections: [
      {
        title: 'Timeline of Events',
        content:
          'In December 2023, viral social media reports claimed large humanoid shadows appeared in a Miami mall, triggering panic and police response.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Videos were unclear, but many claimed dark, tall figures moved unnaturally. Authorities denied anything unusual.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possibilities include mass hysteria or misinterpreted chaos. Some researchers link the event to ultraterrestrial sightings rather than classical UFOs.',
      },
    ],
  },
  {
    id: 'uf-32',
    name: '2024 Jellyfish UAP',
    description: 'Translucent jellyfish-like craft filmed over Ukraine',
    categoryId: 'ufos',
    icon: '🪼',
    sections: [
      {
        title: 'Timeline of Events',
        content:
          'In early 2024, infrared and optical footage showed an amorphous, drifting, tentacle-like object moving independently of wind.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Military sensors tracked the object at high speed and variable altitude. Shape-shifting behavior was documented.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possibly biological aerial organisms or non-solid UAP. Some speculate plasma-based life or ultraterrestrial scouting probes.',
      },
    ],
  },
  {
    id: 'uf-33',
    name: '611 UFO Abduction Case',
    description: 'Strange abduction report with time dilation effects',
    categoryId: 'ufos',
    icon: '⏳',
    sections: [
      {
        title: 'Timeline of Events',
        content:
          'A rural kidnapping-like event where witnesses saw a hovering craft at 6:11 PM. The experiencer reappeared hours later with only minutes of subjective memory.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Witness marks, missing time, and consistent regression testimony. Electronics in the home malfunctioned simultaneously.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Considered a classic abduction case involving temporal distortions. Skeptics argue sleep-related hallucinations.',
      },
    ],
  },
  {
    id: 'uf-34',
    name: 'Abduction Phenomenon',
    description: 'General study of alien abductions worldwide',
    categoryId: 'ufos',
    icon: '🚀',
    sections: [
      {
        title: 'Overview',
        content:
          'Millions across cultures report being taken by non-human beings for medical exams, communication, or hybridization programs. Patterns recur globally.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Common elements: paralysis, missing time, implants, telepathy, reproductive procedures, and luminous craft.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Hypotheses include literal extraterrestrial involvement, sleep paralysis, or psychological archetypes manifesting as abduction narratives.',
      },
    ],
  },
  {
    id: 'uf-35',
    name: 'Adley Moor Men in Black',
    description: 'Historic Men in Black encounter in rural England',
    categoryId: 'ufos',
    icon: '🕶️',
    sections: [
      {
        title: 'Timeline of Events',
        content:
          'In the 1960s, a family in Adley Moor reported a silent black-clad figure warning them about speaking of a UFO seen the night before.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Witnesses described unnatural skin tone, robotic movements, and monotone speech.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possibly intelligence agents, android-like ultraterrestrials, or psychological projection triggered by fear.',
      },
    ],
  },
  {
    id: 'uf-36',
    name: 'Alien Autopsy Footage',
    description: 'Controversial film of alleged alien examination',
    categoryId: 'ufos',
    icon: '🎬',
    sections: [
      {
        title: 'Timeline of Events',
        content:
          'In 1995, filmmaker Ray Santilli released footage claimed to show autopsy of a Roswell extraterrestrial.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Experts debated anatomical details; several participants later suggested parts were recreated, though Santilli insisted it was based on real footage.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Theory ranges from hoax to reconstruction of real 1947 footage. The cultural impact remains enormous.',
      },
    ],
  },
  {
    id: 'uf-37',
    name: 'Alien Bases Dulce Pine Gap',
    description: 'Underground and deep-state alien facility lore',
    categoryId: 'ufos',
    icon: '🏗️',
    sections: [
      {
        title: 'Overview',
        content:
          'Conspiracy lore claims joint human–alien bases exist beneath Dulce, New Mexico, and Pine Gap, Australia.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Claims include genetic labs, multi-level tunnels, and security conflicts. No physical evidence has surfaced.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Interpretations range from military secrecy myths to symbolic depictions of deep-state operations.',
      },
    ],
  },
  {
    id: 'uf-38',
    name: 'American Hybrids',
    description: 'Claims of hybrid human–alien programs in the U.S.',
    categoryId: 'ufos',
    icon: '🧬',
    sections: [
      {
        title: 'Overview',
        content:
          'Some abductees describe involvement in breeding programs producing hybrid offspring intended to integrate with humanity.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Reports include nursery rooms aboard craft, telepathic parent–child bonds, and emotional detachment of entities.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Could reflect psychological projection, but some believe hybridization is central to the UFO phenomenon’s long-term agenda.',
      },
    ],
  },
  {
    id: 'uf-39',
    name: 'Ancient Aliens Theory',
    description: 'Idea that extraterrestrials guided human civilization',
    categoryId: 'ufos',
    icon: '🏺',
    sections: [
      {
        title: 'Overview',
        content:
          'Ancient structures, myths, and artifacts are interpreted as evidence of extraterrestrial contact shaping early human development.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Examples include pyramids, Nazca lines, Vimanas, and anomalous artifacts across cultures.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Mainstream scholars reject extraterrestrial origins, citing human ingenuity. Believers argue some ancient achievements exceed known capabilities.',
      },
    ],
  },
  {
    id: 'uf-40',
    name: 'Angelship Norway',
    description: 'UFO resembling a glowing ship over Norwegian fjords',
    categoryId: 'ufos',
    icon: '🛶',
    sections: [
      {
        title: 'Timeline of Events',
        content:
          'Witnesses in the mid-20th century described a luminous craft shaped like a sailing vessel gliding silently above fjords.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Multiple fishermen reported identical details: mast-like lights and drifting motion.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Could be rare plasma formations or unknown craft. Some connect it with Nordic “sky ship” folklore.',
      },
    ],
  },
  {
    id: 'uf-41',
    name: 'Anunnaki Gods',
    description: 'Ancient Mesopotamian deities interpreted as aliens',
    categoryId: 'ufos',
    icon: '👑',
    sections: [
      {
        title: 'Overview',
        content:
          'The Anunnaki, described in Sumerian tablets, are theorized by some to be spacefaring beings involved in early human genetics or mining.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Myths detail descending gods, advanced knowledge, and “flying chariots.” Archaeology sees these as symbolic stories.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Ancient astronaut theorists argue the tablets contain literal accounts of non-human visitors.',
      },
    ],
  },
  {
    id: 'uf-42',
    name: 'Arcturian Aliens',
    description: 'Benevolent extraterrestrials in New Age and contact lore',
    categoryId: 'ufos',
    icon: '✨',
    sections: [
      {
        title: 'Overview',
        content:
          'Arcturians are described as advanced beings offering telepathic guidance, healing, and spiritual evolution.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Channelers and contactees report blue or luminous humanoids with high intelligence and peaceful intent.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Skeptics call them psychological archetypes. Believers see them as a major faction within the galactic landscape.',
      },
    ],
  },
  {
    id: 'uf-43',
    name: 'Area 51 Base',
    description: 'Modern center of UFO secrecy and extraterrestrial lore',
    categoryId: 'ufos',
    icon: '🏜️',
    sections: [
      {
        title: 'Overview',
        content:
          'Area 51 remains the most famous restricted base linked to alien technology. Test flights, reverse engineering claims, and secrecy culture fuel speculation.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Witnesses describe unusual lights and silent craft. Employees rarely speak publicly.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Could house advanced aircraft programs or recovered materials. Official secrecy guarantees the mystery endures.',
      },
    ],
  },
  {
    id: 'uf-44',
    name: 'Argentina Egg Craft',
    description: 'Egg-shaped UFO encountered by Argentine witnesses',
    categoryId: 'ufos',
    icon: '🥚',
    sections: [
      {
        title: 'Timeline of Events',
        content:
          'Farmers and police in Argentina reported a glowing egg-shaped object landing in fields during the 1970s.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Traces included scorched grass, electromagnetic interference, and livestock agitation.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possibly an experimental probe, or an autonomous alien scout craft described similarly worldwide.',
      },
    ],
  },
  {
    id: 'uf-45',
    name: 'Australia’s Silver Saucers',
    description: 'Series of classic disc sightings over Australia',
    categoryId: 'ufos',
    icon: '🌏',
    sections: [
      {
        title: 'Timeline of Events',
        content:
          'Throughout the 1950s–70s, Australia experienced waves of bright silver disc sightings, especially in rural regions.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Witnesses included pilots, police, and ranchers describing metallic discs with rapid acceleration.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Explanations include atmospheric mirages, foreign aircraft, or widespread presence of classic saucers.',
      },
    ],
  },
  {
    id: 'uf-46',
    name: 'Baltic Sea Anomaly',
    description: 'Mysterious seafloor formation resembling a crashed object',
    categoryId: 'ufos',
    icon: '🌊',
    sections: [
      {
        title: 'Overview',
        content:
          'Discovered in 2011 by Ocean X divers, the Baltic Sea Anomaly is a 60-meter object with unnatural right angles and track-like marks leading to it.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Side-scan sonar shows a disc-shaped formation. Divers reported unusual electrical interference during investigations.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Ideas range from glacial rock to a crashed craft or ancient structure. Lack of direct access keeps speculation alive.',
      },
    ],
  },
  {
    id: 'uf-47',
    name: 'Belgian UFO Wave',
    description: 'Widespread triangular craft sightings over Belgium',
    categoryId: 'ufos',
    icon: '🔺',
    sections: [
      {
        title: 'Overview',
        content:
          'Late 1980s–1990s saw thousands of reports of large black triangles with silent glide behavior.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Police witnesses, radar confirmation, and the famous (later disputed) triangle photograph defined the wave.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Hypotheses include stealth aircraft prototypes or extraterrestrial survey craft.',
      },
    ],
  },
  {
    id: 'uf-48',
    name: 'Bonnybridge UFO Hotspot',
    description: 'Scottish town with intense long-term UFO activity',
    categoryId: 'ufos',
    icon: '🏴',
    sections: [
      {
        title: 'Overview',
        content:
          'Bonnybridge sits within the “Falkirk Triangle,” one of the world’s most active UFO regions.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Residents report lights, strange craft shapes, and unexplained humanoids.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possible military exercises or genuine UFO corridor rooted in geologic anomalies.',
      },
    ],
  },
  {
    id: 'uf-49',
    name: 'Borobudur UFO Reliefs',
    description: 'Ancient temple carvings depicting flying craft',
    categoryId: 'ufos',
    icon: '🕌',
    sections: [
      {
        title: 'Overview',
        content:
          'Borobudur’s relief panels in Indonesia include motifs interpreted by some as ancient flying machines or metallic craft.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Carvings show disc-like shapes and figures ascending toward the sky.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Mainstream archaeology sees symbolism; alternative archaeology argues pre-technological contact.',
      },
    ],
  },
  {
    id: 'uf-50',
    name: 'Brazilian Football UFOs',
    description: 'Mass sightings during televised football events in Brazil',
    categoryId: 'ufos',
    icon: '⚽',
    sections: [
      {
        title: 'Overview',
        content:
          'Multiple matches caught bright objects on camera hovering over stadiums.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Fans and broadcasters documented discs, glowing spheres, and darting lights.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Drones, fireworks, or structured craft attracted to large crowds.',
      },
    ],
  },
  {
    id: 'uf-51',
    name: 'Broad Haven School UFO',
    description: 'Child witnesses of a landed craft in Wales',
    categoryId: 'ufos',
    icon: '🏫',
    sections: [
      {
        title: 'Overview',
        content:
          'In 1977, students at Broad Haven Primary reported a silver cigar-shaped craft and tall humanoid figure.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Children independently drew near-identical images. Adult sightings followed.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Debunkers cite misidentification; believers see one of the UK’s strongest CE3 cases.',
      },
    ],
  },
  {
    id: 'uf-52',
    name: 'Buff Ledge Camp UFO',
    description: 'Lake-side abduction and multi-witness craft sighting',
    categoryId: 'ufos',
    icon: '🏕️',
    sections: [
      {
        title: 'Overview',
        content:
          'In 1968, camp counselors reported luminous craft descending over Lake Champlain and being taken aboard.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Telepathic impressions and consistent testimony support the case.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Skeptics argue false memory; supporters claim it resembles other hybrid-program abductions.',
      },
    ],
  },
  {
    id: 'uf-53',
    name: 'Calvine Diamond UFO',
    description: 'Declassified UK photograph of a diamond-shaped craft',
    categoryId: 'ufos',
    icon: '💎',
    sections: [
      {
        title: 'Overview',
        content:
          'In 1990, hikers photographed a large diamond-shaped object pursued by jets in Scotland. The photo was hidden for decades before partial release.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'High-resolution imagery suggests a structured craft with metallic features.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possibly a secret U.S. platform or genuine non-human object.',
      },
    ],
  },
  {
    id: 'uf-54',
    name: 'Cash-Landrum Medical Effects',
    description: 'Health aftermath of the Cash-Landrum sighting',
    categoryId: 'ufos',
    icon: '🧪',
    sections: [
      {
        title: 'Overview',
        content:
          'Following their 1980 encounter, the women suffered burns and radiation-like symptoms.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Medical tests showed tissue damage and immune suppression. Government denied involvement.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Potential radiation leak from exotic propulsion, or unrelated medical conditions coincidentally timed.',
      },
    ],
  },
  {
    id: 'uf-55',
    name: 'Celestials Aliens',
    description: 'Tall, luminous extraterrestrials from contact lore',
    categoryId: 'ufos',
    icon: '🌟',
    sections: [
      {
        title: 'Overview',
        content:
          'Described as radiant beings guiding humanity spiritually, found in 20th-century contactee narratives.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Witnesses report peaceful interactions and teachings about cosmic harmony.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'May represent visionary experiences, or a faction of benevolent non-human intelligences.',
      },
    ],
  },
  {
    id: 'uf-56',
    name: 'Chile Navy Infrared UFO',
    description: '2014 helicopter capture of anomalous heat-emitting craft',
    categoryId: 'ufos',
    icon: '🔥',
    sections: [
      {
        title: 'Overview',
        content:
          'A Chilean Navy helicopter recorded a UFO releasing hot material while maintaining steady flight.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Infrared footage resisted conventional explanation; object lacked transponder and performed unusual maneuvers.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possibly atmospheric plasma or advanced drone. Classified as genuine UAP by Chilean authorities.',
      },
    ],
  },
  {
    id: 'uf-57',
    name: 'Close Encounters Kinds',
    description: 'Classification system for UFO encounters',
    categoryId: 'ufos',
    icon: '📘',
    sections: [
      {
        title: 'Overview',
        content:
          'J. Allen Hynek established CE1–CE3 encounters, later expanded to CE4–CE7 by researchers.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Categories range from simple sightings to contact, abduction, and communication.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'A flexible taxonomy but widely used across investigative fields.',
      },
    ],
  },
  {
    id: 'uf-58',
    name: 'Colares Light-Beam Wounds',
    description: 'Injuries associated with beam attacks in Brazil',
    categoryId: 'ufos',
    icon: '🔦',
    sections: [
      {
        title: 'Overview',
        content:
          'Victims of the 1977 Colares flap reported beams that extracted blood or caused puncture wounds.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Medical documents show strange lesions and fatigue patterns.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possibly scanning or harvesting technology. Alternative view: psychosomatic reaction amplified by fear.',
      },
    ],
  },
  {
    id: 'uf-59',
    name: 'Crop Circles',
    description: 'Geometric formations in fields linked to UFO lore',
    categoryId: 'ufos',
    icon: '🌾',
    sections: [
      {
        title: 'Overview',
        content:
          'While many are hoaxes, some formations show complex designs, node elongation, and microwave-like effects.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Witnesses claim orbs are seen forming circles rapidly.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possible hoaxes, earth energies, or messages from non-human intelligence.',
      },
    ],
  },
  {
    id: 'uf-60',
    name: 'Cussac France UFO',
    description: 'Children witness hovering sphere with entities',
    categoryId: 'ufos',
    icon: '⚪',
    sections: [
      {
        title: 'Overview',
        content:
          'In 1967, siblings in Cussac saw a bright sphere and small humanoids who flew into it before it ascended.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Burn marks and rotational traces found at site.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possibly a plasma phenomenon or genuine CE3 encounter.',
      },
    ],
  },
  {
    id: 'uf-61',
    name: 'Exeter Lights Case',
    description: 'Multiple-witness UFO event in New Hampshire',
    categoryId: 'ufos',
    icon: '🔴',
    sections: [
      {
        title: 'Overview',
        content:
          'In 1965, witnesses including police saw huge red lights in formation moving silently above Exeter.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Witness consistency and duration made this case a staple of UFO studies.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Air Force blamed aircraft refueling operations; witnesses disagreed.',
      },
    ],
  },
  {
    id: 'uf-62',
    name: 'Extraterrestrial Hypothesis',
    description: 'Theory proposing UFOs as physical craft from other planets',
    categoryId: 'ufos',
    icon: '🌌',
    sections: [
      {
        title: 'Overview',
        content:
          'The ETH holds that UFOs are technological craft piloted by extraterrestrials visiting Earth.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Radar-visual cases, abductions, and structured craft sightings often cited as support.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Critics point to interstellar travel difficulties; supporters argue advanced civilizations can overcome them.',
      },
    ],
  },
  {
    id: 'uf-63',
    name: 'Falcon Airship Papers',
    description: 'Mysterious early airship documents allegedly detailing crashes',
    categoryId: 'ufos',
    icon: '📰',
    sections: [
      {
        title: 'Overview',
        content:
          'Late 19th-century papers describe crashed “airships” and humanoid occupants across America.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Stories predate modern UFO culture, aligning with holiness movements and spiritualism.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'May be mythic proto-UFO reports or early contact accounts disguised in airship-era language.',
      },
    ],
  },
  {
    id: 'uf-64',
    name: 'Falcon Lake Incident',
    description: 'Canadian CE2 case involving burns and grid-pattern wounds',
    categoryId: 'ufos',
    icon: '🔥',
    sections: [
      {
        title: 'Overview',
        content:
          'In 1967, Stefan Michalak encountered a landed craft emitting hot exhaust vents.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'He suffered circular burn marks matching the craft’s vent grid.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Considered one of Canada’s strongest physical-trace cases.',
      },
    ],
  },
  {
    id: 'uf-65',
    name: 'Falcon UFO Swarm',
    description: 'Multi-object swarm moving with intelligent coordination',
    categoryId: 'ufos',
    icon: '🦅',
    sections: [
      {
        title: 'Overview',
        content:
          'Witnesses saw dozens of small luminous objects moving in coordinated formations over the Rockies.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Radar tracked multiple targets performing synchronized maneuvers.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possibly drones, plasma organisms, or highly advanced probe swarms.',
      },
    ],
  },
  {
    id: 'uf-66',
    name: 'Foo Fighters WWII',
    description: 'Mysterious luminous objects shadowing WWII aircraft',
    categoryId: 'ufos',
    icon: '💥',
    sections: [
      {
        title: 'Overview',
        content:
          'Pilots during WWII reported glowing spheres and discs pacing their aircraft. These “Foo Fighters” displayed impossible maneuvering and intelligence-like behavior.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Witness reports came from both Allied and Axis pilots, ruling out enemy technology.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Hypotheses include ball lightning, St. Elmo’s fire, or early extraterrestrial probes.',
      },
    ],
  },
  {
    id: 'uf-67',
    name: 'Greys Aliens',
    description: 'The iconic extraterrestrial species in abduction lore',
    categoryId: 'ufos',
    icon: '👽',
    sections: [
      {
        title: 'Overview',
        content:
          'Short, gray-skinned beings with large black eyes dominate modern abduction narratives since the 1960s.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Witnesses consistently describe telepathy, emotionless demeanor, and medical procedures.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possibly a real species, an interdimensional form, or psychological archetype representing the “unknown other.”',
      },
    ],
  },
  {
    id: 'uf-68',
    name: 'Gulf Breeze UFO Photos',
    description: 'Controversial Florida UFO photos from the 1980s',
    categoryId: 'ufos',
    icon: '📸',
    sections: [
      {
        title: 'Overview',
        content:
          'Ed Walters produced detailed photos of structured craft. The case drew intense media attention.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Photos show smooth, symmetrical craft with glowing undercarriages. Critics later claimed hoax evidence.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Some maintain authenticity; others see it as a mix of real sightings and human fabrication.',
      },
    ],
  },
  {
    id: 'uf-69',
    name: 'Hessdalen Radar Correlations',
    description: 'Norwegian valley with documented luminous phenomena',
    categoryId: 'ufos',
    icon: '📡',
    sections: [
      {
        title: 'Overview',
        content:
          'Since the 1980s, Hessdalen has produced repeatable lights and anomalous radar tracks.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Scientific stations recorded multi-wavelength data: plasma signatures, intelligent motion, and light curves.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Chemical plasma, piezoelectric effects, or non-human drone-like probes.',
      },
    ],
  },
  {
    id: 'uf-70',
    name: 'Hoer Verde Alien Photos',
    description: 'Alleged school photo showing a tall extraterrestrial',
    categoryId: 'ufos',
    icon: '📷',
    sections: [
      {
        title: 'Overview',
        content:
          'A 1970s Brazilian school photo allegedly shows a tall figure standing behind children.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'The figure appears semi-transparent and disproportionate. No one recalls a person standing there.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possibly a photographic anomaly — or captured non-human observer.',
      },
    ],
  },
  {
    id: 'uf-71',
    name: 'Hudson River Boomerang',
    description: 'Massive boomerang-shaped craft over New York',
    categoryId: 'ufos',
    icon: '🪃',
    sections: [
      {
        title: 'Overview',
        content:
          'In the 1980s–90s, hundreds along the Hudson River valley reported enormous silent boomerang craft passing overhead.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Witnesses described football-field-sized craft with bright lights. Many police sightings occurred.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Potential experimental aircraft or one of the largest structured UFO craft reported.',
      },
    ],
  },
  {
    id: 'uf-72',
    name: 'Hudson Valley UFO Wave',
    description: 'Cluster of sightings tied to giant craft in New York',
    categoryId: 'ufos',
    icon: '🌉',
    sections: [
      {
        title: 'Overview',
        content:
          'Thousands reported formations of lights and silent hovering craft from 1982 to 1986.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Coordination, speed changes, and city-wide witness counts make it a landmark case.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Some attribute to ultralight aircraft groups; others believe genuine non-human craft.',
      },
    ],
  },
  {
    id: 'uf-73',
    name: 'Humanoid Encounters',
    description: 'Close encounters involving non-human entities',
    categoryId: 'ufos',
    icon: '🧍‍♂️',
    sections: [
      {
        title: 'Overview',
        content:
          'Reports include tall whites, Nordics, insectoids, dwarves, and robotic beings.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Witness consistency across cultures supports a wide taxonomy of entities.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possibilities include multiple alien species, interdimensional manifestations, or symbolic visionary forms.',
      },
    ],
  },
  {
    id: 'uf-74',
    name: 'Insectoid Aliens',
    description: 'Encounters describing mantis-like intelligences',
    categoryId: 'ufos',
    icon: '🦗',
    sections: [
      {
        title: 'Overview',
        content:
          'One of the most feared entity types, described in abduction lore as tall, thin, and psychic.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Witnesses report medical procedures, telepathy, and hierarchical presence over smaller Greys.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possibly leader-class beings or symbolic representations of advanced minds.',
      },
    ],
  },
  {
    id: 'uf-75',
    name: 'Interdimensional Hypothesis',
    description: 'Theory that UFOs originate from parallel dimensions',
    categoryId: 'ufos',
    icon: '🌀',
    sections: [
      {
        title: 'Overview',
        content:
          'Posits that UFOs are not extraterrestrial but interdimensional beings or craft phasing into our reality.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Explains the ephemeral, physics-defying behavior of many sightings.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Advocated by Jacques Vallée and John Keel as a unified theory for UFO and paranormal overlap.',
      },
    ],
  },
  {
    id: 'uf-76',
    name: 'Japan Saucer Biwa',
    description: 'Lake Biwa sighting of metallic saucers',
    categoryId: 'ufos',
    icon: '🍥',
    sections: [
      {
        title: 'Overview',
        content:
          'Fishermen and travelers near Lake Biwa reported spinning metallic discs hovering over the water.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Sightings included reflections, humming, and fast ascents.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Potential experimental craft or atmospheric mirage. Some link to underwater bases.',
      },
    ],
  },
  {
    id: 'uf-77',
    name: 'Japan Utsuro-bune Boat',
    description: '18th-century account of a strange woman in a round craft',
    categoryId: 'ufos',
    icon: '🛶',
    sections: [
      {
        title: 'Overview',
        content:
          'In 1803, fishermen rescued a young woman from a hollow metal disc with glass windows.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Drawings resemble modern UFO craft.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possibly a foreign visitor—or a historical close encounter.',
      },
    ],
  },
  {
    id: 'uf-78',
    name: 'Kalahari UFO Crash',
    description: 'Alleged UFO retrieval by South African forces',
    categoryId: 'ufos',
    icon: '🦏',
    sections: [
      {
        title: 'Overview',
        content:
          'In 1989, claims surfaced of a craft shot down near the Kalahari Desert and recovered by military.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Documents and testimonies remain controversial.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Either fabrication or a genuine classified recovery.',
      },
    ],
  },
  {
    id: 'uf-79',
    name: 'Kelly Green Men',
    description: 'Goblin-like visitors encountered in Kentucky',
    categoryId: 'ufos',
    icon: '🟩',
    sections: [
      {
        title: 'Overview',
        content:
          'In 1955, families in Hopkinsville reported small metallic-skinned beings surrounding a farmhouse.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Witnesses shot at them but bullets had no effect; creatures floated rather than walked.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possibly misidentified owls, or a rare direct encounter with non-human visitors.',
      },
    ],
  },
  {
    id: 'uf-80',
    name: 'Kelly-Hopkinsville Siege',
    description: 'Extended confrontation with non-human entities',
    categoryId: 'ufos',
    icon: '🏘️',
    sections: [
      {
        title: 'Overview',
        content:
          'The same 1955 event escalated into an hours-long standoff between families and luminous beings.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Multiple adults corroborated the event; police found shell casings and damaged property.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'One of the most dramatic CE3/CE4 cases in history.',
      },
    ],
  },
  {
    id: 'uf-81',
    name: 'Kenya Hovering Cylinder',
    description: 'Large cylindrical craft over rural Kenya',
    categoryId: 'ufos',
    icon: '🗼',
    sections: [
      {
        title: 'Overview',
        content:
          'Villagers observed a silent motionless cylinder in daylight for several minutes.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Descriptions resemble classic cylindrical carriers or “motherships.”',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Could be misidentified balloon or genuine structured craft.',
      },
    ],
  },
  {
    id: 'uf-82',
    name: 'Kecksburg Acorn Crash',
    description: 'Acorn-shaped craft crash in Pennsylvania forest',
    categoryId: 'ufos',
    icon: '🌰',
    sections: [
      {
        title: 'Overview',
        content:
          'In 1965, a fiery object landed near Kecksburg. Military forces quickly recovered a large acorn-shaped object.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Witnesses saw writing resembling hieroglyphs. Government denied any retrieval.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possible satellite, secret tech — or extraterrestrial probe.',
      },
    ],
  },
  {
    id: 'uf-83',
    name: 'Kyiv Sphere Craft',
    description: 'Metallic sphere recorded during Ukraine conflict',
    categoryId: 'ufos',
    icon: '⚪',
    sections: [
      {
        title: 'Overview',
        content:
          'Troops captured footage of a reflective sphere maneuvering at high speed.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Defied expected drone behavior and lacked visible propulsion.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possibly a foreign spy drone — or a modern incarnation of the classic UFO sphere.',
      },
    ],
  },
  {
    id: 'uf-84',
    name: 'Lake Baikal Humanoids',
    description: 'Aquatic humanoids encountered by divers',
    categoryId: 'ufos',
    icon: '🌊',
    sections: [
      {
        title: 'Overview',
        content:
          'Soviet divers in Lake Baikal reported tall silver-suited humanoids underwater.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Incidents included rapid ascents causing diver injury.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possibly misperception — or evidence of underwater non-human presence.',
      },
    ],
  },
  {
    id: 'uf-85',
    name: 'Lake Erie Cube',
    description: 'Cube-shaped craft emerging from Lake Erie',
    categoryId: 'ufos',
    icon: '🧊',
    sections: [
      {
        title: 'Overview',
        content:
          'Witnesses along the coast saw a glowing cube ascend from the water, rotate, and speed away.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Photographs and EM disruptions documented by observers.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possibly advanced underwater bases or probe vehicles.',
      },
    ],
  },
  {
    id: 'uf-86',
    name: 'Lakenheath-Bentwaters Chase',
    description: 'Cold War radar-visual UFO pursuit over two RAF bases',
    categoryId: 'ufos',
    icon: '🛩️',
    sections: [
      {
        title: 'Overview',
        content:
          'In August 1956, RAF radars tracked high-speed unknowns over Lakenheath and Bentwaters. Pilots were scrambled and attempted intercept.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Radar operators noted intelligent maneuvers. A Venom jet attempted pursuit but was outpaced.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'One of the most solid radar-visual cases ever; explanations remain inconclusive.',
      },
    ],
  },
  {
    id: 'uf-87',
    name: 'Light Rain Messages',
    description: 'Contact cases involving rain that forms symbolic patterns',
    categoryId: 'ufos',
    icon: '💧',
    sections: [
      {
        title: 'Overview',
        content:
          'Witnesses report light rainfall forming geometric symbols on windows or cars following sightings.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Patterns often resemble languages or sigils, appearing briefly then evaporating.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possible pareidolia — or targeted communication attempts.',
      },
    ],
  },
  {
    id: 'uf-88',
    name: 'Lonnie Zamora Landing',
    description: 'Police officer witnesses landed craft in New Mexico',
    categoryId: 'ufos',
    icon: '🚓',
    sections: [
      {
        title: 'Overview',
        content:
          'In 1964, Officer Lonnie Zamora saw an egg-shaped craft and two small beings near Socorro.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Physical traces included burnt vegetation and landing impressions.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Considered one of the strongest CE3 cases due to credibility of witness.',
      },
    ],
  },
  {
    id: 'uf-89',
    name: 'Lonnie Zamora Symbols',
    description: 'Mysterious glyph reported on Socorro craft',
    categoryId: 'ufos',
    icon: '🔣',
    sections: [
      {
        title: 'Overview',
        content:
          'Zamora described a red, unfamiliar symbol on the craft’s side — later redacted by authorities.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Multiple variations circulated; none officially confirmed.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possibly insignia of craft origin or disinformation planted afterward.',
      },
    ],
  },
  {
    id: 'uf-90',
    name: 'Men in Black',
    description: 'Enigmatic figures who silence UFO witnesses',
    categoryId: 'ufos',
    icon: '🕴️',
    sections: [
      {
        title: 'Overview',
        content:
          'Reports since the 1950s describe pale, robotic, or uncanny men warning witnesses not to speak.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'They exhibit unnatural behavior, outdated clothing, and telepathic skill.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possibly intelligence agents, ultraterrestrials, or psychological manifestations of the phenomenon itself.',
      },
    ],
  },
  {
    id: 'uf-91',
    name: 'Mexico City 1991 Flyover',
    description: 'UFO recorded during a solar eclipse by thousands',
    categoryId: 'ufos',
    icon: '🌞',
    sections: [
      {
        title: 'Overview',
        content:
          'During the July 1991 eclipse, multiple cameras captured a stationary metallic object.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Footage from many vantage points supports a structured craft.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Debate continues about whether the object was astronomical or anomalous.',
      },
    ],
  },
  {
    id: 'uf-92',
    name: 'Montemarciano CE3',
    description: 'Italian close encounter with humanoid beings',
    categoryId: 'ufos',
    icon: '🇮🇹',
    sections: [
      {
        title: 'Overview',
        content:
          'In 1954, a motorist encountered a landed craft and two humanoids near Montemarciano.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Witness described blue overalls, helmets, and small stature.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'One of Italy’s earliest CE3 cases; widely debated but never debunked fully.',
      },
    ],
  },
  {
    id: 'uf-93',
    name: 'Morristown Green Flares',
    description: 'Mysterious lights over New Jersey',
    categoryId: 'ufos',
    icon: '🟢',
    sections: [
      {
        title: 'Overview',
        content:
          'In 2009, many saw hovering green lights over Morristown, later claimed as a hoax.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Lights behaved in formation and attracted widespread media attention.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Though confessed hoaxers emerged, some reports predate the hoax timeframe.',
      },
    ],
  },
  {
    id: 'uf-94',
    name: 'New Jerusalem UFO City',
    description: 'Claim of vast UFO city appearing in the sky',
    categoryId: 'ufos',
    icon: '🏙️',
    sections: [
      {
        title: 'Overview',
        content:
          'Witnesses over the centuries describe floating city-like structures glowing in the clouds.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Reports resemble mirages but include impossible architectural features.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possible atmospheric refraction — or glimpses into alternate civilizations.',
      },
    ],
  },
  {
    id: 'uf-95',
    name: 'Nimitz Tic-Tac Craft',
    description: 'Alternative documentation of the Tic-Tac encounter',
    categoryId: 'ufos',
    icon: '🍬',
    sections: [
      {
        title: 'Overview',
        content:
          'Focuses on the object’s behavior, described as instantaneous acceleration and gravity-defying motion.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Cross-witness testimony from multiple Navy pilots.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Considered one of the strongest modern evidence sets for non-human craft.',
      },
    ],
  },
  {
    id: 'uf-96',
    name: 'Olden Norway Blue Sphere',
    description: 'Blue orb hovering over fjords',
    categoryId: 'ufos',
    icon: '🔵',
    sections: [
      {
        title: 'Overview',
        content:
          'Witnesses described an intense blue orb silently drifting through mountain valleys.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Photos show a spherical, luminous object with smooth movement.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possibly plasma, drone, or small intelligent probe.',
      },
    ],
  },
  {
    id: 'uf-97',
    name: 'Patagonia Black Wedge',
    description: 'Massive wedge-shaped craft seen over Patagonia',
    categoryId: 'ufos',
    icon: '⬛',
    sections: [
      {
        title: 'Overview',
        content:
          'Travelers described a pitch-black wedge blocking out stars as it glided overhead.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Silent movement and enormous size echo Hudson Valley and Phoenix craft.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possibly stealth aircraft—or something far beyond current tech.',
      },
    ],
  },
  {
    id: 'uf-98',
    name: 'Pascagoula Abduction',
    description: 'Two men taken aboard craft on Mississippi riverbank',
    categoryId: 'ufos',
    icon: '🛶',
    sections: [
      {
        title: 'Overview',
        content:
          'In 1973, Charles Hickson and Calvin Parker were taken by robotic entities with claw-like hands.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Recorded police interviews show genuine terror; both passed lie detector tests.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'One of the most credible abduction events ever documented.',
      },
    ],
  },
  {
    id: 'uf-99',
    name: 'Pascagoula Crab-Claw Beings',
    description: 'Distinctive robotic creatures from Pascagoula CE4',
    categoryId: 'ufos',
    icon: '🦀',
    sections: [
      {
        title: 'Overview',
        content:
          'The beings had slit-like mouths, carrot-shaped heads, and claw appendages.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Descriptions remained consistent for decades.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Either robotic workers or symbolic forms adapted to abduction roles.',
      },
    ],
  },
  {
    id: 'uf-100',
    name: 'Peru Miner Abductions',
    description: 'Miners report creature encounters in remote Andes',
    categoryId: 'ufos',
    icon: '⛏️',
    sections: [
      {
        title: 'Overview',
        content:
          'Workers in isolated camps claimed repeated visitations by floating beings.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Reports include paralysis, missing time, and strange lights.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possibly misidentified criminal groups — or non-human extraction units.',
      },
    ],
  },
  {
    id: 'uf-101',
    name: 'Philadelphia Experiment',
    description: 'Legend of a Navy ship teleported in 1943',
    categoryId: 'ufos',
    icon: '⚓',
    sections: [
      {
        title: 'Overview',
        content:
          'Claims that the USS Eldridge was made invisible and teleported, with crew allegedly fused into the hull.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Most historians call it a myth, but rumors tie it to exotic field technology.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possibly conflation of naval degaussing tech and later UFO narratives.',
      },
    ],
  },
  {
    id: 'uf-102',
    name: 'Phoenix Boomerang Sightings',
    description: 'Additional boomerang craft sightings tied to Phoenix Lights',
    categoryId: 'ufos',
    icon: '🪃',
    sections: [
      {
        title: 'Overview',
        content:
          'Witnesses before and after the 1997 event described enormous boomerang shapes.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Testimonies indicate a craft miles wide moving without sound.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Either multiple events occurred that night, or a single massive craft.',
      },
    ],
  },
  {
    id: 'uf-103',
    name: 'Phoenix Lights Secondary',
    description: 'Later flare-drop event merged with primary craft sighting',
    categoryId: 'ufos',
    icon: '🔥',
    sections: [
      {
        title: 'Overview',
        content:
          'The military flare explanation applies to the second set of lights but not the original V-shaped craft.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Videos show stationary flares falling behind mountains.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Demonstrates how two separate events can be conflated during mass sightings.',
      },
    ],
  },
  {
    id: 'uf-104',
    name: 'Popocatepetl Volcano UFOs',
    description: 'Frequent UFO activity near active Mexican volcano',
    categoryId: 'ufos',
    icon: '🌋',
    sections: [
      {
        title: 'Overview',
        content:
          'Surveillance cameras regularly record luminous objects entering or exiting the volcanic plume.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Objects show constant speed despite turbulent air.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possible drone misreads — or geological energy attracting UAP.',
      },
    ],
  },
  {
    id: 'uf-105',
    name: 'Project Aquarius',
    description: 'Alleged classified UFO program referenced in leaked docs',
    categoryId: 'ufos',
    icon: '📚',
    sections: [
      {
        title: 'Overview',
        content:
          'Purported to study alien craft, biological entities, and communication attempts from 1950s onward.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Referencing inconsistent leaked documents; authenticity debated.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possibly disinformation — or genuine black-budget legacy to MJ-12 programs.',
      },
    ],
  },
  {
    id: 'uf-106',
    name: 'Project Blue Book',
    description: 'U.S. Air Force UFO investigations from 1952–1969',
    categoryId: 'ufos',
    icon: '📘',
    sections: [
      {
        title: 'Overview',
        content:
          'Blue Book catalogued over 12,000 UFO reports, attempting to evaluate military and civilian sightings.',
      },
      {
        title: 'Evidence & Reports',
        content:
          '701 cases remained officially “unexplained.” Notable events include Lubbock Lights and Washington D.C. Flap.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Dismissed publicly as misidentifications, though investigators privately expressed deeper concerns.',
      },
    ],
  },
  {
    id: 'uf-107',
    name: 'Project Serpo',
    description: 'Alleged human–extraterrestrial exchange program',
    categoryId: 'ufos',
    icon: '🔄',
    sections: [
      {
        title: 'Overview',
        content:
          'Claims emerged in the 2000s describing an exchange with beings from planet Serpo beginning in the 1960s.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Documents and testimonies circulated online, though authenticity remains disputed.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possibly an elaborate hoax, or controlled disclosure of limited truth.',
      },
    ],
  },
  {
    id: 'uf-108',
    name: 'Project Stargate Remote Viewing',
    description: 'Psychic spying program tied to UFO intelligence',
    categoryId: 'ufos',
    icon: '🧿',
    sections: [
      {
        title: 'Overview',
        content:
          'Though primarily ESP-focused, many remote viewing sessions reported non-human craft and entities.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Viewers claimed to read alien bases, craft interiors, and ancient extraterrestrial history.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Suggests overlap between psychic and UAP intelligence domains.',
      },
    ],
  },
  {
    id: 'uf-109',
    name: 'Reptilians Shapeshifters',
    description: 'Claims of reptilian humanoids infiltrating human society',
    categoryId: 'ufos',
    icon: '🦎',
    sections: [
      {
        title: 'Overview',
        content:
          'Lore describes tall reptilian beings with mind-control abilities and human disguises.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Witness claims range from underground bases to political infiltration.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possibly symbolic myth-making, psyops, or genuine non-human species narratives.',
      },
    ],
  },
  {
    id: 'uf-110',
    name: 'Roswell Incident Variant',
    description: 'Alternate takes on the 1947 crash beyond official account',
    categoryId: 'ufos',
    icon: '🛸',
    sections: [
      {
        title: 'Overview',
        content:
          'Focuses on secondary testimonies claiming bodies, exotic materials, and reverse-engineering attempts.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Many witnesses surfaced decades later via deathbed confessions.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Represents the broader mythology of Roswell as more than a single event.',
      },
    ],
  },
  {
    id: 'uf-111',
    name: 'Shag Harbour Sonar',
    description: 'Follow-up underwater searches after 1967 crash',
    categoryId: 'ufos',
    icon: '🌊',
    sections: [
      {
        title: 'Overview',
        content:
          'Canadian Navy divers searched for a submerged craft, with sonar detecting unidentified objects.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Military logs reference chasing a moving underwater target.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possibly a submerged craft rendezvous — or unknown marine phenomenon.',
      },
    ],
  },
  {
    id: 'uf-112',
    name: 'Singapore Glowing Manta',
    description: 'Large manta-shaped luminous craft over Singapore',
    categoryId: 'ufos',
    icon: '🪸',
    sections: [
      {
        title: 'Overview',
        content:
          'Witnesses reported a manta-ray shaped translucent craft that emitted pulsing blue light.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'The object drifted silently before accelerating straight upward.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possibly biological-like probes or aerodynamic cloaking tech.',
      },
    ],
  },
  {
    id: 'uf-113',
    name: 'Solway Spaceman Photo',
    description: 'Famous photograph of unknown figure behind child',
    categoryId: 'ufos',
    icon: '👤',
    sections: [
      {
        title: 'Overview',
        content:
          'In 1964, a photo taken in England showed a white-suited figure behind a girl, unseen at the time.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Analysis suggests an anomalous figure; debunkers cite overexposure.',
      },
      {
        title: 'Theories & Explanations',
          content:
          'Possibly an entity or simply misinterpreted human in bright clothing.',
      },
    ],
  },
  {
    id: 'uf-114',
    name: 'Space Brothers Contactees',
    description: '1950s era claims of benevolent human-like aliens',
    categoryId: 'ufos',
    icon: '🤝',
    sections: [
      {
        title: 'Overview',
        content:
          'Figures like George Adamski claimed contact with tall blond extraterrestrials promoting peace.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Photos and messages were controversial but shaped early UFO culture.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possibly a mix of idealism, hoax, and genuine anomalous encounters.',
      },
    ],
  },
  {
    id: 'uf-115',
    name: 'Star People',
    description: 'Native American accounts of sky-ancestors visiting Earth',
    categoryId: 'ufos',
    icon: '⭐',
    sections: [
      {
        title: 'Overview',
        content:
          'Many tribes describe beings from the sky who taught agriculture, medicine, and astronomy.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Oral traditions resemble modern extraterrestrial narratives.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Could reflect ancient contact or symbolic cosmology.',
      },
    ],
  },
  {
    id: 'uf-116',
    name: 'Stralsund Air Battle',
    description: '1665 UFO event witnessed by fishermen',
    categoryId: 'ufos',
    icon: '⛵',
    sections: [
      {
        title: 'Overview',
        content:
          'Witnesses saw airborne lights engaging in apparent battle over the Baltic Sea.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Historical drawings depict structured craft-like shapes.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possibly atmospheric mirages — or ancient aerial phenomena.',
      },
    ],
  },
  {
    id: 'uf-117',
    name: 'Sudan Day-Stillness UFO',
    description: 'Entire village reports sudden silence and aerial object',
    categoryId: 'ufos',
    icon: '🔕',
    sections: [
      {
        title: 'Overview',
        content:
          'Eyewitnesses describe an abrupt freeze in natural sound followed by a metallic hovering craft.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Animals reportedly froze in place; birds silent.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possible EM field effect — or collective perceptual anomaly.',
      },
    ],
  },
  {
    id: 'uf-118',
    name: 'Tehran 1976 Incident',
    description: 'Iranian F-4 jets chase UFO that disables weapons',
    categoryId: 'ufos',
    icon: '🛫',
    sections: [
      {
        title: 'Overview',
        content:
          'A UFO jammed weapons and communications of pursuing jets during a multi-witness CE1-CE2 event.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Radar, pilot testimony, and multiple EM failures documented.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'One of the strongest military UFO engagements on record.',
      },
    ],
  },
  {
    id: 'uf-119',
    name: 'Terracotta UFOs',
    description: 'Ancient pottery depicting apparent spacecraft',
    categoryId: 'ufos',
    icon: '🏺',
    sections: [
      {
        title: 'Overview',
        content:
          'Artifacts from various cultures show disc-like or bell-shaped objects.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Patterns resemble modern craft despite centuries apart.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possibly symbolic — or evidence of ancient encounters.',
      },
    ],
  },
  {
    id: 'uf-120',
    name: 'Texas Triangle Pursuit',
    description: 'Triangular craft pursued by police in Texas',
    categoryId: 'ufos',
    icon: '🔺',
    sections: [
      {
        title: 'Overview',
        content:
          'In 2000, multiple officers chased a silent black triangle across rural highways.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Witness descriptions match Phoenix and Hudson Valley triangles.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possibly advanced military craft — or recurring non-human platform.',
      },
    ],
  },
  {
    id: 'uf-121',
    name: 'Trans-en-Provence Traces',
    description: 'One of the best physical-trace UFO cases',
    categoryId: 'ufos',
    icon: '🧪',
    sections: [
      {
        title: 'Overview',
        content:
          'In 1981 France, a landed craft left soil compression and biochemical changes.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Lab analysis showed chlorophyll breakdown consistent with high heat and radiation.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'A gold-standard CE2 case with measurable environmental impact.',
      },
    ],
  },
  {
    id: 'uf-122',
    name: 'UFO Cults',
    description: 'Groups centered around extraterrestrial belief systems',
    categoryId: 'ufos',
    icon: '🛐',
    sections: [
      {
        title: 'Overview',
        content:
          'Movements like Heaven’s Gate and Raëlism integrate UFOs into spiritual doctrine.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Often involve charismatic leaders claiming contact.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Sociological responses to the modern mythos of extraterrestrial visitation.',
      },
    ],
  },
  {
    id: 'uf-123',
    name: 'UFO Flaps Waves',
    description: 'Periods of intense clustered UFO reports',
    categoryId: 'ufos',
    icon: '🌊',
    sections: [
      {
        title: 'Overview',
        content:
          'Flaps show sudden spikes in sightings localized in time and place.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Examples include 1952 Washington Flap and 1977 Colares.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possibly cycles of survey, resource extraction, or mass misidentifications.',
      },
    ],
  },
  {
    id: 'uf-124',
    name: 'Ufology Study',
    description: 'Scientific and cultural study of UFO phenomena',
    categoryId: 'ufos',
    icon: '🔬',
    sections: [
      {
        title: 'Overview',
        content:
          'Ufology investigates sightings, patterns, materials, and experiencer testimony.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'A multidisciplinary field incorporating psychology, physics, and data science.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Often criticized for lack of institutional support despite robust case data.',
      },
    ],
  },
  {
    id: 'uf-125',
    name: 'Ultraterrestrials Theory',
    description: 'Concept of non-human intelligences native to Earth',
    categoryId: 'ufos',
    icon: '🌐',
    sections: [
      {
        title: 'Overview',
        content:
          'Proposes that the intelligence behind UFOs is not extraterrestrial but Earth-based and older than humanity.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Explains cross-cultural continuity and paranormal overlap.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Championed by John Keel as an alternative to “nuts-and-bolts” craft.',
      },
    ],
  },
  {
    id: 'uf-126',
    name: 'Val Johnson Car Collision',
    description: 'Deputy sheriff’s patrol car struck by glowing orb',
    categoryId: 'ufos',
    icon: '🚓',
    sections: [
      {
        title: 'Overview',
        content:
          'In 1979 Minnesota, an orb collided with Johnson’s vehicle, damaging windshield and equipment.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Dashboard clock and wristwatch were both delayed by 14 minutes.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'One of the rare CE2 “impact” events with physical evidence.',
      },
    ],
  },
  {
    id: 'uf-127',
    name: 'Valensole Lavender Encounter',
    description: 'Farmer encounters landed craft and humanoids in France',
    categoryId: 'ufos',
    icon: '🌾',
    sections: [
      {
        title: 'Overview',
        content:
          'In 1965, Maurice Masse saw a domed craft and two small beings among his lavender fields.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Ground impressions and plant effects documented by police.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Considered a high-credibility European CE3 case.',
      },
    ],
  },
  {
  id: 'uf-128',
  name: 'Vallée Control System',
  description: 'Theory that UFOs manipulate human belief and culture',
  categoryId: 'ufos',
  icon: '🧩',
  sections: [
    {
      title: 'Overview',
      content:
        'Jacques Vallée proposed that UFO phenomena act as a cultural catalyst shaping human perception.',
    },
    {
      title: 'Evidence & Reports',
      content:
        'Patterns appear across folklore, religion, and modern sightings.',
    },
    {
      title: 'Theories & Explanations',
      content:
        'Suggests UFOs are part of a feedback mechanism guiding human evolution.',
    },
  ],
},
  {
    id: 'uf-129',
    name: 'Varginha Alien Incident',
    description: 'Brazilian case involving captured non-human entity',
    categoryId: 'ufos',
    icon: '🟤',
    sections: [
      {
        title: 'Overview',
        content:
          'In 1996, witnesses reported a small, injured creature with oily skin and red eyes.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Military trucks were seen transporting unknown cargo; hospitals reported unusual activity.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Often called “Brazil’s Roswell,” still unresolved.',
      },
    ],
  },
  {
    id: 'uf-130',
    name: 'Voronezh Metal Orb',
    description: 'Anomalous metal sphere retrieved in Russia',
    categoryId: 'ufos',
    icon: '⚙️',
    sections: [
      {
        title: 'Overview',
        content:
          'Following the Voronezh landing event, a metal orb allegedly matching craft debris surfaced.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Analyses disputed; composition appeared unusual compared to typical alloys.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possibly part of propulsion system or unrelated industrial scrap.',
      },
    ],
  },
  {
    id: 'uf-131',
    name: 'Welsh Triangle Flying Church',
    description: 'UFO resembling floating church spire in Wales',
    categoryId: 'ufos',
    icon: '⛪',
    sections: [
      {
        title: 'Overview',
        content:
          'Witnesses described a glowing church-like structure drifting silently in the sky.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Shape suggests structured craft rather than illusion.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Either a religious-paranormal manifestation or unconventional aerial vehicle.',
      },
    ],
  },
  {
    id: 'uf-132',
    name: 'Westall School Encounter',
    description: '1966 mass UFO sighting by Australian students',
    categoryId: 'ufos',
    icon: '🏫',
    sections: [
      {
        title: 'Overview',
        content:
          'Over 200 students and staff saw a disc-shaped craft land and take off.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Witness intimidation and confiscated evidence reported.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'One of the largest school-based sightings worldwide.',
      },
    ],
  },
  {
    id: 'uf-133',
    name: 'Westall Second Craft',
    description: 'Claims of a second unidentified craft at Westall site',
    categoryId: 'ufos',
    icon: '🚀',
    sections: [
      {
        title: 'Overview',
        content:
          'Some witnesses noted two discs operating together during the 1966 encounter.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Low-level flight paths and multiple landings suggested.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Possibly a tandem patrol or unrelated aerial anomaly.',
      },
    ],
  },
  {
    id: 'uf-134',
    name: 'Yakutia Humanoid Encounters',
    description: 'Siberian reports of tall beings emerging from spheres',
    categoryId: 'ufos',
    icon: '❄️',
    sections: [
      {
        title: 'Overview',
        content:
          'Hunters and villagers in remote Yakutia saw orbs opening to reveal tall humanoids.',
      },
      {
        title: 'Evidence & Reports',
        content:
          'Radiation spikes and scorched vegetation reported afterward.',
      },
      {
        title: 'Theories & Explanations',
        content:
          'Either advanced probes or high-strangeness interdimensional bleedthrough.',
      },
    ],
  },
];

export const getUFOById = (id: string): UFOTopic | undefined => {
  return ufosData.find(ufo => ufo.id === id);
};

export const getUFOByName = (name: string): UFOTopic | undefined => {
  return ufosData.find(ufo => ufo.name.toLowerCase() === name.toLowerCase());
};

/**
 * Get all UFO topics
 * @returns Array of all UFO topics
 */
export const getAllUFOs = (): readonly UFOTopic[] => {
  return ufosData;
};

/**
 * Get count of UFO topics
 * @returns Total number of UFO topics
 */
export const getUFOsCount = (): number => {
  return ufosData.length;
};
