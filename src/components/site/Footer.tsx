import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3 md:px-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground font-black">ЭК</div>
            <span className="text-lg font-bold">ЭкоКабина</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Производство, аренда и обслуживание мобильных туалетных кабин с 2018 года.
          </p>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Контакты</h4>
          <a href="tel:+79030976005" className="flex items-center gap-2 text-base font-semibold hover:text-primary">
            <Phone className="h-4 w-4" /> +7 (903) 097-60-05
          </a>
          <a href="mailto:hello@atlas.ru" className="flex items-center gap-2 text-base hover:text-primary">
            <Mail className="h-4 w-4" /> hello@atlas.ru
          </a>
          <div className="flex items-start gap-2 text-base text-muted-foreground">
            <MapPin className="mt-1 h-4 w-4" /> Санкт-Петербург и Ленинградская область
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Мессенджеры</h4>
          <div className="flex gap-3">
            <a href="https://t.me/" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 font-semibold hover:bg-secondary">
              <Send className="h-4 w-4" /> Telegram
            </a>
            <a href="https://max.ru/" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 font-semibold hover:bg-secondary">
              <MessageCircle className="h-4 w-4" /> MAX
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} ЭкоКабина. Все права защищены.
      </div>
    </footer>
  );
}
