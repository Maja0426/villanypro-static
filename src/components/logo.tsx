import { Zap } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Zap className="h-6 w-6 text-primary" />
      <span className="font-bold font-headline text-xl">VillanyPro</span>
    </div>
  );
}
