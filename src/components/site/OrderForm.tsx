import { useState, useEffect, forwardRef, useImperativeHandle, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export type OrderFormHandle = { setProduct: (name: string) => void };

export const OrderForm = forwardRef<OrderFormHandle>((_, ref) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState("");
  const sectionRef = useRef<HTMLElement>(null);

  useImperativeHandle(ref, () => ({
    setProduct: (n: string) => {
      setProduct(n);
      setTimeout(() => sectionRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
    },
  }));

  useEffect(() => {
    if (!phone) setPhone("+7 ");
  }, [phone]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || phone.replace(/\D/g, "").length < 11) {
      toast.error("Заполните имя и телефон");
      return;
    }
    toast.success("Заявка отправлена! Перезвоним в течение 15 минут.");
    setName("");
    setPhone("+7 ");
    setProduct("");
  };

  return (
    <section id="order" ref={sectionRef} className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-primary text-primary-foreground shadow-2xl">
          <div className="grid gap-10 p-8 md:grid-cols-2 md:p-14">
            <div>
              <h2 className="text-4xl font-black leading-tight md:text-5xl">Оставьте заявку</h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Перезвоним в течение 15 минут, ответим на вопросы и поможем подобрать подходящую кабину.
              </p>
              <a href="tel:+74950000000" className="mt-6 inline-block text-2xl font-bold underline-offset-4 hover:underline">
                +7 (495) 000-00-00
              </a>
            </div>
            <form onSubmit={submit} className="space-y-4 rounded-2xl bg-background p-6 text-foreground">
              {product && (
                <div className="rounded-lg bg-accent px-3 py-2 text-sm font-medium text-accent-foreground">
                  Товар: {product}
                </div>
              )}
              <div>
                <Label htmlFor="name" className="text-base">Имя</Label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ваше имя" className="mt-1.5 h-12 text-base" />
              </div>
              <div>
                <Label htmlFor="phone" className="text-base">Телефон</Label>
                <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+7 999 000-00-00" className="mt-1.5 h-12 text-base" />
              </div>
              <Button type="submit" size="lg" className="h-14 w-full text-base">Отправить заявку</Button>
              <p className="text-xs text-muted-foreground">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});
OrderForm.displayName = "OrderForm";
