import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowLeft, BookOpen, Globe, Lightbulb, MessageSquareQuote, Search, Youtube } from 'lucide-react';
import { commentariesData } from '@/data/commentaries';
import { Badge } from '@/components/ui/badge';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const commentary = commentariesData.find((c) => c.slug === params.slug);

  if (!commentary) {
    return {
      title: 'Commentary Not Found',
      description: 'The requested commentary could not be found.',
    };
  }

  return {
    title: commentary.title,
    description: commentary.description,
  };
}

export function generateStaticParams() {
  return commentariesData.map((commentary) => ({
    slug: commentary.slug,
  }));
}

export default function CommentaryDetailPage({ params }: { params: { slug: string } }) {
  const commentary = commentariesData.find((c) => c.slug === params.slug);

  if (!commentary) {
    notFound();
  }

  const youtubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(commentary.title)}`;
  const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(commentary.title)}`;

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-4xl">
       <Button asChild variant="ghost" className="mb-8">
        <Link href="/commentaries">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to All Commentaries
        </Link>
      </Button>

      <div className="space-y-12">
        <header className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">{commentary.title}</h1>
            <p className="text-xl text-muted-foreground font-semibold">{commentary.subtitle}</p>
             <div className="flex flex-wrap justify-center gap-2">
                {commentary.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
             </div>
        </header>

        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline"><BookOpen className="text-primary" /> Overview</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-lg text-muted-foreground">{commentary.description}</p>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline"><Lightbulb className="text-primary" /> Core Idea</CardTitle>
            </CardHeader>
            <CardContent>
                 <blockquote className="border-l-4 border-accent pl-4 italic text-2xl text-foreground/80">
                    &ldquo;{commentary.keyThought}&rdquo;
                </blockquote>
            </CardContent>
        </Card>


        <div className="space-y-8">
            <h2 className="text-3xl font-bold font-headline text-center">Key Excerpts</h2>
            {commentary.excerpts.map((excerpt, index) => (
              <Card key={index}>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl font-headline">
                        <MessageSquareQuote className="text-accent" /> {excerpt.title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <blockquote className="text-lg text-muted-foreground italic">
                    &ldquo;{excerpt.quote}&rdquo;
                  </blockquote>
                  {excerpt.sanskrit && (
                    <div className="border-l-2 border-primary/50 pl-4">
                        <p className="font-['Tiro_Devanagari_Sanskrit'] text-xl text-primary">{excerpt.sanskrit}</p>
                        <p className="text-sm italic text-muted-foreground">{excerpt.translation}</p>
                        <p className="text-xs text-muted-foreground mt-1">{excerpt.note}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
        </div>
        
        <div className="text-center pt-8 border-t">
            <h3 className="text-xl font-headline font-semibold mb-4">Explore Further</h3>
            <div className="flex justify-center flex-wrap gap-4">
                <Button asChild variant="outline">
                    <Link href={youtubeUrl} target="_blank" rel="noopener noreferrer">
                        <Youtube className="mr-2" /> Search on YouTube
                    </Link>
                </Button>
                {commentary.references?.wikipedia && (
                     <Button asChild variant="outline">
                        <Link href={commentary.references.wikipedia} target="_blank" rel="noopener noreferrer">
                            <Globe className="mr-2" /> Read on Wikipedia
                        </Link>
                    </Button>
                 )}
                 <Button asChild variant="outline">
                    <Link href={googleUrl} target="_blank" rel="noopener noreferrer">
                        <Search className="mr-2" /> Search on Google
                    </Link>
                </Button>
            </div>
        </div>

      </div>
    </div>
  );
}
