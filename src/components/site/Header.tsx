import { useState } from "react";
import { Menu, X } from "lucide-react"; // Удалили Send и MessageSquare
import { Button } from "@/components/ui/button";

// Импорт твоих иконок из assets
import tgIcon from "@/assets/tg.png";
import maxIcon from "@/assets/max.png";

const PHONE = "+7 (903) 097-60-05";
const PHONE_HREF = "tel:+79030976005";
const TG = "https://t.me/";
const MAX = "https://yandex.ru/images/search?..."; // Твоя ссылка

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
        
        {/* Логотип */}
        <a href="#home" className="flex items-center gap-2 group shrink-0">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground font-black transition-transform group-hover:scale-105 sm:h-10 sm:w-10">
            A
          </div>
          <span className="text-lg font-black tracking-tighter text-primary sm:text-xl">АТЛАС</span>
        </a>

        {/* Контакты на МОБИЛКАХ (Иконки заменены на img) */}
        <div className="flex items-center gap-5 lg:hidden ml-auto mr-2">
          <a 
            href={PHONE_HREF} 
            className="text-[14px] font-bold text-foreground bg-secondary/50 px-2 py-1.5 rounded-lg sm:text-sm whitespace-nowrap"
          >
            {PHONE}
          </a>
          <div className="flex items-center gap-2.5 ml-1">
            <a href={TG} target="_blank" className="active:opacity-70">
              <img src={tgIcon} alt="Telegram" className="h-7 w-22 object-contain rounded-lg" />
            </a>
            <a href={MAX} target="_blank" className="active:opacity-70">
              <img src={maxIcon} alt="MAX" className="h-7 w-22 object-contain rounded-lg shadow-sm" />
            </a>
          </div>
        </div>

        {/* Навигация и иконки (ДЕКСТОП - Иконки заменены на img) */}
        <nav className="hidden items-center gap-6 lg:flex ml-8">
          {links.map((l) => (
            <a 
              key={l.href} 
              href={l.href} 
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary whitespace-nowrap"
            >
              {l.label}
            </a>
          ))}
          
          <div className="flex items-center gap-3 border-l border-border pl-6">
            <a href={TG} target="_blank" className="opacity-80 hover:opacity-100 transition-opacity" title="Telegram">
              <img src={tgIcon} alt="Telegram" className="h-7 w-14 object-contain rounded-lg" />
            </a>
            <a href={MAX} target="_blank" className="opacity-80 hover:opacity-100 transition-opacity" title="MAX">
              <img src={maxIcon} alt="MAX" className="h-7 w-7 object-contain rounded-lg shadow-sm" />
            </a>
          </div>
        </nav>

        {/* Номер и кнопка (ДЕКСТОП) */}
        <div className="hidden items-center gap-6 lg:flex">
          <a 
            href={PHONE_HREF} 
            className="text-base font-bold text-foreground transition-colors hover:text-primary whitespace-nowrap"
          >
            {PHONE}
          </a>
          <Button asChild size="sm" className="rounded-full px-6 shadow-lg shadow-primary/20">
            <a href="#order">Заказать</a>
          </Button>
        </div>

        {/* Бургер */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid h-9 w-9 place-items-center rounded-xl border border-border bg-card transition-colors"
          aria-label="Меню"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Мобильное меню[cite: 12] */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-in fade-in slide-in-from-top-2">
          <div className="px-4 py-6 space-y-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-lg font-medium hover:bg-secondary"
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