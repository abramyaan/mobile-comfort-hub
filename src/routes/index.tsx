import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Catalog } from "@/components/site/Catalog";
import { Services } from "@/components/site/Services";
import { Faq } from "@/components/site/Faq";
import { OrderForm, type OrderFormHandle } from "@/components/site/OrderForm";
import { Footer } from "@/components/site/Footer";
import { OrderModal } from "@/components/site/OrderModal"; 
import { Phone } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const formRef = useRef<OrderFormHandle>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Таймер на 10 секунд при загрузке страницы
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 10000); // 10000 мс = 10 секунд

    return () => clearTimeout(timer); // Очистка таймера при уходе со страницы
  }, []);

  const handleBuy = (name: string) => formRef.current?.setProduct(name);

  return (
    <div className="relative min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Catalog onBuy={handleBuy} />
        <Services />
        <Faq />
        <OrderForm ref={formRef} />
      </main>
      <Footer />

      {/* Кнопка звонка справа внизу */}
      <a 
        href="tel:+79030976005"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl transition-transform active:scale-90"
      >
        <Phone className="h-6 w-6" />
        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />
      </a>

      {/* Всплывающее окно с фото */}
      <OrderModal open={isModalOpen} onOpenChange={setIsModalOpen} />

      <Toaster position="top-center" richColors />
    </div>
  );
}