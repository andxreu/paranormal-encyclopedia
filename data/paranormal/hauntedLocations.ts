// data/paranormal/hauntedLocations.ts
/**
 * Haunted Locations Data
 * Famous haunted places from around the world
 * 
 * Includes castles, prisons, hotels, forests, and other paranormally active sites
 */

import type { TopicSection } from './types';

export type HauntingType =
  | 'Residual'
  | 'Intelligent'
  | 'Poltergeist'
  | 'Cursed Ground'
  | 'Portal'
  | 'Mixed';

export type VisitorAccess =
  | 'Open to public'
  | 'Guided tours only'
  | 'Restricted / No public access'
  | 'Museum / Historic site'
  | 'Hotel / Active accommodation';

export interface HauntedLocation {
  id: string;
  name: string;
  description: string;
  location: string;

  // 🔮 New metadata
  hauntingType: HauntingType;
  bestKnownFor: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  /**
   * For now, this is an AI image prompt string you can feed into your image gen pipeline.
   * Later, you can swap it to a static asset URL once you lock images in.
   */
  thumbnailPrompt: string;
  dangerRating: 1 | 2 | 3 | 4 | 5;        // Physical/psychic risk
  hauntingIntensity: 1 | 2 | 3 | 4 | 5;   // Reported activity level
  visitorAccess: VisitorAccess;

  sections: TopicSection[];
}


