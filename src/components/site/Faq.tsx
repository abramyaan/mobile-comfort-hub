import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faq } from "@/data/faq";

export function Faq() {
  return (
    <section id="faq" className="bg-secondary/40 py-20 md:py-28">
      {/* will-change-transform подготавливает браузер к анимациям аккордеона */}
      <div className="mx-auto max-w-4xl px-4 md:px-8 will-change-transform">
        <h2 className="text-4xl font-black tracking-tight md:text-6xl text-foreground">Вопросы и ответы</h2>
        <p className="mt-4 text-lg text-muted-foreground">Самое важное о кабинах, аренде и обслуживании.</p>
        
        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {faq.map((f, i) => (
            <AccordionItem
              key={i}
              value={`i${i}`}
              /* transform-gpu делает анимацию раскрытия плавной на старых Android */
              className="rounded-2xl border border-border bg-card px-5 transition-all transform-gpu hover:border-primary/30"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}