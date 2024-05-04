import FeatureCard from "./FeatureCard";
import React from "react";
import { MdSupportAgent } from "react-icons/md";
import { RiRefund2Fill } from "react-icons/ri";
import { TbRosetteDiscount, TbTruckDelivery } from "react-icons/tb";

const data = [
  {
    icon: <TbTruckDelivery className="text-4xl" />,
    title: "Envío Gratis",
    desc: "Pedidos de todos los artículos",
  },
  {
    icon: <RiRefund2Fill className="text-4xl" />,
    title: "Devolucion y Reembolso",
    desc: "Garantía de devolución de dinero",
  },
  {
    icon: <TbRosetteDiscount className="text-4xl" />,
    title: "Descuentos para Miembros",
    desc: "A partir de $99.00",
  },
  {
    icon: <MdSupportAgent className="text-4xl" />,
    title: "Soporte 24/7",
    desc: "Soporte en línea las 24 horas del día",
  },
];

const Feature = () => {
  return (
    <div className="container grid gap-1 sm:grid-cols-2 lg:grid-cols-4 mt-8">
      {data.map((item) => (
        <FeatureCard
          key={item.title}
          icon={item.icon}
          title={item.title}
          desc={item.desc}
        />
      ))}
    </div>
  );
};

export default Feature;
