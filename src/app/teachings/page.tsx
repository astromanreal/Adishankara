
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { BookOpen, Layers, GitBranch, Eye, CheckSquare, Gem } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Core Teachings of Advaita Vedanta',
  description: 'Unveiling the non-dual truth of Brahman, Ātman, Māyā, and Moksha. Explore the Mahāvākyas and core concepts of Adi Shankaracharya\'s philosophy.',
};

const coreConcepts = [
  {
    icon: Gem,
    title: 'Brahman: The Absolute Reality',
    description: 'Brahman is the ultimate, unchanging reality that underlies all of existence. It is infinite, eternal, and of the nature of pure Being-Consciousness-Bliss (Sat-Chit-Ananda). It is attributeless (Nirguna) and the sole truth.',
    keyConcept: '“Brahman is the only reality, the world is an illusion, and the individual self is nothing but Brahman.” — Adi Shankaracharya'
  },
  {
    icon: Gem,
    title: 'Ātman: The True Self',
    description: 'The Ātman is the individual Self, the pure consciousness that witnesses the body, mind, and world. Advaita\'s core revelation is that the Ātman is not a part of Brahman, but is identical to Brahman itself. Realizing this identity is liberation.',
    keyConcept: '“You are not the body. You are not the mind. You are the infinite Self, beyond all duality. Know this, and be free.” — Adi Shankaracharya'
  },
  {
    icon: Gem,
    title: 'Māyā: The Power of Illusion',
    description: 'Māyā is the cosmic power that makes the one, indivisible Brahman appear as a world of many names and forms. It is the principle of superimposition (Adhyāsa) that veils reality and projects the unreal, like mistaking a rope for a snake in the dark.',
    keyConcept: '“The world is like a dream, real as long as it lasts, but unreal upon waking.”'
  },
  {
    icon: Gem,
    title: 'Mokṣa: Liberation Through Knowledge',
    description: 'Liberation (Mokṣa) is not an event in time or a place to go after death. It is the immediate and direct recognition of one\'s true nature as the ever-free Ātman. It is attained through Self-Knowledge (Ātma-Jñāna), which destroys the root ignorance (Avidyā).',
    keyConcept: '“Liberation is not a new state to be acquired, but the realization of what one has always been.”'
  }
];

const mahavakyas = [
  {
    sanskrit: 'प्रज्ञानं ब्रह्म (Prajñānam Brahma)',
    translation: 'Consciousness is Brahman',
    source: 'Aitareya Upanishad, Rigveda',
    description: 'This defines Brahman. It reveals that the ultimate reality is not an object or a person, but the very consciousness that illuminates all experience. Brahman is the subject, not an object of knowledge.'
  },
  {
    sanskrit: 'अहं ब्रह्मास्मि (Aham Brahmāsmi)',
    translation: 'I am Brahman',
    source: 'Brihadaranyaka Upanishad, Yajurveda',
    description: 'This is the Mahāvākya for self-contemplation (Anusandhāna). It is the direct affirmation of one\'s own identity with the absolute reality, striking at the root of the ego\'s sense of limitation and separation.'
  },
  {
    sanskrit: 'तत् त्वम् असि (Tat Tvam Asi)',
    translation: 'That Thou Art',
    source: 'Chandogya Upanishad, Samaveda',
    description: 'This is the Mahāvākya of instruction (Upadeśa), where the Guru tells the disciple that their true essence ("Thou") is identical with the ultimate reality ("That"). It points to the non-difference between the individual and the absolute.'
  },
  {
    sanskrit: 'अयम् आत्मा ब्रह्म (Ayam Ātmā Brahma)',
    translation: 'This Self is Brahman',
    source: 'Mandukya Upanishad, Atharvaveda',
    description: 'This is the Mahāvākya of direct experience (Anubhava). It is the experiential recognition that the innermost Self (Ātman) right here, right now, is Brahman. It equates the subject of "I am" with the absolute ground of "is".'
  }
];

