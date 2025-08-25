
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
    features: ['5 ügyfél', '10 munkalap / hó', 'Alap funkciók'],
    isPopular: false,
    cta: 'Kipróbálom',
    isAvailable: true,
    href: 'https://app.villanypro.hu/register',
  },
  {
    name: 'Basic',
    price: '4 990 Ft',
    period: '/ hó',
    description: 'Növekvő vállalkozásoknak és egyéni vállalkozóknak.',
    features: ['Korlátlan ügyfél', '50 munkalap / hó', 'Minden funkció', 'Email támogatás'],
    isPopular: true,
    cta: 'Választom',
    isAvailable: false,
  },
  {
    name: 'Pro',
    price: '9 990 Ft',
    period: '/ hó',
    description: 'Csapatoknak és nagyobb megbízásokhoz.',
    features: ['Minden a Basic-ben', 'Korlátlan munkalap', 'Telefonos támogatás'],
    isPopular: false,
    cta: 'Választom',
    isAvailable: false,
  },
];
