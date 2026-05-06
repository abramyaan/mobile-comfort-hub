import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, 
  ChevronRight, 
  Ruler, 
  Container, 
  Weight, 
  Users, 
  Factory, 
  ShieldCheck 
} from "lucide-react";
import type { Cabin } from "@/data/catalog";

const fmt = (n: number) => new Intl.NumberFormat("ru-RU").format(n);

export function CabinDialog({ cabin, onClose, onBuy }: { 
  cabin: Cabin | null; 
  onClose: () => void; 
  onBuy: (name: string) => void; 
}) {
  const [idx, setIdx] = useState(0);
  useEffect(() => setIdx(0), [cabin?.id]);

  if (!cabin) return null;
  const len = cabin.images.length;

  const specs = [
    { label: "Габариты", value: cabin.size, icon: Ruler },
    { label: "Вес", value: cabin.weight, icon: Weight },
    { label: "Посещений", value: cabin.visits, icon: Users },
    { label: "Бак", value: cabin.tank, icon: Container },
    { label: "Производство", value: cabin.manufacturer, icon: Factory },
    { label: "Гарантия", value: cabin.warranty, icon: ShieldCheck },
  ];

  return (
    <Dialog open={!!cabin} onOpenChange={(v) => !v && onClose()}>
      {/* Максимальная высота 95vh и уменьшенные отступы p-3 для мобильных[cite: 9, 11] */}
      <DialogContent className="max-w-[95vw] sm:max-w-3xl rounded-[1.5rem] p-3 sm:p-8 overflow-y-auto max-h-[95vh] outline-none border-none">
        <DialogHeader className="mb-1 sm:mb-2">
          {/* Уплотненный заголовок[cite: 9, 11] */}
          <DialogTitle className="text-lg sm:text-2xl font-black text-left whitespace-pre-line leading-tight">
            {cabin.name}
          </DialogTitle>
        </DialogHeader>

        {/* Слайдер стал чуть меньше на мобильных[cite: 9, 11] */}
        <div className="relative overflow-hidden rounded-2xl bg-secondary/50 border border-border">
          <img 
            src={cabin.images[idx]} 
            alt={cabin.name} 
            className="aspect-[4/3] w-full object-contain p-1 sm:p-6 transition-all duration-500" 
          />
          {len > 1 && (
            <>
              <button 
                onClick={() => setIdx((i) => (i - 1 + len) % len)} 
                className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 sm:h-12 sm:w-12 bg-background/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-md active:scale-90"
              >
                <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
              </button>
              <button 
                onClick={() => setIdx((i) => (i + 1) % len)} 
                className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 sm:h-12 sm:w-12 bg-background/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-md active:scale-90"
              >
                <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
              </button>
            </>
          )}
        </div>

        {/* Сетка характеристик стала плотнее[cite: 9, 11] */}
        <div className="mt-3 sm:mt-6">
          <h4 className="font-bold text-sm sm:text-lg mb-2">Технические характеристики</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1.5 sm:gap-3">
            {specs.map((s, i) => (
              <div key={i} className="flex flex-col gap-0 p-2 sm:p-4 rounded-xl bg-secondary/30 border border-border/50">
                <div className="flex items-center gap-1 text-primary">
                  <s.icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  <span className="text-[8px] sm:text-[10px] uppercase font-black tracking-wider opacity-60 leading-none">{s.label}</span>
                </div>
                <p className="text-[11px] sm:text-sm font-bold truncate">{s.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Описание без лишнего текста[cite: 9, 10, 11] */}
        <div className="mt-3 sm:mt-6 space-y-0.5">
          <h4 className="font-bold text-sm sm:text-lg">Описание</h4>
          <p className="text-muted-foreground leading-tight text-[11px] sm:text-base">
            {cabin.description}
          </p>
        </div>

        {/* Компактный футер[cite: 9, 11] */}
        <div className="mt-4 sm:mt-6 flex flex-col gap-2 sm:gap-3">
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-secondary/50 p-2 sm:p-4 rounded-xl border border-border text-center">
              <span className="text-[8px] sm:text-[9px] uppercase font-bold text-muted-foreground block mb-0">Продажа</span>
              <span className="text-base sm:text-xl font-black">{fmt(cabin.price)} ₽</span>
            </div>
            <div className="bg-primary/5 p-2 sm:p-4 rounded-xl border border-primary/20 text-center">
              <span className="text-[8px] sm:text-[9px] uppercase font-bold text-primary block mb-0">Аренда</span>
              <span className="text-base sm:text-xl font-black text-primary">{fmt(cabin.rent)} ₽</span>
            </div>
          </div>
          <Button 
            className="h-12 sm:h-16 rounded-xl sm:rounded-2xl text-base sm:text-xl font-black shadow-lg" 
            onClick={() => onBuy(cabin.name)}
          >
            Заказать
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}