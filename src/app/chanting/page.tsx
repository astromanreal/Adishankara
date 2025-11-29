
'use client';
import type { Metadata } from 'next';
import Link from 'next/link';
import type { Mantra } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlayCircle, Volume2, Music, ArrowRight, BookOpen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// export const metadata: Metadata = {
//   title: 'Mantra & Stotra Library',
//   description: 'Explore timeless stotras and mantras. Listen to original Sanskrit, with translations and explanations.',
// };

const stotras = [
  {
    id: 'stotra_001',
    title: 'Nirvana Shatakam',
    sanskritTitle: 'निर्वाण षट्कम्',
    slug: 'nirvana-shatakam',
    translation: "A profound summary of Advaita Vedanta in six verses.",
    verseCount: 6,
  },
  {
    id: 'stotra_002',
    title: 'Bhaja Govindam',
    sanskritTitle: 'भज गोविन्दम्',
    slug: 'bhaja-govindam',
    translation: "A powerful hymn urging seekers to turn from material pursuits.",
    verseCount: 31,
  },
   {
    id: 'stotra_003',
    slug: 'kanakadhara-stotram',
    title: 'Kanakadhara Stotram',
    sanskritTitle: 'कनकधारा स्तोत्रम्',
    translation: 'A hymn to Goddess Lakshmi to shower wealth.',
    verseCount: 21,
  },
  {
    id: 'stotra_004',
    title: 'Soundarya Lahari',
    sanskritTitle: 'सौन्दर्य लहरी',
    slug: 'soundarya-lahari',
    translation: "A hymn celebrating the beauty of the Divine Mother.",
    verseCount: 100,
  },
  {
    id: 'stotra_005',
    title: 'Annapurna Ashtakam',
    sanskritTitle: 'अन्नपूर्णा अष्टकम्',
    slug: 'annapurna-ashtakam',
    translation: 'A heartfelt hymn to the Goddess of Nourishment.',
    verseCount: 8,
  },
  {
    id: 'stotra_006',
    title: 'Krishnashtakam',
    sanskritTitle: 'कृष्णाष्टकम्',
    slug: 'krishnashtakam',
    translation: 'An eight-verse hymn praising Lord Krishna.',
    verseCount: 8,
  },
  {
    id: 'stotra_007',
    title: 'Vishnu Shatpadi',
    sanskritTitle: 'विष्णु षट्पदी',
    slug: 'vishnu-shatpadi',
    translation: 'A six-verse prayer to Lord Vishnu for forgiveness.',
    verseCount: 6,
  },
  {
    id: 'stotra_008',
    title: 'Lakshmi Nrusimha Karavalamba',
    sanskritTitle: 'लक्ष्मीनृसिंह करावलम्ब स्तोत्रम्',
    slug: 'lakshmi-nrusimha-karavalamba',
    translation: 'A prayer seeking the helping hand of Lord Narasimha.',
    verseCount: 17,
  },
  {
    id: 'stotra_009',
    title: 'Ganesha Pancharatnam',
    sanskritTitle: 'गणेश पञ्चरत्नम्',
    slug: 'ganesha-pancharatnam',
    translation: 'Five jewels in praise of Lord Ganesha.',
    verseCount: 5,
  },
  {
    id: 'stotra_010',
    title: 'Shivapanchakshara Stotram',
    sanskritTitle: 'शिवपञ्चाक्षर स्तोत्रम्',
    slug: 'shivapanchakshara-stotram',
    translation: 'A hymn on the glory of the "Na-Ma-Shi-Va-Ya" mantra.',
    verseCount: 5,
  }
];

