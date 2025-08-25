import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const benefits = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8"
      >
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" className="text-primary opacity-30" />
        <path d="M12 6v6l4 2" className="text-primary" />
      </svg>
    ),
    title: 'Időmegtakarítás',
    description: 'Kevesebb adminisztráció, több elvégzett munka. Automatizálja a papírmunkát és a nyilvántartást.',
  },
  {
    icon: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8"
        >
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" className="text-primary opacity-30" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" className="text-primary" />
        </svg>
    ),
    title: 'Professzionalizmus',
    description: 'Nyűgözze le ügyfeleit digitális árajánlatokkal és teljesítésigazolásokkal.',
  },
  {
    icon: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8"
        >
            <path d="M18 20V10m-6 10V4M6 20v-4" className="text-primary" />
            <path d="M2 20h20" className="text-primary opacity-30" />
        </svg>
    ),
    title: 'Átláthatóság',
    description: 'Lássa tisztán pénzügyeit. Kövesse bevételeit, kiadásait és készletét valós időben.',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 md:py-24 bg-muted/30 dark:bg-muted/10">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Adminisztráljon kevesebbet, keressen többet!</h2>
          <p className="text-lg text-muted-foreground">A VillanyPro leveszi a válláról az adminisztrációs terheket, hogy Ön arra fókuszálhasson, amihez a legjobban ért: a villanyszerelésre.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="text-center shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
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
