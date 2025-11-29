import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ExternalLink, BookOpen, Landmark, University, Users, Building, History, Mountain } from 'lucide-react';
import { mathasData } from '@/data/mathas';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const matha = mathasData.find((m) => m.slug === params.slug);

  if (!matha) {
    return {
      title: 'Matha Not Found',
      description: 'The requested matha could not be found.',
    };
  }

  return {
    title: matha.name,
    description: matha.description,
  };
}

export default function MathaDetailPage({ params }: { params: { slug: string } }) {
  const matha = mathasData.find((m) => m.slug === params.slug);

  if (!matha) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-6xl">
       <Button asChild variant="ghost" className="mb-8">
        <Link href="/mathas">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to All Mathas
        </Link>
      </Button>

      <div className="space-y-12">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-2">
            <Image
                src={matha.image}
                alt={matha.name}
                width={800}
                height={1200}
                data-ai-hint={matha.aiHint}
                className="w-full h-auto max-h-[600px] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:col-span-3 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-4">{matha.name}</h1>
            <p className="text-xl text-muted-foreground font-semibold mb-6">
              {matha.location} ({matha.direction})
            </p>
            <p className="text-lg text-foreground/80 mb-8">{matha.description}</p>
            <div className="mt-auto">
              <Button asChild size="lg" className="w-full md:w-auto font-headline">
                  <Link href={matha.website} target="_blank" rel="noopener noreferrer">
                      Visit Official Website
                      <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Key Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                  <BookOpen className="w-8 h-8 text-accent" />
                  <CardTitle className="font-headline text-xl">Vedic Association</CardTitle>
              </CardHeader>
              <CardContent>
                  <p className="text-lg">This Matha is the guardian of the <strong className="text-primary">{matha.veda}</strong>.</p>
              </CardContent>
          </Card>
           <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                  <Landmark className="w-8 h-8 text-accent" />
                  <CardTitle className="font-headline text-xl">The Great Utterance (Mahāvākya)</CardTitle>
              </CardHeader>
              <CardContent>
                   <blockquote className="text-2xl font-semibold italic text-primary">
                      &ldquo;{matha.mahavakya.split('–')[0].trim()}&rdquo;
                  </blockquote>
                  <p className="text-lg text-muted-foreground mt-2">{matha.mahavakya.split('–')[1]?.trim()}</p>
              </CardContent>
          </Card>
        </div>

        {/* Details Section */}
        <div className="space-y-8">
          {matha.details.architecturalHighlights && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline"><Building className="text-primary" /> Architectural Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {matha.details.architecturalHighlights.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
              </CardContent>
            </Card>
          )}

          {matha.details.historicalNotes && (
             <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline"><History className="text-primary" /> Historical Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {matha.details.historicalNotes.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
              </CardContent>
            </Card>
          )}

          {matha.details.guruParampara && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline"><Users className="text-primary" /> Guru Parampara (Lineage)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                  {matha.details.guruParampara.map((guru) => (
                    <div key={guru.position} className="p-2 bg-muted/50 rounded-md">
                      <p className="font-bold">{guru.position}. {guru.name}</p>
                      <p className="text-xs text-muted-foreground">{guru.period}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {matha.details.sacredFeatures && (
             <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline"><Mountain className="text-primary" /> Sacred Features</CardTitle>
              </CardHeader>
              <CardContent>
                 <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {matha.details.sacredFeatures.map((item, index) => <li key={index}>{item.name}: {item.description}</li>)}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
