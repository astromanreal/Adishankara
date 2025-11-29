// This is a placeholder page for the upcoming Vedantic Wisdom Tool.
// It will be replaced with a fully interactive AI tool in a future update.
'use client';
import type { Metadata } from 'next';
import { BrainCircuit, Bell, MessageSquareQuote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// export const metadata: Metadata = {
//   title: 'Vedantic Insight Engine',
//   description: 'Ask a question related to Advaita Vedanta, and let the wisdom of non-duality respond. An AI tool steeped in the teachings of Adi Shankaracharya.',
// };


const sampleReflections = [
  {
    quote:
      'Brahman is the only truth, the world is unreal, and there is ultimately no difference between Brahman and the individual self.',
    source: 'Vivekachudamani',
  },
  {
    quote:
      'As the same luminous sun is reflected in different waters, so the one Atman appears as many in different beings.',
    source: 'Atma Bodha',
  },
  {
    quote:
      'Curb the turbulent mind, and fix it on the Self. There is no other duty for a seeker of liberation.',
    source: 'Upadesa Sahasri',
  },
];

export default function WisdomPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <BrainCircuit className="w-16 h-16 mx-auto text-primary mb-4" />
          <h1 className="text-4xl font-bold font-headline">
            Vedantic Insight Engine
          </h1>
          <p className="text-xl text-muted-foreground mt-4">
            Ask a question, and let the wisdom of non-duality respond.
          </p>
        </div>

        <Card className="bg-background/80 border-primary/20 border text-center p-8 mb-12">
          <Badge variant="secondary" className="mb-4 text-base py-1 px-4">
            Coming Soon
          </Badge>
          <CardTitle className="text-2xl font-headline mb-4">
            An AI Oracle Steeped in Timeless Truth
          </CardTitle>
          <CardContent className="text-muted-foreground text-lg">
            <p>
              This tool will draw from the timeless teachings of Adi
              Shankaracharya, filtering your queries through the lens of Advaita
              Vedanta. Whether you seek clarity on the Self, Maya, liberation,
              or the deeper meanings of Shankara’s works — answers will arise
              from the heart of non-duality.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="mt-6 font-headline" size="lg">
                  <Bell className="mr-2 h-5 w-5" />
                  Notify Me When It&apos;s Ready
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Join the Waitlist</DialogTitle>
                  <DialogDescription>
                    Be the first to know when the Vedantic Insight Engine is
                    live. Enter your email below.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Join Waitlist</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        <div>
          <h2 className="text-3xl font-bold font-headline text-center mb-8">
            Sample Reflections
          </h2>
          <div className="grid gap-6 md:grid-cols-1">
            {sampleReflections.map((reflection, index) => (
              <Card
                key={index}
                className="shadow-lg animate-in fade-in-50 duration-500 bg-background/80"
              >
                <CardHeader className="flex flex-row items-start gap-4">
                  <MessageSquareQuote className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <blockquote className="text-xl leading-relaxed italic text-foreground">
                      &ldquo;{reflection.quote}&rdquo;
                    </blockquote>
                    <footer className="text-base text-muted-foreground mt-2">
                      - {reflection.source}
                    </footer>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
