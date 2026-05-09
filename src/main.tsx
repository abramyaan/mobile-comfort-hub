import React, { useEffect, useState, useRef } from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './components/site/Header'
import { Hero } from './components/site/Hero'
import { Catalog } from './components/site/Catalog'
import { Services } from './components/site/Services'
import { Faq } from './components/site/Faq'
import { OrderForm, type OrderFormHandle } from './components/site/OrderForm'
import { Footer } from './components/site/Footer'
import { OrderModal } from "./components/site/OrderModal"; 
import { Toaster } from "@/components/ui/sonner"
import { Phone } from "lucide-react";
import './styles.css'

function App() {
  const [view, setView] = useState<'full' | 'catalog'>('full');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formRef = useRef<OrderFormHandle>(null);

  useEffect(() => {
    // 1. Проверка режима (Telegram или Сайт)
    const params = new URLSearchParams(window.location.search);
    if (params.get('view') === 'catalog') {
      setView('catalog');
    }

    // 2. Инициализация Telegram WebApp
    const tg = (window as any).Telegram?.WebApp;
    if (tg) {
      tg.ready();
      tg.expand();
    }

    // 3. Таймер на модалку (10 секунд), если это не режим каталога
    if (params.get('view') !== 'catalog') {
      const timer = setTimeout(() => {
        setIsModalOpen(true);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Обработчик кнопки "Выбрать"
  const handleBuy = (name: string) => {
    if (view === 'catalog') {
      console.log("Выбрано в Mini App:", name);
    } else {
      formRef.current?.setProduct(name);
    }
  };

  // --- РЕЖИМ TELEGRAM MINI APP ---
  if (view === 'catalog') {
    return (
      <div className="bg-background min-h-screen">
        <Catalog onBuy={handleBuy} />
      </div>
    );
  }

  // --- ПОЛНЫЙ РЕЖИМ САЙТА ---
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
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110 active:scale-95"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-20"></span>
        <Phone className="relative h-6 w-6" />
      </a>

      {/* Модальное окно по таймеру */}
      <OrderModal open={isModalOpen} onOpenChange={setIsModalOpen} />
      
      {/* Уведомления (Toast) */}
      <Toaster position="top-center" richColors />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(<App />)