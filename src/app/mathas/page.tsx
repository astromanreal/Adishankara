import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BookOpen, Landmark, MapPin, University } from 'lucide-react';
import { mathasData } from '@/data/mathas';

export const metadata: Metadata = {
  title: 'The Four Sacred Mathas',
  description: 'Explore the four cardinal monasteries (Sringeri, Dwaraka, Puri, Jyotirmath) established by Adi Shankaracharya to safeguard Vedic wisdom for all time.',
};

export default function MathasPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="text-center mb-12">
        <University className="w-16 h-16 mx-auto text-primary mb-4" />
        <h1 className="text-4xl font-bold font-headline text-primary">The Four Sacred Mathas</h1>
        <p className="text-xl text-muted-foreground mt-2 max-w-3xl mx-auto">
          Explore the four cardinal monasteries established by Shankara to safeguard Vedic wisdom for all time.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {mathasData.map((matha) => (
          <Card key={matha.name} className="overflow-hidden bg-background/80 hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col group">
            <div className="relative overflow-hidden">
                <Image
                src={matha.image}
                alt={matha.name}
                width={600}
                height={300}
                data-ai-hint={matha.aiHint}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                 <div className="absolute top-2 right-2 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm">{matha.direction}</div>
            </div>
            <CardHeader>
                <CardTitle className="text-2xl font-headline text-primary">{matha.name}</CardTitle>
                <CardDescription className="text-base font-semibold flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" /> {matha.location}
                </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col space-y-4">
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                    <BookOpen className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                    <div>
                        <p className="font-semibold text-muted-foreground">Veda</p>
                        <p className="font-bold">{matha.veda}</p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <Landmark className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                    <div>
                        <p className="font-semibold text-muted-foreground">Mahāvākya</p>
                        <p className="font-bold italic">&ldquo;{matha.mahavakya}&rdquo;</p>
                    </div>
                </div>
              </div>
              <p className="text-muted-foreground pt-2 flex-grow">{matha.description}</p>
              <div className="pt-4">
                 <Button asChild className="w-full font-headline">
                    <Link href={`/mathas/${matha.slug}`}>Learn More</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
