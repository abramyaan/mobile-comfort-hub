import { useState, useEffect, forwardRef, useImperativeHandle, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { MapPin, Star } from "lucide-react";

// Импорт аватаров для отзывов
import otziv1 from "@/assets/otziv1.jpg";
import otziv2 from "@/assets/otziv2.jpg";
import otziv3 from "@/assets/otziv3.jpg";

export type OrderFormHandle = { setProduct: (name: string) => void };

const reviews = [
  {
    name: "Юрий Инкин",
    image: otziv1,
    text: "Хочу выразить огромную благодарность Максиму за отличную работу, за оперативность, за быструю доставку. Человек всегда на связи, все объясняет. И хочу отметить Владимира, это человек, который нам привез нашу кабину — милейший, юморной и добрый человек. Спасибо вам большое"
  },
  {
    name: "Татьяна Пушилова",
    image: otziv2,
    text: "Заказала туалет. Выбрала. Быстро договорились и привезли на следующий день. Поставили на нужное место. Спасибо. Продавца рекомендую"
  },
  {
    name: "Валентин Егоров",
    image: otziv3,
    text: "Заказал новую кабинку на дачу. Привезли, помогли поставить. Дефектов нет. Внутри кабинки нет никаких сквозняков. Качеством и доставкой доволен. Рекомендую!"
  }
];

// ТВОИ ДАННЫЕ (Вставь токен сюда)
const TG_TOKEN = "8582073233:AAGEmpq0gFzV6h_sujoJW7hjMPUAZSDkGUc"; 
const CHAT_ID = "-1005177306707";

export const OrderForm = forwardRef<OrderFormHandle>((_, ref) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+7 ");
  const [product, setProduct] = useState("");
  const [honeypot, setHoneypot] = useState(""); 
  const [startTime, setStartTime] = useState(0); 
  
  const formElementRef = useRef<HTMLFormElement>(null);

  useImperativeHandle(ref, () => ({
    setProduct: (n: string) => {
      setProduct(n);
      setTimeout(() => {
        formElementRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 50);
    },
  }));

  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  const handleNameChange = (v: string) => {
    setName(v.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, ""));
  };

  const handlePhoneChange = (v: string) => {
    let digits = v.replace(/\D/g, "");
    if (digits.length <= 1) {
      setPhone("+7 ");
      return;
    }
    digits = digits.substring(0, 11);
    let formatted = "+7 ";
    if (digits.length > 1) formatted += digits.substring(1, 4);
    if (digits.length > 4) formatted += " " + digits.substring(4, 7);
    if (digits.length > 7) formatted += " " + digits.substring(7, 9);
    if (digits.length > 9) formatted += " " + digits.substring(9, 11);
    setPhone(formatted);
  };

  // ФУНКЦИЯ ОТПРАВКИ НАПРЯМУЮ В ТЕЛЕГРАМ
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const phoneDigits = phone.replace(/\D/g, "");
    
    if (honeypot) return; 
    if (name.trim().length < 2) {
      toast.error("Введите корректное имя");
      return;
    }
    if (phoneDigits.length !== 11) {
      toast.error("Номер должен содержать 11 цифр");
      return;
    }

    const message = `🔔 **НОВАЯ ЗАЯВКА С САЙТА**\n\n👤 Имя: ${name}\n📱 Телефон: ${phone}\n📦 Товар: ${product || "Не выбран"}`;

    try {
      const response = await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: "Markdown"
        }),
      });

      if (response.ok) {
        toast.success("Заявка успешно отправлена в группу!");
        setName("");
        setPhone("+7 ");
        setProduct("");
      } else {
        toast.error("Ошибка при отправке в Telegram");
      }
    } catch (error) {
      console.error(error);
      toast.error("Нет интернет-соединения");
    }
  };

  return (
    <section id="order" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        
        {/* Отзывы */}
        <div className="mb-16">
          <h2 className="mb-10 text-3xl font-black md:text-5xl text-center">Отзывы наших клиентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="flex flex-col rounded-[2rem] border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <img src={r.image} alt={r.name} className="h-14 w-14 rounded-full object-cover border-2 border-primary/20" />
                  <div>
                    <p className="font-bold text-lg leading-tight">{r.name}</p>
                    <div className="flex text-yellow-500 mt-1">
                      {[...Array(5)].map((_, j) => <Star key={j} className="h-3 w-3 fill-current" />)}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic leading-relaxed">"{r.text}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Форма */}
        <div className="overflow-hidden rounded-[3rem] bg-card border border-border shadow-2xl">
          <div className="grid md:grid-cols-2">
            
            <div className="relative min-h-[450px] bg-muted">
              <iframe 
                src="https://yandex.ru/map-widget/v1/?ll=30.603908%2C59.717133&z=16&pt=30.603908%2C59.717133,pm2rdm"
                className="absolute inset-0 h-full w-full grayscale-[0.2]"
                frameBorder="0"
                allowFullScreen
              />
            </div>

            <div className="bg-primary p-8 md:p-14 text-primary-foreground">
              <div className="max-w-md mx-auto md:mx-0">
                <h2 className="text-4xl font-black leading-tight md:text-5xl">Оставьте заявку</h2>
                <form 
                  ref={formElementRef}
                  onSubmit={submit} 
                  className="mt-10 space-y-4 rounded-[2rem] bg-background p-8 text-foreground shadow-xl relative"
                >
                  <input type="text" className="hidden" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} tabIndex={-1} />
                  
                  {product && (
                    <div className="mb-4 rounded-xl bg-primary/5 border border-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                      Выбран товар: {product}
                    </div>
                  )}
                  
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="ml-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">Ваше имя</Label>
                    <Input id="name" value={name} onChange={(e) => handleNameChange(e.target.value)} placeholder="Алексей" className="h-14 rounded-xl border-none bg-secondary/50 px-5 text-lg" required />
                  </div>
                  
                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="ml-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">Телефон</Label>
                    <Input id="phone" type="tel" value={phone} onChange={(e) => handlePhoneChange(e.target.value)} className="h-14 rounded-xl border-none bg-secondary/50 px-5 text-lg" required />
                  </div>
                  
                  <Button type="submit" size="lg" className="mt-4 h-16 w-full rounded-xl bg-primary text-xl font-black text-primary-foreground shadow-lg active:scale-[0.98]">
                    Отправить заявку
                  </Button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
});

OrderForm.displayName = "OrderForm";