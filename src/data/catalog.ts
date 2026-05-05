import blue from "@/assets/cabin-blue.jpg";
import green from "@/assets/cabin-green.jpg";
import grey from "@/assets/cabin-grey.jpg";
import hero from "@/assets/hero-cabins.jpg";

export type Cabin = {
  id: string;
  name: string;
  price: number;
  rent: number;
  size: string;
  description: string;
  images: string[];
};

export const cabins: Cabin[] = [
  {
    id: "standard",
    name: "Туалетная кабина\nЦвета: синий, зеленый, серый",
    price: 23000,
    rent: 5000,
    size: "1.1 × 1.1 × 2.2 м",
    description:
      "Эконом-решение для строительных объектов и дачных участков. Корпус из ударопрочного полиэтилена, бак на 250 литров, надежная вентиляция.",
    images: [blue, hero, green],
  },
  {
    id: "comfort",
    name: "Туалетная кабина\nЦвет: графит",
    price: 26000,
    rent: 6000,
    size: "1.1 × 1.1 × 2.2 м",
    description:
      "Современная модель в стильном цвете графит. Усиленный каркас, бак 250 литров, антискользящий пол и крючок для одежды.",
    images: [green, hero, blue],
  },
  {
    id: "premium",
    name: "Туалетная кабина Люкс\nЦвет: графит",
    price: 26000,
    rent: 7000,
    size: "1.1 × 1.1 × 2.2 м",
    description:
      "Максимальная комплектация в цвете графит. Включает рукомойник, мягкое сиденье и дополнительную фурнитуру для комфортного использования.",
    images: [grey, hero, blue],
  },
];