import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Catalog } from "@/components/site/Catalog";
import { Services } from "@/components/site/Services";
import { Faq } from "@/components/site/Faq";
import { OrderForm, type OrderFormHandle } from "@/components/site/OrderForm";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ЭкоКабина — аренда и продажа мобильных туалетных кабин с доставкой" },
      { name: "description", content: "Производство, аренда и продажа биотуалетов в Москве и области. Доставка, обслуживание и обмен. Цены от 6 500 ₽/сутки." },
    ],
  }),
  component: Index,
});

function Index() {
  const formRef = useRef<OrderFormHandle>(null);
  const handleBuy = (name: string) => formRef.current?.setProduct(name);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Catalog onBuy={handleBuy} />
        <Services />
        <Faq />
        <OrderForm ref={formRef} />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}
