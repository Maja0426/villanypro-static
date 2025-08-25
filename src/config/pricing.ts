
export type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular: boolean;
  cta: string;
  isAvailable: boolean;
  href?: string;
};

export const plans: Plan[] = [
  {
    name: 'Free',
    price: '0 Ft',
    period: '/ hó',
    description: 'Induló vállalkozásoknak és kipróbálásra.',
    features: ['5 ügyfél / hó', '5 munkalap / hó', 'Naptár integráció', 'Árajánlat készítés', 'Teljesítés igazolás', 'Alap funkciók'],
    isPopular: false,
    cta: 'Kipróbálom',
    isAvailable: true,
    href: 'https://app.villanypro.hu/register',
  },
  {
    name: 'Basic',
    price: '3 990 Ft',
    period: '/ hó',
    description: 'Növekvő vállalkozásoknak és egyéni vállalkozóknak.',
    features: ['Minden ami a Free-ben', '100 ügyfél / hó', '100 munkalap / hó', 'Készlet nyilvántartás', 'Pénzügyi kimutatások', 'Email támogatás'],
    isPopular: true,
    cta: 'Választom',
    isAvailable: false,
  },
  {
    name: 'Pro',
    price: '7 990 Ft',
    period: '/ hó',
    description: 'Csapatoknak és nagyobb megbízásokhoz.',
    features: ['Minden ami a Basic-ben', 'Korlátlan ügyfél', 'Korlátlan munkalap', 'Szerelő csapatok támogatása'],
    isPopular: false,
    cta: 'Választom',
    isAvailable: false,
  },
];
