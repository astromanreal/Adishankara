import type { Metadata } from 'next';
import { DeviIcon, GaneshaIcon, ShivaIcon, VishnuIcon } from '@/components/icons';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Sun } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Digital Panchayatana Puja',
  description: 'Perform virtual worship of the five-fold divine — Shiva, Vishnu, Devi, Surya, and Ganesha. Worship the One in Five, and the Five in One.',
};

const deities = [
  {
    name: 'Shiva',
    Icon: ShivaIcon,
    position: 'col-start-2 row-start-2',
    mantra: 'ॐ नमः शिवाय (Om Namah Shivaya)',
    description: 'The Destroyer and Transformer. Worshipped in the form of the Lingam, He represents the formless, eternal consciousness.',
  },
  {
    name: 'Vishnu',
    Icon: VishnuIcon,
    position: 'col-start-1 row-start-1',
    mantra: 'ॐ नमो भगवते वासुदेवाय (Om Namo Bhagavate Vasudevaya)',
    description: 'The Preserver. Worshipped in the form of the Saligrama stone, He maintains cosmic order and righteousness.',
  },
  {
    name: 'Devi',
    Icon: DeviIcon,
    position: 'col-start-3 row-start-1',
    mantra: 'ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे (Om Aim Hreem Kleem Chamundayai Viche)',
    description: 'The Divine Mother. Worshipped as Shakti, the universal energy, in various forms.',
  },
  {
    name: 'Surya',
    Icon: Sun,
    position: 'col-start-1 row-start-3',
    mantra: 'ॐ घृणि सूर्याय नमः (Om Ghrini Suryaya Namah)',
    description: 'The Sun God. Worshipped as the source of light, life, and knowledge.',
  },
  {
    name: 'Ganesha',
    Icon: GaneshaIcon,
    position: 'col-start-3 row-start-3',
    mantra: 'ॐ गं गणपतये नमः (Om Gam Ganapataye Namah)',
    description: 'The Remover of Obstacles. Worshipped first in any ceremony to ensure success and auspicious beginnings.',
  },
];

export default function PujaPage() {
  return (
    <div className="container mx-auto p-4 md:p-8 flex flex-col items-center justify-center min-h-[calc(100vh-120px)]">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline text-primary">Digital Panchayatana Puja</h1>
        <p className="text-xl text-muted-foreground mt-2 font-semibold">
          Worship the One in Five, and the Five in One.
        </p>
         <p className="text-md text-muted-foreground mt-4 max-w-2xl mx-auto">
          Click a deity to offer your prayers, hear their mantra, and invoke their blessings. You may choose one, or perform full Panchayatana worship.
        </p>
      </div>

      <div className="w-full max-w-lg">
        <div className="grid grid-cols-3 grid-rows-3 gap-4 aspect-square">
          {deities.map(({ name, Icon, position, mantra, description }) => (
            <div key={name} className={position}>
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="w-full h-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-primary/50 hover:scale-105 bg-background/80">
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                      <Icon className="w-16 h-16 text-primary" />
                      <p className="font-headline mt-2">{name}</p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-4">
                      <Icon className="w-10 h-10 text-primary" />
                      <span className="text-3xl font-headline">{name}</span>
                    </DialogTitle>
                    <DialogDescription className="pt-2 text-base">
                      {description}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <h3 className="font-headline text-lg mb-2">Mantra</h3>
                    <p className="text-2xl text-primary font-semibold font-['Tiro_Devanagari_Sanskrit']">{mantra}</p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </div>
      <p className="text-center mt-8 text-muted-foreground">Click on a deity to offer your prayers.</p>
    </div>
  );
}
