
import type { Matha } from '@/types';

export const mathasData: Matha[] = [
  {
    name: 'Sringeri Sharada Peetham',
    direction: 'South',
    location: 'Sringeri, Karnataka',
    veda: 'Yajur Veda',
    mahavakya: 'Aham Brahmāsmi – "I am Brahman"',
    description: 'The first and most revered matha, Sringeri is a flourishing center for Vedic studies, Sanskrit scholarship, and has maintained an unbroken lineage of Jagadgurus for over 1200 years. It is situated on the banks of the Tunga river and is dedicated to Sharada Devi, the Goddess of knowledge.',
    image: 'https://i.pinimg.com/1200x/1c/1a/f0/1c1af0c3cf02ff16ec438c66cfc1f7a1.jpg',
    aiHint: 'temple south india',
    website: 'https://www.sringeri.net/',
    slug: 'sringeri',
    details: {
      historicalNotes: [
        "Tradition names Sri Sureshwaracharya as its first Acharya, appointed directly by Shankara.",
        "Early records are scarce; first epigraphic evidence dates to the 12th–14th centuries, though the tradition dates back to Shankara.",
        "Hosted royal patronage from Vijayanagara kings under Jagadguru Vidyaranya in the 14th century CE."
      ],
      architecturalHighlights: [
        "Temple of Sri Sharadamba, originally sandalwood statue later replaced with gold and granite structure rebuilt between 1916–1999.",
        "Vidyashankara Temple (1338 CE) remarkable for its twelve zodiac pillars and architectural blend of Dravidian-Hoysala style.",
        "Four shrines circles around the matha—Kalabhairava, Vana Durga, Kalikamba, Kere Anjaneya—protecting Sringeri spiritually."
      ],
      guruParampara: [
        {"position": 1, "name": "Sureshwaracharya", "period": "c. 8th century"},
        {"position": 10, "name": "Vidyatirtha", "period": "1229–1333"},
        {"position": 11, "name": "Bharati Tirtha", "period": "1333–1380"},
        {"position": 12, "name": "Vidyarayana", "period": "1380–1386"},
        {"position": 35, "name": "Abhinava Vidyatirtha", "period": "1954–1989"},
        {"position": 36, "name": "Bharati Tirtha", "period": "1989–present"}
      ],
      sacredFeatures: [
        { "name": "Nakshatravana", "description": "Grove of 27 trees corresponding to lunar nakshatras, set in Western Ghats." }
      ]
    }
  },
  {
    name: 'Dwaraka Sharada Peetham',
    direction: 'West',
    location: 'Dwarka, Gujarat',
    veda: 'Sama Veda',
    mahavakya: 'Tat Tvam Asi – "That Thou Art"',
    description: 'Located at the western edge of Bharat, the Dwaraka Matha symbolizes the profound unity between bhakti and jnana, preserving a tradition of Vedic chant and meditation.',
    image: 'https://i.pinimg.com/736x/8c/76/6b/8c766b14f237fb090bf9d23a2248f1b5.jpg',
    aiHint: 'temple gujarat',
    website: 'https://shreesharadapithmathdwarka.org/',
    slug: 'dwaraka',
    details: {
        historicalNotes: [
            "Traditionally founded in the 8th Century CE by Adi Shankaracharya.",
            "Local tradition refers to a copper plate issued by King Sudhanva in 477 BCE, though its historicity is debated.",
            "Shankara is said to have re-instated deities in Trailokya and Bhadrakali temples before establishing the Matha."
        ],
        architecturalHighlights: [
            "Four-storied monastery structure dating between the 14th–17th centuries.",
            "Features intricate paintings depicting the life of Adi Shankaracharya.",
            "A carved dome illustrating Lord Shiva is a prominent feature.",
            "The main Sharada Devi shrine is located within the famous Dwarkadheesh Temple complex."
        ]
    }
  },
  {
    name: 'Govardhan Matha',
    direction: 'East',
    location: 'Puri, Odisha',
    veda: 'Rig Veda',
    mahavakya: 'Prajñānam Brahma – "Consciousness is Brahman"',
    description: 'Situated beside the sacred Jagannath Temple, this matha represents dynamic consciousness and is linked to the primordial Rig Veda, with influence extending through Odisha and Bengal.',
    image: 'https://i.pinimg.com/1200x/d0/1b/ce/d01bce748a8933a893232ffab71c591c.jpg',
    aiHint: 'temple odisha',
    website: 'https://govardhanpeeth.org/',
    slug: 'govardhan',
    details: {
        historicalNotes: [
            "Founded by Adi Shankaracharya, with his disciple Padmapadacharya appointed as the first pontiff.",
            "Closely interwoven with the traditions of the Jagannath Temple and the Shakti worship at the Vimala temple.",
            "Swami Bharati Krishna Tirtha (143rd Shankaracharya) was a notable former head, known for his work on 'Vedic Mathematics' and being the first to visit the West."
        ],
        architecturalHighlights: [
            "The monastery is a four-storied structure located near the Swargadwar area of Puri.",
            "The main shrine houses idols of Jagannath, Vimala (as Bhairavi), Govardhananatha Krishna, and Ardhanarishwara Shiva."
        ],
        guruParampara: [
            {"position": 1, "name": "Padmapadacharya", "period": "c. 8th Century"},
            {"position": 143, "name": "Swami Bharati Krishna Tirtha", "period": "1925–1960"},
            {"position": 145, "name": "Swami Nishchalananda Saraswati", "period": "1992-present"}
        ]
    }
  },
  {
    name: 'Jyotir Matha',
    direction: 'North',
    location: 'Joshimath, Uttarakhand',
    veda: 'Atharva Veda',
    mahavakya: 'Ayam Ātmā Brahma – "This Self is Brahman"',
    description: 'Surrounded by the mystic silence of the Himalayas, Jyotir Matha guards the esoteric Atharva Veda and reflects the inward flame of self-realization for renunciates and seekers.',
    image: 'https://i.pinimg.com/1200x/4c/4e/c4/4c4ec41a71363f81570ed09d1cf87b09.jpg',
    aiHint: 'temple himalayas',
    website: 'https://jyotirmath.org/',
    slug: 'jyotir',
    details: {
        historicalNotes: [
            "The town was anciently known as Kartikeya-pura, capital of the Katyuri Dynasty.",
            "Renamed to Jyotirmath after Shankara performed tapas here and attained divine light (jyoti).",
            "The seat was vacant for many years before being revived in the 20th century."
        ],
        architecturalHighlights: [
            "The monastic complex includes shrines to Badrinarayan and Rajrajeshwari Devi.",
            "Features a sacred cave where Shankara is believed to have meditated.",
            "Home to the Jyoteshwar Mahadev Temple, worshipped by Shankara."
        ],
        sacredFeatures: [
            { "name": "Kalpavriksha (Mulberry Tree)", "description": "An ancient tree, estimated to be ~2500 years old, under which Shankara performed tapas." }
        ],
        guruParampara: [
            {"position": 1, "name": "Totakacharya", "period": "c. 8th Century"},
            {"position": -1, "name": "Swami Avimukteshwaranand Saraswati", "period": "2022-present"},
        ]
    }
  },
];
