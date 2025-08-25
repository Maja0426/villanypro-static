import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

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
  },
  {
    name: 'Tóth László',
    title: 'Villamosmérnök',
    quote: 'A jelentések és a pénzügyi kimutatások aranyat érnek. Végre pontosan látom a vállalkozásom teljesítményét, ami segít a jobb döntések meghozatalában. Csak ajánlani tudom!',
    avatar: 'https://placehold.co/100x100.png',
    avatarHint: 'man professional'
  },
  {
    name: 'Varga Éva',
    title: 'Frissen végzett villanyszerelő',
    quote: 'Pályakezdőként hatalmas segítség, hogy egy ilyen modern eszközzel indulhatok. Nem kell a papírozással bajlódnom, így a szakmai fejlődésre koncentrálhatok. Nagyon felhasználóbarát!',
    avatar: 'https://placehold.co/100x100.png',
    avatarHint: 'woman smiling'
  },
    {
    name: 'Horváth Gábor',
    title: 'Több fős csapatot irányít',
    quote: 'A Pro csomag a csapatok funkcióval tökéletes megoldás számunkra. Mindenki látja a saját feladatait, a készlet pedig központi, így nincsenek többé félreértések.',
    avatar: 'https://placehold.co/100x100.png',
    avatarHint: 'man glasses'
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
        <div 
          className="relative mt-12 w-full overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
          }}
        >
          <div className="flex min-w-full w-max flex-nowrap animate-scroll">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="p-6 w-[380px] shrink-0 mx-4">
                <CardContent className="p-0">
                  <p className="text-muted-foreground mb-6 h-32">"{testimonial.quote}"</p>
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
      </div>
    </section>
  );
}