export const hauntedLocationsData: HauntedLocation[] = [
  {
    id: 'hl-1',
    name: 'The Tower of London',
    description: 'One of the most haunted places in England, with centuries of dark history',
    location: 'London, England',
    hauntingType: 'Mixed',
    bestKnownFor: 'Royal executions, headless apparitions, and centuries of residual anguish.',
    coordinates: {
      lat: 51.5081,
      lng: -0.0759,
    },
    thumbnailPrompt:
      'moody night view of the Tower of London under overcast skies, pale moonlight catching stone walls and turrets, faint ghostly silhouettes near the battlements, cinematic, high detail, desaturated tones with subtle cold blue highlights',
    dangerRating: 2,
    hauntingIntensity: 4,
    visitorAccess: 'Museum / Historic site',
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
    description: "America's most haunted prison, where Al Capone once served time",
    location: 'Philadelphia, Pennsylvania, USA',
    hauntingType: 'Poltergeist',
    bestKnownFor: 'Shadow figures in cellblocks and decades of documented prison hauntings.',
    coordinates: {
      lat: 39.9680,
      lng: -75.1720,
    },
    thumbnailPrompt:
      'abandoned gothic prison cellblock at dusk, peeling paint, rusted bars, long corridor receding into darkness, faint shadowy figure at the far end, atmospheric, gritty texture, cool muted colors',
    dangerRating: 3,
    hauntingIntensity: 5,
    visitorAccess: 'Museum / Historic site',
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
    description: "The inspiration for Stephen King's The Shining",
    location: 'Estes Park, Colorado, USA',
    hauntingType: 'Intelligent',
    bestKnownFor: 'Room 217, playful spirits, and the hotel that inspired The Shining.',
    coordinates: {
      lat: 40.3830,
      lng: -105.5190,
    },
    thumbnailPrompt:
      'grand historic mountain hotel at twilight, warm yellow windows glowing against dark blue sky, mist creeping across the grounds, subtle ghostly forms near the entrance, cinematic, high detail',
    dangerRating: 2,
    hauntingIntensity: 4,
    visitorAccess: 'Hotel / Active accommodation',
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
    description: "Italy's forbidden island of death and madness",
    location: 'Venice, Italy',
    hauntingType: 'Cursed Ground',
    bestKnownFor: 'Plague pits, asylum legends, and an overwhelming sense of dread.',
    coordinates: {
      lat: 45.3730,
      lng: 12.3190,
    },
    thumbnailPrompt:
      'small overgrown island in a foggy lagoon, crumbling brick buildings, dark cypress trees, low rolling mist, distant bell tower silhouette, eerie desaturated palette with hints of sickly green',
    dangerRating: 4,
    hauntingIntensity: 5,
    visitorAccess: 'Restricted / No public access',
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
    description: "Japan's haunted suicide forest at the base of Mount Fuji",
    location: 'Mount Fuji, Japan',
    hauntingType: 'Cursed Ground',
    bestKnownFor: 'Dense silence, lost travelers, and spirits of those who ended their lives.',
    coordinates: {
      lat: 35.4875,
      lng: 138.5950,
    },
    thumbnailPrompt:
      'dense dark forest with twisted trees and moss-covered roots, faint path disappearing into shadow, Mount Fuji barely visible through mist, somber color palette, subtle ghostly forms between trunks',
    dangerRating: 5,
    hauntingIntensity: 4,
    visitorAccess: 'Open to public',
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
    hauntingType: 'Residual',
    bestKnownFor: 'Miles of skull-lined tunnels and disembodied whispers in the dark.',
    coordinates: {
      lat: 48.8338,
      lng: 2.3324,
    },
    thumbnailPrompt:
      'narrow stone tunnel lined with stacked skulls and bones, dim candlelight casting long shadows, faint dust in the air, moody cinematic lighting, muted earthy tones',
    dangerRating: 3,
    hauntingIntensity: 4,
    visitorAccess: 'Museum / Historic site',
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
    description: "India's most haunted place, forbidden after dark",
    location: 'Rajasthan, India',
    hauntingType: 'Cursed Ground',
    bestKnownFor: 'A royal curse, government warning signs, and fear after sunset.',
    coordinates: {
      lat: 27.0955,
      lng: 76.2742,
    },
    thumbnailPrompt:
      'ruined stone fort in a dry Indian landscape at sunset, long shadows, ancient walls and arched gateways, distant hills, subtle haze, ominous yet beautiful atmosphere',
    dangerRating: 3,
    hauntingIntensity: 4,
    visitorAccess: 'Guided tours only',
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
    location: 'San Jose, California, USA',
    hauntingType: 'Intelligent',
    bestKnownFor: 'Stairs to nowhere, doors into walls, and restless energies.',
    coordinates: {
      lat: 37.3184,
      lng: -121.9500,
    },
    thumbnailPrompt:
      'large Victorian mansion with gables and stained glass under a moody sky, warm windows contrasting with long shadows, strange angles suggesting maze-like interior, cinematic, detailed',
    dangerRating: 2,
    hauntingIntensity: 3,
    visitorAccess: 'Museum / Historic site',
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
    description: "France's tallest castle, home to the Green Lady",
    location: 'Brissac-Quincé, France',
    hauntingType: 'Intelligent',
    bestKnownFor: 'The Green Lady with hollow eyes and mournful dawn moans.',
    coordinates: {
      lat: 47.3556,
      lng: -0.4489,
    },
    thumbnailPrompt:
      'elegant French château at dawn with a light mist over the grounds, soft golden stone walls, tall towers, faint greenish apparition near a high window, painterly and atmospheric',
    dangerRating: 2,
    hauntingIntensity: 3,
    visitorAccess: 'Museum / Historic site',
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
    description: "England's most haunted house, built on a pagan burial ground",
    location: 'Wotton-under-Edge, England',
    hauntingType: 'Mixed',
    bestKnownFor: 'Demonic encounters, pagan burial lore, and oppressive rooms.',
    coordinates: {
      lat: 51.6361,
      lng: -2.3453,
    },
    thumbnailPrompt:
      'crooked medieval stone inn at night, crooked roofline, small leaded windows glowing faintly, overgrown yard, subtle horned shadow shape in an upstairs window, dark and gritty',
    dangerRating: 4,
    hauntingIntensity: 5,
    visitorAccess: 'Guided tours only',
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
    description: "One of America's most haunted homes, built on an Indian burial ground",
    location: 'St. Francisville, Louisiana, USA',
    hauntingType: 'Mixed',
    bestKnownFor: 'The legend of Chloe, spirit-filled mirrors, and multiple resident ghosts.',
    coordinates: {
      lat: 30.8085,
      lng: -91.3150,
    },
    thumbnailPrompt:
      'southern plantation house at dusk with broad porch, moss-draped oak trees, lantern light glowing warmly, subtle ghostly figure near a large antique mirror, humid atmospheric lighting',
    dangerRating: 3,
    hauntingIntensity: 4,
    visitorAccess: 'Hotel / Active accommodation',
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
    hauntingType: 'Mixed',
    bestKnownFor: 'Thousands of hanging dolls said to move, whisper, and watch visitors.',
    coordinates: {
      lat: 19.2754,
      lng: -99.0957,
    },
    thumbnailPrompt:
      'canal island with tangled trees covered in dirty hanging dolls, cloudy sky, still dark water reflecting the dolls, eerie muted colors, unsettling yet detailed composition',
    dangerRating: 3,
    hauntingIntensity: 4,
    visitorAccess: 'Guided tours only',
    sections: [
      {
        title: "Don Julián's Obsession",
        content: 'After finding a drowned girl in the 1950s, Don Julián Santana began hanging dolls in trees to appease her spirit. For 50 years, he collected thousands of dolls, many mutilated and decaying.',
      },
      {
        title: 'The Dolls Come Alive',
        content: 'Visitors report the dolls\' eyes following them, whispers coming from the dolls, and dolls moving their heads and limbs. Some claim to hear the dolls calling to them in children\'s voices.',
      },
      {
        title: "Don Julián's Death",
        content: 'In 2001, Don Julián drowned in the same spot where he found the girl. Some believe the girl\'s spirit finally claimed him. The island remains a tourist attraction, with new dolls still being added.',
      },
    ],
  },
  {
    id: 'hl-13',
    name: 'Leap Castle',
    description: "Ireland's most haunted castle, home to the Elemental",
    location: 'County Offaly, Ireland',
    hauntingType: 'Mixed',
    bestKnownFor: 'The Bloody Chapel, a pit of bones, and the inhuman Elemental spirit.',
    coordinates: {
      lat: 53.0460,
      lng: -7.7970,
    },
    thumbnailPrompt:
      'ancient Irish stone castle on a low hill under a stormy sky, narrow windows, overgrown grounds, faint hunched shadowy figure near an upper window, moody green-gray palette',
    dangerRating: 4,
    hauntingIntensity: 5,
    visitorAccess: 'Guided tours only',
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
    location: 'Long Beach, California, USA',
    hauntingType: 'Mixed',
    bestKnownFor: 'Drowned passengers, haunted engine room, and a famously active pool.',
    coordinates: {
      lat: 33.7528,
      lng: -118.1893,
    },
    thumbnailPrompt:
      'large 20th-century ocean liner docked at night, portholes glowing warm light, low fog along the water, faint translucent figures on the deck, cinematic cool-blue atmosphere',
    dangerRating: 2,
    hauntingIntensity: 4,
    visitorAccess: 'Hotel / Active accommodation',
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
    description: "Romania's Bermuda Triangle, a forest where people vanish",
    location: 'Cluj-Napoca, Romania',
    hauntingType: 'Portal',
    bestKnownFor: 'The Dead Zone clearing, strange lights, and missing time.',
    coordinates: {
      lat: 46.7737,
      lng: 23.5056,
    },
    thumbnailPrompt:
      'mysterious Eastern European forest with a perfectly circular clearing, twisted trees surrounding it, faint glowing orbs in the air, greenish mist, surreal and uncanny atmosphere',
    dangerRating: 3,
    hauntingIntensity: 4,
    visitorAccess: 'Open to public',
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
  {
    id: 'hl-16',
    name: 'Edinburgh Castle',
    description: 'An ancient fortress layered with war, witch trials, and restless spirits',
    location: 'Edinburgh, Scotland',
    hauntingType: 'Mixed',
    bestKnownFor: 'Phantom pipers, headless drummers, and witch trial echoes.',
    coordinates: {
      lat: 55.9486,
      lng: -3.1999,
    },
    thumbnailPrompt:
      'dramatic medieval castle on a rocky hill at night, city lights below, low mist coiling around the walls, faint spectral soldier on the battlements, moody blue and amber tones',
    dangerRating: 2,
    hauntingIntensity: 3,
    visitorAccess: 'Museum / Historic site',
    sections: [
      {
        title: 'Bloody History',
        content: 'Perched on Castle Rock, Edinburgh Castle has been a royal residence, military stronghold, and prison for centuries. The esplanade outside was once an execution ground where hundreds of accused witches were burned at the stake. Wars, sieges, and political intrigue have soaked the site in trauma, giving fertile ground for ghost lore to thrive.',
      },
      {
        title: 'Famous Ghosts',
        content: 'Visitors and guides speak of the Lost Piper, who vanished in tunnels beneath the castle, his phantom bagpipes still heard deep below. A headless drummer is said to appear as a harbinger of danger, while a Grey Lady, often associated with a noblewoman or accused witch, has been reported by staff over many years. Prisoners from past wars are also said to linger in the dungeons, with cold spots and phantom touches frequently reported.',
      },
      {
        title: 'Modern Encounters',
        content: 'Paranormal investigators have documented sudden drops in temperature, disembodied footsteps, and unexplained shadows in locked areas. Some visitors report the smell of smoke or dung where no source can be found, echoing historic accounts of dungeon life and executions. Ghost walks and tours routinely collect new eyewitness stories, keeping the castle’s haunted reputation very much alive.',
      },
    ],
  },
  {
    id: 'hl-17',
    name: 'Gettysburg Battlefield',
    description: 'The blood-soaked Civil War battlefield where phantom soldiers still march',
    location: 'Gettysburg, Pennsylvania, USA',
    hauntingType: 'Residual',
    bestKnownFor: 'Ghostly regiments, phantom cannon fire, and battlefield echoes.',
    coordinates: {
      lat: 39.8300,
      lng: -77.2310,
    },
    thumbnailPrompt:
      'rolling rural battlefield at dawn with low mist, split-rail fences, Civil War cannons silhouetted, faint spectral soldiers visible through the fog, muted earthy tones',
    dangerRating: 2,
    hauntingIntensity: 4,
    visitorAccess: 'Museum / Historic site',
    sections: [
      {
        title: 'Battlefield of the Dead',
        content: 'In July 1863, Gettysburg saw one of the bloodiest battles of the American Civil War, with tens of thousands killed, wounded, or missing over three days. Fields, farms, and ridgelines became mass graves and field hospitals, leaving a deep psychic scar on the landscape. The National Military Park now preserves these grounds as both memorial and open-air graveyard.',
      },
      {
        title: 'Ghostly Soldiers',
        content: 'For over a century, witnesses have reported phantom regiments marching through the mist, the distant echo of drumbeats, and volleys of musket fire when no reenactments are scheduled. Apparitions of soldiers in ragged uniforms have been seen on Devil’s Den, Little Round Top, and near the Wheatfield, often vanishing when approached. Some park workers describe hearing whispered commands and the clatter of unseen artillery wheels.',
      },
      {
        title: 'Visitor Experiences',
        content: 'Tourists frequently capture anomalies in photographs—figures in period dress where no actors were present, or dense mists only in specific areas of a frame. Many describe sudden waves of sorrow or panic, as if reliving the terror of battle. Ghost tours and independent investigators treat Gettysburg as a cornerstone site for battlefield hauntings, reinforcing its status as one of America’s most paranormally active places.',
      },
    ],
  },
  {
    id: 'hl-18',
    name: 'Waverly Hills Sanatorium',
    description: 'A former tuberculosis hospital regarded as one of the world’s most haunted asylums',
    location: 'Louisville, Kentucky, USA',
    hauntingType: 'Poltergeist',
    bestKnownFor: 'The Death Tunnel, shadow figures, and relentless hospital hauntings.',
    coordinates: {
      lat: 38.1297,
      lng: -85.8241,
    },
    thumbnailPrompt:
      'massive abandoned brick sanatorium on a wooded hill at twilight, many dark windows, overgrown grounds, faint silhouettes in the windows, gritty horror atmosphere',
    dangerRating: 4,
    hauntingIntensity: 5,
    visitorAccess: 'Guided tours only',
    sections: [
      {
        title: 'Sanatorium of Suffering',
        content: 'Opened in 1910, Waverly Hills was built to treat tuberculosis patients during the “White Plague” era. Thousands are believed to have died here before antibiotics made such facilities obsolete, and the hospital closed in 1961. The building later stood abandoned, its decaying halls becoming a magnet for ghost hunters and urban explorers.',
      },
      {
        title: 'The Death Tunnel',
        content: 'A long underground passage, originally used to move supplies and later to discreetly transport bodies down the hill, is known today as the “body chute” or death tunnel. Visitors and investigators report disembodied voices, shadow figures, and the feeling of being followed in its darkness. Many believe the tunnel carries an imprint of the grief and fear that passed through it for decades.',
      },
      {
        title: 'Legendary Spirits',
        content: 'Stories from staff, guests, and TV investigations describe a small boy spirit nicknamed Timmy rolling a ball down the hallway, a nurse who allegedly died by suicide in Room 502, and a male figure seen watching from upper windows. EVPs, unexplained footsteps, and moving objects are commonly reported, and the site openly embraces its identity as a haunted hospital.',
      },
    ],
  },
  {
    id: 'hl-19',
    name: 'Fairmont Banff Springs Hotel',
    description: 'A grand railway hotel whose ghostly staff and tragic bride never checked out',
    location: 'Banff, Alberta, Canada',
    hauntingType: 'Intelligent',
    bestKnownFor: 'Sam the bellman and the spectral bride on the staircase.',
    coordinates: {
      lat: 51.1679,
      lng: -115.5659,
    },
    thumbnailPrompt:
      'castle-like grand hotel in the Canadian Rockies at dusk, lights glowing warmly, mountains and evergreens surrounding it, faint translucent bride on a stone staircase, cinematic and majestic',
    dangerRating: 1,
    hauntingIntensity: 3,
    visitorAccess: 'Hotel / Active accommodation',
    sections: [
      {
        title: 'Mountain Grand Dame',
        content: 'Opened in the late 19th century by the Canadian Pacific Railway, the Fairmont Banff Springs Hotel overlooks the Canadian Rockies like a castle. Over decades of continuous operation, it has hosted royalty, celebrities, and ordinary travelers. Alongside its prestige, stories of lingering spirits have become part of the hotel’s identity.',
      },
      {
        title: 'Sam the Bellman',
        content: 'One of the most beloved tales centers on Sam McAuley, a longtime bellman who reportedly promised to return after death. Guests claim an elderly bellman in an old-fashioned uniform helps with locked doors or luggage, only to vanish when thanked. Staff stories about “Sam” have circulated since the 1970s, reinforcing the idea of a friendly resident ghost who still takes pride in his work.',
      },
      {
        title: 'The Ghost Bride',
        content: 'Another enduring legend speaks of a bride who died on a staircase before her wedding reception, sometimes said to have tripped, others suggesting a brush with open flame. Witnesses report seeing a woman in a wedding gown on the stairs or in the ballroom, often fading mid-step. The hotel acknowledges these stories in its own lore, and paranormal-themed tours frequently feature the Bride and Sam as key spirits.',
      },
    ],
  },
  {
    id: 'hl-20',
    name: 'Monte Cristo Homestead',
    description: 'A Victorian manor often called Australia’s most haunted house',
    location: 'Junee, New South Wales, Australia',
    hauntingType: 'Mixed',
    bestKnownFor: 'Layered family tragedies and a domineering matriarch said to rule in death.',
    coordinates: {
      lat: -35.1191,
      lng: 147.5814,
    },
    thumbnailPrompt:
      'isolated Victorian manor house on a hill at night, iron fence in foreground, stars faintly visible, warm light in a single upper window, ghostly figure at balcony, moody cinematic style',
    dangerRating: 3,
    hauntingIntensity: 4,
    visitorAccess: 'Museum / Historic site',
    sections: [
      {
        title: 'Isolated Manor',
        content: 'Built in 1885 by pastoralist Christopher Crawley, Monte Cristo Homestead crowns a hill above the railway town of Junee. The Crawley family lived here until the mid-20th century, and later owners restored the house and opened it to the public. Over time, its tragic stories and eerie reputation earned it the title of “Australia’s most haunted house.”',
      },
      {
        title: 'Tragedies and Tales',
        content: 'Accounts tied to the house include the death of a maid who reportedly fell—or was pushed—from a balcony, a stable boy burned in a fire, and a child dropped down stairs. Later caretakers and owners reported animal mutilations and unsettling activity coinciding with renovations. While details vary between tellings, locals and visitors agree the homestead carries an unusually heavy atmosphere.',
      },
      {
        title: 'Hauntings Reported',
        content: 'Guests and investigators describe full-body apparitions, icy cold spots, and the sensation of being watched from darkened doorways. A stern female figure, often identified as Mrs. Crawley, is said to enforce strict rules even in death, while a timid child spirit and a hostile male presence are also reported. Tours, TV features, and recent news coverage continue to treat Monte Cristo as a key Australian haunt.',
      },
    ],
  },
  {
    id: 'hl-21',
    name: 'Lizzie Borden House',
    description: 'The infamous crime scene turned haunted inn',
    location: 'Fall River, Massachusetts, USA',
    hauntingType: 'Mixed',
    bestKnownFor: 'The 1892 axe murders and ongoing activity in the family bedrooms.',
    coordinates: {
      lat: 41.6987,
      lng: -71.1551,
    },
    thumbnailPrompt:
      'modest 19th-century New England house on a street corner, green clapboard siding, dim porch light at dusk, faint bloody handprint impression on an upstairs window, eerie yet grounded atmosphere',
    dangerRating: 2,
    hauntingIntensity: 4,
    visitorAccess: 'Hotel / Active accommodation',
    sections: [
      {
        title: 'Axe Murder Mystery',
        content: 'On August 4, 1892, Andrew and Abby Borden were found brutally killed in their home, struck multiple times with a sharp implement commonly believed to be an axe. Their daughter Lizzie Borden was tried and acquitted, and the case became one of America’s most debated unsolved murders. The house now operates as a museum and inn dedicated to both true crime history and reported hauntings.',
      },
      {
        title: 'Residual Echoes',
        content: 'Guests who stay in the former family bedrooms report disembodied footsteps on the stairs, phantom weeping, and voices heard in empty rooms. Some claim to smell freshly ironed linen or detect cold drafts where there should be none. The room where Abby Borden’s body was discovered is often described as the most oppressive space in the house.',
      },
      {
        title: 'Spirits of the Bordens',
        content: 'Paranormal investigators have recorded EVPs answering to “Lizzie” and “Abby,” along with unexplained knocks corresponding to questions. Shadow figures are reported in the parlor where Andrew was killed, and objects occasionally move on their own during overnight investigations. Whether one believes Lizzie was guilty or innocent, many visitors feel that the family’s story is still playing out in the house.',
      },
    ],
  },
  {
    id: 'hl-22',
    name: 'St. Augustine Lighthouse',
    description: 'A working lighthouse bound to tales of lost keepers and playful child spirits',
    location: 'St. Augustine, Florida, USA',
    hauntingType: 'Mixed',
    bestKnownFor: 'Laughing children on the stairs and a shadowed keeper in the lantern room.',
    coordinates: {
      lat: 29.8850,
      lng: -81.2880,
    },
    thumbnailPrompt:
      'tall striped lighthouse at twilight near the sea, light beam cutting through mist, iron spiral staircase visible inside, faint childlike silhouette on the steps, coastal haunted vibe',
    dangerRating: 2,
    hauntingIntensity: 4,
    visitorAccess: 'Museum / Historic site',
    sections: [
      {
        title: 'Beacon on the Coast',
        content: 'The current St. Augustine Lighthouse tower dates to the 1870s, built to guide ships off Florida’s historic coast. Construction accidents and maritime disasters in the surrounding waters have tied the light station to loss and folklore. Today it functions as both active aid to navigation and museum site.',
      },
      {
        title: 'The Pittee Children',
        content: 'Historical accounts tell of children from the construction superintendent’s family who played on a work cart used at the site. According to local lore, the cart rolled into the water, and at least one daughter drowned in the accident. Many visitors and staff report hearing children’s laughter on the staircase, seeing small figures dart past landings, or catching glimpses of a girl in Victorian clothing near the tower.',
      },
      {
        title: 'Keepers and Shadows',
        content: 'Reports also describe a shadowy figure in a keeper’s uniform watching from the lantern room or walking the grounds at night. Sudden cold spots, the smell of cigar smoke, and unexplained footsteps on metal stairs are common experiences during ghost tours. The lighthouse openly embraces its haunted reputation, collecting new stories from guests who come seeking the spirits of the coast.',
      },
    ],
  },
  {
    id: 'hl-23',
    name: 'Chillingham Castle',
    description: 'A medieval stronghold famed as one of England’s most haunted castles',
    location: 'Northumberland, England',
    hauntingType: 'Mixed',
    bestKnownFor: 'The Radiant Boy and a roster of noble, soldier, and lady spirits.',
    coordinates: {
      lat: 55.5255,
      lng: -1.9192,
    },
    thumbnailPrompt:
      'imposing medieval stone castle with towers and battlements, moody overcast sky, faint blueish childlike apparition in an upper window, surrounding trees and lawn, cinematic gothic feel',
    dangerRating: 3,
    hauntingIntensity: 4,
    visitorAccess: 'Hotel / Active accommodation',
    sections: [
      {
        title: 'Medieval Fortress',
        content: 'Chillingham Castle dates back to at least the 12th century and served as a border stronghold between England and Scotland. It has witnessed sieges, political intrigue, and long periods of military tension. In modern times the castle has been restored and opened to the public, with ghost tours as a key attraction.',
      },
      {
        title: 'The Radiant Boy',
        content: 'The best-known spirit here is the Radiant Boy, or Blue Boy, said to appear in a bedroom once associated with the castle’s nobility. Historic tales describe cries and the glow of a child’s form emerging from within the thick stone walls. During renovations, human remains were reportedly discovered in a wall cavity, echoing the old stories and further cementing the legend.',
      },
      {
        title: 'Other Spirits',
        content: 'Visitors and staff report encounters with a Lady in White believed to be Lady Mary Berkeley, footsteps on empty staircases, and disembodied whispers in stone corridors. Paranormal TV shows and investigators have featured the castle frequently, citing spikes in EMF readings, unexplained knocks, and moving objects. Chillingham actively leans into its haunted identity, inviting guests to sleep among its spectres.',
      },
    ],
  },
  {
    id: 'hl-24',
    name: 'Port Arthur Historic Site',
    description: 'A former convict settlement where ghost tours walk through lingering sorrow',
    location: 'Tasman Peninsula, Tasmania, Australia',
    hauntingType: 'Residual',
    bestKnownFor: 'Convict-era echoes and heavy emotion in the Separate Prison and asylum.',
    coordinates: {
      lat: -43.1488,
      lng: 147.8527,
    },
    thumbnailPrompt:
      'ruins of a large sandstone penal settlement near the water, mist in the distance, dimly lit windows in remaining buildings, hint of ghostly figures on a path, somber historical mood',
    dangerRating: 2,
    hauntingIntensity: 3,
    visitorAccess: 'Museum / Historic site',
    sections: [
      {
        title: 'Convict Colony',
        content: 'Established in the 19th century, Port Arthur served as a penal settlement for transported convicts, including repeat offenders and boys held in a separate juvenile prison. Harsh discipline, isolation, and a history of escape attempts shaped its reputation. The site later saw tragedy again in the 1996 Port Arthur massacre, adding a modern layer of grief.',
      },
      {
        title: 'Ghost Tours After Dark',
        content: 'Today, nightly lantern-lit ghost tours guide visitors through cell blocks, the Separate Prison, and ruined cottages. Guides share centuries of recorded experiences, from unexplained footsteps to apparitions in doorways and windows. Stories of convicts who died in solitary confinement and officers who never left their posts are central to the site’s lore.',
      },
      {
        title: 'Haunted Buildings',
        content: 'Participants in these tours report sudden nausea, intense cold patches, and the feeling of being watched, particularly in the Separate Prison and old asylum. Some describe seeing figures dressed in 19th-century clothing walking along paths or disappearing through walls. The combination of documented history and ongoing reports makes Port Arthur one of Australia’s most studied haunted heritage sites.',
      },
    ],
  },
  {
    id: 'hl-25',
    name: 'Whaley House',
    description: 'A historic San Diego home known as one of America’s most haunted houses',
    location: 'San Diego, California, USA',
    hauntingType: 'Mixed',
    bestKnownFor: 'Yankee Jim’s footsteps and Whaley family spirits in a former gallows site home.',
    coordinates: {
      lat: 32.7530,
      lng: -117.1943,
    },
    thumbnailPrompt:
      'two-story 19th-century house with balcony in an old town street, warm lamplight, night sky above, faint transparent figure on the balcony rail, historic western-town atmosphere',
    dangerRating: 2,
    hauntingIntensity: 4,
    visitorAccess: 'Museum / Historic site',
    sections: [
      {
        title: 'House on the Gallows Site',
        content: 'Built in the 1850s by Thomas Whaley, the house stands on land once used for public executions in early San Diego. The Whaley family lived, celebrated, and mourned here—several family members died in or around the home over the decades. The property later became a courthouse, theater, and museum, layering many different lives into its walls.',
      },
      {
        title: 'Yankee Jim and the Whaleys',
        content: 'Local lore holds that the ghost of “Yankee Jim” Robinson, a man hanged on the site before the house was built, still paces the floors. Guests and guides report heavy booted footsteps, rattling chains, and the sound of someone struggling to breathe. Apparitions of Whaley family members are also reported, particularly a woman in period dress and a young girl seen near stairways.',
      },
      {
        title: 'Paranormal Reports',
        content: 'Staff describe cold spots, doors opening and closing on their own, and the smell of cigar smoke in empty rooms. Ghost tours and investigative teams have recorded EVPs responding to questions and captured light anomalies inside the courtroom and parlor. The Whaley House is officially promoted as a haunted landmark, and visitors routinely leave with fresh stories.',
      },
    ],
  },
  {
    id: 'hl-26',
    name: 'Old Changi Hospital',
    description: 'A derelict hilltop hospital regarded as Singapore’s most haunted site',
    location: 'Changi, Singapore',
    hauntingType: 'Mixed',
    bestKnownFor: 'Abandoned wards, rumored wartime suffering, and shadowy apparitions.',
    coordinates: {
      lat: 1.3646,
      lng: 103.9821,
    },
    thumbnailPrompt:
      'abandoned concrete hospital building at night, broken windows, jungle foliage encroaching, pale greenish light in one window, faint shadow figure in a corridor, humid urban-decay horror vibe',
    dangerRating: 3,
    hauntingIntensity: 4,
    visitorAccess: 'Restricted / No public access',
    sections: [
      {
        title: 'War and Hospital Wards',
        content: 'Old Changi Hospital originated as a military facility near British barracks and later served as a general hospital. During World War II, the area around Changi became infamous as a prisoner-of-war center under Japanese occupation. Stories persist that parts of the complex were used for interrogation and suffering, though details are often reconstructed from fragmentary accounts and local lore.',
      },
      {
        title: 'Shadow Figures and Soldiers',
        content: 'Urban explorers and local residents tell of apparitions of soldiers patrolling the corridors, sometimes headless or badly wounded. A small boy is said to sit silently in a corner or stairwell, vanishing when approached. Dark humanoid shapes—“shadow people”—are frequently reported in photographs and video captured in the empty wards.',
      },
      {
        title: 'Modern Urban Legend',
        content: 'Loud bangs, sudden temperature drops, and electronic glitches plague many visitors who sneak onto the grounds despite official restrictions. The hospital has inspired films, documentaries, and online investigations that treat it as a cornerstone of Singaporean ghost culture. Even people who dismiss some of the legends often acknowledge an uncanny heaviness in the abandoned complex.',
      },
    ],
  },
  {
    id: 'hl-27',
    name: 'Greyfriars Kirkyard',
    description: 'A historic Edinburgh graveyard feared for its violent poltergeist',
    location: 'Edinburgh, Scotland',
    hauntingType: 'Poltergeist',
    bestKnownFor: 'The Mackenzie Poltergeist and reports of physical scratches and bruises.',
    coordinates: {
      lat: 55.9473,
      lng: -3.1910,
    },
    thumbnailPrompt:
      'old stone graveyard at night with leaning tombstones, gothic tombs, faint lantern light, looming mausoleum in background, suggestion of a dark figure in a doorway, cold blue-gray color palette',
    dangerRating: 4,
    hauntingIntensity: 5,
    visitorAccess: 'Museum / Historic site',
    sections: [
      {
        title: 'Covenanters and “Bluidy Mackenzie”',
        content: 'Greyfriars Kirkyard dates back to the 16th century and holds the graves of many notable Scots. Part of the grounds, the Covenanters’ Prison, once confined religious dissidents under brutal conditions. Buried nearby is Sir George Mackenzie, a powerful lawyer nicknamed “Bluidy Mackenzie” for his harsh role in their persecution.',
      },
      {
        title: 'The Mackenzie Poltergeist',
        content: 'Since a reported disturbance in Mackenzie’s mausoleum in the late 20th century, visitors have described aggressive paranormal activity focused around his tomb. Tour operators and local records cite hundreds of reports of scratches, bites, bruises, fainting, and sudden panic after encounters near the “Black Mausoleum.” Many interpret this as evidence of an unusually strong, possibly non-human poltergeist presence.',
      },
      {
        title: 'Haunted Reputation',
        content: 'The activity grew so notorious that city officials locked parts of the kirkyard, allowing access only through supervised tours. Photos taken here often show unexplained mist, faces, or dark forms near the tombs. Greyfriars is now widely considered one of the most active graveyard haunts in Europe, blending documented religious history with modern accounts of attacks.',
      },
    ],
  },
  {
    id: 'hl-28',
    name: 'Raynham Hall',
    description: 'An English country house famous for the Brown Lady ghost photograph',
    location: 'Norfolk, England',
    hauntingType: 'Residual',
    bestKnownFor: 'The 1936 Brown Lady staircase photograph and an enduring lady-in-brown legend.',
    coordinates: {
      lat: 52.8082,
      lng: 0.7369,
    },
    thumbnailPrompt:
      'elegant English country house interior, grand wooden staircase with carved banister, soft warm lighting, translucent female figure in a brown dress descending the stairs, classic ghost-photograph homage',
    dangerRating: 1,
    hauntingIntensity: 3,
    visitorAccess: 'Guided tours only',
    sections: [
      {
        title: 'Stately Home with Dark Stories',
        content: 'Raynham Hall has been home to the Townshend family since the 17th century and is tied to early British political history. Behind its refined façade, legends speak of heartbreak, isolation, and family scandal. The most enduring tale involves Lady Dorothy Walpole, sister of Britain’s first prime minister, Robert Walpole.',
      },
      {
        title: 'The Brown Lady',
        content: 'According to tradition, Dorothy was confined to the house after a scandal and died there under unhappy circumstances. Her spirit, clad in a brown brocade dress, is said to wander the staircase and halls with hollow or shadowed eyes. In 1936, a staircase photograph published in Country Life magazine appeared to show a translucent figure descending the steps, becoming one of the most famous ghost images ever printed.',
      },
      {
        title: 'Ongoing Sightings',
        content: 'Subsequent generations of family, staff, and guests have reported a female figure in brown, sudden chills, and the feeling of being watched on the main staircase. Skeptics debate the famous photograph, but believers consider it rare visual proof of a haunting. Raynham Hall’s Brown Lady remains a central figure in English ghost lore and paranormal research.',
      },
    ],
  },
  {
    id: 'hl-29',
    name: 'Himeji Castle and Okiku’s Well',
    description: 'A pristine Japanese castle bound to the tragic ghost of Okiku',
    location: 'Himeji, Hyōgo Prefecture, Japan',
    hauntingType: 'Residual',
    bestKnownFor: 'Okiku’s endless counting from the well and the Banchō Sarayashiki legend.',
    coordinates: {
      lat: 34.8394,
      lng: 134.6939,
    },
    thumbnailPrompt:
      'white Japanese castle on a hill under a calm evening sky, cherry trees in soft bloom, stone well in the foreground with dark water, subtle impression of a pale woman near the well, serene yet eerie',
    dangerRating: 1,
    hauntingIntensity: 3,
    visitorAccess: 'Museum / Historic site',
    sections: [
      {
        title: 'Castle on the Hill',
        content: 'Himeji Castle, often called the “White Heron Castle,” is a UNESCO World Heritage Site and one of Japan’s best-preserved feudal castles. Its elegant white walls conceal centuries of political tension, alliances, and war. Within its grounds lies a stone well associated with one of Japan’s most enduring ghost stories.',
      },
      {
        title: 'The Tale of Okiku',
        content: 'According to the Banchō Sarayashiki legend, a servant named Okiku was falsely accused of losing one of ten precious dishes after uncovering a plot against her lord. Refusing her master’s advances or bribes, she was killed and thrown into a well. Her ghost is said to rise at night, counting plates—“one, two, three…”—and screaming when she reaches the missing dish.',
      },
      {
        title: 'Haunted Well',
        content: 'Visitors today can see “Okiku’s Well” on the castle grounds, where some claim to hear faint counting or sobbing after dark. The story has inspired plays, prints, and modern horror films, anchoring the well as a genuine pilgrimage site for ghost enthusiasts. Whether heard physically or only in the mind, many people describe a heavy sadness radiating from the stones.',
      },
    ],
  },
  {
    id: 'hl-30',
    name: 'LaLaurie Mansion',
    description: 'New Orleans’ most notorious haunted house of cruelty and unrest',
    location: 'New Orleans, Louisiana, USA',
    hauntingType: 'Mixed',
    bestKnownFor: 'The exposed atrocities of Madame LaLaurie and restless enslaved spirits.',
    coordinates: {
      lat: 29.9584,
      lng: -90.0644,
    },
    thumbnailPrompt:
      'elegant three-story French Quarter mansion at night, wrought-iron balconies, gaslamp glow on cobblestone street, faint shadowy figures at upper windows, heavy atmospheric New Orleans mood',
    dangerRating: 4,
    hauntingIntensity: 4,
    visitorAccess: 'Restricted / No public access',
    sections: [
      {
        title: 'House of Horrors',
        content: 'In the 1830s, socialite Delphine LaLaurie lived at this Royal Street residence in the French Quarter. In 1834, a fire led neighbors and authorities to discover enslaved people in horrific conditions, sparking public outrage. A mob ransacked the home, and the LaLaurie family fled, leaving behind a legacy of documented abuse and unanswered questions about the full extent of the crimes.',
      },
      {
        title: 'Spirits of the Enslaved',
        content: 'For generations, residents and passersby have reported anguished cries, chains rattling, and apparitions of wounded or bound individuals at windows and in corridors. Many locals and guides believe the ghosts of those who suffered here remain, unable to move on from the trauma they experienced. The mansion’s dark past makes it a focal point in discussions about haunted sites tied to real historical atrocities.',
      },
      {
        title: 'Modern Lore',
        content: 'The building has changed hands many times, and stories claim that subsequent owners and tenants were driven away by relentless paranormal activity. Cold spots, phantom footsteps on upper floors, and shadowy figures on balconies are frequently described. Ghost tours treat LaLaurie Mansion as one of New Orleans’ most powerful—and ethically sobering—haunts, emphasizing respect for the people whose lives were destroyed there.',
      },
    ],
  },
  {
    id: 'hl-31',
    name: '1886 Crescent Hotel',
    description: 'A Victorian resort-turned-cancer hospital now known as “America’s most haunted hotel”',
    location: 'Eureka Springs, Arkansas, USA',
    hauntingType: 'Mixed',
    bestKnownFor: 'Rooms, morgue, and corridors haunted by cancer patients and construction workers',
    coordinates: {
      lat: 36.4083,
      lng: -93.7374,
    },
    thumbnailPrompt:
      'Cinematic night photo of a Victorian hilltop hotel in the Ozark mountains, warm windows glowing, mist creeping along stone terraces, subtle ghostly silhouettes in upper windows, moody teal and amber color grade',
    dangerRating: 3,
    hauntingIntensity: 4,
    visitorAccess: 'Hotel / Active accommodation',
    sections: [
      {
        title: 'From Resort to “Hospital”',
        content:
          'Built in 1886 as a luxury mountain resort, the Crescent Hotel later went through several lives, including a 1930s stint as a so-called cancer hospital run by Norman Baker, a radio showman with no medical license. Patients traveled from across the country for miracle cures and instead faced unproven treatments, false hope, and in many cases, death within the building.',
      },
      {
        title: 'Resident Spirits',
        content:
          'Guests and staff frequently report an Irish stonemason thought to have fallen from the roof during construction, especially around Room 218, where footsteps, banging, and the sensation of someone sitting on the bed are common. Apparitions believed to be former patients, nurses, and Baker’s staff have also been reported wandering hallways, peering from windows, and appearing briefly in mirrors.',
      },
      {
        title: 'Ghost Tours and Evidence',
        content:
          'The Crescent openly leans into its reputation as “America’s most haunted hotel,” offering nightly ghost tours that descend into the old morgue. Paranormal groups have documented EVPs, unexplained shadows, temperature anomalies, and moving objects. Even skeptical visitors often admit certain corridors and stairwells feel charged, as if the building remembers its darkest years.',
      },
    ],
  },
  {
    id: 'hl-32',
    name: 'Dublin Hellfire Club',
    description: 'A ruined hunting lodge tied to occult legends, cursed stones, and demonic card games',
    location: 'Montpelier Hill, Dublin Mountains, Ireland',
    hauntingType: 'Cursed Ground',
    bestKnownFor: 'Stories of a cloven-hoofed stranger and sinister rituals in a hilltop lodge',
    coordinates: {
      lat: 53.1853,
      lng: -6.3300,
    },
    thumbnailPrompt:
      'Nighttime view of a ruined stone lodge on a windswept hill, dark clouds, faint red glow from empty windows, shadowy horned silhouette inside, cinematic horror atmosphere',
    dangerRating: 4,
    hauntingIntensity: 4,
    visitorAccess: 'Open to public',
    sections: [
      {
        title: 'Lodge on the Hill',
        content:
          'Built around 1725 as a hunting lodge, the structure sits on Montpelier Hill overlooking Dublin. Local tradition says stones from an ancient burial cairn were reused in the walls, disturbing whatever forces were bound to the site. In the 18th century the building became associated with the Hellfire Club, a notorious group rumored to indulge in blasphemy, heavy drinking, and alleged occult rites.',
      },
      {
        title: 'Demonic Guest Legends',
        content:
          'One enduring tale describes a mysterious stranger joining a card game, only for a dropped card to reveal his cloven hooves beneath the table. Realizing they were playing with something inhuman, the participants watched him vanish in fire and sulfur. Stories also tell of a gigantic black cat with burning eyes, phantom screams, and violent poltergeist activity during gatherings.',
      },
      {
        title: 'Haunted Ruins',
        content:
          'Today, the roofless lodge attracts hikers by day and paranormal seekers by night. Visitors report sudden cold gusts in otherwise still air, shadow figures moving among the broken walls, and an uncanny sense of being watched from the tree line. Modern ghost tours and investigators consider the Hellfire Club one of Ireland’s classic intersections of dark legend, disturbed ground, and persistent hauntings.',
      },
    ],
  },
  {
    id: 'hl-33',
    name: 'The White House',
    description: 'The seat of U.S. power where presidents and first ladies are still said to walk at night',
    location: 'Washington, D.C., USA',
    hauntingType: 'Intelligent',
    bestKnownFor: 'Apparitions of Abraham Lincoln and other former residents seen by staff and dignitaries',
    coordinates: {
      lat: 38.897957,
      lng: -77.03656,
    },
    thumbnailPrompt:
      'Night shot of the White House North Lawn, soft moonlight, a faint transparent figure at an upstairs window, subtle cinematic lighting, realistic style',
    dangerRating: 1,
    hauntingIntensity: 2,
    visitorAccess: 'Museum / Historic site',
    sections: [
      {
        title: 'Historic Mansion',
        content:
          'The White House has been the residence and workplace of U.S. presidents since 1800. Wars, assassinations, high-stakes decisions, and personal tragedies have all unfolded within its walls. With that much emotional weight compressed into one building, it is unsurprising that ghost stories have followed the mansion through its history.',
      },
      {
        title: 'Presidential Apparitions',
        content:
          'Accounts from staff, Secret Service personnel, and visiting dignitaries describe the spirit of Abraham Lincoln pacing halls, knocking on doors, or looking pensively out a window. Other stories involve Dolley Madison guarding the Rose Garden, Andrew Jackson raging in his former bedroom, and disembodied footsteps echoing through otherwise empty corridors late at night.',
      },
      {
        title: 'Haunted Corridors',
        content:
          'Reports include unexplained knocking, cold spots in specific rooms, and the sensation of someone standing just behind you. Some first families have quietly acknowledged strange experiences while in residence. For investigators and paranormal enthusiasts, the White House represents a rare blend of political history and active ghost lore, even if official statements tend to stay neutral.',
      },
    ],
  },
  {
    id: 'hl-34',
    name: 'Versailles Grounds & Time-Slip Encounters',
    description: 'The palace and gardens of Versailles, linked to royal echoes and a famous time-slip case',
    location: 'Versailles, Île-de-France, France',
    hauntingType: 'Residual',
    bestKnownFor: 'The Moberly–Jourdain “time slip” and sightings of figures from Marie Antoinette’s era',
    coordinates: {
      lat: 48.8047,
      lng: 2.1218,
    },
    thumbnailPrompt:
      'Twilight view of the Palace of Versailles gardens, long shadows, faint translucent figures in 18th-century dress near a hedge, soft golden and blue tones',
    dangerRating: 1,
    hauntingIntensity: 2,
    visitorAccess: 'Museum / Historic site',
    sections: [
      {
        title: 'Palace and Revolt',
        content:
          'Once the center of French royal life, Versailles hosted lavish ceremonies, court intrigues, and the daily ritual of monarchy right up until the French Revolution. The palace and its grounds witnessed the rise and fall of kings and queens, with the emotional shock of that collapse leaving deep marks on the national psyche.',
      },
      {
        title: 'The Moberly–Jourdain Incident',
        content:
          'In 1901, two English academics, Charlotte Anne Moberly and Eleanor Jourdain, reported experiencing what they believed was a slip back in time while walking the grounds. They described muffled sounds, odd lighting, and people in old-fashioned clothing, including a woman sketching whom they later associated with Marie Antoinette. Their account, published as “An Adventure,” has become one of the most famous alleged time-slip or haunting cases in Europe.',
      },
      {
        title: 'Lingering Royal Shadows',
        content:
          'Modern visitors sometimes report seeing figures in 18th-century dress moving through the gardens, catching music that seems to vanish mid-note, or feeling sudden melancholy in seemingly peaceful spots. While Versailles presents itself first as a world-class historical monument, quiet stories from staff and guests keep its reputation as a place where the past occasionally bleeds into the present.',
      },
    ],
  },
  {
    id: 'hl-35',
    name: 'Bodmin Jail',
    description: 'A grim Cornish prison where executed inmates and wardens are said to walk the halls',
    location: 'Bodmin, Cornwall, England',
    hauntingType: 'Poltergeist',
    bestKnownFor: 'Ghostly activity in former execution areas and cells now open to visitors',
    coordinates: {
      lat: 50.4735,
      lng: -4.7274,
    },
    thumbnailPrompt:
      'Interior of a crumbling stone prison with iron bars, dim lantern light, mist in the corridor, faint shadowy figure at the far end, cinematic horror look',
    dangerRating: 3,
    hauntingIntensity: 4,
    visitorAccess: 'Museum / Historic site',
    sections: [
      {
        title: 'Prison on the Moor',
        content:
          'Built in the late 18th century on the edge of Bodmin Moor, Bodmin Jail served as a county prison for nearly 150 years. Men, women, and children were incarcerated here for everything from petty theft to murder. Public executions on the grounds drew large crowds, and the stories of those final days have been preserved in both official records and local memory.',
      },
      {
        title: 'Ghosts of the Condemned',
        content:
          'Reports focus heavily on the spirits of the executed—frightened thieves, desperate murderers, and others who faced the noose. Visitors describe the sound of iron chains dragging across stone, cell doors slamming shut on their own, and whispers that seem to come from within the walls. Apparitions in tattered clothing have been seen near former gallows sites and in the old cell blocks.',
      },
      {
        title: 'Modern Investigations',
        content:
          'Now operating as a heritage attraction and hotel, the jail hosts regular paranormal events. Investigators have recorded EVPs answering direct questions, unexplained light anomalies, and sudden spikes in EMF around execution records and certain cells. Many guests leave with the impression that the emotional weight of Bodmin’s past inmates is still very present in the building.',
      },
    ],
  },
  {
    id: 'hl-36',
    name: 'Alcatraz Island',
    description: 'The infamous prison island where voices and footsteps echo long after lockdown',
    location: 'San Francisco Bay, California, USA',
    hauntingType: 'Residual',
    bestKnownFor: 'Phantom footsteps, voices, and apparitions in Cellblock D and the hospital wing',
    coordinates: {
      lat: 37.8267,
      lng: -122.4233,
    },
    thumbnailPrompt:
      'Foggy view of an island prison at dusk, watchtower silhouette, barred windows glowing faintly, ghostly figure suggested in a corridor, muted blue and gray palette',
    dangerRating: 3,
    hauntingIntensity: 4,
    visitorAccess: 'Museum / Historic site',
    sections: [
      {
        title: 'Prison on the Rock',
        content:
          'Alcatraz began as a military fort and prison before transforming into a federal penitentiary in 1934. It housed some of the United States’ most notorious inmates, including Al Capone and other high-risk prisoners, until closing in 1963. Isolation, harsh conditions, and desperate escape attempts turned the “Rock” into a symbol of inescapable punishment.',
      },
      {
        title: 'Cellblock D and the Hole',
        content:
          'Former guards and inmates long spoke of Cellblock D, particularly the isolation cells known as “the Hole,” as unnerving and oppressive. Prisoners reported glowing eyes in the darkness, icy hands touching them, and unseen presences sharing their narrow cells. Today’s visitors and park rangers still describe cold spots, phantom footsteps, and murmured voices in this wing even when tours have moved on.',
      },
      {
        title: 'Ghosts of Prisoners and Guards',
        content:
          'Tour guests frequently report clanging cell doors, distant shouting, and faint banjo music echoing through empty corridors, sometimes linked to Capone’s final years on the island. Shadowy figures are seen near the old hospital and along upper walkways. Many believe that the fear, violence, and despair concentrated on Alcatraz have left a lasting imprint on its stone and steel.',
      },
    ],
  },
  {
    id: 'hl-37',
    name: 'Castle of Good Hope',
    description: 'South Africa’s oldest colonial fort, haunted by governors, soldiers, and a phantom bell',
    location: 'Cape Town, South Africa',
    hauntingType: 'Intelligent',
    bestKnownFor: 'The Lady in Grey, cursed governor, and a bell that rings from a sealed tower',
    coordinates: {
      lat: -33.92685,
      lng: 18.42262,
    },
    thumbnailPrompt:
      'Twilight image of a star-shaped stone fort with mountains behind, one bastion window glowing, faint grey lady figure on the ramparts, warm and cool color contrast',
    dangerRating: 2,
    hauntingIntensity: 3,
    visitorAccess: 'Museum / Historic site',
    sections: [
      {
        title: 'Fortress of the Cape',
        content:
          'Built by the Dutch East India Company in the 17th century, the Castle of Good Hope is the oldest surviving colonial building in South Africa. It functioned as a fortress, administrative center, and prison, witnessing centuries of military rule, punishment, and political change along the Cape coast.',
      },
      {
        title: 'Governor Van Noodt and the Lady in Grey',
        content:
          'One famous legend describes Governor Pieter Gysbert van Noodt, who allegedly dropped dead in his office immediately after a condemned soldier cursed him from the gallows. Another enduring presence is the Lady in Grey, a distraught female figure seen weeping or rushing through corridors. For many years staff reported that her appearances were often accompanied by a strong scent of jasmine or roses.',
      },
      {
        title: 'Phantom Bells and Black Dogs',
        content:
          'Witnesses have heard the old fortress bell ringing even though its tower has been sealed for years. Guard patrols and visitors report shadow figures, sudden chills, and a spectral black dog that approaches guests before vanishing. Between official history and these recurrent experiences, the castle has become a foundational haunt in South African ghost lore.',
      },
    ],
  },
  {
    id: 'hl-38',
    name: 'La Noria Ghost Town & Cemetery',
    description: 'An abandoned Atacama Desert mining town with an exposed, unnerving cemetery',
    location: 'Near Iquique, Tarapacá Region, Chile',
    hauntingType: 'Cursed Ground',
    bestKnownFor: 'Open tombs, visible bones, and reports of the dead walking at night',
    coordinates: {
      lat: -20.37302,
      lng: -69.84739,
    },
    thumbnailPrompt:
      'Bleached daylight scene of a desert ghost town, cracked adobe buildings, rusted crosses in a cemetery with exposed bones, harsh sun and deep shadows, eerie realism',
    dangerRating: 5,
    hauntingIntensity: 4,
    visitorAccess: 'Restricted / No public access',
    sections: [
      {
        title: 'Saltpeter Boom and Bust',
        content:
          'La Noria grew during the 19th- and early-20th-century nitrate boom, providing housing, schools, and a graveyard for workers and their families in the Atacama Desert. Extreme heat, accidents, and disease shaped life in this remote settlement. When synthetic fertilizers replaced natural nitrate and the industry declined, the town was abandoned and left to crumble under relentless sun and sand.',
      },
      {
        title: 'The Haunted Cemetery',
        content:
          'La Noria’s cemetery is especially infamous. Many graves are broken open or collapsed, with human bones visible in damaged tombs. Visitors and locals describe a heavy, oppressive feeling within the graveyard and tell stories that the dead rise and walk the town after dark. Whether taken literally or symbolically, the idea of restless miners and families roaming the ruins persists in Chilean ghost lore.',
      },
      {
        title: 'Ghost Town Legends',
        content:
          'Paranormal investigators and brave travelers report shadowy figures, disembodied footsteps on empty walkways, and voices carried on the dry wind. The combination of genuine human remains, ruined homes, and total isolation gives La Noria a unique reputation—part historical tragedy, part active haunt, and part cautionary monument to the desert’s unforgiving nature.',
      },
    ],
  },
  {
    id: 'hl-39',
    name: 'Joelma Building',
    description: 'A São Paulo skyscraper marked by a catastrophic fire and enduring spiritual unrest',
    location: 'São Paulo, Brazil',
    hauntingType: 'Residual',
    bestKnownFor: 'The “Thirteen Souls” grave tradition and reports of hauntings in and around the tower',
    coordinates: {
      lat: -23.54958,
      lng: -46.64069,
    },
    thumbnailPrompt:
      'Night view of a modern high-rise in a Brazilian city, some windows dark, a few glowing oddly, faint silhouettes at upper floors, humid city haze, cinematic realism',
    dangerRating: 2,
    hauntingIntensity: 3,
    visitorAccess: 'Restricted / No public access',
    sections: [
      {
        title: 'The 1974 Fire',
        content:
          'On February 1, 1974, a fire broke out in the Joelma Building, a 25-story office tower in downtown São Paulo. Flammable interior materials and limited escape routes allowed flames and smoke to spread rapidly. Hundreds were trapped; nearly two hundred people died and many more were injured, making it one of Brazil’s worst high-rise disasters and prompting major changes to building safety codes.',
      },
      {
        title: 'The Thirteen Souls',
        content:
          'Among the victims were thirteen people who died together and could not be individually identified. They were buried in a common grave, and visitors soon began reporting cries for help, unease, and strange sensations near the site. A local tradition emerged of leaving glasses of water for the “Thirteen Souls,” both as an act of compassion and a plea for spiritual protection.',
      },
      {
        title: 'Haunted High-Rise',
        content:
          'After renovation and renaming, the building returned to normal use, but stories of hauntings persisted—flickering lights, elevators misbehaving near the fire floors, and ghostly figures seen in stairwells or windows at night. Some workers claimed to hear running footsteps, coughing, or panicked voices in otherwise empty corridors. For many Brazilians, the Joelma stands as both a symbol of tragedy and a location where the past occasionally presses into the present.',
      },
    ],
  },
  {
    id: 'hl-40',
    name: 'Pulau Hantu',
    description: 'Singapore’s “Ghost Island,” where warrior spirits and sea ghosts share the shore',
    location: 'Southern Islands, Singapore',
    hauntingType: 'Mixed',
    bestKnownFor: 'Legends of drowned warriors and night sightings along the beaches and shallows',
    coordinates: {
      lat: 1.22659,
      lng: 103.74929,
    },
    thumbnailPrompt:
      'Moody tropical island at night, palm trees silhouetted against the sky, bioluminescent-looking water, faint ghostly figures near the tide line, cinematic Southeast Asian horror vibe',
    dangerRating: 2,
    hauntingIntensity: 3,
    visitorAccess: 'Open to public',
    sections: [
      {
        title: 'Island of Ghosts',
        content:
          'Pulau Hantu consists of two small islets—Pulau Hantu Besar and Pulau Hantu Kechil—south of Singapore’s main island. At low tide they connect by exposed sandbars, while at high tide they appear as separate specks in the Straits. The name “Hantu” literally means “ghost” in Malay, hinting that local people have long seen these shores as spiritually charged.',
      },
      {
        title: 'Warrior Legends',
        content:
          'Traditional stories say the islets are the transformed forms of two Malay warriors who died in a violent sea battle after angering powerful spirits. In some tellings, sea deities turned them to islands so their souls would remain above the waves. Other tales speak of ghosts of sailors and fishermen drawn to the reefs and shallows, especially on misty or storm-threatening nights.',
      },
      {
        title: 'Modern Encounters',
        content:
          'Despite its ominous reputation, Pulau Hantu is popular with divers, anglers, and campers. Night visitors sometimes report strange lights moving beneath the surface, shadowy figures along the beach, and the feeling of being watched from the treeline. For many locals, the island is both a leisure spot and a place where respect for unseen presences is still very much expected.',
      },
    ],
  },
  {
    id: 'hl-41',
    name: 'Kempton Park Hospital',
    description: 'A abruptly abandoned South African hospital frozen mid-shift, now a modern urban haunting',
    location: 'Kempton Park, Gauteng, South Africa',
    hauntingType: 'Residual',
    bestKnownFor: 'Suddenly abandoned wards with equipment and records left behind',
    coordinates: {
      lat: -26.0960,
      lng: 28.2320,
    },
    thumbnailPrompt:
      'abandoned 1970s concrete hospital interior, peeling paint, rusted beds, dim natural light through broken windows, eerie cinematic horror atmosphere, high detail',
    dangerRating: 3,
    hauntingIntensity: 4,
    visitorAccess: 'Restricted / No public access',
    sections: [
      {
        title: 'Abandoned Overnight',
        content:
          'Kempton Park Hospital opened in the 1970s as a modern suburban medical facility and then was abruptly shut down in the mid-1990s, with much of its equipment, files, and furniture left in place. The sudden closure, and the lack of clear public explanation, helped seed stories that something about the building itself refused to rest.',
      },
      {
        title: 'Whispers of Patients and Staff',
        content:
          'Urban explorers, security guards, and nearby residents report hearing footsteps on empty floors, the squeak of trolley wheels, and the soft beeping of non-existent monitors. Some tell of shadowy figures moving between doorways or gliding past ward entrances, as if long-gone patients and staff are still on their rounds.',
      },
      {
        title: 'Haunted Reputation',
        content:
          'The hospital’s eerie state of suspended time — charts, beds, and signage sitting just as they were left — has made it a focal point for South African ghost lore. Those who venture too close speak of oppressive silence, sudden temperature drops, and a heavy emotional weight, as though the building still remembers every emergency and final breath.',
      },
    ],
  },
  {
    id: 'hl-42',
    name: 'Nottingham Road Hotel',
    description: 'A country inn in the KwaZulu-Natal midlands watched over by a tidy, romantically tragic spirit',
    location: 'Nottingham Road, KwaZulu-Natal, South Africa',
    hauntingType: 'Intelligent',
    bestKnownFor: 'The friendly ghost Charlotte, who still fusses over rooms and flowers',
    coordinates: {
      lat: -29.3558,
      lng: 29.9993,
    },
    thumbnailPrompt:
      'cozy country hotel corridor with old wooden doors and warm lamplight, subtle ghostly female figure in vintage dress at end of hallway, soft cinematic glow, high detail',
    dangerRating: 1,
    hauntingIntensity: 3,
    visitorAccess: 'Hotel / Active accommodation',
    sections: [
      {
        title: 'Historic Wayside Hotel',
        content:
          'Dating back to the late 19th century, the Nottingham Road Hotel served travelers, soldiers, and railway folk moving through South Africa’s misty midlands. Its bar, creaking floors, and old verandas carry more than a century of stories — including one about a young woman whose heartbreak never quite faded.',
      },
      {
        title: 'Charlotte the Ghost',
        content:
          'According to long-standing hotel lore, a woman known as Charlotte died after falling or jumping from an upstairs balcony, allegedly following a doomed love affair. Guests and staff say she still moves through the halls, straightening bedcovers, unpacking bags, and gently rearranging flowers as if determined to keep “her” rooms in order.',
      },
      {
        title: 'Gentle Encounters',
        content:
          'Visitors report feeling the bed dip as if someone sat beside them, hearing light footsteps outside a locked room, or waking to find their suitcase neatly opened and clothing laid out. The hotel embraces Charlotte’s presence as part of its charm, and many guests come hoping for a small, respectful brush with her lingering affection.',
      },
    ],
  },
  {
    id: 'hl-43',
    name: 'Humberstone and Santa Laura',
    description: 'Twin Atacama Desert nitrate ghost towns haunted by the memory of pampino life and hardship',
    location: 'Near Iquique, Tarapacá Region, Chile',
    hauntingType: 'Residual',
    bestKnownFor: 'Deserted schools, theaters, and processing plants echoing with unseen workers',
    coordinates: {
      lat: -20.2086,
      lng: -69.7964,
    },
    thumbnailPrompt:
      'desert ghost town with rusted industrial structures, empty schoolhouse, long shadows in orange desert light, cinematic post-apocalyptic mood, high detail',
    dangerRating: 3,
    hauntingIntensity: 3,
    visitorAccess: 'Museum / Historic site',
    sections: [
      {
        title: 'White Gold Towns',
        content:
          'Humberstone and nearby Santa Laura grew in the late 19th and early 20th centuries around the nitrate industry, built in the stark Atacama Desert. Thousands of workers and families — the pampinos — endured harsh conditions to process saltpeter for fertilizer and explosives before synthetic alternatives erased the towns’ purpose.',
      },
      {
        title: 'Echoes of the Pampinos',
        content:
          'Today, rusted machinery, empty schools, and abandoned theaters stand silent under the desert sun. Guides and visitors speak of footsteps on metal walkways, murmuring voices in processing plants, and glimpses of figures moving behind broken windows — as though workers are still changing shifts in a world the living abandoned decades ago.',
      },
      {
        title: 'World Heritage and Hauntings',
        content:
          'Now a UNESCO World Heritage Site, Humberstone and Santa Laura are preserved for their industrial history, but they also rank high on lists of haunted locations. Paranormal enthusiasts report cold spots in a baking-hot climate, unexplained sounds in windless air, and a feeling that the desert has faithfully kept the memories of those who never got a gentle ending.',
      },
    ],
  },
  {
    id: 'hl-44',
    name: 'La Recoleta Cemetery',
    description: 'Buenos Aires’ ornate necropolis, where marble angels and restless stories share the same narrow lanes',
    location: 'Buenos Aires, Argentina',
    hauntingType: 'Mixed',
    bestKnownFor: 'Labyrinth of mausoleums and the legend of the girl who feared being buried alive',
    coordinates: {
      lat: -34.5880,
      lng: -58.3910,
    },
    thumbnailPrompt:
      'ornate Latin American cemetery with marble mausoleums, angel statues, long stone alley in twilight, faint ghostly silhouette at end, cinematic gothic mood',
    dangerRating: 2,
    hauntingIntensity: 3,
    visitorAccess: 'Open to public',
    sections: [
      {
        title: 'City of the Dead',
        content:
          'Established in the 19th century, La Recoleta Cemetery became the resting place of Argentina’s political, military, and cultural elite. Its tightly packed mausoleums, angels, crosses, and stained glass windows create a stone labyrinth that feels like a small city layered directly on top of history.',
      },
      {
        title: 'Evita and the Buried-Alive Legend',
        content:
          'The tomb of Eva Perón draws visitors from around the world, some of whom report an uncanny sense of being watched or guided through the aisles. Another famous story centers on Rufina Cambaceres, a young woman believed by many to have been mistakenly buried alive — her mausoleum statue stands forever at the door, and some visitors claim to hear faint scratching or soft sobbing near her family vault.',
      },
      {
        title: 'Shadows Among the Mausoleums',
        content:
          'Guides and guests tell of phantom footsteps echoing behind them, sudden drafts on windless days, and dark figures slipping behind monuments only to vanish. Whether seen as lingering souls, powerful residual imprints, or a mix of both, Recoleta’s atmosphere convinces many that the “city of the dead” is still very much awake.',
      },
    ],
  },
  {
    id: 'hl-45',
    name: 'Kapuas–Landak River Confluence',
    description: 'A haunted river crossing in Borneo bound to the terrifying Pontianak spirit',
    location: 'Near Pontianak, West Kalimantan, Indonesia',
    hauntingType: 'Cursed Ground',
    bestKnownFor: 'Tales of the Pontianak, a vengeful female spirit said to stalk the riverbanks',
    coordinates: {
      lat: -0.0200,
      lng: 109.3300,
    },
    thumbnailPrompt:
      'humid tropical river at night, dense jungle silhouettes, faint ghostly woman in white among trees, moody horror lighting, Southeast Asian folklore aesthetic',
    dangerRating: 4,
    hauntingIntensity: 4,
    visitorAccess: 'Open to public',
    sections: [
      {
        title: 'Riverside Threshold',
        content:
          'At the meeting of the Kapuas and Landak rivers near the city of Pontianak, the water is more than just a trade and travel route. For locals, it is a threshold — a place where human settlements, dense forest, and old stories all intersect in a liminal zone rich with spiritual presence.',
      },
      {
        title: 'The Pontianak Legend',
        content:
          'The Pontianak — or Kuntilanak — is described as the spirit of a woman who died in childbirth, appearing first as a beautiful figure with long dark hair before revealing a horrific, predatory form. Folklore ties her especially to riverbanks, trees, and crossroads, with this confluence regarded as one of her favored haunts. Laughter in the dark and the scent of frangipani are both considered signs that she is near.',
      },
      {
        title: 'Encounters on the Water',
        content:
          'Boatmen and residents share stories of sudden chills on still nights, disembodied female cries, and pale figures glimpsed just beyond the lantern light. Some avoid traveling alone after dark, convinced that the Pontianak can capsize boats or lure people into currents they cannot escape. For many in West Kalimantan, these are not just tales — they are warnings woven into daily life.',
      },
    ],
  },
  {
    id: 'hl-46',
    name: 'Rose Hall Great House',
    description: 'A grand Jamaican plantation mansion overshadowed by the legend of the “White Witch”',
    location: 'Montego Bay, St. James Parish, Jamaica',
    hauntingType: 'Mixed',
    bestKnownFor: 'Annie Palmer, the White Witch of Rose Hall, and night tours through her former domain',
    coordinates: {
      lat: 18.5163,
      lng: -77.8192,
    },
    thumbnailPrompt:
      'moonlit Caribbean plantation house on a hill, glowing windows, palm trees, ghostly woman in white on balcony, gothic tropical atmosphere, high detail',
    dangerRating: 3,
    hauntingIntensity: 4,
    visitorAccess: 'Guided tours only',
    sections: [
      {
        title: 'Plantation on the Hill',
        content:
          'Rose Hall Great House is an 18th-century Georgian mansion overlooking the Caribbean Sea, once the center of a vast sugar plantation. Its history includes brutal slavery, wealth, and scandal — fertile ground for one of Jamaica’s most enduring ghost legends.',
      },
      {
        title: 'The White Witch of Rose Hall',
        content:
          'Local lore tells of Annie Palmer, the so-called “White Witch,” who allegedly practiced dark rituals, murdered husbands and lovers, and terrorized the enslaved people on the estate. Visitors and guides claim to see a woman in white roaming the balconies and staircases, hear footsteps in empty rooms, and feel an oppressive presence in spaces associated with her story.',
      },
      {
        title: 'Night Tours and Encounters',
        content:
          'Candlelit night tours and Halloween events lean into the haunting, but many guests report experiences that go beyond theater: sudden chills, touches on the shoulder, and photographs with unexpected figures. Whether Annie herself still stalks the great house or the building holds a more complex tangle of spirits, Rose Hall remains one of the Caribbean’s most famous haunted mansions.',
      },
    ],
  },
  {
    id: 'hl-47',
    name: 'Penang War Museum',
    description: 'A former British hilltop fortress turned museum, heavy with wartime fear and lingering shadows',
    location: 'Batu Maung, Penang, Malaysia',
    hauntingType: 'Residual',
    bestKnownFor: 'Tunnels and bunkers where visitors report screams, footsteps, and soldiers in the dark',
    coordinates: {
      lat: 5.2847,
      lng: 100.2875,
    },
    thumbnailPrompt:
      'overgrown WWII fortress on jungle hill, concrete bunkers and tunnels, dusk lighting, faint soldier silhouette in passageway, Southeast Asian war horror mood',
    dangerRating: 3,
    hauntingIntensity: 3,
    visitorAccess: 'Museum / Historic site',
    sections: [
      {
        title: 'Fort on the Hill',
        content:
          'Originally built by the British as a coastal defense fort above Batu Maung, this complex of tunnels, gun emplacements, and barracks later saw Japanese occupation during World War II. Harsh conditions, fear, and stories of executions stitched a dark emotional layer into its concrete corridors.',
      },
      {
        title: 'Shadows of Soldiers',
        content:
          'Visitors walking the long tunnels report disembodied footsteps behind them, distant shouting in languages no one nearby is speaking, and the feeling of being watched from old firing slits. Some claim to see figures in vintage uniforms slipping around corners or standing silently in doorways, vanishing when approached.',
      },
      {
        title: 'Night Vigils and Folklore',
        content:
          'The museum hosts night visits and paranormal vigils, and staff routinely gather new stories of cold pockets in humid air, camera glitches in particular rooms, and sudden waves of dread near reported execution spots. For many Malaysians, Penang War Museum is as much a spiritual scar as a historical attraction.',
      },
    ],
  },
  {
    id: 'hl-48',
    name: 'Dragsholm Castle',
    description: 'A Danish castle where nobles, prisoners, and a “white lady” all seem to have stayed on',
    location: 'Odsherred Municipality, Zealand, Denmark',
    hauntingType: 'Mixed',
    bestKnownFor: 'Multiple noble and tragic apparitions, including the White Lady in the walls',
    coordinates: {
      lat: 55.7711,
      lng: 11.3908,
    },
    thumbnailPrompt:
      'Nordic castle in misty countryside, gray stone walls, soft overcast light, faint white lady figure in window, melancholic atmospheric fantasy style',
    dangerRating: 2,
    hauntingIntensity: 4,
    visitorAccess: 'Hotel / Active accommodation',
    sections: [
      {
        title: 'Fortress, Prison, and Manor',
        content:
          'Dragsholm Castle began as a medieval fortress, later becoming both a noble residence and prison for high-ranking captives. Over centuries it has hosted bishops, rebellious lords, and political prisoners, layering its thick walls with human drama.',
      },
      {
        title: 'The White Lady and Others',
        content:
          'One famous story tells of a noblewoman bricked up in the castle after a forbidden love affair; her spirit, the “White Lady,” is said to roam the halls in a pale gown. Another apparition is believed to be the crazed Earl of Bothwell, former husband of Mary, Queen of Scots, whose restless presence is felt in certain rooms and corridors.',
      },
      {
        title: 'Haunted Hospitality',
        content:
          'Now operating as a hotel and restaurant, Dragsholm embraces its ghost stories. Guests report footsteps in empty hallways, doors opening on their own, and fleeting figures at the edge of vision. Many describe the haunting as intense but not malevolent — as if the castle simply refuses to forget the people who once lived and died within it.',
      },
    ],
  },
  {
    id: 'hl-49',
    name: 'St. Louis Cemetery No. 1',
    description: 'New Orleans’ oldest surviving cemetery, where above-ground tombs and famous spirits share tight quarters',
    location: 'New Orleans, Louisiana, USA',
    hauntingType: 'Mixed',
    bestKnownFor: 'Voodoo queen Marie Laveau’s tomb and tightly packed above-ground graves',
    coordinates: {
      lat: 29.9594,
      lng: -90.0714,
    },
    thumbnailPrompt:
      'New Orleans above-ground cemetery, narrow aisles of white tombs, Spanish moss, twilight sky, faint ghostly figure near an old crypt, gothic Southern mood',
    dangerRating: 2,
    hauntingIntensity: 4,
    visitorAccess: 'Guided tours only',
    sections: [
      {
        title: 'City of Tombs',
        content:
          'Founded in 1789, St. Louis Cemetery No. 1 is the oldest existing cemetery in New Orleans and a dense patchwork of above-ground vaults built to cope with the city’s high water table. Generations of families, politicians, and cultural icons rest here in stacked crypts that rise over narrow walkways.',
      },
      {
        title: 'Marie Laveau and Other Spirits',
        content:
          'The most talked-about presence is Marie Laveau, the famed 19th-century Vodou practitioner whose tomb draws steady streams of visitors. People report feeling a charge of energy around her vault, hearing whispered prayers answered by flickers of wind, or catching glimpses of a woman in a tignon and skirts walking between the tombs.',
      },
      {
        title: 'Restricted but Still Active',
        content:
          'Due to vandalism and heavy tourism, the cemetery now requires guided access, but that hasn’t slowed the ghost stories. Guides and guests describe cold spots in the Louisiana heat, disembodied voices, and the sense of being followed along the cramped aisles. At St. Louis No. 1, the veil between the living and the dead feels especially thin.',
      },
    ],
  },
  {
    id: 'hl-50',
    name: 'Bran Castle',
    description: 'A Transylvanian fortress linked with Dracula lore and centuries of whispered hauntings',
    location: 'Bran, Brașov County, Romania',
    hauntingType: 'Residual',
    bestKnownFor: 'Its Dracula association and eerie rooms overlooking misty Carpathian valleys',
    coordinates: {
      lat: 45.5151,
      lng: 25.3672,
    },
    thumbnailPrompt:
      'gothic Transylvanian castle on a rocky hill, night fog, full moon behind towers, ravens circling, subtle eerie glow from windows, dark fantasy illustration',
    dangerRating: 2,
    hauntingIntensity: 3,
    visitorAccess: 'Museum / Historic site',
    sections: [
      {
        title: 'Castle on the Border',
        content:
          'Bran Castle stands on a rocky outcrop at the edge of Transylvania, guarding mountain passes that once carried traders and armies. While its direct connection to Vlad the Impaler is debated, its dramatic profile and history of conflict, disease, and imprisonment have earned it an undeniable haunted aura.',
      },
      {
        title: 'Echoes of Legends',
        content:
          'Guides tell of cold drafts in sealed rooms, faint voices in stone stairwells, and unseen hands brushing against visitors in narrow passages. Some witnesses report glimpses of shadowy figures at windows or moving along the ramparts, tying these experiences to the wider “Dracula” mythos woven around the castle.',
      },
      {
        title: 'Modern Night Vigils',
        content:
          'Night tours and occasional paranormal events invite visitors to experience the castle after dark, when its courtyards and towers feel particularly otherworldly. Whether the energies come from specific spirits or centuries of fear-soaked stories, Bran Castle remains a bucket-list haunt for gothic and paranormal fans alike.',
      },
    ],
  },
  {
    id: 'hl-51',
    name: 'Brookdale Lodge',
    description: 'A historic California lodge where phantom children and drowned guests still seem to mingle by the brook',
    location: 'Brookdale, California, USA',
    hauntingType: 'Poltergeist',
    bestKnownFor: 'Reports of a little girl in a white dress and activity around the creek running through the dining room',
    coordinates: {
      lat: 37.1069,
      lng: -122.1089,
    },
    thumbnailPrompt:
      'rustic forest lodge interior with creek running through, wooden bridge, dim vintage lights, small ghostly girl in white at water’s edge, eerie yet nostalgic atmosphere',
    dangerRating: 2,
    hauntingIntensity: 4,
    visitorAccess: 'Hotel / Active accommodation',
    sections: [
      {
        title: 'Lodge in the Redwoods',
        content:
          'Nestled among the Santa Cruz Mountains redwoods, Brookdale Lodge became famous for its dining room built over a natural creek, attracting celebrities and travelers throughout the 20th century. Alongside its charm came tales of accidents, drownings, and guests who never truly checked out.',
      },
      {
        title: 'The Little Girl by the Water',
        content:
          'One of the most persistent stories involves a young girl in a white dress seen playing near the brook or peeking from behind posts, often vanishing if spoken to. Staff and visitors also report disembodied laughter, splashing sounds in empty areas, and glasses sliding across tables with no visible cause.',
      },
      {
        title: 'Poltergeist-Style Activity',
        content:
          'Investigators have documented moving objects, unexplained cold spots, and EVPs captured near the water and in older guest rooms. While most encounters are more mischievous than dangerous, the level of activity has put Brookdale Lodge high on lists of California’s most paranormally lively inns.',
      },
    ],
  },
  {
    id: 'hl-52',
    name: 'Ballygally Castle',
    description: 'A coastal Northern Irish castle hotel with a resident lady who politely knocks before entering',
    location: 'Ballygally, County Antrim, Northern Ireland',
    hauntingType: 'Intelligent',
    bestKnownFor: 'The “ghost room” in the tower and Lady Isobel’s courteous visits',
    coordinates: {
      lat: 54.9017,
      lng: -5.8677,
    },
    thumbnailPrompt:
      'stone castle hotel on rocky Irish coast, gray sea and clouds, warm lights in narrow windows, faint female figure at tower window, moody Celtic atmosphere',
    dangerRating: 1,
    hauntingIntensity: 3,
    visitorAccess: 'Hotel / Active accommodation',
    sections: [
      {
        title: 'Castle by the Sea',
        content:
          'Dating back to the 17th century, Ballygally Castle stands along the Antrim Coast, gazing out over the North Channel. Over time it has shifted from defensive residence to welcoming hotel, but the past has never fully loosened its grip on the turrets and corridors.',
      },
      {
        title: 'Lady Isobel and the Tower Room',
        content:
          'According to tradition, Lady Isobel Shaw was locked in a tower room by her husband and either fell or leapt from the window to her death. Guests and staff report a gentle female presence who knocks on doors, enters rooms, and then quietly fades away, often thought to be Isobel still seeking company.',
      },
      {
        title: 'Guests of the Living and the Dead',
        content:
          'The hotel keeps a dedicated “ghost room” in the tower and openly shares its stories with visitors. People describe footsteps on the stairs, children laughing where none are present, and fleeting figures on the sea-facing battlements. Most experiences are described as calm and even comforting, as if the castle’s spirits are simply sharing the view.',
      },
    ],
  },
  {
    id: 'hl-53',
    name: 'Old Melbourne Gaol',
    description: 'A former Australian prison where the executed and forgotten are said to linger in the cellblocks',
    location: 'Melbourne, Victoria, Australia',
    hauntingType: 'Residual',
    bestKnownFor: 'Execution yard and cells associated with bushranger Ned Kelly and other condemned prisoners',
    coordinates: {
      lat: -37.8048,
      lng: 144.9592,
    },
    thumbnailPrompt:
      'narrow stone prison corridor with iron doors, dim overhead lamps, ghostly figure at end of hall, moody blue-green grading, historical horror atmosphere',
    dangerRating: 3,
    hauntingIntensity: 4,
    visitorAccess: 'Museum / Historic site',
    sections: [
      {
        title: 'Gaol of the Colony',
        content:
          'Built in the mid-19th century, Old Melbourne Gaol housed men, women, and even children under harsh conditions. More than 130 prisoners were executed here by hanging, including the infamous bushranger Ned Kelly, giving the site a heavy legacy of fear and finality.',
      },
      {
        title: 'Echoes of the Condemned',
        content:
          'Visitors walking the tiers report whispers in empty cells, the clink of keys, and the sensation of hands brushing past in narrow stairwells. Some describe sudden waves of dread or nausea in the execution area, as if the final moments of many lives are still imprinting the space.',
      },
      {
        title: 'Night Tours and Encounters',
        content:
          'Ghost tours and night investigations are a regular part of the gaol’s programming. Guests capture EVPs, strange lights, and shadow figures crossing doorways. Many leave convinced that the executed inmates and overworked warders still patrol the cellblocks long after official closure.',
      },
    ],
  },
  {
    id: 'hl-54',
    name: 'Presidio of Ushuaia',
    description: '“The Prison at the End of the World,” where Patagonia’s cold seems to carry the voices of former inmates',
    location: 'Ushuaia, Tierra del Fuego, Argentina',
    hauntingType: 'Residual',
    bestKnownFor: 'Frozen cell wings and stories of prisoners whose presence lingers in the southernmost city',
    coordinates: {
      lat: -54.8074,
      lng: -68.3070,
    },
    thumbnailPrompt:
      'old prison corridor in subpolar region, frosty windows, dim yellow lights, sense of cold breath in air, faint ghostly figure in heavy coat at far end',
    dangerRating: 2,
    hauntingIntensity: 3,
    visitorAccess: 'Museum / Historic site',
    sections: [
      {
        title: 'Prison at the End of the World',
        content:
          'The former prison of Ushuaia once held some of Argentina’s hardest criminals and political prisoners in harsh, subpolar conditions. Isolated by sea and ice, escape was almost impossible, and the building became a symbol of punishment at the literal end of the continent.',
      },
      {
        title: 'Lingering Inmates',
        content:
          'Today, as part of a maritime and prison museum complex, the long cell wings feel frozen in time. Staff and visitors report footsteps in empty corridors, cell doors that seem to move on their own, and the feeling that someone is watching from within darkened cells, especially on quiet winter days.',
      },
      {
        title: 'Cold Echoes',
        content:
          'The combination of biting cold, remote geography, and preserved prison architecture gives the site a uniquely haunted atmosphere. People who visit often describe a deep sadness in certain blocks, as if the despair of those once locked there is still caught in the stone and timber.',
      },
    ],
  },
  {
    id: 'hl-55',
    name: 'The Driskill Hotel',
    description: 'A historic Austin landmark where cowboys, politicians, and playful spirits still share the halls',
    location: 'Austin, Texas, USA',
    hauntingType: 'Mixed',
    bestKnownFor: 'Lavish Romanesque halls, phantom children, and stories of a grieving bride',
    coordinates: {
      lat: 30.2680,
      lng: -97.7416,
    },
    thumbnailPrompt:
      'grand historic hotel lobby with marble floors and tall columns, warm golden lighting, faint transparent figure of a woman on staircase, cinematic Southern Gothic vibe',
    dangerRating: 2,
    hauntingIntensity: 3,
    visitorAccess: 'Hotel / Active accommodation',
    sections: [
      {
        title: 'Texas Grand Dame',
        content:
          'Opened in 1886 at the corner of 6th and Brazos, the Driskill quickly became one of Texas’s grandest hotels and a social hub for politicians, musicians, and travelers. Its blend of luxury, history, and late-night energy has always carried a sense of something extra hanging in the air.',
      },
      {
        title: 'Ghosts of Guests and Staff',
        content:
          'Stories include a little girl chasing a ball down the corridors, a woman in a wedding gown associated with tragedy on the stairs, and a former hotel owner who still seems to walk the halls. Guests report phantom cigar smoke, footsteps outside empty rooms, and elevators that appear to have a mind of their own.',
      },
      {
        title: 'Haunted Landmark of 6th Street',
        content:
          'The Driskill’s reputation as one of Austin’s haunted hotspots is now part of its identity. Paranormal investigators and curious travelers come hoping to share the building with its unseen residents, and many leave with their own late-night stories from the heart of downtown.',
      },
    ],
  },
  {
    id: 'hl-56',
    name: 'Bell Witch Cave and Bell Farm',
    description: 'The legendary Tennessee haunting tied to a relentless, talking spirit',
    location: 'Adams, Tennessee, USA',
    hauntingType: 'Intelligent',
    bestKnownFor: 'The Bell Witch entity tormenting the Bell family and visitors to the cave',
    coordinates: {
      lat: 36.5845,
      lng: -87.1025,
    },
    thumbnailPrompt:
      'misty riverside farm at dusk, dark limestone cave mouth glowing faintly, 19th century farmhouse silhouette, ethereal female spirit suggestion, Appalachian gothic, cinematic lighting',
    dangerRating: 3,
    hauntingIntensity: 5,
    visitorAccess: 'Guided tours only',
    sections: [
      {
        title: 'The Bell Family Haunting',
        content:
          'In the early 1800s, the Bell family of Adams, Tennessee, reported years of escalating activity: strange animals, knocking on walls, bedcovers yanked away, and physical attacks. A disembodied female voice eventually emerged, calling herself “Kate,” mocking the family, reciting scripture, and engaging neighbors in long conversations. The entity focused particular hatred on John Bell, vowing to kill him.',
      },
      {
        title: 'The Cave and the Land',
        content:
          'Near the old Bell farm sits a limestone cave along the Red River, now closely associated with the haunting. Local tradition holds that the spirit may have used the cave as an anchor point, and later lore tells of visitors being pushed, grabbed, or hearing voices echoing from the darkness. Some guests report small stones thrown from unseen hands and malfunctioning electronics at the cave entrance.',
      },
      {
        title: 'Modern Encounters',
        content:
          'Today the property operates tours of both the Bell Witch Cave and the surrounding land. Guests and guides still report whispers, shadow figures, and sudden waves of nausea or dread in seemingly empty spots on the trail. Even people who arrive skeptical often leave saying the energy of the place feels heavy, as if the story that started two centuries ago has never fully ended.',
      },
    ],
  },
  {
    id: 'hl-57',
    name: 'Villisca Axe Murder House',
    description: 'A quiet Iowa home frozen around an unsolved family massacre',
    location: 'Villisca, Iowa, USA',
    hauntingType: 'Residual',
    bestKnownFor: 'The 1912 axe murders of eight people and the lingering echoes of that night',
    coordinates: {
      lat: 40.9297,
      lng: -94.9797,
    },
    thumbnailPrompt:
      'small midwestern wooden house at night, single dim porch light, police tape faintly visible, ghostly silhouettes in upper windows, vintage sepia horror aesthetic',
    dangerRating: 3,
    hauntingIntensity: 4,
    visitorAccess: 'Guided tours only',
    sections: [
      {
        title: 'The 1912 Murders',
        content:
          'On June 10, 1912, the Moore family and two visiting children were found brutally killed with an axe inside this modest home. The crime shocked the region: eight victims, including six children, and no one ever convicted. Investigations, trials, and theories stretched on for years, but the mystery of who committed the murders remains unsolved.',
      },
      {
        title: 'Residual Imprints',
        content:
          'People who visit the house describe heavy emotional pressure, as if the air itself remembers the terror of that night. Some report children’s laughter or crying, footsteps pacing back and forth, and doors slowly opening and closing on their own. Others note the sensation of someone standing at the foot of the bed during overnight stays.',
      },
      {
        title: 'Paranormal Investigation Hotspot',
        content:
          'The home is preserved in early-1900s style and is open for daytime tours and overnight investigations. Teams routinely capture EVPs, temperature fluctuations, and unexplained movement of toys and objects left as trigger items. Many visitors describe the house as deceptively plain by daylight but overwhelmingly active once the lights go out.',
      },
    ],
  },
  {
    id: 'hl-58',
    name: 'Lemp Mansion',
    description: 'A St. Louis mansion steeped in brewery wealth, tragedy, and restless spirits',
    location: 'St. Louis, Missouri, USA',
    hauntingType: 'Mixed',
    bestKnownFor: 'Multiple family suicides tied to the Lemp brewing dynasty',
    coordinates: {
      lat: 38.5949,
      lng: -90.2145,
    },
    thumbnailPrompt:
      'grand brick Victorian mansion at twilight, warm windows contrasting with dark upper floors, ghostly figure at an arched window, vintage Midwestern urban gothic',
    dangerRating: 3,
    hauntingIntensity: 4,
    visitorAccess: 'Hotel / Active accommodation',
    sections: [
      {
        title: 'Rise and Fall of a Brewery Empire',
        content:
          'The Lemp family built a beer empire in 19th-century St. Louis, operating massive limestone beer caves beneath the city. Their fortune, however, was shadowed by a string of suicides and early deaths. Several members of the family died by their own hand inside the mansion, cementing its reputation as a house wrapped in sorrow.',
      },
      {
        title: 'Haunted Rooms and Hidden Spaces',
        content:
          'Guests and staff report voices in empty rooms, phantom footsteps climbing the stairs, and cold spots that linger no matter the season. Certain bedrooms are particularly active, with bedcovers tugged and closet doors opening on their own. Some people sense a male presence watching from the former office areas linked to the family’s business dealings.',
      },
      {
        title: 'Dining with the Departed',
        content:
          'Today the mansion operates as a restaurant, inn, and event space, and it fully acknowledges its haunted reputation. Paranormal investigations have recorded EVPs thought to be Lemp family members, while diners occasionally glimpse figures in period clothing in reflective surfaces. The combination of preserved history and ongoing reports keeps the Lemp story very much alive.',
      },
    ],
  },
  {
    id: 'hl-59',
    name: 'Borley Rectory and Churchyard',
    description: 'The former “most haunted house in England” and its brooding churchyard',
    location: 'Borley, Essex, England',
    hauntingType: 'Residual',
    bestKnownFor: 'The phantom nun, ghostly writings, and decades of intense haunting reports',
    coordinates: {
      lat: 52.0411,
      lng: 0.7650,
    },
    thumbnailPrompt:
      'ruined English rectory at night, overgrown churchyard, ghostly nun figure on a path, fog rolling over gravestones, monochrome gothic horror style',
    dangerRating: 2,
    hauntingIntensity: 5,
    visitorAccess: 'Restricted / No public access',
    sections: [
      {
        title: 'The Rectory and Its Reputation',
        content:
          'Built in the 19th century beside an older church, Borley Rectory gained fame in the early 1900s for constant reports of ghosts: phantom footsteps, bells ringing by themselves, and sightings of a veiled nun crossing the grounds. The Society for Psychical Research and investigator Harry Price brought national attention to the site, dubbing it “the most haunted house in England.”',
      },
      {
        title: 'The Phantom Nun and Ghostly Messages',
        content:
          'Witnesses described a sorrowful nun walking a set route, as if reliving an unfinished story. Residents also reported messages appearing on walls in delicate handwriting, seeming to plead for prayers and understanding. Objects were said to vanish, reappear, or be thrown, and a phantom coach was reportedly seen racing down the lane.',
      },
      {
        title: 'Fire, Ruin, and Lingering Activity',
        content:
          'The rectory burned in 1939 and was later demolished, but the nearby church and grounds remain. Visitors and locals still report strange lights, shadowy figures, and the sensation of being watched among the graves. Even with some earlier investigations now debated, the Borley area continues to feel like a place where something unfinished lingers in the fog.',
      },
    ],
  },
  {
    id: 'hl-60',
    name: 'Shaniwar Wada Fort',
    description: 'A ruined palace fort where a murdered prince is said to cry out on full-moon nights',
    location: 'Pune, Maharashtra, India',
    hauntingType: 'Residual',
    bestKnownFor: 'Echoed screams of a young Peshwa prince calling for help',
    coordinates: {
      lat: 18.5195,
      lng: 73.8553,
    },
    thumbnailPrompt:
      'ancient Indian fort walls at night, moonlit battlements, faint spectral child figure near a gate, warm torchlight against deep shadows, cinematic historical horror',
    dangerRating: 3,
    hauntingIntensity: 4,
    visitorAccess: 'Museum / Historic site',
    sections: [
      {
        title: 'Palace of the Peshwas',
        content:
          'Completed in 1732, Shaniwar Wada served as the seat of the Peshwas, powerful ministers of the Maratha Empire. The complex once contained ornate halls, fountains, and royal quarters before much of it was destroyed by fire in the early 19th century. The surviving stone walls and gates now overlook busy modern Pune.',
      },
      {
        title: 'The Murder of Narayanrao',
        content:
          'Local history and legend tell of young Peshwa Narayanrao, who was killed within the fort during a power struggle. Servants and citizens reportedly heard his cries of “Kaka, mala vachva!” (“Uncle, save me!”) as he was attacked. According to many Pune residents, those same words can still be heard echoing around the fort’s walls on certain nights, especially during the full moon.',
      },
      {
        title: 'Modern Nighttime Fears',
        content:
          'Because of the stories, many locals avoid the fort after dark. Visitors who have joined night programs or stood near the massive gates report sudden chills, distant childish cries, and fleeting shadows along the ramparts. Even during daytime tours, some people feel a strange heaviness in specific corners as if history there refuses to rest.',
      },
    ],
  },
  {
    id: 'hl-61',
    name: 'Lawang Sewu',
    description: 'A grand colonial rail building turned notorious Indonesian haunt',
    location: 'Semarang, Central Java, Indonesia',
    hauntingType: 'Mixed',
    bestKnownFor: 'Headless apparitions and underground dungeon hauntings',
    coordinates: {
      lat: -6.9731,
      lng: 110.4090,
    },
    thumbnailPrompt:
      'Dutch colonial building with many arched windows at dusk, tropical humidity haze, ghostly headless figure in corridor, Southeast Asian urban legend vibe',
    dangerRating: 3,
    hauntingIntensity: 4,
    visitorAccess: 'Museum / Historic site',
    sections: [
      {
        title: 'Thousand Doors of Semarang',
        content:
          'Built in the early 1900s as the headquarters of the Dutch East Indies Railway Company, Lawang Sewu (“Thousand Doors”) is a sprawling colonial complex with long corridors and countless doors and windows. During wartime and occupation, parts of the building were reportedly used as prisons and interrogation rooms.',
      },
      {
        title: 'Legends of Restless Spirits',
        content:
          'Stories from locals and visitors include headless apparitions, a female ghost in traditional dress, and soldiers’ spirits still patrolling the halls. The basement and underground sections—said to have held prisoners in water-filled cells—are often described as the most oppressive, with reports of phantom footsteps, cries, and the sensation of hands brushing past legs.',
      },
      {
        title: 'Tours and Investigations',
        content:
          'Today, Lawang Sewu is partially restored and open to visitors, with tours acknowledging its ghostly reputation. Nighttime events sometimes include guided “horror” experiences, during which guests report unexplained photographs, sudden chills in still air, and feelings of being observed from darkened archways.',
      },
    ],
  },
  {
    id: 'hl-62',
    name: 'Fort Garry Hotel',
    description: 'A Canadian railway hotel where elegant hallways mask lingering grief',
    location: 'Winnipeg, Manitoba, Canada',
    hauntingType: 'Intelligent',
    bestKnownFor: 'The grieving woman of Room 202 and ghostly figures in the ballroom',
    coordinates: {
      lat: 49.8872,
      lng: -97.1386,
    },
    thumbnailPrompt:
      'grand château-style hotel at night in winter, softly glowing windows, faint female silhouette in upper window, Canadian downtown skyline in background, moody cinematic',
    dangerRating: 2,
    hauntingIntensity: 3,
    visitorAccess: 'Hotel / Active accommodation',
    sections: [
      {
        title: 'Railway Grandeur',
        content:
          'Opened in 1913 by the Grand Trunk Pacific Railway, the Fort Garry Hotel stands like a château in downtown Winnipeg. Its high-ceilinged ballrooms, ornate staircases, and long history of travelers have made it both a landmark and a natural container for ghost stories.',
      },
      {
        title: 'The Woman in 202',
        content:
          'The most famous spirit is said to be a woman tied to Room 202, often described as having taken her life there after devastating personal news. Guests and staff report seeing a distraught woman at the foot of the bed, waking to someone sitting beside them, or finding the room’s atmosphere suddenly heavy with sadness. Some report tears for no clear reason while staying there.',
      },
      {
        title: 'Other Hotel Spirits',
        content:
          'Figures in period clothing have been seen gliding through the ballroom and hallways, disappearing around corners. Kitchen staff mention objects moving on their own, and night staff sometimes hear music or laughter in closed event spaces. The hotel acknowledges its haunted lore, and many guests arrive hoping to glimpse one of its resident spirits.',
      },
    ],
  },
  {
    id: 'hl-63',
    name: 'Ramoji Film City',
    description: 'A massive film studio complex said to be built on battlefields and burial grounds',
    location: 'Hyderabad, Telangana, India',
    hauntingType: 'Cursed Ground',
    bestKnownFor: 'Film crews reporting unexplained accidents, messages, and unseen pranksters',
    coordinates: {
      lat: 17.2543,
      lng: 78.6808,
    },
    thumbnailPrompt:
      'vast Indian film backlot at night, empty streets of movie sets, flickering studio lights, faint translucent figures among props, cinematic supernatural atmosphere',
    dangerRating: 3,
    hauntingIntensity: 3,
    visitorAccess: 'Open to public',
    sections: [
      {
        title: 'Studios on Old Battlefields',
        content:
          'Ramoji Film City is one of the largest film studio complexes in the world, with backlots that mimic cities, villages, and palaces. Local lore says parts of the land were once battlefields or burial grounds of ancient warriors, and some believe that restless spirits still roam beneath the carefully constructed movie sets.',
      },
      {
        title: 'Crew Stories and On-Set Disturbances',
        content:
          'Crew members and performers have reported strange events: lights bursting without cause, equipment toppling, and unexplained writing appearing on mirrors or props. Some accounts mention unseen hands tugging at hair or costumes, especially in women’s dressing rooms, and doors that slam repeatedly when no wind is present.',
      },
      {
        title: 'Tourist Encounters',
        content:
          'Visitors on tours occasionally capture odd shapes in photographs of empty streets or elaborate sets. Night security staff speak of voices calling their names, shadows crossing open courtyards, and feelings of being followed between soundstages. While the studios are usually full of artificial illusions, many believe the land itself provides real, unscripted hauntings.',
      },
    ],
  },
  {
    id: 'hl-64',
    name: 'Kuldhara Abandoned Village',
    description: 'A Rajasthani village said to be cursed by its vanished inhabitants',
    location: 'Near Jaisalmer, Rajasthan, India',
    hauntingType: 'Cursed Ground',
    bestKnownFor: 'A whole community that disappeared overnight, leaving a curse behind',
    coordinates: {
      lat: 26.9167,
      lng: 70.7667,
    },
    thumbnailPrompt:
      'deserted sandstone village in the Thar Desert at sunset, crumbling houses, dusty streets, faint spectral villagers in traditional dress, warm eerie color palette',
    dangerRating: 2,
    hauntingIntensity: 3,
    visitorAccess: 'Open to public',
    sections: [
      {
        title: 'The Vanished Paliwal Brahmins',
        content:
          'Kuldhara was once a thriving village of Paliwal Brahmins near Jaisalmer. According to local tradition, centuries ago the community abandoned the village overnight, leaving food on the stoves and belongings behind, rather than submit to an oppressive local ruler. Before leaving, they are said to have cursed the land so that no one could live there again.',
      },
      {
        title: 'Cursed Foundations',
        content:
          'Attempts to resettle the site reportedly failed, with stories of illness, misfortune, and a deep sense of unease forcing newcomers to flee. Today, the stone walls and roofless homes sit open to the desert wind, creating a maze of ruins that many visitors describe as unnervingly quiet—even compared to the surrounding desert.',
      },
      {
        title: 'Ghostly Visitors',
        content:
          'Travelers and night watchmen claim to see figures moving among the ruins, hear soft footsteps on the sand, or catch fragments of conversation in an empty courtyard. Some describe lights appearing in roofless houses or feeling watched as soon as they cross into the old village boundary. The site is now a protected heritage area, and its legend continues to grow.',
      },
    ],
  },
  {
    id: 'hl-65',
    name: 'Dow Hill and Victoria Boys’ School',
    description: 'A misty hill town forest in India where a headless boy and whispering trees are feared',
    location: 'Kurseong, West Bengal, India',
    hauntingType: 'Mixed',
    bestKnownFor: 'Reports of a headless boy walking the forest road and footsteps in empty school corridors',
    coordinates: {
      lat: 26.8820,
      lng: 88.2773,
    },
    thumbnailPrompt:
      'foggy Himalayan hill forest road, dim streetlamp, faint headless child silhouette in school uniform, steep slopes and pine trees, desaturated eerie mood',
    dangerRating: 3,
    hauntingIntensity: 4,
    visitorAccess: 'Open to public',
    sections: [
      {
        title: 'Hill Station and School',
        content:
          'Kurseong is a hill town near Darjeeling, wrapped in tea gardens and forests. On Dow Hill stands the historic Victoria Boys’ School, which has long fed stories of eerie footsteps, voices in empty corridors, and the feeling of being watched by unseen eyes during the off-season.',
      },
      {
        title: 'The Headless Boy on the Road',
        content:
          'One of the most striking legends describes a headless boy in school uniform walking along the forested stretch of road between Dow Hill and the nearby forest. Witnesses claim he strides silently before suddenly vanishing into the trees. Drivers and pedestrians alike report chills and panic when they glimpse him in the mist.',
      },
      {
        title: 'Whispering Woods',
        content:
          'The surrounding forest is said to be filled with strange presences. Locals speak of disembodied footsteps trailing behind hikers, whispers with no source, and the sensation of being lured off the path. Even people who do not consider themselves sensitive often describe Dow Hill as carrying a very different weight from the other, more cheerful slopes nearby.',
      },
    ],
  },
  {
    id: 'hl-66',
    name: 'Old Charleston Jail',
    description: 'A towering jailhouse where pirates, prisoners, and the hanged are said to linger',
    location: 'Charleston, South Carolina, USA',
    hauntingType: 'Mixed',
    bestKnownFor: 'Apparitions of former inmates and the infamous Lavinia Fisher',
    coordinates: {
      lat: 32.7927,
      lng: -79.9416,
    },
    thumbnailPrompt:
      'looming brick jail tower at night, barred windows, faint figures behind the glass, Southern Gothic city skyline, moody blue-orange lighting',
    dangerRating: 3,
    hauntingIntensity: 4,
    visitorAccess: 'Guided tours only',
    sections: [
      {
        title: 'Centuries of Inmates',
        content:
          'The Old Charleston Jail housed prisoners from the early 1800s until 1939, including pirates, Civil War captives, and accused criminals awaiting execution. Overcrowding, disease, and harsh conditions gave the structure a grim reputation long before the last cell door closed.',
      },
      {
        title: 'Lavinia Fisher and Others',
        content:
          'One of the jail’s most talked-about spirits is Lavinia Fisher, often described as one of the first female serial killers in the United States, though the historical record is more complex. Her alleged ghost is said to appear in a wedding dress or long gown, staring from upper windows or pacing in the corridors. Other apparitions include faceless inmates and shadowy guards on endless rounds.',
      },
      {
        title: 'Tours in the Dark',
        content:
          'Today, the site hosts nighttime tours that walk visitors through peeling cellblocks and narrow staircases. Guests report EVPs, sudden chills, and the feeling of hands brushing past them in stairwells. Many leave with photographs showing unexplained shapes or lights near the barred windows and doorways.',
      },
    ],
  },
  {
    id: 'hl-67',
    name: 'Hotel del Coronado',
    description: 'A historic seaside resort whose most famous guest may never have checked out',
    location: 'Coronado, California, USA',
    hauntingType: 'Intelligent',
    bestKnownFor: 'The spirit of “Kate Morgan,” a young woman who died under mysterious circumstances',
    coordinates: {
      lat: 32.6810,
      lng: -117.1780,
    },
    thumbnailPrompt:
      'grand Victorian beachfront hotel at sunset, red turrets, Pacific waves, faint woman in 1890s dress on veranda, golden hour ghost story vibe',
    dangerRating: 2,
    hauntingIntensity: 3,
    visitorAccess: 'Hotel / Active accommodation',
    sections: [
      {
        title: 'Victorian Icon by the Sea',
        content:
          'Opened in 1888, the Hotel del Coronado is one of the most famous beachfront hotels in the United States, known for its red-roofed Victorian architecture and long list of notable guests. Its sunny exterior hides a darker chapter involving an unidentified young woman who died on the property in 1892, later commonly referred to as Kate Morgan.',
      },
      {
        title: 'The Ghost of Kate Morgan',
        content:
          'Guests and staff report activity centered around a particular guest room and nearby hallways: lights flickering, TV sets turning on and off, and temperature drops with no clear cause. Some visitors describe a woman in old-fashioned clothing seen on upper balconies or staircases, vanishing when approached. Many experiences are gentle but unmistakably strange.',
      },
      {
        title: 'Subtle Hauntings by the Ocean',
        content:
          'Elsewhere in the hotel, people note objects moving slightly, phantom footsteps along quiet corridors, and the sensation of being watched while looking out at the beach from certain windows. The hotel acknowledges the stories, and for some guests, the possibility of sharing the Del with a long-term resident is part of its enduring charm.',
      },
    ],
  },
  {
    id: 'hl-68',
    name: 'Plains of Abraham Battlefield',
    description: 'A historic Canadian battlefield where soldiers are still seen marching in the mist',
    location: 'Quebec City, Quebec, Canada',
    hauntingType: 'Residual',
    bestKnownFor: 'Phantom soldiers and battle echoes near the old ramparts',
    coordinates: {
      lat: 46.8010,
      lng: -71.2180,
    },
    thumbnailPrompt:
      'open grassy battlefield above a river, low fog at dawn, faint line of ghostly soldiers in 18th century uniforms, distant citadel walls, muted cold color palette',
    dangerRating: 2,
    hauntingIntensity: 3,
    visitorAccess: 'Open to public',
    sections: [
      {
        title: 'Clash for a Continent',
        content:
          'In 1759, the Battle of the Plains of Abraham pitted British and French forces against each other just outside the walls of Quebec City. The conflict, though brief, proved decisive for the future of North America, leaving many dead and wounded on the windswept fields overlooking the St. Lawrence River.',
      },
      {
        title: 'Echoes of Battle',
        content:
          'Visitors walking the park after dark report hearing distant drumbeats, shouted commands in French or English, and metal clashing as if bayonets still lock in the fog. Some claim to see figures in tricorne hats or 18th-century coats standing near trees or ramparts, only for them to fade like smoke.',
      },
      {
        title: 'Modern Park, Old Spirits',
        content:
          'Today, the battlefield is part of a large urban park where people picnic, jog, and attend concerts. Yet even in bright daylight, some sensitive visitors describe pockets of sadness or tension in specific spots. The site stands as both a peaceful green space and a subtle reminder that many never left the field they fell on.',
      },
    ],
  },
  {
    id: 'hl-69',
    name: 'Pripyat and the Chernobyl Exclusion Zone',
    description: 'An abandoned Soviet city where silence, radiation, and ghost stories intertwine',
    location: 'Pripyat, Kyiv Oblast, Ukraine',
    hauntingType: 'Cursed Ground',
    bestKnownFor: 'Deserted apartments, frozen carnival rides, and a sense of a city that left in a single day',
    coordinates: {
      lat: 51.4041,
      lng: 30.0571,
    },
    thumbnailPrompt:
      'abandoned Soviet Ferris wheel at dusk, overgrown city square, distant cooling towers, soft greenish haze, subtle ghostly silhouettes in empty windows, post-apocalyptic haunting',
    dangerRating: 5,
    hauntingIntensity: 4,
    visitorAccess: 'Guided tours only',
    sections: [
      {
        title: 'City Evacuated Overnight',
        content:
          'Pripyat was built in the 1970s to house workers of the Chernobyl Nuclear Power Plant. After the 1986 reactor explosion, the entire city was evacuated in a rapid, forced departure. Apartments still held toys, photos, and everyday belongings, as if life had been paused mid-moment and never resumed.',
      },
      {
        title: 'Atmosphere of a Frozen Moment',
        content:
          'Visitors on authorized tours describe an overwhelming feeling of unreality: schools with lessons still on blackboards, a rusting amusement park that never truly opened, and rows of empty, staring apartment blocks. Many people speak of a lingering presence, as though the emotions of tens of thousands of people were imprinted on the concrete.',
      },
      {
        title: 'Ghost Stories in the Exclusion Zone',
        content:
          'Beyond the very real danger of radiation, the zone has attracted paranormal tales: figures seen watching from windows, footsteps in empty stairwells, and voices carried on the wind through broken corridors. Whether interpreted as spirits, echoes, or the weight of collective trauma, Pripyat stands as one of the most unsettling modern “ghost cities” on Earth.',
      },
    ],
  },
  {
    id: 'hl-70',
    name: 'Akershus Fortress',
    description: 'A medieval Norwegian fortress guarding Oslo—and, some say, hosting spectral prisoners',
    location: 'Oslo, Norway',
    hauntingType: 'Residual',
    bestKnownFor: 'Ghostly guards, prisoners, and a demon dog on the ramparts',
    coordinates: {
      lat: 59.9061,
      lng: 10.7372,
    },
    thumbnailPrompt:
      'stone fortress above a harbor at twilight, Nordic city lights, shadowy dog silhouette on the walls, cold blue tones, northern gothic atmosphere',
    dangerRating: 2,
    hauntingIntensity: 3,
    visitorAccess: 'Museum / Historic site',
    sections: [
      {
        title: 'Castle and Stronghold',
        content:
          'Akershus Fortress dates back to the late 13th century and has served as a royal residence, military base, and prison. It has withstood sieges and witnessed centuries of political intrigue and wartime occupation, including use as a Nazi prison during World War II.',
      },
      {
        title: 'Ghost Guards and Prisoners',
        content:
          'Visitors and staff tell of spectral guards seen on the ramparts or at gates, standing at attention in uniforms from centuries past. Some report the sense of invisible prisoners crowding the old cell areas, with cold drafts and muffled voices echoing in stone corridors.',
      },
      {
        title: 'The Demon Dog Malcanisen',
        content:
          'One legend speaks of a spectral black dog, Malcanisen, buried alive at the gate in older times to protect the fortress. Those who see the dog’s red-eyed apparition are said to be marked by misfortune. Whether taken literally or as folklore, the story adds a darker layer to the castle’s already potent atmosphere.',
      },
    ],
  },
  {
    id: 'hl-71',
    name: 'Halifax Citadel',
    description: 'A Canadian star fort where soldiers from many eras still seem to stand guard',
    location: 'Halifax, Nova Scotia, Canada',
    hauntingType: 'Residual',
    bestKnownFor: 'Shadowy soldiers on the ramparts and ghost tours through the barracks',
    coordinates: {
      lat: 44.6472,
      lng: -63.5806,
    },
    thumbnailPrompt:
      'star-shaped hilltop fort at night, cannons silhouetted against city lights, faint soldier figure in 19th century uniform, maritime fog creeping in',
    dangerRating: 2,
    hauntingIntensity: 3,
    visitorAccess: 'Museum / Historic site',
    sections: [
      {
        title: 'Guarding the Harbor',
        content:
          'The Halifax Citadel has overlooked the harbor since the mid-18th century, rebuilt several times to defend the growing port. The present star-shaped fort dates to the 1800s and has seen British troops, Canadian forces, and countless drills, watches, and wartime alerts.',
      },
      {
        title: 'Soldiers in the Shadows',
        content:
          'Night watchmen and re-enactors have reported footsteps on empty ramparts, the sound of equipment clinking, and glimpses of uniformed figures slipping through doorways or standing in darkened casemates. Some describe the smell of pipe smoke or gunpowder in rooms with no recent reenactment activity.',
      },
      {
        title: 'Ghost Tours on the Hill',
        content:
          'The Citadel embraces its ghost stories with evening tours that explore tunnels, barracks, and ramparts by lantern light. Guests often report cold spots, sudden unease in specific rooms, and unexplained lights in inner courtyards. The sense is not of malevolence, but of centuries of watchful eyes still on duty.',
      },
    ],
  },
  {
    id: 'hl-72',
    name: 'New Jersey Pine Barrens',
    description: 'A vast forest where the Jersey Devil and other mysteries roam',
    location: 'Southern New Jersey, USA',
    hauntingType: 'Mixed',
    bestKnownFor: 'The Jersey Devil legend and strange lights deep in the pines',
    coordinates: {
      lat: 39.8513,
      lng: -74.4787,
    },
    thumbnailPrompt:
      'dark pine forest under starry sky, sandy trail, glowing eyes between trees, distant farmhouse light, East Coast cryptid horror mood',
    dangerRating: 3,
    hauntingIntensity: 3,
    visitorAccess: 'Open to public',
    sections: [
      {
        title: 'Wilderness of Sand and Pines',
        content:
          'The New Jersey Pine Barrens cover over a million acres of pitch pine, cedar swamps, and sandy soil. Once home to small iron and glassmaking towns, the region now feels like a different world from the crowded cities nearby, with abandoned villages and forgotten roads swallowed by trees.',
      },
      {
        title: 'The Jersey Devil',
        content:
          'Since the 1700s, locals have spoken of the Jersey Devil, a winged creature said to scream through the night sky and leave strange tracks in the sand. Sightings range from fleeting shadows crossing roads to full-bodied encounters described by hunters, park rangers, and even policemen. Some say the creature is tied to a cursed child born in the remote woods.',
      },
      {
        title: 'Lights, Voices, and Lost Roads',
        content:
          'Beyond the Devil legend, people report ghostly lantern lights along old stagecoach routes, voices near abandoned settlements, and the sense of being watched from just beyond the tree line. The Barrens demand caution: their isolation, deep bogs, and frequent wildfires make them physically risky—and for many, psychically unsettling as well.',
      },
    ],
  },
  {
    id: 'hl-73',
    name: 'Bachelor’s Grove Cemetery',
    description: 'A tiny, overgrown Illinois cemetery with an outsized haunted reputation',
    location: 'Bremen Township, Illinois, USA',
    hauntingType: 'Mixed',
    bestKnownFor: 'The “White Lady,” phantom farmhouse, and cars that vanish into thin air',
    coordinates: {
      lat: 41.6156,
      lng: -87.7946,
    },
    thumbnailPrompt:
      'small overgrown cemetery in forest clearing, broken headstones, ghostly woman in white seated on a stone, swampy pond nearby, 1970s Midwestern paranormal photo vibe',
    dangerRating: 3,
    hauntingIntensity: 4,
    visitorAccess: 'Open to public',
    sections: [
      {
        title: 'Tiny Graveyard in the Woods',
        content:
          'Bachelor’s Grove is a small cemetery dating back to the 19th century, tucked into a forest preserve near Chicago. As burials dwindled and vandalism increased, the cemetery became isolated, with toppled stones and encroaching trees lending it an eerie, forgotten look.',
      },
      {
        title: 'The White Lady and Phantom House',
        content:
          'Many visitors report a woman in a light-colored dress carrying an infant or seated in sorrow on a headstone, often called the White Lady. Some also describe seeing a two-story farmhouse near the cemetery that vanishes when approached, as if an entire building exists only as a ghost image.',
      },
      {
        title: 'Strange Lights and Vanishing Vehicles',
        content:
          'Light anomalies, orbs, and unexplained mists have appeared in photographs for decades. Classic local stories include phantom cars with glowing headlights that disappear on the access road and splashing sounds in the adjacent pond with no visible source. Even seasoned investigators often leave Bachelor’s Grove with at least one inexplicable experience.',
      },
    ],
  },
  {
    id: 'hl-74',
    name: 'Stull Cemetery',
    description: 'A rural Kansas graveyard entwined with “gateway to Hell” legends',
    location: 'Stull, Kansas, USA',
    hauntingType: 'Portal',
    bestKnownFor: 'Stories of occult gatherings, a ruined church, and a supposed doorway to the underworld',
    coordinates: {
      lat: 38.9711,
      lng: -95.4561,
    },
    thumbnailPrompt:
      'windswept rural cemetery on a hill, few scattered headstones, remains of an old stone church, stormy Midwestern sky, subtle infernal glow at horizon',
    dangerRating: 3,
    hauntingIntensity: 3,
    visitorAccess: 'Restricted / No public access',
    sections: [
      {
        title: 'Quiet Hamlet, Loud Legends',
        content:
          'Stull is a tiny unincorporated community in rural Kansas. Its hilltop cemetery gained national attention in the 1970s when stories began circulating that it was a site of intense occult activity and that an old church there housed a “gateway to Hell.” The legends spread through campus newspapers, books, and later the internet.',
      },
      {
        title: 'The Ruined Church and Dark Dates',
        content:
          'Accounts claim that strange winds, disembodied voices, and manifestations occur there on Halloween and the spring equinox. The now-demolished church ruins were said to be a focal point, with stories of black-clad figures, inverted crosses, and time distortion. Locals have grown understandably frustrated with trespassers, and access is strongly discouraged.',
      },
      {
        title: 'Modern Myths and Uneasy Ground',
        content:
          'Whether viewed as urban legend or genuine hotspot, many who have slipped onto the grounds describe oppressive silence, sudden fear, and a sense of being unwelcome. The cemetery stands as a reminder that even small, quiet places can gather enormous supernatural reputations when stories and experiences feed into each other over decades.',
      },
    ],
  },
  {
    id: 'hl-75',
    name: 'Château de Fougeret',
    description: 'A French château where owners and guests report unusually direct spirit contact',
    location: 'Queaux, Nouvelle-Aquitaine, France',
    hauntingType: 'Intelligent',
    bestKnownFor: 'Interactive séances, named spirits, and guests invited to sleep among the ghosts',
    coordinates: {
      lat: 46.3389,
      lng: 0.6744,
    },
    thumbnailPrompt:
      'ivy-covered French château on a hill at dusk, warm interior lights, mist rising from surrounding forest, faint translucent figures at upper windows, elegant European haunting style',
    dangerRating: 3,
    hauntingIntensity: 5,
    visitorAccess: 'Hotel / Active accommodation',
    sections: [
      {
        title: 'From Ruin to Haunted Guesthouse',
        content:
          'Château de Fougeret is a historic French manor that fell into disrepair before being purchased and restored by new owners in the 2000s. During renovations, they began to report intense paranormal activity: voices, apparitions, and impressions of specific personalities lingering in the rooms.',
      },
      {
        title: 'Named Spirits and Séances',
        content:
          'Unlike many sites where spirits remain anonymous, the owners here speak of distinct presences with names and backstories believed to be tied to the château’s history. Public séances, EVP sessions, and paranormal events are held, with participants frequently reporting direct responses to questions, touches, and vivid dream-like experiences after sleeping in certain rooms.',
      },
      {
        title: 'Guests as Witnesses',
        content:
          'Visitors staying overnight describe footsteps in empty halls, beds subtly shaking, and cold hands brushing their skin. Some leave with photographs showing figures or faces that were not present at the time. The château openly promotes itself as “haunted,” inviting those who are curious—and brave—to share the space with its unseen residents.',
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

/**
 * Get all haunted locations
 * @returns Array of all haunted locations
 */
export const getAllHauntedLocations = (): readonly HauntedLocation[] => {
  return hauntedLocationsData;
};

/**
 * Get count of haunted locations
 * @returns Total number of haunted locations
 */
export const getHauntedLocationsCount = (): number => {
  return hauntedLocationsData.length;
};

/**
 * Get haunted locations by country/region
 * @param location - Location string (e.g., "England", "USA")
 * @returns Matching haunted locations
 */
export const getHauntedLocationsByRegion = (location: string): HauntedLocation[] => {
  return hauntedLocationsData.filter(loc =>
    loc.location.toLowerCase().includes(location.toLowerCase())
  );
};
