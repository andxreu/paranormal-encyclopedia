// data/paranormal/ghosts.ts
/**
 * Ghosts Category Data
 * Famous hauntings, poltergeists, and paranormal locations
 * 
 * Includes: Poltergeists, Bell Witch, Amityville Horror, Tower of London, Winchester Mystery House
 */

import { categoryColors } from '@/constants/Colors';
import type { TopicSection, CategoryId } from './types';

export interface GhostTopic {
  id: string;
  name: string;
  description: string;
  categoryId: CategoryId;
  icon: string;
  sections: TopicSection[];
}

export const ghostsData: readonly GhostTopic[] = [
  {
    id: 'gh-1',
    name: 'Poltergeists',
    description: 'Noisy spirits that move objects and create disturbances',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'The Enfield Poltergeist (1977-1979) involved furniture moving, objects flying, and voices speaking through an 11-year-old girl. The Rosenheim Poltergeist in Germany (1967) caused electrical disturbances and phone malfunctions. Both cases were extensively documented by researchers.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Parapsychologists suggest poltergeist activity may be caused by psychokinetic energy from adolescents under stress. Skeptics attribute phenomena to fraud, natural causes, or psychological factors. The word "poltergeist" means "noisy ghost" in German.',
      },
      {
        title: 'Scientific Investigation',
        content: 'Researchers have documented temperature drops, electromagnetic anomalies, and unexplained movements during poltergeist cases. While some incidents have been exposed as hoaxes, others remain unexplained despite thorough investigation.',
      },
    ],
  },
  {
    id: 'gh-2',
    name: 'The Bell Witch',
    description: 'The malevolent spirit that haunted the Bell family',
    categoryId: 'ghosts',
    icon: '🔮',
    sections: [
      {
        title: 'Case Studies',
        content: 'From 1817-1821, the Bell family of Tennessee was tormented by an entity that spoke, moved objects, and physically attacked family members. The spirit, calling itself "Kate," claimed to be a witch. It allegedly caused the death of John Bell in 1820.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Theories range from genuine haunting to mass hysteria or fraud. Some suggest it was the spirit of Kate Batts, a neighbor who cursed the family. The entity demonstrated intelligence, engaging in conversations and predicting future events.',
      },
      {
        title: 'Scientific Investigation',
        content: 'The Bell Witch is one of the few paranormal cases investigated by a future U.S. President (Andrew Jackson). Contemporary accounts and family records document the events. The case remains one of America\'s most famous hauntings.',
      },
    ],
  },
  {
    id: 'gh-3',
    name: 'The Amityville Horror',
    description: 'The infamous haunted house on Long Island',
    categoryId: 'ghosts',
    icon: '🏚️',
    sections: [
      {
        title: 'Case Studies',
        content: 'In 1975, the Lutz family moved into a house where a mass murder had occurred the previous year. They reported paranormal phenomena including cold spots, foul odors, swarms of flies, and a demonic pig-like creature. They fled after 28 days.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Skeptics claim the haunting was a hoax created for financial gain. The Lutzes maintained their story until their deaths. Subsequent owners reported no paranormal activity. The case spawned numerous books and films.',
      },
      {
        title: 'Scientific Investigation',
        content: 'Paranormal investigators Ed and Lorraine Warren investigated the house and claimed it was genuinely haunted. Critics point to inconsistencies in the Lutzes\' accounts. The debate between believers and skeptics continues.',
      },
    ],
  },
  {
    id: 'gh-4',
    name: 'The Tower of London',
    description: 'One of the most haunted places in England',
    categoryId: 'ghosts',
    icon: '🏰',
    sections: [
      {
        title: 'Case Studies',
        content: 'The Tower has been the site of executions, murders, and torture for nearly 1,000 years. Anne Boleyn, executed in 1536, is frequently seen carrying her head. The Princes in the Tower, murdered in 1483, have been spotted in the Bloody Tower.',
      },
      {
        title: 'Explanations & Theories',
        content: 'The Tower\'s violent history provides context for reported hauntings. Guards and visitors have reported apparitions, cold spots, and unexplained sounds. Some attribute sightings to suggestion and the location\'s dark reputation.',
      },
      {
        title: 'Scientific Investigation',
        content: 'Paranormal researchers have conducted investigations using EMF detectors and thermal cameras. Historical records document centuries of ghost sightings. The Tower remains one of the most actively haunted locations in Britain.',
      },
    ],
  },
  {
    id: 'gh-5',
    name: 'The Winchester Mystery House',
    description: 'The bizarre mansion built to confuse spirits',
    categoryId: 'ghosts',
    icon: '🏛️',
    sections: [
      {
        title: 'Case Studies',
        content: 'Sarah Winchester, heiress to the Winchester rifle fortune, continuously built onto her mansion for 38 years (1884-1922). The house features stairs leading to nowhere, doors opening to walls, and secret passages. She believed it would appease spirits killed by Winchester rifles.',
      },
      {
        title: 'Explanations & Theories',
        content: 'A medium allegedly told Sarah she was cursed by spirits and must never stop building. The house\'s bizarre architecture was designed to confuse ghosts. Skeptics suggest Sarah suffered from mental illness or was simply eccentric.',
      },
      {
        title: 'Scientific Investigation',
        content: 'Visitors and staff report apparitions, footsteps, and cold spots throughout the 160-room mansion. Paranormal investigators have documented unexplained phenomena. The house is now a popular tourist attraction and historical landmark.',
      },
    ],
  },
  {
    id: 'gh-6',
    name: '30 East Drive Poltergeist',
    description: 'A violent poltergeist case in a council house in Pontefract, England',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: '30 East Drive in Pontefract, West Yorkshire, is home to the so-called Black Monk of Pontefract haunting. In the late 1960s and early 1970s, the Pritchard family reported objects flying, pools of water, levitations, and violent attacks focused on their teenage daughter.',
      },
      {
        title: 'Witness Accounts',
        content: 'Family members, neighbors, and visiting investigators claimed to see dark figures, feel pushes and slaps, and witness heavy furniture sliding across rooms. The entity allegedly wrote vulgar phrases on walls and slammed doors with tremendous force.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Skeptics point to teenage-focused poltergeist psychology, exaggeration, and possible trickery. Believers link the activity to a “black monk” supposedly executed nearby. The house remains a popular investigation site, with modern visitors claiming ongoing phenomena.',
      },
    ],
  },
  {
    id: 'gh-7',
    name: '50 Berkeley Square',
    description: 'A London townhouse reputed to be one of the most haunted houses in England',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Located in Mayfair, London, 50 Berkeley Square gained a Victorian reputation as a place where visitors went mad or died after spending the night in its upper rooms. Stories mention shrieking, unseen presences, and a formless horror attacking intruders.',
      },
      {
        title: 'Witness Accounts',
        content: 'Legendary tales include a sailor driven insane after encountering something in the attic and servants refusing to enter certain rooms. Later tenants reported uneasy feelings, strange noises, and apparitions of a young woman.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Historians suspect heavily embroidered gossip around a reclusive resident. Modern owners report little activity. Still, the house endures in ghost lore as a quintessential “do not sleep here” location.',
      },
    ],
  },
  {
    id: 'gh-8',
    name: 'Abraham Lincoln Ghost',
    description: 'Ongoing reports that the spirit of Abraham Lincoln haunts the White House',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Since his assassination in 1865, Abraham Lincoln has been reportedly seen or sensed in the White House. Presidents, first ladies, staff, and guests have claimed encounters with his presence in the Lincoln Bedroom and nearby corridors.',
      },
      {
        title: 'Witness Accounts',
        content: 'Stories include knocks on doors, a tall figure in a frock coat standing by windows, and a strong sense of melancholy. Winston Churchill famously claimed to see Lincoln by the fireplace, and Queen Wilhelmina of the Netherlands reported fainting after seeing him at her door.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Psychologically, Lincoln embodies national grief and unresolved trauma from the Civil War. Skeptics attribute experiences to suggestion and the emotive atmosphere of the historic rooms. For many, Lincoln’s ghost symbolizes unfinished business at the heart of American politics.',
      },
    ],
  },
  {
    id: 'gh-9',
    name: 'Alcatraz D-Block Shadow',
    description: 'A shadowy figure linked to the infamous isolation cells of Alcatraz prison',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'D-Block at Alcatraz Federal Penitentiary housed the most troublesome inmates in solitary confinement. Since the prison’s closure, visitors, rangers, and paranormal teams have reported a menacing shadow figure and sudden cold spots in its cells.',
      },
      {
        title: 'Witness Accounts',
        content: 'People describe a tall, faceless silhouette crossing doorways, icy blasts of air, and feelings of panic or suffocation. Some former inmates spoke of “something” in the dark with them, scratching and whispering during long nights.',
      },
      {
        title: 'Explanations & Theories',
        content: 'The oppressive conditions and history of violence offer fertile ground for haunting narratives. Skeptics cite low lighting, suggestibility, and pareidolia. Others argue that intense emotional suffering can leave energetic imprints in such places.',
      },
    ],
  },
  {
    id: 'gh-10',
    name: 'Alton Towers Monks',
    description: 'Spectral monks said to haunt the grounds of the Alton Towers estate',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Before it became a theme park, Alton Towers in Staffordshire was a grand estate with earlier monastic associations nearby. Legends speak of hooded monk apparitions walking silently through gardens and ruins.',
      },
      {
        title: 'Witness Accounts',
        content: 'Staff and visitors report seeing robed figures on pathways or glimpsed at the edges of wooded areas, vanishing when approached. Disembodied chanting and organ-like tones have also been reported after closing hours.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Some link the monks to residual echoes of religious communities that once occupied or used the land. Others consider them products of expectation amid gothic architecture and storytelling around the park’s darker rides.',
      },
    ],
  },
  {
    id: 'gh-11',
    name: 'Amityville Haunting',
    description: 'The broader haunting legend surrounding the infamous Amityville house',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Beyond the Lutz family’s 28-day ordeal, the Amityville house is wrapped in narratives of demonic infestation, Native American burial grounds, and the DeFeo family murders that preceded the haunting claims.',
      },
      {
        title: 'Witness Accounts',
        content: 'Reports include disembodied voices, cloven hoofprints in snow, walls oozing green slime, and glowing red eyes peering through windows. Later visitors describe oppressive atmospheres and occasional anomalous sounds or odors.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Investigators, authors, and lawyers have all accused one another of fabrication. Some see Amityville as a collaborative hoax turned horror franchise, while others insist at least some phenomena were genuine. The house has since been renovated and renumbered, with newer owners reporting quiet lives.',
      },
    ],
  },
  {
    id: 'gh-12',
    name: 'Ancient Ram Inn',
    description: 'A notoriously haunted former inn in Gloucestershire, England',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Dating back to the 12th century, the Ancient Ram Inn in Wotton-under-Edge is said to sit on pagan burial ground and intersecting ley lines. Owners and guests report poltergeist activity, apparitions, and oppressive presences in multiple rooms.',
      },
      {
        title: 'Witness Accounts',
        content: 'Claims include being pushed onto beds, hearing dragging sounds, and seeing child spirits, a hooded monk, and a demonic entity with horns. One room, the Bishop’s Room, is singled out as especially hostile.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Skeptics point to the building’s age, creaks, drafts, and accumulated folklore. Paranormal groups, however, consistently rank it among the most active locations in Britain, suggesting a mix of residual and intelligent hauntings.',
      },
    ],
  },
  {
    id: 'gh-13',
    name: 'Aokigahara Suicide Forest',
    description: 'A Japanese forest associated with suicides and restless spirits',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Aokigahara, at the base of Mount Fuji, has long been linked with death—from historical tales of abandoned elders to modern suicide cases. Many visitors report an eerie silence and an overwhelming sense of despair.',
      },
      {
        title: 'Witness Accounts',
        content: 'Hikers describe shadowy figures between trees, disembodied voices calling their names, and sudden disorientation as if the forest itself were rearranging paths. Some claim to encounter apparitions of the recently deceased.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Psychologists emphasize suggestion, grief, and the forest’s tragic reputation. Local folklore interprets the phenomena as yūrei—restless spirits of those who died with strong regrets. Authorities now patrol and post signs urging visitors to reconsider self-harm.',
      },
    ],
  },
  {
    id: 'gh-14',
    name: 'Banff Bride on Stairs',
    description: 'The ghostly bride said to haunt a grand staircase in Banff, Canada',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'At the Banff Springs Hotel in Alberta, legend tells of a young bride who tripped on her gown, fell down the staircase, and died on her wedding day. Since then, guests report seeing a veiled bride lingering on or near the stairway.',
      },
      {
        title: 'Witness Accounts',
        content: 'Witnesses describe a woman in white gliding up or down the steps, sometimes wreathed in a faint glow. In some accounts, her gown appears to catch fire or flicker like candlelight, echoing versions of the story where she died by fire.',
      },
      {
        title: 'Explanations & Theories',
        content: 'The tragic-wedding trope is common in hotel lore, and skeptics argue the story was retrofitted to unexplained sightings. Still, the Banff Bride endures as one of Canada’s most famous hotel ghosts.',
      },
    ],
  },
  {
    id: 'gh-15',
    name: 'Banff Faceless Bride',
    description: 'A variant of the Banff bride legend featuring a bride with no face',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'In some Banff Springs Hotel stories, the staircase bride appears with her face obscured—either blurred, shadowed, or completely missing—amplifying the unease around the haunting.',
      },
      {
        title: 'Witness Accounts',
        content: 'Guests and staff report glimpsing a bridal figure whose veil hides a void or featureless surface where her face should be. Others see only a headless body in a wedding gown moving down the hallway.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Faceless apparitions may arise from the brain’s difficulty resolving facial details in dim lighting, combined with expectation. In folklore, the faceless bride symbolizes lost identity and interrupted life paths.',
      },
    ],
  },
  {
    id: 'gh-16',
    name: 'Bell Witch Haunting',
    description: 'Broader haunting phenomena associated with the Bell Witch legend',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Beyond the core Bell family haunting, surrounding farms and later visitors to the Bell Witch Cave report strange voices, stone-throwing, and invisible hands tugging at clothing.',
      },
      {
        title: 'Witness Accounts',
        content: 'Tourists describe hearing whispers in the cave, seeing shadows at the edges of lantern light, and feeling light touches on shoulders or hair. Locals tell of phantom animals and knocks on doors with no one there.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Some see this as the lingering influence of the original entity “Kate.” Others view it as a haunted-tourism feedback loop—expectation generating experiences. Either way, the Bell Witch has grown from a single farmhouse story into an entire haunted region.',
      },
    ],
  },
  {
    id: 'gh-17',
    name: 'Black Dahlia Haunting',
    description: 'Claims that the spirit of Elizabeth Short haunts locations tied to her murder',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Elizabeth Short, nicknamed the Black Dahlia, was brutally murdered in Los Angeles in 1947. Some locations associated with suspects and the body’s discovery have since acquired reputations for ghostly activity.',
      },
      {
        title: 'Witness Accounts',
        content: 'Reports include a dark-haired woman in 1940s clothing appearing briefly near certain properties, phantom sobbing, and uneasy feelings around the former crime scene.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Because the case remains officially unsolved, the Black Dahlia symbolizes unresolved injustice. Haunting claims are often seen as expressions of cultural obsession and the city’s noir mythology rather than evidence of literal ghostly presence.',
      },
    ],
  },
  {
    id: 'gh-18',
    name: 'Black Gate Bridge Ghost',
    description: 'An apparition said to haunt a lonely bridge known as Black Gate',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Various “Black Gate” or Black Bridge legends tell of a woman or motorist who died tragically on or beneath a rural bridge and now appears to drivers at night.',
      },
      {
        title: 'Witness Accounts',
        content: 'Motorists describe a figure appearing suddenly in headlights, vanishing upon impact, or reappearing in the rearview mirror. Others hear phantom footsteps on the bridge deck when no one is visible.',
      },
      {
        title: 'Explanations & Theories',
        content: 'These stories often overlap with generic “crybaby bridge” and hitchhiker folklore. Explanations include optical illusions, urban legends, and misinterpretations of pedestrians or animals in low light.',
      },
    ],
  },
  {
    id: 'gh-19',
    name: 'Black Monk Pontefract',
    description: 'The dark-robed figure linked to the Pontefract poltergeist case',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'At 30 East Drive, witnesses not only reported poltergeist phenomena but also sightings of a hooded, black-robed figure nicknamed the Black Monk, believed by some to be a malevolent focal spirit.',
      },
      {
        title: 'Witness Accounts',
        content: 'People describe a featureless, monk-like silhouette standing at bedsides, in doorways, or at the top of the stairs. The figure is often associated with sudden dread and spikes in physical activity like object throwing.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Some suggest a historical monk executed nearby became attached to the house. Others think the image is a psychic mask for poltergeist energy. Skeptics consider it misperceived shadows influenced by the case’s notoriety.',
      },
    ],
  },
  {
    id: 'gh-20',
    name: 'Borley Rectory Haunting',
    description: 'The “most haunted house in England,” according to famed investigator Harry Price',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Built in 1862, Borley Rectory in Essex became famous for reports of phantom footsteps, apparitions of a nun, ghostly coaches, and messages scrawled on walls. Psychic investigator Harry Price conducted multiple studies there in the 1930s.',
      },
      {
        title: 'Witness Accounts',
        content: 'Residents and visitors spoke of bells ringing on their own, objects appearing and disappearing, and the spectral nun walking across the grounds. Mysterious wall writings appeared asking for prayers and release.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Later researchers accused Price of fabricating or exaggerating evidence. Some phenomena may have been pranks by bored residents. Yet Borley Rectory’s legend endures as a template for grand English hauntings, especially after the building burned down in 1939.',
      },
    ],
  },
  {
    id: 'gh-21',
    name: 'Brown Lady Raynham Hall',
    description: 'The famous “Brown Lady” apparition captured on a classic ghost photograph',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Raynham Hall in Norfolk, England, is home to the Brown Lady—believed to be the spirit of Lady Dorothy Walpole. A 1936 photograph purportedly captured her descending the main staircase, becoming one of history’s most iconic ghost images.',
      },
      {
        title: 'Witness Accounts',
        content: 'Earlier sightings described a woman in a brown brocade dress with empty eye sockets or glowing hollows. She was seen in bedrooms and corridors, sometimes causing terror among guests.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Photographic experts have debated whether the famous image is a double exposure or trick. For believers, the photo confirms a long-standing haunting; for skeptics, it is a clever piece of early special effects.',
      },
    ],
  },
  {
    id: 'gh-22',
    name: 'Bhangarh Fort Curse',
    description: 'A ruined Indian fort said to be cursed and dangerously haunted',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Bhangarh Fort in Rajasthan is famous for legends that a sorcerer cursed the city after being rejected by a princess, dooming it to ruin and restless spirits. The Archaeological Survey of India even posts signs advising visitors to leave before sunset.',
      },
      {
        title: 'Witness Accounts',
        content: 'Visitors and locals report disembodied voices, shadowy figures, and feelings of being watched in the abandoned structures. Nighttime explorers speak of sudden panic and strange lights.',
      },
      {
        title: 'Explanations & Theories',
        content: 'The fort’s isolated location, crumbling architecture, and official warnings amplify its haunted reputation. Skeptics highlight wildlife, wind, and suggestion. For many, Bhangarh embodies the classic “cursed city” motif.',
      },
    ],
  },
  {
    id: 'gh-23',
    name: 'Candlelight Nun',
    description: 'A spectral nun carrying a candle through darkened corridors or cloisters',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Across Europe and the Americas, reports exist of a ghostly nun wandering at night with a candle or lantern, often tied to tales of forbidden love, betrayal, or wrongful death in a convent.',
      },
      {
        title: 'Witness Accounts',
        content: 'Witnesses see a robed female figure moving silently, her candle flame unaffected by wind. Sometimes her face is hidden by a cowl; other times she appears sorrowful or weeping.',
      },
      {
        title: 'Explanations & Theories',
        content: 'The Candlelight Nun archetype may condense many tragedies into one image: repressed desire, religious guilt, and isolation. From a skeptical angle, the sightings could be misidentified staff, reflections, or light artifacts in long corridors.',
      },
    ],
  },
  {
    id: 'gh-24',
    name: 'Cement Factory Child',
    description: 'The ghost of a child said to haunt an abandoned cement or industrial plant',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Urban explorers and locals tell of a small child spirit wandering disused cement factories or industrial ruins, often linked to accidents or unsafe working conditions in the past.',
      },
      {
        title: 'Witness Accounts',
        content: 'Reports include hearing giggles, footsteps on catwalks, or seeing a childlike figure peering from broken windows. Toys left as offerings sometimes appear moved between visits.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Industrial settings are dangerous and echo with noise, which can create eerie sensations. Some believe these stories highlight forgotten casualties of early industrialization; others see them as classic “child ghost in ruins” narratives built over time.',
      },
    ],
  },
  {
    id: 'gh-25',
    name: 'Christmas Carol Ghosts',
    description: 'The trio of spirits popularized by Dickens: Past, Present, and Yet to Come',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Charles Dickens’ “A Christmas Carol” (1843) introduced the structured visitation of three moralizing spirits confronting Ebenezer Scrooge with his life choices. Though fictional, these ghosts reshaped Western ideas of haunting and redemption.',
      },
      {
        title: 'Witness Accounts',
        content: 'While not tied to a specific physical location, people sometimes report dreamlike experiences of being “shown” their past, present, and possible future after intense life crises—mirroring the Carol structure.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Psychologically, the story’s ghosts act as personifications of memory, awareness, and consequence. In paranormal circles, some interpret them as examples of guided spiritual intervention. Culturally, they cemented the link between ghosts and Christmas in modern imagination.',
      },
    ],
  },
  {
    id: 'gh-26',
    name: 'Clifton Hall Haunting',
    description: 'A historic estate plagued by apparitions and unexplained phenomena',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Clifton Hall in Nottinghamshire, UK, has centuries of haunting reports, including monks, phantom children, and disembodied voices. In 2007, a family fled the property after claiming to see blood-like stains appear and vanish on walls.',
      },
      {
        title: 'Witness Accounts',
        content: 'Residents and guests describe shadow figures, footsteps, cold spots, and a crying child heard near staircases. One owner reported seeing a woman in a Victorian dress standing beside his baby’s crib.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Given the estate’s long history and numerous previous deaths, some interpret the hauntings as residual imprints. Skeptics highlight old pipes, drafts, and the power of suggestion in sprawling historic homes.',
      },
    ],
  },
  {
    id: 'gh-27',
    name: 'Clinton Road Hauntings',
    description: 'New Jersey’s most haunted road, infamous for ghosts and strange lights',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Clinton Road is associated with ghostly hitchhikers, phantom headlights, satanic rituals, and the spirit of a boy who drowned beneath the bridge.',
      },
      {
        title: 'Witness Accounts',
        content: 'Drivers report cars following them that vanish suddenly, figures appearing at the roadside, and coins thrown into the river being tossed back by unseen hands.',
      },
      {
        title: 'Explanations & Theories',
        content: 'The remote, forested landscape contributes to eerie experiences. Some phenomena are blamed on local legends, wildlife, or the effects of long, unlit stretches of road.',
      },
    ],
  },
  {
    id: 'gh-28',
    name: 'Coastal Lantern Spirit',
    description: 'A ghostly light seen moving along stormy coastal cliffs and beaches',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Many maritime regions tell of a spirit carrying a lantern, often linked to a drowned lighthouse keeper or shipwreck survivor searching for lost loved ones.',
      },
      {
        title: 'Witness Accounts',
        content: 'Witnesses report a bobbing lantern moving in impossible patterns along cliffs or beaches during storms. The figure holding it is rarely seen clearly.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Possible causes include atmospheric reflections, misidentified boats, or folklore born from treacherous coastlines. Some cultures interpret the lights as warnings of impending disaster.',
      },
    ],
  },
  {
    id: 'gh-29',
    name: 'Copper Miner Apparition',
    description: 'Ghostly miners seen in abandoned copper mines and tunnels',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Across old mining towns in the U.S. and Europe, people report apparitions of miners still working deep underground, often linked to cave-ins or gas explosions.',
      },
      {
        title: 'Witness Accounts',
        content: 'Shadowy figures in helmets, phantom pickaxe sounds, and distant coughing are commonly described. Some report seeing glowing lanterns moving through sealed-off tunnels.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Old mines amplify sound and create natural illusions. Yet the tragedies tied to these sites give rise to persistent ghost legends.',
      },
    ],
  },
  {
    id: 'gh-30',
    name: 'Crying Nurse Willowbrook',
    description: 'A weeping nurse seen in abandoned hospitals or asylums, especially Willowbrook',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'After the closure of the controversial Willowbrook State School, visitors and explorers began reporting the apparition of a distraught nurse wandering the ruins.',
      },
      {
        title: 'Witness Accounts',
        content: 'People describe sobbing echoing through empty halls, the sound of heels clicking, and sightings of a woman in outdated nurse attire disappearing around corners.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Some believe the figure symbolizes guilt or trauma from past institutional abuses. Skeptics cite acoustics, pareidolia, and the power of emotionally heavy locations.',
      },
    ],
  },
  {
    id: 'gh-31',
    name: 'Crying Toddler Phantom',
    description: 'A child ghost heard crying in abandoned buildings or wooded areas',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Stories of phantom children are common worldwide. These hauntings often occur near accident sites, former orphanages, or remote trails.',
      },
      {
        title: 'Witness Accounts',
        content: 'Witnesses report distant crying, small footsteps, toys moving on their own, or glimpses of a toddler dressed in old-fashioned clothing.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Many reports are likely fox or cat calls mistaken for human cries. Still, the emotional punch of a child’s spirit makes these stories persist strongly in folklore.',
      },
    ],
  },
  {
    id: 'gh-32',
    name: 'Dead Children Playground',
    description: 'A playground said to be haunted by the spirits of murdered children',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Dead Children’s Playground in Huntsville, Alabama, is linked to stories of children who disappeared in the 1960s. Visitors report swings moving on their own and shadow figures playing at night.',
      },
      {
        title: 'Witness Accounts',
        content: 'People describe laughter, small handprints appearing on car windows, and sudden drops in temperature around the equipment.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Wind and natural motion often explain the swings, but the tragic lore attached to the site fuels ongoing reports.',
      },
    ],
  },
  {
    id: 'gh-33',
    name: 'Dead Sailor Return',
    description: 'Sailors appearing after death to complete unfinished duties or say farewells',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Tales from maritime cultures describe drowned sailors returning to ships or loved ones as phantoms, often glowing faintly with sea spray.',
      },
      {
        title: 'Witness Accounts',
        content: 'Crew members report seeing familiar figures on deck briefly before they vanish. Loved ones at home have reported late-night visits coinciding with unknown times of death.',
      },
      {
        title: 'Explanations & Theories',
        content: 'These stories reflect the emotional toll of sea life—absence, uncertainty, and hope mixed with grief.',
      },
    ],
  },
  {
    id: 'gh-34',
    name: 'Death Bed Visions',
    description: 'Reports of dying individuals seeing departed loved ones or spiritual beings',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Hospice workers worldwide document cases of patients reporting comforting apparitions or voices shortly before death.',
      },
      {
        title: 'Witness Accounts',
        content: 'Visions often involve deceased relatives, shining figures, or peaceful landscapes. Patients become calmer after these experiences.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Medical theories include oxygen deprivation or neurochemical changes, while spiritual interpretations see these visions as escorts for crossing over.',
      },
    ],
  },
  {
    id: 'gh-35',
    name: 'Doppelgängers',
    description: 'Encounters with ghostly doubles of the living',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Historical accounts describe doppelgängers appearing before deaths, disasters, or moments of crisis, often seen by multiple witnesses.',
      },
      {
        title: 'Witness Accounts',
        content: 'People report seeing exact lookalikes of themselves or loved ones performing actions the real person never did.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Psychology suggests hallucinations or memory glitches; occult interpretations consider them spirit mimics or warnings.',
      },
    ],
  },
  {
    id: 'gh-36',
    name: 'Eastern Airlines Flight 401',
    description: 'Ghosts said to appear on planes built with salvaged parts from Flight 401',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'After the 1972 crash of Flight 401, reports emerged of crew members’ spirits appearing on other aircraft using recovered parts.',
      },
      {
        title: 'Witness Accounts',
        content: 'Pilots and flight attendants described seeing deceased crew seated calmly or warning them of system issues.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Some stories were debunked by airline officials, but the legend remains a classic aviation haunting.',
      },
    ],
  },
  {
    id: 'gh-37',
    name: 'Eastern State Penitentiary',
    description: 'One of America’s most haunted prisons',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Opened in 1829, Eastern State isolated prisoners in solitary confinement. Today, visitors report screams, apparitions, and shadowy forms in Cell Block 12 and Death Row.',
      },
      {
        title: 'Witness Accounts',
        content: 'People describe dark humanoid shapes darting between cells, echoing footsteps, and mysterious tugs on clothing.',
      },
      {
        title: 'Explanations & Theories',
        content: 'The brutal history of psychological torture likely fuels many ghost interpretations.',
      },
    ],
  },
  {
    id: 'gh-38',
    name: 'Eastern State Shadow Man',
    description: 'A distinct shadow figure reported repeatedly at Eastern State Penitentiary',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Among the many apparitions at Eastern State, one stands out: a tall, fast-moving shadow figure seen sprinting through corridors.',
      },
      {
        title: 'Witness Accounts',
        content: 'Reports include a man-shaped silhouette that seems to break apart and reform as it moves, ignoring physical barriers.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Possibly a form of residual haunting or a trick of light in narrow corridors. Paranormal teams consider it one of the prison’s most active entities.',
      },
    ],
  },
  {
    id: 'gh-39',
    name: 'Edinburgh Castle Hauntings',
    description: 'Multiple spirits said to roam the ancient fortress in Scotland',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Edinburgh Castle, with over 900 years of battles and executions, is home to numerous legends including a headless drummer, ghost dog, and phantom prisoners.',
      },
      {
        title: 'Witness Accounts',
        content: 'Visitors report sudden temperature drops, disembodied drumming, and apparitions in vaulted chambers.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Its violent history and labyrinthine construction produce ideal conditions for haunting folklore.',
      },
    ],
  },
  {
    id: 'gh-40',
    name: 'Edinburgh Vaults',
    description: 'Underground chambers filled with tales of murder, plague, and restless spirits',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'The South Bridge Vaults in Edinburgh were once slums and storage rooms. Paranormal teams report heavy activity including poltergeists, child spirits, and a violent entity called “Mr. Boots.”',
      },
      {
        title: 'Witness Accounts',
        content: 'People describe sudden scratches, grabbed wrists, and shadow shapes crossing the narrow rooms.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Extremely dark, damp, and claustrophobic spaces heighten fear responses, amplifying ghost interpretations.',
      },
    ],
  },
  {
    id: 'gh-41',
    name: 'Electronic Voice Phenomena',
    description: 'Mysterious voices captured in audio recordings',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Since the 1950s, researchers claim to record voices of spirits on tape, answering questions or calling names.',
      },
      {
        title: 'Witness Accounts',
        content: 'Investigators frequently report whispered phrases or short sentences that did not exist during live recording.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Skeptics attribute EVP to auditory pareidolia, radio interference, or equipment noise. Believers see it as direct communication.',
      },
    ],
  },
  {
    id: 'gh-42',
    name: 'Elvis Ghost Sightings',
    description: 'Reports of the King of Rock appearing after his death',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Sightings occur most often at Graceland, Las Vegas hotels, and music venues Elvis once performed in.',
      },
      {
        title: 'Witness Accounts',
        content: 'People claim to see a man resembling Elvis walking backstage, standing in hallways, or humming faint melodies.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Celebrity ghosts often reflect cultural attachment rather than literal spirits. Still, fans remain convinced.',
      },
    ],
  },
  {
    id: 'gh-43',
    name: 'Emeelia Ghost Girl',
    description: 'A young girl apparition known for appearing in old schools or theatres',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Stories vary, but Emeelia is often described as a shy ghost girl linked to an accidental death during a performance or class activity.',
      },
      {
        title: 'Witness Accounts',
        content: 'Witnesses see a girl in a pale dress lingering near curtains or balcony seats, sometimes humming a tune.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Residual energy or misidentified living children are common explanations, yet her legend persists.',
      },
    ],
  },
  {
    id: 'gh-44',
    name: 'Enfield Poltergeist',
    description: 'One of the best documented poltergeist cases in history',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'From 1977 to 1979, the Hodgson family in Enfield, London, experienced violent activity including levitating furniture, knocking, and a gruff voice speaking through young Janet.',
      },
      {
        title: 'Witness Accounts',
        content: 'Investigators saw chairs slide across floors, toys thrown, and Janet lifted from her bed. Hundreds of events were recorded.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Accusations of hoaxing exist, but many incidents remain unexplained. The case is a cornerstone of poltergeist research.',
      },
    ],
  },
  {
    id: 'gh-45',
    name: 'Ghost Ships',
    description: 'Vessels found drifting with no crew aboard, often linked to tragic legends',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Famous examples include the Mary Celeste and the SS Ourang Medan, the latter allegedly found with the entire crew dead in mysterious positions.',
      },
      {
        title: 'Witness Accounts',
        content: 'Sailors report seeing abandoned ships in perfect condition, phantom crew walking decks, or glowing vessels vanishing into fog.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Derelict ships can result from storms, mutiny, or mechanical failure. Other tales blend maritime superstition with genuine mysteries.',
      },
    ],
  },
  {
    id: 'gh-46',
    name: 'Ghost That Multiplies',
    description: 'A mysterious apparition said to duplicate itself endlessly',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'In rural regions of India, travelers have reported a strange spirit that appears as a lone figure — then suddenly splits into multiple identical forms blocking the path.',
      },
      {
        title: 'Witness Accounts',
        content: 'People describe seeing a single ghostly woman or man who instantly “copies” into three, five, or even ten versions, surrounding or confusing witnesses before vanishing.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Some point to mirage-like optical effects in low light; others see it as a shapeshifting spirit or trickster entity. The multiplying ghost remains a staple of roadside folklore.',
      },
    ],
  },
  {
    id: 'gh-47',
    name: 'Ghost Trains',
    description: 'Phantom locomotives seen racing down long-abandoned tracks',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Ghost trains are reported worldwide, with glowing locomotives said to roar down tracks that no longer exist. Some sightings coincide with anniversaries of fatal crashes.',
      },
      {
        title: 'Witness Accounts',
        content: 'Witnesses hear whistles, screeching metal, and thunderous wheels. Some describe transparent cars filled with shadowy passengers.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Acoustic reflections, seismic vibrations, and the echo of past trauma may play a role. Still, railway folklore treats ghost trains as powerful omens.',
      },
    ],
  },
  {
    id: 'gh-48',
    name: 'Ghosts General',
    description: 'A broad category reflecting universal human encounters with spirits',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Across cultures, ghosts appear as apparitions, voices, dreams, or moving objects. Reports span thousands of years and countless locations.',
      },
      {
        title: 'Witness Accounts',
        content: 'Common experiences include cold spots, shadow figures, footsteps, and the sense of being watched. Some encounters are comforting, others frightening.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Interpretations range from spirits of the dead to echoes of emotional energy, interdimensional overlap, or psychological projection.',
      },
    ],
  },
  {
    id: 'gh-49',
    name: 'Gibraltar Tunnel Shadows',
    description: 'Shadowy figures haunting tunnels beneath Gibraltar',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'The vast WWII tunnel complex beneath Gibraltar has reports of moving shadows, footsteps, and phantom conversations echoing in empty corridors.',
      },
      {
        title: 'Witness Accounts',
        content: 'Explorers describe dark silhouettes darting between doorways, lights flickering without cause, and sudden chills.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Claustrophobia, low lighting, and acoustic anomalies may explain some sightings, though guides report consistent activity in certain chambers.',
      },
    ],
  },
  {
    id: 'gh-50',
    name: 'Glasgow Necropolis Specters',
    description: 'Hauntings reported in Glasgow’s famous Victorian cemetery',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'The Glasgow Necropolis has long been associated with apparitions among its elaborate monuments, including robed figures and wandering children.',
      },
      {
        title: 'Witness Accounts',
        content: 'Visitors report feeling watched, seeing fleeting shadows, and hearing whispers among the gravestones — especially at dusk.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Fog, shifting light, and atmospheric effects contribute to eerie impressions, but the Necropolis remains a magnet for ghost hunters.',
      },
    ],
  },
  {
    id: 'gh-51',
    name: 'Glass-Eyed Servant',
    description: 'A phantom servant with a blank, glassy gaze seen in old estates',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Reports of the Glass-Eyed Servant appear in various European estates, usually as a silent figure performing outdated household tasks.',
      },
      {
        title: 'Witness Accounts',
        content: 'People describe a servant in livery with a disturbingly reflective stare, who vanishes when approached.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Residual haunting or misidentified reflections are possible explanations. The emotionless stare leaves a lasting impression on witnesses.',
      },
    ],
  },
  {
    id: 'gh-52',
    name: 'Hamilton’s Ghost Stagecoach',
    description: 'A phantom stagecoach thundering across rural roads at night',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'In parts of Scotland and the American frontier, ghostly stagecoaches are said to appear after dark, tied to tragic accidents or robberies.',
      },
      {
        title: 'Witness Accounts',
        content: 'Witnesses hear clattering hooves, wheels, and a driver cracking a whip — yet see only a shimmering outline or nothing at all.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Auditory illusions and folklore contribute, but many still swear these spectral coaches barrel past them.',
      },
    ],
  },
  {
    id: 'gh-53',
    name: 'Hanging Man Window',
    description: 'An apparition resembling a hanged man appearing in upper windows',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Numerous abandoned asylums and homes report a figure hanging by a rope in an upstairs window, vanishing when approached.',
      },
      {
        title: 'Witness Accounts',
        content: 'People describe a silhouette swinging slowly, sometimes accompanied by creaking sounds or sudden temperature drops.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Pareidolia, shadows, and broken curtains may create illusions — but the chilling image persists as a haunting archetype.',
      },
    ],
  },
  {
    id: 'gh-54',
    name: 'Harpswell Dead Sailor',
    description: 'A legendary Maine ghost associated with a phantom naval officer',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'In Harpswell, Maine, locals tell of a dead sailor seeking his fiancée’s home after perishing at sea — inspiring a poem by Longfellow.',
      },
      {
        title: 'Witness Accounts',
        content: 'Sightings include a spectral man walking coastal roads, drenched in seawater, silently pointing toward lost ships.',
      },
      {
        title: 'Explanations & Theories',
        content: 'A classic maritime revenant tale — reflecting grief, longing, and the unpredictability of life at sea.',
      },
    ],
  },
  {
    id: 'gh-55',
    name: 'Hashima Island Ghosts',
    description: 'Hauntings reported on Japan’s abandoned “Battleship Island”',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Once a booming coal mining facility, Hashima Island was abruptly abandoned in 1974. Explorers report apparitions, screams, and footsteps echoing in empty apartment blocks.',
      },
      {
        title: 'Witness Accounts',
        content: 'Visitors see figures in broken windows, shadows moving through rubble, and hear running children where none exist.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Exposure to decaying megastructures and wind acoustics creates unsettling sensations — but the island’s desolation fuels ghost narratives.',
      },
    ],
  },
  {
    id: 'gh-56',
    name: 'Haunted Dolls',
    description: 'Dolls believed to host spirits or malevolent entities',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Famous examples include Annabelle, Robert the Doll, and Okiku. Reports involve moving limbs, blinking eyes, and whispered voices.',
      },
      {
        title: 'Witness Accounts',
        content: 'Owners claim dolls change positions, appear in new locations, or cause nightmares and strange electrical disturbances.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Human-like faces trigger deep psychological responses. Spiritual interpretations involve attachment, curses, or intentional vessel-binding.',
      },
    ],
  },
  {
    id: 'gh-57',
    name: 'Haunted Highways',
    description: 'Roadways notorious for phantom hitchhikers, shadow figures, and strange lights',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'From Route 66 to rural forest roads, countless stretches of highway have haunting lore tied to accidents and disappearances.',
      },
      {
        title: 'Witness Accounts',
        content: 'Drivers see transparent figures on shoulders, vanishing pedestrians, or glowing orbs pacing their vehicles.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Low light, fatigue, and reflective surfaces create illusions — but the cultural fear of remote roads keeps these legends alive.',
      },
    ],
  },
  {
    id: 'gh-58',
    name: 'Highgate Vampire',
    description: 'A tall, ghostly figure associated with London’s Highgate Cemetery',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'In the 1970s, reports described a menacing figure in dark clothing with glowing red eyes haunting Highgate Cemetery.',
      },
      {
        title: 'Witness Accounts',
        content: 'People claimed to see a tall shadow man drifting between graves, accompanied by sudden paralysis or dread.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Part ghost, part folklore, part media frenzy — the Highgate Vampire blends hauntings with occult urban myth.',
      },
    ],
  },
  {
    id: 'gh-59',
    name: 'Hotel del Salto Hauntings',
    description: 'A Colombian hotel perched on cliffs, infamous for suicides and apparitions',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Built in 1928 overlooking Tequendama Falls, the abandoned hotel became associated with tragic deaths and ghostly sightings.',
      },
      {
        title: 'Witness Accounts',
        content: 'People report figures falling from balconies, whispers in empty rooms, and shadow shapes near the cliffs.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Moisture, mist, and atmospheric distortions contribute to illusions — but the tragic history leaves a strong imprint.',
      },
    ],
  },
  {
    id: 'gh-60',
    name: 'House of Seven Screams',
    description: 'A mansion where seven distinct screams are said to echo every night',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Local legends claim seven family members died violently inside the house, each leaving behind a lingering vocal imprint.',
      },
      {
        title: 'Witness Accounts',
        content: 'Visitors hear layered screams, sudden bangs, or running footsteps on upper floors.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Structural acoustics and outside noises may play roles, but the seven-scream pattern remains a chilling hallmark.',
      },
    ],
  },
  {
    id: 'gh-61',
    name: 'Island of the Dolls Mexico',
    description: 'An eerie island filled with decaying dolls said to house spirits',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Located in Xochimilco, the island’s caretaker claimed dolls were inhabited by a drowned girl’s spirit, placing them around the canals.',
      },
      {
        title: 'Witness Accounts',
        content: 'Visitors report hearing whispers, seeing dolls turn their heads, and feeling watched by dozens of glassy eyes.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Rotting dolls in humid conditions create unsettling illusions — yet the legend magnifies every creak and shadow.',
      },
    ],
  },
  {
    id: 'gh-62',
    name: 'King’s Highway Hauntings',
    description: 'Ghostly travelers and soldiers along the historic King’s Highway routes',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Centuries of war, trade, and tragedy along these ancient roads have produced countless ghost stories.',
      },
      {
        title: 'Witness Accounts',
        content: 'People see colonial soldiers, phantom horses, lantern-carrying travelers, or hear cannons in the distance.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Residual energy from historic events often fuels haunting interpretations.',
      },
    ],
  },
  {
    id: 'gh-63',
    name: 'Knock Apparitions 1879',
    description: 'A famous Irish Marian apparition accompanied by silent figures',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'In 1879, villagers in Knock, Ireland, reported seeing glowing figures including the Virgin Mary, St. Joseph, and St. John the Evangelist.',
      },
      {
        title: 'Witness Accounts',
        content: 'The figures were silent, unmoving, and luminous. Over a dozen witnesses confirmed the sighting.',
      },
      {
        title: 'Explanations & Theories',
        content: 'The event is considered a miracle by some; skeptics propose atmospheric reflections or mass perception effects.',
      },
    ],
  },
  {
    id: 'gh-64',
    name: 'Knocking Spirits',
    description: 'Entities known for loud bangs, tapping, and rapping sounds',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Knocking spirits appear in both poltergeist cases and traditional hauntings, sometimes communicating through patterned knocks.',
      },
      {
        title: 'Witness Accounts',
        content: 'People report taps on walls, footsteps above empty floors, and pounding on doors with no visible source.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Settling structures, animals, or pipes account for many cases — but intelligent knock patterns remain puzzling.',
      },
    ],
  },
  {
    id: 'gh-65',
    name: 'LaLaurie Mansion Ghosts',
    description: 'The infamous New Orleans mansion haunted by victims of Madame LaLaurie',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'After the 1834 discovery of tortured enslaved people in Madame LaLaurie’s attic, stories of anguished spirits have haunted the French Quarter.',
      },
      {
        title: 'Witness Accounts',
        content: 'Residents report screams, chains rattling, and apparitions of abused individuals lingering in hallways.',
      },
      {
        title: 'Explanations & Theories',
        content: 'A site of extreme trauma often attracts haunting folklore and emotional imprints.',
      },
    ],
  },
  {
    id: 'gh-66',
    name: 'Lady in Red Apparitions',
    description: 'Ghostly women in red gowns seen across hotels, theaters, and ballrooms',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'The Lady in Red appears worldwide, usually tied to tragic love stories or betrayal. Hotels in Nevada, theaters in London, and estates in Canada all report similar red-clad spirits.',
      },
      {
        title: 'Witness Accounts',
        content: 'Witnesses describe a beautiful woman in a crimson gown drifting through hallways, sometimes weeping or vanishing in mirrors.',
      },
      {
        title: 'Explanations & Theories',
        content: 'May represent archetypal grief-lore — a symbolic ghost that appears across cultures rather than a single spirit.',
      },
    ],
  },
  {
    id: 'gh-67',
    name: 'Laughing Corridor Creature',
    description: 'A disturbing apparition known for echoing laughter in empty hallways',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Reports from old schools and hospitals describe an entity that announces itself with childlike giggles or manic laughter.',
      },
      {
        title: 'Witness Accounts',
        content: 'People hear laughter approaching from behind corners, yet the hallways are empty. Some witnesses see a shadow figure darting between rooms.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Possible auditory illusions or residual sounds — though synchronized footsteps and laughter push some cases into true haunting territory.',
      },
    ],
  },
  {
    id: 'gh-68',
    name: 'Little Bastard Car Curse',
    description: 'The cursed Porsche associated with James Dean’s fatal crash',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'After James Dean’s death in 1955, parts salvaged from his Porsche reportedly caused additional accidents and injuries.',
      },
      {
        title: 'Witness Accounts',
        content: 'Mechanics and drivers reported feeling watched around the wreck, tools flying, and strange electrical activity.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Likely coincidence amplified into legend, though the number of linked mishaps is undeniably eerie.',
      },
    ],
  },
  {
    id: 'gh-69',
    name: 'Madonna Bachelor’s Grove',
    description: 'A famous ghost photographed in Chicago’s Bachelor’s Grove Cemetery',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'A 1991 photograph allegedly shows a translucent woman in white sitting on a broken gravestone. Bachelor’s Grove is known for high paranormal activity.',
      },
      {
        title: 'Witness Accounts',
        content: 'Reports describe a woman searching for her lost child, glowing lights over the lagoon, and phantom vehicles.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Some call the photo a masterpiece of paranormal evidence; skeptics argue for double exposure. The cemetery’s history fuels countless stories.',
      },
    ],
  },
  {
    id: 'gh-70',
    name: 'Marilyn Monroe Ghost',
    description: 'The lingering spirit of the Hollywood icon seen in several locations',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Sightings occur at the Roosevelt Hotel, her Brentwood home, and her crypt at Westwood Village Memorial Park.',
      },
      {
        title: 'Witness Accounts',
        content: 'People report reflections of Marilyn in mirrors, cold breezes, perfume scents, and a sad presence standing at the foot of beds.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Celebrity hauntings often arise from public fascination, though consistent sightings across decades raise questions.',
      },
    ],
  },
  {
    id: 'gh-71',
    name: 'McRaven House',
    description: 'One of Mississippi’s most haunted homes with layered time-period hauntings',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Built in multiple eras, the home reportedly hosts spirits from the 1700s through the Civil War. Investigators captured shadows and voices.',
      },
      {
        title: 'Witness Accounts',
        content: 'People see a woman in mourning dress, soldiers in hallways, and floating lights in the yard.',
      },
      {
        title: 'Explanations & Theories',
        content: 'The architectural layers may enhance acoustics and impressions — or preserve emotional imprints across centuries.',
      },
    ],
  },
  {
    id: 'gh-72',
    name: 'Myrtles Plantation Ghosts',
    description: 'A Louisiana plantation often called one of America’s most haunted homes',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'The Myrtles is tied to alleged murders, slave tragedies, and the famous ghost “Chloe,” a woman with a turban caught in numerous photographs.',
      },
      {
        title: 'Witness Accounts',
        content: 'Guests report full apparitions, children’s laughter, footsteps on stairs, and sightings of Chloe peering from doorways.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Some legends are exaggerated, but persistent apparitions keep the plantation at the top of haunted location lists.',
      },
    ],
  },
  {
    id: 'gh-73',
    name: 'Ocean-Born Mary',
    description: 'A New England ghost said to wander a historic New Hampshire home',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'According to legend, Mary was born aboard a pirate-attacked ship and later lived in a home now said to be haunted by her tall, elegant apparition.',
      },
      {
        title: 'Witness Accounts',
        content: 'People see a woman in colonial dress passing through rooms, holding candles, or watching from windows.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Many details conflict historically, but the hauntings persist through strong oral tradition.',
      },
    ],
  },
  {
    id: 'gh-74',
    name: 'Old Charleston Jail',
    description: 'A notoriously haunted jail active from 1802 to 1939',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'The jail housed pirates, Civil War prisoners, and Lavinia Fisher — America’s first female serial killer. Her spirit is said to still roam the halls.',
      },
      {
        title: 'Witness Accounts',
        content: 'Tour groups hear screams, dragging chains, and see shadow figures leaning from cell doors.',
      },
      {
        title: 'Explanations & Theories',
        content: 'The building’s oppressive history and decaying interior create perfect conditions for haunting lore.',
      },
    ],
  },
  {
    id: 'gh-75',
    name: 'Old Mill Lantern Ghost',
    description: 'A spectral mill worker seen carrying a lantern along river paths',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Mill ruins across Europe and North America report similar sightings — a glowing lantern swinging as an apparition searches for something lost.',
      },
      {
        title: 'Witness Accounts',
        content: 'Witnesses see a silhouette drifting near water wheels or along abandoned trails, the lantern light flickering eerily.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Possibly a universal archetype tied to lost workers and dangerous labor conditions of historic mills.',
      },
    ],
  },
  {
    id: 'gh-76',
    name: 'Pearl River Laugher',
    description: 'A phantom that reveals itself through eerie laughter along Louisiana’s Pearl River',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Fishermen and campers report hearing laughter echoing across the water at night, with no source found.',
      },
      {
        title: 'Witness Accounts',
        content: 'Some claim to see a shadowy woman wading into the water, dissolving into mist as she laughs.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Could be distant human voices carried strangely over water — or a swamp revenant tied to local tragedies.',
      },
    ],
  },
  {
    id: 'gh-77',
    name: 'Phantom Courtrooms',
    description: 'Spectral reenactments of trials and legal proceedings',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Old courthouses in Europe and America report scenes of judges, juries, or defendants appearing briefly before fading away.',
      },
      {
        title: 'Witness Accounts',
        content: 'Witnesses hear pounding gavels, murmuring crowds, and see glowing figures seated in abandoned chambers.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Residual haunting — emotional “recordings” playing back where major life events once occurred.',
      },
    ],
  },
  {
    id: 'gh-78',
    name: 'Phantom Drummer Tedworth',
    description: 'A famous 17th-century English poltergeist known for drumming sounds',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'In 1661, John Mompesson’s home was plagued by pounding drums, knocking, and shaking furniture.',
      },
      {
        title: 'Witness Accounts',
        content: 'People heard rhythmic drumming with no visible source, sometimes shaking the entire house.',
      },
      {
        title: 'Explanations & Theories',
        content: 'One of history’s earliest documented poltergeist cases; theories include fraud, witchcraft accusations, or unrested spirits.',
      },
    ],
  },
  {
    id: 'gh-79',
    name: 'Phantom Harpist Ireland',
    description: 'A ghostly harp player heard in ancient castles and cliffside ruins',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Irish folklore is rich with reports of a spectral musician whose harp music echoes through ruins at dusk.',
      },
      {
        title: 'Witness Accounts',
        content: 'Visitors hear soft, mournful tunes drifting from empty chambers or windswept cliffs.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Wind patterns and stone acoustics may mimic harp tones — though many insist the melodies are unmistakably intentional.',
      },
    ],
  },
  {
    id: 'gh-80',
    name: 'Phantom Hitchhikers',
    description: 'One of the most widespread ghost phenomena involving vanishing passengers',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Stories describe drivers picking up a stranded person who later disappears from the vehicle. Resurrection Mary is one of the most famous cases.',
      },
      {
        title: 'Witness Accounts',
        content: 'Witnesses report polite passengers who vanish mid-ride or leave behind objects tied to their past.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Urban legend patterns, grief projections, or residual hauntings — yet some cases involve verifiable identities of the deceased.',
      },
    ],
  },
  {
    id: 'gh-81',
    name: 'Phantom Monks',
    description: 'Robe-wearing monk apparitions appearing in abbeys and ruins',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Old monasteries frequently report silent, hooded figures gliding through cloisters and halls.',
      },
      {
        title: 'Witness Accounts',
        content: 'People describe full apparitions, shadows, or glowing silhouettes of monks moving in procession.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Possible residual haunting sparked by centuries of ritual repetition — monks lived highly patterned lives.',
      },
    ],
  },
  {
    id: 'gh-82',
    name: 'Phantom Twins Yorkshire',
    description: 'Twin apparitions seen wandering Yorkshire countryside paths',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Local lore speaks of two children who died tragically and are now seen holding hands along rural lanes.',
      },
      {
        title: 'Witness Accounts',
        content: 'Witnesses report seeing the twins appear suddenly ahead of them, only to fade into the mist.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Likely tied to layered folklore of child spirits — though the dual apparition aspect is unusually consistent.',
      },
    ],
  },
  {
    id: 'gh-86',
    name: 'Poveglia Island Hauntings',
    description: 'Italy’s forbidden island known for plague pits, asylums, and relentless hauntings',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Used as a quarantine island and later an asylum, Poveglia’s dark past fuels tales of violent spirits and disembodied screams.',
      },
      {
        title: 'Witness Accounts',
        content: 'Visitors report shadow figures, forceful pushes, and overwhelming dread. Some claim to hear voices begging from beneath the soil.',
      },
      {
        title: 'Explanations & Theories',
        content: 'A combination of trauma-imprinted folklore and the island’s decaying structures—but the intensity of reports keeps researchers away.',
      },
    ],
  },
  {
    id: 'gh-87',
    name: 'Queen Mary Hauntings',
    description: 'The RMS Queen Mary is considered one of the most haunted ships in the world',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'The ship’s engine room, pool area, and staterooms are hotspots for apparitions—many tied to accidents and wartime service.',
      },
      {
        title: 'Witness Accounts',
        content: 'People report a little girl near the pool, a screaming engineer in Door 13, and full-bodied apparitions in the hallways.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Residual hauntings fueled by decades of tragedy and mass human presence. The ship’s metal construction amplifies sounds and sensations.',
      },
    ],
  },
  {
    id: 'gh-88',
    name: 'Queen’s Staircase Phantom',
    description: 'A ghostly figure haunting the stone stairway in the Bahamas',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Built by enslaved people in the 18th century, the staircase holds deep emotional resonance, leading to persistent ghost reports.',
      },
      {
        title: 'Witness Accounts',
        content: 'Tourists see a man in old military clothing or a woman in a flowing dress ascending the stairs before fading.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Residual energy from suffering and history may shape these apparitions.',
      },
    ],
  },
  {
    id: 'gh-89',
    name: 'Randolph County Asylum',
    description: 'An Indiana asylum known for aggressive spirits and dark hallways',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Opened in 1899, the asylum housed the mentally ill, the destitute, and the unwanted. Investigators regularly capture EVPs and shadows.',
      },
      {
        title: 'Witness Accounts',
        content: 'Visitors hear growls, footsteps following them, and see figures crawling along walls.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Classic asylum haunting mixed with extreme environmental decay that enhances fear responses.',
      },
    ],
  },
  {
    id: 'gh-90',
    name: 'Ratu Boko Ghost',
    description: 'A spirit said to appear near the ancient palace ruins in Indonesia',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'The ruins near Prambanan have long been tied to stories of a guardian spirit or wandering royal apparition.',
      },
      {
        title: 'Witness Accounts',
        content: 'Tourists see a tall figure dressed in ancient Javanese attire walking among the gates.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Likely folklore mixed with nighttime optical illusions created by torchlight and stone shadows.',
      },
    ],
  },
  {
    id: 'gh-91',
    name: 'Raynham Hall Footsteps',
    description: 'Footsteps and phantom activity in England’s Raynham Hall, home of the Brown Lady',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Raynham Hall hosts multiple spirits, but footsteps echoing on upper floors are the most common report.',
      },
      {
        title: 'Witness Accounts',
        content: 'Servants and guests hear pacing footsteps, running, and door latches clicking with no source.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Historic wood shifts and airflow create sounds—but synchronized footsteps remain unexplained.',
      },
    ],
  },
  {
    id: 'gh-92',
    name: 'Resurrection Mary',
    description: 'One of America’s most famous vanishing hitchhikers',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Since the 1930s, drivers near Archer Avenue report picking up a young woman in a white dress who later vanishes.',
      },
      {
        title: 'Witness Accounts',
        content: 'Mary often asks to be dropped at the cemetery gates before disappearing. Some drivers claim she walked through locked doors.',
      },
      {
        title: 'Explanations & Theories',
        content: 'A combination of urban legend and recurring ghost archetype — but the consistency of sightings keeps her legend alive.',
      },
    ],
  },
  {
    id: 'gh-93',
    name: 'Rhode Island Vampire Mercy Brown',
    description: 'The 1892 case where a suspected vampire was exhumed in Exeter, Rhode Island',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Mercy Brown’s body appeared unusually preserved, leading locals to believe she was feeding on the living.',
      },
      {
        title: 'Witness Accounts',
        content: 'Some report seeing Mercy’s apparition near her grave, pale and watching silently.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Natural preservation in winter conditions explains the body — the ghost stories evolved later.',
      },
    ],
  },
  {
    id: 'gh-94',
    name: 'Ridges Athens Asylum',
    description: 'A former asylum in Ohio notorious for hauntings and the “stain room”',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'A woman’s body outline permanently stained into the floor sparked intense paranormal lore.',
      },
      {
        title: 'Witness Accounts',
        content: 'People hear screams, see shadow people, and feel cold hands grip their arms in dark hallways.',
      },
      {
        title: 'Explanations & Theories',
        content: 'The stain has natural causes—but the asylum’s emotional weight fuels persistent hauntings.',
      },
    ],
  },
  {
    id: 'gh-95',
    name: 'Ross Castle Hauntings',
    description: 'An Irish castle haunted by a sorrowful noblewoman and phantom horsemen',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'The ghost of Sabina, who died of heartbreak, is said to appear near the lake. Soldiers on horseback have also been reported.',
      },
      {
        title: 'Witness Accounts',
        content: 'Visitors hear splashing, hoofbeats, and see a woman in a flowing dress wandering the shore.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Folklore tied to tragic romance and medieval warfare shapes these sightings.',
      },
    ],
  },
  {
    id: 'gh-96',
    name: 'Route 66 Railroad Ghosts',
    description: 'Phantom figures seen along abandoned rail lines crossing Route 66',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Reports include railroad workers waving lanterns, ghost trains, and spectral hobos riding the lines.',
      },
      {
        title: 'Witness Accounts',
        content: 'Drivers see men on tracks who vanish when approached or glowing lights pacing them along the road.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Atmospheric reflections and distant headlights — but the multi-state consistency is unusual.',
      },
    ],
  },
  {
    id: 'gh-97',
    name: 'Salton Sea Ghosts',
    description: 'Spirits and strange silhouettes reported around California’s decaying Salton Sea',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Economic collapse left entire resorts abandoned, becoming fertile ground for ghost sightings.',
      },
      {
        title: 'Witness Accounts',
        content: 'People see figures walking along empty beaches, hear children playing, and experience sudden temperature drops.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Environmental toxicity and mirages create illusions, but many reports occur at night.',
      },
    ],
  },
  {
    id: 'gh-98',
    name: 'Screaming House Union',
    description: 'A Missouri home infamous for aggressive hauntings and loud disembodied screams',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'A family reported violent attacks, growling voices, and objects flying across rooms. Investigators captured disturbing EVPs.',
      },
      {
        title: 'Witness Accounts',
        content: 'Neighbors heard screams from outside. Inside, shadow figures formed, and occupants felt scratched or thrown.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Considered one of the more extreme American haunting cases — theories range from poltergeist to demonic activity.',
      },
    ],
  },
  {
    id: 'gh-99',
    name: 'Screaming Skull Bettiscombe',
    description: 'A cursed skull said to scream when removed from its ancestral home',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'The skull allegedly belongs to an enslaved man who demanded burial at home. Removing it caused storms and screams.',
      },
      {
        title: 'Witness Accounts',
        content: 'Residents heard wailing from the skull’s location and experienced poltergeist-like events.',
      },
      {
        title: 'Explanations & Theories',
        content: 'A powerful blend of folklore, guilt, and ancestral tradition — though the skull’s origin remains uncertain.',
      },
    ],
  },
  {
    id: 'gh-100',
    name: 'Screaming Tunnel Ontario',
    description: 'A stone tunnel near Niagara Falls associated with a tragic burning and ghostly screams',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Legend says a girl burned alive in the tunnel, and lighting a match at midnight summons her screams.',
      },
      {
        title: 'Witness Accounts',
        content: 'Visitors hear shrieks, footsteps, or feel gusts of heat rushing past.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Likely folklore amplified by acoustics — the tunnel’s echo chamber creates dramatic sound effects.',
      },
    ],
  },
  {
    id: 'gh-101',
    name: 'Sedlec Ossuary Spirits',
    description: 'Ghostly activity reported among the bone sculptures of the Czech ossuary',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Containing bones of 40,000–70,000 people, the ossuary’s macabre decor sparks sightings of robed figures and whispering voices.',
      },
      {
        title: 'Witness Accounts',
        content: 'Tourists report feeling touched, hearing prayers, or seeing skulls turn slightly on shelves.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Bone-light reflections and heavy atmosphere combine with spiritual symbolism to create potent ghost experiences.',
      },
    ],
  },
  {
    id: 'gh-102',
    name: 'Silent Railwalker',
    description: 'A ghostly figure walking railroad tracks without making a sound',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Seen in rural areas, the Railwalker moves steadily along tracks, never reacting to noise or light.',
      },
      {
        title: 'Witness Accounts',
        content: 'People try to approach the figure, which dissolves into darkness or fog as they near.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Residual haunting tied to train accidents or workers killed on the line.',
      },
    ],
  },
  {
    id: 'gh-103',
    name: 'Smoked Kitchen Ghost',
    description: 'A soot-covered specter found in abandoned or fire-damaged kitchens',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Reports from old inns and homes describe a charred-looking figure who appears near stoves or chimneys.',
      },
      {
        title: 'Witness Accounts',
        content: 'Witnesses see drifting black silhouettes, smell burnt wood, or hear pots clattering.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Smoke stains and pareidolia play roles — yet the recurring archetype is surprisingly widespread.',
      },
    ],
  },
  {
    id: 'gh-104',
    name: 'Smoked Mirror Ghost',
    description: 'A shadowy face that appears in old mirrors darkened by age or smoke',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Haunted hotels and estates report mirror apparitions staring back at guests, sometimes mimicking expression changes.',
      },
      {
        title: 'Witness Accounts',
        content: 'People see a ghostly outline forming behind them, or a smoky face that lingers when they turn away.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Oxidation and imperfections create illusions — though synchronized facial expressions remain unexplained.',
      },
    ],
  },
  {
    id: 'gh-105',
    name: 'Storm Cellar Children',
    description: 'Crying or laughing children heard in old farm storm shelters',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Midwest farms with century-old storm cellars report apparitions of children hiding or playing during storms.',
      },
      {
        title: 'Witness Accounts',
        content: 'Farmers hear small footsteps, tapping, or laughter from below ground — but the cellar is empty upon inspection.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Emotional echoes from historic tragedies, or misinterpreted animal sounds — yet the consistency keeps the stories alive.',
      },
    ],
  },
  {
    id: 'gh-106',
    name: 'St. Augustine Lighthouse',
    description: 'One of America’s most haunted lighthouses with tragic deaths tied to its history',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Multiple lighthouse keepers died on duty, and two children drowned nearby. Investigators record footsteps and voices.',
      },
      {
        title: 'Witness Accounts',
        content: 'Visitors hear climbing footsteps on the spiral stairs, see girls in period clothing, and feel tugs on their clothing.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Humidity and acoustics create eerie effects — yet repeated sightings over decades give weight to the haunting.',
      },
    ],
  },
  {
    id: 'gh-107',
    name: 'Talking Poltergeists',
    description: 'Rare poltergeist cases where the entity speaks or mimics voices',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Famous examples include Gef the Talking Mongoose and the Bell Witch, with entities producing speech-like sounds.',
      },
      {
        title: 'Witness Accounts',
        content: 'People hear growls, whispers, or clear sentences spoken from empty rooms.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Possible vocalization tricks, subconscious ventriloquism, or true anomalous communication — still debated.',
      },
    ],
  },
  {
    id: 'gh-108',
    name: 'The Ridges Asylum',
    description: 'Another name for the Athens asylum hauntings, focusing on patient apparitions',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Apparitions of patients in gowns appear in corridors, especially near the abandoned treatment wings.',
      },
      {
        title: 'Witness Accounts',
        content: 'Witnesses report shadows pacing rooms, cold hands grabbing them, and disembodied screams.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Likely an extension of the building’s intense reputation and tragic legacy.',
      },
    ],
  },
  {
    id: 'gh-109',
    name: 'Thunderstorm Woman',
    description: 'A ghostly woman seen walking through fields during thunderstorms',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Farm communities describe a woman who appears moments before lightning strikes or major storms.',
      },
      {
        title: 'Witness Accounts',
        content: 'Some see a glowing outline or wet footprints forming behind an invisible walker.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Storm anxiety and atmospheric distortions may contribute — or she’s a weather omen spirit.',
      },
    ],
  },
  {
    id: 'gh-110',
    name: 'Tower of London Hauntings',
    description: 'Additional apparitions beyond Anne Boleyn and the Princes in the Tower',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Reports include spectral dogs, headless nobles, and phantom armies marching through courtyards.',
      },
      {
        title: 'Witness Accounts',
        content: 'Guards describe icy grasps, screams from empty cells, and shadows appearing on battlements.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Layered trauma over centuries makes the Tower one of the densest haunting sites in the world.',
      },
    ],
  },
  {
    id: 'gh-111',
    name: 'Underground Tunnel Singer',
    description: 'A disembodied singer whose voice echoes through long-forgotten tunnels',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Old mining tunnels and abandoned subway lines report melodic humming or full songs with no visible source.',
      },
      {
        title: 'Witness Accounts',
        content: 'People hear a woman’s voice echoing ahead of them, but the tunnels are empty.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Acoustic reverberations can create strange effects — though perfect pitch in the dark raises eyebrows.',
      },
    ],
  },
  {
    id: 'gh-112',
    name: 'Waverly Hills Sanatorium',
    description: 'Perhaps the most famous haunted hospital in the United States',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'The tuberculosis hospital saw tens of thousands of deaths. Hotspots include the Death Tunnel, Room 502, and shadow-inhabited halls.',
      },
      {
        title: 'Witness Accounts',
        content: 'Investigators see shadow people, hear rolling gurneys, and witness doors slamming on empty floors.',
      },
      {
        title: 'Explanations & Theories',
        content: 'High death count + abandoned architecture = classic haunting environment.',
      },
    ],
  },
  {
    id: 'gh-113',
    name: 'White Horse Tavern Spirits',
    description: 'Newport’s historic tavern filled with colonial-era ghosts',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'The oldest operating tavern in the U.S. reports spirits of sailors, soldiers, and a mischievous child ghost.',
      },
      {
        title: 'Witness Accounts',
        content: 'Guests see apparitions in old uniforms, hear footsteps upstairs, and feel hands tug at their coats.',
      },
      {
        title: 'Explanations & Theories',
        content: 'A long and layered history creates a perfect incubator for traditional hauntings.',
      },
    ],
  },
  {
    id: 'gh-114',
    name: 'Winchester Mystery House',
    description: 'Additional activity beyond the main mansion stories',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'Reports include phantom carpenters, footsteps on stairs to nowhere, and Sarah Winchester’s apparition guiding visitors.',
      },
      {
        title: 'Witness Accounts',
        content: 'Guests report doors closing, whispers, and fleeting figures near the séance room.',
      },
      {
        title: 'Explanations & Theories',
        content: 'The bizarre architecture creates sensory disorientation mistaken for hauntings.',
      },
    ],
  },
  {
    id: 'gh-115',
    name: 'Wychwood Forest Coach',
    description: 'A phantom coach said to thunder through Oxfordshire’s ancient Wychwood Forest',
    categoryId: 'ghosts',
    icon: '👻',
    sections: [
      {
        title: 'Case Studies',
        content: 'The ghostly coach is tied to Lady Elizabeth de Widville, who reportedly appears before death foretells tragedy.',
      },
      {
        title: 'Witness Accounts',
        content: 'People hear hooves, wheels, and see a glowing carriage rush past before fading into trees.',
      },
      {
        title: 'Explanations & Theories',
        content: 'Residual haunting mixed with deep English folklore and forest acoustics.',
      },
    ],
  },
];

export const getGhostById = (id: string): GhostTopic | undefined => {
  return ghostsData.find(ghost => ghost.id === id);
};

export const getGhostByName = (name: string): GhostTopic | undefined => {
  return ghostsData.find(ghost => ghost.name.toLowerCase() === name.toLowerCase());
};

/**
 * Get all ghost topics
 * @returns Array of all ghost topics
 */
export const getAllGhosts = (): readonly GhostTopic[] => {
  return ghostsData;
};

/**
 * Get count of ghost topics
 * @returns Total number of ghost topics
 */
export const getGhostsCount = (): number => {
  return ghostsData.length;
};
