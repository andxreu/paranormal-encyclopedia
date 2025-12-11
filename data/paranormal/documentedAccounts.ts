// data/paranormal/documentedAccounts.ts
/**
 * Documented Accounts Data
 * Well-documented paranormal cases with credible witnesses and evidence
 * 
 * Includes credibility ratings and detailed investigations
 */

import type { TopicSection } from './types';

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
    description: 'One of the most documented residential poltergeist cases on record',
    year: '1977-1979',
    location: 'Enfield, London, England',
    credibilityRating: 5,
    sections: [
      {
        title: 'The Investigation',
        content:
          'For roughly 18 months, the Hodgson family reported violent activity in their council house: furniture sliding, knocks in the walls, objects thrown across rooms, and children being pushed or levitated. Investigators from the Society for Psychical Research, including Maurice Grosse and Guy Lyon Playfair, spent extensive time on site documenting the case.',
      },
      {
        title: 'Key Evidence',
        content:
          'Independent witnesses, including police officers, reported seeing chairs move on their own. Photographs captured toys and household items apparently mid-flight. Audio recordings documented a harsh, growling “old man” voice speaking through 11-year-old Janet, giving personal details about the previous occupant who had died in the house.',
      },
      {
        title: 'Witnesses and Legacy',
        content:
          'More than 30 people—neighbors, journalists, clergy, and researchers—reported phenomena in the house. While some incidents may have involved childish pranks, even skeptical observers admit that a core of events remains difficult to explain. Enfield is still treated as a benchmark poltergeist case in modern paranormal research.',
      },
    ],
  },
  {
    id: 'da-2',
    name: 'The Amityville Horror',
    description: 'A notorious Long Island haunting intertwined with a real family tragedy',
    year: '1975-1976',
    location: 'Amityville, New York, USA',
    credibilityRating: 3,
    sections: [
      {
        title: 'The DeFeo Murders',
        content:
          'On November 13, 1974, Ronald DeFeo Jr. shot and killed six members of his family in their home at 112 Ocean Avenue. The following year, George and Kathy Lutz moved into the house with their children, aware of the murders but drawn by the discounted price.',
      },
      {
        title: 'The Lutz Family’s Account',
        content:
          'Over 28 days, the Lutzes reported cold spots, foul odors, swarms of flies in winter, disembodied voices, and a heavy, oppressive presence. They spoke of green slime oozing from keyholes, strange hoof-like tracks in the snow, and supernatural attacks that finally drove them to flee, leaving belongings behind.',
      },
      {
        title: 'Debate and Ongoing Lore',
        content:
          'Investigators Ed and Lorraine Warren claimed to document a demonic presence in the house, while critics argued that the haunting was exaggerated or fabricated. The DeFeo murders are fully documented fact; the Lutz haunting remains controversial, yet it continues to inspire books, films, and ongoing debate in paranormal circles.',
      },
    ],
  },
  {
    id: 'da-3',
    name: 'Ariel School UFO Encounter',
    description: 'Dozens of schoolchildren report close contact with strange beings',
    year: '1994',
    location: 'Ruwa, Zimbabwe',
    credibilityRating: 5,
    sections: [
      {
        title: 'Mass Sighting at Recess',
        content:
          'On September 16, 1994, during morning break at the Ariel School, 62 children between about 6 and 12 years old reported seeing a silvery craft land in the bushline beyond the playground. They claimed that one or more small beings with large black eyes emerged and observed them.',
      },
      {
        title: 'Telepathic Messages',
        content:
          'Many of the children later described the beings communicating without speaking—warning about environmental destruction and humanity’s misuse of technology. The children drew remarkably similar images of the craft and beings, often without seeing each other’s drawings beforehand.',
      },
      {
        title: 'Decades of Consistency',
        content:
          'Harvard psychiatrist Dr. John Mack and other investigators interviewed the children individually on video. As adults, several witnesses have repeated their accounts with striking consistency, saying the encounter profoundly affected their worldview. No conventional explanation has fully accounted for the scale and emotional impact of this incident.',
      },
    ],
  },
  {
    id: 'da-4',
    name: 'Rendlesham Forest Incident',
    description: 'A multi-night UFO encounter near a NATO airbase, often called “Britain’s Roswell”',
    year: '1980',
    location: 'Suffolk, England',
    credibilityRating: 5,
    sections: [
      {
        title: 'Lights in the Forest',
        content:
          'In late December 1980, US Air Force personnel stationed at RAF Woodbridge reported strange lights descending into nearby Rendlesham Forest. A security team entered the woods and described seeing a glowing object moving through the trees, leaving impressions in the ground and damage to vegetation.',
      },
      {
        title: 'Official Memo and Recordings',
        content:
          'On a later night, Deputy Base Commander Lt. Col. Charles Halt led a group into the forest and made an audio recording as events unfolded. He described beams of light shining down near the base and an object that appeared to break into smaller lights. His subsequent memo to the UK Ministry of Defence formally documented the encounter.',
      },
      {
        title: 'Physical Traces and Debate',
        content:
          'Investigators measured elevated radiation levels near ground impressions and broken branches at the reported landing site. Explanations such as a misidentified lighthouse, stars, or meteors have been proposed, but many involved witnesses maintain that what they encountered was an advanced craft of unknown origin.',
      },
    ],
  },
  {
    id: 'da-5',
    name: 'The Dyatlov Pass Incident',
    description: 'Nine experienced hikers perish under baffling conditions in the Ural Mountains',
    year: '1959',
    location: 'Dyatlov Pass, Ural Mountains, Russia',
    credibilityRating: 5,
    sections: [
      {
        title: 'The Final Expedition',
        content:
          'In early 1959, nine skilled hikers led by Igor Dyatlov set out on a winter trek in the northern Urals. When they failed to return, search teams later found their tent on a snowy slope—slashed open from the inside—and footprints leading down the mountain in socks or bare feet.',
      },
      {
        title: 'Mysterious Injuries',
        content:
          'The bodies were discovered scattered in the forest and ravine below. Some died of hypothermia, but others had massive chest and skull injuries without corresponding external wounds. One hiker was missing her tongue and parts of her face, and some clothing carried unusual traces of radiation.',
      },
      {
        title: 'Enduring Theories',
        content:
          'Official conclusions have shifted over time, with a more recent inquiry pointing to a particular type of avalanche as the likely cause. However, many researchers and enthusiasts argue that terrain, injuries, and witness reports of strange lights in the sky suggest a more complex or still unknown explanation.',
      },
    ],
  },
  {
    id: 'da-6',
    name: 'The Phoenix Lights',
    description: 'A massive V-shaped craft and strange lights seen by thousands over Arizona',
    year: '1997',
    location: 'Phoenix, Arizona, USA',
    credibilityRating: 5,
    sections: [
      {
        title: 'Night of the Lights',
        content:
          'On March 13, 1997, witnesses across Arizona and parts of Nevada reported a huge, silent, V-shaped formation of lights moving slowly across the sky. Many said the object was so large it blocked out the stars as it passed overhead, suggesting a solid craft rather than simple lights.',
      },
      {
        title: 'Video and Eyewitness Accounts',
        content:
          'Hundreds of reports poured in from civilians, police officers, and pilots. Multiple home videos captured strange lights over Phoenix later that night. The event became one of the most widely witnessed UFO sightings in modern history, with eyewitnesses still describing the experience decades later.',
      },
      {
        title: 'Official Explanations and Questions',
        content:
          'The US military later attributed some of the lights to training flares dropped during exercises, which may explain portions of the event. Many witnesses, however, insist that the massive, structured object they saw earlier in the evening cannot be reduced to flares, keeping the Phoenix Lights firmly in the “unresolved” column for many UFO researchers.',
      },
    ],
  },
  {
    id: 'da-7',
    name: 'The Valentich Disappearance',
    description: 'A young pilot vanishes after describing a strange craft above his plane',
    year: '1978',
    location: 'Bass Strait, Australia',
    credibilityRating: 4,
    sections: [
      {
        title: 'Radio Contact',
        content:
          'On October 21, 1978, 20-year-old pilot Frederick Valentich was flying a small Cessna over Bass Strait when he radioed Melbourne air traffic control about an unknown aircraft following him. He described four bright lights and a metallic object that seemed to orbit his plane.',
      },
      {
        title: 'Final Moments',
        content:
          'Valentich reported that his engine was running rough and that the object was hovering above him. His final transmission described the craft as “not an aircraft.” Moments later, the radio went silent, with only a strange metallic sound recorded. No further contact was made.',
      },
      {
        title: 'Search and Mystery',
        content:
          'Extensive air and sea searches failed to locate Valentich or his aircraft. Some witnesses in the region reported seeing strange lights in the sky that evening. Official explanations have suggested disorientation or hoax, but the lack of wreckage and the eerie radio transcript keep this case firmly in the UFO mystery category for many.',
      },
    ],
  },
  {
    id: 'da-8',
    name: 'The Westall UFO Encounter',
    description: 'A daylight landing of a disc-shaped object near an Australian school',
    year: '1966',
    location: 'Melbourne, Victoria, Australia',
    credibilityRating: 5,
    sections: [
      {
        title: 'The Schoolyard Shock',
        content:
          'On April 6, 1966, students and staff at Westall High School and a nearby primary school reported seeing a silver or gray disc-shaped object in the sky. Witnesses said it descended into a nearby field, hovered, and then shot away at high speed.',
      },
      {
        title: 'Hundreds of Witnesses',
        content:
          'Estimates suggest that over 200 people may have seen the object or its movements. Children later described the craft as silent and unlike any conventional aircraft. Some students ran to the field and reported seeing flattened grass or disturbed vegetation where the object appeared to have briefly landed.',
      },
      {
        title: 'Silence and Re-emergence',
        content:
          'Witnesses recall adults and possible officials arriving quickly, discouraging discussion of the event. For years the incident was rarely talked about, until documentaries and researchers revisited the case. The consistency of the testimonies and the sheer number of witnesses make Westall one of Australia’s most compelling UFO encounters.',
      },
    ],
  },
  {
    id: 'da-9',
    name: 'The Hessdalen Lights',
    description: 'An ongoing valley of unexplained luminous phenomena in Norway',
    year: '1981-Present',
    location: 'Hessdalen Valley, Norway',
    credibilityRating: 5,
    sections: [
      {
        title: 'Lights in the Valley',
        content:
          'Since the early 1980s, residents and visitors in Hessdalen Valley have reported floating balls of light and bright, elongated luminous forms moving across the sky. Some lights hover near the ground; others move quickly or pulsate before disappearing.',
      },
      {
        title: 'Scientific Monitoring',
        content:
          'The Hessdalen Project set up cameras, radar, and scientific instruments to capture and measure the lights. Thousands of observations and multiple instrument readings confirm that persistent, unusual luminous phenomena occur in the valley, often recorded on video and still photography.',
      },
      {
        title: 'Unsolved Natural Mystery',
        content:
          'Various theories—plasma effects, geological activity, unusual atmospheric conditions—have been proposed. While some observations may be misidentified conventional lights, a core of the phenomena remains unexplained, making Hessdalen a rare example of a long-term, instrumentally documented “earth lights” hotspot.',
      },
    ],
  },
  {
    id: 'da-10',
    name: 'The Skinwalker Ranch Phenomena',
    description: 'A Utah ranch tied to UFOs, cryptids, and intense paranormal research',
    year: '1994-Present',
    location: 'Uintah County, Utah, USA',
    credibilityRating: 4,
    sections: [
      {
        title: 'The Sherman Family Report',
        content:
          'In the mid-1990s, the Sherman family reported a barrage of strange events on their newly purchased ranch: mutilated cattle with surgical-style wounds, glowing orbs, poltergeist-like activity in the home, and encounters with unusually large, seemingly invulnerable wolf-like creatures.',
      },
      {
        title: 'Scientific Teams Move In',
        content:
          'Businessman Robert Bigelow acquired the ranch and funded the National Institute for Discovery Science (NIDS), bringing in scientists, ex-military, and investigators. They documented anomalous readings, unexplained lights, and sightings of strange creatures, though direct physical evidence remained elusive.',
      },
      {
        title: 'Ongoing Investigation',
        content:
          'Later owners have continued structured investigations using cameras, sensors, and scientific consultants. While some critics argue that media hype has inflated the ranch’s reputation, many investigators believe the long-term, multi-phenomenon nature of the activity points to a genuine high-strangeness hotspot.',
      },
    ],
  },
  {
    id: 'da-11',
    name: 'The Lubbock Lights',
    description: 'V-shaped formations of lights observed by both scientists and citizens',
    year: '1951',
    location: 'Lubbock, Texas, USA',
    credibilityRating: 4,
    sections: [
      {
        title: 'Professors Under the Stars',
        content:
          'In August 1951, three Texas Tech College professors relaxing in a backyard reported seeing a V-shaped formation of bright, bluish-green lights fly silently overhead. They were startled enough to call each other back out when a second formation appeared minutes later.',
      },
      {
        title: 'Photographs in the Night',
        content:
          'Over subsequent weeks, many residents reported similar formations. College student Carl Hart Jr. managed to capture several photographs of a V-shaped array of lights crossing the sky. The images became famous and were analyzed by the US Air Force, which judged them not to be obvious fakes.',
      },
      {
        title: 'Project Blue Book’s Dilemma',
        content:
          'Project Blue Book investigated and floated the idea of birds reflecting city lights as a possible explanation, but their private assessments were more cautious. While the bird theory may explain some sightings, many researchers still categorize the Lubbock Lights as a partially unresolved classic UFO case.',
      },
    ],
  },
  {
    id: 'da-12',
    name: 'The Voronezh UFO Landing',
    description: 'Reports of a landed craft and tall beings in a Soviet city park',
    year: '1989',
    location: 'Voronezh, Russia',
    credibilityRating: 3,
    sections: [
      {
        title: 'A Park Encounter',
        content:
          'In September and October 1989, residents—many of them children—reported seeing a large, glowing, spherical object descend into a park in Voronezh. Witnesses said a hatch opened and several tall, humanoid figures emerged, accompanied by a smaller robot-like entity.',
      },
      {
        title: 'Media and Official Interest',
        content:
          'The Soviet news agency TASS ran stories on the encounter based on police and local authority reports, a rare level of official attention at the time. Investigators noted a circular area of flattened ground and unusual soil impressions where witnesses said the craft had landed.',
      },
      {
        title: 'A Contested Case',
        content:
          'Skeptics argue that the children’s accounts were influenced by media and each other, while some details in early reports were inconsistent. Even so, the combination of physical traces, media coverage, and official interest keeps Voronezh on the list of notable, if controversial, UFO landing reports.',
      },
    ],
  },
  {
    id: 'da-13',
    name: 'The Flatwoods Monster',
    description: 'Witnesses encounter a towering, mechanical-seeming creature after a fiery object lands',
    year: '1952',
    location: 'Flatwoods, West Virginia, USA',
    credibilityRating: 4,
    sections: [
      {
        title: 'Object on the Hill',
        content:
          'On September 12, 1952, several children saw a bright object streak across the sky and appear to land on a nearby hill. They gathered adults and climbed up to investigate, expecting perhaps a crashed aircraft.',
      },
      {
        title: 'The Frightening Figure',
        content:
          'According to witnesses, they encountered a 10–12-foot-tall figure with a spade-shaped head or hood, glowing eyes, and a metallic or armored-looking body that emitted a hissing or mechanical sound. A foul, nauseating odor filled the air, and several people later reported throat and eye irritation.',
      },
      {
        title: 'Lasting Impressions',
        content:
          'The US Air Force looked into the report as part of its UFO inquiries, and skeptics later proposed a barn owl perched on a tree limb combined with a meteor and local panic. Believers argue that the symptoms, size, and mechanical aspects described point to a much stranger encounter than a simple misidentification.',
      },
    ],
  },
  {
    id: 'da-14',
    name: 'The Pascagoula Abduction',
    description: 'Two men claim they were taken aboard a craft by robotic entities',
    year: '1973',
    location: 'Pascagoula, Mississippi, USA',
    credibilityRating: 4,
    sections: [
      {
        title: 'Fishing Trip Turned Nightmare',
        content:
          'On October 11, 1973, Charles Hickson and Calvin Parker were fishing on the Pascagoula River when they reported seeing an egg-shaped craft with blue lights. They said three strange beings emerged—tall, with claw-like hands and featureless faces—and floated them aboard the craft.',
      },
      {
        title: 'Aftermath and Evidence',
        content:
          'The men reported being examined and then released near where they had been taken. Shaken, they contacted local authorities. A secretly recorded conversation between them at the sheriff’s office captured their continuing fear when they believed they were alone, which many researchers view as supporting their sincerity.',
      },
      {
        title: 'Decades of Consistent Testimony',
        content:
          'Hickson spoke about the encounter for the rest of his life, while Parker avoided publicity for decades due to trauma. In later years, Parker also went public with detailed recollections. While skeptics have raised questions, many in the UFO community consider Pascagoula one of the most credible abduction cases on record.',
      },
    ],
  },
  {
    id: 'da-15',
    name: 'The Tehran UFO Incident',
    description: 'Iranian fighter jets encounter a luminous object that disrupts their systems',
    year: '1976',
    location: 'Tehran, Iran',
    credibilityRating: 5,
    sections: [
      {
        title: 'Scramble Over the City',
        content:
          'On the night of September 18–19, 1976, residents of Tehran reported a bright object in the sky. The Imperial Iranian Air Force scrambled F-4 Phantom jets to investigate. As pilots approached the object, they reported instrument failures and loss of weapons control that resolved when they broke off the intercept.',
      },
      {
        title: 'Multiple Sensors and Witnesses',
        content:
          'The object was reportedly tracked by radar at different locations, while ground observers, air traffic controllers, and pilots all described a brilliant, maneuvering light. At one point, a smaller object was said to separate from the main craft and head toward an F-4 before returning.',
      },
      {
        title: 'A High-Reliability Case',
        content:
          'A detailed report from the US Defense Intelligence Agency rated the case as having “high” or “outstanding” reliability due to the quality of witnesses and data. Although conventional explanations have been suggested, none fully address the combination of radar, visual sightings, and apparent electromagnetic effects on advanced military aircraft.',
      },
    ],
  },
  {
    id: 'da-16',
    name: 'The Betty and Barney Hill Abduction',
    description: 'The first major alien abduction case to enter modern popular culture',
    year: '1961',
    location: 'White Mountains, New Hampshire, USA',
    credibilityRating: 5,
    sections: [
      {
        title: 'A Night Drive Interrupted',
        content:
          'On September 19–20, 1961, Betty and Barney Hill were driving home through the White Mountains when they noticed a light that seemed to follow their car. As it drew closer, Barney reported seeing a structured craft and humanoid figures through binoculars. After hearing odd buzzing sounds, the couple later realized they had lost roughly two hours of time they could not clearly remember.',
      },
      {
        title: 'Hypnosis and the Star Map',
        content:
          'Under separate hypnosis sessions with psychiatrist Dr. Benjamin Simon, both Hills described being taken aboard a craft, examined by small beings, and shown a star map. Betty later drew the map, which some researchers claimed resembled the Zeta Reticuli star system, sparking the “Zeta Reticuli Incident” theory and decades of ufological debate.',
      },
      {
        title: 'Legacy in UFO Research',
        content:
          'Their experience was investigated by civilian UFO groups, written up in the book “The Interrupted Journey,” and adapted into a television film. The Hills maintained that something extraordinary happened to them, and their case is still treated as a foundational modern abduction narrative with unusually detailed documentation for its era.',
      },
    ],
  },
  {
    id: 'da-17',
    name: 'The Travis Walton Incident',
    description: 'A logging crew witnesses their coworker vanish in a beam of light',
    year: '1975',
    location: 'Apache–Sitgreaves National Forest, Arizona, USA',
    credibilityRating: 4,
    sections: [
      {
        title: 'Disappearance in the Forest',
        content:
          'On November 5, 1975, logger Travis Walton and six coworkers were driving home through a forest road when they saw a glowing disc-like object hovering above the trees. Walton stepped out of the truck to get a closer look and was reportedly struck by a beam of light, throwing him backward. His terrified coworkers fled, then returned to find him gone.',
      },
      {
        title: 'Search and Return',
        content:
          'Walton remained missing for five days, triggering a police investigation and suspicion of foul play. When he reappeared, disoriented and dehydrated, he described waking inside a craft, encountering non-human beings, and later finding himself back on Earth with only fragmentary memories of the missing time.',
      },
      {
        title: 'Polygraphs and Controversy',
        content:
          'The remaining crew members underwent multiple polygraph examinations regarding their account; most results supported their testimony. Walton later wrote a book, “Fire in the Sky,” which inspired a film adaptation. While some skeptics propose hoax or misperception, the combination of missing-person reports, police files, and long-term witness consistency keeps this case at the center of abduction discussions.',
      },
    ],
  },
  {
    id: 'da-18',
    name: 'The Belgian UFO Wave',
    description: 'A series of black-triangle sightings backed by radar and official reports',
    year: '1989-1990',
    location: 'Belgium',
    credibilityRating: 5,
    sections: [
      {
        title: 'Triangles in the Night Sky',
        content:
          'Beginning in late 1989, Belgian citizens reported repeated sightings of large, silent, triangular craft with bright lights at each corner, often hovering low over towns and countryside. The wave intensified through the winter, with hundreds of reports clustering in the Wallonia region.',
      },
      {
        title: 'Air Force Engagements',
        content:
          'On the night of March 30–31, 1990, the Belgian Air Force scrambled F-16 fighters to intercept unknown targets tracked on radar. Pilots reported chasing objects that performed sudden altitude and speed changes difficult to reconcile with known aircraft. Official reports later acknowledged that the events remained unexplained, even after attempts at conventional analysis.',
      },
      {
        title: 'Data, Photos, and Debate',
        content:
          'The Belgian wave produced police logs, radar data, and many witness statements, making it one of Europe’s best-documented UFO flaps. A famous triangular photo later admitted as a hoax does not erase the larger body of evidence, and the wave is still used as a prime example of the “black triangle” phenomenon.',
      },
    ],
  },
  {
    id: 'da-19',
    name: 'The Shag Harbour UFO Incident',
    description: 'A glowing object crashes into the sea and triggers an official maritime search',
    year: '1967',
    location: 'Shag Harbour, Nova Scotia, Canada',
    credibilityRating: 5,
    sections: [
      {
        title: 'Impact on the Water',
        content:
          'On October 4, 1967, residents of Shag Harbour saw a row of bright orange lights descending at an angle into the harbor, followed by a loud noise and a glowing patch on the water. Many witnesses believed they had just seen an aircraft crash into the sea and promptly alerted authorities.',
      },
      {
        title: 'Rescue Efforts',
        content:
          'The Royal Canadian Mounted Police and Coast Guard quickly mounted a rescue operation, expecting to find wreckage or survivors. Instead, they encountered only a thick yellow foam on the water’s surface and no debris or bodies. The Canadian Navy later joined the search, sending divers to comb the seafloor with no success.',
      },
      {
        title: 'An Official “Unidentified” Case',
        content:
          'Government files explicitly described the object involved as an “unidentified flying object,” not a conventional aircraft. Some later accounts suggest the object may have moved underwater to a different location before vanishing. Shag Harbour remains one of Canada’s best-known and most soberly documented UFO incidents.',
      },
    ],
  },
  {
    id: 'da-20',
    name: 'Japan Air Lines Flight 1628 Encounter',
    description: 'A cargo 747 crew reports pacing by massive, structured lights over Alaska',
    year: '1986',
    location: 'Over Alaska, USA',
    credibilityRating: 3,
    sections: [
      {
        title: 'Lights in the Arctic Sky',
        content:
          'On November 17, 1986, the crew of Japan Air Lines Cargo Flight 1628 reported several bright objects maneuvering near their Boeing 747 during a flight over Alaska. Captain Kenji Terauchi described two smaller objects and a larger craft that appeared on different sides of the plane over an extended period.',
      },
      {
        title: 'Radar and Transcripts',
        content:
          'Anchorage air traffic control intermittently recorded unusual radar returns that seemed to coincide with the crew’s reports, while Air Force radar sites also noted anomalous contacts. Transcripts show controllers taking the situation seriously, recommending course changes and documenting the event in detail.',
      },
      {
        title: 'Reassessment and Mystery',
        content:
          'Later analyses proposed that some lights could have been bright planets or stars combined with radar clutter, and authorities eventually downplayed the case. Even so, the duration of the encounter, the professionalism of the crew, and the existence of official records keep Flight 1628 on the shortlist of significant aviation-related UFO incidents.',
      },
    ],
  },
  {
    id: 'da-21',
    name: 'The USS Nimitz “Tic Tac” Encounter',
    description: 'Navy pilots and advanced sensors track an object with extreme performance',
    year: '2004',
    location: 'Off the coast of Southern California, USA',
    credibilityRating: 5,
    sections: [
      {
        title: 'Unusual Radar Tracks',
        content:
          'In November 2004, the USS Nimitz Carrier Strike Group’s radar systems began picking up unknown objects descending from very high altitudes to near sea level in seconds before vanishing. These “drops” were unusual enough for commanders to order intercept missions.',
      },
      {
        title: 'Visual Intercept',
        content:
          'F/A-18 pilots, including Commander David Fravor, reported encountering a smooth, white, oblong object roughly the size of a jet, moving erratically above a patch of disturbed water. The object had no visible wings, rotors, or exhaust and appeared to react intelligently to the jets before accelerating away with apparent ease.',
      },
      {
        title: 'Declassified Footage and Official Interest',
        content:
          'Infrared video from another sortie, later associated with the same series of events, was declassified and released by the US government. The case has been cited in Pentagon reports and congressional hearings as a high-quality example of a “UAP” incident involving multiple sensors and trained military witnesses, with no definitive conventional explanation to date.',
      },
    ],
  },
  {
    id: 'da-22',
    name: 'The Allagash Abductions',
    description: 'Four campers share a longstanding, multi-witness abduction narrative',
    year: '1976',
    location: 'Allagash Wilderness Waterway, Maine, USA',
    credibilityRating: 3,
    sections: [
      {
        title: 'Night on the Lake',
        content:
          'In August 1976, twins Jim and Jack Weiner and friends Charlie Foltz and Chuck Rak were on a wilderness camping trip when they observed a bright object in the sky. While night fishing on a lake, they saw the object again, this time closer, projecting a powerful beam of light toward their canoe.',
      },
      {
        title: 'Missing Time and Hypnosis',
        content:
          'The group later realized they had a gap in their memory of that night and felt deep unease about the experience. Under hypnosis years later, all four men described being taken aboard a craft, undergoing medical-style examinations, and encountering non-human beings. Their accounts shared many similar details.',
      },
      {
        title: 'Later Disagreements',
        content:
          'The story was widely publicized in books and documentaries and became a staple of abduction literature. Decades later, one of the men questioned aspects of how the case had been presented, while others stood firmly by the core events. The Allagash incident remains a significant, if debated, multi-witness abduction claim.',
      },
    ],
  },
  {
    id: 'da-23',
    name: 'The Kelly–Hopkinsville Goblin Encounter',
    description: 'A rural family reports a long night under siege by small luminous beings',
    year: '1955',
    location: 'Kelly / Hopkinsville, Kentucky, USA',
    credibilityRating: 4,
    sections: [
      {
        title: 'Entities at the Farmhouse',
        content:
          'On the evening of August 21, 1955, members of the Sutton family and their guests claimed that small, glowing-eyed beings approached their farmhouse repeatedly, peering into windows and hovering near doorways. The creatures were described as roughly three feet tall, with claw-like hands and large, pointed ears.',
      },
      {
        title: 'Gunfire and Panic',
        content:
          'Terrified, the family fired rifles and shotguns at the figures, reporting that they seemed to float or glide rather than walk and were unaffected by bullets. After several hours of intermittent encounters, they fled to the police station in Hopkinsville, where officers noted their genuine distress.',
      },
      {
        title: 'Investigations and Theories',
        content:
          'Law enforcement officers and military police inspected the farm, finding many bullet holes and spent shells but no bodies. Skeptics suggest misidentified owls, misperception, or prank; believers point to the number of witnesses and the intensity of law enforcement involvement as indicators that something truly extraordinary occurred.',
      },
    ],
  },
  {
    id: 'da-24',
    name: 'The Bridgeport Poltergeist on Lindley Street',
    description: 'A modest Connecticut bungalow becomes a focal point of poltergeist activity',
    year: '1974',
    location: 'Bridgeport, Connecticut, USA',
    credibilityRating: 4,
    sections: [
      {
        title: 'House in Turmoil',
        content:
          'In November 1974, Gerard and Laura Goodin reported sudden violent disturbances in their small Lindley Street home: furniture sliding, a large refrigerator seeming to lift off the floor, religious objects toppling, and loud knocks and bangs without clear cause. Their adopted daughter Marcia also reported seeing apparitions and hearing voices.',
      },
      {
        title: 'Crowds and Officials',
        content:
          'The case quickly drew neighbors, reporters, clergy, police, and firefighters. Witnesses—including some first responders—claimed to see objects move, pictures swing, and unusual phenomena occur in front of them. The media attention grew so intense that crowds outside reportedly reached into the thousands.',
      },
      {
        title: 'Hoax Claims and Remaining Questions',
        content:
          'At one point, authorities suggested that at least some events might have been staged by the child, and the case was publicly labeled a hoax. However, several investigators and witnesses maintain that not everything they observed can be explained away so easily, leaving Bridgeport as one of New England’s most debated poltergeist case files.',
      },
    ],
  },
  {
    id: 'da-25',
    name: 'The Bell Witch Haunting',
    description: 'A talking, physical spirit that targeted a Tennessee frontier family',
    year: '1817-1821',
    location: 'Adams, Tennessee, USA',
    credibilityRating: 4,
    sections: [
      {
        title: 'Voices in the Night',
        content:
          'Around 1817, the family of farmer John Bell began hearing knocks on walls, chains dragging, and animal-like noises around their rural home. Soon, a distinct voice emerged, calling itself “Kate” and focusing particular hostility on John Bell and his daughter Betsy.',
      },
      {
        title: 'A Spirit That Spoke',
        content:
          'The entity reportedly conversed fluently with visitors, quoted scripture, and debated theology while simultaneously scratching, slapping, and harassing Betsy. Local ministers, neighbors, and travelers all claimed to hear the voice at times, and the story spread far beyond the Bell property.',
      },
      {
        title: 'Death and Legend',
        content:
          'According to tradition, the Bell Witch claimed responsibility for John Bell’s eventual death, saying it had poisoned him. The haunting gradually subsided, but the legend took root in regional folklore. Modern tours of the Bell Witch Cave and surrounding area keep the story alive, and new reports of odd activity continue to surface from time to time.',
      },
    ],
  },
  {
    id: 'da-26',
    name: 'The Borley Rectory Haunting',
    description: 'A long-running English case once dubbed “the most haunted house in England”',
    year: '1863-1939',
    location: 'Borley, Essex, England',
    credibilityRating: 3,
    sections: [
      {
        title: 'A House of Noises and Apparitions',
        content:
          'From the late 19th century onward, residents of Borley Rectory reported footsteps in empty corridors, phantom coach wheels on gravel, and apparitions of a veiled nun crossing the grounds. Successive clergy families claimed to experience unexplained knocks, object movements, and ghostly figures.',
      },
      {
        title: 'Harry Price’s Investigations',
        content:
          'In the 1920s and 1930s, psychical researcher Harry Price investigated the rectory, organizing long-term observation programs and documenting phenomena such as wall writings, thrown objects, and alleged spirit messages. His books brought international attention to Borley and helped cement its infamous reputation.',
      },
      {
        title: 'Skepticism and Enduring Curiosity',
        content:
          'Later researchers uncovered possible exaggerations and suggested that some phenomena may have been staged by residents or over-interpreted. Nonetheless, the sheer volume of reports and the level of early psychical research involvement make Borley Rectory a classic, if controversial, haunting in the paranormal literature.',
      },
    ],
  },
  {
    id: 'da-27',
    name: 'The Brown Mountain Lights',
    description: 'Recurring ghost lights over a North Carolina ridge',
    year: '1913-Present',
    location: 'Brown Mountain, North Carolina, USA',
    credibilityRating: 3,
    sections: [
      {
        title: 'Lights on the Ridge',
        content:
          'For more than a century, observers near Brown Mountain have reported mysterious lights appearing above the ridgeline—glowing orbs that rise, drift, split, and fade. Early newspaper accounts from the 1910s describe lights that seemed to move against the wind and appear on otherwise dark nights.',
      },
      {
        title: 'Investigations and Monitoring',
        content:
          'Government agencies and academic teams have studied the lights at various times, suggesting possible explanations such as car headlights, train lights, atmospheric refraction, and natural gases. Modern monitoring with cameras has captured some anomalies, though many sightings are easily traced to known light sources.',
      },
      {
        title: 'Folklore and Unresolved Reports',
        content:
          'Cherokee legends and local stories link the lights to spirits of warriors or lost travelers, and paranormal researchers treat Brown Mountain as a classic “earth light” site. While some reports clearly match mundane explanations, a subset of sightings and recordings remains unexplained, keeping the mystery alive for hikers and skywatchers.',
      },
    ],
  },
  {
    id: 'da-28',
    name: 'The Miracle of the Sun at Fátima',
    description: 'Tens of thousands report a dramatic solar display after Marian apparitions',
    year: '1917',
    location: 'Fátima, Portugal',
    credibilityRating: 5,
    sections: [
      {
        title: 'Prophecy of a Sign',
        content:
          'In 1917, three shepherd children near Fátima claimed the Virgin Mary had been appearing to them and promised a sign on October 13 so that all would believe. Word spread, and an enormous crowd—estimated in the tens of thousands—gathered in the Cova da Iria field under heavy rain.',
      },
      {
        title: 'The “Dancing Sun”',
        content:
          'At the promised time, the clouds reportedly parted and the Sun appeared as a spinning disc, changing colors and zig-zagging toward the Earth before returning to its normal place. Many witnesses said their soaked clothes and the muddy ground dried rapidly, while others reported only unusual colors in the sky or nothing unusual at all.',
      },
      {
        title: 'Religious and Paranormal Significance',
        content:
          'The Catholic Church later recognized the Fátima apparitions and accepted the event as a miracle. Researchers have proposed optical effects, mass suggestion, or atmospheric phenomena, but even critical scholars acknowledge the scale and documentation of the event as exceptional. For many believers, it stands as one of the clearest intersections of faith and the paranormal.',
      },
    ],
  },
  {
    id: 'da-29',
    name: 'The Pam Reynolds Near-Death Experience',
    description: 'A detailed NDE reported during a medically monitored “standstill” operation',
    year: '1991',
    location: 'Phoenix, Arizona, USA',
    credibilityRating: 4,
    sections: [
      {
        title: 'Surgery at the Edge of Life',
        content:
          'In 1991, musician Pam Reynolds underwent a rare operation for a large brain aneurysm at the Barrow Neurological Institute. Surgeons lowered her body temperature, stopped her heart, and drained her blood, leaving her with flat brainwave readings and no measurable brain activity for part of the procedure.',
      },
      {
        title: 'Out-of-Body Observations',
        content:
          'Reynolds later reported leaving her body, floating above the operating table, and accurately describing surgical instruments, staff conversations, and specific steps of the procedure that occurred while she was in deep anesthesia and clinical standstill. Some of the details she gave matched medical records and staff accounts.',
      },
      {
        title: 'Debate Over Consciousness',
        content:
          'Supporters of survival-of-consciousness theories cite her case as strong evidence that awareness can operate independently of brain function. Skeptics suggest that her memories may have formed during periods of partial awareness or been influenced by postoperative information. Regardless of interpretation, the Pam Reynolds case remains one of the most discussed NDEs in medical and paranormal literature.',
      },
    ],
  },
  {
    id: 'da-30',
    name: 'The Rosenheim Poltergeist',
    description: 'A German law office plagued by violent electrical and physical disturbances',
    year: '1967-1968',
    location: 'Rosenheim, Bavaria, Germany',
    credibilityRating: 4,
    sections: [
      {
        title: 'Office in Chaos',
        content:
          'In a law practice in Rosenheim, staff began experiencing strange events: fluorescent lights swinging and exploding, heavy filing cabinets rotating on their own, and wall pictures turning or falling without apparent cause. Telephone lines were flooded with impossible call records to random numbers, raising the concern of the local phone company.',
      },
      {
        title: 'Instrumented Investigation',
        content:
          'Physicist Hans Bender and other investigators installed cameras and measuring equipment in the office. They recorded unexplained power surges, sudden changes in electrical load, and object movements that occurred while staff members watched. Much of the activity seemed to cluster around a young female employee, fitting classic poltergeist patterns.',
      },
      {
        title: 'Data and Doubt',
        content:
          'Skeptical explanations point to the possibility of hidden wires, misinterpretations of electrical problems, or tricks not fully detected by investigators. Yet the combination of technical records, multiple witnesses, and photographic evidence still makes Rosenheim one of Europe’s most often-cited poltergeist cases.',
      },
    ],
  },
  {
    id: 'da-31',
    name: 'The South Shields Poltergeist',
    description: 'A modern haunting characterized by intelligent, targeted harassment',
    year: '2005-2006',
    location: 'South Shields, Tyne and Wear, England',
    credibilityRating: 4,
    sections: [
      {
        title: 'Toys Turned Threatening',
        content:
          'A young couple and their child in South Shields reported toys arranging themselves into ominous displays, such as a toy rabbit holding a knife aimed at a family member’s photograph. Chairs stacked themselves, doors slammed, and objects were thrown with force across rooms.',
      },
      {
        title: 'Messages from the Unseen',
        content:
          'The family also received disturbing text messages and notes that seemed to come from the entity, threatening harm and displaying knowledge of their private lives. Investigators who visited the home documented physical phenomena, including sudden object movements and knocks responding to questions.',
      },
      {
        title: 'An Intelligent Haunting',
        content:
          'Unlike random, short-lived poltergeist outbreaks, the South Shields case appeared to involve a persistent, reactive intelligence focused on intimidation. While critics call for more independent verification, many paranormal researchers consider this case a key example of a modern, interactive haunting.',
      },
    ],
  },
  {
    id: 'da-32',
    name: 'The Scole Experiment',
    description: 'A five-year series of séances claiming physical spirit phenomena under observation',
    year: '1993-1998',
    location: 'Scole, Norfolk, England',
    credibilityRating: 3,
    sections: [
      {
        title: 'A Home Circle Under Study',
        content:
          'In the village of Scole, a small group of mediums and sitters held regular séances in a cellar room, reporting lights, voices, and the materialization of objects. They invited investigators from the Society for Psychical Research and other organizations to observe sessions over several years.',
      },
      {
        title: 'Lights, Sounds, and Images',
        content:
          'Witnesses described small points of light moving around the room, audible spirit voices, and objects appearing or being moved. Sealed rolls of photographic film, signed and locked away before sessions, were later developed with complex images and messages that participants attributed to spirit communicators.',
      },
      {
        title: 'Controls and Controversy',
        content:
          'Supporters argue that the duration, variety of phenomena, and number of experienced witnesses lend weight to the case. Critics counter that the dark conditions and lack of stricter controls left opportunities for deception. The Scole Experiment is still one of the most heavily debated cases in physical mediumship.',
      },
    ],
  },
  {
    id: 'da-33',
    name: 'The Taos Hum',
    description: 'A persistent low-frequency hum reported by residents of a desert town',
    year: '1980s-Present',
    location: 'Taos, New Mexico, USA',
    credibilityRating: 3,
    sections: [
      {
        title: 'A Sound Few Can Hear',
        content:
          'Since the late 20th century, some residents of Taos and the surrounding area have reported a continuous, low-frequency humming or droning sound, often most noticeable at night. Those who perceive it describe it as similar to a distant diesel engine idling, even when no such source is nearby.',
      },
      {
        title: 'Scientific Surveys and Tests',
        content:
          'Acoustic experts and government-backed studies attempted to measure and locate the hum, using sensitive microphones and interviews with “hearers.” While some environmental noises were identified, no single, consistent source was found that matched all reports, leaving the phenomenon officially unexplained.',
      },
      {
        title: 'Theories and Anomalies',
        content:
          'Proposed explanations range from industrial noise and infrasound to subtle hearing conditions and even geo-magnetic effects. For some experiencers, the hum has a profound psychological impact, causing stress and sleep disruption. The Taos Hum is often cited as a classic example of an anomalous sound phenomenon that blurs the line between environmental mystery and the paranormal.',
      },
    ],
  },
  {
    id: 'da-34',
    name: 'The Moberly–Jourdain Versailles Time Slip',
    description: 'Two academics claim to step briefly into 18th-century Versailles',
    year: '1901',
    location: 'Palace of Versailles, France',
    credibilityRating: 3,
    sections: [
      {
        title: 'A Walk That Felt Wrong',
        content:
          'On August 10, 1901, Charlotte Moberly and Eleanor Jourdain, both English academics, visited the gardens of Versailles. They later reported an uncanny atmosphere and the sense that their surroundings had subtly changed—describing strange-looking people in old-fashioned clothing and altered landscape features.',
      },
      {
        title: 'Encounter with the Past',
        content:
          'They believed they had seen Marie Antoinette sketching near the Temple of Love and later compared their impressions to historical maps and records. In their book “An Adventure,” they argued that certain paths and buildings they noted matched the layout of the grounds prior to 19th-century changes.',
      },
      {
        title: 'Time Slip or Vision?',
        content:
          'Skeptical analyses suggest misperception, confabulation, or the influence of suggestion, while others see the account as a classic example of a “time slip” or retrocognitive episode—witnesses briefly perceiving a scene from another era overlaying the present.',
      },
    ],
  },
  {
    id: 'da-35',
    name: 'The Hinsdale House Haunting',
    description: 'A rural New York farmhouse with a history of exorcisms and continued activity',
    year: '1970s-Present',
    location: 'Hinsdale, New York, USA',
    credibilityRating: 4,
    sections: [
      {
        title: 'The Dandy Family’s Experience',
        content:
          'In the 1970s, the Dandy family moved into a farmhouse near Hinsdale and soon reported intense activity: disembodied voices, apparitions inside and outside the home, objects moving on their own, and a sense of being watched from the surrounding woods. Strange sounds and sightings reportedly escalated over time.',
      },
      {
        title: 'Religious Intervention',
        content:
          'The family eventually sought help from clergy and investigators. A Catholic priest performed a blessing and attempted an exorcism of the property, but the relief was reported to be temporary. The Dandys ultimately left the home, convinced that the phenomena were beyond anything they could manage.',
      },
      {
        title: 'A Continuing Case',
        content:
          'Today, Hinsdale House is maintained as a paranormal research location, hosting teams who report ongoing EVPs, photographic anomalies, and visual apparitions. The combination of family testimony, documented religious intervention, and new investigative data has turned Hinsdale into a “living case file” for modern haunting research.',
      },
    ],
  },
  {
    id: 'da-36',
    name: 'The Socorro UFO Landing',
    description: 'A police officer reports a close encounter with a landed craft and occupants',
    year: '1964',
    location: 'Socorro, New Mexico, USA',
    credibilityRating: 5,
    sections: [
      {
        title: 'Patrol Interrupted',
        content:
          'On April 24, 1964, police officer Lonnie Zamora broke off a high-speed chase after hearing a roar and seeing a flame in the sky. He followed the disturbance to an arroyo outside town, where he observed a white, egg-shaped craft resting on legs and two small figures in white coveralls beside it.',
      },
      {
        title: 'Physical Traces',
        content:
          'Zamora reported hearing a loud roar as the object lifted off and departed at low altitude. Investigators from the Air Force and local authorities documented landing impressions, scorched vegetation, and unusual soil disturbances at the site.',
      },
      {
        title: 'Project Blue Book Assessment',
        content:
          'Project Blue Book classified the case as “unidentified,” citing Zamora’s reliability and the physical evidence. The Socorro landing is still considered one of the strongest close-encounter cases in UFO research.',
      },
    ],
  },
  {
    id: 'da-37',
    name: 'The Broad Haven School UFO Encounter',
    description: 'Schoolchildren in rural Wales report a landed craft and suited figures',
    year: '1977',
    location: 'Broad Haven, Pembrokeshire, Wales',
    credibilityRating: 4,
    sections: [
      {
        title: 'Playground Sighting',
        content:
          'In February 1977, sixteen primary schoolchildren claimed to see a silver, cigar-shaped craft land in a field behind their playground. Some reported a tall figure in a metallic suit standing near the object.',
      },
      {
        title: 'Drawings and Statements',
        content:
          'Teachers separated the children and had them draw what they saw. Many drawings showed a remarkably similar craft and figure. Written statements also aligned closely in key details, despite being taken independently.',
      },
      {
        title: 'The Dyfed Triangle',
        content:
          'The sighting occurred during a broader wave of reported UFO activity in the region, sometimes called the “Dyfed Triangle.” While no definitive explanation was found, the consistency of the children’s accounts keeps this case prominent in European UFO history.',
      },
    ],
  },
  {
    id: 'da-38',
    name: 'The O’Hare International Airport UFO',
    description: 'Airline employees see a disc hover over a busy airport gate',
    year: '2006',
    location: 'Chicago, Illinois, USA',
    credibilityRating: 4,
    sections: [
      {
        title: 'Disc Over Gate C17',
        content:
          'On November 7, 2006, multiple United Airlines employees, including pilots and ground crew, reported a silent, metallic disc hovering above Gate C17 at O’Hare Airport. Witnesses estimated the object to be several meters across.',
      },
      {
        title: 'Hole in the Cloud Layer',
        content:
          'After several minutes, the object shot straight up into the clouds, leaving a sharp-edged circular hole in the overcast sky. Witnesses described the opening as if something had punched through the cloud deck from below.',
      },
      {
        title: 'FAA Explanation and Files',
        content:
          'The FAA initially denied any knowledge, later suggesting a weather phenomenon. Internal documents obtained by reporters confirmed a cluster of serious witness reports. The lack of a clear identification has made the O’Hare case a key modern airport UFO incident.',
      },
    ],
  },
  {
    id: 'da-39',
    name: 'The Malmstrom Missile Shutdown Incident',
    description: 'Ten nuclear missiles mysteriously go offline as a UFO is reported above the base',
    year: '1967',
    location: 'Malmstrom Air Force Base, Montana, USA',
    credibilityRating: 5,
    sections: [
      {
        title: 'Missiles Disabled',
        content:
          'On March 24, 1967, launch crews at an underground missile control center reported that ten Minuteman ICBMs went into “no-go” status within seconds of each other. At roughly the same time, security personnel above ground reported a glowing, reddish object hovering near the front gate.',
      },
      {
        title: 'Official Confusion',
        content:
          'Technical teams could not find a normal mechanical or electrical cause for the simultaneous failures. Former officers later gave sworn testimony that the shutdown occurred while an unknown aerial object was present near the site.',
      },
      {
        title: 'Nuclear and UFO Connection',
        content:
          'Declassified documents and witness testimony have made this case a cornerstone in discussions about UFOs interacting with nuclear weapons systems, cited repeatedly in documentaries and hearings.',
      },
    ],
  },
  {
    id: 'da-40',
    name: 'The Trans-en-Provence UFO Trace Case',
    description: 'A landed craft leaves measurable physical and biochemical traces',
    year: '1981',
    location: 'Trans-en-Provence, France',
    credibilityRating: 5,
    sections: [
      {
        title: 'Daylight Landing',
        content:
          'On January 8, 1981, farmer Renato Nicolai reported seeing a small, disc-shaped object descend and land briefly on his property before taking off with a faint whistling sound. The encounter took place in daylight at close range.',
      },
      {
        title: 'Soil and Plant Analysis',
        content:
          'Investigators documented a circular area of compressed soil and collected samples from the ground and surrounding plants. Laboratory studies later showed chemical and structural changes consistent with exposure to heat and pressure.',
      },
      {
        title: 'GEPAN Investigation',
        content:
          'France’s official aerospace anomaly group, GEPAN, classified the case as a high-quality event with strong physical evidence and no conventional explanation. Trans-en-Provence is widely regarded as one of the best-documented UFO landing cases.',
      },
    ],
  },
  {
    id: 'da-41',
    name: 'The Cape Girardeau UFO Crash Legend',
    description: 'Family testimony describes a pre-Roswell crash and recovered bodies',
    year: '1941',
    location: 'Cape Girardeau, Missouri, USA',
    credibilityRating: 3,
    sections: [
      {
        title: 'Nighttime Recovery',
        content:
          'Local stories and later family accounts claim that in 1941, authorities summoned a pastor and firefighters to pray over victims of an aircraft crash outside Cape Girardeau. On arrival, they allegedly found a metallic disc rather than a conventional plane.',
      },
      {
        title: 'Non-human Bodies',
        content:
          'Witnesses later described small, non-human bodies with large heads and unusual features being removed from the site before the military cordoned off the area. No known official records confirm these details, but the stories have persisted for decades.',
      },
      {
        title: 'A Controversial Pre-Roswell Case',
        content:
          'With limited documentation and late-emerging testimony, the case remains controversial. Even so, it appears frequently in discussions of early crash-retrieval lore and possible information suppression.',
      },
    ],
  },
  {
    id: 'da-42',
    name: 'The Gimbal UFO Encounter',
    description: 'Navy pilots capture an object rotating and maneuvering against strong winds',
    year: '2015',
    location: 'Off the U.S. East Coast, Atlantic Ocean',
    credibilityRating: 5,
    sections: [
      {
        title: 'Training Flight Anomaly',
        content:
          'During a routine training mission, Navy pilots using advanced targeting pods detected an object moving rapidly against high-altitude winds. The craft showed no wings, rotors, or exhaust plumes in infrared imagery.',
      },
      {
        title: 'Impossible Rotation',
        content:
          'In the now-famous video, the object appears to rotate smoothly while maintaining stable flight. Pilots on the recording can be heard expressing surprise and excitement at what they are seeing.',
      },
      {
        title: 'Declassified and Acknowledged',
        content:
          'The U.S. Department of Defense later released the footage as part of a set of officially acknowledged UAP videos. The encounter is now central to modern UAP discussions due to its multi-sensor data and highly trained witnesses.',
      },
    ],
  },
  {
    id: 'da-43',
    name: 'The 1965 Northeast Blackout UFO Reports',
    description: 'A massive power outage coincides with waves of anomalous light sightings',
    year: '1965',
    location: 'Northeastern USA and Ontario, Canada',
    credibilityRating: 3,
    sections: [
      {
        title: 'Lights Before the Blackout',
        content:
          'In the hours leading up to the November 9, 1965 blackout that affected tens of millions, people across parts of Ontario and the northeastern United States reported bright, structured lights in the sky, some described as hovering or darting near power lines.',
      },
      {
        title: 'Power Grid Collapse',
        content:
          'The official cause was traced to a relay failure at a hydroelectric station in Ontario, which cascaded through the grid. Some researchers have noted anomalies in timing and reports that suggest the possibility of an unusual trigger.',
      },
      {
        title: 'Correlation or Coincidence?',
        content:
          'No direct causal link between the UFO reports and the blackout has been proven, but the clustering of sightings around a major infrastructure failure keeps this event in the catalog of notable “high-strangeness” correlations.',
      },
    ],
  },
  {
    id: 'da-44',
    name: 'The Black Monk of Pontefract',
    description: 'A violent haunting in a council house becomes a classic poltergeist case',
    year: '1966-1969',
    location: 'Pontefract, West Yorkshire, England',
    credibilityRating: 4,
    sections: [
      {
        title: 'Disturbances at 30 East Drive',
        content:
          'The Pritchard family reported a wide range of phenomena: pools of water appearing on floors, objects thrown across rooms, heavy furniture moving, and strange chalk marks appearing on walls.',
      },
      {
        title: 'The Hooded Figure',
        content:
          'Witnesses described a dark, hooded figure, nicknamed the “Black Monk,” sometimes seen standing in doorways or at the foot of beds. The activity often seemed to focus on the family’s teenage daughter, fitting classic poltergeist patterns.',
      },
      {
        title: 'Enduring Reputation',
        content:
          'Investigators, neighbors, and extended family members all reported strange events over the years. The house has since been featured in numerous documentaries and books as one of Britain’s most extreme and enduring hauntings.',
      },
    ],
  },
  {
    id: 'da-45',
    name: 'The Kera Humanoid Encounter',
    description: 'Teenagers in rural Japan report capturing a tiny glowing being',
    year: '1972',
    location: 'Kōchi Prefecture, Japan',
    credibilityRating: 3,
    sections: [
      {
        title: 'A Small Visitor',
        content:
          'In the town of Kera, two boys exploring farmland claimed to discover a small, glowing humanoid figure only a few inches tall. They said it made a buzzing sound and moved in jerky, mechanical ways.',
      },
      {
        title: 'Repeated Sightings',
        content:
          'Over subsequent days, the boys and their friends reported several more encounters, at times claiming to have trapped the tiny being in a jar before it escaped. Drawings made at the time show a consistent, odd-looking figure.',
      },
      {
        title: 'From Local Tale to Case File',
        content:
          'Though documentation is limited and some details now blend with local folklore, the Kera case remains one of Japan’s strangest and most talked-about close-encounter stories, sitting at the edge of high strangeness and myth.',
      },
    ],
  },
  {
    id: 'da-46',
    name: 'The Mann Family Poltergeist',
    description: 'Police and neighbors witness objects thrown by unseen forces',
    year: '1952',
    location: 'Bristol, England',
    credibilityRating: 3,
    sections: [
      {
        title: 'Stones and Coal Indoors',
        content:
          'The Mann family reported stones, lumps of coal, and household objects being thrown inside their home without visible cause. Items sometimes seemed to appear from mid-air rather than from a specific direction.',
      },
      {
        title: 'Authorities Called In',
        content:
          'Neighbors and responding police officers personally witnessed objects moving and striking walls. Some officers later stated that they could not find any normal explanation for what they saw.',
      },
      {
        title: 'Classic Poltergeist Pattern',
        content:
          'Much of the activity centered on the family’s youngest child, leading researchers to classify the case as a textbook poltergeist outbreak. Though not as famous as other hauntings, the involvement of law enforcement gives the case unusual weight.',
      },
    ],
  },
  {
    id: 'da-47',
    name: 'The Wow! Signal',
    description: 'A strong, narrowband radio signal appears briefly from deep space',
    year: '1977',
    location: 'Ohio State University Radio Observatory, USA',
    credibilityRating: 4,
    sections: [
      {
        title: 'Anomalous Reading',
        content:
          'On August 15, 1977, the “Big Ear” radio telescope recorded a powerful, narrowband signal near the hydrogen line frequency, exactly where SETI researchers expected an artificial broadcast might appear.',
      },
      {
        title: 'A 72-second Mystery',
        content:
          'The signal lasted for 72 seconds, the maximum time a fixed source would stay within the telescope’s beam. Astronomer Jerry Ehman circled the data on the printout and wrote “Wow!” in the margin, giving the signal its famous name.',
      },
      {
        title: 'Never Repeated',
        content:
          'Despite numerous follow-up observations, the exact signal has never been detected again. The Wow! Signal remains one of the strongest candidates for an artificial extraterrestrial transmission in SETI history.',
      },
    ],
  },
  {
    id: 'da-48',
    name: 'The Tinley Park Triangle Lights',
    description: 'Large triangular light formations drift silently over Illinois suburbs',
    year: '2004',
    location: 'Tinley Park, Illinois, USA',
    credibilityRating: 3,
    sections: [
      {
        title: 'Red Lights in Formation',
        content:
          'On several nights in 2004 and subsequent years, residents of Tinley Park and nearby towns reported multiple large red lights forming triangular patterns in the sky. The lights moved slowly and silently, often observed for many minutes.',
      },
      {
        title: 'Multiple Videos',
        content:
          'Dozens of witnesses recorded the lights on home video cameras from different angles. The recordings show stable triangular arrangements that seemed to hold formation despite wind and perspective changes.',
      },
      {
        title: 'Debate Over Flares or Craft',
        content:
          'Suggestions of flares or balloons have not fully accounted for the behavior seen in videos. The Tinley Park sightings remain an intriguing modern mass-witness event in UFO catalogs.',
      },
    ],
  },
  {
    id: 'da-49',
    name: 'The Chiles–Whitted UFO Encounter',
    description: 'Two airline pilots report a glowing, windowed craft passing near their plane',
    year: '1948',
    location: 'Near Montgomery, Alabama, USA',
    credibilityRating: 4,
    sections: [
      {
        title: 'Close Pass in the Night',
        content:
          'On July 24, 1948, pilots Clarence Chiles and John Whitted were flying a DC-3 when a glowing, cigar-shaped object with apparent windows and a bright flame at its rear flashed past their aircraft at high altitude.',
      },
      {
        title: 'Professional Witnesses',
        content:
          'The pilots described the object in highly similar terms and filed official reports with the airline and the U.S. Air Force. A passenger also reported seeing a bright light streak upward into the clouds.',
      },
      {
        title: 'Project Sign Evaluation',
        content:
          'Early Air Force investigators considered the Chiles–Whitted encounter one of the strongest pilot cases. No conventional aircraft of the era matched the description, and the sighting remains officially unexplained in historical files.',
      },
    ],
  },
  {
    id: 'da-50',
    name: 'The SRI Remote Viewing Experiments',
    description: 'Laboratory tests suggest perception of distant targets under controlled conditions',
    year: '1972-1985',
    location: 'Stanford Research Institute, California, USA',
    credibilityRating: 3,
    sections: [
      {
        title: 'Testing Psychic Perception',
        content:
          'Researchers at Stanford Research Institute conducted experiments in which “remote viewers” attempted to describe locations or objects hidden from normal sight, sometimes thousands of miles away. Targets were chosen and documented in advance.',
      },
      {
        title: 'Intriguing Results',
        content:
          'In some sessions, viewers produced sketches and descriptions judged to be strikingly accurate by independent evaluators. The apparent results drew the interest and funding of U.S. government agencies.',
      },
      {
        title: 'Ongoing Controversy',
        content:
          'Supporters of psi research argue that the SRI data show statistically significant effects, while critics point to methodological concerns and issues with blinding and controls. Regardless of interpretation, the experiments remain foundational in discussions of remote viewing and consciousness anomalies.',
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

/**
 * Get all documented accounts
 * @returns Array of all documented accounts
 */
export const getAllDocumentedAccounts = (): readonly DocumentedAccount[] => {
  return documentedAccountsData;
};

/**
 * Get count of documented accounts
 * @returns Total number of documented accounts
 */
export const getDocumentedAccountsCount = (): number => {
  return documentedAccountsData.length;
};

/**
 * Get documented accounts by credibility rating
 * @param minRating - Minimum credibility rating (1-5)
 * @returns Accounts meeting the rating threshold
 */
export const getAccountsByCredibility = (minRating: number): DocumentedAccount[] => {
  return documentedAccountsData.filter(account => account.credibilityRating >= minRating);
};

/**
 * Get documented accounts by location
 * @param location - Location string
 * @returns Matching documented accounts
 */
export const getAccountsByLocation = (location: string): DocumentedAccount[] => {
  return documentedAccountsData.filter(account =>
    account.location.toLowerCase().includes(location.toLowerCase())
  );
};

/**
 * Get documented accounts by year range
 * @param startYear - Start year
 * @param endYear - End year (optional, defaults to present)
 * @returns Accounts within the year range
 */
export const getAccountsByYearRange = (startYear: string, endYear?: string): DocumentedAccount[] => {
  return documentedAccountsData.filter(account => {
    const accountYear = account.year.split('-')[0]; // Handle ranges like "1977-1979"
    if (endYear) {
      return accountYear >= startYear && accountYear <= endYear;
    }
    return accountYear >= startYear;
  });
};