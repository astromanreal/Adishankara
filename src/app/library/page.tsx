
'use client';
import { useState } from 'react';
import type { Scripture } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { BookText, Search, Download, Headphones, BookOpen, Brain, CheckCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// export const metadata: Metadata = {
//   title: 'Scripture Library',
//   description: 'Explore foundational Advaita Vedanta texts like Vivekachudamani, Atma Bodha, and more. Filter by theme, search by keyword, and delve into the heart of non-dual wisdom.',
// };


const scriptures: Scripture[] = [
  {
    id: 'vivekachudamani',
    title: 'Vivekachudamani',
    category: 'Dialogue',
    description: 'A masterful dialogue between a guru and disciple on the path to liberation.',
    fullDescription: 'This crown jewel of Advaita, attributed to Adi Shankaracharya, unfolds in the form of a guru-disciple dialogue. It outlines the qualifications of a seeker (sadhaka), the importance of viveka (discrimination), vairagya (dispassion), and ultimately, the identity of Ātman and Brahman. With vivid analogies and razor-sharp clarity, it serves as a practical guide on the inward path.',
    themes: ['Guru', 'Discrimination', 'Brahman', 'Liberation'],
    level: 'Advanced',
    verseCount: 581,
    coreIdea: 'Liberation comes through viveka (discrimination), vairagya (dispassion), and self-realization guided by a true Guru.',
    highlightQuote: 'Brahman is the only reality, the world is an illusion, and the individual self (Jiva) is non-different from Brahman.',
    languageSupport: ['Sanskrit', 'English', 'Transliteration'],
    audioAvailable: true,
    downloadable: true,
    content: {
      english: 'The Vivekachudamani is an introductory treatise to the Advaita Vedanta, which teaches that the ultimate reality is Brahman, the one, indivisible, and non-dual consciousness.',
      example: {
        sanskrit: 'ब्रह्म सत्यं जगन्मिथ्या जीवो ब्रह्मैव नापरः।',
        english: 'Brahman is the only reality, the world is an illusion, and the individual self (Jiva) is non-different from Brahman.',
      }
    },
  },
  {
    id: 'atma-bodha',
    title: 'Ātma Bodha',
    category: 'Treatise',
    description: 'A concise yet profound 68-verse text on Self-Knowledge, meant to awaken the seeker to their true nature.',
    fullDescription: 'A concise yet profound text written in 68 verses, Ātma Bodha is a primer for the seeker. Each shloka shines with clarity, dispelling misconceptions and guiding the mind inward. Meant for those prepared by sadhana, it reveals that self-knowledge alone is the path to liberation — not rituals, but realization.',
    themes: ['Atman', 'Self-Inquiry', 'Knowledge'],
    level: 'Intermediate',
    verseCount: 68,
    coreIdea: 'Self-knowledge (Atma-Jnana) is the direct means to Moksha; knowledge alone dispels ignorance and reveals the ever-free Self.',
    highlightQuote: 'The fire of knowledge reduces all actions to ashes, O Arjuna.',
    languageSupport: ['Sanskrit', 'English', 'Transliteration'],
    audioAvailable: true,
    downloadable: true,
    content: {
      english: '"Knowledge of the Self" is a text that systematically explains the nature of the Atman and the means to realize it.',
       example: {
        sanskrit: 'ज्ञानाग्निः सर्वकर्माणि भस्मसात्कुरुतेऽर्जुन।',
        english: 'The fire of knowledge reduces all actions to ashes, O Arjuna.',
      }
    },
  },
  {
    id: 'upadesa-sahasri',
    title: 'Upadeśa Sāhasrī',
    category: 'Treatise',
    description: 'A "Thousand Teachings" in prose and verse, one of the few authentic works directly from Shankara.',
    fullDescription: 'One of the rare prose and verse compositions directly attributed to Adi Shankaracharya, this text bridges poetic depth with philosophical instruction. Here, Shankara teaches how to guide the seeker from mistaken identity to supreme realization. Practical yet penetrating, it also explains how to negate superimpositions (adhyāsa) and realize Brahman.',
    themes: ['Teaching', 'Brahman', 'Self-Inquiry'],
    level: 'Advanced',
    verseCount: 1000,
    coreIdea: 'A dual structure of prose and verse revealing direct methods of teaching non-duality and dismantling false identification with the body-mind complex.',
    highlightQuote: 'From the inquiry into the meaning of the sentence "I am Brahman".',
    languageSupport: ['Sanskrit', 'English', 'Transliteration'],
    audioAvailable: true,
    downloadable: true,
    content: {
      english: 'This work is divided into two parts - a metrical part and a prose part, both of which deal with the path to self-realization.',
       example: {
        sanskrit: 'अहं ब्रह्मास्मीति वाक्यार्थविचारतः।',
        english: 'From the inquiry into the meaning of the sentence "I am Brahman".',
      }
    },
  },
  {
    id: 'bhaja-govindam',
    title: 'Bhaja Govindam',
    category: 'Poetic Work',
    description: 'A powerful devotional poem emphasizing the futility of worldly pursuits and the importance of seeking the Divine.',
    fullDescription: 'Also known as "Moha Mudgara" (Hammer of Delusion), this poetic masterpiece is a call to awakening. It urges the spiritual aspirant to turn away from intellectualism and worldly attachments, and instead, to seek Govinda (God) with sincere devotion and urgency. Its verses are both a warning and an invitation to a life of higher purpose.',
    themes: ['Devotion', 'Dispassion', 'Wisdom', 'Maya'],
    level: 'Beginner',
    verseCount: 31,
    coreIdea: 'Urges the seeker to drop intellectual pride and focus on devotion to God, for only divine remembrance liberates at the time of death.',
    highlightQuote: 'Worship Govinda, Worship Govinda, Worship Govinda, Oh deluded mind!',
    languageSupport: ['Sanskrit', 'English', 'Transliteration'],
    audioAvailable: true,
    downloadable: true,
    content: {
      english: 'A devotional hymn urging seekers to turn from worldly pursuits.',
      example: {
        sanskrit: 'भज गोविन्दं भज गोविन्दं गोविन्दं भज मूढमते।',
        english: 'Worship Govinda, Worship Govinda, Worship Govinda, Oh deluded mind!',
      }
    },
  },
  {
    id: 'tattva-bodha',
    title: 'Tattva Bodha',
    category: 'Introductory Treatise',
    description: 'An introductory text defining the fundamental concepts of Vedanta, making it accessible for beginners.',
    fullDescription: 'Tattva Bodha serves as a glossary for Advaita Vedanta. It uses a question-and-answer format to systematically define and explain core concepts like Brahman, Ātman, Māyā, the three bodies (gross, subtle, causal), and the nature of liberation. It is considered an essential first step for any serious student of Vedanta.',
    themes: ['Brahman', 'Atman', 'Maya', 'Beginner'],
    level: 'Beginner',
    verseCount: 45,
    coreIdea: 'Defines fundamental Vedantic terms and concepts like the three bodies, five sheaths, discrimination, and qualifications of a seeker.',
    highlightQuote: 'What is discrimination? It is the discrimination between the eternal and the non-eternal.',
    languageSupport: ['Sanskrit', 'English', 'Transliteration'],
    audioAvailable: true,
    downloadable: true,
    content: {
      english: 'A foundational Q&A text explaining core Vedantic concepts.',
       example: {
        sanskrit: 'विवेकः कः? नित्यानित्यवस्तुविवेकः।',
        english: 'What is discrimination? It is the discrimination between the eternal and the non-eternal.',
      }
    },
  },
  {
    id: 'dakshinamurthy-stotram',
    title: 'Dakshinamurthy Stotram',
    category: 'Poetic Work',
    description: 'A profound hymn that reveres Shiva as Dakshinamurthy — the silent teacher of supreme truth through deep inner stillness.',
    fullDescription: 'This hymn to Shiva as the cosmic teacher is one of Shankara\'s most profound poetic works. It explains how true knowledge is transmitted not through words but through the silence of the enlightened Guru, who awakens the disciple to the Self that was already present.',
    themes: ['Guru', 'Self-Inquiry', 'Wisdom'],
    level: 'Advanced',
    verseCount: 10,
    coreIdea: 'The Guru teaches through silence, and the world is a reflection of the Self within, like a city seen in a mirror.',
    highlightQuote: 'The world, though unreal, appears real — like a dream — through ignorance. It is removed only by the awakening into Self.',
    languageSupport: ['Sanskrit', 'English', 'Transliteration'],
    audioAvailable: true,
    downloadable: true,
    content: {
      english: 'Hymn to the Silent Teacher.',
      example: {
        sanskrit: 'विश्वं दर्पणदृश्यमाननगरीतुल्यं निजान्तर्गतम्',
        english: 'The universe is like a city seen in a mirror, existing within oneself.',
      },
    },
  },
  {
    id: 'laghu-vakya-vritti',
    title: 'Laghu Vakya Vritti',
    category: 'Treatise',
    description: 'Explores the deeper meaning of \'Tat Tvam Asi\' — revealing how the individual and the Supreme are one.',
    fullDescription: 'This short treatise, "Explanation of a Short Sentence," focuses on the Mahavakya "Tat Tvam Asi" (That Thou Art). It logically dissects the sentence to show how the seemingly limited individual ("Tvam") is identical to the unlimited absolute ("Tat").',
    themes: ['Mahavakya', 'Brahman', 'Self-Inquiry'],
    level: 'Intermediate',
    verseCount: 18,
    coreIdea: 'Explores the deeper meaning of \'Tat Tvam Asi\' — revealing how the individual and the Supreme are one, through logical unfolding.',
    highlightQuote: 'Just as river and ocean are not separate, the Self and Brahman are not two — the distinction is due to name and form only.',
    languageSupport: ['Sanskrit', 'English', 'Transliteration'],
    audioAvailable: false,
    downloadable: true,
    content: {
      english: 'Inquiry into the Great Saying.',
      example: {
        sanskrit: 'तत् त्वम् असि',
        english: 'That Thou Art.',
      },
    },
  },
  {
    id: 'manisha-panchakam',
    title: 'Manisha Panchakam',
    category: 'Poetic Work',
    description: 'Shankara’s powerful affirmation of non-duality, declaring that the enlightened see no distinction — only the Self shining in all.',
    fullDescription: 'Legend says Shankara encountered Lord Shiva disguised as an outcaste in Varanasi. When asked to move aside, Shankara was challenged, leading to his spontaneous utterance of these five verses. They affirm his firm conviction (Manisha) that anyone who has realized the Self is his Guru, regardless of their social standing.',
    themes: ['Non-Duality', 'Guru', 'Self-Realization', 'Oneness'],
    level: 'Beginner',
    verseCount: 5,
    coreIdea: 'Shankara’s powerful affirmation of non-duality, declaring that the enlightened see no caste or distinction — only the Self shining in all.',
    highlightQuote: 'Whether a Brahmana or an outcaste — if he has realized the Self, he is my Guru — this is my firm conviction (manisha).',
    languageSupport: ['Sanskrit', 'English', 'Transliteration'],
    audioAvailable: true,
    downloadable: true,
    content: {
      english: 'Five Verses of Firm Conviction.',
      example: {
        sanskrit: 'चण्डालोऽस्तु स तु द्विजोऽस्तु गुरुरित्येषा मनीषा मम।',
        english: 'Be he a chandala or a brahmin, he is my guru, this is my conviction.',
      },
    },
  },
  {
    id: 'aparokshanubhuti',
    title: 'Aparokshanubhuti',
    category: 'Treatise',
    description: 'A comprehensive manual for seekers on how to attain direct, experiential realization of non-duality.',
    fullDescription: '"Direct Experience," as the name suggests, is a practical guide. It moves beyond theory to outline a 15-step process of Raja Yoga-style meditation aimed at helping the aspirant directly perceive the non-dual reality. It emphasizes that liberation is an immediate experience, not a future goal.',
    themes: ['Direct Experience', 'Jnana Yoga', 'Vedantic Practice', 'Brahman', 'Atman'],
    level: 'Advanced',
    verseCount: 144,
    coreIdea: 'A comprehensive manual for seekers on how to attain direct, experiential realization of non-duality — beyond intellect or theory.',
    highlightQuote: 'Liberation is not gained by action, ritual, or pilgrimage — it is attained through direct realization of the Self as Brahman.',
    languageSupport: ['Sanskrit', 'English', 'Transliteration'],
    audioAvailable: true,
    downloadable: true,
    content: {
      english: 'Direct Experience of the Self.',
      example: {
        sanskrit: 'सिद्धस्य लक्षणानि कथितानि',
        english: 'The characteristics of the perfected one are described.',
      },
    },
  },
  {
    id: 'hastamalakiyam',
    title: 'Hastamalakiyam',
    category: 'Poetic Work',
    description: 'Twelve profound verses by Hastamalaka, a disciple of Shankara, spontaneously uttered in reply to ‘Who are you?’',
    fullDescription: 'When a young, silent boy was brought to Shankara, the master asked, "Who are you?" The boy, Hastamalaka, replied with these twelve verses, expressing the highest Advaitic truth with such clarity that it was like seeing a fruit in the palm of one\'s hand (Hasta-amalaka). Shankara himself then wrote a commentary on it.',
    themes: ['Self-Realization', 'Guru', 'Wisdom'],
    level: 'Intermediate',
    verseCount: 12,
    coreIdea: 'Twelve profound verses by Hastamalaka, a disciple of Shankara, spontaneously uttered in reply to ‘Who are you?’ — expressing pure Advaita.',
    highlightQuote: 'I am pure awareness — unchanging, untouched by the body, mind, or senses — ever-present, self-effulgent, and free.',
    languageSupport: ['Sanskrit', 'English', 'Transliteration'],
    audioAvailable: false,
    downloadable: true,
    content: {
      english: 'Clear as a Fruit in the Palm.',
      example: {
        sanskrit: 'नित्योपलब्धिस्वरूपोऽहमात्मा',
        english: 'I am the Self, of the nature of eternal consciousness.',
      },
    },
  },
];


const allThemes = [...new Set(scriptures.flatMap(s => s.themes))];

export default function LibraryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('All');
  const [selectedTheme, setSelectedTheme] = useState('');

  const handleThemeChange = (theme: string) => {
    setSelectedTheme(prev => (prev === theme ? '' : theme));
  };

  const filteredScriptures = scriptures.filter(s => {
    const searchLower = searchTerm.toLowerCase();
    const matchesTab = activeTab === 'All' || s.category === activeTab || (activeTab === 'Introductory' && (s.category === 'Introductory Treatise' || s.themes.includes('Beginner')));
    const matchesSearch =
      s.title.toLowerCase().includes(searchLower) ||
      s.description.toLowerCase().includes(searchLower) ||
      s.themes.some(t => t.toLowerCase().includes(searchLower));
    const matchesTheme =
      selectedTheme === '' || s.themes.includes(selectedTheme);
    return matchesTab && matchesSearch && matchesTheme;
  });

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline">The Scripture Library</h1>
        <p className="text-xl text-muted-foreground mt-4 max-w-4xl mx-auto">
         Advaita Vedanta is not just philosophy — it is Self-revelation. These are not texts to read — they are keys to freedom.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center mb-8 gap-4">
        <div className="relative w-full md:w-2/3 lg:w-1/2">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search by title or theme (e.g. Brahman, Maya)..."
            className="pl-10 text-base"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

       <div className="flex flex-wrap justify-center gap-2 mb-8">
        {allThemes.map(theme => (
          <Badge
            key={theme}
            variant={selectedTheme === theme ? 'default' : 'secondary'}
            onClick={() => handleThemeChange(theme)}
            className="cursor-pointer transition-colors text-sm py-1 px-3"
          >
            {theme}
          </Badge>
        ))}
        {selectedTheme && (
            <Button variant="ghost" size="sm" onClick={() => setSelectedTheme('')}>Clear Filter</Button>
        )}
      </div>

      <Tabs
        value={activeTab}
        onValueChange={(value) => setActiveTab(value)}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 md:w-fit mx-auto">
          <TabsTrigger value="All">All Texts</TabsTrigger>
          <TabsTrigger value="Introductory">Beginner</TabsTrigger>
          <TabsTrigger value="Treatise">Treatises</TabsTrigger>
          <TabsTrigger value="Dialogue">Dialogues</TabsTrigger>
          <TabsTrigger value="Poetic Work">Poetic Works</TabsTrigger>
        </TabsList>

        <div className="mt-8">
            {filteredScriptures.length > 0 ? (
                 <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredScriptures.map((scripture) => (
                    <Dialog key={scripture.id}>
                        <DialogTrigger asChild>
                        <Card className="cursor-pointer hover:shadow-primary/20 transition-all duration-300 bg-background/80 flex flex-col h-full group">
                            <CardHeader>
                            <div className="flex justify-between items-start mb-2">
                                <BookText className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                                <Badge variant="secondary">{scripture.category}</Badge>
                            </div>
                            <CardTitle className="font-headline">{scripture.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow flex flex-col">
                              <CardDescription className="flex-grow">{scripture.description}</CardDescription>
                              {scripture.highlightQuote && (
                                <blockquote className="border-l-2 border-accent pl-3 mt-4 text-sm italic">
                                  <p>&ldquo;{scripture.highlightQuote}&rdquo;</p>
                                </blockquote>
                              )}
                            </CardContent>
                        </Card>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[625px]">
                          <DialogHeader>
                            <DialogTitle className="font-headline text-2xl text-primary">{scripture.title}</DialogTitle>
                            <div className="text-sm text-muted-foreground pt-1 flex flex-wrap gap-2">
                               <Badge variant="outline">{scripture.category}</Badge>
                               <Badge variant="outline">{scripture.level}</Badge>
                               <Badge variant="outline">{scripture.verseCount} Verses</Badge>
                            </div>
                          </DialogHeader>
                          <ScrollArea className="max-h-[70vh] mt-4">
                            <div className="prose prose-lg p-4 dark:prose-invert max-w-none">
                              <h3 className="font-headline mt-6 mb-2 flex items-center gap-2"><Brain className="text-accent" /> Core Idea</h3>
                              <p className="text-muted-foreground">{scripture.coreIdea}</p>

                              <h3 className="font-headline mt-6 mb-2 flex items-center gap-2"><BookOpen className="text-accent" /> Full Description</h3>
                              <p className="text-muted-foreground">{scripture.fullDescription}</p>

                              <h3 className="font-headline mt-6 mb-2">Key Themes</h3>
                              <div className="flex flex-wrap gap-2 mb-6">
                                  {scripture.themes.map(theme => <Badge key={theme} variant="secondary">{theme}</Badge>)}
                              </div>
                              
                              <h3 className="font-headline mt-6 mb-2">Highlight</h3>
                               <blockquote className="border-l-4 border-primary pl-4 my-4 italic">
                                {scripture.content.example && <p className="text-xl font-['Tiro_Devanagari_Sanskrit'] not-italic">{scripture.content.example.sanskrit}</p>}
                                <p className="text-base">{scripture.highlightQuote}</p>
                              </blockquote>

                              <Card className="mt-8 bg-muted/50">
                                <CardHeader>
                                  <CardTitle className="text-lg">Resources</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                  {scripture.audioAvailable && (
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                      <Headphones className="w-4 h-4 text-green-500" />
                                      <span>Audio Recitation Available</span>
                                    </div>
                                  )}
                                  {scripture.downloadable && (
                                     <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                      <Download className="w-4 h-4 text-blue-500" />
                                      <span>PDF Download Available</span>
                                    </div>
                                  )}
                                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <CheckCircle className="w-4 h-4 text-primary" />
                                    <span>Supports: {scripture.languageSupport.join(', ')}</span>
                                  </div>
                                </CardContent>
                              </Card>
                            </div>
                          </ScrollArea>
                        </DialogContent>
                    </Dialog>
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <p className="text-muted-foreground text-lg">No scriptures found matching your criteria.</p>
                    <p className="text-sm text-muted-foreground">Try adjusting your search or filters.</p>
                </div>
            )}
        </div>
      </Tabs>
      <div className="text-center mt-16 border-t pt-8">
          <h2 className="text-2xl font-headline font-bold">A Living Tradition</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-4xl mx-auto">
             These words are not just to be read — they are to be lived. Read slowly. Reflect deeply. Realize fully.
          </p>
      </div>
    </div>
  );
}

    
