
'use client';

import type { Metadata } from 'next';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Settings, Palette, ListTree, Text, Info, Check } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';

// export const metadata: Metadata = {
//   title: 'Settings',
//   description: 'Personalize the look, feel, and rhythm of your spiritual journey. Customize themes, font sizes, and other preferences.',
// };


const themes = [
  {
    name: 'Default Light',
    id: 'light',
    label: '🟫 Tapovana',
    description: 'Earthy & Traditional',
    colors: ['#D9BFA9', '#A66321', '#5A6657'],
  },
  {
    name: 'Default Dark',
    id: 'dark',
    label: '🟪 Jnana Deepa',
    description: 'Midnight & Gold',
    colors: ['#171923', '#FFD700', '#718096'],
  },
  {
    name: 'Himalayan Blue',
    id: 'himalayan-blue',
    label: '🟦 Himalayan Blue',
    description: 'Cool & Calm',
    colors: ['#EBF8FF', '#3182CE', '#A0AEC0'],
  },
  {
    name: 'Agni Mandala',
    id: 'agni-mandala',
    label: '🟥 Agni Mandala',
    description: 'Vibrant & Fiery',
    colors: ['#FFF5F5', '#E53E3E', '#ED8936'],
  },
];

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [fontSize, setFontSize] = useState('default');
  const [scriptDisplay, setScriptDisplay] = useState('sanskrit-transliteration');

  useEffect(() => {
    setMounted(true);
    const root = window.document.documentElement;
    root.classList.remove('text-lg', 'text-xl');
    if (fontSize === 'large') {
      root.classList.add('text-lg');
    } else if (fontSize === 'xlarge') {
      root.classList.add('text-xl');
    }
  }, [fontSize]);

  const handleThemeChange = (newTheme: string) => {
    const root = window.document.documentElement;
    themes.forEach((t) => root.classList.remove(`theme-${t.id}`));
  
    if (newTheme !== 'light' && newTheme !== 'dark') {
      root.classList.add(`theme-${newTheme}`);
    }
    setTheme(newTheme);
  };
  

  if (!mounted) {
    return (
      <div className="container mx-auto max-w-4xl p-4 md:p-8">
        <div className="text-center mb-12">
          <Skeleton className="h-16 w-16 rounded-full mx-auto mb-4" />
          <Skeleton className="h-10 w-64 mx-auto" />
          <Skeleton className="h-6 w-96 mx-auto mt-2" />
        </div>
        <Skeleton className="h-96 w-full" />
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-4xl p-4 md:p-8">
      <div className="text-center mb-12">
        <Settings className="w-16 h-16 mx-auto text-primary mb-4" />
        <h1 className="text-4xl font-bold font-headline">Customize Your Experience</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Personalize the look, feel, and rhythm of your spiritual journey.
        </p>
      </div>

      <Accordion type="multiple" defaultValue={['theme', 'preferences']} className="w-full space-y-4">
        <AccordionItem value="theme">
          <Card>
            <AccordionTrigger className="p-6">
              <div className="flex items-center gap-4">
                <Palette className="w-6 h-6 text-primary" />
                <div>
                  <h2 className="text-xl font-headline font-semibold">Theme & Aesthetics</h2>
                  <p className="text-sm text-muted-foreground">Choose a color palette that calms and inspires you.</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-6 pt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {themes.map((t) => (
                  <Button
                    key={t.id}
                    variant={theme === t.id ? 'default' : 'outline'}
                    onClick={() => handleThemeChange(t.id)}
                    className="h-auto justify-start p-4"
                  >
                    <div className="flex items-center w-full">
                      <div className="flex-grow text-left">
                        <p className="font-semibold">{t.label}</p>
                        <p className="text-xs text-muted-foreground">{t.description}</p>
                        <div className="flex gap-1 mt-2">
                          {t.colors.map(color => <div key={color} className="h-4 w-4 rounded-full" style={{ backgroundColor: color }} />)}
                        </div>
                      </div>
                      {theme === t.id && <Check className="w-5 h-5 ml-4 text-primary-foreground" />}
                    </div>
                  </Button>
                ))}
              </div>
            </AccordionContent>
          </Card>
        </AccordionItem>

        <AccordionItem value="preferences">
          <Card>
             <AccordionTrigger className="p-6">
              <div className="flex items-center gap-4">
                <ListTree className="w-6 h-6 text-primary" />
                <div>
                  <h2 className="text-xl font-headline font-semibold">General Preferences</h2>
                  <p className="text-sm text-muted-foreground">Adjust readability and content display.</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-6 pt-0 space-y-6">
               <div className="flex items-center justify-between">
                <Label htmlFor="font-size" className="text-base flex items-center gap-2"><Text className="w-5 h-5" /> Font Size</Label>
                <Select value={fontSize} onValueChange={setFontSize}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select font size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Default</SelectItem>
                    <SelectItem value="large">Large</SelectItem>
                    <SelectItem value="xlarge">Extra Large</SelectItem>
                  </SelectContent>
                </Select>
              </div>
               <div className="flex items-center justify-between">
                <Label htmlFor="script-display" className="text-base flex items-center gap-2"><Text className="w-5 h-5" /> Script Display</Label>
                <Select value={scriptDisplay} onValueChange={setScriptDisplay}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select display mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sanskrit-transliteration">Devanagari + Transliteration</SelectItem>
                    <SelectItem value="english-only">English Only</SelectItem>
                    <SelectItem value="sanskrit-only">Sanskrit Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>
               <div className="flex items-center justify-between">
                  <Label htmlFor="audio-autoplay" className="text-base">Audio Autoplay</Label>
                  <Switch id="audio-autoplay" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="high-contrast" className="text-base">High Contrast Text</Label>
                  <Switch id="high-contrast" />
                </div>
            </AccordionContent>
          </Card>
        </AccordionItem>

        <AccordionItem value="about">
           <Card>
            <AccordionTrigger className="p-6">
              <div className="flex items-center gap-4">
                <Info className="w-6 h-6 text-primary" />
                <div>
                  <h2 className="text-xl font-headline font-semibold">About This App</h2>
                   <p className="text-sm text-muted-foreground">Version, features, and other details.</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-6 pt-0 text-muted-foreground">
              <p><strong>App Version:</strong> v1.0.0</p>
              <p><strong>Launch Date:</strong> 13 July 2024</p>
              <h3 className="font-semibold text-foreground mt-4 mb-2">Key Features:</h3>
              <ul className="list-disc list-inside space-y-1">
                  <li>Explore Shankara’s life, teachings, and commentaries</li>
                  <li>Listen to devotional hymns and perform digital puja</li>
                  <li>Discover sacred temples and revived Kshetras</li>
                  <li>Ask reflective questions via the AI Wisdom tool</li>
                  <li>Interactive learning through themed sections and scripture library</li>
              </ul>
            </AccordionContent>
          </Card>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