const otherConcepts = [
    {
    icon: Eye,
    title: 'The Three States of Consciousness (Avasthā Traya)',
    description: 'Advaita analyzes the three states of experience—Waking (Jagrat), Dreaming (Svapna), and Deep Sleep (Sushupti)—to reveal the Self (Ātman) as the Fourth (Turiya), the silent, unchanging consciousness that witnesses all three. By understanding what is common to all states, one discovers the true, ever-present Self.',
    keyConcept: 'The witness of waking, dream, and deep sleep is your true Self.'
  },
  {
    icon: Layers,
    title: 'The Five Sheaths (Pañca-kośa)',
    description: 'The Self is veiled by five layers or "sheaths": the physical body (Annamaya), vital energy (Prāṇamaya), mind (Manomaya), intellect (Vijñānamaya), and bliss (Ānandamaya). The practice of self-inquiry involves methodically negating identification with each sheath to uncover the Ātman, which lies beyond all of them.',
    keyConcept: 'You are not the sheaths; you are the awareness that illumines the sheaths.'
  },
   {
    icon: GitBranch,
    title: 'The Three Orders of Reality (Sattā Traya)',
    description: 'To clarify its stance, Advaita defines three levels of reality: 1) Pāramārthika Satya (Absolute Reality): Brahman alone. 2) Vyāvahārika Satya (Transactional Reality): The world of everyday experience, which is real for all practical purposes until liberation. 3) Prātibhāsika Satya (Apparent Reality): Illusions like dreams or mistaking a rope for a snake. The world is "unreal" only from the absolute standpoint of Brahman.',
    keyConcept: 'The world is not non-existent; it is provisionally real but ultimately not the absolute truth.'
  },
   {
    icon: CheckSquare,
    title: 'The Four-Fold Qualification (Sādhana Catuṣṭaya)',
    description: 'Shankara outlines four essential qualifications for a seeker to successfully walk the path of knowledge: 1) Viveka (Discrimination between the real and unreal). 2) Vairāgya (Dispassion for worldly and otherworldly enjoyments). 3) Śamādiṣaṭsampatti (The six virtues: tranquility, sense control, etc.). 4) Mumukṣutva (An intense, burning desire for liberation).',
    keyConcept: 'A prepared mind is the fertile ground in which the seed of knowledge can sprout.'
  }
];


export default function TeachingsPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline text-primary">The Heart of Advaita Vedanta</h1>
        <p className="text-xl text-muted-foreground mt-2 max-w-3xl mx-auto">
          Unveiling the non-dual truth—that the individual Self (Ātman) and the ultimate reality (Brahman) are one and the same.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-headline font-bold mb-8 text-center flex items-center justify-center gap-3"><BookOpen className="w-8 h-8"/> The Great Utterances (Mahāvākyas)</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {mahavakyas.map((vakya) => (
            <Card key={vakya.sanskrit} className="text-center bg-background/80 hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <CardTitle className="font-['Tiro_Devanagari_Sanskrit'] text-3xl text-primary">{vakya.sanskrit}</CardTitle>
                <p className="text-lg font-semibold">&ldquo;{vakya.translation}&rdquo;</p>
                <p className="text-sm text-muted-foreground mt-1">{vakya.source}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                 <CardDescription className="text-base text-left">{vakya.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-headline font-bold mb-8 text-center">Core Concepts of Advaita Vedanta</h2>
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[...coreConcepts, ...otherConcepts].map((concept, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b-0">
                 <Card className="bg-muted/30">
                    <AccordionTrigger className="text-xl font-headline hover:no-underline text-left p-6">
                        <div className="flex items-center gap-4">
                          <concept.icon className="w-6 h-6 text-primary flex-shrink-0" />
                          {concept.title}
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-6 pt-0">
                      <p className="text-base text-muted-foreground mb-4">{concept.description}</p>
                      <blockquote className="text-base font-semibold text-accent-foreground border-l-2 border-accent pl-4 italic">
                        {concept.keyConcept}
                      </blockquote>
                    </AccordionContent>
                 </Card>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

       <section className="max-w-4xl mx-auto text-center border-t pt-12">
        <h2 className="text-3xl font-headline font-bold mb-4">The Goal: Direct Realization</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Advaita Vedanta is not an intellectual philosophy to be debated, but a path of direct experience. Through hearing the teaching (Śravaṇa), reflecting on it (Manana), and deeply meditating upon it (Nididhyāsana), the seeker removes the illusion of separateness and abides in the natural state of limitless peace and freedom.
        </p>
        <blockquote className="text-xl italic text-primary border-l-4 border-primary pl-4">
          “You are not a drop in the ocean. You are the entire ocean in a drop.”
          <footer className="text-base not-italic text-muted-foreground mt-2">- Rumi (reflecting a similar non-dual sentiment)</footer>
        </blockquote>
      </section>

    </div>
  );
}
