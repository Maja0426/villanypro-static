import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";

export default function Impresszum() {
  return (
    <>
      <Header />
      <main className="container py-12 md:py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-headline font-bold">Impresszum</h1>
            <p className="text-muted-foreground">A magyar jogszabályoknak megfelelően</p>
            <p className="text-muted-foreground pt-4">Hatályos: 2025. augusztus 25.</p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-headline font-semibold">A Szolgáltató adatai</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">A szolgáltató neve:</strong> Majoros Tamás egyéni vállalkozó</li>
              <li><strong className="text-foreground">Székhely:</strong> 2660 Balassagyarmat, Patvarci u. 18.</li>
              <li><strong className="text-foreground">Levelezési cím:</strong> 2660 Balassagyarmat, Patvarci u. 18.</li>
              <li><strong className="text-foreground">Nyilvántartási szám:</strong> [Később pótolandó]</li>
              <li><strong className="text-foreground">Adószám:</strong> [Később pótolandó]</li>
              <li><strong className="text-foreground">Képviselő:</strong> Majoros Tamás</li>
              <li><strong className="text-foreground">Telefonszám:</strong> +36 70 530 1130</li>
              <li><strong className="text-foreground">E-mail cím:</strong> tmsmajoros@gmail.com</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-headline font-semibold">Tárhelyszolgáltató adatai</h2>
            <ul className="space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Név:</strong> Google Ireland Limited</li>
                <li><strong className="text-foreground">Székhely:</strong> Gordon House, Barrow Street, Dublin 4, Írország</li>
                <li><strong className="text-foreground">Elérhetőség:</strong> <a href="https://cloud.google.com/contact" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://cloud.google.com/contact</a></li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
