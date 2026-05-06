import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero-cabinos.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-8 md:py-24">
        <div>
          <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground">
            Аренда · Продажа · Доставка
          </span>
          <h1 className="mt-5 text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
            Мобильные<br />туалетные кабины
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
            Мы — производитель и поставщик биотуалетов с 7-летним опытом. Доставляем по Санкт-Петербургу и Ленинградской области, обслуживаем парк, продаём и сдаём в аренду на любой срок.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-14 px-7 text-base">
              <a href="#order">Заказать звонок</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-7 text-base">
              <a href="tel:+74950000000"><Phone className="mr-2 h-5 w-5" /> Позвонить</a>
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-[3rem] bg-accent/40 blur-3xl" />
          <img
            src={hero}
            alt="Мобильные туалетные кабины"
            width={1280}
            height={1280}
            className="relative w-full rounded-[2rem] border border-border shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
