
import type { Commentary } from '@/types';

export const commentariesData: Commentary[] = [
  {
    slug: 'brahma-sutra-bhashya',
    title: 'Brahma Sutra Bhashya',
    subtitle: 'The Architectural Core of Advaita Vedanta',
    description: "Shankara's magnum opus, this commentary on Badarayana's Brahma Sutras is the definitive statement of Advaita Vedanta. It systematically refutes rival schools of thought and establishes non-duality through rigorous logic and scriptural evidence.",
    keyThought: "The ultimate reality is Brahman, and the universe is but a superimposition upon it, like a snake on a rope.",
    tags: ['Bhashya', 'Metaphysics'],
    references: {
      wikipedia: 'https://en.wikipedia.org/wiki/Brahma_Sutras_Bhasya',
    },
    excerpts: [
        {
            title: "On Superimposition (Adhyasa)",
            quote: "It is a matter of everyday experience that there is a mutual superimposition of the Self and the not-Self... Nevertheless, there is this natural, beginningless, and endless mutual superimposition, which is of the nature of wrong identification, which is the cause of the individual soul's appearing as an agent and an enjoyer, and which is observed by all.",
            sanskrit: "अविद्योपादानं सर्वं व्यावहारिकं।",
            translation: "Everything transactional (vyavaharika) is rooted in ignorance (avidya).",
            note: "Central Advaitic metaphysical stance."
        },
        {
            title: "On the Nature of Inquiry",
            quote: "Therefore the inquiry into Brahman is to be undertaken. Brahman is that whose nature is eternal purity, consciousness, and freedom; which is omniscient and omnipotent.",
            sanskrit: "ब्रह्म सूत्राणि सर्ववेदान्तसम्मतार्थनिश्चयाय रच्यानि।",
            translation: "The Brahma Sutras are composed to ascertain the meaning that is agreed upon in all the Upanishads.",
            note: "Establishing the unity of scriptural vision."
        }
    ]
  },
  {
    slug: 'principal-upanishads-bhashya',
    title: 'Principal Upanishads Bhashya',
    subtitle: 'Ten Keys to Realization',
    description: "Shankara wrote commentaries on the ten most important Upanishads (Isha, Kena, Katha, Prashna, Mundaka, Mandukya, Taittiriya, Aitareya, Chandogya, and Brihadaranyaka). These works reveal the non-dual truth hidden within the dialogues of the ancient seers.",
    keyThought: "The individual Self (Atman) is identical to the ultimate reality (Brahman).",
    tags: ['Bhashya', 'Upanishads', 'Self-Inquiry'],
    references: {
      wikipedia: 'https://en.wikipedia.org/wiki/Adi_Shankara#Commentaries',
    },
    excerpts: [
        {
            title: "From Katha Upanishad Bhashya",
            quote: "The Self, smaller than the small, greater than the great, is hidden in the heart of that creature. A man who is free from desires and free from grief sees the majesty of the Self by the grace of the creator.",
            sanskrit: "तत् त्वम् असि (Tat Tvam Asi)",
            translation: "That Thou Art. The essential teaching of non-duality found in the Chandogya Upanishad.",
            note: "Reveals the identity of individual self and supreme Self."
        },
        {
            title: "From Brihadaranyaka Upanishad Bhashya",
            quote: "You cannot see the seer of seeing, you cannot hear the hearer of hearing, you cannot think the thinker of thinking, you cannot know the knower of knowing. This is your Self that is within all; everything else is fraught with sorrow.",
            sanskrit: "अयं आत्मा ब्रह्म (Ayam Ātmā Brahma)",
            translation: "This Self is Brahman. From Mandukya Upanishad, the foundation of direct realization.",
            note: "Removes the distinction between knower and known."
        }
    ]
  },
  {
    slug: 'bhagavad-gita-bhashya',
    title: 'Bhagavad Gita Bhashya',
    subtitle: 'Vedanta in the Battlefield of Life',
    description: "In his commentary on the Gita, Shankara interprets the text through the lens of Advaita. He argues that the path of knowledge (Jnana Yoga) is the direct means to liberation, with Karma Yoga serving as a preparatory step for purifying the mind.",
    keyThought: "Action performed without attachment purifies the mind, making it fit for the dawn of Self-knowledge.",
    tags: ['Bhashya', 'Gita', 'Dharma'],
    references: {
        wikipedia: 'https://en.wikipedia.org/wiki/Gita_Bhashya',
    },
    excerpts: [
        {
            title: "On Action and Inaction (Gita 4.18)",
            quote: "He who sees inaction in action, and action in inaction, he is wise among men, he is a Yogi, and a performer of all actions. Action, which is commonly associated with the body, speech and mind, is in reality inaction from the point of view of the Self.",
            sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।",
            translation: "You have the right to action alone, never to its fruits.",
            note: "Detachment in action as a gateway to purification."
        },
        {
            title: "On True Renunciation (Gita 5.3)",
            quote: "He is to be known as a permanent Sannyasin (renouncer) who neither hates nor desires; for, free from the pairs of opposites, O mighty-armed, he is easily set free from bondage.",
            sanskrit: "ज्ञानं निहित्य सर्वकर्माणि मोक्षमावाप्स्यसि।",
            translation: "By renouncing all actions through knowledge, one attains liberation.",
            note: "Final culmination in self-realization, not action."
        }
    ]
  },
  {
    slug: 'vivekachudamani',
    title: 'Vivekachudamani',
    subtitle: 'The Crest-Jewel of Discrimination',
    description: 'A foundational work in Advaita Vedanta, Vivekachudamani presents the path to liberation through discernment (viveka) between the real and the unreal. It is composed in verse form and guides seekers toward Self-realization through renunciation, ethics, and inquiry.',
    keyThought: 'Without an intense, burning desire for liberation, all other spiritual practices are fruitless.',
    tags: ['Prakarana Grantha', 'Self-Inquiry'],
    excerpts: [
      {
        title: 'The Essence of Advaita',
        quote: 'Brahman is the only truth, the world is illusory, the individual self is none other than Brahman.',
        sanskrit: 'ब्रह्म सत्यम् जगन्मिथ्या जीवो ब्रह्मैव नापरः',
        translation: 'Brahman is the only truth, the world is illusory, the individual self is none other than Brahman.',
        note: 'Core essence of Advaita stated plainly.',
      },
      {
        title: 'The Need for Desire',
        quote: 'Without intense desire for liberation, no other practice yields fruit.',
        sanskrit: 'मुमुक्षुत्वं विनाऽन्यत् फलम् न सिध्यति',
        translation: 'Without intense desire for liberation, no other practice yields fruit.',
        note: 'Emphasis on inner longing for moksha.',
      },
    ],
  },
  {
    slug: 'aparokshanubhuti',
    title: 'Aparokshanubhuti',
    subtitle: 'Direct Experience of the Self',
    description: 'This short treatise lays out a practical framework for attaining the direct, immediate realization of the Self — without reliance on external rituals. It emphasizes self-awareness, negation (neti-neti), and non-duality.',
    keyThought: 'The Self is ever self-revealing and of the nature of pure knowledge.',
    tags: ['Prakarana Grantha', 'Practice'],
    excerpts: [
      {
        title: 'The Self-Luminous Atman',
        quote: 'The Self is ever self-revealing and of the nature of pure knowledge.',
        sanskrit: 'स्वयं प्रकाशते नित्यमात्मा ज्ञानस्वरूपकः।',
        translation: 'The Self is ever self-revealing and of the nature of pure knowledge.',
        note: 'Points toward the inner, ever-present light of awareness.',
      },
    ],
  },
  {
    slug: 'upadesasahasri',
    title: 'Upadesasahasri',
    subtitle: 'A Thousand Teachings',
    description: "One of the few prose works directly attributed to Shankara, this is a guide for students on the path of Advaita. It covers the role of the guru, nature of consciousness, and how to meditate on the identity of Ātman and Brahman.",
    keyThought: 'Nothing needs to be done — the Self reveals all.',
    tags: ['Prakarana Grantha', 'Guru'],
    excerpts: [
      {
        title: 'The Nature of Realization',
        quote: 'Nothing needs to be done — the Self reveals all.',
        sanskrit: 'नात्र कर्तव्यता किंचिदात्मा सर्वं प्रकाशते।',
        translation: 'Nothing needs to be done — the Self reveals all.',
        note: 'Emphasizes non-doership in Self-realization.',
      },
    ],
  },
  {
    slug: 'manasollasa',
    title: 'Manasollasa',
    subtitle: 'Illumination of the Mind',
    description: 'A commentary on the Dakshinamurthy Stotram, Manasollasa elaborates on the profound silence of the guru as the ultimate teaching. It explores subtle aspects of Advaita through poetic symbolism.',
    keyThought: 'Silence is the highest teaching.',
    tags: ['Stotram', 'Guru'],
    excerpts: [
      {
        title: 'The Silent Teaching',
        quote: 'Silence is the highest teaching.',
        sanskrit: 'मौनं व्याख्यानं',
        translation: 'Silence is the highest teaching.',
        note: 'Celebrates silence as the direct medium of Truth.',
      },
    ],
  },
  {
    slug: 'tattvabodha',
    title: 'Tattvabodha',
    subtitle: 'Knowledge of Reality',
    description: 'A foundational introductory text for students of Vedanta, Tattvabodha clearly defines key concepts like the three bodies, five sheaths, and the qualifications needed for Self-knowledge. Though authorship is debated, it is often included in the Shankara corpus.',
    keyThought: 'The Self is of the nature of existence, consciousness, and bliss.',
    tags: ['Prakarana Grantha', 'Introductory'],
    excerpts: [
      {
        title: 'Nature of the Self',
        quote: 'The Self is of the nature of existence, consciousness, and bliss.',
        sanskrit: 'आत्मा सच्चिदानन्दस्वरूपः',
        translation: 'The Self is of the nature of existence, consciousness, and bliss.',
        note: 'Establishes the core nature of Self.',
      },
    ],
  },
  {
    slug: 'laghu-vakya-vritti',
    title: 'Laghu Vakya Vritti',
    subtitle: 'Explanation of the Great Sayings',
    description: "A short but powerful work explaining the Mahāvākyas like 'Tat Tvam Asi' and 'Aham Brahmāsmi'. It simplifies core Vedantic insights into digestible explanations for reflection and inquiry.",
    keyThought: "'Tat Tvam Asi' means the Self is Brahman.",
    tags: ['Prakarana Grantha', 'Introductory'],
    excerpts: [
      {
        title: 'Explaining the Mahavakya',
        quote: "'Tat Tvam Asi' means the Self is Brahman.",
        sanskrit: 'तत्त्वमसि — आत्मा ब्रह्मैव',
        translation: "'Tat Tvam Asi' means the Self is Brahman.",
        note: 'Unifying the seen and the seer.',
      },
    ],
  },
];
