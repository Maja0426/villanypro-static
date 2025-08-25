import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: 'Kovács János',
    title: 'Egyéni vállalkozó',
    quote: 'A VillanyPro-val végre megszabadultam a papírhalmaztól. Az ügyfeleim imádják a digitális árajánlatokat, sokkal profibbnak tűnök. Heti több órát spórolok az adminisztráción.',
    avatar: 'https://placehold.co/100x100.png',
    avatarHint: 'man portrait'
  },
  {
    name: 'Nagy Mária',
    title: 'Villanyszerelő',
    quote: 'Kezdetben féltem a digitális átállástól, de a VillanyPro annyira egyszerű és átlátható, hogy pár nap alatt belejöttem. A készletkezelő funkció a kedvencem, mindig tudom, mi van raktáron.',
    avatar: 'https://placehold.co/100x100.png',
    avatarHint: 'woman portrait'
  },
  {
    name: 'Szabó Péter',
    title: 'Cégvezető, Villanyszerelő Kft.',
    quote: 'A csapatom munkáját sokkal könnyebb követni a VillanyPro segítségével. A közös munkalapok és a naptár integráció rendet tett a káoszban. Az ügyfelek is elégedettebbek, mert mindent pontosan dokumentálunk.',
    avatar: 'https://placehold.co/100x100.png',
    avatarHint: 'man portrait professional'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Mit mondanak rólunk az ügyfeleink?</h2>
          <p className="text-muted-foreground text-lg">
            Büszkék vagyunk rá, hogy villanyszerelők százainak segítünk a mindennapi munkában.
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="p-6">
              <CardContent className="p-0">
                <p className="text-muted-foreground mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.avatarHint} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
