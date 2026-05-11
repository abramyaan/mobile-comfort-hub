import { Mail, MapPin, Send, MessageCircle, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card transform-gpu">
      <div className="mx-auto grid max-w-7xl gap-16 px-4 py-20 md:grid-cols-3 md:px-8 md:py-28">
        
        {/* Колонна 1: О нас и реквизиты */}
        <div className="space-y-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground font-black text-xl shadow-lg shadow-primary/20">
                A
              </div>
              <span className="text-3xl font-black tracking-tighter">ATLAS</span>
            </div>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed md:text-lg">
              Профессиональное обслуживание и аренда мобильных туалетных кабин по Санкт-Петербургу и области с 2018 года.
            </p>
          </div>
          
          <div className="rounded-[2rem] bg-secondary/40 p-8 text-sm text-muted-foreground leading-relaxed border border-border/60 shadow-inner">
            <h5 className="mb-4 font-bold text-foreground uppercase tracking-widest text-xs">Юридическая информация:</h5>
            <div className="space-y-1.5 font-medium">
              <p>ИП Потапов Алекс Андреевич</p>
              <p>ИНН: 343519291978</p>
              <p>Банк: ООО "Банк Точка"</p>
              <p>БИК: 044525104</p>
              <p>К/с: 30101810745374525104</p>
              <p>Р/с: 40802810220000409681</p>
            </div>
          </div>
        </div>

        {/* Колонна 2: Контакты и адреса */}
        <div className="space-y-10">
          <h4 className="text-base font-black uppercase tracking-[0.2em] text-primary">Связь с нами</h4>
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <a href="tel:+79030976005" className="text-2xl font-black hover:text-primary transition-colors md:text-3xl">
                +7 (903) 097-60-05
              </a>
              <a href="tel:+79030976676" className="text-2xl font-black hover:text-primary transition-colors md:text-3xl opacity-80">
                +7 (903) 097-66-76
              </a>
            </div>
            
            <div className="space-y-4">
              <a href="mailto:manager+14@atlas-spb.com" className="flex items-center gap-3 text-lg font-bold hover:text-primary transition-colors">
                <div className="bg-primary/10 p-2 rounded-lg"><Mail className="h-5 w-5" /></div>
                manager+14@atlas-spb.com
              </a>
              
              <div className="flex items-start gap-3 text-lg">
                <div className="bg-primary/10 p-2 rounded-lg mt-1"><MapPin className="h-5 w-5 text-primary" /></div>
                <div className="space-y-1">
                  <p className="font-bold">Главный офис:</p>
                  <p className="text-muted-foreground leading-snug">Ленинградская область, пос. Тельмана, д. 60О</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Колонна 3: Дополнительно */}
        <div className="space-y-10">
          <div>
            <h4 className="text-base font-black uppercase tracking-[0.2em] text-primary mb-6">Документация</h4>
            <div className="flex flex-col gap-4">
              <a href="#" className="text-base font-bold hover:text-primary transition-all flex items-center gap-2 group">
                <div className="h-1.5 w-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                Договор публичной оферты
              </a>
              <a href="#" className="text-base font-bold hover:text-primary transition-all flex items-center gap-2 group">
                <div className="h-1.5 w-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                Политика конфиденциальности
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-base font-black uppercase tracking-[0.2em] text-primary mb-6">Мы в мессенджерах</h4>
            <div className="flex gap-4">
              <a href="#" className="h-14 w-14 grid place-items-center rounded-2xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all shadow-md active:scale-90">
                <Send className="h-6 w-6" />
              </a>
              <a href="#" className="h-14 w-14 grid place-items-center rounded-2xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all shadow-md active:scale-90">
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-12 text-center text-[13px] text-muted-foreground font-bold uppercase tracking-[0.3em]">
        © {new Date().getFullYear()} ATLAS. ПРОФЕССИОНАЛЬНОЕ ОБСЛУЖИВАНИЕ. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
      </div>
    </footer>
  );
}