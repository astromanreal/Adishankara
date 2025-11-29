
'use client';

import type { Metadata } from 'next';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { BookMarked, Search, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { commentariesData } from '@/data/commentaries';

const allTags = [...new Set(commentariesData.flatMap(c => c.tags))];

// export const metadata: Metadata = {
//   title: 'The Great Commentaries',
//   description: "Explore Shankara’s definitive Bhashyas and Prakarana Granthas on the foundational pillars of Vedanta, where he reveals the oneness of Ātman and Brahman.",
// };

export default function CommentariesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredCommentaries = commentariesData.filter(commentary => {
    const matchesSearch = commentary.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          commentary.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          commentary.keyThought.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag ? commentary.tags.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="text-center mb-12">
        <BookMarked className="w-16 h-16 mx-auto text-primary mb-4" />
        <h1 className="text-4xl font-bold font-headline">The Great Commentaries</h1>
        <p className="text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
          Explore Shankara’s definitive Bhashyas on the foundational pillars of Vedanta — where he reveals the oneness of Ātman and Brahman.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto mb-8 space-y-4">
        <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
                type="search"
                placeholder="Search commentaries by title or keyword..."
                className="pl-10 text-base"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
        </div>
        <div className="flex flex-wrap justify-center gap-2">
            <Badge
              variant={!selectedTag ? 'default' : 'secondary'}
              onClick={() => setSelectedTag(null)}
              className="cursor-pointer transition-colors"
            >
              All
            </Badge>
            {allTags.map(tag => (
                <Badge
                    key={tag}
                    variant={selectedTag === tag ? 'default' : 'secondary'}
                    onClick={() => setSelectedTag(tag)}
                    className="cursor-pointer transition-colors"
                >
                    {tag}
                </Badge>
            ))}
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1 max-w-4xl mx-auto">
        {filteredCommentaries.length > 0 ? filteredCommentaries.map((commentary) => (
          <Card key={commentary.title} className="flex flex-col bg-background/80 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">{commentary.title}</CardTitle>
              <CardDescription className="font-semibold">{commentary.subtitle}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <p className="text-muted-foreground mb-4">{commentary.description}</p>
               <div className="flex flex-wrap gap-2 mb-6">
                {commentary.tags.map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}
              </div>
               <blockquote className="border-l-2 pl-4 italic text-accent-foreground mb-6">
                 <p className="font-semibold not-italic text-foreground">Key Thought</p>
                &ldquo;{commentary.keyThought}&rdquo;
              </blockquote>
            </CardContent>
            <CardFooter>
                 <Button asChild className="w-full font-headline">
                    <Link href={`/commentaries/${commentary.slug}`}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardFooter>
          </Card>
        )) : (
            <div className="text-center py-16 col-span-full">
                <p className="text-muted-foreground text-lg">No commentaries found.</p>
                <p className="text-sm text-muted-foreground">Try adjusting your search or filters.</p>
            </div>
        )}
      </div>

      <div className="text-center mt-16 border-t pt-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-headline font-bold">How to Approach These Commentaries</h2>
        <p className="text-lg text-muted-foreground mt-2">
           These are not just texts to read but ladders for inner contemplation. They should be studied with humility, patience, and guidance. These three texts are not separate works — they are one luminous thread of Truth. Begin where your heart leads you.
        </p>
      </div>
    </div>
  );
}
