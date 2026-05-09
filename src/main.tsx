import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './components/site/Header'
import { Hero } from './components/site/Hero'
import { Catalog } from './components/site/Catalog'
import { OrderForm } from './components/site/OrderForm'
import './styles.css'

function App() {
  const [view, setView] = useState<'full' | 'catalog'>('full');

  useEffect(() => {
    // 1. Проверяем URL на наличие параметра view=catalog
    const params = new URLSearchParams(window.location.search);
    if (params.get('view') === 'catalog') {
      setView('catalog');
    }

    // 2. Инициализируем Telegram и растягиваем на весь экран
    const tg = (window as any).Telegram?.WebApp;
    if (tg) {
      tg.ready();
      tg.expand(); // Это «перекрывает» строку ввода в ТГ, когда апп открыт
    }
  }, []);

  if (view === 'catalog') {
    return (
      <div className="bg-background min-h-screen">
        {/* Показываем ТОЛЬКО каталог, без хедера и героя */}
        <Catalog onBuy={(name) => console.log(name)} />
      </div>
    );
  }

  return (
    <>
      <Header />
      <Hero />
      <Catalog onBuy={(name) => console.log(name)} />
      <OrderForm />
    </>
  );
}

// Рендеринг (упрощенно для примера)
const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(<App />)