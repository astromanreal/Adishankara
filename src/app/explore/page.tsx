import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import {
  AudioLines,
  BookHeart,
  BookMarked,
  BrainCircuit,
  Compass,
  HandHeart,
  Library,
  Landmark,
  Map,
  Sparkles,
  ArrowRight,
  Users,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Explore the Luminous Legacy',
  description: 'A single life. A thousand paths. One eternal truth. Explore the legacy of Shankara across knowledge, devotion, practice, and transformation.',
};


const exploreItems = [
  {
    href: '/journey',
    icon: Map,
    title: 'Life Journey',
    description: 'Trace the sacred footsteps of a wandering sage who walked the land to awaken its soul.',
    cta: 'Enter Timeline & Map',
  },
  {
    href: '/teachings',
    icon: BookHeart,
    title: 'Teachings',
    description: 'Discover the essence of non-duality through stories, quotes, and reflection.',
    cta: 'Explore Core Ideas',
  },
  {
    href: '/library',
    icon: Library,
    title: 'Scripture Library',
    description: 'Enter the world of texts, treatises, and transformative dialogues.',
    cta: 'Access Library',
  },
  {
    href: '/commentaries',
    icon: BookMarked,
    title: 'The Great Commentaries',
    description: "Explore the definitive Advaitic insights through Shankara's Bhashyas.",
    cta: 'Read Commentaries',
  },
  {
    href: '/chanting',
    icon: AudioLines,
    title: 'Mantra & Hymn Library',
    description: 'Listen and reflect with powerful Sanskrit chants and Stotras.',
    cta: 'Open Audio Section',
  },
  {
    href: '/puja',
    icon: Sparkles,
    title: 'Digital Puja',
    description: 'Perform virtual worship of the five-fold divine — Shiva, Vishnu, Devi, Surya, and Ganesha.',
    cta: 'Start Puja',
  },
  {
    href: '/mathas',
    icon: HandHeart,
    title: 'The Four Mathas',
    description: 'Learn about the monastic institutions preserving Shankara’s vision.',
    cta: 'View Map & Info',
  },
  {
    href: '/kshetras',
    icon: Landmark,
    title: 'Sacred Kshetras',
    description: 'Temples revived by Shankara, still pulsing with spiritual energy.',
    cta: 'Explore Temples',
  },
  {
    href: '/disciples',
    icon: Users,
    title: 'The Four Disciples',
    description: 'Meet the masters who embodied and carried forward the flame of Advaita.',
    cta: 'Know Their Journey',
  },
  {
    href: '/wisdom',
    icon: BrainCircuit,
    title: 'Vedantic Wisdom Tool',
    description: 'Receive insight, not answers — reflections drawn from the light of non-duality.',
    cta: 'Ask a Question',
  },
];

export default function ExplorePage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="text-center mb-12">
        <Compass className="w-16 h-16 mx-auto text-primary mb-4" />
        <h1 className="text-4xl font-bold font-headline">Explore the Luminous Legacy</h1>
        <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
          A single life. A thousand paths. One eternal truth. Explore the legacy of Shankara across knowledge, devotion, practice, and transformation.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {exploreItems.map((item) => (
          <Card
            key={item.href}
            className="flex flex-col hover:shadow-primary/20 hover:border-primary/50 transition-all duration-300 bg-background/80 group"
          >
            <CardHeader className="flex-row items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="font-headline text-xl">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{item.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full font-headline">
                <Link href={item.href}>
                  {item.cta} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
