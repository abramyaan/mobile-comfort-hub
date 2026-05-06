import { useState, useEffect, forwardRef, useImperativeHandle, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { MapPin, Phone } from "lucide-react";

export type OrderFormHandle = { setProduct: (name: string) => void };

export const OrderForm = forwardRef<OrderFormHandle>((_, ref) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+7 ");
  const [product, setProduct] = useState("");
  const [honeypot, setHoneypot] = useState(""); 
  const [startTime, setStartTime] = useState(0); 
  const sectionRef = useRef<HTMLElement>(null);

  useImperativeHandle(ref, () => ({
    setProduct: (n: string) => {
      setProduct(n);
      setTimeout(() => sectionRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
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

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneDigits = phone.replace(/\D/g, "");
    if (honeypot) return; 
    if (Date.now() - startTime < 2000) {
      toast.error("Пожалуйста, заполните форму");
      return;
    }
    if (name.trim().length < 2) {
      toast.error("Введите корректное имя");
      return;
    }
    if (phoneDigits.length !== 11) {
      toast.error("Номер должен содержать 11 цифр");
      return;
    }

    toast.success("Заявка отправлена! Мы свяжемся с вами.");
    setName("");
    setPhone("+7 ");
    setProduct("");
  };

  return (
    <section id="order" ref={sectionRef} className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="overflow-hidden rounded-[3rem] bg-card border border-border shadow-2xl">
          <div className="grid md:grid-cols-2">
            
            {/* КАРТА СЛЕВА (СПб, пос. Тельмана) */}
            <div className="relative min-h-[450px] bg-muted">
              <iframe 
                src="https://yandex.ru/map-widget/v1/?ll=30.604206%2C59.716912&z=16&mode=whatshere&whatshere%5Bpoint%5D=30.603908%2C59.717133"
                className="absolute inset-0 h-full w-full grayscale-[0.2]"
                frameBorder="0"
                allowFullScreen
              />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-background/95 p-5 backdrop-blur-md shadow-xl border border-border md:bottom-8 md:left-8 md:right-8">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Наш склад в СПб:</p>
                    <p className="text-sm text-muted-foreground leading-snug">
                      посёлок Тельмана, 60О, Тосненский район, Ленинградская область
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ФОРМА ЗАЯВКИ СПРАВА */}
            <div className="bg-primary p-8 md:p-14 text-primary-foreground">
              <div className="max-w-md mx-auto md:mx-0">
                <h2 className="text-4xl font-black leading-tight md:text-5xl">Оставьте заявку</h2>
                <p className="mt-4 text-lg text-primary-foreground/80">
                  Свяжитесь с нами для консультации или заказа. Перезвоним в течение 15 минут!
                </p>
                
                <form onSubmit={submit} className="mt-10 space-y-4 rounded-[2rem] bg-background p-8 text-foreground shadow-xl relative">
                  <input type="text" className="hidden" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} tabIndex={-1} />
                  
                  {product && (
                    <div className="mb-4 rounded-xl bg-primary/5 border border-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                      Выбран товар: {product}
                    </div>
                  )}
                  
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="ml-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">Ваше имя</Label>
                    <Input 
                      id="name" 
                      value={name} 
                      onChange={(e) => handleNameChange(e.target.value)} 
                      placeholder="Алексей" 
                      className="h-14 rounded-xl border-none bg-secondary/50 px-5 text-lg focus-visible:ring-primary/20" 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="ml-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">Телефон</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      value={phone} 
                      onChange={(e) => handlePhoneChange(e.target.value)} 
                      className="h-14 rounded-xl border-none bg-secondary/50 px-5 text-lg focus-visible:ring-primary/20" 
                      required 
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="mt-4 h-16 w-full rounded-xl bg-primary text-xl font-black text-primary-foreground shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]">
                    Отправить заявку
                  </Button>
                  
                  <p className="mt-4 text-center text-[10px] text-muted-foreground uppercase tracking-widest leading-tight">
                    Нажимая кнопку, вы соглашаетесь <br /> с обработкой персональных данных
                  </p>
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