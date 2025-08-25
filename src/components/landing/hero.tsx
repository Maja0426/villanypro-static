import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden py-20 md:py-32">
       <div 
        className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-100 via-sky-100 to-cyan-100 dark:from-blue-950/30 dark:via-sky-950/30 dark:to-cyan-950/30"
        style={{
            background: 'radial-gradient(circle at top left, var(--tw-gradient-from), var(--tw-gradient-to)), radial-gradient(circle at bottom right, var(--tw-gradient-from), var(--tw-gradient-to))',
            '--tw-gradient-from': '#7DF9FF20',
            '--tw-gradient-to': '#EBF9FF00'
        }}
      ></div>
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tighter">
            Minden, amire egy villanyszerelőnek szüksége van –{' '}
            <span className="text-primary">egy helyen.</span>
          </h1>
          <p className="max-w-xl mx-auto md:mx-0 text-lg text-muted-foreground">
            Kezelje ügyfeleit, munkalapjait és pénzügyeit egyszerűen, hogy több ideje maradjon a valódi munkára.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" asChild className="shadow-md hover:shadow-lg transition-shadow">
              <a href="https://app.villanypro.hu/register" target="_blank" rel="noopener noreferrer">Ingyenes kipróbálás</a>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/hero-image.png"
            alt="VillanyPro App bemutató"
            width={600}
            height={400}
            className="rounded-lg shadow-2xl animate-float"
            data-ai-hint="app dashboard"
          />
        </div>
      </div>
    </section>
  );
}
