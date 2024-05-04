import React from "react";

const Banner = () => {
  return (
    <div className="container mt-32">
      <div className="lg:grid lg:grid-cols-[66%,34%] gap-4 pr-[15px]">
        <div className="h-[200px] md:h-[300px] bg-[url(/samsung.avif)] bg-cover bg-center rounded-xl p-8 md:p-16">
          <p className="text-white text-xl font-medium">
            Rabajas del 20% en Toda la Tienda
          </p>
          <h2 className="text-white font-bold text-xl sm:text-3xl max-w-[240px]">
            Samsung Galaxy S24 Ultra
          </h2>
          <a
            className="inline-block mt-6 hover:text-accent text-orange font-medium"
            href="#"
          >
            Compra Ahora
          </a>
        </div>
        <div className="lg:hidden">
          <div className="h-[200px] bg-[url(/banner.jpg)] bg-right bg-cover rounded-xl"></div>
        </div>
        <div className="hidden lg:block">
          <div className="h-[300px] bg-[url(/banner.jpg)] bg-right bg-cover rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
