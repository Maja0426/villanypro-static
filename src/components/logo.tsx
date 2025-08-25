import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image src="/logo.png" alt="VillanyPro Logo" width={24} height={24} className="h-6 w-6" />
      <span className="font-bold font-headline text-xl">VillanyPro</span>
    </div>
  );
}
