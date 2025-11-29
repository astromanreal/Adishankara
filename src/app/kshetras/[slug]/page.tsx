import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowLeft,
  BookOpen,
  Building,
  History,
  Info,
  MapPin,
  Mountain,
  Youtube,
  Globe,
  Map as MapIcon,
  Sparkles,
  Award,
  Landmark,
  Plane,
  Train,
  Car,
  Calendar,
} from 'lucide-react';
import { kshetrasData } from '@/data/kshetras';
import { Badge } from '@/components/ui/badge';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const kshetra = kshetrasData.find((k) => k.slug === params.slug);

  if (!kshetra) {
    return {
      title: 'Kshetra Not Found',
      description: 'The requested sacred kshetra could not be found.',
    };
  }

  return {
    title: kshetra.name,
    description: kshetra.description,
  };
}

export function generateStaticParams() {
  return kshetrasData.map((kshetra) => ({
    slug: kshetra.slug,
  }));
}

export default function KshetraDetailPage({ params }: { params: { slug: string } }) {
  const kshetra = kshetrasData.find((d) => d.slug === params.slug);

  if (!kshetra) {
    notFound();
  }

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(kshetra.name + ", " + kshetra.location.state)}`;
  const youtubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(kshetra.name)}`;

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-6xl">
      <Button asChild variant="ghost" className="mb-8">
        <Link href="/kshetras">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to All Kshetras
        </Link>
      </Button>

      <div className="space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-2">
            <Image
              src={kshetra.image}
              alt={kshetra.name}
              width={800}
              height={1200}
              data-ai-hint={kshetra.aiHint}
              className="w-full h-auto max-h-[600px] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:col-span-3 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-2">
              {kshetra.name}
            </h1>
            <p className="text-xl text-muted-foreground font-semibold mb-6">
              <MapPin className="inline-block w-5 h-5 mr-2" />
              {kshetra.location.city}, {kshetra.location.state}
            </p>
            <p className="text-lg text-foreground/80 mb-8">{kshetra.description}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {kshetra.tags?.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {kshetra.spiritualSignificance && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline">
                  <Sparkles className="text-primary" /> Spiritual Significance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {kshetra.spiritualSignificance.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {kshetra.shankarasContribution && (
             <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline">
                  <Mountain className="text-primary" /> Shankara's Contribution
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(kshetra.shankarasContribution).map(([key, value]) => (
                   <div key={key}>
                      <h4 className="font-semibold capitalize text-foreground">{key.replace(/([A-Z])/g, ' $1')}</h4>
                      <p className="text-muted-foreground">{value}</p>
                   </div>
                ))}
              </CardContent>
            </Card>
          )}

          {kshetra.historicalOverview && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline">
                  <History className="text-primary" /> Historical Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                 <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {kshetra.historicalOverview.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
          
           {kshetra.architecturalDetails && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline">
                  <Landmark className="text-primary" /> Architectural Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                 <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {kshetra.architecturalDetails.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
           )}

          {kshetra.visitInfo && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline">
                  <Info className="text-primary" /> Visitor Information
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 text-muted-foreground">
                <div className="space-y-2">
                    {kshetra.visitInfo.seasonalAccess && <p><Calendar className="inline-block w-4 h-4 mr-2" /><strong>Access:</strong> {kshetra.visitInfo.seasonalAccess}</p>}
                    {kshetra.visitInfo.hours && <p><Calendar className="inline-block w-4 h-4 mr-2" /><strong>Hours:</strong> {kshetra.visitInfo.hours}</p>}
                    {kshetra.visitInfo.accessRoute && <p><Car className="inline-block w-4 h-4 mr-2" /><strong>Route:</strong> {kshetra.visitInfo.accessRoute}</p>}
                </div>
                 {kshetra.nearbySites && (
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Nearby Sites</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {kshetra.nearbySites.map((site, index) => (
                        <li key={index}>{site}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
           )}
        </div>

        <div className="text-center pt-8 border-t">
            <h3 className="text-xl font-headline font-semibold mb-4">Explore Further</h3>
            <div className="flex justify-center gap-4">
                <Button asChild variant="outline">
                    <Link href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                        <MapIcon className="mr-2" /> Google Maps
                    </Link>
                </Button>
                <Button asChild variant="outline">
                    <Link href={youtubeUrl} target="_blank" rel="noopener noreferrer">
                        <Youtube className="mr-2" /> YouTube
                    </Link>
                </Button>
                 {kshetra.references?.wikipedia && (
                     <Button asChild variant="outline">
                        <Link href={kshetra.references.wikipedia} target="_blank" rel="noopener noreferrer">
                            <Globe className="mr-2" /> Wikipedia
                        </Link>
                    </Button>
                 )}
            </div>
        </div>
      </div>
    </div>
  );
}
