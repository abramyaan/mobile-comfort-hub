import { useState } from "react";
import { cabins, type Cabin } from "@/data/catalog";
import { CabinDialog } from "./CabinDialog";
import { CheckCircle2, ShieldCheck, Zap, Droplets, Lightbulb, ThermometerSnowflake, Info, ClipboardList } from "lucide-react";

const fmt = (n: number) => "от " + new Intl.NumberFormat("ru-RU").format(n);

const features = [
  { icon: ShieldCheck, text: "Прочный антивандальный пластик" },
  { icon: Droplets, text: "Накопительный бак (250 л)" },
  { icon: CheckCircle2, text: "Внутренняя задвижка и индикатор Свободно/Занято" },
  { icon: Zap, text: "Система естественной вентиляции" },
  { icon: Lightbulb, text: "Светопроницаемая крыша" },
  { icon: ThermometerSnowflake, text: "Морозоустойчивые добавки в пластике" },
];

export function Catalog({ onBuy }: { onBuy: (name: string) => void }) {
  const [active, setActive] = useState<Cabin | null>(null);

  return (
    <section id="catalog" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-4xl font-black tracking-tight md:text-6xl">Каталог</h2>
          <p className="max-w-md text-lg text-muted-foreground">
            Нажмите на подробности для информации или оставьте заявку на модель.
          </p>
        </div>

        <div className="grid gap-8 justify-center sm:grid-cols-2 lg:grid-cols-3">
          {cabins.map((c) => (
            <div
              key={c.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card text-left shadow-sm transition-all transform-gpu will-change-transform hover:-translate-y-1 hover:shadow-xl w-full max-w-[360px]"
            >
              {/* Клик по фото открывает диалог */}
              <div 
                className="aspect-square overflow-hidden bg-secondary/60 cursor-pointer"
                onClick={() => setActive(c)}
              >
                <img
                  src={c.images[0]}
                  alt={c.name}
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={800}
                  className="h-full w-full object-contain p-6 transition-transform group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col gap-3 p-5">
                <h3 
                  className="text-xl font-bold leading-tight whitespace-pre-line cursor-pointer hover:text-primary transition-colors"
                  onClick={() => setActive(c)}
                >
                  {c.name}
                </h3>
                
                <div className="mt-auto flex flex-col gap-3">
                  <div className="rounded-xl bg-secondary p-3">
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm font-medium text-muted-foreground">Цена</span>
                      <span className="text-xl font-black text-foreground">{fmt(c.price)} ₽</span>
                    </div>
                    <div className="mt-1 flex items-baseline justify-between">
                      <span className="text-sm font-medium text-muted-foreground">Аренда</span>
                      <span className="text-lg font-bold text-primary">{fmt(c.rent)} ₽</span>
                    </div>
                  </div>
                  
                  {/* Две кнопки: Подробнее выше, Оставить заявку ниже */}
                  <div className="flex flex-col gap-2">
                    <button 
                      onClick={() => setActive(c)}
                      className="flex items-center justify-center gap-2 rounded-xl bg-secondary py-3 text-sm font-bold text-foreground transition-all hover:bg-secondary/80 active:scale-95"
                    >
                      <Info className="h-4 w-4" />
                      Подробнее
                    </button>
                    
                    <button 
                      onClick={() => onBuy(c.name)}
                      className="flex items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-bold text-primary-foreground transition-all hover:opacity-90 active:scale-95 shadow-md shadow-primary/20"
                    >
                      <ClipboardList className="h-4 w-4" />
                      Оставить заявку
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Блок базовой комплектации */}
        <div className="mt-20 rounded-[2.5rem] border border-border bg-card/50 p-8 md:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
            <div className="flex-1">
              <h3 className="text-3xl font-black md:text-4xl">Базовая комплектация</h3>
              <p className="mt-4 text-muted-foreground">
                Все наши кабины поставляются в полной готовности к эксплуатации и включают необходимые элементы для комфортного использования.
              </p>
            </div>
            
            <div className="grid flex-[2] gap-4 sm:grid-cols-2 lg:gap-6">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-3 rounded-2xl bg-background/50 p-4 transition-colors hover:bg-background">
                  <div className="mt-1 rounded-lg bg-primary/10 p-1.5 text-primary">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium leading-snug sm:text-base">{f.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CabinDialog
        cabin={active}
        onClose={() => setActive(null)}
        onBuy={(name) => {
          setActive(null);
          onBuy(name);
        }}
      />
    </section>
  );
}