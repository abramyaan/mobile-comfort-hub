import { Mail, MapPin, Send, MessageCircle, Phone } from "lucide-react";
export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-3 md:px-8">
        
        {/* Колонна 1: О нас и реквизиты */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground font-black">A</div>
              <span className="text-xl font-extrabold tracking-tight">ATLAS</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Профессиональное обслуживание и аренда мобильных туалетных кабин с 2018 года.
            </p>
          </div>
          
          <div className="rounded-2xl bg-secondary/30 p-5 text-[13px] text-muted-foreground leading-relaxed border border-border/50">
            <h5 className="mb-2 font-bold text-foreground uppercase tracking-wider text-[11px]">Реквизиты:</h5>
            <p>ИП Потапов Алекс Андреевич</p>
            <p>ИНН: 343519291978</p>
            <p>Банк: ООО "Банк Точка"</p>
            <p>БИК: 044525104</p>
            <p>к/с: 30101810745374525104</p>
            <p>Р/с: 40802810220000409681</p>
          </div>
        </div>

        {/* Колонна 2: Контакты и адреса */}
        <div className="space-y-6">
          <h4 className="text-sm font-bold uppercase tracking-wider text-primary">Контакты</h4>
          <div className="space-y-4">
            <div className="flex flex-col gap-1">
              <a href="tel:+79030976005" className="text-lg font-bold hover:text-primary transition-colors">+7 (903) 097-60-05</a>
              <a href="tel:+79030976676" className="text-lg font-bold hover:text-primary transition-colors">+7 (903) 097-66-76</a>
            </div>
            <a href="mailto:manager+14@atlas-spb.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-4 w-4" /> manager+14@atlas-spb.com
            </a>
            
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="mt-1 h-5 w-5 text-muted-foreground shrink-0" />
                <div className="space-y-2">
                  
                 
                  <p><strong>СПБ:</strong> пос. Тельмана, д. 60О</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Колонна 3: Дополнительно */}
        <div className="space-y-6">
          <h4 className="text-sm font-bold uppercase tracking-wider text-primary">Документы</h4>
          <div className="flex flex-col gap-3">
            <a href="#" className="text-sm hover:underline text-muted-foreground underline-offset-4">Договор оферты</a>
            <a href="#" className="text-sm hover:underline text-muted-foreground underline-offset-4">Политика конфиденциальности</a>
          </div>
          
          <h4 className="text-sm font-bold uppercase tracking-wider text-primary pt-4">Мессенджеры</h4>
          <div className="flex gap-3">
            <a href="#" className="p-3 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all">
              <Send className="h-5 w-5" />
            </a>
            <a href="#" className="p-3 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all">
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-8 text-center text-[12px] text-muted-foreground uppercase tracking-widest">
        © {new Date().getFullYear()} ATLAS. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
      </div>
    </footer>
  );
}