import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqs = [
    {
      question: "Biztonságban vannak az adataim?",
      answer: "Igen, maximálisan. A VillanyPro a Google Firebase infrastruktúráját használja, ami iparági sztenderd biztonsági megoldásokat (titkosítás, biztonságos adatbázis) alkalmaz az adatok védelmére. Az Ön adataihoz csak Ön fér hozzá."
    },
    {
      question: "Lemondhatom bármikor az előfizetést?",
      answer: "Természetesen. Az előfizetést bármikor lemondhatja a fiókjában, kötelezettségek nélkül. A már kifizetett időszak végéig a szolgáltatás teljes funkcionalitással használható marad."
    },
    {
        question: "Milyen eszközökön használhatom az alkalmazást?",
        answer: "A VillanyPro egy webalkalmazás, ami azt jelenti, hogy bármilyen modern böngészővel rendelkező eszközön (laptop, tablet, okostelefon) használható, telepítés nélkül. Az alkalmazás reszponzív, így minden képernyőméreten optimális élményt nyújt."
    },
    {
      question: "Szükséges bármit telepítenem?",
      answer: "Nincs szükség telepítésre. A VillanyPro egy böngészőből futó alkalmazás, így elég csak regisztrálnia és máris használhatja a szolgáltatást bármilyen internetkapcsolattal rendelkező eszközön."
    },
    {
        question: "Van ingyenes próbaidőszak?",
        answer: "Igen, a 'Free' csomagunkat időkorlát nélkül, ingyenesen használhatja, hogy megismerje a rendszer alapfunkcióit. Ez lehetővé teszi, hogy kockázatmentesen kipróbálja, hogyan könnyítheti meg a VillanyPro a mindennapi munkáját."
    },
    {
        question: "Kapok segítséget, ha elakadok?",
        answer: "Igen, a 'Súgó' oldalunkon részletes útmutatókat talál a funkciókról. Ezen felül a 'Basic' és 'Pro' csomagok email támogatást is tartalmaznak, ahol készséggel válaszolunk a felmerülő kérdésekre."
    }
  ]
  
  export default function Faq() {
    return (
      <section id="faq" className="py-20 md:py-24">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Gyakran Ismételt Kérdések</h2>
            <p className="text-muted-foreground text-lg">
                Itt megtalálja a válaszokat a leggyakoribb kérdésekre.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-lg">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    )
  }
  