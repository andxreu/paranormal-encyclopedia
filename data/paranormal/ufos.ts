
import { categoryColors } from '@/constants/Colors';

export interface TopicSection {
  title: string;
  content: string;
}

export interface UFOTopic {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  icon: string;
  sections: TopicSection[];
}

export const ufosData: UFOTopic[] = [
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
];

export const getUFOById = (id: string): UFOTopic | undefined => {
  return ufosData.find(ufo => ufo.id === id);
};

export const getUFOByName = (name: string): UFOTopic | undefined => {
  return ufosData.find(ufo => ufo.name.toLowerCase() === name.toLowerCase());
};
