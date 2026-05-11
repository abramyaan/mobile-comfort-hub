import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero-cabinos.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-5 px-4 py-6 md:grid-cols-2 md:px-8 md:py-24">
        {/* transform-gpu ускоряет рендеринг текста на слабых процессорах */}
        <div className="transform-gpu">
          <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground">
            Аренда · Продажа · Доставка
          </span>
          <h1 className="mt-2 text-4xl font-black leading-[1.05] tracking-tight md:text-6xl text-foreground">
            Аренда и продажа<br />туалетных кабин <br />в Санкт-Петербурге и области
          </h1>
          <p className="mt-3 max-w-xl text-lg text-muted-foreground md:text-xl">
            Мы — производитель и поставщик биотуалетов с 7-летним опытом. Доставляем по Санкт-Петербургу и Ленинградской области, обслуживаем парк, продаём и сдаём в аренду на любой срок.
          </p>
          
          <div className="mt-2 flex flex-col gap-2">
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-14 px-7 text-base rounded-xl transition-transform active:scale-95">
                <a href="#order">Оставить заявку</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-7 text-base rounded-xl transition-transform active:scale-95">
                <a href="tel:+79030976005"><Phone className="mr-2 h-5 w-5" /> Позвонить</a>
              </Button>
            </div>
            
            <p className="italic text-primary/80 font-medium ml-1">
              * Закажите у нас и получите заправку бака-резервуара в подарок
            </p>
          </div>
        </div>

        <div className="relative transform-gpu">
          {/* Снижена интенсивность блюра для мобилок, чтобы GPU не перегревался */}
          <div className="absolute -inset-6 rounded-[3rem] bg-accent/40 blur-2xl md:blur-3xl" />
          <div className="relative">
            <img
              src={hero}
              alt="Мобильные туалетные кабины Атлас"
              width={1280}
              height={1280}
              /* loading="eager" и fetchpriority="high" заставляют браузер грузить главную картинку первой */
              loading="eager"
              decoding="async"
              className="max-h-[30vh] md:max-h-none w-full rounded-[2rem] border border-border shadow-2xl"
              style={{ contentVisibility: 'auto' } as any}
            />
            <p className="mt-2 text-center text-xs text-muted-foreground uppercase tracking-widest font-semibold">
              В аренду выставляются только новые туалетные кабины
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}