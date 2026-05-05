import { useState } from "react";
import { Menu, X, Phone, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE = "+7 (903) 097-60-05";
const PHONE_HREF = "tel:+79030976005";
const TG = "https://t.me/";
const MAX = "https://max.ru/";

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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        
        {/* Логотип и Дескриптор */}
        <a href="#home" className="flex items-center gap-4 group">
          <div className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground font-black transition-transform group-hover:scale-105">
              Atlas
            </div>
            
          </div>

          {/* Вертикальный разделитель (виден только на десктопе) */}
          <div className="hidden h-8 w-[1px] bg-border md:block" />

          {/* Текст дескриптора (виден только на десктопе) */}
          <div className="hidden max-w-[160px] text-[10px] leading-tight text-muted-foreground uppercase tracking-widest font-semibold md:block">
            Продажа и аренда мобильных туалетных кабин
          </div>
        </a>

        {/* Навигация (десктоп) */}
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <a 
              key={l.href} 
              href={l.href} 
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Контакты (десктоп)[cite: 1] */}
        <div className="hidden items-center gap-4 lg:flex">
          <a 
            href={PHONE_HREF} 
            className="text-base font-bold text-foreground transition-colors hover:text-primary"
          >
            {PHONE}
          </a>
          <Button asChild size="default" className="rounded-full shadow-lg shadow-primary/20">
            <a href="#order">Заказать звонок</a>
          </Button>
        </div>

        {/* Кнопка мобильного меню */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid h-10 w-10 place-items-center rounded-xl border border-border bg-card transition-colors hover:bg-accent"
          aria-label="Меню"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Мобильное меню[cite: 1] */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-lg font-medium transition-colors hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            
            <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4">
              <a 
                href={PHONE_HREF} 
                className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-4 text-lg font-bold text-primary-foreground shadow-lg shadow-primary/20"
              >
                <Phone className="h-5 w-5" /> {PHONE}
              </a>
              
              <div className="flex gap-2">
                <a 
                  href={TG} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-3 font-semibold transition-colors hover:bg-accent"
                >
                  <Send className="h-5 w-5 text-[#229ED9]" /> Telegram
                </a>
                <a 
                  href={MAX} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-3 font-semibold transition-colors hover:bg-accent"
                >
                  <MessageCircle className="h-5 w-5 text-[#25D366]" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}