import { useState, useEffect } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogClose, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog"; 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { X } from "lucide-react";
import popupImage from "@/assets/hero-cabinos.jpg";

// Вспомогательный компонент для чистоты консоли (Accessibility)
const VisuallyHidden = ({ children }: { children: React.ReactNode }) => (
  <span className="absolute w-[1px] h-[1px] p-0 -m-[1px] overflow-hidden whitespace-nowrap border-0">
    {children}
  </span>
);

export function OrderModal({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+7 ");
  const [honeypot, setHoneypot] = useState(""); 
  const [startTime, setStartTime] = useState(0); 

  useEffect(() => {
    if (open) {
      setStartTime(Date.now());
      setHoneypot("");
    }
  }, [open]);

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
      toast.error("Слишком быстрая отправка");
      return;
    }
    if (name.trim().length < 2) {
      toast.error("Введите имя");
      return;
    }
    if (phoneDigits.length !== 11) {
      toast.error("Проверьте номер телефона");
      return;
    }

    toast.success("Заявка успешно отправлена!");
    onOpenChange(false);
    setName("");
    setPhone("+7 ");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="overflow-hidden p-0 sm:max-w-[440px] rounded-[2.5rem] border-none bg-background shadow-2xl transition-all"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        {/* Чиним консоль: заголовки для скринридеров */}
        <VisuallyHidden>
          <DialogTitle>Заказать звонок</DialogTitle>
          <DialogDescription>Оставьте ваши данные, и мы перезвоним вам</DialogDescription>
        </VisuallyHidden>

        {/* 1. СТАНДАРТНЫЙ КРЕСТИК (Radix) — для базовой логики */}
        <DialogClose className="absolute right-4 top-4 opacity-0 z-[110] pointer-events-none">
          <X className="h-4 w-4" />
        </DialogClose>

        {/* 2. ТВОЙ КАСТОМНЫЙ КРЕСТИК — перекрывает всё сверху */}
        <DialogClose className="absolute right-3 top-4 z-[120] flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-md border border-white/20 transition-all hover:bg-black/50 active:scale-90 shadow-xl group">
          <X className="h-6 w-6 stroke-[2.5px] transition-transform group-hover:rotate-90" />
          <span className="sr-only">Закрыть</span>
        </DialogClose>

        {/* Шапка с фото */}
        <div className="h-64 relative bg-muted overflow-hidden">
          <img 
            src={popupImage} 
            alt="Interior" 
            className="w-full h-full object-cover"
            loading="eager" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* Форма */}
        <div className="px-8 pb-10 pt-2 text-center">
          <h2 className="text-3xl font-black tracking-tight text-foreground">
            Оставьте заявку
          </h2>
          <p className="text-muted-foreground text-sm mt-2">
            Закажите у нас и получите заправку бака - резервуара в подарок
          </p>

          <form onSubmit={submit} className="mt-8 space-y-4">
            <input 
              type="text" 
              className="hidden" 
              value={honeypot} 
              onChange={(e) => setHoneypot(e.target.value)} 
              tabIndex={-1} 
            />

            <div className="space-y-3">
              <Input 
                value={name} 
                onChange={(e) => handleNameChange(e.target.value)} 
                placeholder="Ваше имя" 
                className="h-14 rounded-2xl bg-secondary/50 border-none px-5 text-lg" 
                required 
              />
              <Input 
                type="tel" 
                value={phone} 
                onChange={(e) => handlePhoneChange(e.target.value)} 
                className="h-14 rounded-2xl bg-secondary/50 border-none px-5 text-lg" 
                required 
              />
            </div>

            <Button 
              type="submit" 
              className="w-full h-15 rounded-2xl font-bold text-xl shadow-lg shadow-primary/20 mt-2"
            >
              Перезвоните мне
            </Button>

            <p className="text-[11px] text-muted-foreground/50 leading-tight">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}