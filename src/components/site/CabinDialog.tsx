import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Cabin } from "@/data/catalog";

const fmt = (n: number) => new Intl.NumberFormat("ru-RU").format(n);

export function CabinDialog({
  cabin,
  onClose,
  onBuy,
}: {
  cabin: Cabin | null;
  onClose: () => void;
  onBuy: (name: string) => void;
}) {
  const [idx, setIdx] = useState(0);
  useEffect(() => setIdx(0), [cabin?.id]);

  if (!cabin) return null;
  const len = cabin.images.length;

  return (
    <Dialog open={!!cabin} onOpenChange={(v) => !v && onClose()}>
      {/* max-w-[95vw] для того, чтобы на мобилках были небольшие отступы по бокам */}
      <DialogContent className="max-w-[95vw] sm:max-w-3xl rounded-3xl p-4 sm:p-6 overflow-y-auto max-h-[95vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl sm:text-3xl font-black text-left">{cabin.name}</DialogTitle>
        </DialogHeader>

        <div className="relative mt-2 overflow-hidden rounded-2xl bg-secondary">
          <img
            src={cabin.images[idx]}
            alt={cabin.name}
            className="aspect-[4/3] w-full object-contain p-4 sm:p-6"
          />
          {len > 1 && (
            <>
              <button
                onClick={() => setIdx((i) => (i - 1 + len) % len)}
                className="absolute left-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-background/90 shadow-md hover:bg-background sm:h-11 sm:w-11"
                aria-label="Назад"
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <button
                onClick={() => setIdx((i) => (i + 1) % len)}
                className="absolute right-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-background/90 shadow-md hover:bg-background sm:h-11 sm:w-11"
                aria-label="Вперёд"
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
                {cabin.images.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 w-1.5 rounded-full transition-colors sm:h-2 sm:w-2 ${i === idx ? "bg-primary" : "bg-foreground/30"}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="grid gap-2 sm:gap-3 grid-cols-2 mt-4">
          <div className="rounded-xl bg-secondary p-2 sm:p-3 text-center">
            <div className="text-[10px] sm:text-xs font-medium text-muted-foreground uppercase">Цена</div>
            <div className="text-lg sm:text-2xl font-black whitespace-nowrap">{fmt(cabin.price)} ₽</div>
          </div>
          <div className="rounded-xl bg-secondary p-2 sm:p-3 text-center">
            <div className="text-[10px] sm:text-xs font-medium text-muted-foreground uppercase">Аренда</div>
            <div className="text-lg sm:text-2xl font-black text-primary whitespace-nowrap">{fmt(cabin.rent)} ₽</div>
          </div>
        </div>

        <p className="text-sm sm:text-base text-muted-foreground leading-tight sm:leading-normal">
          {cabin.description}
        </p>

        <div className="space-y-2 sm:space-y-3">
          <div className="text-[11px] sm:text-sm font-bold uppercase tracking-wider text-foreground/70">Основные характеристики</div>
          {/* Одна колонка на мобилках, две на планшетах/пк */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-1.5 text-sm sm:grid-cols-2">
            {[
              { label: "Габариты", value: "115х115х220 см" },
              { label: "Вес", value: "70 кг" },
              { label: "Посещений", value: "500" },
              { label: "Объем бака", value: "250 л" },
              { label: "Производитель", value: "Россия" },
              { label: "Гарантия", value: "12 месяцев" },
            ].map((item) => (
              <div key={item.label} className="flex justify-between border-b border-border/50 pb-1">
                <span className="text-muted-foreground">{item.label}</span>
                <span className="font-medium text-right ml-2">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <Button 
          size="lg" 
          className="mt-2 h-12 sm:h-14 text-base font-bold shadow-lg shadow-primary/20" 
          onClick={() => onBuy(cabin.name)}
        >
          Заказать сейчас
        </Button>
      </DialogContent>
    </Dialog>
  );
}