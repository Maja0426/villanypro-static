'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { cn } from '@/lib/utils';

const COOKIE_CONSENT_KEY = 'cookie_consent';

type Consent = {
  necessary: boolean;
  statistics: boolean;
  timestamp: number | null;
}

export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [statisticsAllowed, setStatisticsAllowed] = useState(true);

  useEffect(() => {
    try {
      const storedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (storedConsent) {
        setConsent(JSON.parse(storedConsent));
        setShowBanner(false);
      } else {
        setShowBanner(true);
      }
    } catch (error) {
      setShowBanner(true);
    }
  }, []);

  const handleSave = (newConsent: Partial<Consent>) => {
    const consentData: Consent = {
      necessary: true,
      statistics: newConsent.statistics ?? false,
      timestamp: Date.now(),
    };
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentData));
    } catch (error) {
      // Silently fail
    }
    setConsent(consentData);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleAcceptAll = () => {
    handleSave({ statistics: true });
  };
  
  const handleDeclineAll = () => {
    handleSave({ statistics: false });
  };
  
  const handleSaveSettings = () => {
    handleSave({ statistics: statisticsAllowed });
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4">
      <div className="max-w-screen-lg mx-auto">
        <Card className={cn("transition-all duration-300", showBanner ? "animate-in slide-in-from-bottom-10" : "animate-out slide-out-to-bottom-10")}>
          {!showSettings ? (
            <CardHeader>
              <CardTitle className="font-headline text-lg">Weboldalunk sütiket használ</CardTitle>
              <CardDescription>
                A weboldalunkon sütiket (cookie-kat) használunk, hogy a legjobb felhasználói élményt nyújthassuk. A "Süti tájékoztató"-ban többet is megtudhatsz erről.
                {' '}
                <Link href="/suti-tajekoztato" className="underline text-primary">Süti tájékoztató</Link>
              </CardDescription>
              <div className="flex flex-col sm:flex-row gap-2 pt-4">
                <Button onClick={handleAcceptAll}>Összes elfogadása</Button>
                <Button variant="outline" onClick={() => setShowSettings(true)}>Beállítások</Button>
                <Button variant="outline" onClick={handleDeclineAll}>Összes elutasítása</Button>
              </div>
            </CardHeader>
          ) : (
            <>
              <CardHeader>
                <CardTitle className="font-headline text-lg">Süti beállítások</CardTitle>
                <CardDescription>
                  Válaszd ki, mely típusú sütik használatához járulsz hozzá. A beállításokat később bármikor módosíthatod.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Checkbox id="necessary" checked disabled />
                  <Label htmlFor="necessary" className="font-medium">Szükséges sütik</Label>
                  <p className="text-sm text-muted-foreground">Ezek a sütik elengedhetetlenek a weboldal működéséhez, ezért nem kikapcsolhatóak.</p>
                </div>
                 <div className="flex items-center space-x-3">
                  <Checkbox 
                    id="statistics" 
                    checked={statisticsAllowed}
                    onCheckedChange={(checked) => setStatisticsAllowed(Boolean(checked))}
                  />
                  <Label htmlFor="statistics" className="font-medium">Statisztikai sütik</Label>
                   <p className="text-sm text-muted-foreground">Ezek a sütik anonim adatokat gyűjtenek a weboldal használatáról, segítve a teljesítmény javítását.</p>
                </div>
                 <div className="flex flex-col sm:flex-row gap-2 pt-4">
                    <Button onClick={handleSaveSettings}>Beállítások mentése</Button>
                    <Button variant="outline" onClick={() => setShowSettings(false)}>Vissza</Button>
                </div>
              </CardContent>
            </>
          )}
        </Card>
      </div>
    </div>
  );
}
