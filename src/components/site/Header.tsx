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
        <a href="#home" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground font-black">
            ЭК
          </div>
          <span className="text-lg font-bold tracking-tight">Atlas</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-base font-medium text-foreground/80 transition-colors hover:text-primary">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={PHONE_HREF} className="text-base font-semibold text-foreground hover:text-primary">
            {PHONE}
          </a>
          <Button asChild size="lg"><a href="#order">Заказать звонок</a></Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid h-11 w-11 place-items-center rounded-xl border border-border bg-card"
          aria-label="Меню"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-lg font-medium hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <a href={PHONE_HREF} className="mt-2 flex items-center gap-2 rounded-lg bg-primary px-4 py-3 text-lg font-semibold text-primary-foreground">
              <Phone className="h-5 w-5" /> {PHONE}
            </a>
            <div className="mt-2 flex gap-2">
              <a href={TG} target="_blank" rel="noreferrer" className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-card px-3 py-3 font-semibold">
                <Send className="h-5 w-5" /> Telegram
              </a>
              <a href={MAX} target="_blank" rel="noreferrer" className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-card px-3 py-3 font-semibold">
                <MessageCircle className="h-5 w-5" /> MAX
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
