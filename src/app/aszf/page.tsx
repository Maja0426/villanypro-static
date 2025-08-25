import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import Link from "next/link";

export default function ASZF() {
  return (
    <>
      <Header />
      <main className="container py-12 md:py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-headline font-bold">Általános Szerződési Feltételek</h1>
            <p className="text-muted-foreground">Hatályos: 2025. augusztus 25.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-headline font-semibold">1. Bevezető rendelkezések</h2>
            <p className="text-muted-foreground">Jelen Általános Szerződési Feltételek (a továbbiakban: ÁSZF) Majoros Tamás egyéni vállalkozó (továbbiakban: Szolgáltató) által üzemeltetett VillanyPro online alkalmazás (a továbbiakban: Szolgáltatás) igénybevételének feltételeit szabályozza.</p>
            <p className="text-muted-foreground">A Szolgáltatás használatával a Felhasználó elfogadja és magára nézve kötelezőnek ismeri el a jelen ÁSZF-ben foglaltakat.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-headline font-semibold">2. A Szolgáltató</h2>
            <ul className="space-y-1 text-muted-foreground">
              <li><strong className="text-foreground">Név:</strong> Majoros Tamás egyéni vállalkozó</li>
              <li><strong className="text-foreground">Székhely:</strong> 2660 Balassagyarmat, Patvarci u. 18.</li>
              <li><strong className="text-foreground">E-mail:</strong> tmsmajoros@gmail.com</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-headline font-semibold">3. A Szolgáltatás tárgya</h2>
            <p className="text-muted-foreground">A Szolgáltatás egy online, villanyszerelők számára készült ügyfél- és munkalap-nyilvántartó rendszer (CRM), amely lehetővé teszi ügyfelek, munkalapok, készletek és kiadások digitális kezelését, valamint árajánlatok és teljesítésigazolások generálását.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-headline font-semibold">4. Regisztráció és szerződéskötés</h2>
            <p className="text-muted-foreground">A Szolgáltatás használatának feltétele az érvényes regisztráció. A regisztráció során a Felhasználó (az a természetes vagy jogi személy, aki a szolgáltatást igénybe veszi) köteles valós adatokat megadni. A regisztrációval a Felhasználó és a Szolgáltató között online szerződés jön létre, amelyre a jelen ÁSZF, valamint a Polgári Törvénykönyvről szóló 2013. évi V. törvény és az elektronikus kereskedelmi szolgáltatásokról szóló 2001. évi CVIII. törvény rendelkezései az irányadók.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-headline font-semibold">5. Előfizetési csomagok és díjak</h2>
            <p className="text-muted-foreground">A Szolgáltató különböző funkcionalitású előfizetési csomagokat kínál (pl. Free, Basic, Pro). A csomagok aktuális tartalmát és díjait a Szolgáltató a weboldalán teszi közzé.</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Díjfizetés:</strong> Az előfizetési díj fizetése online bankkártyás fizetéssel, a [Fizetési szolgáltató neve] biztonságos rendszerén keresztül történik. A díj a választott csomagtól függően havi vagy éves periódusra vonatkozik.</li>
                <li><strong className="text-foreground">Számlázás:</strong> A sikeres fizetést követően a Szolgáltató elektronikusan kiállított számlát küld a Felhasználó által megadott e-mail címre.</li>
                <li><strong className="text-foreground">Megújulás és lemondás:</strong> Az előfizetés automatikusan megújul a választott periódus végén, kivéve, ha a Felhasználó a fiókjában lemondja azt a fordulónap előtt. Lemondás esetén a Szolgáltatás a már kifizetett időszak végéig használható.</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-headline font-semibold">6. A Felek jogai és kötelezettségei</h2>
            <h3 className="text-xl font-headline font-medium pt-2">A Szolgáltató:</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Biztosítja a Szolgáltatás folyamatos elérhetőségét, a tervezett karbantartások kivételével.</li>
                <li>A Felhasználó által feltöltött adatokat bizalmasan kezeli, az Adatkezelési tájékoztatónak megfelelően.</li>
                <li>Jogosult az ÁSZF-et egyoldalúan módosítani, amelyről a Felhasználókat a módosítás hatálybalépése előtt legalább 15 nappal értesíti.</li>
            </ul>
             <h3 className="text-xl font-headline font-medium pt-2">A Felhasználó:</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Köteles a Szolgáltatást rendeltetésszerűen és a jogszabályoknak megfelelően használni.</li>
                <li>Felelős a fiókjához tartozó jelszó biztonságáért és az azzal végrehajtott műveletekért.</li>
                <li>Tudomásul veszi, hogy a saját maga által feltöltött ügyféladatok tekintetében ő minősül adatkezelőnek.</li>
                <li>Köteles az előfizetési díjat időben megfizetni.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-headline font-semibold">7. Felelősségkorlátozás</h2>
            <p className="text-muted-foreground">A Szolgáltató minden tőle telhetőt megtesz a Szolgáltatás zavartalan működéséért, de nem vállal felelősséget a vis maior, illetve az ellenőrzési körén kívül eső események (pl. internetszolgáltatás kimaradása, szerverhiba) által okozott károkért. A Szolgáltató felelőssége a Felhasználó által befizetett előfizetési díj mértékéig korlátozott.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-headline font-semibold">8. Vegyes rendelkezések</h2>
            <p className="text-muted-foreground">A jelen szerződésben nem szabályozott kérdésekben a magyar jog, különösen a Polgári Törvénykönyv és az elektronikus kereskedelemre vonatkozó jogszabályok az irányadók. A Felek esetleges jogvitáikat elsősorban békés úton kísérlik meg rendezni. Amennyiben ez nem vezet eredményre, a jogvita elbírálására a [Illetékes Bíróság neve] illetékes.</p>
          </div>

          <p className="text-muted-foreground pt-4">Hatályos: 2025. augusztus 25.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}