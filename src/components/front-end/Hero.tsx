import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-[#E3EDF6] bg-[url(/fondo.png)] bg-cover bg-center mt-4">
      <div className="container grid md:grid-cols-2 py-8">
        <div className="flex items-center">
          <div
            className="max-w-[450px] space-y-4 relative p-8 rounded-xl"
            style={{
              backdropFilter: "blur(10px) opacity(70%)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <p className="text-white">
              A partir de <span className="font-bold">$999.0</span>
            </p>

            <h1 className="text-orange font-bold text-4xl md:text-5xl">
              La Mejor Colección del 2024
            </h1>

            <h3 className="text-white text-2xl font-['Oregano',cursive]">
              Oferta por tiempo limitado
              <span className="text-red-600"> -10%</span> de descuento!
            </h3>

            <a
              className="inline-block bg-orange text-white rounded-md px-6 py-3 hover:bg-accent hover:text-white"
              href="#"
            >
              Compra Ahora!
            </a>
          </div>
        </div>

        <div>
          <Image
            className="ml-auto"
            src="/hero.png"
            alt="hero"
            height={600}
            width={600}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
