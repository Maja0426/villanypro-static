
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { documentation } from "@/config/documentation";
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";

export default function SugoPage() {
  const sortedDocs = [...documentation].sort((a, b) => a.order - b.order);

  return (
    <>
      <Header />
      <main className="container py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-headline font-bold">Súgó és Dokumentáció</h1>
            <p className="text-lg text-muted-foreground">
              Itt minden információt megtalál a VillanyPro alkalmazás használatával kapcsolatban.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {sortedDocs.map((category) => (
              <AccordionItem key={category.id} value={`item-${category.id}`}>
                <AccordionTrigger className="text-2xl font-headline">
                  {category.title}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-8 pl-4">
                    {category.articles.sort((a,b) => a.order - b.order).map((article) => (
                      <div key={article.id}>
                        <h3 className="text-xl font-headline font-semibold mb-2">{article.title}</h3>
                        <p className="text-muted-foreground whitespace-pre-line">{article.content}</p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
      <Footer />
    </>
  );
}
