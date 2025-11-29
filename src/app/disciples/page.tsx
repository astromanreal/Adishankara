import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { disciplesData } from '@/data/disciples';

export const metadata: Metadata = {
  title: 'The Four Great Disciples',
  description: 'Meet Sureshwaracharya, Padmapada, Totakacharya, and Hastamalaka — the four luminous minds who became pillars of the Advaita tradition.',
};

export default function DisciplesPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="text-center mb-12">
        <Users className="w-16 h-16 mx-auto text-primary mb-4" />
        <h1 className="text-4xl font-bold font-headline">The Four Great Disciples</h1>
        <p className="text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
          Meet the four luminous minds who became pillars of the Advaita tradition, each embodying a unique path to the same non-dual truth.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto">
        {disciplesData.map((disciple) => (
          <Card key={disciple.name} className="flex flex-col bg-background/80 hover:shadow-lg hover:border-primary/50 transition-all duration-300 group">
             <CardHeader className="flex flex-row items-start gap-4">
              <Image 
                src={disciple.image}
                alt={disciple.name}
                width={100}
                height={100}
                data-ai-hint={disciple.aiHint}
                className="w-24 h-24 rounded-full object-cover border-4 border-primary/20 group-hover:border-primary/50 transition-colors"
              />
              <div className="flex-1">
                <CardTitle className="font-headline text-2xl text-primary">{disciple.name}</CardTitle>
                <p className="text-base font-semibold text-muted-foreground">{disciple.title}</p>
                <p className="text-sm mt-2 italic text-accent-foreground">&ldquo;{disciple.legacy}&rdquo;</p>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow p-6 pt-0 space-y-4">
              <p className="text-muted-foreground">{disciple.transformation}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-bold text-muted-foreground">Path</p>
                  <p>{disciple.path}</p>
                </div>
                <div>
                  <p className="font-bold text-muted-foreground">Matha</p>
                  <p>{disciple.matha}</p>
                </div>
              </div>
            </CardContent>
             <CardFooter className="mt-auto">
                <Button asChild className="w-full">
                  <Link href={`/disciples/${disciple.slug}`}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
