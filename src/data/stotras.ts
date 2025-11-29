
import type { Stotra } from '@/types';
import { nirvanaShatakam } from '@/data/stotras/nirvana-shatakam';
import { bhajaGovindam } from '@/data/stotras/bhaja-govindam';
import { kanakadharaStotram } from '@/data/stotras/kanakadhara-stotram';
import { soundaryaLahari } from '@/data/stotras/soundarya-lahari';
import { annapurnaAshtakam } from '@/data/stotras/annapurna-ashtakam';
import { krishnashtakam } from '@/data/stotras/krishnashtakam';
import { vishnuShatpadi } from '@/data/stotras/vishnu-shatpadi';
import { lakshmiNrusimhaKaravalamba } from '@/data/stotras/lakshmi-nrusimha-karavalamba';
import { ganeshaPancharatnam } from '@/data/stotras/ganesha-pancharatnam';
import { shivapanchaksharaStotram } from '@/data/stotras/shivapanchakshara-stotram';

export const stotrasData: Stotra[] = [
  {
    id: 'nirvana-shatakam-adi-shankara',
    slug: 'nirvana-shatakam',
    title: {
      sanskrit: 'निर्वाणषट्कम्',
      devanagari_alt: 'निर्वाण षट्कम् (आत्म-षट्कम्)',
      english: 'Nirvana Shatakam (Atma Shatakam)',
    },
    author: 'Adi Shankaracharya',
    description:
      'A profound summary of Advaita Vedanta in six verses, revealing the nature of the Self as pure consciousness by negating all that it is not.',
    audioSrc: '/audio/placeholder.mp3',
    purpose:
      "To assert the true nature of the Self (ātman) and negate identification with body-mind-sense-objects, leading to immediate recognition of one's pure-consciousness-bliss nature.",
    usage_notes: {
      chanting:
        'Often recited or chanted for self-remembrance (ātma-smṛti). Short, emphatic lines make it suitable for daily recitation or meditation.',
      intention:
        "Use as a reflective practice — read slowly, reflect on each negation (neti neti — 'not this, not this'), and rest in the affirmative refrain 'चिदानन्दरूपः शिवोऽहम्' (I am Consciousness-Bliss; I am Shiva).",
    },
    overall_summary: {
      short:
        'Nirvāṇa Ṣaṭkam is a concise six-verse hymn that teaches non-dual self-recognition by denying all transient, instrumental and relative identities and affirming the Self as chitananda (consciousness-bliss).',
      detailed:
        "Through successive negations (neti-neti) of mental faculties, senses, elemental constituents, life-forces, emotional states, social identities, ritual merits and demerits, and even the categories of pursuit (dharma, artha, kāma, mokṣa), the hymn removes all false identifications. The repeated affirmative refrain 'चिदानन्दरूपः शिवोऽहम्' anchors the seeker in the realization that the true Self is ever-present, already free, formless and blissful. It functions as a doxology and a pratice tool for immediate self-recognition in Advaita Vedānta.",
    },
    verses: nirvanaShatakam,
  },
  {
    id: 'bhaja-govindam-adi-shankaracharya',
    slug: 'bhaja-govindam',
    title: {
      sanskrit: 'भज गोविन्दम्',
      english: 'Bhaja Govindam',
    },
    author: 'Adi Shankaracharya',
    deity: 'Govinda (Vishnu)',
    description: 'A powerful teaching urging seekers to turn their focus away from material pursuits toward devotion to Govinda (the Supreme Reality).',
    audioSrc: '/audio/placeholder.mp3-govindam',
    purpose: "A powerful teaching urging seekers to turn their focus away from material pursuits toward devotion to Govinda (the Supreme Reality).",
    background: {
      context: "The hymn was composed when Adi Shankaracharya saw an elderly scholar memorizing grammar rules at life's end. Shankara compassionately advised that learning alone without devotion cannot grant liberation.",
      core_message: "Intellectual pride, material achievements, wealth, lust, power — all perish. Only surrender to Govinda leads to liberation."
    },
    refrain: {
      sanskrit: "भज गोविन्दं भज गोविन्दं गोविन्दं भज मूढमते ।",
      meaning_english: "Worship Govinda, worship Govinda, worship Govinda — O foolish mind!",
    },
    usage_notes: {
      chanting: "Can be recited daily; most chant the refrain after each verse.",
      intention: "Traditionally used for self-reflection and detachment training.",
    },
    overall_summary: {
      short: "Bhaja Govindam warns against the trap of materialism and exhorts the seeker toward devotion and liberation.",
      detailed: "Through everyday examples — wealth, sex, youth, family, pride, status — Bhaja Govindam exposes impermanence. The verses consistently redirect the mind from temporary objects to Govinda, the eternal Self. No verse condemns worldly life; it condemns *forgetfulness of truth*. It is both devotional and philosophical — poetry and medicine."
    },
    verses: bhajaGovindam,
  },
  {
    id: 'kanakadhara-stotram-adi-shankara',
    slug: 'kanakadhara-stotram',
    title: {
      sanskrit: 'कनकधारा स्तोत्रम्',
      english: 'Kanakadhara Stotram',
      meaning: 'Hymn of the Golden Stream'
    },
    author: 'Adi Shankaracharya',
    deity: 'Goddess Mahalakshmi',
    description: 'A hymn to Goddess Lakshmi to shower wealth, composed by Adi Shankaracharya.',
    audioSrc: '/audio/placeholder.mp3',
    purpose: 'To invoke the compassionate shower of wealth, fortune, and abundance from Goddess Lakshmi.',
    origin_story: {
        summary: "Shankaracharya recited this hymn for a poor Brahmin lady who had only one dry amla fruit to offer him. Pleased by her generosity despite poverty, Goddess Lakshmi showered golden prosperity (Kanakadhara) upon her.",
        devotional_message: "True wealth comes from purity of heart, compassion, and surrender—not greed."
    },
    usage_notes: {
        intention: 'For grace, wealth, dissolving hardships, and blessings for home & family.'
    },
    overall_summary: {
        short: 'A powerful hymn to invoke the grace of Goddess Lakshmi for prosperity and well-being.',
        detailed: 'The Kanakadhara Stotram is a testament to the power of compassion and sincere devotion. When Shankara, as a young boy, encountered extreme poverty, he did not ask for wealth for himself, but for the selfless woman who gave him her last possession. In response to his heartfelt plea, Goddess Lakshmi showered golden amlas. The hymn is not just a prayer for material wealth, but an invocation of divine grace that removes all forms of poverty—spiritual, mental, and material.'
    },
    verses: kanakadharaStotram,
  },
  {
    id: 'soundarya-lahari-adi-shankara',
    slug: 'soundarya-lahari',
    title: {
      sanskrit: 'सौन्दर्य लहरी',
      english: 'Soundarya Lahari',
      meaning: 'Waves of Beauty'
    },
    author: 'Adi Shankaracharya',
    deity: 'Tripura Sundari (Lalita Devi)',
    description: 'A hymn of 100 verses praising the beauty, power, and grace of Goddess Tripura Sundari / Lalita Devi composed by Adi Shankaracharya.',
    audioSrc: '/audio/placeholder.mp3',
    purpose: 'To praise the Divine Mother and attain both material and spiritual blessings through devotion.',
    usage_notes: {
      intention: 'Each verse is considered a mantra with specific benefits, ranging from attracting prosperity to gaining wisdom and liberation.'
    },
    overall_summary: {
      short: 'A devotional and tantric text celebrating the Divine Mother as the supreme power of the universe.',
      detailed: 'Soundarya Lahari is divided into two parts. The first part, "Ananda Lahari" (Waves of Bliss), deals with the mystical union of Shiva and Shakti and the esoteric worship of the Sri Yantra. The second part focuses on the breathtaking beauty of the Goddess from head to toe. It is a masterpiece of poetry, devotion, and tantric knowledge.'
    },
    verses: soundaryaLahari,
  },
  {
    id: 'annapurna-ashtakam',
    slug: 'annapurna-ashtakam',
    title: {
      sanskrit: 'अन्नपूर्णा अष्टकम्',
      english: 'Annapurna Ashtakam',
    },
    author: 'Adi Shankaracharya',
    deity: 'Goddess Annapurna',
    description: 'A devotional hymn dedicated to Goddess Annapurna — the giver of nourishment, food, prosperity, compassion, and spiritual fulfillment.',
    audioSrc: '/audio/placeholder.mp3',
    purpose: 'To seek the grace of Mother Annapurna for physical nourishment, mental peace, and spiritual completeness.',
    usage_notes: {
      intention: 'Chanted before meals or during prayers to invoke blessings for sustenance and spiritual wisdom.'
    },
    overall_summary: {
      short: 'A heartfelt prayer to Annapurna, the Goddess of Nourishment, for both worldly and spiritual fulfillment.',
      detailed: 'This eight-verse hymn venerates Goddess Annapurna, an incarnation of Parvati, as the supreme provider. Shankara asks not just for food, but for the "alms" of knowledge and renunciation, highlighting that true sustenance is spiritual. The refrain "भिक्षां देहि च पार्वति" (Grant me alms, O Parvati) is a humble plea for both material well-being and ultimate liberation.'
    },
    verses: annapurnaAshtakam,
  },
  {
    id: 'krishnashtakam',
    slug: 'krishnashtakam',
    title: {
        sanskrit: 'कृष्णाष्टकम्',
        english: 'Krishnashtakam',
    },
    author: 'Adi Shankaracharya',
    deity: 'Lord Krishna',
    description: 'An eight-verse hymn praising the glorious and playful aspects of Lord Krishna.',
    audioSrc: '/audio/placeholder.mp3',
    purpose: 'To cultivate devotion and love for Lord Krishna, the supreme Guru.',
    usage_notes: {
        intention: 'Chanted to feel closeness to Krishna and celebrate his divine play (lila).',
    },
    overall_summary: {
      short: 'A hymn celebrating the divine attributes and lilas of Lord Krishna.',
      detailed: 'This ashtakam is a beautiful expression of devotion to Krishna, seeing him not just as an avatar but as the Jagadguru—the world teacher. Each verse highlights a different quality, from his enchanting form to his role as the ultimate reality.'
    },
    verses: krishnashtakam,
  },
   {
    id: 'vishnu-shatpadi',
    slug: 'vishnu-shatpadi',
    title: {
        sanskrit: 'विष्णु षट्पदी',
        english: 'Vishnu Shatpadi',
    },
    author: 'Adi Shankaracharya',
    deity: 'Lord Vishnu',
    description: 'A six-verse prayer to Lord Vishnu seeking forgiveness for transgressions and liberation from worldly suffering.',
    audioSrc: '/audio/placeholder.mp3',
    purpose: 'To surrender to Lord Vishnu and ask for pardon for sins committed knowingly or unknowingly.',
     usage_notes: {
        intention: 'A prayer for forgiveness and purification.',
    },
    overall_summary: {
      short: 'A heartfelt plea to Vishnu for forgiveness and refuge.',
      detailed: 'In these six verses, Shankara takes on the voice of a humble devotee, acknowledging human fallibility and seeking refuge at the feet of the all-merciful Lord Vishnu. It is a powerful prayer for anyone seeking to purify their heart and find peace.'
    },
    verses: vishnuShatpadi,
  },
  {
    id: 'lakshmi-nrusimha-karavalamba',
    slug: 'lakshmi-nrusimha-karavalamba',
    title: {
        sanskrit: 'लक्ष्मीनृसिंह करावलम्ब स्तोत्रम्',
        english: 'Lakshmi Nrusimha Karavalamba Stotram',
    },
    author: 'Adi Shankaracharya',
    deity: 'Lord Narasimha',
    description: 'A prayer seeking the helping hand ("Karavalamba") of Lord Narasimha, the fierce and compassionate man-lion avatar of Vishnu.',
    audioSrc: '/audio/placeholder.mp3',
    purpose: 'To seek protection from dangers, diseases, and worldly troubles by asking for the supportive hand of Lord Narasimha.',
    usage_notes: {
        intention: 'Chanted for courage, protection, and removal of obstacles.',
    },
     overall_summary: {
      short: 'A powerful hymn seeking the protection and support of Lord Narasimha.',
      detailed: 'This stotram is a cry for help to Lord Narasimha, who is known for his fierce protection of devotees. Each verse ends with the refrain "Lakshmi Nrusimha, Mama Dehi Karavalambam," which means "O Lakshmi Narasimha, please lend me Your helping hand." It is a prayer for strength and support in times of distress.'
    },
    verses: lakshmiNrusimhaKaravalamba,
  },
  {
    id: 'ganesha-pancharatnam',
    slug: 'ganesha-pancharatnam',
    title: {
      sanskrit: 'गणेश पञ्चरत्नम्',
      english: 'Ganesha Pancharatnam',
    },
    author: 'Adi Shankaracharya',
    deity: 'Lord Ganesha',
    description: 'Devotional praise to Lord Ganesha, the remover of obstacles and giver of wisdom and success.',
    audioSrc: '/audio/placeholder.mp3',
    purpose: 'Devotional praise to Lord Ganesha, the remover of obstacles and giver of wisdom and success.',
    usage_notes: {
      intention: 'Chanted for removing obstacles and starting new ventures.',
    },
    overall_summary: {
      short: 'A five-verse hymn to Lord Ganesha.',
      detailed: 'A five-verse hymn (pancharatnam) praising Lord Ganesha, who removes all obstacles. Each verse highlights His divine attributes, and the hymn is often chanted before beginning any new endeavor to ensure its success.'
    },
    verses: ganeshaPancharatnam,
  },
  {
    id: 'shivapanchakshara-stotram',
    slug: 'shivapanchakshara-stotram',
    title: {
      sanskrit: 'शिवपञ्चाक्षर स्तोत्रम्',
      english: 'Shivapanchakshara Stotram',
    },
    author: 'Adi Shankaracharya',
    deity: 'Lord Shiva',
    description: 'A sacred hymn extolling the five-syllable mantra Na-Ma-Shi-Va-Ya, glorifying different attributes of Lord Shiva.',
    audioSrc: '/audio/placeholder.mp3',
    purpose: 'To invoke Shiva through the five syllables, destroy sins, purify the mind and grant liberation.',
    usage_notes: {
      intention: 'Chanted to meditate on the profound meaning of the "Om Namah Shivaya" mantra and feel closeness to Lord Shiva.'
    },
    overall_summary: {
      short: 'A hymn where each verse begins with a syllable from the "Na-Ma-Shi-Va-Ya" mantra, revealing its deep meaning.',
      detailed: 'This stotram is a masterful composition where each of the five verses corresponds to one of the five holy syllables of the Shiva Panchakshara mantra: Na, Ma, Shi, Va, and Ya. By meditating on each verse, the devotee explores the multifaceted nature of Lord Shiva, from the cosmic ascetic to the benevolent protector, ultimately leading to purification and liberation.'
    },
    verses: shivapanchaksharaStotram,
  }
];
