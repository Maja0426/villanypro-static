import Link from 'next/link';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4 items-start">
                <Link href="/" className="flex items-center gap-2">
                    <Logo />
                </Link>
                <p className="text-sm text-muted-foreground">
                    &copy; {currentYear} VillanyPro. Minden jog fenntartva.
                </p>
            </div>
            <div className="grid grid-cols-2 md:col-span-2 gap-8 text-sm">
                <div>
                    <h4 className="font-semibold mb-3">Oldaltérkép</h4>
                    <ul className="space-y-2">
                        <li><Link href="#hero" className="text-muted-foreground hover:text-foreground">Főoldal</Link></li>
                        <li><Link href="#features" className="text-muted-foreground hover:text-foreground">Funkciók</Link></li>
                        <li><Link href="#benefits" className="text-muted-foreground hover:text-foreground">Előnyök</Link></li>
                        <li><Link href="#pricing" className="text-muted-foreground hover:text-foreground">Árak</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-3">Jogi információk</h4>
                    <ul className="space-y-2">
                        <li><Link href="#" className="text-muted-foreground hover:text-foreground">Adatkezelési tájékoztató</Link></li>
                        <li><Link href="#" className="text-muted-foreground hover:text-foreground">ÁSZF</Link></li>
                        <li><Link href="#" className="text-muted-foreground hover:text-foreground">Impresszum</Link></li>
                        <li><Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground">Süti beállítások</Button></li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
}
