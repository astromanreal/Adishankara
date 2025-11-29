import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, BookOpen, Brain, Feather, UserCheck } from 'lucide-react';
import { disciplesData } from '@/data/disciples';
import { Badge } from '@/components/ui/badge';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const disciple = disciplesData.find((d) => d.slug === params.slug);

  if (!disciple) {
    return {
      title: 'Disciple Not Found',
      description: 'The requested disciple could not be found.',
    };
  }

  return {
    title: disciple.name,
    description: disciple.biography,
  };
}

export function generateStaticParams() {
  return disciplesData.map((disciple) => ({
    slug: disciple.slug,
  }));
}

export default function DiscipleDetailPage({ params }: { params: { slug: string } }) {
  const disciple = disciplesData.find((d) => d.slug === params.slug);

  if (!disciple) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-6xl">
       <Button asChild variant="ghost" className="mb-8">
        <Link href="/disciples">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to All Disciples
        </Link>
      </Button>

      <div className="space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-2">
            <Image
                src={disciple.image}
                alt={disciple.name}
                width={800}
                height={1200}
                data-ai-hint={disciple.aiHint}
                className="w-full h-auto max-h-[600px] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:col-span-3 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-2">{disciple.name}</h1>
            <p className="text-xl text-muted-foreground font-semibold mb-6">{disciple.title}</p>
            <blockquote className="border-l-4 border-accent pl-4 italic text-lg text-foreground/80 mb-8">
              &ldquo;{disciple.transformation}&rdquo;
            </blockquote>
             <div className="flex flex-wrap gap-2 mb-8">
                <Badge variant="secondary">Path: {disciple.path}</Badge>
                <Badge variant="secondary">Matha: {disciple.matha}</Badge>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                  <UserCheck className="w-8 h-8 text-accent" />
                  <CardTitle className="font-headline text-xl">Legacy</CardTitle>
              </CardHeader>
              <CardContent>
                  <p className="text-lg font-semibold text-primary">{disciple.legacy}</p>
              </CardContent>
          </Card>
           <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                  <Brain className="w-8 h-8 text-accent" />
                  <CardTitle className="font-headline text-xl">Core Teaching</CardTitle>
              </CardHeader>
              <CardContent>
                   <p className="text-lg text-muted-foreground">{disciple.teachings}</p>
              </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline"><Feather className="text-primary" /> Biography</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground whitespace-pre-wrap">{disciple.biography}</p>
              </CardContent>
            </Card>

             <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline"><BookOpen className="text-primary" /> Key Works</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {disciple.keyWorks.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
              </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
