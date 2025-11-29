
'use client';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Mail, Phone, Twitter, Instagram, Github, Send } from 'lucide-react';
import Link from 'next/link';

// export const metadata: Metadata = {
//   title: 'Contact Us',
//   description: "Get in touch with the Shankara Legacy team. We're here to help and answer any questions you might have.",
// };

const directContacts = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'For inquiries, support, or feedback, drop us an email.',
    value: 'astroman6569@gmail.com',
    cta: 'Send Email',
    href: 'mailto:astroman6569@gmail.com',
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak to us directly for immediate assistance during business hours.',
    value: '+91 8102116569',
    cta: 'Call Now',
    href: 'tel:+918102116569',
  },
];

const socialContacts = [
  {
    icon: Twitter,
    title: 'Twitter / X',
    username: '@Sathyamsarthak',
    cta: 'Follow on X',
    href: 'https://twitter.com/Sathyamsarthak',
  },
  {
    icon: Instagram,
    title: 'Instagram',
    username: '@srishikharji',
    cta: 'Follow on Instagram',
    href: 'https://instagram.com/srishikharji',
  },
  {
    icon: Github,
    title: 'GitHub',
    username: 'astromanreal',
    cta: 'Follow on GitHub',
    href: 'https://github.com/astromanreal',
  },
];

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-4xl p-4 md:p-8">
      <div className="text-center mb-12">
        <Send className="w-16 h-16 mx-auto text-primary mb-4" />
        <h1 className="text-4xl font-bold font-headline">Get in Touch</h1>
        <p className="text-xl text-muted-foreground mt-2 max-w-2xl mx-auto">
          We&apos;re here to help and answer any question you might have. We look
          forward to hearing from you.
        </p>
      </div>

      <div className="space-y-12">
        <div>
          <h2 className="text-2xl font-headline font-bold text-center mb-8">
            Direct Contact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {directContacts.map((contact) => (
              <Card key={contact.title} className="text-center">
                <CardHeader className="items-center">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <contact.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline">{contact.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription>{contact.description}</CardDescription>
                  <p className="font-semibold text-accent-foreground">
                    {contact.value}
                  </p>
                  <Button asChild>
                    <Link href={contact.href}>{contact.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-headline font-bold text-center mb-8">
            Connect Online
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialContacts.map((social) => (
              <Card key={social.title} className="text-center">
                <CardHeader className="items-center">
                   <div className="p-3 bg-primary/10 rounded-full">
                    <social.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline">{social.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                   <p className="font-semibold text-accent-foreground">
                    {social.username}
                  </p>
                  <Button asChild variant="outline">
                    <Link href={social.href} target="_blank" rel="noopener noreferrer">
                      {social.cta}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
