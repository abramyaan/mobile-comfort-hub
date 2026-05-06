import grafit1 from "@/assets/grafit1.jpg";
import grafit2 from "@/assets/grafit2.jpg";
import grafit3 from "@/assets/grafit3.jpg";
import grafit4 from "@/assets/grafit4.png";

import zelen1 from "@/assets/zelen1.png";
import zelen2 from "@/assets/zelen2.png";
import zelen3 from "@/assets/zelen3.png";

import lux1 from "@/assets/lux1.png";
import lux2 from "@/assets/lux2.png";

export type Cabin = {
  id: string;
  name: string;
  price: number;
  rent: number;
  size: string;
  weight: string;
  visits: string;
  tank: string;
  manufacturer: string;
  warranty: string;
  description: string;
  images: string[];
};

export const cabins: Cabin[] = [
  {
    id: "comfort",
    name: "Туалетная кабина\nЦвет: графит",
    price: 26000,
    rent: 6000,
    size: "115 × 115 × 220 см",
    weight: "70 кг",
    visits: "500",
    tank: "250 л",
    manufacturer: "Россия",
    warranty: "12 месяцев",
    description: "Современная модель в стильном цвете графит. Усиленный каркас, антискользящий пол и крючок для одежды.",
    images: [grafit1, grafit2, grafit3, grafit4],
  },
  {
    id: "standard",
    name: "Туалетная кабина\nЦвет: зеленый, синий, серый",
    price: 23000,
    rent: 5000,
    size: "115 × 115 × 220 см",
    weight: "70 кг",
    visits: "500",
    tank: "250 л",
    manufacturer: "Россия",
    warranty: "12 месяцев",
    description: "Эконом-решение для строительных объектов и дачных участков. Корпус из ударопрочного полиэтилена, надежная вентиляция.",
    images: [zelen1, zelen2, zelen3],
  },
  {
    id: "premium",
    name: "Туалетная кабина Люкс\nЦвет: графит",
    price: 26000,
    rent: 7000,
    size: "115 × 115 × 220 см",
    weight: "70 кг",
    visits: "500",
    tank: "250 л",
    manufacturer: "Россия",
    warranty: "12 месяцев",
    description: "Максимальная комплектация в цвете графит. Включает рукомойник, мягкое сиденье и дополнительную фурнитуру.",
    images: [lux1, lux2],
  },
];
