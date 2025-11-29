"use client";

import {
  AudioLines,
  BookHeart,
  BookMarked,
  BrainCircuit,
  Compass,
  Contact,
  HandHeart,
  Home,
  Library,
  Landmark,
  Map,
  MoreVertical,
  Settings,
  Sparkles,
  Sun,
  Moon,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/journey', label: 'Life Journey', icon: Map },
  { href: '/teachings', label: 'Teachings', icon: BookHeart },
  { href: '/library', label: 'Scriptures', icon: Library },
  { href: '/commentaries', label: 'Commentaries', icon: BookMarked },
  { href: '/chanting', label: 'Mantra Library', icon: AudioLines },
  { href: '/puja', label: 'Digital Puja', icon: Sparkles },
  { href: '/mathas', label: 'The Four Mathas', icon: HandHeart },
  { href: '/kshetras', label: 'Sacred Kshetras', icon: Landmark },
  { href: '/disciples', label: 'The Four Disciples', icon: Users },
  { href: '/wisdom', label: 'Wisdom Tool', icon: BrainCircuit },
];

export function MainNav() {
  const { setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="h-6 w-6 text-primary"
            >
              <rect width="256" height="256" fill="none" />
              <path
                d="M148,120l48.2-24.1a8,8,0,0,0,0-14.2L148,57.6V40a8,8,0,0,0-16,0v17.6L83.8,81.7a8,8,0,0,0,0,14.2L132,120v72a8,8,0,0,0,16,0Z"
                opacity="0.2"
                fill="currentColor"
              />
              <path
                d="M196.2,95.9,148,120v16a8,8,0,0,1-16,0V120L83.8,95.9a8,8,0,0,1,0-14.2l48.2-24.1V40a8,8,0,0,1,16,0v17.6l48.2,24.1a8,8,0,0,1,0,14.2Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <line
                x1="140"
                y1="136"
                x2="140"
                y2="216"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <circle cx="140" cy="228" r="12" fill="currentColor" />
            </svg>
            <span className="font-bold font-headline">Shankara Legacy</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/explore">
                <Compass className="h-5 w-5" />
                <span className="sr-only">Explore</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/contact">
                <Contact className="h-5 w-5" />
                <span className="sr-only">Contact</span>
              </Link>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">Settings</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="ml-2">Toggle theme</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem onClick={() => setTheme('light')}>
                        Light
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme('dark')}>
                        Dark
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme('system')}>
                        System
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                 <DropdownMenuItem asChild>
                  <Link href="/settings">Settings</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-5 w-5" />
                  <span className="sr-only">More</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {navItems.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link href={item.href}>
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>
    </header>
  );
}
