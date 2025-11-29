
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { stotrasData } from '@/data/stotras';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, BookOpen, Brain, Info, Lightbulb, Music, Mic, Volume2, History, MessageCircle, Star, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const stotra = stotrasData.find((s) => s.slug === params.slug);

  if (!stotra) {
    return {
      title: 'Stotra Not Found',
      description: 'The requested stotra could not be found.',
    };
  }

  return {
    title: stotra.title.english,
    description: stotra.description,
  };
}

export function generateStaticParams() {
  return stotrasData.map((stotra) => ({
    slug: stotra.slug,
  }));
}

export default function StotraDetailPage({ params }: { params: { slug: string } }) {
  const stotra = stotrasData.find((s) => s.slug === params.slug);

  if (!stotra) {
    notFound();
  }

  const currentIndex = stotrasData.findIndex(s => s.slug === params.slug);
  const nextIndex = (currentIndex + 1) % stotrasData.length;
  const nextStotra = stotrasData[nextIndex];


  return (
    <div className="container mx-auto p-4 md:p-8 max-w-4xl">
      <div className="flex justify-between items-center mb-8">
        <Button asChild variant="ghost">
          <Link href="/chanting">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Library
          </Link>
        </Button>
        <Button asChild>
          <Link href={`/stotras/${nextStotra.slug}`}>
            Next: {nextStotra.title.english}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">{stotra.title.english}</h1>
        <p className="text-2xl font-['Tiro_Devanagari_Sanskrit'] text-muted-foreground">{stotra.title.sanskrit}</p>
        <p className="text-lg text-muted-foreground mt-4">{stotra.description}</p>
      </header>
      
      <Card className="mb-8 bg-background/80">
          <CardHeader>
              <CardTitle className="flex items-center gap-3 font-headline"><Music className="text-primary"/> Audio Recitation</CardTitle>
          </CardHeader>
          <CardContent>
            <audio controls className="w-full" src={stotra.audioSrc}>
                Your browser does not support the audio element.
            </audio>
            <p className="text-xs text-muted-foreground mt-2">Note: Audio is a placeholder.</p>
          </CardContent>
      </Card>
      
      <Accordion type="multiple" defaultValue={['summary']} className="w-full space-y-4 mb-12">
        {stotra.origin_story && (
          <AccordionItem value="origin">
            <Card>
              <AccordionTrigger className="p-6 text-xl font-headline">
                <Star className="mr-3 text-primary"/> Origin Story
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0 space-y-4">
                  <p className="text-muted-foreground">{stotra.origin_story.summary}</p>
                  <blockquote className="border-l-2 border-accent pl-3 text-base italic text-accent-foreground">
                    {stotra.origin_story.devotional_message}
                  </blockquote>
              </AccordionContent>
            </Card>
          </AccordionItem>
        )}
        {stotra.background && (
          <AccordionItem value="background">
            <Card>
              <AccordionTrigger className="p-6 text-xl font-headline">
                <History className="mr-3 text-primary"/> Background & Context
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0 space-y-4">
                  <p className="text-muted-foreground">{stotra.background.context}</p>
                  <blockquote className="border-l-2 border-accent pl-3 text-base italic text-accent-foreground">
                    {stotra.background.core_message}
                  </blockquote>
              </AccordionContent>
            </Card>
          </AccordionItem>
        )}
        {stotra.overall_summary && (
        <AccordionItem value="summary">
          <Card>
            <AccordionTrigger className="p-6 text-xl font-headline">
                <Info className="mr-3 text-primary"/> Overall Summary
            </AccordionTrigger>
            <AccordionContent className="p-6 pt-0">
                <p className="text-muted-foreground">{stotra.overall_summary.detailed}</p>
            </AccordionContent>
          </Card>
        </AccordionItem>
        )}
         <AccordionItem value="usage">
          <Card>
            <AccordionTrigger className="p-6 text-xl font-headline">
                <Lightbulb className="mr-3 text-primary"/> Purpose & Usage
            </AccordionTrigger>
            <AccordionContent className="p-6 pt-0 space-y-4">
               <div>
                 <h3 className="font-semibold text-foreground mb-1">Purpose</h3>
                 <p className="text-muted-foreground">{stotra.purpose}</p>
               </div>
                {stotra.usage_notes && (
                <div>
                 <h3 className="font-semibold text-foreground mb-1">Intention for Practice</h3>
                 <p className="text-muted-foreground">{stotra.usage_notes.intention}</p>
               </div>
               )}
            </AccordionContent>
          </Card>
        </AccordionItem>
      </Accordion>

      {stotra.refrain && (
        <Card className="mb-12 bg-primary/10 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 font-headline text-primary"><MessageCircle/> Refrain</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-['Tiro_Devanagari_Sanskrit']">{stotra.refrain.sanskrit}</p>
            <p className="text-base italic text-muted-foreground mt-2">&ldquo;{stotra.refrain.meaning_english}&rdquo;</p>
          </CardContent>
        </Card>
      )}


      <div>
        <h2 className="text-3xl font-bold font-headline text-center mb-8">Verses & Commentary</h2>
        <div className="space-y-8">
            {stotra.verses.map((verse) => (
                <Card key={verse.verse_number} className="bg-muted/30 border-l-4 border-primary">
                    <CardHeader>
                        <CardTitle className="text-xl font-semibold text-primary">Verse {verse.verse_number}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <h3 className="text-lg font-headline font-semibold mb-2 flex items-center gap-2 text-accent-foreground"><BookOpen/> Sanskrit</h3>
                            <p className="text-2xl leading-loose whitespace-pre-wrap font-['Tiro_Devanagari_Sanskrit']">
                                {verse.sanskrit}
                            </p>
                        </div>
                         <div>
                            <h3 className="text-lg font-headline font-semibold mb-2 flex items-center gap-2 text-accent-foreground"><Mic/> Transliteration (IAST)</h3>
                            <p className="text-lg leading-relaxed whitespace-pre-wrap font-mono text-muted-foreground">
                                {verse.transliteration_IAST}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-headline font-semibold mb-2 flex items-center gap-2 text-accent-foreground"><Volume2/> English Translation</h3>
                            <p className="text-lg leading-relaxed whitespace-pre-wrap italic">
                                &ldquo;{verse.english_translation}&rdquo;
                            </p>
                        </div>
                        {verse.commentary && (
                        <div>
                            <h3 className="text-lg font-headline font-semibold mb-2 flex items-center gap-2 text-accent-foreground"><Brain/> Commentary</h3>
                            <p className="text-base leading-relaxed text-muted-foreground prose prose-sm dark:prose-invert">
                                {verse.commentary}
                            </p>
                        </div>
                        )}
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </div>
  );
}
