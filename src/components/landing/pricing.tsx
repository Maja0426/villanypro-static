import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: 'Free',
    price: '0 Ft',
    period: '/ hó',
    description: 'Induló vállalkozásoknak és kipróbálásra.',
    features: ['5 ügyfél', '10 munkalap / hó', 'Alap funkciók'],
    isPopular: false,
  },
  {
    name: 'Basic',
    price: '4 990 Ft',
    period: '/ hó',
    description: 'Növekvő vállalkozásoknak és egyéni vállalkozóknak.',
    features: ['Korlátlan ügyfél', '50 munkalap / hó', 'Minden funkció', 'Email támogatás'],
    isPopular: true,
  },
  {
    name: 'Pro',
    price: '9 990 Ft',
    period: '/ hó',
    description: 'Csapatoknak és nagyobb megbízásokhoz.',
    features: ['Minden a Basic-ben', 'Korlátlan munkalap', 'Telefonos támogatás'],
    isPopular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-24 bg-muted/30 dark:bg-muted/10">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Válassza az Önnek megfelelő csomagot</h2>
          <p className="text-muted-foreground text-lg">
            Egyszerű és átlátható árazás, nincsenek rejtett költségek. Válasszon éves fizetést és spóroljon 2 hónapot!
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.name} className={cn('flex flex-col', plan.isPopular && 'border-primary shadow-lg')}>
                {plan.isPopular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Legnépszerűbb</Badge>
                )}
              <CardHeader>
                <CardTitle className="font-headline">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div>
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.isPopular ? 'default' : 'outline'} asChild>
                    <a href="https://app.villanypro.hu" target="_blank" rel="noopener noreferrer">
                        {plan.name === 'Free' ? 'Kipróbálom' : 'Választom'}
                    </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
