
import { TopicSection } from './types';

export interface HauntedLocation {
  id: string;
  name: string;
  description: string;
  location: string;
  sections: TopicSection[];
}

export const hauntedLocationsData: HauntedLocation[] = [
  {
    id: 'hl-1',
    name: 'The Tower of London',
    description: 'One of the most haunted places in England, with centuries of dark history',
    location: 'London, England',
    sections: [
      {
        title: 'History',
        content: 'Built in 1066, the Tower of London has served as a royal palace, prison, and execution site. Its walls have witnessed countless tragedies, making it one of the most haunted locations in the world.',
      },
      {
        title: 'Famous Ghosts',
        content: 'Anne Boleyn, beheaded in 1536, is said to walk the grounds carrying her head. The Princes in the Tower, two young boys murdered in 1483, have been seen playing in the corridors.',
      },
      {
        title: 'Paranormal Activity',
        content: 'Guards and visitors report cold spots, phantom footsteps, and apparitions in period clothing. The White Tower is particularly active, with reports of a crushing sensation and overwhelming dread.',
      },
    ],
  },
  {
    id: 'hl-2',
    name: 'Eastern State Penitentiary',
    description: 'America\'s most haunted prison, where Al Capone once served time',
    location: 'Philadelphia, Pennsylvania',
    sections: [
      {
        title: 'Dark History',
        content: 'Opened in 1829, this revolutionary prison pioneered solitary confinement. Inmates were kept in complete isolation, leading to madness and despair. The prison closed in 1971 after 142 years of operation.',
      },
      {
        title: 'Reported Phenomena',
        content: 'Visitors report shadowy figures darting between cells, disembodied laughter echoing through cellblocks, and the feeling of being watched. Cell Block 12 is considered the most haunted area.',
      },
      {
        title: 'Al Capone\'s Cell',
        content: 'The infamous gangster claimed to be haunted by the ghost of James Clark, a victim of the St. Valentine\'s Day Massacre. Visitors to his cell report an oppressive atmosphere and unexplained sounds.',
      },
    ],
  },
  {
    id: 'hl-3',
    name: 'The Stanley Hotel',
    description: 'The inspiration for Stephen King\'s The Shining',
    location: 'Estes Park, Colorado',
    sections: [
      {
        title: 'Haunted History',
        content: 'Built in 1909 by F.O. Stanley, the hotel has been a hotbed of paranormal activity for over a century. Stephen King\'s stay in room 217 inspired his novel The Shining.',
      },
      {
        title: 'Room 217',
        content: 'The most haunted room in the hotel. Guests report items being moved, lights turning on and off, and the ghost of Elizabeth Wilson, a former housekeeper, making the bed and unpacking luggage.',
      },
      {
        title: 'The Concert Hall',
        content: 'Piano music plays by itself in the empty ballroom. The ghost of F.O. Stanley has been seen in the billiard room, and his wife Flora is heard playing the piano she loved in life.',
      },
    ],
  },
  {
    id: 'hl-4',
    name: 'Poveglia Island',
    description: 'Italy\'s forbidden island of death and madness',
    location: 'Venice, Italy',
    sections: [
      {
        title: 'Island of the Dead',
        content: 'Used as a quarantine station for plague victims in the 1700s, over 160,000 people died here. Their bodies were burned in mass graves, and the soil is said to be 50% human ash.',
      },
      {
        title: 'The Asylum',
        content: 'In 1922, a mental hospital was built on the island. The doctor performed cruel experiments on patients. He eventually went mad and threw himself from the bell tower, which still rings despite having no bell.',
      },
      {
        title: 'Current Status',
        content: 'The Italian government forbids public access. Fishermen refuse to fish nearby, claiming to pull up human bones. Visitors who have illegally entered report overwhelming feelings of dread and being pushed by unseen hands.',
      },
    ],
  },
  {
    id: 'hl-5',
    name: 'Aokigahara Forest',
    description: 'Japan\'s haunted suicide forest at the base of Mount Fuji',
    location: 'Mount Fuji, Japan',
    sections: [
      {
        title: 'The Sea of Trees',
        content: 'This dense forest is known as the most popular place for suicide in Japan. Over 500 people have taken their lives here since the 1950s. The forest is eerily quiet, with volcanic rock absorbing sound.',
      },
      {
        title: 'Paranormal Reports',
        content: 'Visitors report compasses malfunctioning due to magnetic anomalies in the volcanic rock. Many claim to hear whispers and see apparitions. Some feel an overwhelming urge to enter the forest and never return.',
      },
      {
        title: 'Yurei Spirits',
        content: 'According to Japanese folklore, the forest is haunted by yurei - angry spirits of those who died. They are said to lure living people deeper into the forest to join them in death.',
      },
    ],
  },
  {
    id: 'hl-6',
    name: 'The Catacombs of Paris',
    description: 'Underground ossuaries holding the remains of over 6 million people',
    location: 'Paris, France',
    sections: [
      {
        title: 'The Empire of the Dead',
        content: 'In the late 1700s, Paris\'s overflowing cemeteries were emptied into abandoned limestone quarries. The bones were arranged in elaborate patterns, creating walls of skulls and femurs stretching for miles.',
      },
      {
        title: 'Paranormal Activity',
        content: 'Visitors report being touched by invisible hands, hearing whispers in French, and seeing shadow figures moving between the bones. Some have become lost in unauthorized sections and were never found.',
      },
      {
        title: 'The Forbidden Zones',
        content: 'Only a small portion is open to the public. The rest is a labyrinth of tunnels where illegal explorers report time distortions, complete disorientation, and encounters with hooded figures.',
      },
    ],
  },
  {
    id: 'hl-7',
    name: 'Bhangarh Fort',
    description: 'India\'s most haunted place, forbidden after dark',
    location: 'Rajasthan, India',
    sections: [
      {
        title: 'The Curse',
        content: 'Legend says a sorcerer cursed the fort after Princess Ratnavati rejected him. He predicted the fort would be destroyed and all inhabitants would die without rebirth. The fort was soon abandoned after a battle.',
      },
      {
        title: 'Government Warning',
        content: 'The Archaeological Survey of India has posted signs forbidding entry after sunset and before sunrise. Those who have stayed overnight report being chased by unseen entities and hearing screams.',
      },
      {
        title: 'Reported Phenomena',
        content: 'Visitors experience sudden drops in temperature, feelings of being watched, and an overwhelming sense of dread. Many report their electronic devices malfunctioning or draining completely.',
      },
    ],
  },
  {
    id: 'hl-8',
    name: 'The Winchester Mystery House',
    description: 'A mansion built to confuse vengeful spirits',
    location: 'San Jose, California',
    sections: [
      {
        title: 'Sarah Winchester\'s Obsession',
        content: 'After a medium told Sarah Winchester she was cursed by victims of Winchester rifles, she began building continuously for 38 years. The house has stairs to nowhere, doors opening to walls, and secret passages.',
      },
      {
        title: 'Architectural Madness',
        content: 'The mansion has 160 rooms, 2,000 doors, 10,000 windows, 47 stairways, and 13 bathrooms. Many features incorporate the number 13, which Sarah believed would confuse evil spirits.',
      },
      {
        title: 'Hauntings',
        content: 'Staff and visitors report phantom footsteps, doorknobs turning by themselves, and the smell of chicken soup (Sarah\'s favorite). Cold spots and apparitions are common in the séance room.',
      },
    ],
  },
  {
    id: 'hl-9',
    name: 'Château de Brissac',
    description: 'France\'s tallest castle, home to the Green Lady',
    location: 'Brissac-Quincé, France',
    sections: [
      {
        title: 'The Green Lady',
        content: 'Charlotte de Brézé was murdered by her husband in the 15th century after he discovered her affair. Her ghost, dressed in green, appears in the tower room where she died, with gaping holes where her eyes and nose should be.',
      },
      {
        title: 'The Murder',
        content: 'Jacques de Brézé caught his wife with another man and killed them both. Charlotte\'s body was never properly buried, and her spirit is said to be trapped in the castle, moaning and searching for peace.',
      },
      {
        title: 'Modern Encounters',
        content: 'The current owners and guests report hearing moaning in the chapel tower at dawn. The Green Lady has been photographed multiple times, appearing as a green mist or a woman in a green dress.',
      },
    ],
  },
  {
    id: 'hl-10',
    name: 'The Ancient Ram Inn',
    description: 'England\'s most haunted house, built on a pagan burial ground',
    location: 'Wotton-under-Edge, England',
    sections: [
      {
        title: 'Dark History',
        content: 'Built in 1145 on a pagan burial ground and ley lines, the inn has witnessed devil worship, child sacrifice, and murder. The Bishop\'s Room is said to be a portal to another dimension.',
      },
      {
        title: 'Paranormal Activity',
        content: 'Over 20 spirits haunt the inn, including a murdered girl, a cavalier, a centurion, and a witch burned at the stake. Visitors report being pushed, scratched, and held down by unseen forces.',
      },
      {
        title: 'The Incubus',
        content: 'The most terrifying entity is an incubus demon that attacks women in their sleep. The former owner claimed to be dragged from his bed nightly and showed physical marks from the attacks.',
      },
    ],
  },
  {
    id: 'hl-11',
    name: 'Myrtles Plantation',
    description: 'One of America\'s most haunted homes, built on an Indian burial ground',
    location: 'St. Francisville, Louisiana',
    sections: [
      {
        title: 'The Legend of Chloe',
        content: 'A slave named Chloe was caught eavesdropping and had her ear cut off. In revenge, she poisoned a birthday cake, killing two children. She was hanged by other slaves, and her ghost still wanders the grounds.',
      },
      {
        title: 'The Mirror',
        content: 'A large mirror in the house is said to hold the spirits of Sara Woodruff and her children, who died from the poisoned cake. Handprints appear on the mirror that cannot be cleaned off.',
      },
      {
        title: 'Documented Hauntings',
        content: 'At least 12 ghosts haunt the plantation. Visitors report seeing a woman in a green turban, hearing children playing, and witnessing a man in formal attire descending the stairs before vanishing.',
      },
    ],
  },
  {
    id: 'hl-12',
    name: 'The Island of the Dolls',
    description: 'A nightmarish island covered in mutilated dolls',
    location: 'Xochimilco, Mexico',
    sections: [
      {
        title: 'Don Julián\'s Obsession',
        content: 'After finding a drowned girl in the 1950s, Don Julián Santana began hanging dolls in trees to appease her spirit. For 50 years, he collected thousands of dolls, many mutilated and decaying.',
      },
      {
        title: 'The Dolls Come Alive',
        content: 'Visitors report the dolls\' eyes following them, whispers coming from the dolls, and dolls moving their heads and limbs. Some claim to hear the dolls calling to them in children\'s voices.',
      },
      {
        title: 'Don Julián\'s Death',
        content: 'In 2001, Don Julián drowned in the same spot where he found the girl. Some believe the girl\'s spirit finally claimed him. The island remains a tourist attraction, with new dolls still being added.',
      },
    ],
  },
  {
    id: 'hl-13',
    name: 'Leap Castle',
    description: 'Ireland\'s most haunted castle, home to the Elemental',
    location: 'County Offaly, Ireland',
    sections: [
      {
        title: 'The Bloody Chapel',
        content: 'In 1532, one brother murdered another while he was conducting mass. The chapel is stained with his blood, which cannot be removed. It\'s considered one of the most evil places in Ireland.',
      },
      {
        title: 'The Elemental',
        content: 'The most terrifying entity is an Elemental - a non-human spirit that predates the castle. It appears as a hunched creature with decaying flesh and smells of rotting corpses and sulfur.',
      },
      {
        title: 'The Oubliette',
        content: 'A hidden dungeon was discovered filled with human skeletons impaled on wooden spikes. Prisoners were dropped through a trap door onto the spikes and left to die slowly. Their screams still echo.',
      },
    ],
  },
  {
    id: 'hl-14',
    name: 'The Queen Mary',
    description: 'The haunted ocean liner turned hotel',
    location: 'Long Beach, California',
    sections: [
      {
        title: 'Wartime Tragedy',
        content: 'During WWII, the Queen Mary accidentally rammed and sank the HMS Curacoa, killing 329 men. The ship also served as a troopship, where many soldiers died from illness and accidents.',
      },
      {
        title: 'The Pool',
        content: 'The first-class swimming pool is one of the most haunted areas. Visitors see wet footprints appearing, hear splashing when the pool is empty, and encounter the ghosts of two women who drowned there.',
      },
      {
        title: 'Engine Room 13',
        content: 'A 17-year-old crew member was crushed to death here. His ghost, dressed in blue coveralls, is frequently seen and photographed. Visitors report being touched and hearing his voice asking for help.',
      },
    ],
  },
  {
    id: 'hl-15',
    name: 'Hoia Baciu Forest',
    description: 'Romania\'s Bermuda Triangle, a forest where people vanish',
    location: 'Cluj-Napoca, Romania',
    sections: [
      {
        title: 'The Dead Zone',
        content: 'A circular clearing in the forest where nothing grows. Soil samples show no abnormalities, yet vegetation refuses to take root. Locals believe it\'s a portal to another dimension.',
      },
      {
        title: 'Disappearances',
        content: 'A shepherd and his 200 sheep vanished without a trace. A 5-year-old girl disappeared and reappeared 5 years later, wearing the same clothes and with no memory of where she\'d been.',
      },
      {
        title: 'Paranormal Phenomena',
        content: 'Visitors report UFO sightings, mysterious lights, faces appearing in photographs, electronic malfunctions, and feelings of being watched. Many develop unexplained rashes and anxiety after visiting.',
      },
    ],
  },
];

export const getHauntedLocationById = (id: string): HauntedLocation | undefined => {
  return hauntedLocationsData.find(location => location.id === id);
};

export const getHauntedLocationByName = (name: string): HauntedLocation | undefined => {
  return hauntedLocationsData.find(location => 
    location.name.toLowerCase() === name.toLowerCase()
  );
};
