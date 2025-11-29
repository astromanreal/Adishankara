'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BookOpen, Map, Sparkles, HandHeart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const wisdoms = [
  {
    quote: "Do not be proud of wealth, people, or youth; time takes them away in a moment. Leaving all this, which is full of illusion, enter into the state of Brahman.",
    source: "Bhaja Govindam",
    context: "A verse warning against worldly attachments and encouraging spiritual pursuit.",
    theme: "Detachment"
  },
  {
    quote: "Brahman is the only reality, the world is an illusion, and the individual self is not different from Brahman.",
    source: "Vivekachudamani",
    context: "This verse encapsulates the core teaching of non-duality (Advaita).",
    theme: "Non-Duality"
  },
  {
    quote: "You are not the body. You are not the mind. You are the Self — pure consciousness, eternal and free.",
    source: "Atma Bodha",
    context: "A verse that guides the seeker towards identifying with the Atman rather than the body-mind complex.",
    theme: "Self-Realization"
  },
  {
    quote: "Worship Govinda, Worship Govinda, Worship Govinda, Oh deluded mind!",
    source: "Bhaja Govindam",
    context: "A powerful reminder to turn toward God rather than waste life in logic and intellectualism.",
    theme: "Devotion"
  },
  {
    quote: "What is that by knowing which everything else is known? That is Brahman.",
    source: "Upadesasahasri",
    context: "Shankara points toward the supreme knowledge that leads to liberation.",
    theme: "Jnana Yoga"
  },
  {
    quote: "The Self is distinct from the body, the senses, the mind, and the intellect. It is pure awareness, untouched by pain or pleasure.",
    source: "Drig Drishya Viveka",
    context: "Discriminating the seer (Drig) from the seen (Drishya) to understand the Self.",
    theme: "Discrimination"
  },
  {
    quote: "Knowledge destroys ignorance as light destroys darkness.",
    source: "Vivekachudamani",
    context: "Illustrating how self-knowledge eliminates the root cause of suffering.",
    theme: "Wisdom"
  },
  {
    quote: "Even after attaining knowledge, actions may continue due to past tendencies, like a potter’s wheel spinning after the pot is made.",
    source: "Brahma Sutra Bhashya",
    context: "Explains why liberated beings may still appear active in the world.",
    theme: "Karma & Liberation"
  },
  {
    quote: "Liberation is not achieved through action, but through knowledge alone.",
    source: "Naishkarmya Siddhi",
    context: "Affirms that spiritual freedom comes through Jnana, not rituals.",
    theme: "Moksha"
  },
  {
    quote: "Who are you? Whose child are you? Where have you come from? Ponder these truths, O foolish mind.",
    source: "Bhaja Govindam",
    context: "An existential call to self-inquiry and introspection.",
    theme: "Self-Inquiry"
  }
];

export default function Home() {
  const [dailyWisdom, setDailyWisdom] = useState(wisdoms[0]);

  useEffect(() => {
    setDailyWisdom(wisdoms[Math.floor(Math.random() * wisdoms.length)]);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-4">
                  <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    The Timeless Wisdom of
                    <br />
                    <span className="text-primary">Adi Shankaracharya</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Explore the life, teachings, and profound legacy of the great philosopher-saint who revitalized Sanatana Dharma.
                  </p>
                  <Card className="bg-background/50 border-l-4 border-accent">
                    <CardHeader>
                      <CardTitle className="text-lg font-headline">Daily Wisdom</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <blockquote className="text-lg italic">
                        &ldquo;{dailyWisdom.quote}&rdquo;
                        <footer className="text-sm text-muted-foreground mt-2">- {dailyWisdom.source}</footer>
                      </blockquote>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex flex-col gap-2 min-[480px]:flex-row">
                  <Button asChild size="lg" className="font-headline">
                    <Link href="/journey">
                      Explore Life
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                   <Button asChild size="lg" variant="secondary" className="font-headline">
                    <Link href="/chanting">
                      Listen to Stotras
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="font-headline">
                    <Link href="/teachings">
                      Learn Vedanta
                    </Link>
                  </Button>
                </div>
              </div>
              <Image
                src="https://i.pinimg.com/1200x/a1/73/be/a173be2e120322ad8556a9418087db0e.jpg"
                width="600"
                height="600"
                alt="Adi Shankaracharya"
                data-ai-hint="statue philosopher"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">A Gateway to Ancient Truth</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Immerse yourself in the world of Advaita Vedanta through interactive tools, a vast library of scriptures, and guided spiritual practices.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-4 mt-12">
              <Link href="/journey" className="flex">
                <Card className="hover:shadow-lg transition-shadow duration-300 bg-background/80 w-full">
                  <CardHeader>
                    <Map className="w-10 h-10 text-primary mb-2" />
                    <CardTitle className="font-headline">Life Journey</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Trace Shankara's footsteps across ancient India.
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/library" className="flex">
                <Card className="hover:shadow-lg transition-shadow duration-300 bg-background/80 w-full">
                  <CardHeader>
                    <BookOpen className="w-10 h-10 text-primary mb-2" />
                    <CardTitle className="font-headline">Scriptures</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Access commentaries and foundational texts.
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/puja" className="flex">
                <Card className="hover:shadow-lg transition-shadow duration-300 bg-background/80 w-full">
                  <CardHeader>
                    <Sparkles className="w-10 h-10 text-primary mb-2" />
                    <CardTitle className="font-headline">Digital Puja</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Engage in interactive virtual worship.
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/mathas" className="flex">
                  <Card className="hover:shadow-lg transition-shadow duration-300 bg-background/80 w-full">
                    <CardHeader>
                      <HandHeart className="w-10 h-10 text-primary mb-2" />
                      <CardTitle className="font-headline">The Four Mathas</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Learn about the four monastic centers he established.
                      </CardDescription>
                    </CardContent>
                  </Card>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
