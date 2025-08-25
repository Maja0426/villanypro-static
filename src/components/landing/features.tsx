import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, FileText, FilePlus2, Archive, TrendingDown, Calendar, PieChart } from 'lucide-react';

const features = [
  { icon: Users, title: 'Ügyfélkezelés (CRM)', description: 'Minden ügyféladat egy helyen, könnyen elérhetően.' },
  { icon: FileText, title: 'Digitális Munkalapok', description: 'Hozzon létre és kezeljen munkalapokat papír nélkül.' },
  { icon: FilePlus2, title: 'Árajánlat- és Teljesítésigazolás', description: 'Készítsen profi dokumentumokat percek alatt.' },
  { icon: Archive, title: 'Készletnyilvántartás', description: 'Tudja mindig, miből mennyi van raktáron.' },
  { icon: TrendingDown, title: 'Kiadáskövetés', description: 'Kövesse nyomon üzleti kiadásait egyszerűen.' },
  { icon: Calendar, title: 'Naptár Integráció', description: 'Szinkronizálja munkáit a naptárával.' },
  { icon: PieChart, title: 'Részletes Jelentések', description: 'Nyerjen betekintést vállalkozása teljesítményébe.' },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">A VillanyPro legfontosabb funkciói</h2>
          <p className="text-muted-foreground text-lg">
            Minden eszközt megadunk, amire szüksége lehet a hatékony és modern munkavégzéshez.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => (
            <Card key={feature.title} className="flex flex-col p-6">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0">
                        <feature.icon className="w-6 h-6" />
                    </div>
                    <div>
                        <CardTitle className="font-headline mb-2">{feature.title}</CardTitle>
                        <CardDescription>{feature.description}</CardDescription>
                    </div>
                </div>
            </Card>
          ))}
           <Card className="md:col-span-2 lg:col-span-1 flex flex-col p-6 bg-primary/10 text-center items-center justify-center">
                <CardTitle className="font-headline mb-2 text-primary">És még sok más...</CardTitle>
                <CardDescription>Folyamatosan fejlesztjük a VillanyPro-t új funkciókkal az Ön visszajelzései alapján.</CardDescription>
            </Card>
        </div>
      </div>
    </section>
  );
}
