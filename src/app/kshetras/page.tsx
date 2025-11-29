import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Landmark } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { kshetrasData } from '@/data/kshetras';

export const metadata: Metadata = {
  title: 'The Sacred Kshetras',
  description: 'Discover the sacred temples (Kshetras) revived and re-sanctified by Adi Shankaracharya, which continue to be power centers of Sanatana Dharma.',
};

export default function KshetrasPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="text-center mb-12">
        <Landmark className="w-16 h-16 mx-auto text-primary mb-4" />
        <h1 className="text-4xl font-bold font-headline">The Sacred Kshetras</h1>
        <p className="text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
          Discover the sacred temples revived and re-sanctified by Shankara, which continue to be power centers of Sanatana Dharma.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto">
        {kshetrasData.map((kshetra) => (
          <Card key={kshetra.name} className="flex flex-col md:flex-row bg-background/80 hover:shadow-primary/20 hover:border-primary/50 transition-all duration-300 group overflow-hidden">
            <div className="md:w-1/3 w-full">
              <Image
                src={kshetra.image}
                alt={kshetra.name}
                width={300}
                height={400}
                data-ai-hint={kshetra.aiHint}
                className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col flex-1 p-6">
               <Badge variant="default" className="bg-black/50 text-white backdrop-blur-sm w-fit mb-2">{kshetra.deity}</Badge>
              <CardTitle className="font-headline text-2xl text-primary">{kshetra.name}</CardTitle>
              <CardDescription className="text-base font-semibold">{kshetra.location.city}, {kshetra.location.state}</CardDescription>
              <CardContent className="p-0 pt-4 flex-grow">
                 <div className="flex flex-wrap gap-2">
                    {kshetra.legacy?.split(' | ').map(tag => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
              </CardContent>
              <CardFooter className="p-0 pt-4 mt-auto">
                  <Button asChild className="w-full md:w-auto">
                    <Link href={`/kshetras/${kshetra.slug}`}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
