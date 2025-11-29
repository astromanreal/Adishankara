
import type { Kshetra } from '@/types';

export const kshetrasData: Kshetra[] = [
  {
    id: 'kshetra_kedarnath',
    slug: 'kedarnath-temple',
    name: 'Kedarnath Temple',
    deity: 'Lord Shiva (Sadāśiva) – Jyotirlinga',
    location: {
      city: 'Kedarnath',
      state: 'Uttarakhand',
      region: 'North India',
    },
    description: 'One of the most revered Jyotirlingas, Kedarnath is a prime pilgrimage site for Shaivites, nestled high in the Himalayas. It is believed to be the place where Adi Shankaracharya renovated the ancient shrine and attained his Mahasamadhi, making it a site of immense spiritual significance for the Advaita tradition.',
    image: 'https://i.pinimg.com/736x/e1/98/9f/e1989f4fc766b63dbb10f1244f253480.jpg',
    aiHint: 'kedarnath temple himalayas',
    legacy: 'Jyotirlinga | Mahasamadhi Sthal',
    spiritualSignificance: [
      'One of the twelve Śiva Jyotirlingas – highest in altitude',
      'Central to the Panch Kedar pilgrimage circuits',
      'Site of Adi Shankaracharya’s Mahāsamādhi',
    ],
    shankarasContribution: {
      renovation: 'Rebuilt and sanctified the shrine during 8th century',
      samadhi: 'Attained Mahāsamādhi at this site at age 32',
      legacyWork:
        'Installed South-Indian Dasanāmi priests (Rawals), revived Vedic rituals and Advaita symbolism',
    },
    historicalOverview: [
      'Legend says the Pandavas built the first shrine; current temple credited to Shankara and later royal patrons',
      'Mentioned in Skanda Purāṇa (7–8th C)',
      'Reconstruction after 2013 floods; samādhi memorial rebuilt and inaugurated in 2021 with 12-ft granite statue',
    ],
    architecturalDetails: [
      'Built in North-Indian Himalayan (Rekha-Śikhara) style, massive grey stone slabs, earthquake-proof design',
      'Features high shikhara, Nandi statue, and carved lingam',
      'Samādhi memorial behind temple with meditation area and plaques',
    ],
    visitInfo: {
      seasonalAccess:
        'Open April–November; deity moved to Ukhimath during winters',
      accessRoute:
        '16 km trek from Gaurikund (road ends) or helicopter service; nearest railway Rishikesh (~220 km), airport Dehradun (~240 km)',
    },
    nearbySites: [
      'Shankaracharya Samādhi memorial (600 m behind temple)',
      'Bhīmśīlā rock: believed to have protected temple during 2013 floods',
      'Bhairavnāth Temple, Gandhi Sarovar, Chorabari Glacier, Triyuginārāyan Temple',
    ],
    tags: ['Jyotirlinga', 'Mahāsamādhi Sthal', 'Advaita Revival', 'Char Dham'],
    references: {
      wikipedia: 'https://en.wikipedia.org/wiki/Kedarnath_Temple',
    },
  },
  {
    id: 'kshetra_badrinath',
    slug: 'badrinath-temple',
    name: 'Badrinath Temple',
    deity: 'Lord Vishnu (Badrinarayan)',
    location: {
      city: 'Badrinath',
      state: 'Uttarakhand',
      region: 'North India',
    },
    description: "One of the Char Dhams, this sacred shrine was revived by Adi Shankaracharya, who discovered the Saligrama stone idol of Badrinarayan in the Alaknanda River and installed it in the temple, re-establishing it as a major center of Vaishnavism.",
    image: 'https://i.pinimg.com/1200x/42/3b/7f/423b7f3475a1376375eb37e954aa576c.jpg',
    aiHint: 'badrinath temple mountains',
    legacy: 'Char Dham | Vaishnava Revival',
    spiritualSignificance: [
        "One of the Char Dham pilgrimage sites and a major Vaishnava shrine, Badrinath is considered the spiritual heart of the Himalayas.",
        "The temple is nestled between the Nar and Narayan mountain ranges, beside the sacred Alaknanda river."
    ],
    shankarasContribution: {
      contribution: "Adi Shankaracharya rediscovered and revived the shrine in the 8th century CE. He found the idol of Badrinarayana in the Alaknanda river and installed it in a cave, later moved to the present temple. He re-established Vedic worship here and included it in the Char Dham pilgrimage circuit."
    },
    architecturalDetails: [
        "Traditional North Indian (Nagara style) architecture with a brightly colored facade and intricate wooden carvings.",
        "The sanctum houses a black stone image of Badrinarayana in a meditative posture."
    ],
    tags: ['Char Dham', 'Vaishnava', 'Adi Shankaracharya', 'Himalayan Temple', 'Pilgrimage'],
    references: {
      wikipedia: 'https://en.wikipedia.org/wiki/Badrinath_Temple',
    },
  },
  {
    id: 'kshetra_triyuginarayan',
    slug: 'triyuginarayan-temple',
    name: 'Triyuginarayan Temple',
    deity: 'Lord Vishnu (as the Kshetrapal)',
    location: {
      city: 'Triyuginarayan',
      state: 'Uttarakhand',
      region: 'North India',
    },
    description: "This ancient temple is revered as the sacred site of the celestial marriage of Lord Shiva and Goddess Parvati. An eternal flame (Akhand Dhuni) is said to have witnessed their wedding and continues to burn to this day. Adi Shankaracharya is credited with renovating the temple.",
    image: 'https://i.pinimg.com/1200x/dd/db/c3/dddbc308abfc30aa0e90a93cf403e319.jpg',
    aiHint: 'ancient temple eternal flame',
    legacy: 'Celestial Marriage Site | Akhand Dhuni',
    spiritualSignificance: [
        "Triyuginarayan is a highly sacred site where the divine marriage of Lord Shiva and Goddess Parvati is believed to have taken place.",
        "The eternal flame (Akhand Dhuni) burning in front of the temple is said to have witnessed this celestial union."
    ],
    shankarasContribution: {
      contribution: "Adi Shankaracharya is believed to have visited and consecrated this temple during his Himalayan pilgrimage. He is traditionally credited with preserving and sanctifying the temple structure, ensuring that the legacy of the divine marriage is maintained in Sanatana Dharma's living memory."
    },
    architecturalDetails: [
        "Simple stone-built Himalayan temple architecture with wooden carvings and a high-altitude sanctum.",
        "The temple layout resembles that of Kedarnath in structure and placement."
    ],
    tags: ['Shaiva', 'Sacred Marriage', 'Akhand Dhuni', 'Adi Shankaracharya', 'Uttarakhand', 'Pilgrimage'],
    references: {
      wikipedia: 'https://en.wikipedia.org/wiki/Triyuginarayan_Temple',
    },
  },
  {
    id: 'kshetra_kamakshi_amman',
    slug: 'kamakshi-amman-temple',
    name: 'Kamakshi Amman Temple',
    deity: 'Goddess Kamakshi (Parvati – Parabrahma Svarupini)',
     location: {
      city: 'Kanchipuram',
      state: 'Tamil Nadu',
      region: 'South India',
    },
    description: 'A major center of Shakti worship, this temple is dedicated to Goddess Kamakshi, the supreme form of Lalita Tripurasundari. It is a key site where Shankara established the Sri Chakra to channel divine grace.',
    shankarasContribution: {
      contribution: 'Established the Kanchi Kamakoti Peetham and installed the Sri Chakra in front of the deity to transform the Goddess\'s fierce (ugra) form into a benevolent (saumya) one, channeling her grace for the welfare of all.'
    },
    image: 'https://i.pinimg.com/736x/bd/af/6a/bdaf6a935e976af844fc80883df2eed3.jpg',
    aiHint: 'kanchipuram temple gopuram',
    legacy: 'Peetham Seat | Sri Chakra Kshetra',
    tags: ['Shakti Peetham', 'Mokshapuri', 'Sri Chakra'],
    spiritualSignificance: [
      "One of the 51 Shakti Peethas (“Navel of Sati”)",
      "Only Parvati shrine in temple-city Kanchipuram",
      "Seat of Sri Chakra – symbol of cosmic energy and divine feminine"
    ],
    historicalOverview: [
      "Founded during the Pallava dynasty (5th–8th c. CE).",
      "Shankara's establishment of the Kanchi Kamakoti Peetham made it a center of Advaita."
    ],
    architecturalDetails: [
      "Dravidian architecture style, spanning 5 acres.",
      "Features a golden-plated vimana (spire) and four cardinal entrances.",
      "Inner prakaram includes deities like Ardhanarishvara and a murti of Adi Shankara."
    ],
    visitInfo: {
      hours: "05:30–12:00 & 16:30–20:30 daily",
    },
    nearbySites: ["Varadaraja Perumal Temple", "Ekambareswarar Temple", "Kanchi Kudil heritage site"],
     references: {
      wikipedia: 'https://en.wikipedia.org/wiki/Kamakshi_Amman_Temple,_Kanchipuram',
    },
  },
    {
    id: 'kshetra_sringeri_sharada',
    slug: 'sharada-temple-sringeri',
    name: 'Sharada Temple, Sringeri',
    deity: 'Goddess Sharada (Saraswati) – Goddess of Knowledge',
    location: {
      city: 'Sringeri',
      state: 'Karnataka',
      region: 'South India',
    },
    description: 'The Sringeri Sharada Peetham is the first and foremost of the four cardinal mathas established by Adi Shankaracharya. Dedicated to Sharadamba, the Goddess of Learning, it is a major center for Sanskrit and Vedic studies.',
    shankarasContribution: {
        contribution: 'Established his first and most important Matha here on the banks of the Tunga river after witnessing a cobra shelter a spawning frog. He installed a sandalwood idol of Sharadamba, making it a beacon of knowledge (Jnana) for the entire subcontinent.'
    },
    image: 'https://i.pinimg.com/1200x/b6/b7/72/b6b77243f2fc8311ad518f0fcdec5519.jpg',
    aiHint: 'sringeri temple river',
    legacy: 'Peetham Seat | Jnana Kendra',
    tags: ['Matha', 'Saraswati', 'Jnana'],
    spiritualSignificance: [
        "First of Adi Shankara’s four cardinal Mathas",
        "Sacred site of his 12-year tapas after the cobra-frog miracle",
        "Seat of Advaita learning (‘Peetha of Wisdom’)"
    ],
    historicalOverview: [
        "Original sandalwood idol was later replaced with a golden one during the Vijayanagara era (14-15th c.).",
        "The current granite structure was rebuilt in 1916."
    ],
    architecturalDetails: [
      "Dravidian style with Vijayanagara and Hoysala influences.",
      "Vidyashankara Temple (14th c.) is famous for its twelve zodiac pillars.",
      "Home to a vast library of ancient palm-leaf and paper manuscripts."
    ],
    visitInfo: {
        hours: "6:00–14:00, 17:00–20:30 daily",
        accessRoute: "Nearest airport is Mangalore (~101 km); nearest railway is Kadur (~90 km)."
    },
    nearbySites: ["Vidyashankara Temple", "Tunga River Ghats", "Sirimane Falls"],
     references: {
      wikipedia: 'https://en.wikipedia.org/wiki/Sharadamba_Temple,_Sringeri',
    },
  },
  {
    id: 'kshetra_jagannath_puri',
    slug: 'jagannath-temple-puri',
    name: 'Jagannath Temple, Puri',
    deity: 'Lord Jagannath (Vishnu), with Balabhadra & Subhadra',
    location: {
      city: 'Puri',
      state: 'Odisha',
      region: 'East India',
    },
    description: 'A major pilgrimage site and one of the Char Dhams, this temple is dedicated to Jagannath, a form of Vishnu. It is famous for its annual Ratha Yatra (chariot festival).',
    shankarasContribution: {
        contribution: 'Established the Govardhan Matha, one of the four cardinal mathas, in Puri and is credited with restructuring temple rituals to align them with Advaita Vedantic principles, bridging local traditions with pan-Indian philosophical thought.'
    },
    image: 'https://i.pinimg.com/1200x/98/c2/e1/98c2e112eb9f2186e0b07591895d75a6.jpg',
    aiHint: 'jagannath temple puri',
    legacy: 'Peetham Seat | Vaishnava Hub',
    tags: ['Char Dham', 'Vaishnava', 'Ratha Yatra'],
    spiritualSignificance: [
      "One of the original Char Dham pilgrimage sites.",
      "A syncretic blend of Shaiva, Vaishnava, Shakta, and folk traditions.",
      "Center of the world-famous Ratha Yatra and the sacred Nabakalebara cycle."
    ],
    historicalOverview: [
      "The present temple structure was built in the 10th–12th century CE by the Ganga dynasty.",
      "Shankara's founding of Govardhan Matha gave his tradition a permanent seat in the temple's Mukti Mandap council."
    ],
    architecturalDetails: [
      "Classic Kalinga temple architecture with 60-meter high Shikharas (spires).",
      "The complex spans over 400,000 square feet, containing numerous halls and shrines."
    ],
    visitInfo: {
        hours: "Daily: 5 AM–1 PM & 4 PM–9 PM (subject to temple rules)",
        accessRoute: "Nearest airport is Bhubaneswar (~60 km); Puri has its own railway station."
    },
    nearbySites: ["Govardhan Matha", "Vimala Temple (within complex)", "Puri Beach"],
     references: {
      wikipedia: 'https://en.wikipedia.org/wiki/Jagannath_Temple,_Puri',
    },
  },
];
