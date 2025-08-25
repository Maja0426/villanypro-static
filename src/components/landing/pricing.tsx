import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { plans } from '@/config/pricing';

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
                {plan.isAvailable ? (
                    <Button className="w-full" variant={plan.isPopular ? 'default' : 'outline'} asChild>
                        <a href={plan.href || '#'} target="_blank" rel="noopener noreferrer">
                            {plan.cta}
                        </a>
                    </Button>
                ) : (
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button className="w-full" variant={plan.isPopular ? 'default' : 'outline'}>{plan.cta}</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                                <Info className="w-8 h-8" />
                            </div>
                        </div>
                        <AlertDialogTitle className="text-center font-headline text-2xl">Hamarosan elérhető!</AlertDialogTitle>
                        <AlertDialogDescription className="text-center">
                          Ez a csomag jelenleg fejlesztés alatt áll. Keményen dolgozunk, hogy minél hamarabb az Ön rendelkezésére bocsássuk!
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogAction className="w-full">Rendben</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
