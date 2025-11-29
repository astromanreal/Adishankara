
import type { Disciple } from '@/types';
import { Brain, Heart, Feather, Coffee } from 'lucide-react';

export const disciplesData: Disciple[] = [
  {
    name: 'Sureshwaracharya',
    slug: 'sureshwaracharya',
    title: 'The Erudite Scholar',
    transformation: "From Mimamsaka Mandana Misra to Shankara’s foremost logical expositor.",
    path: 'Logic & Scripture (Jnana Marga)',
    icon: Brain,
    matha: 'Sringeri Sharada Peetham',
    contribution: 'Naishkarmya Siddhi, Vartikas on Upanishads',
    legacy: 'Systematizer of Advaita',
    image: 'https://i.pinimg.com/1200x/78/b4/37/78b43781cd312b832b609d8aef6db633.jpg',
    aiHint: 'indian scholar manuscript',
    biography: "Originally known as Mandana Misra, Sureshwaracharya was a staunch proponent of the ritualistic Mimamsa school and a fierce opponent of Advaita. After a legendary debate with Adi Shankaracharya, in which his own wife Ubhaya Bharati acted as the judge, he accepted defeat and became Shankara's most devoted and intellectually formidable disciple. His transformation symbolizes the supremacy of knowledge (Jnana) over ritualism.",
    keyWorks: [
      'Naishkarmya Siddhi: A masterpiece establishing that liberation comes from knowledge alone, not action.',
      'Brihadaranyaka Upanishad Bhashya Vartika: An exhaustive sub-commentary on Shankara\'s commentary.',
      'Taittiriya Upanishad Bhashya Vartika: A detailed explanation of Shankara\'s commentary on the Taittiriya Upanishad.',
      'Manasollasa: A commentary on the Dakshinamurthy Stotram.'
    ],
    teachings: 'His work tirelessly establishes that while selfless action (Karma Yoga) purifies the mind, only the direct knowledge of Atman-Brahman identity can grant final liberation (Moksha).'
  },
  {
    name: 'Padmapada',
    slug: 'padmapada',
    title: 'The Devoted Heart',
    transformation: "Walked on lotuses that bloomed to support his feet as he crossed a river for his Guru.",
    path: 'Bhakti-infused Jnana',
    icon: Heart,
    matha: 'Govardhan Matha, Puri',
    contribution: 'Panchapadika, a commentary on the Brahma Sutra Bhashya',
    legacy: 'Bridge of Love and Knowledge',
    image: 'https://i.pinimg.com/1200x/a1/73/be/a173be2e120322ad8556a9418087db0e.jpg',
    aiHint: 'devotee river lotus',
    biography: "Known as Sanandana in his early life, Padmapada's defining moment came when he heard Shankara's call from across a river. Without hesitation, he began to walk across the water, and lotuses (padma) miraculously appeared at each step (pada) to support him. This act of pure faith and devotion earned him his name. He represents the path where intense love for the Guru becomes the vehicle for the highest knowledge.",
    keyWorks: [
      'Panchapadika: A brilliant and intricate commentary on the first five aphorisms (sutras) of Shankara\'s Brahma Sutra Bhashya. Much of the original work was lost to a fire set by a jealous relative, but its remaining portion is considered a cornerstone of Advaitic exegesis.',
      'Vijnana Dipika: An exposition of Advaita epistemology.',
      'Atman-atma-viveka: A treatise on the identity of Self and Spirit.',
      'Vedantasara: A concise commentary on Atma-Bodha.'
    ],
    teachings: 'Padmapada exemplifies that unwavering faith (Shraddha) and devotion (Bhakti) are not obstacles to knowledge, but powerful catalysts for it. He developed the theory of pratibimbavāda (reflection), teaching that the individual soul is a reflection of Brahman.'
  },
  {
    name: 'Totakacharya',
    slug: 'totakacharya',
    title: 'The Poetic Soul',
    transformation: "A quiet disciple who spontaneously burst forth with the 'Totakashtakam,' a hymn in perfect meter.",
    path: 'Devotion & Spontaneous Realization',
    icon: Feather,
    matha: 'Jyotir Matha, Badrinath',
    contribution: 'Composed the celebrated hymn "Totakashtakam" in praise of the Guru.',
    legacy: 'Voice of Enlightened Rhythm',
    image: 'https://i.pinimg.com/1200x/a1/73/be/a173be2e120322ad8556a9418087db0e.jpg',
    aiHint: 'poet meditating himalayas',
    biography: "Known as Giri, Totakacharya was a quiet and seemingly unassuming disciple, dedicated to serving Shankara with utmost humility. The other disciples often underestimated him. One day, when Shankara refused to start his lesson until Giri arrived, Giri came running and, to everyone's astonishment, burst forth into a beautiful, metrically perfect eight-verse hymn in praise of his Guru—the 'Totakashtakam.' This event demonstrated that true understanding isn't mere intellectualism but a grace that can dawn in a purified heart.",
    keyWorks: [
      'Totakashtakam: An eight-verse hymn in the rare Totaka meter, celebrated for its poetic beauty and profound expression of devotion and the nature of the Guru.',
      'Srutisara Samuddharana: A concise treatise on Upanishadic wisdom, also composed in the Totaka meter.'
    ],
    teachings: 'His life is a testament to the power of selfless service (Seva) and humility. It shows that enlightenment is a state of grace that can dawn through pure devotion, not just intellectual achievement.'
  },
  {
    name: 'Hastamalaka',
    slug: 'hastamalaka',
    title: 'The Silent Sage',
    transformation: "A silent boy who, questioned by Shankara, articulated the highest Advaitic truth in twelve verses.",
    path: 'Direct Realization (Sahaja Jnana)',
    icon: Coffee,
    matha: 'Dwaraka Sharada Peetham',
    contribution: 'The "Hastamalakiyam," a concise 12-verse summary of Advaita.',
    legacy: 'Child Prodigy of Self-Knowledge',
    image: 'https://i.pinimg.com/1200x/a1/73/be/a173be2e120322ad8556a9418087db0e.jpg',
    aiHint: 'young sage india',
    biography: "Hastamalaka's parents brought him to Shankara, concerned because their son was completely silent and unresponsive to the world. Shankara, recognizing the boy's state, asked him, 'Who are you?' The boy broke his lifelong silence and responded with twelve profound verses, articulating the nature of the Self with stunning clarity. He described the Self as clearly as an amla fruit held in one's palm (Hasta-amalaka). He was already a realized soul who simply had no interest in the phenomenal world.",
    keyWorks: [
      'Hastamalakiya Stotram: A concise and powerful 12-verse text that directly states the nature of the Atman as pure, non-dual consciousness. Shankara himself was so impressed that he wrote a commentary on it.',
      'Vedanta Siddhanta Dipika: A brief commentary traditionally attributed to him.'
    ],
    teachings: 'Hastamalaka represents Sahaja Sthiti, the natural state of Self-abidance. He shows that for some, realization is not a process but an ever-present reality, veiled only by the world\'s distractions.'
  },
];
