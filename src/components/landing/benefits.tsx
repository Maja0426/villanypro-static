import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Briefcase, BarChart2 } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Időmegtakarítás',
    description: 'Kevesebb adminisztráció, több elvégzett munka. Automatizálja a papírmunkát és a nyilvántartást.',
  },
  {
    icon: Briefcase,
    title: 'Professzionalizmus',
    description: 'Nyűgözze le ügyfeleit digitális árajánlatokkal és teljesítésigazolásokkal.',
  },
  {
    icon: BarChart2,
    title: 'Átláthatóság',
    description: 'Lássa tisztán pénzügyeit. Kövesse bevételeit, kiadásait és készletét valós időben.',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 md:py-24 bg-muted/30 dark:bg-muted/10">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Miért a VillanyPro a legjobb választás?</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="text-center shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <CardTitle className="font-headline">{benefit.title}</CardTitle>
              </CardHeader>
              <CardDescription className="px-6 pb-6">
                {benefit.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
