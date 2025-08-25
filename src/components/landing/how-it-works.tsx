import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { UserPlus, FileText, Send, BarChart } from 'lucide-react';

const steps = [
  {
    icon: <UserPlus className="w-8 h-8 text-primary" />,
    title: '1. Regisztráció & Profil',
    description: 'Hozza létre fiókját percek alatt, és adja meg a szükséges adatokat a professzionális megjelenéshez.',
  },
  {
    icon: <FileText className="w-8 h-8 text-primary" />,
    title: '2. Ügyfél & Munkalap',
    description: 'Rögzítse ügyfeleit és hozzon létre digitális munkalapokat, hogy minden információ egy helyen legyen.',
  },
  {
    icon: <Send className="w-8 h-8 text-primary" />,
    title: '3. Árajánlat küldése',
    description: 'Generáljon és küldjön digitális árajánlatokat közvetlenül a rendszerből, lenyűgözve ügyfeleit.',
  },
  {
    icon: <BarChart className="w-8 h-8 text-primary" />,
    title: '4. Lezárás & Kimutatások',
    description: 'Zárja le a munkát, készítsen teljesítésigazolást, és kövesse nyomon bevételeit riportok segítségével.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Hogyan működik a VillanyPro?</h2>
          <p className="text-muted-foreground text-lg">
            Négy egyszerű lépés a hatékonyabb munkavégzéshez és a kevesebb adminisztrációhoz.
          </p>
        </div>
        <div className="relative mt-12">
            <div className="absolute hidden md:block top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2"></div>
            <div className="grid md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
                <div key={step.title} className="text-center">
                    <div className="relative">
                        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-background relative z-10">
                            {step.icon}
                        </div>
                    </div>
                    <h3 className="font-headline text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
}
