// data/paranormal/phenomena.ts
/**
 * Phenomena Category Data
 * Unexplained natural and supernatural occurrences
 * 
 * Includes: Crop Circles, Bermuda Triangle, Ball Lightning, Spontaneous Human Combustion, Time Slips
 */

import { categoryColors } from '@/constants/Colors';
import type { TopicSection, CategoryId } from './types';

export interface PhenomenaTopic {
  id: string;
  name: string;
  description: string;
  categoryId: CategoryId;
  icon: string;
  sections: TopicSection[];
}

export const phenomenaData: readonly PhenomenaTopic[] = [
  {
    id: 'ev-1',
    name: 'Crop Circles',
    description: 'Intricate patterns appearing in fields overnight',
    categoryId: 'phenomena',
    icon: '⭕',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Crop circles range from simple circles to complex geometric patterns spanning hundreds of feet. They appear overnight, primarily in England\'s Wiltshire region. Designs include fractals, mathematical formulas, and symbolic imagery. The plants are bent, not broken, often at the nodes.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Some circles show unusual magnetic readings and plant changes. Researchers found expulsion cavities in plant nodes suggesting rapid heating. However, Doug Bower and Dave Chorley admitted creating many circles as hoaxes. The debate continues over which are genuine anomalies.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Theories include alien messages, plasma vortices, Earth energy, and human artistry. Skeptics attribute all circles to hoaxers using planks and ropes. Believers point to circles appearing in minutes, complex mathematics, and plant anomalies. New circles appear annually despite surveillance.',
      },
    ],
  },
  {
    id: 'ev-2',
    name: 'The Bermuda Triangle',
    description: 'The mysterious region where ships and planes vanish',
    categoryId: 'phenomena',
    icon: '🔺',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'The Bermuda Triangle spans Miami, Bermuda, and Puerto Rico. Famous disappearances include Flight 19 (1945), USS Cyclops (1918), and numerous private vessels. Ships and planes vanish without distress signals or wreckage. The area has claimed over 1,000 lives.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'The U.S. Coast Guard and Navy attribute losses to natural causes: sudden storms, human error, and heavy traffic. The area has no more disappearances than other ocean regions. However, some cases remain genuinely mysterious with no wreckage ever found.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Theories include methane gas eruptions, magnetic anomalies, time portals, and alien abductions. Skeptics note the Triangle\'s boundaries are arbitrary and statistics are exaggerated. Compass variations and unpredictable weather are documented. The mystery persists in popular culture.',
      },
    ],
  },
  {
    id: 'ev-3',
    name: 'Ball Lightning',
    description: 'Mysterious spheres of electrical energy',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Ball lightning appears as glowing spheres ranging from golf ball to beach ball size. They float through the air, sometimes passing through walls. Colors include white, yellow, orange, red, and blue. Duration ranges from seconds to minutes before disappearing or exploding.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Thousands of eyewitness reports exist, but ball lightning is rarely photographed or recorded. Scientists have struggled to reproduce it in laboratories. Recent experiments created plasma balls using microwaves. The phenomenon remains poorly understood despite being documented for centuries.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Theories include plasma balls, oxidizing aerosols, microwave cavity resonance, and silicon vapor from lightning strikes. Some dismiss reports as optical illusions or retinal afterimages. However, credible witnesses including scientists have observed the phenomenon. Research continues.',
      },
    ],
  },
  {
    id: 'ev-4',
    name: 'Spontaneous Human Combustion',
    description: 'People bursting into flames without external source',
    categoryId: 'phenomena',
    icon: '🔥',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Victims are found burned to ashes while surroundings remain relatively undamaged. The torso and head are typically consumed, leaving legs intact. Temperatures must exceed 3,000°F to cremate a body. Cases often involve elderly, intoxicated, or immobile individuals.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Over 200 cases have been documented since the 1600s. The "wick effect" explains how body fat can fuel prolonged burning once ignited by external source. However, some cases lack obvious ignition sources. Forensic scientists remain skeptical of true spontaneous combustion.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Mainstream science attributes cases to external ignition (cigarettes, fireplaces) combined with the wick effect. Alternative theories include ball lightning, static electricity, or metabolic processes. Charles Dickens popularized the phenomenon in "Bleak House." True spontaneity remains unproven.',
      },
    ],
  },
  {
    id: 'ev-5',
    name: 'Time Slips',
    description: 'Unexplained journeys through time',
    categoryId: 'phenomena',
    icon: '⏰',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Time slips involve people experiencing different time periods. Witnesses report seeing historical scenes, people in period clothing, or anachronistic environments. Episodes last minutes to hours. Locations often have historical significance. Witnesses feel disoriented and confused.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'The Moberly-Jourdain incident (1901) involved two women experiencing 18th-century Versailles. The Bold Street time slip in Liverpool has multiple witnesses. Cases are difficult to verify as they rely on personal testimony. Skeptics attribute them to false memories or misperception.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Theories include quantum physics, parallel universes, and psychic impressions of past events. Some suggest electromagnetic anomalies trigger temporal experiences. Skeptics cite confabulation, suggestion, and the unreliability of memory. The phenomenon challenges our understanding of time.',
      },
    ],
  },
  {
    id: 'ev-6',
    name: '1897 Great Airship Mystery',
    description: 'A wave of strange airship sightings across the United States in 1896–1897',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'The Great Airship Mystery involved hundreds of reports of cigar-shaped craft with bright lights and sometimes propellers or wing-like structures. Sightings stretched from California to the Midwest, often at night, long before powered flight became common.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Newspapers documented detailed witness accounts, including landings and encounters with strange, humanlike pilots. Some stories were clearly hoaxes, but others came from sober citizens and officials who stuck to their descriptions.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Explanations range from experimental airships and newspaper sensationalism to mass hysteria and early UFO visitations. The lack of surviving hardware or clear inventors keeps the Great Airship Mystery suspended between folklore and ufology.',
      },
    ],
  },
  {
    id: 'ev-7',
    name: '1913 Ghost Meteor',
    description: 'A massive fiery procession seen in the night sky in 1913 and never fully explained',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'On February 9, 1913, witnesses across North America reported a slow-moving chain of fireballs crossing the sky, described as a celestial parade that lasted minutes instead of seconds.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Astronomers could not match the event to a known meteor shower or orbit. Unlike typical meteors, the objects traveled in formation and left little to no debris, earning the nickname "ghost meteors."',
      },
      {
        title: 'Theories & Explanations',
        content: 'Theories include a disintegrating mini-moon, unusual reentry debris, or an Earth-grazing meteor stream that never impacted. Others see it as a one-off celestial anomaly that defies normal classification.',
      },
    ],
  },
  {
    id: 'ev-8',
    name: 'Angel Hair Falls',
    description: 'Wispy, cobweb-like strands that drift from the sky and vanish when touched',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Angel hair appears as fine, drifting filaments that settle on trees, cars, and power lines, sometimes following UFO or light-in-the-sky reports. The strands often dissolve quickly when handled.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Samples have occasionally been collected, with some tests suggesting spider silk or airborne polymers. In many cases, the material evaporates or disintegrates before laboratory analysis is possible.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Skeptics point to mass ballooning events by spiders and atmospheric pollution. Others tie angel hair falls to UFO propulsion, dimensional rifts, or unknown atmospheric life forms shedding material.',
      },
    ],
  },
  {
    id: 'ev-9',
    name: 'Angel Hair Phenomenon',
    description: 'Broad term for recurring reports of mysterious filamentous material falling from the sky',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Beyond isolated falls, angel hair is reported worldwide in clusters: strange lights overhead, followed by drifting, glowing strands that tangle on vegetation and wires before evaporating.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Witnesses describe textures ranging from cotton candy to cobwebs. Some samples fluoresce under UV light or show unusual chemical profiles, while others test as natural silk or cellulose.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Conventional explanations focus on spider silk, industrial fibers, or atmospheric pollutants. Paranormal theories link it to UFO exhaust or energy residue from non-human craft passing through our airspace.',
      },
    ],
  },
  {
    id: 'ev-10',
    name: 'Ape Canyon Bigfoot Attack',
    description: 'A violent alleged Bigfoot encounter at Ape Canyon near Mount St. Helens in 1924',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Prospectors in Ape Canyon claimed to have shot at large, hairy humanoids, prompting a nighttime siege on their cabin by rock-throwing creatures.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'The men reported boulders pounding the cabin, clawed hands groping at chinks in the logs, and inhuman cries. Later visitors found the cabin perched near a dangerous cliff, now lost to time and erosion.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Skeptics suggest bears, hoaxing, or exaggeration. Bigfoot researchers regard Ape Canyon as an early, intense example of hostile sasquatch behavior, blending creature lore with poltergeist-like phenomena.',
      },
    ],
  },
  {
    id: 'ev-11',
    name: 'Black Volga Car',
    description: 'An ominous black car rumored to abduct people in Eastern Europe during the Cold War',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Legends describe a black GAZ-21 Volga sedan that appears suddenly, sometimes with curtains or blacked-out windows, associated with disappearances of children and adults.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Reports often lack verifiable names or dates, but the legend spread widely, suggesting deep cultural anxiety about secret police, organ traffickers, or supernatural agents.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Social historians see the Black Volga as a modern urban legend encoding fears of state power. Paranormal interpretations cast it as a cursed or demonic vehicle prowling city streets.',
      },
    ],
  },
  {
    id: 'ev-12',
    name: 'Blood Rain',
    description: 'Rainfall tinged red, sometimes reported as literal blood falling from the sky',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Accounts of blood-red rain span centuries, with downpours staining clothing, buildings, and fields. Sometimes the red material is described as thick and clotted, other times as faint discoloration.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Modern analyses often detect airborne dust, sand, algae, or spores as the source of the color. In some historical cases, samples were never preserved, leaving ambiguity.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Scientific explanations emphasize colored particulates carried by winds from deserts or blooms of microscopic organisms. In folklore, blood rain is seen as an omen of war, plague, or divine judgment.',
      },
    ],
  },
  {
    id: 'ev-13',
    name: 'Blue Skin Kentucky',
    description: 'A family line in Kentucky historically reported with blue-tinted skin',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Stories from the Appalachian region describe the Fugate family and others with noticeably blue or bluish skin living in remote hollows.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Medical investigation pointed to a rare hereditary condition affecting blood oxygenation (methemoglobinemia), combined with generational isolation.',
      },
      {
        title: 'Theories & Explanations',
        content: 'While science explains the coloration, the Blue People of Kentucky linger in paranormal lore as an example of how unusual human traits become woven into regional mystery.',
      },
    ],
  },
  {
    id: 'ev-14',
    name: 'Brown Mountain Lights',
    description: 'Mysterious lights seen over Brown Mountain in North Carolina',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Witnesses describe floating orbs and drifting lights above the ridgelines, appearing and disappearing without obvious sources. Reports go back centuries, including Indigenous traditions.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Government and academic studies attempted to match the lights to car headlights, trains, or atmospheric conditions. Some nights the lights appear when no traffic should be visible.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Suggestions include swamp gas, piezoelectric effects from stressed rock, ghost lights of the dead, or UFO activity. Despite heavy study, Brown Mountain remains a classic American earth-light mystery.',
      },
    ],
  },
  {
    id: 'ev-15',
    name: 'Brunhilda\'s Rock',
    description: 'A supposedly enchanted or cursed rock associated with disappearances and strange sounds',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Local legends claim a specific outcrop or boulder—Brunhilda\'s Rock—generates echoes, whispers, or vanishing hikers, often in misty or stormy conditions.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Visitors report disorientation, time loss, or hearing voices near the site. Physical surveys usually show nothing unusual beyond tricky terrain and odd acoustics.',
      },
      {
        title: 'Theories & Explanations',
        content: 'The rock is variously blamed on fae activity, geomagnetic anomalies, or a classical haunting tied to a tragic figure named Brunhilda. Skeptics point to psychoacoustics and suggestibility.',
      },
    ],
  },
  {
    id: 'ev-16',
    name: 'Dabtsang Nima Yeti Scalp',
    description: 'A famed alleged Yeti relic preserved in a Himalayan monastery',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'The scalp, or cap, is said to be made from the hide of a Yeti and used in rituals or displayed to visitors as proof of the creature\'s existence.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Expeditions examined the artifact, taking hair samples and photographs. Laboratory tests typically point to known animals like goats or bears rather than an unknown primate.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Some believe the scalp is a ceremonial object inspired by real encounters with unknown hominids. Others see it as a crafted relic, more important as cultural testimony than as biological evidence.',
      },
    ],
  },
  {
    id: 'ev-17',
    name: 'Devil\'s Footprints 1855',
    description: 'A line of hoof-like tracks that appeared overnight in the snow in Devon, England',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'In February 1855, residents found single-file hoofprints stretching for miles over fields, walls, rooftops, and even frozen rivers, as if something had walked in a perfectly straight path across obstacles.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Footprints were measured and sketched, but no animal or person was ever identified as the source. Some tracks appeared to pass through small openings or high barriers inexplicably.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Suggestions include badgers, kangaroos, hopping rodents, hoaxers, or unusual meteorological effects on snow. Many locals saw it as the literal mark of the Devil roaming the countryside.',
      },
    ],
  },
  {
    id: 'ev-18',
    name: 'Devil\'s Sea Dragon Triangle',
    description: 'A Pacific counterpart to the Bermuda Triangle, associated with vanishings and strange phenomena',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'The Devil\'s Sea, or Dragon\'s Triangle, off the coast of Japan, is blamed for missing ships, odd fog banks, and reports of strange lights or sea creatures.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Official investigations usually attribute the dangers to volcanic activity, strong currents, and heavy traffic. Some Japanese sources catalog unusually high loss rates in specific decades.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Theories parallel the Bermuda Triangle: magnetic anomalies, underwater volcanoes, portals, or giant cryptids. Skeptics argue perceived patterns disappear when global statistics are considered.',
      },
    ],
  },
  {
    id: 'ev-19',
    name: 'Dyatlov Pass Incident Theories',
    description: 'Competing explanations for the 1959 deaths of nine hikers in the Urals',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'The hikers fled their tent into freezing conditions, some partially clothed, with injuries ranging from broken ribs and skull fractures to missing eyes and tongue. Radiation traces and strange orange skin tones were noted in some reports.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Official inquiries cited a "compelling natural force," but later reviews raised possibilities including avalanches, katabatic winds, infrasound panic, or military tests. Declassified documents and new forensic modeling continue to reshape interpretations.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Popular theories include Yeti attacks, secret weapons, UFOs, and paranormal forces. Scientific models now favor slab avalanches or weather-driven panic, but not all details have been fully reconciled, preserving its aura of mystery.',
      },
    ],
  },
  {
    id: 'ev-20',
    name: 'Earth Lights',
    description: 'Mysterious luminous phenomena associated with specific landscapes and fault lines',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Earth lights often appear as hovering orbs, flickering flames, or moving beams above hills, valleys, and fault zones. They may appear regularly in specific hotspots over decades.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Studies in places like Hessdalen, Brown Mountain, and Marfa have documented anomalous lights on video and radar, sometimes with unusual spectral signatures.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Hypotheses include piezoelectric discharges from stressed rock, plasma formations, and tectonic activity generating luminous phenomena. Paranormal views connect earth lights to spirits, UFOs, or interdimensional windows.',
      },
    ],
  },
  {
    id: 'ev-21',
    name: 'Earth Pulse Hum',
    description: 'Low-frequency hums or vibrations reportedly rising from deep within the Earth',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Witnesses describe persistent low hums or pulses felt through the ground or heard as distant mechanical droning, sometimes in sync with subtle vibrations.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Seismographs often register microseismic noise, but not always matching reported hums. Some locations have continual complaints while instruments show nothing unusual.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Ideas range from natural resonance, magma movement, or ocean wave microseisms to secret underground facilities or planetary energy grids. Others attribute it to tinnitus and human perception quirks.',
      },
    ],
  },
  {
    id: 'ev-22',
    name: 'Electric Blue Fog',
    description: 'Strange blue or luminous fogs associated with missing time and disorientation',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Reports describe localized patches of blue-tinted mist that appear suddenly, sometimes indoors or on highways, accompanied by static, prickling skin, or altered sound.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Witnesses sometimes report clocks jumping forward or backward, or emerging from the fog miles away with no memory of the transition. Physical traces are rare.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Explanations include ionized air, ball lightning, or chemical releases. Paranormal accounts treat electric blue fogs as gateways, time-slip triggers, or manifestations of non-human craft.',
      },
    ],
  },
  {
    id: 'ev-23',
    name: 'Fairy Rings',
    description: 'Circular rings of mushrooms or lush grass linked to fairy lore and portals',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Fairy rings appear as near-perfect circles or arcs of mushrooms, darker grass, or barren patches. They can expand slowly over years as fungal colonies grow outward.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Biology explains the rings as the outward growth of mycelium feeding in all directions equally. Nonetheless, older reports describe lights, music, and missing time within the circles.',
      },
      {
        title: 'Theories & Explanations',
        content: 'In folklore, fairy rings are portals or dance circles where mortals risk being trapped. Modern occult interpretations treat them as naturally occurring energy vortices or subtle thresholds.',
      },
    ],
  },
  {
    id: 'ev-24',
    name: 'Fish Falls Reports',
    description: 'Rainstorms that inexplicably drop live or dead fish from the sky',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Fish falls usually occur during heavy rains, leaving streets and rooftops littered with small fish, often of a single species, sometimes still alive and flopping.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Meteorologists and journalists have documented numerous cases worldwide. Often there is no nearby body of water large enough to easily explain the event.',
      },
      {
        title: 'Theories & Explanations',
        content: 'The leading theory is that waterspouts or strong updrafts suck fish from lakes or seas, dropping them miles away. Paranormal theories invoke poltergeists, trickster spirits, or glitches in reality.',
      },
    ],
  },
  {
    id: 'ev-25',
    name: 'Frog Rain Reports',
    description: 'Historical and modern accounts of frogs falling from storm clouds',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Like fish falls, frog rains feature sudden downpours of small frogs or tadpoles appearing en masse on roads and fields following storms.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Witnesses often find frogs of similar size and species scattered over a limited area. Some arrive alive and hopping; others are stunned or dead on impact.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Waterspouts, tornadoes, and strong winds lifting amphibians from ponds remain the favored explanation. Alternative views see frog rains as classic examples of Fortean phenomena challenging everyday logic.',
      },
    ],
  },
  {
    id: 'ev-26',
    name: 'Ghost Lights',
    description: 'Mysterious floating lights seen in remote locations worldwide',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Ghost lights appear as glowing orbs or flickering flames hovering over fields, swamps, graveyards, or roadsides. They often move against the wind or react oddly to observers.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Reports include classic will-o’-the-wisps, spook lights, and mystery headlights that vanish when approached. Photographs and videos exist but are usually distant and ambiguous.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Explanations range from swamp gas, bioluminescent insects, and distant car lights to spirits, UFO probes, or earth-light plasma linked to geology.',
      },
    ],
  },
  {
    id: 'ev-27',
    name: 'Great Amherst Mystery',
    description: 'A violent poltergeist case in Amherst, Nova Scotia in the 1870s',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Centered on teenager Esther Cox, the case featured rapping sounds, moving objects, spontaneous fires, and messages allegedly tapped out by unseen entities.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Witnesses included neighbors, clergy, and investigators who described beds shaking, objects flying, and words spelled via knocks. Esther reported threats from an invisible presence.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Skeptics suggest trickery, hysteria, or repressed trauma; paranormal researchers view Amherst as a classic high-intensity poltergeist outbreak focused on a single agent.',
      },
    ],
  },
  {
    id: 'ev-28',
    name: 'Harmonic Convergence',
    description: 'A 1987 global meditation event framed as a planetary energetic shift',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'The Harmonic Convergence brought thousands to sacred sites worldwide to meditate and “anchor” a new cycle of consciousness tied to Mayan calendar interpretations.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Participants reported synchronicities, UFO sightings, and personal awakenings. No measurable physical changes were documented beyond social and psychological effects.',
      },
      {
        title: 'Theories & Explanations',
        content: 'New Age interpretations view it as a spiritual upgrade or unlocking of planetary chakras. Critics classify it as a mass cultural movement wrapped in esoteric symbolism.',
      },
    ],
  },
  {
    id: 'ev-29',
    name: 'Hessdalen Lights',
    description: 'Long-running luminous phenomena in the Hessdalen valley of Norway',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Since the 1980s, residents have observed bright orbs, flashes, and slow-moving lights hovering over hills or darting along the valley, sometimes lasting minutes.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Scientific projects installed radar, cameras, and spectrographs, capturing anomalous lights with unusual motion and spectral lines not easily tied to aircraft or stars.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Proposed causes include plasma from metallic dust, piezoelectric discharges from stressed rock, or exotic atmospheric physics; ufologists consider Hessdalen a structured UFO hotspot.',
      },
    ],
  },
  {
    id: 'ev-30',
    name: 'Hessdalen Spectral Drops',
    description: 'Short, intense flashes and spectral anomalies recorded in Hessdalen',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Beyond steady lights, instruments captured sudden “spectral drops”—brief luminous bursts with complex spectra, sometimes in clusters.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'These events show spectral lines suggesting ionized gases or metals but with combinations not fully explained by known light sources in the valley.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Some researchers see them as signatures of transient plasma blobs or piezoelectric breakdown. Others argue they hint at unknown energy mechanisms or structured craft emissions.',
      },
    ],
  },
  {
    id: 'ev-31',
    name: 'Hornet Spook Light',
    description: 'A recurring mystery light near Hornet, Missouri, also called the Joplin Spook Light',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Witnesses see a bright, bobbing light along a rural road, sometimes splitting, changing color, or rushing toward onlookers before vanishing.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Investigations tested car headlights, atmospheric refraction, and prank theories. The light often appears when no vehicles are present and behaves unlike simple reflections.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Explanations include refracted headlights over hills, ghost lanterns from a decapitated miner, or a localized form of earth light plasma.',
      },
    ],
  },
  {
    id: 'ev-32',
    name: 'John Titor Time Traveler',
    description: 'An alleged time traveler who posted online in the early 2000s claiming to be from 2036',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Using message boards, “John Titor” described future civil conflict, detailed time travel mechanics, and obscure computer issues requiring an IBM 5100.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Some technical claims about legacy computer functions were obscure but verifiable. Most of Titor’s predicted timelines diverged from our actual history.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Many view Titor as an elaborate role-play or ARG. Others suggest parallel timelines, where his predictions were accurate—but for a different branch of reality.',
      },
    ],
  },
  {
    id: 'ev-33',
    name: 'Joplin Spook Light',
    description: 'Another name and nearby variant of the mysterious light seen near Joplin, Missouri',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'The Joplin Spook Light is typically observed from a hilltop road, appearing as a glowing orb that drifts, flares, or oscillates along the horizon.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Viewpoints and roads have shifted over time, complicating attempts to tie the light to specific traffic or industrial sources. Photos show bright, featureless glows.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Suggested causes include refracted headlights, spirit lanterns of lost travelers, UFOs, or lensing effects over warm and cool air layers in the valley.',
      },
    ],
  },
  {
    id: 'ev-34',
    name: 'Kentucky Meat Shower',
    description: 'An 1876 incident where chunks of meat reportedly fell from the sky in Kentucky',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Witnesses in Bath County described flakes of meat raining over a small area, landing on fences and fields in broad daylight.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Samples were examined and identified variously as beef, mutton, lung tissue, or cartilage. No obvious aircraft or storms were involved.',
      },
      {
        title: 'Theories & Explanations',
        content: 'One theory posits that vultures disgorged partially digested meat mid-flight. Others see the shower as a classic Fortean anomaly resisting neat explanation.',
      },
    ],
  },
  {
    id: 'ev-35',
    name: 'Magnetic Hill Illusions',
    description: 'Locations where cars appear to roll uphill and water seems to flow against gravity',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'At so-called magnetic hills, parked vehicles in neutral appear to drift uphill, and balls or bottles placed on the road roll the “wrong” way.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Surveys show that these slopes are actually downhill but surrounded by tilted horizons and landscape features that trick human perception.',
      },
      {
        title: 'Theories & Explanations',
        content: 'While folklore cites magnetism or paranormal forces, the consensus attributes magnetic hills to powerful optical illusions combined with subtle gradients.',
      },
    ],
  },
  {
    id: 'ev-36',
    name: 'Manhattan Heat Bloom',
    description: 'Reports of localized heat anomalies and mirage-like distortions in urban canyons of Manhattan',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Witnesses describe sudden waves of intense heat, shimmering air, and distortion of buildings or lights along specific streets, even on mild days.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Urban heat island effects, vent exhaust, and reflective glass can create localized hot zones and visual warping. Paranormal reports tie them to time slips or dimensional bleed-throughs.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Most explanations rely on microclimates and optics. Esoteric interpretations see Manhattan heat blooms as stress points in the “grid” of city energy and human activity.',
      },
    ],
  },
  {
    id: 'ev-37',
    name: 'Marfa Ghost Lights',
    description: 'Mysterious lights observed near Marfa, Texas, often interpreted as spirits or apparitions',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Marfa lights appear as glowing spheres hovering over the desert, splitting, merging, or dancing in patterns that seem intelligent or playful.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Viewers at official observation points see lights both explainable as distant car headlights and others that appear in areas with no roads. Photometric studies show unusual motion and brightness changes in some cases.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Ideas range from misidentified vehicles and atmospheric mirages to spirits of lost travelers or earth-light plasma phenomena related to tectonic stress.',
      },
    ],
  },
  {
    id: 'ev-38',
    name: 'Marfa Lights',
    description: 'The broader category of unexplained luminous phenomena in the Marfa region',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Beyond classic orbs, some observers report structured shapes, color-shifting lights, and formations that move in coordinated patterns across the horizon.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Long-term monitoring has captured both mundane lights and truly anomalous events that do not match predictable traffic or aircraft signatures.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Some researchers favor a layered solution: headlights and ranch lights for many sightings, plus a smaller core of genuine unknowns pointing to unique atmospheric or geophysical conditions.',
      },
    ],
  },
  {
    id: 'ev-39',
    name: 'Mary Celeste Mystery',
    description: 'The famous ghost ship found adrift in 1872 with crew missing and cargo intact',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'The Mary Celeste was discovered under partial sail, seaworthy, with personal belongings and cargo largely untouched—but no crew on board.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Official inquiries found no signs of piracy or struggle. Possible clues included some water in the hold, missing lifeboat, and alcohol cargo that might have leaked fumes.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Proposed causes range from sudden seaquake, waterspout, or explosion risk prompting evacuation, to mutiny, piracy, or paranormal abduction. The crew’s fate remains unknown.',
      },
    ],
  },
  {
    id: 'ev-40',
    name: 'Mel\'s Hole Bottomless',
    description: 'An alleged “bottomless pit” on private land in Washington State with bizarre properties',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Caller “Mel” claimed his well-like hole never reached a bottom despite miles of fishing line, and that objects thrown in never made a sound.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Radio interviews added claims of strange beams of darkness, resurrected animals, and government seizure of the land. No verifiable coordinates were ever confirmed.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Many see Mel’s Hole as modern folklore or hoax blended with real geological oddities like deep sinkholes. Others treat it as a possible portal, dimensional rift, or engineered bore.',
      },
    ],
  },
  {
    id: 'ev-41',
    name: 'Mothman Prophecies',
    description: 'The web of synchronicities and predictions surrounding the Mothman sightings and the Silver Bridge collapse',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'In the late 1960s, sightings of a winged, red-eyed being in Point Pleasant coincided with UFOs, phone anomalies, and prophetic dreams culminating in the tragic bridge collapse.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Journalist John Keel documented strange phone calls, Men in Black encounters, and premonitions that seemed to predict the disaster that killed 46 people.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Interpretations include Mothman as a harbinger, guardian, or psychic projection of looming catastrophe. Skeptical views emphasize social contagion and cherry-picked coincidences.',
      },
    ],
  },
  {
    id: 'ev-42',
    name: 'NAGA Fireballs',
    description: 'Mysterious glowing orbs rising from the Mekong River, especially during Buddhist festivals',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Reddish or orange balls reportedly shoot straight up from the water into the sky, leaving no smoke or sound, often in clusters on specific nights.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Videos and photos capture lights rising from the horizon, but skeptics argue some are flares or tracer rounds fired from the opposite shore.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Folklore attributes the fireballs to the Naga serpent spirits honoring the Buddha. Scientific suggestions include methane ignition, misperceived fireworks, or atmospheric optics.',
      },
    ],
  },
  {
    id: 'ev-43',
    name: 'Orb Phenomena',
    description: 'Glowing spherical anomalies captured in photos and videos, often at haunted sites',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Orbs appear as circular lights or translucent spheres, sometimes with internal structure, seen in flash photography or video during investigations.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Controlled tests show that dust, insects, rain, and lens artifacts can produce orb-like images, especially with flash and digital sensors.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Most investigators now treat the majority of orbs as camera artifacts. A minority of cases—especially visible to the naked eye—are considered candidates for genuine energy anomalies or spirit manifestations.',
      },
    ],
  },
  {
    id: 'ev-44',
    name: 'People Freezing Mid-Step',
    description: 'Reports of individuals suddenly becoming motionless, as if time has stopped for them',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Witnesses describe crowds or individuals halting in unnatural stillness, sometimes mid-stride or mid-gesture, remaining frozen for seconds to minutes before resuming as if nothing happened.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Some events may be staged “freeze mobs” or social experiments. Others occur spontaneously in everyday settings with no apparent coordination or filming.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Rational ideas include medical episodes, dissociation, or unnoticed cues triggering group behavior. Paranormal interpretations frame these as micro time-slips, glitches in reality, or observer-focused anomalies.',
      },
    ],
  },
  {
    id: 'ev-45',
    name: 'Phantom Artillery Barrages',
    description: 'Loud, distant booming or cannon sounds with no physical source',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Residents in coastal or rural regions report hearing rolling thunder, cannon fire, or battle-like barrages on clear days with no storms or military activity.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Historical records describe “Seneca guns,” “Barisal guns,” and other mystery booms. Seismographs sometimes register infrasound or minor tremors; often they show nothing.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Suggested causes include offshore sonic booms, small earthquakes, atmospheric ducting of distant sounds, or undersea gas releases. Others argue that some barrages are psychic echoes of past battles or unknown geophysical discharges.',
      },
    ],
  },
  {
    id: 'ev-46',
    name: 'Phantom Smells',
    description: 'Unexplained scents appearing without a physical source',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Witnesses report sudden scents—flowers, sulfur, smoke, perfume—arising in empty rooms or outdoor spaces.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Documented in paranormal cases, neurological studies, and anomalous events. Some odors are tied to hauntings or UFO encounters.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Possibilities include hallucinations, EM-induced olfactory stimulation, energy residues, or spiritual manifestations.',
      },
    ],
  },
  {
    id: 'ev-47',
    name: 'Portlock Nantinaq Killings',
    description: 'A series of violent disappearances attributed to a large humanoid in Alaska',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'In the 1940s, residents fled Portlock after repeated attacks and disappearances linked to a giant hairy creature.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Tracks, mutilated animals, and crushed campsites were reported. No culprit was ever captured or identified.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Explanations include Bigfoot-type beings, hostile recluses, or a mass social panic amplified by isolation.',
      },
    ],
  },
  {
    id: 'ev-48',
    name: 'Pripyat Chernobyl Anomalies',
    description: 'Strange lights, figures, and electrical disturbances reported in the Chernobyl Exclusion Zone',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Reports include glowing figures, “black bird”-like apparitions, and devices malfunctioning near hotspots.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Scientists note radiation-induced optical effects, wildlife mutations, and atmospheric plasma as possible contributors.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Ideas range from hallucinations to radiation-based phenomena to interdimensional bleed-throughs.',
      },
    ],
  },
  {
    id: 'ev-49',
    name: 'Religious Miracle Sightings',
    description: 'Reports of apparitions, divine lights, and supernatural healings across cultures',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Events often involve glowing figures, audible messages, or spontaneous healings witnessed by crowds.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Some cases are medically unexplained; others show mass psychological alignment or environmental triggers.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Theories include spiritual intervention, mass perception shifts, or electromagnetic anomalies interpreted spiritually.',
      },
    ],
  },
  {
    id: 'ev-50',
    name: 'Reverse Echo Events',
    description: 'Echoes heard *before* the originating sound occurs',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Witnesses hear an “echo” seconds before the real sound—gunshots, footsteps, thunder—suggesting temporal distortion.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Recorded in remote areas and geological hotspots. Audio equipment sometimes picks up unexplained pre-sounds.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Hypotheses include atmospheric refraction, acoustic reflections over temperature layers, or time-slip microevents.',
      },
    ],
  },
  {
    id: 'ev-51',
    name: 'Reverse Lightning Strikes',
    description: 'Lightning appearing to shoot upward from the ground into the clouds',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Known as “ground-to-cloud” discharges; more rare and often linked to tall structures or charged terrain.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'High-speed cameras confirm upward leaders under strong electrical fields.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Explained electrically, but some events show unusual branching or occur in clear skies, prompting fringe theories.',
      },
    ],
  },
  {
    id: 'ev-52',
    name: 'Rods Skyfish',
    description: 'Fast-moving aerial creatures captured on video resembling long rods with oscillating wings',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Appear as elongated, blur-like forms with rippling membranes, often recorded in caves or open skies.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'High frame-rate studies suggest insects blurred by shutter effects, yet some videos show objects much larger.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Proposed explanations range from camera artifacts to unknown aerial organisms.',
      },
    ],
  },
  {
    id: 'ev-53',
    name: 'Roanoke Colony Disappearance',
    description: 'The unexplained vanishing of an entire English colony in the 1500s',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'The settlers vanished without struggle; only the word “CROATOAN” was found carved into a post.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Archaeology shows relocation evidence, but no definitive explanation has been proven.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Ideas include integration with tribes, famine, evacuation, or paranormal displacement theories.',
      },
    ],
  },
  {
    id: 'ev-54',
    name: 'Skinwalker Ranch',
    description: 'A Utah hotspot of UFOs, cryptids, portals, and anomalous physics',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Reports include glowing orbs, portals, invisible entities, cattle mutilations, and time dilation.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Government-funded studies documented radiation spikes, object tracking, and observer effects.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Hypotheses include interdimensional entities, experimental craft, or a unique geological-energy interaction.',
      },
    ],
  },
  {
    id: 'ev-55',
    name: 'Sky Rivers Moving',
    description: 'Massive airborne currents of water vapor behaving like invisible rivers',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Satellite imagery shows long streams of moisture flowing like rivers in the sky, impacting weather dramatically.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Atmospheric rivers are now well-documented, but anomalous “erratic” flows sometimes defy models.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Most are meteorological; some anomalies may hint at unknown climate dynamics.',
      },
    ],
  },
  {
    id: 'ev-56',
    name: 'Sky Trumpet Sounds',
    description: 'Loud metallic or trumpet-like blasts heard worldwide from unknown sources',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Sounds resemble trumpets, groaning metal, or massive machinery in the sky.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'No consistent source identified. Some events recorded on seismographs or atmospheric monitors.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Ideas include atmospheric ducting, Earth harmonics, industrial resonance, or apocalyptic symbolism.',
      },
    ],
  },
  {
    id: 'ev-57',
    name: 'Solar Miracle Fátima',
    description: 'The 1917 mass-witnessed event where the sun appeared to dance in the sky',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Witnesses saw the sun spin, pulse, zig-zag, and emit colors, drying wet ground instantly.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Tens of thousands witnessed the event. Some newspaper reporters recorded dramatic visual distortions.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Proposed causes include mass optical effects, atmospheric phenomena, or genuine supernatural intervention.',
      },
    ],
  },
  {
    id: 'ev-58',
    name: 'South Dakota Pulsing Field',
    description: 'A rural field where the ground allegedly pulses rhythmically beneath observers’ feet',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Witnesses describe the earth swelling and relaxing as though “breathing.” Animals avoid the area.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Some measurements show subtle seismic oscillations, though not enough to explain the dramatic sensations reported.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Ideas include trapped groundwater pressure, tectonic micro-movements, or geological energy hotspots.',
      },
    ],
  },
  {
    id: 'ev-59',
    name: 'Spontaneous Stone Showers',
    description: 'Rocks falling from empty sky onto homes and fields',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Pebbles or stones rain down repeatedly over specific houses or sites, often without visible throwers.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Some documented by police. No trajectories or sources determined.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Attributions include poltergeist activity, pranksters, or strange wind vortices.',
      },
    ],
  },
  {
    id: 'ev-60',
    name: 'Standing Mist Vermont',
    description: 'A motionless fog bank appearing in isolated Vermont forests',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Witnesses describe perfect stillness inside the mist, accompanied by silence and disorientation.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Electromagnetic anomalies occasionally detected. Mist vanishes as quickly as it appears.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Possibilities include microclimates, portals, or geomagnetic activity.',
      },
    ],
  },
  {
    id: 'ev-61',
    name: 'Star Jelly',
    description: 'A mysterious gelatinous substance found after meteor showers',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Appears as translucent lumps on vegetation, quickly evaporating or dissolving.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Chemical analysis shows no DNA. Some cases linked to frog spawn, others entirely unexplained.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Ideas include meteoric residue, atmospheric plasma discharge, or decomposed biological matter.',
      },
    ],
  },
  {
    id: 'ev-62',
    name: 'Stillness Bubbles Forests',
    description: 'Localized zones of silence and immobility within forests',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Wind stops, animals go silent, and observers feel pressure or heaviness.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Some correlate with EM spikes; others show no measurable cause.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Proposed explanations include energy nodes, dimensional thinning, or sensory illusions.',
      },
    ],
  },
  {
    id: 'ev-63',
    name: 'The Bloop Sound',
    description: 'A massive underwater sound of unknown origin detected in 1997',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Detected across multiple hydrophones; organic-like but extremely large.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'NOAA later suggested icequakes, though acoustic mismatch persists.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Ideas include unknown megafauna, tectonic activity, or oceanic anomalies.',
      },
    ],
  },
  {
    id: 'ev-64',
    name: 'The Hum Worldwide',
    description: 'A persistent low-frequency noise heard by a small portion of the population',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Most commonly heard at night; described as a diesel engine or deep vibration.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Some recordings exist; many cases unexplained after environmental analysis.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Hypotheses include industrial resonance, auditory phenomena, or electromagnetic sensitivity.',
      },
    ],
  },
  {
    id: 'ev-65',
    name: 'Walking Thunder Phenomenon',
    description: 'Thunder heard moving across the sky at an unnatural walking pace',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Witnesses describe footsteps-like thunder that seems to “walk” overhead rhythmically.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'No storms present in some cases. Audio recordings show distinct interval spacing.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Ideas include atmospheric ducting, shockwave reflections, or massive aerial entities.',
      },
    ],
  },
  {
    id: 'ev-66',
    name: 'Springheel Jack Attacks',
    description: 'A Victorian-era terror known for inhuman leaps and fiery breath',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Springheel Jack was described as a tall, cloaked figure with clawed hands, glowing eyes, and the ability to leap over walls and rooftops. Attacks clustered around London and nearby towns in the mid-1800s.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Newspapers, police reports, and witness testimonies documented assaults where victims were scratched, grabbed, or terrified by a figure breathing blue or white flames. Despite patrols and manhunts, no culprit was ever identified.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Some historians suspect aristocratic pranksters using spring-loaded boots, masks, and chemical tricks. Others propose a supernatural entity, demonic trickster, or even an early “urban phantom” thoughtform fed by fear and rumor.',
      },
    ],
  },
  {
    id: 'ev-67',
    name: 'The Mad Gasser Mattoon',
    description: 'A mysterious assailant who allegedly gassed homes in 1940s Illinois',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'In the mid-1940s, residents of Mattoon, Illinois reported a prowler spraying sweet-smelling gas into windows at night. Victims experienced paralysis, nausea, and burning sensations in the throat or lungs.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Police found few physical clues: no gas residues, no footprints that held up, and no confirmed suspects. Newspapers amplified the panic as reports surged, then abruptly stopped.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Explanations range from an actual attacker using anesthetics to industrial fumes, mass hysteria, or wartime nerves. Paranormal takes link the Gasser to poltergeist-like attacks that target entire communities rather than single houses.',
      },
    ],
  },
  {
    id: 'ev-68',
    name: 'Time Slip Versailles',
    description: 'An alleged time slip in 1901 where two women claimed to experience 18th-century Versailles',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'While visiting the Petit Trianon at Versailles, Anne Moberly and Eleanor Jourdain reported suddenly perceiving people in 18th-century dress, strange lighting, and a “flat” silent atmosphere, as if the landscape itself had changed era.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Their book “An Adventure” details the experience and later research showing that some features they described—unmarked at the time—matched historical layouts and details not widely known. Critics argue memory distortion and suggestion; supporters see anomalous historical accuracy.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Theories include psychic impressions of the past, genuine temporal overlap, or a kind of living historical replay. Skeptical views emphasize expectation, misidentification of costumed staff, and retroactive reconstruction of memories.',
      },
    ],
  },
  {
    id: 'ev-69',
    name: 'Triple-Shadow Phenomenon',
    description: 'Reports of individuals casting three distinct shadows from a single light source',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Witnesses describe three sharply defined shadows radiating from a person or object, sometimes shifting or “lagging” out of sync with their movements. Events are often reported at dusk, in fog, or near reflective surfaces.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'In some cases, multiple light sources or reflections can account for extra shadows. However, a subset of reports claim only one obvious light source with no mirrors or structures that could produce the effect.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Natural explanations include hidden secondary lights, vehicle headlights, or atmospheric scattering. Esoteric interpretations suggest overlapping realities, multiple subtle bodies, or “dimensional parallax” briefly visible in shadow form.',
      },
    ],
  },
  {
    id: 'ev-70',
    name: 'Vanishing Fog Banks',
    description: 'Localized fog banks that appear and disappear almost instantly',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Drivers and hikers report suddenly entering thick fog that reduces visibility to near zero, only for it to evaporate in a heartbeat—sometimes accompanied by a shift in sound, pressure, or mood.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Meteorologists acknowledge small-scale fog patches, but some cases occur in conditions that should not support rapid formation or dissipation. Instruments rarely capture these events due to their brief duration.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Ideas range from microclimate vortices and warm/cold air collisions to energy “sheaths” forming around certain terrain features. More exotic theories frame vanishing fog as a visible skin of portals, time slips, or transient cloaking fields.',
      },
    ],
  },
  {
    id: 'ev-71',
    name: 'Vanishing Lakes',
    description: 'Bodies of water that drain or disappear with startling suddenness',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'In some locations, lakes have been observed to empty in days or even hours, leaving cracked earth where water once stood. Sometimes the water later returns just as mysteriously.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Geologists point to sinkholes, lava tubes, or sudden breaches in subterranean channels. In a few cases, no obvious sink or fissure is found, and satellite imagery fails to fully explain the hydrology shift.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Conventional theories involve karst topography, drought, or glacial melt redirection. Fringe ideas posit that entire water masses can phase into other dimensions—or that something large and unseen “drinks” the lake from below.',
      },
    ],
  },
  {
    id: 'ev-72',
    name: 'Vortexes Energy Sites',
    description: 'Locations said to focus swirling earth energies that affect people and instruments',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'People visiting alleged vortex sites—such as certain canyons, mountains, or stone circles—report tingling sensations, mood shifts, compass anomalies, and distorted perceptions of distance or time.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Some measurements show minor magnetic variations, unusual ionization, or gravitational quirks, while other tests find nothing beyond normal background levels. Photographs occasionally exhibit odd light streaks or lens flares.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Believers see vortexes as nodes where ley lines cross or where geomagnetic fields spiral. Skeptics highlight suggestibility, tourism marketing, and confirmation bias, though the subjective experiences remain powerful for many visitors.',
      },
    ],
  },
  {
    id: 'ev-73',
    name: 'Walking Cloud Patagonia',
    description: 'A low, compact cloud seen moving with apparent intention across Patagonian landscapes',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Witnesses describe a dense, sheep-sized cloud hugging the ground, weaving around rocks or shrubs as if navigating terrain, sometimes changing direction against the wind.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Few photographs exist; most accounts come from shepherds, trekkers, and remote residents. Meteorological explanations struggle with the cloud’s low altitude and coherent shape.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Candidates include rare ground fog vortices, steam from geothermal vents, or insects illuminated in mist. Stranger theories treat the walking cloud as an atmospheric organism or a mobile camouflage for something hidden within.',
      },
    ],
  },
  {
    id: 'ev-74',
    name: 'Will-o’-the-Wisp Lights',
    description: 'Mysterious wandering lights seen over marshes, graveyards, and lonely roads',
    categoryId: 'phenomena',
    icon: '⚡',
    sections: [
      {
        title: 'Patterns & Designs',
        content: 'Will-o’-the-wisps appear as small, floating lights that bob and drift just above the ground or water. Folklore says they lure travelers off safe paths into swamps, forests, or ravines.',
      },
      {
        title: 'Investigations & Evidence',
        content: 'Scientists have proposed bioluminescent insects, burning marsh gases, or electrical discharges. However, many witnesses describe lights that change color, respond to observers, or move in ways unlike drifting gas.',
      },
      {
        title: 'Theories & Explanations',
        content: 'Natural explanations include phosphine and methane ignition, St. Elmo’s fire, or misidentified vehicles. Paranormal interpretations see the lights as spirits, fae, elemental beings, or projections of residual psychic energy lingering in liminal places.',
      },
    ],
  },
];

export const getPhenomenaById = (id: string): PhenomenaTopic | undefined => {
  return phenomenaData.find(phenomena => phenomena.id === id);
};

export const getPhenomenaByName = (name: string): PhenomenaTopic | undefined => {
  return phenomenaData.find(phenomena => phenomena.name.toLowerCase() === name.toLowerCase());
};

/**
 * Get all phenomena topics
 * @returns Array of all phenomena topics
 */
export const getAllPhenomena = (): readonly PhenomenaTopic[] => {
  return phenomenaData;
};

/**
 * Get count of phenomena topics
 * @returns Total number of phenomena topics
 */
export const getPhenomenaCount = (): number => {
  return phenomenaData.length;
};
