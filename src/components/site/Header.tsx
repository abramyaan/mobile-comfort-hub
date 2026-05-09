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
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        
        {/* ЛЕВАЯ ЧАСТЬ: Логотип */}
        <div className="flex items-center shrink-0">
          <a href="#home" className="flex items-center group">
            <div className="grid h-9 px-3 place-items-center rounded-xl bg-primary text-primary-foreground font-black text-sm transition-transform group-hover:scale-105 sm:h-10">
              Атлас
            </div>
          </a>
        </div>

        {/* ЦЕНТРАЛЬНАЯ ЧАСТЬ: Номер телефона */}
        {/* Изменено: на мобилках скрываем или уменьшаем, на больших экранах центрируем через flex-1 и text-center */}
        <div className="flex-1 px-2 text-center lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          <a 
            href={PHONE_HREF} 
            className="inline-block text-[12px] font-bold text-foreground bg-secondary/50 px-2 py-1.5 rounded-lg whitespace-nowrap min-[390px]:text-[14px] sm:text-sm"
          >
            {PHONE}
          </a>
        </div>

        {/* ПРАВАЯ ЧАСТЬ: Иконки + Меню */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          
          {/* Иконки мессенджеров */}
          <div className="flex items-center">
            <a href={TG} target="_blank" className="active:opacity-70 transition-opacity hover:opacity-80">
              {/* Уменьшил ширину иконок для мобильных (h-7 w-7) */}
              <img src={tgIcon} alt="TG" className="h-9 w-14 object-contain sm:h-9 sm:w-9" />
            </a>
            <a href={MAX} target="_blank" className="active:opacity-70 transition-opacity hover:opacity-80">
              <img src={maxIcon} alt="MAX" className="h-7 w-7 object-contain sm:h-8 sm:w-8" />
            </a>
          </div>

          {/* Навигация (только ПК) */}
          <nav className="hidden lg:flex items-center gap-4 mr-4 border-l border-border pl-4">
            {links.map((l) => (
              <a 
                key={l.href} 
                href={l.href} 
                className="text-[13px] font-medium text-foreground/70 transition-colors hover:text-primary whitespace-nowrap"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Кнопка "Заказать" (только ПК) */}
          <div className="hidden lg:block">
            <Button asChild size="sm" className="rounded-full px-4 h-9 text-xs">
              <a href="#order">Заказать</a>
            </Button>
          </div>

          {/* Кнопка меню (только мобилки) */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid h-9 w-9 place-items-center rounded-xl border border-border bg-card"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

      </div>

      {/* Мобильное меню */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-in fade-in slide-in-from-top-2">
          <div className="px-4 py-6 space-y-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-lg font-medium hover:bg-secondary text-center"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-4 mt-4 border-t border-border">
              <Button asChild className="w-full h-12 rounded-xl text-base font-bold">
                <a href="#order">Оставить заявку</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}