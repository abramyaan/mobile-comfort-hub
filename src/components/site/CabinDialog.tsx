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
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-black">{cabin.name}</DialogTitle>
        </DialogHeader>

        <div className="relative overflow-hidden rounded-2xl bg-secondary">
          <img
            src={cabin.images[idx]}
            alt={cabin.name}
            className="aspect-[4/3] w-full object-contain p-6"
          />
          {len > 1 && (
            <>
              <button
                onClick={() => setIdx((i) => (i - 1 + len) % len)}
                className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-background/90 shadow-md hover:bg-background"
                aria-label="Назад"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => setIdx((i) => (i + 1) % len)}
                className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-background/90 shadow-md hover:bg-background"
                aria-label="Вперёд"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                {cabin.images.map((_, i) => (
                  <span
                    key={i}
                    className={`h-2 w-2 rounded-full transition-colors ${i === idx ? "bg-primary" : "bg-foreground/30"}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl bg-secondary p-3 text-center">
            <div className="text-xs font-medium text-muted-foreground">Цена</div>
            <div className="text-2xl font-black">{fmt(cabin.price)} ₽</div>
          </div>
          <div className="rounded-xl bg-secondary p-3 text-center">
            <div className="text-xs font-medium text-muted-foreground">Аренда / сутки</div>
            <div className="text-2xl font-black text-primary">{fmt(cabin.rent)} ₽</div>
          </div>
        </div>

        <p className="text-base text-muted-foreground">{cabin.description}</p>
        <div className="text-sm font-semibold">Габариты: <span className="font-normal text-muted-foreground">{cabin.size}</span></div>

        <Button size="lg" className="mt-2 h-14 text-base" onClick={() => onBuy(cabin.name)}>
          Купить
        </Button>
      </DialogContent>
    </Dialog>
  );
}
