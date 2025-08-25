import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  { 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" className="text-primary" />
        <circle cx="9" cy="7" r="4" className="text-primary" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" className="text-primary opacity-30" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" className="text-primary opacity-30" />
      </svg>
    ), 
    title: 'Ügyfélkezelés (CRM)', 
    description: 'Minden ügyféladat egy helyen, könnyen elérhetően.' 
  },
  { 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" className="text-primary opacity-30" />
        <polyline points="14 2 14 8 20 8" className="text-primary" />
        <line x1="16" y1="13" x2="8" y2="13" className="text-primary" />
        <line x1="16" y1="17" x2="8" y2="17" className="text-primary" />
        <polyline points="10 9 9 9 8 9" className="text-primary" />
      </svg>
    ), 
    title: 'Digitális Munkalapok', 
    description: 'Hozzon létre és kezeljen munkalapokat papír nélkül.' 
  },
  { 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" className="text-primary opacity-30" />
        <polyline points="14 2 14 8 20 8" className="text-primary" />
        <line x1="12" y1="18" x2="12" y2="12" className="text-primary" />
        <line x1="9" y1="15" x2="15" y2="15" className="text-primary" />
      </svg>
    ), 
    title: 'Árajánlat- és Teljesítésigazolás', 
    description: 'Készítsen profi dokumentumokat percek alatt.' 
  },
  { 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" className="text-primary opacity-30"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" className="text-primary"></path>
      </svg>
    ), 
    title: 'Készletnyilvántartás', 
    description: 'Tudja mindig, miből mennyi van raktáron.' 
  },
  { 
    icon: (
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <line x1="12" x2="12" y1="20" y2="4" className="text-primary opacity-30"></line>
        <polyline points="18 10 12 4 6 10" className="text-primary opacity-30"></polyline>
        <path d="M12 12v8" className="text-primary"></path>
        <path d="M18 14v-4h4" className="text-primary"></path>
        <path d="M6 10V6H2" className="text-primary"></path>
      </svg>
    ), 
    title: 'Kiadáskövetés', 
    description: 'Kövesse nyomon üzleti kiadásait egyszerűen.' 
  },
  { 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" className="text-primary opacity-30" />
        <line x1="16" y1="2" x2="16" y2="6" className="text-primary" />
        <line x1="8" y1="2" x2="8" y2="6" className="text-primary" />
        <line x1="3" y1="10" x2="21" y2="10" className="text-primary" />
      </svg>
    ), 
    title: 'Naptár Integráció', 
    description: 'Szinkronizálja munkáit a naptárával.' 
  },
  { 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" className="text-primary opacity-30" />
        <path d="M22 12A10 10 0 0 0 12 2v10z" className="text-primary" />
      </svg>
    ), 
    title: 'Részletes Jelentések', 
    description: 'Nyerjen betekintést vállalkozása teljesítményébe.' 
  },
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
                    <div className="w-16 h-16 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0">
                        {feature.icon}
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