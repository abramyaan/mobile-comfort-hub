import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

import tgIcon from "@/assets/tg.png";
import maxIcon from "@/assets/max.png";

const PHONE = "+7 (903) 097-60-05";
const PHONE_HREF = "tel:+79030976005";
const TG = "https://t.me/";
const MAX = "https://yandex.ru/images/search?...";

const links = [
  { href: "#home", label: "Главная" },
  { href: "#catalog", label: "Каталог" },
  { href: "#services", label: "Услуги" },
  { href: "#faq", label: "Вопросы" },
  { href: "#order", label: "Заявка" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md transform-gpu will-change-transform">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        
        {/* ЛЕВАЯ ГРУППА: Логотип + Меню */}
        <div className="flex items-center gap-4 lg:gap-8">
          <a href="#home" className="flex items-center group shrink-0">
            <div className="grid h-9 px-3 place-items-center rounded-xl bg-primary text-primary-foreground font-black text-sm transition-transform group-hover:scale-105 sm:h-10">
              Атлас
            </div>
          </a>

          {/* Навигация (только ПК) */}
          <nav className="hidden lg:flex items-center gap-6">
            {links.map((l) => (
              <a 
                key={l.href} 
                href={l.href} 
                className="text-base font-bold text-foreground/80 transition-colors hover:text-primary whitespace-nowrap"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* ПРАВАЯ ГРУППА: Иконки + Номер + Кнопка */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          
          {/* Номер телефона — теперь виден всегда */}
          <div className="block">
            <a 
              href={PHONE_HREF} 
              className="inline-block text-[14px] font-black text-foreground bg-secondary/50 px-2 py-1.5 rounded-lg whitespace-nowrap transition-colors hover:bg-secondary sm:text-sm sm:px-9 sm:py-3"
            >
              {PHONE}
            </a>
          </div>

          {/* Иконки мессенджеров */}
          <div className="flex items-center">
            <a href={TG} target="_blank" className="active:opacity-70 transition-opacity hover:opacity-80 p-1">
              <img 
                src={tgIcon} 
                alt="Telegram" 
                decoding="async"
                className="h-8 w-12 object-contain sm:h-12 sm:w-17" 
              />
            </a>
            <a href={MAX} target="_blank" className="active:opacity-70 transition-opacity hover:opacity-80 p-1">
              <img 
                src={maxIcon} 
                alt="MAX" 
                decoding="async"
                className="h-6 w-6 object-contain sm:h-8 sm:w-8" 
              />
            </a>
          </div>

          {/* Кнопка "Заказать" (только ПК) */}
          <div className="hidden lg:block">
            <Button asChild size="sm" className="rounded-full px-5 h-10 text-sm font-bold shadow-sm transition-transform active:scale-95">
              <a href="#order">Заказать</a>
            </Button>
          </div>

          {/* Кнопка меню (только мобилки) */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid h-9 w-9 place-items-center rounded-xl border border-border bg-card transition-colors active:bg-secondary"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

      </div>

      {/* Мобильное меню */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-in fade-in slide-in-from-top-2 transform-gpu">
          <div className="px-4 py-6 space-y-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-lg font-medium hover:bg-secondary text-center transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-4 mt-4 border-t border-border">
              <Button asChild className="w-full h-12 rounded-xl text-base font-bold shadow-lg active:scale-[0.98]">
                <a href="#order">Оставить заявку</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}