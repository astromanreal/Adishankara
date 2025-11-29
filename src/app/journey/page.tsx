
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { JourneyEvent } from '@/types';
import { MapPin, Milestone, Star, Book, Award, User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'The Divine Odyssey of Adi Shankaracharya',
  description: 'Trace the awe-inspiring journey of a young monk who set out not to conquer lands, but to unify the philosophical soul of Sanatana Dharma. Follow his timeline from birth in Kalady to his Mahasamadhi in the Himalayas.',
};

const journeyEvents: JourneyEvent[] = [
  {
    year: 'Prologue',
    title: 'The Mission of a Jagadguru',
    description: 'Adi Shankaracharya (788–820 CE), one of the greatest thinkers in Indian history, revitalized Sanatana Dharma in a time of spiritual disarray. Through his unparalleled intellect, travels, and spiritual authority, he unified Bharat on the firm foundation of Advaita Vedanta. His life was not just a journey — it was a divine mission to revive the essence of the Upanishads.',
    location: 'Ancient India',
  },
  {
    year: '788 CE',
    title: 'Birth and Divine Signs',
    description: 'In the serene village of Kalady, on the banks of the Periyar River, Aryamba gave birth to a child destined to reshape India\'s spiritual landscape. Legends speak of divine omens at his birth, foretelling the arrival of a Jagadguru. From a young age, Shankara showed immense grasp over scriptures, stunning elders with his questions and clarity.',
    location: 'Kalady, Kerala',
  },
  {
    year: 'c. 796 CE',
    title: 'Sannyasa and Guru Govinda Bhagavatpada',
    description: 'Even as a child, Shankara longed for spiritual freedom. After convincing his mother, he took Sannyasa at just 8 years old. He journeyed north, reaching the sacred Narmada River, where he met Govinda Bhagavatpada in a cave. The meeting of guru and disciple symbolized the unbroken chain of Vedic wisdom.',
    location: 'Narmada River',
  },
  {
    year: 'c. 800-810 CE',
    title: 'Shastra Mastery & Foundational Commentaries',
    description: 'Between the ages of 12 to 22, Shankara composed commentaries on the Prasthana Trayi – the Upanishads, the Brahma Sutras, and the Bhagavad Gita. These works, known as Bhashyas, clarified complex metaphysical truths and presented Advaita Vedanta as a unified philosophical vision. Scholars across Bharat were astounded by their brilliance and logic.',
    location: 'Varanasi & Badrikashrama',
  },
  {
    year: 'c. 810 CE onwards',
    title: 'Digvijaya Yatra: The Spiritual Conquest of India',
    description: 'Shankara began his Digvijaya Yatra — a spiritual conquest to establish truth through debate, compassion, and clarity. From Kanchi to Kashmir, from Ujjain to Puri, he debated Buddhist logicians, Mimamsakas, and dualist philosophers. But he never sought to destroy — only to harmonize. His humility and wisdom won hearts as much as minds.',
    location: 'Across India',
  },
  {
    year: 'c. 815 CE',
    title: 'Founding the Four Mathas: Guardians of Vedantic Knowledge',
    description: 'To ensure the preservation and propagation of Advaita Vedanta, Shankara founded four cardinal Mathas — Sringeri (South), Dwarka (West), Puri (East), and Jyotirmath (North). Each Matha was entrusted to one of his four key disciples — Sureshwaracharya, Hastamalaka, Padmapada, and Totakacharya — forming the foundation of the Dashanami Sampradaya.',
    location: 'Sringeri, Dwarka, Puri, Jyotirmath',
  },
  {
    year: '820 CE',
    title: 'Final Journey and Mahasamadhi',
    description: 'Having kindled the flame of dharma across the land, Adi Shankara returned to the sacred Himalayas. At Kedarnath or possibly other debated sites, he is believed to have merged into the eternal silence — attaining Mahasamadhi at just 32 years of age. His departure marked not an end but the beginning of a spiritual renaissance that echoes to this day.',
    location: 'The Himalayas',
  },
  {
    year: 'Legacy',
    title: 'Legacy & Living Presence',
    description: 'From temple rituals to philosophical discourses, from the Upanishads to modern universities — the imprint of Shankara’s thought is everywhere. His unifying vision gave India a spiritual backbone that withstood centuries of change. The Mathas continue to teach, guide, and inspire — bearing witness to the timelessness of the Jagadguru’s message.',
    location: 'Global',
  },
];


export default function JourneyPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline text-primary">The Divine Odyssey of Adi Shankaracharya</h1>
        <p className="text-xl text-muted-foreground mt-2 max-w-3xl mx-auto">
          Trace the awe-inspiring journey of a young monk who set out not to conquer lands, but to unify the philosophical soul of Sanatana Dharma.
        </p>
      </div>

      <Card className="max-w-2xl mx-auto mb-12 bg-muted/50">
        <CardHeader>
          <CardTitle className="text-2xl font-headline text-center flex items-center justify-center gap-2"><User className="text-primary"/> Key Facts</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-lg">
            <li className="flex items-center gap-4"><Star className="text-accent w-5 h-5"/> <strong>Born:</strong> c. 788 CE as Shankara</li>
            <li className="flex items-center gap-4"><Book className="text-accent w-5 h-5"/> <strong>Known for:</strong> Expounding Advaita Vedanta</li>
            <li className="flex items-center gap-4"><Award className="text-accent w-5 h-5"/> <strong>Honors:</strong> Jagadguru (World Teacher)</li>
             <li className="flex items-center gap-4"><Star className="text-accent w-5 h-5" style={{transform: 'rotate(180deg)'}}/> <strong>Died:</strong> c. 820 CE (Age 32)</li>
          </ul>
        </CardContent>
      </Card>


      <div className="relative">
        {/* The timeline line */}
        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2 hidden md:block" />

        {journeyEvents.map((event, index) => (
          <div key={event.title} className="mb-8 flex justify-between items-center w-full flex-col md:flex-row">
            {/* Left or Right alignment */}
            <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:order-1' : 'md:order-3'}`}>
              <Card className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300 border-l-4 border-primary bg-background/80">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="font-headline text-2xl">{event.title}</CardTitle>
                    <span className="font-bold text-primary">{event.year}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <div className="flex items-center text-sm text-accent-foreground/80">
                    <MapPin className="w-4 h-4 mr-2 text-accent" />
                    <span>{event.location}</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* The circle on the timeline */}
            <div className="z-10 hidden md:flex items-center justify-center w-12 h-12 bg-primary rounded-full shadow-xl md:order-2">
              <Milestone className="w-6 h-6 text-primary-foreground" />
            </div>

             {/* Spacer for the other side */}
            <div className="w-full md:w-5/12 md:order-1 hidden md:block"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
