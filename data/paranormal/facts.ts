
import { categoryColors } from '@/constants/Colors';

export interface ParanormalFact {
  id: string;
  categoryId: string;
  categoryName: string;
  color: string;
  fact: string;
  source?: string;
}

export const paranormalFacts: ParanormalFact[] = [
  // Creatures (20 facts)
  { id: 'f1', categoryId: 'creatures', categoryName: 'Creatures', color: categoryColors.creatures, fact: 'Bigfoot sightings have been reported in every U.S. state except Hawaii.' },
  { id: 'f2', categoryId: 'creatures', categoryName: 'Creatures', color: categoryColors.creatures, fact: 'The first photograph of the Loch Ness Monster was taken in 1933 by Hugh Gray.' },
  { id: 'f3', categoryId: 'creatures', categoryName: 'Creatures', color: categoryColors.creatures, fact: 'Chupacabra means "goat-sucker" in Spanish, named for its alleged habit of attacking livestock.' },
  { id: 'f4', categoryId: 'creatures', categoryName: 'Creatures', color: categoryColors.creatures, fact: 'Mothman was first sighted in Point Pleasant, West Virginia in 1966.' },
  { id: 'f5', categoryId: 'creatures', categoryName: 'Creatures', color: categoryColors.creatures, fact: 'The Jersey Devil is said to be the 13th child of Mother Leeds, born in 1735.' },
  { id: 'f6', categoryId: 'creatures', categoryName: 'Creatures', color: categoryColors.creatures, fact: 'The Yeti, or Abominable Snowman, has been part of Himalayan folklore for centuries.' },
  { id: 'f7', categoryId: 'creatures', categoryName: 'Creatures', color: categoryColors.creatures, fact: 'Cryptozoology is the study of hidden or unknown animals.' },
  { id: 'f8', categoryId: 'creatures', categoryName: 'Creatures', color: categoryColors.creatures, fact: 'The Mongolian Death Worm is said to spit acid and generate electricity.' },
  { id: 'f9', categoryId: 'creatures', categoryName: 'Creatures', color: categoryColors.creatures, fact: 'Thunderbirds are giant birds from Native American mythology, with wingspans up to 20 feet.' },
  { id: 'f10', categoryId: 'creatures', categoryName: 'Creatures', color: categoryColors.creatures, fact: 'The Dover Demon was spotted in Massachusetts over two nights in 1977.' },
  { id: 'f11', categoryId: 'creatures', categoryName: 'Creatures', color: categoryColors.creatures, fact: 'Wendigos are malevolent spirits from Algonquian folklore associated with cannibalism.' },
  { id: 'f12', categoryId: 'creatures', categoryName: 'Creatures', color: categoryColors.creatures, fact: 'The Beast of Gévaudan killed over 100 people in 18th century France.' },
  { id: 'f13', categoryId: 'creatures', categoryName: 'Creatures', color: categoryColors.creatures, fact: 'Mokele-mbembe is a dinosaur-like creature said to inhabit the Congo River basin.' },
  { id: 'f14', categoryId: 'creatures', categoryName: 'Creatures', color: categoryColors.creatures, fact: 'The Flatwoods Monster was seen in West Virginia in 1952, described as 10 feet tall.' },
  { id: 'f15', categoryId: 'creatures', categoryName: 'Creatures', color: categoryColors.creatures, fact: 'Skinwalkers are shape-shifting witches from Navajo tradition.' },
  { id: 'f16', categoryId: 'creatures', categoryName: 'Creatures', color: categoryColors.creatures, fact: 'The Loveland Frog is a humanoid frog creature reported in Ohio.' },
  { id: 'f17', categoryId: 'creatures', categoryName: 'Creatures', color: categoryColors.creatures, fact: 'Bunyips are mythical creatures from Australian Aboriginal mythology.' },
  { id: 'f18', categoryId: 'creatures', categoryName: 'Creatures', color: categoryColors.creatures, fact: 'The Fresno Nightcrawler is a mysterious creature caught on security cameras.' },
  { id: 'f19', categoryId: 'creatures', categoryName: 'Creatures', color: categoryColors.creatures, fact: 'El Silbón is a Venezuelan ghost that whistles and carries a bag of bones.' },
  { id: 'f20', categoryId: 'creatures', categoryName: 'Creatures', color: categoryColors.creatures, fact: 'The Tatzelwurm is a lizard-like creature from Alpine folklore.' },

  // UFOs (20 facts)
  { id: 'f21', categoryId: 'ufos', categoryName: 'UFOs', color: categoryColors.ufos, fact: 'The term "flying saucer" was coined after Kenneth Arnold\'s 1947 sighting.' },
  { id: 'f22', categoryId: 'ufos', categoryName: 'UFOs', color: categoryColors.ufos, fact: 'Project Blue Book investigated over 12,000 UFO reports from 1952 to 1969.' },
  { id: 'f23', categoryId: 'ufos', categoryName: 'UFOs', color: categoryColors.ufos, fact: 'The Phoenix Lights were witnessed by thousands, including the Arizona governor.' },
  { id: 'f24', categoryId: 'ufos', categoryName: 'UFOs', color: categoryColors.ufos, fact: 'Betty and Barney Hill claimed to be abducted by aliens in 1961.' },
  { id: 'f25', categoryId: 'ufos', categoryName: 'UFOs', color: categoryColors.ufos, fact: 'The Rendlesham Forest incident is known as "Britain\'s Roswell."' },
  { id: 'f26', categoryId: 'ufos', categoryName: 'UFOs', color: categoryColors.ufos, fact: 'The U.S. Navy released official UFO footage in 2020.' },
  { id: 'f27', categoryId: 'ufos', categoryName: 'UFOs', color: categoryColors.ufos, fact: 'The Majestic 12 was allegedly a secret committee to investigate UFOs.' },
  { id: 'f28', categoryId: 'ufos', categoryName: 'UFOs', color: categoryColors.ufos, fact: 'The Battle of Los Angeles in 1942 involved anti-aircraft fire at unknown objects.' },
  { id: 'f29', categoryId: 'ufos', categoryName: 'UFOs', color: categoryColors.ufos, fact: 'Travis Walton claimed to be abducted by a UFO in 1975.' },
  { id: 'f30', categoryId: 'ufos', categoryName: 'UFOs', color: categoryColors.ufos, fact: 'The Washington D.C. UFO incident of 1952 caused military jets to scramble.' },
  { id: 'f31', categoryId: 'ufos', categoryName: 'UFOs', color: categoryColors.ufos, fact: 'The Kecksburg UFO incident involved a mysterious acorn-shaped object in 1965.' },
  { id: 'f32', categoryId: 'ufos', categoryName: 'UFOs', color: categoryColors.ufos, fact: 'The Shag Harbour incident is Canada\'s most famous UFO case.' },
  { id: 'f33', categoryId: 'ufos', categoryName: 'UFOs', color: categoryColors.ufos, fact: 'The Lubbock Lights were photographed by a Texas college student in 1951.' },
  { id: 'f34', categoryId: 'ufos', categoryName: 'UFOs', color: categoryColors.ufos, fact: 'The Westall UFO encounter involved over 200 students and teachers in Australia.' },
  { id: 'f35', categoryId: 'ufos', categoryName: 'UFOs', color: categoryColors.ufos, fact: 'The Belgian UFO wave lasted from 1989 to 1990 with thousands of sightings.' },
  { id: 'f36', categoryId: 'ufos', categoryName: 'UFOs', color: categoryColors.ufos, fact: 'The Stephenville UFO sightings in Texas were witnessed by dozens in 2008.' },
  { id: 'f37', categoryId: 'ufos', categoryName: 'UFOs', color: categoryColors.ufos, fact: 'The O\'Hare Airport UFO sighting involved United Airlines employees in 2006.' },
  { id: 'f38', categoryId: 'ufos', categoryName: 'UFOs', color: categoryColors.ufos, fact: 'The Ariel School encounter in Zimbabwe involved 62 children in 1994.' },
  { id: 'f39', categoryId: 'ufos', categoryName: 'UFOs', color: categoryColors.ufos, fact: 'The Colares UFO flap in Brazil involved alleged attacks by UFOs in 1977.' },
  { id: 'f40', categoryId: 'ufos', categoryName: 'UFOs', color: categoryColors.ufos, fact: 'The Nimitz UFO encounter was tracked on radar and witnessed by Navy pilots.' },

  // Ghosts (20 facts)
  { id: 'f41', categoryId: 'ghosts', categoryName: 'Ghosts', color: categoryColors.ghosts, fact: 'The Bell Witch haunting lasted from 1817 to 1821 in Tennessee.' },
  { id: 'f42', categoryId: 'ghosts', categoryName: 'Ghosts', color: categoryColors.ghosts, fact: 'The Amityville Horror house was the site of a mass murder in 1974.' },
  { id: 'f43', categoryId: 'ghosts', categoryName: 'Ghosts', color: categoryColors.ghosts, fact: 'Anne Boleyn\'s ghost is said to haunt the Tower of London.' },
  { id: 'f44', categoryId: 'ghosts', categoryName: 'Ghosts', color: categoryColors.ghosts, fact: 'The Winchester Mystery House has 160 rooms and was built to confuse spirits.' },
  { id: 'f45', categoryId: 'ghosts', categoryName: 'Ghosts', color: categoryColors.ghosts, fact: 'The Stanley Hotel inspired Stephen King to write The Shining.' },
  { id: 'f46', categoryId: 'ghosts', categoryName: 'Ghosts', color: categoryColors.ghosts, fact: 'The Brown Lady of Raynham Hall is one of the most famous ghost photographs.' },
  { id: 'f47', categoryId: 'ghosts', categoryName: 'Ghosts', color: categoryColors.ghosts, fact: 'The Myrtles Plantation is considered one of America\'s most haunted homes.' },
  { id: 'f48', categoryId: 'ghosts', categoryName: 'Ghosts', color: categoryColors.ghosts, fact: 'The Queen Mary ship is said to be haunted by numerous spirits.' },
  { id: 'f49', categoryId: 'ghosts', categoryName: 'Ghosts', color: categoryColors.ghosts, fact: 'The Whaley House in San Diego is officially recognized as haunted.' },
  { id: 'f50', categoryId: 'ghosts', categoryName: 'Ghosts', color: categoryColors.ghosts, fact: 'The Ancient Ram Inn in England dates back to 1145 and is extremely haunted.' },
  { id: 'f51', categoryId: 'ghosts', categoryName: 'Ghosts', color: categoryColors.ghosts, fact: 'The Villisca Axe Murder House is the site of an unsolved 1912 murder.' },
  { id: 'f52', categoryId: 'ghosts', categoryName: 'Ghosts', color: categoryColors.ghosts, fact: 'The Lizzie Borden House is now a bed and breakfast where guests report paranormal activity.' },
  { id: 'f53', categoryId: 'ghosts', categoryName: 'Ghosts', color: categoryColors.ghosts, fact: 'The Waverly Hills Sanatorium is known for its "death tunnel" and numerous hauntings.' },
  { id: 'f54', categoryId: 'ghosts', categoryName: 'Ghosts', color: categoryColors.ghosts, fact: 'The Eastern State Penitentiary in Philadelphia is one of the most haunted prisons.' },
  { id: 'f55', categoryId: 'ghosts', categoryName: 'Ghosts', color: categoryColors.ghosts, fact: 'The Leap Castle in Ireland is said to be the most haunted castle in the world.' },
  { id: 'f56', categoryId: 'ghosts', categoryName: 'Ghosts', color: categoryColors.ghosts, fact: 'The Borley Rectory was called "the most haunted house in England."' },
  { id: 'f57', categoryId: 'ghosts', categoryName: 'Ghosts', color: categoryColors.ghosts, fact: 'The Conjuring house in Rhode Island was investigated by Ed and Lorraine Warren.' },
  { id: 'f58', categoryId: 'ghosts', categoryName: 'Ghosts', color: categoryColors.ghosts, fact: 'The LaLaurie Mansion in New Orleans has a dark history of torture and murder.' },
  { id: 'f59', categoryId: 'ghosts', categoryName: 'Ghosts', color: categoryColors.ghosts, fact: 'The Bhangarh Fort in India is legally prohibited to visit after dark.' },
  { id: 'f60', categoryId: 'ghosts', categoryName: 'Ghosts', color: categoryColors.ghosts, fact: 'The Screaming Tunnel in Canada is said to be haunted by a young girl.' },

  // Occult (20 facts)
  { id: 'f61', categoryId: 'occult', categoryName: 'Occult', color: categoryColors.occult, fact: 'The Necronomicon was created by H.P. Lovecraft but many believe it\'s real.' },
  { id: 'f62', categoryId: 'occult', categoryName: 'Occult', color: categoryColors.occult, fact: 'Aleister Crowley called himself "The Great Beast 666."' },
  { id: 'f63', categoryId: 'occult', categoryName: 'Occult', color: categoryColors.occult, fact: 'The Ouija board was patented as a toy in 1891.' },
  { id: 'f64', categoryId: 'occult', categoryName: 'Occult', color: categoryColors.occult, fact: 'Voodoo originated in West Africa and was brought to the Americas through slavery.' },
  { id: 'f65', categoryId: 'occult', categoryName: 'Occult', color: categoryColors.occult, fact: 'The Lesser Key of Solomon contains descriptions of 72 demons.' },
  { id: 'f66', categoryId: 'occult', categoryName: 'Occult', color: categoryColors.occult, fact: 'The Hermetic Order of the Golden Dawn was a secret society focused on occult studies.' },
  { id: 'f67', categoryId: 'occult', categoryName: 'Occult', color: categoryColors.occult, fact: 'Tarot cards were originally used for playing games, not divination.' },
  { id: 'f68', categoryId: 'occult', categoryName: 'Occult', color: categoryColors.occult, fact: 'The Book of Shadows is a personal grimoire used in Wicca.' },
  { id: 'f69', categoryId: 'occult', categoryName: 'Occult', color: categoryColors.occult, fact: 'Alchemy sought to transform base metals into gold and discover the elixir of life.' },
  { id: 'f70', categoryId: 'occult', categoryName: 'Occult', color: categoryColors.occult, fact: 'The Kabbalah is an ancient Jewish mystical tradition.' },
  { id: 'f71', categoryId: 'occult', categoryName: 'Occult', color: categoryColors.occult, fact: 'Sigils are symbols created for magical purposes.' },
  { id: 'f72', categoryId: 'occult', categoryName: 'Occult', color: categoryColors.occult, fact: 'The Thule Society was a German occult group linked to the Nazi party.' },
  { id: 'f73', categoryId: 'occult', categoryName: 'Occult', color: categoryColors.occult, fact: 'Ceremonial magic involves elaborate rituals and invocations.' },
  { id: 'f74', categoryId: 'occult', categoryName: 'Occult', color: categoryColors.occult, fact: 'The Goetia is a grimoire for summoning demons.' },
  { id: 'f75', categoryId: 'occult', categoryName: 'Occult', color: categoryColors.occult, fact: 'Chaos magic emphasizes belief as a tool rather than absolute truth.' },
  { id: 'f76', categoryId: 'occult', categoryName: 'Occult', color: categoryColors.occult, fact: 'The Picatrix is a medieval grimoire of astrological magic.' },
  { id: 'f77', categoryId: 'occult', categoryName: 'Occult', color: categoryColors.occult, fact: 'Enochian magic was developed by John Dee and Edward Kelley.' },
  { id: 'f78', categoryId: 'occult', categoryName: 'Occult', color: categoryColors.occult, fact: 'The Seal of Solomon is said to have given King Solomon power over demons.' },
  { id: 'f79', categoryId: 'occult', categoryName: 'Occult', color: categoryColors.occult, fact: 'Thelema is a spiritual philosophy developed by Aleister Crowley.' },
  { id: 'f80', categoryId: 'occult', categoryName: 'Occult', color: categoryColors.occult, fact: 'The Black Mass is a parody of the Catholic Mass.' },

  // Psychic (20 facts)
  { id: 'f81', categoryId: 'psychic', categoryName: 'Psychic', color: categoryColors.psychic, fact: 'Telepathy is the alleged ability to communicate mind-to-mind.' },
  { id: 'f82', categoryId: 'psychic', categoryName: 'Psychic', color: categoryColors.psychic, fact: 'The CIA\'s Stargate Project studied remote viewing from 1978 to 1995.' },
  { id: 'f83', categoryId: 'psychic', categoryName: 'Psychic', color: categoryColors.psychic, fact: 'Precognition is the ability to see future events before they happen.' },
  { id: 'f84', categoryId: 'psychic', categoryName: 'Psychic', color: categoryColors.psychic, fact: 'Psychokinesis, or PK, is the alleged ability to move objects with the mind.' },
  { id: 'f85', categoryId: 'psychic', categoryName: 'Psychic', color: categoryColors.psychic, fact: 'Uri Geller became famous for allegedly bending spoons with his mind.' },
  { id: 'f86', categoryId: 'psychic', categoryName: 'Psychic', color: categoryColors.psychic, fact: 'Clairvoyance is the ability to gain information about objects or events through extrasensory means.' },
  { id: 'f87', categoryId: 'psychic', categoryName: 'Psychic', color: categoryColors.psychic, fact: 'The Ganzfeld experiment is used to test for telepathy.' },
  { id: 'f88', categoryId: 'psychic', categoryName: 'Psychic', color: categoryColors.psychic, fact: 'Psychometry is the alleged ability to read information from objects by touching them.' },
  { id: 'f89', categoryId: 'psychic', categoryName: 'Psychic', color: categoryColors.psychic, fact: 'Astral projection is the claimed ability to separate consciousness from the physical body.' },
  { id: 'f90', categoryId: 'psychic', categoryName: 'Psychic', color: categoryColors.psychic, fact: 'The third eye is associated with psychic abilities in many traditions.' },
  { id: 'f91', categoryId: 'psychic', categoryName: 'Psychic', color: categoryColors.psychic, fact: 'Mediumship involves communicating with spirits of the dead.' },
  { id: 'f92', categoryId: 'psychic', categoryName: 'Psychic', color: categoryColors.psychic, fact: 'Aura reading is the claimed ability to see energy fields around people.' },
  { id: 'f93', categoryId: 'psychic', categoryName: 'Psychic', color: categoryColors.psychic, fact: 'Dowsing is used to locate water or minerals using a divining rod.' },
  { id: 'f94', categoryId: 'psychic', categoryName: 'Psychic', color: categoryColors.psychic, fact: 'The Silva Method teaches techniques for developing psychic abilities.' },
  { id: 'f95', categoryId: 'psychic', categoryName: 'Psychic', color: categoryColors.psychic, fact: 'Retrocognition is the alleged ability to see past events.' },
  { id: 'f96', categoryId: 'psychic', categoryName: 'Psychic', color: categoryColors.psychic, fact: 'Automatic writing is when a person writes without conscious thought.' },
  { id: 'f97', categoryId: 'psychic', categoryName: 'Psychic', color: categoryColors.psychic, fact: 'The Rhine Research Center studies parapsychology and psychic phenomena.' },
  { id: 'f98', categoryId: 'psychic', categoryName: 'Psychic', color: categoryColors.psychic, fact: 'Bilocation is the alleged ability to be in two places at once.' },
  { id: 'f99', categoryId: 'psychic', categoryName: 'Psychic', color: categoryColors.psychic, fact: 'Thoughtography is the claimed ability to imprint images on film using the mind.' },
  { id: 'f100', categoryId: 'psychic', categoryName: 'Psychic', color: categoryColors.psychic, fact: 'The Global Consciousness Project studies whether human consciousness affects random number generators.' },

  // Ancients (20 facts)
  { id: 'f101', categoryId: 'ancients', categoryName: 'Ancients', color: categoryColors.ancients, fact: 'Plato first wrote about Atlantis around 360 BCE.' },
  { id: 'f102', categoryId: 'ancients', categoryName: 'Ancients', color: categoryColors.ancients, fact: 'The Great Pyramid of Giza was built around 2560 BCE.' },
  { id: 'f103', categoryId: 'ancients', categoryName: 'Ancients', color: categoryColors.ancients, fact: 'Stonehenge was constructed in several stages from 3000 to 2000 BCE.' },
  { id: 'f104', categoryId: 'ancients', categoryName: 'Ancients', color: categoryColors.ancients, fact: 'The Nazca Lines were created between 500 BCE and 500 CE.' },
  { id: 'f105', categoryId: 'ancients', categoryName: 'Ancients', color: categoryColors.ancients, fact: 'Easter Island\'s Moai statues were carved between 1400 and 1650 CE.' },
  { id: 'f106', categoryId: 'ancients', categoryName: 'Ancients', color: categoryColors.ancients, fact: 'The Antikythera mechanism is an ancient Greek analog computer from 100 BCE.' },
  { id: 'f107', categoryId: 'ancients', categoryName: 'Ancients', color: categoryColors.ancients, fact: 'Göbekli Tepe in Turkey is over 11,000 years old, predating Stonehenge.' },
  { id: 'f108', categoryId: 'ancients', categoryName: 'Ancients', color: categoryColors.ancients, fact: 'The Baghdad Battery suggests ancient knowledge of electricity.' },
  { id: 'f109', categoryId: 'ancients', categoryName: 'Ancients', color: categoryColors.ancients, fact: 'Puma Punku in Bolivia features precisely cut stones that fit together perfectly.' },
  { id: 'f110', categoryId: 'ancients', categoryName: 'Ancients', color: categoryColors.ancients, fact: 'The Sacsayhuamán walls in Peru are built with massive stones fitted without mortar.' },
  { id: 'f111', categoryId: 'ancients', categoryName: 'Ancients', color: categoryColors.ancients, fact: 'The Dendera Light in Egypt appears to show an ancient electrical device.' },
  { id: 'f112', categoryId: 'ancients', categoryName: 'Ancients', color: categoryColors.ancients, fact: 'The Piri Reis map from 1513 shows Antarctica before it was officially discovered.' },
  { id: 'f113', categoryId: 'ancients', categoryName: 'Ancients', color: categoryColors.ancients, fact: 'The Yonaguni Monument off Japan may be a submerged ancient structure.' },
  { id: 'f114', categoryId: 'ancients', categoryName: 'Ancients', color: categoryColors.ancients, fact: 'The Longyou Caves in China were carved from solid rock with unknown tools.' },
  { id: 'f115', categoryId: 'ancients', categoryName: 'Ancients', color: categoryColors.ancients, fact: 'The Dropa Stones allegedly contain hieroglyphics about ancient aliens.' },
  { id: 'f116', categoryId: 'ancients', categoryName: 'Ancients', color: categoryColors.ancients, fact: 'The Sumerian King List includes rulers who reigned for thousands of years.' },
  { id: 'f117', categoryId: 'ancients', categoryName: 'Ancients', color: categoryColors.ancients, fact: 'The Olmec heads in Mexico weigh up to 50 tons each.' },
  { id: 'f118', categoryId: 'ancients', categoryName: 'Ancients', color: categoryColors.ancients, fact: 'The Baalbek stones in Lebanon include blocks weighing over 800 tons.' },
  { id: 'f119', categoryId: 'ancients', categoryName: 'Ancients', color: categoryColors.ancients, fact: 'The Sphinx may be much older than traditionally believed.' },
  { id: 'f120', categoryId: 'ancients', categoryName: 'Ancients', color: categoryColors.ancients, fact: 'The Library of Alexandria contained knowledge from the ancient world.' },

  // Folklore (20 facts)
  { id: 'f121', categoryId: 'folklore', categoryName: 'Folklore', color: categoryColors.folklore, fact: 'Vampire legends exist in nearly every culture around the world.' },
  { id: 'f122', categoryId: 'folklore', categoryName: 'Folklore', color: categoryColors.folklore, fact: 'Werewolf legends date back to ancient Greece and Rome.' },
  { id: 'f123', categoryId: 'folklore', categoryName: 'Folklore', color: categoryColors.folklore, fact: 'Fairies in Celtic folklore could be benevolent or malevolent.' },
  { id: 'f124', categoryId: 'folklore', categoryName: 'Folklore', color: categoryColors.folklore, fact: 'Dragons appear in the mythology of cultures worldwide.' },
  { id: 'f125', categoryId: 'folklore', categoryName: 'Folklore', color: categoryColors.folklore, fact: 'The Kraken was said to be large enough to drag ships underwater.' },
  { id: 'f126', categoryId: 'folklore', categoryName: 'Folklore', color: categoryColors.folklore, fact: 'Banshees in Irish folklore wail to announce an impending death.' },
  { id: 'f127', categoryId: 'folklore', categoryName: 'Folklore', color: categoryColors.folklore, fact: 'Kitsune are fox spirits in Japanese folklore with magical abilities.' },
  { id: 'f128', categoryId: 'folklore', categoryName: 'Folklore', color: categoryColors.folklore, fact: 'The Headless Horseman is a character from American folklore.' },
  { id: 'f129', categoryId: 'folklore', categoryName: 'Folklore', color: categoryColors.folklore, fact: 'Selkies are seal-people from Scottish and Irish mythology.' },
  { id: 'f130', categoryId: 'folklore', categoryName: 'Folklore', color: categoryColors.folklore, fact: 'The Baba Yaga is a witch from Slavic folklore who lives in a walking hut.' },
  { id: 'f131', categoryId: 'folklore', categoryName: 'Folklore', color: categoryColors.folklore, fact: 'Trolls in Scandinavian folklore turn to stone in sunlight.' },
  { id: 'f132', categoryId: 'folklore', categoryName: 'Folklore', color: categoryColors.folklore, fact: 'The Golem is a creature from Jewish folklore made from clay.' },
  { id: 'f133', categoryId: 'folklore', categoryName: 'Folklore', color: categoryColors.folklore, fact: 'Leprechauns are small fairies from Irish folklore who guard pots of gold.' },
  { id: 'f134', categoryId: 'folklore', categoryName: 'Folklore', color: categoryColors.folklore, fact: 'The Phoenix is a bird that rises from its own ashes.' },
  { id: 'f135', categoryId: 'folklore', categoryName: 'Folklore', color: categoryColors.folklore, fact: 'Unicorns were believed to be real animals in medieval times.' },
  { id: 'f136', categoryId: 'folklore', categoryName: 'Folklore', color: categoryColors.folklore, fact: 'The Basilisk could kill with its gaze according to legend.' },
  { id: 'f137', categoryId: 'folklore', categoryName: 'Folklore', color: categoryColors.folklore, fact: 'Mermaids appear in folklore from cultures around the world.' },
  { id: 'f138', categoryId: 'folklore', categoryName: 'Folklore', color: categoryColors.folklore, fact: 'The Minotaur was a creature with a bull\'s head and human body.' },
  { id: 'f139', categoryId: 'folklore', categoryName: 'Folklore', color: categoryColors.folklore, fact: 'Griffins are creatures with the body of a lion and head of an eagle.' },
  { id: 'f140', categoryId: 'folklore', categoryName: 'Folklore', color: categoryColors.folklore, fact: 'The Chimera was a fire-breathing hybrid creature from Greek mythology.' },

  // Phenomena (20 facts)
  { id: 'f141', categoryId: 'phenomena', categoryName: 'Phenomena', color: categoryColors.phenomena, fact: 'Spontaneous human combustion has been reported for over 300 years.' },
  { id: 'f142', categoryId: 'phenomena', categoryName: 'Phenomena', color: categoryColors.phenomena, fact: 'The Bermuda Triangle has been linked to numerous disappearances since the 1950s.' },
  { id: 'f143', categoryId: 'phenomena', categoryName: 'Phenomena', color: categoryColors.phenomena, fact: 'Ball lightning is a rare atmospheric phenomenon that science struggles to explain.' },
  { id: 'f144', categoryId: 'phenomena', categoryName: 'Phenomena', color: categoryColors.phenomena, fact: 'Crop circles have appeared in fields worldwide, with complex geometric patterns.' },
  { id: 'f145', categoryId: 'phenomena', categoryName: 'Phenomena', color: categoryColors.phenomena, fact: 'Time slips are experiences where people claim to have traveled through time.' },
  { id: 'f146', categoryId: 'phenomena', categoryName: 'Phenomena', color: categoryColors.phenomena, fact: 'The Hessdalen Lights in Norway are unexplained lights that appear regularly.' },
  { id: 'f147', categoryId: 'phenomena', categoryName: 'Phenomena', color: categoryColors.phenomena, fact: 'Raining animals, like fish and frogs, has been documented throughout history.' },
  { id: 'f148', categoryId: 'phenomena', categoryName: 'Phenomena', color: categoryColors.phenomena, fact: 'The Marfa Lights in Texas have been observed since the 1880s.' },
  { id: 'f149', categoryId: 'phenomena', categoryName: 'Phenomena', color: categoryColors.phenomena, fact: 'Poltergeist activity involves objects moving or sounds occurring without explanation.' },
  { id: 'f150', categoryId: 'phenomena', categoryName: 'Phenomena', color: categoryColors.phenomena, fact: 'The Hum is a low-frequency sound heard by people in various locations worldwide.' },
  { id: 'f151', categoryId: 'phenomena', categoryName: 'Phenomena', color: categoryColors.phenomena, fact: 'Stigmata are wounds that appear on the body resembling crucifixion wounds.' },
  { id: 'f152', categoryId: 'phenomena', categoryName: 'Phenomena', color: categoryColors.phenomena, fact: 'The Devil\'s Sea near Japan is similar to the Bermuda Triangle.' },
  { id: 'f153', categoryId: 'phenomena', categoryName: 'Phenomena', color: categoryColors.phenomena, fact: 'Earthquake lights are luminous phenomena that appear before or during earthquakes.' },
  { id: 'f154', categoryId: 'phenomena', categoryName: 'Phenomena', color: categoryColors.phenomena, fact: 'The Bloop was an ultra-low-frequency sound detected in the Pacific Ocean.' },
  { id: 'f155', categoryId: 'phenomena', categoryName: 'Phenomena', color: categoryColors.phenomena, fact: 'Phantom islands have appeared on maps but don\'t actually exist.' },
  { id: 'f156', categoryId: 'phenomena', categoryName: 'Phenomena', color: categoryColors.phenomena, fact: 'The Oakville Blobs were gelatinous substances that fell from the sky in Washington.' },
  { id: 'f157', categoryId: 'phenomena', categoryName: 'Phenomena', color: categoryColors.phenomena, fact: 'Gravity hills create the illusion that objects roll uphill.' },
  { id: 'f158', categoryId: 'phenomena', categoryName: 'Phenomena', color: categoryColors.phenomena, fact: 'The Hutchison Effect allegedly demonstrates anti-gravity and metal fusion.' },
  { id: 'f159', categoryId: 'phenomena', categoryName: 'Phenomena', color: categoryColors.phenomena, fact: 'Skyquakes are unexplained booming sounds heard around the world.' },
  { id: 'f160', categoryId: 'phenomena', categoryName: 'Phenomena', color: categoryColors.phenomena, fact: 'The Overtoun Bridge in Scotland is known for dogs jumping off it.' },

  // People (20 facts)
  { id: 'f161', categoryId: 'people', categoryName: 'People', color: categoryColors.people, fact: 'Nostradamus wrote Les Prophéties in 1555, containing alleged predictions.' },
  { id: 'f162', categoryId: 'people', categoryName: 'People', color: categoryColors.people, fact: 'Rasputin survived poisoning, shooting, and beating before finally drowning.' },
  { id: 'f163', categoryId: 'people', categoryName: 'People', color: categoryColors.people, fact: 'Edgar Cayce gave over 14,000 psychic readings while in a trance state.' },
  { id: 'f164', categoryId: 'people', categoryName: 'People', color: categoryColors.people, fact: 'John Dee was Queen Elizabeth I\'s advisor and practiced Enochian magic.' },
  { id: 'f165', categoryId: 'people', categoryName: 'People', color: categoryColors.people, fact: 'The Count of St. Germain claimed to be centuries old and never aged.' },
  { id: 'f166', categoryId: 'people', categoryName: 'People', color: categoryColors.people, fact: 'Baba Vanga was a Bulgarian mystic who allegedly predicted major world events.' },
  { id: 'f167', categoryId: 'people', categoryName: 'People', color: categoryColors.people, fact: 'Nikola Tesla claimed to receive visions and communicate with other dimensions.' },
  { id: 'f168', categoryId: 'people', categoryName: 'People', color: categoryColors.people, fact: 'Madame Blavatsky founded the Theosophical Society in 1875.' },
  { id: 'f169', categoryId: 'people', categoryName: 'People', color: categoryColors.people, fact: 'Daniel Dunglas Home was a famous medium who allegedly levitated.' },
  { id: 'f170', categoryId: 'people', categoryName: 'People', color: categoryColors.people, fact: 'Fulcanelli was a mysterious alchemist who wrote about the secrets of cathedrals.' },
  { id: 'f171', categoryId: 'people', categoryName: 'People', color: categoryColors.people, fact: 'Paracelsus was a Renaissance physician who practiced alchemy and astrology.' },
  { id: 'f172', categoryId: 'people', categoryName: 'People', color: categoryColors.people, fact: 'Mother Shipton was an English prophetess from the 16th century.' },
  { id: 'f173', categoryId: 'people', categoryName: 'People', color: categoryColors.people, fact: 'The Fox Sisters sparked the Spiritualism movement in 1848.' },
  { id: 'f174', categoryId: 'people', categoryName: 'People', color: categoryColors.people, fact: 'Grigori Rasputin was known as the "Mad Monk" of Russia.' },
  { id: 'f175', categoryId: 'people', categoryName: 'People', color: categoryColors.people, fact: 'Jeane Dixon was a famous American psychic and astrologer.' },
  { id: 'f176', categoryId: 'people', categoryName: 'People', color: categoryColors.people, fact: 'Wolf Messing was a Soviet psychic who allegedly demonstrated telepathy.' },
  { id: 'f177', categoryId: 'people', categoryName: 'People', color: categoryColors.people, fact: 'Eusapia Palladino was an Italian medium investigated by scientists.' },
  { id: 'f178', categoryId: 'people', categoryName: 'People', color: categoryColors.people, fact: 'Sai Baba of Shirdi was an Indian spiritual master with alleged miraculous powers.' },
  { id: 'f179', categoryId: 'people', categoryName: 'People', color: categoryColors.people, fact: 'Padre Pio was a Catholic priest who allegedly bore stigmata for 50 years.' },
  { id: 'f180', categoryId: 'people', categoryName: 'People', color: categoryColors.people, fact: 'Theresa Neumann was a German mystic who claimed to live without food.' },

  // Truly Strange (20 facts)
  { id: 'f181', categoryId: 'truly-strange', categoryName: 'Truly Strange', color: categoryColors.trulyStrange, fact: 'The Voynich Manuscript has never been deciphered despite centuries of attempts.' },
  { id: 'f182', categoryId: 'truly-strange', categoryName: 'Truly Strange', color: categoryColors.trulyStrange, fact: 'The Taos Hum is heard by only 2% of the population in certain areas.' },
  { id: 'f183', categoryId: 'truly-strange', categoryName: 'Truly Strange', color: categoryColors.trulyStrange, fact: 'The Wow! Signal lasted 72 seconds and has never been explained.' },
  { id: 'f184', categoryId: 'truly-strange', categoryName: 'Truly Strange', color: categoryColors.trulyStrange, fact: 'The Dyatlov Pass hikers died under mysterious circumstances in 1959.' },
  { id: 'f185', categoryId: 'truly-strange', categoryName: 'Truly Strange', color: categoryColors.trulyStrange, fact: 'The Tunguska Event flattened 80 million trees in Siberia in 1908.' },
  { id: 'f186', categoryId: 'truly-strange', categoryName: 'Truly Strange', color: categoryColors.trulyStrange, fact: 'The Codex Gigas is known as the Devil\'s Bible and weighs 165 pounds.' },
  { id: 'f187', categoryId: 'truly-strange', categoryName: 'Truly Strange', color: categoryColors.trulyStrange, fact: 'The Phaistos Disc contains undeciphered symbols from ancient Crete.' },
  { id: 'f188', categoryId: 'truly-strange', categoryName: 'Truly Strange', color: categoryColors.trulyStrange, fact: 'The Beale Ciphers allegedly reveal the location of buried treasure.' },
  { id: 'f189', categoryId: 'truly-strange', categoryName: 'Truly Strange', color: categoryColors.trulyStrange, fact: 'The Zodiac Killer sent encrypted messages that remain partially unsolved.' },
  { id: 'f190', categoryId: 'truly-strange', categoryName: 'Truly Strange', color: categoryColors.trulyStrange, fact: 'The Tamam Shud case involves a mysterious dead man and an encrypted note.' },
  { id: 'f191', categoryId: 'truly-strange', categoryName: 'Truly Strange', color: categoryColors.trulyStrange, fact: 'The Toynbee Tiles are mysterious messages embedded in streets across America.' },
  { id: 'f192', categoryId: 'truly-strange', categoryName: 'Truly Strange', color: categoryColors.trulyStrange, fact: 'The Max Headroom incident was a bizarre TV broadcast hijacking in 1987.' },
  { id: 'f193', categoryId: 'truly-strange', categoryName: 'Truly Strange', color: categoryColors.trulyStrange, fact: 'The Cicada 3301 puzzles are complex internet mysteries.' },
  { id: 'f194', categoryId: 'truly-strange', categoryName: 'Truly Strange', color: categoryColors.trulyStrange, fact: 'The Isdal Woman was found dead in Norway with her identity erased.' },
  { id: 'f195', categoryId: 'truly-strange', categoryName: 'Truly Strange', color: categoryColors.trulyStrange, fact: 'The Lead Masks Case involves two dead men wearing lead eye masks.' },
  { id: 'f196', categoryId: 'truly-strange', categoryName: 'Truly Strange', color: categoryColors.trulyStrange, fact: 'The Elisa Lam case involved strange elevator footage before her death.' },
  { id: 'f197', categoryId: 'truly-strange', categoryName: 'Truly Strange', color: categoryColors.trulyStrange, fact: 'The Hinterkaifeck murders remain unsolved since 1922.' },
  { id: 'f198', categoryId: 'truly-strange', categoryName: 'Truly Strange', color: categoryColors.trulyStrange, fact: 'The Flannan Isles Lighthouse keepers vanished without a trace in 1900.' },
  { id: 'f199', categoryId: 'truly-strange', categoryName: 'Truly Strange', color: categoryColors.trulyStrange, fact: 'The Mary Celeste was found abandoned with no explanation in 1872.' },
  { id: 'f200', categoryId: 'truly-strange', categoryName: 'Truly Strange', color: categoryColors.trulyStrange, fact: 'The Overtoun Bridge mystery involves hundreds of dogs jumping to their deaths.' },
];

// Helper functions
export const getFactById = (id: string): ParanormalFact | undefined => {
  return paranormalFacts.find(fact => fact.id === id);
};

export const getFactsByCategory = (categoryId: string): ParanormalFact[] => {
  return paranormalFacts.filter(fact => fact.categoryId === categoryId);
};

export const getRandomFact = (): ParanormalFact => {
  const randomIndex = Math.floor(Math.random() * paranormalFacts.length);
  return paranormalFacts[randomIndex];
};

export const getRandomFactsByCategory = (categoryId: string, count: number = 5): ParanormalFact[] => {
  const categoryFacts = getFactsByCategory(categoryId);
  const shuffled = [...categoryFacts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
