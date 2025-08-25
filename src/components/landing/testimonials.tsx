'use client';

import * as React from 'react';
import Autoplay from "embla-carousel-autoplay";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

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
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section id="testimonials" className="py-20 md:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Mit mondanak rólunk az ügyfeleink?</h2>
          <p className="text-muted-foreground text-lg">
            Büszkék vagyunk rá, hogy villanyszerelők százainak segítünk a mindennapi munkában.
          </p>
        </div>
        <Carousel
          plugins={[plugin.current]}
          className="w-full mt-12"
          opts={{
            align: "start",
            loop: true,
          }}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="p-6 h-full">
                    <CardContent className="p-0 flex flex-col justify-between h-full">
                      <p className="text-muted-foreground mb-6 flex-grow">"{testimonial.quote}"</p>
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
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
