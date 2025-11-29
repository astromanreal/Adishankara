
import type { LucideIcon } from "lucide-react";

export type JourneyEvent = {
  year: string;
  title: string;
  description: string;
  location: string;
};

export type Scripture = {
  id: string;
  title: string;
  category: 'Dialogue' | 'Treatise' | 'Poetic Work' | 'Introductory' | 'Introductory Treatise';
  description: string;
  fullDescription: string;
  themes: string[];
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  verseCount: number;
  coreIdea: string;
  highlightQuote: string;
  languageSupport: string[];
  audioAvailable: boolean;
  downloadable: boolean;
  content: {
    english: string;
    example?: {
      sanskrit: string;
      english: string;
    };
  };
};

export type StotraVerse = {
  verse_number: number;
  sanskrit: string;
  transliteration_IAST: string;
  hindi_translation: string;
  english_translation: string;
  commentary: string;
};

export type Stotra = {
  id: string;
  slug: string;
  title: {
    sanskrit: string;
    devanagari_alt?: string;
    english: string;
    meaning?: string;
  };
  author: string;
  deity?: string;
  description: string;
  audioSrc: string;
  verses: StotraVerse[];
  purpose: string;
  background?: {
      context: string;
      core_message: string;
  },
  origin_story?: {
    summary: string;
    devotional_message: string;
  },
  refrain?: {
      sanskrit: string;
      meaning_english: string;
  },
  usage_notes: {
    chanting?: string;
    intention: string;
  };
  overall_summary: {
    short: string;
    detailed: string;
  };
};


export type Mantra = {
  id: number | string;
  title: string;
  slug?: string;
  sanskritTitle?: string;
  deity?: string;
  verseCount?: number;
  sanskrit?: string;
  translation: string;
  audioSrc?: string;
};

export type Matha = {
  name: string;
  direction: string;
  location:string;
  veda: string;
  mahavakya: string;
  description: string;
  image: string;
  aiHint: string;
  website: string;
  slug: string;
  details: {
    historicalNotes?: string[];
    architecturalHighlights?: string[];
    guruParampara?: { position: number; name: string; period: string }[];
    sacredFeatures?: { name: string; description: string }[];
  }
};

export type Kshetra = {
  id: string;
  slug: string;
  name: string;
  deity: string;
  location: {
    city: string;
    state: string;
    region: string;
  };
  description: string;
  image: string;
  aiHint: string;
  legacy?: string;
  spiritualSignificance?: string[];
  shankarasContribution?: { [key: string]: string };
  historicalOverview?: string[];
  architecturalDetails?: string[];
  visitInfo?: {
    seasonalAccess?: string;
    accessRoute?: string;
    hours?: string;
  };
  nearbySites?: string[];
  tags?: string[];
  references?: {
    wikipedia?: string;
  };
};


export type Disciple = {
  name: string;
  slug: string;
  title: string;
  transformation: string;
  path: string;
  icon?: LucideIcon;
  matha: string;
  contribution: string;
  legacy: string;
  image: string;
  aiHint: string;
  biography: string;
  keyWorks: string[];
  teachings: string;
};

export type Commentary = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  keyThought: string;
  tags: string[];
  references?: {
    wikipedia?: string;
  };
  excerpts: {
    title: string;
    quote: string;
    sanskrit?: string;
    translation?: string;
    note?: string;
  }[];
};
