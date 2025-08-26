'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Logo from '@/components/logo';
import { ThemeToggle } from '../theme-toggle';

const navLinks = [
  { name: 'Funkciók', href: '/#features' },
  { name: 'Hogyan működik?', href: '/#how-it-works' },
  { name: 'Előnyök', href: '/#benefits' },
  { name: 'Vélemények', href: '/#testimonials' },
  { name: 'GYIK', href: '/#faq' },
  { name: 'Árak', href: '/#pricing' },
  { name: 'Súgó', href: '/sugo' },
];

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn("transition-colors hover:text-foreground/80 text-foreground/60", {
                  "pointer-events-none": !isHomePage && link.href.startsWith('/#')
              })}
              onClick={(e) => {
                if (!isHomePage && link.href.startsWith('/#')) {
                  e.preventDefault();
                  window.location.href = link.href;
                }
              }}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
           <ThemeToggle />
          <Button variant="ghost" asChild>
            <a href="https://app.villanypro.hu" target="_blank" rel="noopener noreferrer">Bejelentkezés</a>
          </Button>
          <Button asChild>
            <a href="https://app.villanypro.hu/register" target="_blank" rel="noopener noreferrer">Regisztráció</a>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-4 w-4" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between border-b pb-4">
                 <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                    <Logo />
                </Link>
                <ThemeToggle onThemeChange={() => setOpen(false)} />
              </div>
              <div className="flex flex-col gap-4 py-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="mt-auto flex flex-col gap-2 border-t pt-4">
                 <Button variant="ghost" asChild>
                    <a href="https://app.villanypro.hu" target="_blank" rel="noopener noreferrer">Bejelentkezés</a>
                </Button>
                <Button asChild>
                    <a href="https://app.villanypro.hu/register" target="_blank" rel="noopener noreferrer">Regisztráció</a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
