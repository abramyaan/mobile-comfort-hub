import { Truck, Wrench, Building2, CalendarDays, ShieldCheck, Recycle, Droplets, Sparkles, ChevronRight, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";

const items = [
  { 
    icon: Droplets, 
    title: "Заправка расходными материалами", 
    text: "Комплексная заправка туалетной кабины туалетной бумагой, мылом и дезинфицирующими средствами." 
  },
  { 
    icon: Recycle, 
    title: "Утилизация сточных вод", 
    text: "Профессиональный сбор и экологичная утилизация сточных вод из туалетного резервуара." 
  },
  { 
    icon: Wrench, 
    title: "Заправка бака-резервуара", 
    text: "Наполнение бака специальными реагентами для расщепления отходов и устранения запахов." 
  },
  { 
    icon: Truck, 
    title: "Доставка на объект", 
    text: "Оперативная доставка и установка мобильных туалетных кабин по вашему адресу." 
  },
  { 
    icon: Sparkles, 
    title: "Полная уборка", 
    text: "Тщательная санитарная обработка внутренних поверхностей кабины и приемного бака." 
  },
  { 
    icon: CalendarDays, 
    title: "Краткосрочная аренда", 
    text: "Аренда оборудования на срок от одного дня для проведения праздников и мероприятий." 
  },
  { 
    icon: Building2, 
    title: "Долгосрочная аренда", 
    text: "Выгодные условия при длительном прокате для строек и производственных площадок." 
  },
  { 
    icon: ShieldCheck, 
    title: "Гарантия 12 месяцев", 
    text: "Предоставляем полную гарантию на товар и комплектующие сроком на один год." 
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        
        {/* Шапка секции: Текст слева, Кнопка справа */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex-1">
            <h2 className="text-4xl font-black tracking-tight md:text-6xl text-foreground">
              Наши услуги
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Обеспечиваем полный цикл сервисного обслуживания мобильных туалетных кабин.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <Button 
              asChild
              className="h-12 px-6 rounded-xl bg-primary font-bold shadow-lg shadow-primary/20 transition-transform active:scale-95"
            >
              <a href="#order" className="flex items-center gap-2">
                <ClipboardList className="h-4 w-4" />
                Оставить заявку
              </a>
            </Button>

            {/* Прозрачная анимированная стрелка для мобилок */}
            <div className="flex flex-col items-center gap-1 md:hidden opacity-40 animate-pulse">
              <span className="text-[10px] uppercase font-bold tracking-widest">Листайте</span>
              <ChevronRight className="h-5 w-5 animate-bounce-x" />
            </div>
          </div>
        </div>

        <div className="mt-12 
          flex overflow-x-auto gap-5 snap-x snap-mandatory no-scrollbar pb-6
          md:grid md:grid-cols-2 md:overflow-visible md:pb-0 
          lg:grid-cols-4"
        >
          {items.map((it) => (
            <div 
              key={it.title} 
              className="
                min-w-[85vw] snap-center rounded-3xl border border-border bg-card p-7 
                transition-all transform-gpu will-change-transform
                hover:shadow-lg hover:border-primary/50
                md:min-w-0 md:snap-align-none
              "
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-inner">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold leading-tight">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.text}</p>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        .animate-bounce-x {
          animation: bounce-x 1s infinite;
        }
      `}} />
    </section>
  );
}