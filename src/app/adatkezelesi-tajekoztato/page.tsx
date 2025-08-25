import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import Link from "next/link";

export default function AdatkezelesiTajekoztato() {
  return (
    <>
      <Header />
      <main className="container py-12 md:py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-headline font-bold">Adatkezelési tájékoztató</h1>
            <p className="text-muted-foreground">Hatályos: 2025. augusztus 25.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-headline font-semibold">1. Az Adatkezelő</h2>
            <p className="text-muted-foreground">Az Ön személyes adatainak kezelője a VillanyPro szolgáltatás üzemeltetője.</p>
            <ul className="space-y-1 text-muted-foreground">
              <li><strong className="text-foreground">Név:</strong> Majoros Tamás egyéni vállalkozó</li>
              <li><strong className="text-foreground">E-mail:</strong> tmsmajoros@gmail.com</li>
              <li><strong className="text-foreground">Telefon:</strong> +36 70 530 1130</li>
              <li><strong className="text-foreground">Székhely:</strong> 2660 Balassagyarmat, Patvarci u. 18.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-headline font-semibold">2. A kezelt adatok köre, célja és jogalapja</h2>
            <p className="text-muted-foreground">A VillanyPro alkalmazás (a továbbiakban: Szolgáltatás) használata során az alábbi személyes adatokat kezeljük a meghatározott célokból és jogalapokon.</p>
            
            <h3 className="text-xl font-headline font-medium pt-2">2.1. Regisztráció és fiókkezelés</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Kezelt adatok:</strong> Név, e-mail cím, jelszó (titkosítva, hash formában).</li>
              <li><strong className="text-foreground">Adatkezelés célja:</strong> A felhasználói fiók létrehozása, a Szolgáltatásba való bejelentkezés biztosítása, kapcsolattartás.</li>
              <li><strong className="text-foreground">Adatkezelés jogalapja:</strong> A szerződés teljesítése (GDPR 6. cikk (1) bek. b) pont), mivel a fiók elengedhetetlen a Szolgáltatás használatához.</li>
            </ul>

            <h3 className="text-xl font-headline font-medium pt-2">2.2. Felhasználói profil és számlázási adatok</h3>
            <ul className="space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Kezelt adatok:</strong> Telefonszám, cím/székhely, vállalkozási adatok (vállalkozás neve, adószám, bankszámlaszám), adózási forma (AAM/ÁFA), ÁFA-kulcs, profilkép.</li>
                <li><strong className="text-foreground">Adatkezelés célja:</strong> A Szolgáltatás teljes körű működésének biztosítása, különösen a munkalapokon és árajánlatokon megjelenő adatok automatikus kitöltése, valamint a számlázási folyamatok elősegítése.</li>
                <li><strong className="text-foreground">Adatkezelés jogalapja:</strong> A szerződés teljesítése (GDPR 6. cikk (1) bek. b) pont).</li>
            </ul>

            <h3 className="text-xl font-headline font-medium pt-2">2.3. Ügyfél- és munkalapadatok (Felhasználó által feltöltött adatok)</h3>
            <ul className="space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Kezelt adatok:</strong> A felhasználó által rögzített ügyfelek adatai (név, cím, e-mail, telefon), munkalapok tartalma (munka leírása, felhasznált anyagok, munkadíj).</li>
                <li><strong className="text-foreground">Adatkezelés célja:</strong> A Szolgáltatás rendeltetésszerű használatának biztosítása, a CRM és munkalap-kezelő funkciók működtetése.</li>
                <li><strong className="text-foreground">Megjegyzés:</strong> Ezen adatok tekintetében a Felhasználó minősül adatkezelőnek, a Szolgáltató pedig adatfeldolgozónak. A Szolgáltató biztosítja a technikai hátteret az adatok biztonságos tárolásához és kezeléséhez.</li>
                <li><strong className="text-foreground">Adatkezelés jogalapja:</strong> A szerződés teljesítése (GDPR 6. cikk (1) bek. b) pont).</li>
            </ul>

            <h3 className="text-xl font-headline font-medium pt-2">2.4. Rendszerbiztonsági és diagnosztikai adatok</h3>
            <ul className="space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Kezelt adatok:</strong> Bejelentkezési naplók (IP cím, időpont, felhasználói azonosító), adminisztrátori tevékenységi naplók (módosítások, megtekintések).</li>
                <li><strong className="text-foreground">Adatkezelés célja:</strong> A rendszer biztonságának és integritásának védelme, visszaélések felderítése, hibakeresés, valamint az adminisztrátori műveletek visszakövethetőségének biztosítása.</li>
                <li><strong className="text-foreground">Adatkezelés jogalapja:</strong> Az Adatkezelő jogos érdeke (GDPR 6. cikk (1) bek. f) pont) a szolgáltatás biztonságos működésének garantálása.</li>
            </ul>

            <h3 className="text-xl font-headline font-medium pt-2">2.5. Sütik (Cookies)</h3>
            <ul className="space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Kezelt adatok:</strong> Böngészési adatok, beállítások.</li>
                <li><strong className="text-foreground">Adatkezelés célja:</strong> A weboldal alapvető működésének biztosítása (szükséges sütik) és a felhasználói élmény javítása, használati statisztikák készítése (statisztikai sütik).</li>
                <li><strong className="text-foreground">Adatkezelés jogalapja:</strong> A szükséges sütik esetében jogos érdek (GDPR 6. cikk (1) bek. f) pont), a statisztikai sütik esetében az Ön hozzájárulása (GDPR 6. cikk (1) bek. a) pont), melyet a süti sávban adhat meg.</li>
            </ul>
             <p className="text-muted-foreground">Részletes információkat a <Link href="/suti-tajekoztato" className="text-primary hover:underline">Süti tájékoztatóban</Link> talál.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-headline font-semibold">3. Az adatkezelés időtartama</h2>
            <p className="text-muted-foreground">A személyes adatokat a Szolgáltatás fennállásáig, illetve a felhasználói fiók törléséig kezeljük. A fiók törlését követően az adatok véglegesen törlődnek, kivéve a jogszabályi kötelezettségek (pl. számviteli törvény) által előírt megőrzési időt.</p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-headline font-semibold">4. Adatfeldolgozók</h2>
            <p className="text-muted-foreground">A Szolgáltatás működéséhez az alábbi adatfeldolgozókat vesszük igénybe:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Google Firebase (Google Ireland Limited):</strong> A Szolgáltatás teljes infrastruktúrájának (adatbázis, hitelesítés, tárhely) biztosítója.</li>
              <li><strong className="text-foreground">Resend (Resend Inc.):</strong> E-mail kézbesítési szolgáltató az árajánlatok és rendszerüzenetek küldéséhez.</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-headline font-semibold">5. Az Ön jogai</h2>
            <p className="text-muted-foreground">Önt a GDPR rendelet alapján az alábbi jogok illetik meg:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Hozzáférés joga:</strong> Tájékoztatást kérhet személyes adatai kezeléséről.</li>
              <li><strong className="text-foreground">Helyesbítés joga:</strong> Kérheti pontatlan adatainak helyesbítését, melyet a Profil oldalon nagyrészt önállóan is elvégezhet.</li>
              <li><strong className="text-foreground">Törléshez való jog ("elfeledtetéshez való jog"):</strong> Kérheti adatainak törlését a jogszabályban meghatározott esetekben.</li>
              <li><strong className="text-foreground">Adatkezelés korlátozásához való jog:</strong> Kérheti az adatkezelés korlátozását.</li>
              <li><strong className="text-foreground">Adathordozhatósághoz való jog:</strong> Kérheti, hogy az Önre vonatkozó adatokat tagolt, széles körben használt, géppel olvasható formátumban megkapja.</li>
              <li><strong className="text-foreground">Tiltakozáshoz való jog:</strong> Tiltakozhat személyes adatainak kezelése ellen, ha az jogos érdeken alapul.</li>
            </ul>
            <p className="text-muted-foreground">Jogait a fenti elérhetőségeken gyakorolhatja. Panaszával a Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH) fordulhat.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-headline font-semibold">6. Adatbiztonság</h2>
            <p className="text-muted-foreground">Elkötelezettek vagyunk az Ön adatainak védelme mellett. A Google Firebase által biztosított iparági sztenderd biztonsági intézkedéseket alkalmazzuk az adatok védelme érdekében, beleértve a titkosítást és a hozzáférés-szabályozást.</p>
          </div>
          <p className="text-muted-foreground pt-4">Frissítve: 2025. augusztus 25.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