const mantras: Mantra[] = [
    {
    id: 1,
    title: 'Guru Stotram (Verse 1)',
    deity: 'Guru',
    sanskrit: 'गुरुर्ब्रह्मा गुरुर्विष्णुर्गुरुर्देवो महेश्वरः ।\nगुरुः साक्षात् परं ब्रह्म तस्मै श्री गुरवे नमः ॥',
    translation: 'The Guru is Brahma, the Guru is Vishnu, the Guru is Lord Maheshwara. The Guru is the absolute reality, the ultimate Brahman. Salutations to that revered Guru.',
    audioSrc: '/audio/placeholder.mp3',
  },
  {
    id: 2,
    title: 'Bhavani Ashtakam (Verse 1)',
    deity: 'Devi',
    sanskrit: 'न तातो न माता न बन्धुर्न दाता\nन पुत्रो न पुत्री न भृत्यो न भर्ता ।',
    translation: 'Neither father, nor mother, nor friend, nor bestower of gifts, Neither son, nor daughter, nor servant, nor husband.',
    audioSrc: '/audio/placeholder.mp3',
  },
  {
    id: 3,
    title: 'Nirvana Shatakam (Verse 1)',
    deity: 'Shiva',
    sanskrit: 'मनोबुद्ध्यहंकारचित्तानि नाहं\nन च श्रोत्रजिह्वे न च घ्राणनेत्रे ।',
    translation: 'I am not the mind, intellect, ego, or the memory. I am not the ears, tongue, nose, or eyes.',
    audioSrc: '/audio/placeholder.mp3',
  },
  {
    id: 5,
    title: 'Kanakadhara Stotram',
    deity: 'Devi',
    sanskrit: 'अङ्गं हरेः पुलकभूषणमाश्रयन्ती\nभृङ्गाङ्गनेव मुकुलाभरणं तमालम् ।',
    translation: 'She who is the ornament of Hari, causing horripilation, like the female bee on the blossoming Tamala tree.',
    audioSrc: '/audio/placeholder.mp3',
  },
  {
    id: 6,
    title: 'Achyutashtakam (Verse 1)',
    deity: 'Vishnu',
    sanskrit: 'अच्युतं केशवं रामनारायणं\nकृष्णदामोदरं वासुदेवं हरिम् ।',
    translation: 'Achyuta, Keshava, Rama, Narayana, Krishna, Damodara, Vasudeva, Hari.',
    audioSrc: '/audio/placeholder.mp3',
  },
   {
    id: 'stotra_005',
    title: 'Annapurna Stotram',
    deity: 'Devi',
    sanskrit: 'नित्यानन्दकरी वराभयकरी सौन्दर्यरत्नाकरी\nनिर्धूताखिल घोर पावनकरी प्रत्यङ्मुखी ना पदा॥',
    translation: 'A heartfelt hymn to Annapurna, the Goddess of Nourishment, asking for the blessing of spiritual and physical sustenance.',
    audioSrc: '/audio/placeholder.mp3',
  }
];


export default function ChantingPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="text-center mb-12">
        <Music className="w-16 h-16 mx-auto text-primary mb-4" />
        <h1 className="text-4xl font-bold font-headline">Mantra & Stotra Library</h1>
        <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
          Explore timeless stotras that blend profound non-dual (Jnana) wisdom with heart-melting devotion (Bhakti).
        </p>
      </div>

      {/* Stotras Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-headline font-bold text-center mb-8">Featured Stotras</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {stotras.map((stotra) => (
            <Card key={stotra.id} className="flex flex-col bg-background/80 hover:shadow-lg transition-shadow group">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">{stotra.title}</CardTitle>
                <CardDescription className="font-['Tiro_Devanagari_Sanskrit'] text-lg text-foreground">
                  {stotra.sanskritTitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <p className="text-muted-foreground">{stotra.translation}</p>
                 <Badge variant="secondary" className="flex items-center gap-2 w-fit">
                    <BookOpen className="w-4 h-4" />
                    {stotra.verseCount} Verses
                </Badge>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full font-headline mt-4">
                  <Link href={`/stotras/${stotra.slug}`}>
                    Learn More & Listen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Mantras Feed Section */}
      <div>
        <h2 className="text-3xl font-headline font-bold text-center mb-8">Mantra Feed</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {mantras.map((mantra) => (
            <Card key={mantra.id} className="bg-muted/30">
              <CardHeader>
                <CardTitle className="font-headline text-xl text-primary">{mantra.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-headline font-semibold mb-2 flex items-center gap-2">
                      <Volume2 className="text-accent" />
                      Sanskrit Verse
                    </h3>
                    <p className="text-xl leading-relaxed whitespace-pre-wrap font-['Tiro_Devanagari_Sanskrit']">
                      {mantra.sanskrit}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-headline font-semibold mb-2">Translation</h3>
                    <p className="text-muted-foreground italic">
                      {mantra.translation}
                    </p>
                  </div>
                  <div className="pt-2">
                    <div className="flex items-center gap-4 p-3 rounded-lg bg-background/50">
                      <PlayCircle className="w-10 h-10 text-primary cursor-pointer hover:text-primary/80 transition-colors" />
                      <div className="w-full">
                          <audio controls className="w-full" src={mantra.audioSrc}>
                              Your browser does not support the audio element.
                          </audio>
                      </div>
                    </div>
                     <p className="text-xs text-muted-foreground mt-2">Note: Audio is a placeholder.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

    </div>
  );
}

    