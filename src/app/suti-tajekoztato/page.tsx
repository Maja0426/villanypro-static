import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import { Button } from "@/components/ui/button";

export default function CookiePolicy() {
  return (
    <>
      <Header />
      <main className="container py-12 md:py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-headline font-bold">Süti tájékoztató</h1>
            <p className="text-muted-foreground">Hatályos: 2025. augusztus 25.</p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-headline font-semibold">1. Mi az a süti (cookie)?</h2>
            <p className="text-muted-foreground">
              A süti egy kis adatfájl, amelyet a weboldal a látogató eszközére (számítógép, telefon, tablet) ment el. Segítségével a weboldal bizonyos ideig megjegyzi a látogatásra vonatkozó információkat, például a beállításokat vagy a munkamenet adatait.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-headline font-semibold">2. Milyen sütiket használunk?</h2>
            <p className="text-muted-foreground">
              A weboldalunkon használt sütiket az alábbi kategóriákba soroljuk. A sütikkel kapcsolatos beállításait bármikor módosíthatja.
            </p>
            <h3 className="text-xl font-headline font-medium">Szükséges sütik</h3>
            <p className="text-muted-foreground">
              Ezek a sütik elengedhetetlenek a weboldal alapvető funkcióinak működéséhez. Nem kapcsolhatók ki.
            </p>
            <h3 className="text-xl font-headline font-medium">Statisztikai és teljesítmény sütik</h3>
            <p className="text-muted-foreground">
              Ezek a sütik segítenek nekünk megérteni, hogyan használják a látogatók a weboldalt, és javítani annak teljesítményét. Az adatokat névtelenül gyűjtik.
            </p>
            <p className="text-muted-foreground font-medium">
              Megjegyzés: a jelen weboldal nem használ marketing vagy célzott reklámsütiket.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-headline font-semibold">3. Hogyan lehet szabályozni a sütibeállításokat?</h2>
            <p className="text-muted-foreground">
              Az oldalon használt sütikkel kapcsolatos döntését a "Süti beállítások módosítása" gombra kattintva bármikor megváltoztathatja. Ezenkívül lehetősége van a böngészőjében is szabályozni a sütik engedélyezését vagy tiltását. A legtöbb böngésző alapértelmezés szerint automatikusan elfogadja a sütiket, de ez módosítható. A böngésző beállításain keresztül lehetőség van:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>az összes süti törlésére,</li>
              <li>bizonyos típusok blokkolására,</li>
              <li>értesítés kérésére új süti elhelyezéséről.</li>
            </ul>
             <p className="text-muted-foreground">Itt tudja módosítani a beállításokat:</p>
            <Button onClick={() => { localStorage.removeItem('cookie_consent'); window.location.reload(); }}>Süti beállítások módosítása</Button>
            <p className="text-muted-foreground">További információk a népszerű böngészőkhöz:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/hu/kb/sutik-engedelyezese-es-tiltasa-amit-weboldak-haszn" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.microsoft.com/hu-hu/windows/cookie-k-t%C3%B6rl%C3%A9se-%C3%A9s-kezel%C3%A9se-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
              <li><a href="https://support.apple.com/hu-hu/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-headline font-semibold">4. Adatkezelő elérhetősége</h2>
            <ul className="space-y-1 text-muted-foreground">
              <li>Név: Majoros Tamás ev.</li>
              <li>E-mail: tmsmajoros@gmail.com</li>
              <li>Telefon: +36 70 530 1130</li>
              <li>Székhely: 2660 Balassagyarmat, Patvarci u. 18.</li>
            </ul>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
