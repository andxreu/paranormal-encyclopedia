
import { categoryColors } from '@/constants/Colors';
import { TopicSection } from './types';

export interface PhenomenaTopic {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  icon: string;
  sections: TopicSection[];
}

export const phenomenaData: PhenomenaTopic[] = [
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
];

export const getPhenomenaById = (id: string): PhenomenaTopic | undefined => {
  return phenomenaData.find(phenomena => phenomena.id === id);
};

export const getPhenomenaByName = (name: string): PhenomenaTopic | undefined => {
  return phenomenaData.find(phenomena => phenomena.name.toLowerCase() === name.toLowerCase());
};
