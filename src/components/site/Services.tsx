import { Truck, Wrench, Building2, PartyPopper, ShieldCheck, Recycle } from "lucide-react";

const items = [
  { icon: Truck, title: "Доставка по МСК и области", text: "Привезём кабину в течение суток. Своя логистика, без посредников." },
  { icon: Wrench, title: "Обслуживание", text: "Откачка, мойка, дозаправка реагентом по графику." },
  { icon: Building2, title: "Для строек", text: "Долгосрочная аренда от 5 кабин со скидкой и закрывающими документами." },
  { icon: PartyPopper, title: "Для мероприятий", text: "Кабины премиум-класса с раковиной для свадеб и фестивалей." },
  { icon: ShieldCheck, title: "Гарантия", text: "Гарантия на новые кабины 12 месяцев. Постгарантийный ремонт." },
  { icon: Recycle, title: "Утилизация", text: "Безопасная утилизация отходов с выдачей акта об оказании услуг." },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="text-4xl font-black tracking-tight md:text-6xl">Услуги</h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Полный цикл — от подбора до обслуживания. Работаем с физлицами и организациями.
        </p>

        {/* 
          Контейнер: 
          - На мобилках: flex, разрешаем прокрутку по горизонтали, скрываем скроллбар.
          - На ПК (md и выше): обычный grid.
        */}
        <div className="mt-12 
          flex overflow-x-auto gap-5 snap-x snap-mandatory no-scrollbar pb-6
          md:grid md:grid-cols-2 md:overflow-visible md:pb-0 
          lg:grid-cols-3"
        >
          {items.map((it) => (
            <div 
              key={it.title} 
              className="
                min-w-[85vw] snap-center rounded-3xl border border-border bg-card p-7 transition-shadow hover:shadow-lg
                md:min-w-0 md:snap-align-none
              "
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-2xl font-bold">{it.title}</h3>
              <p className="mt-2 text-base text-muted-foreground">{it.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Добавляем стили для скрытия стандартного скроллбара, чтобы карусель выглядела чисто */}
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}