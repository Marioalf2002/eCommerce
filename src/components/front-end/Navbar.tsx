import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

interface PropsType {
  setShowCart: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ setShowCart }: PropsType) => {
  const cartCount = useAppSelector((state) => state.cartReducer.length);

  return (
    <div className="pt-4 bg-white top-0 sticky flex justify-center z-10">
      <div className="w-[90%]">
        <div className="flex justify-between items-center">
          <Image src="/logo.png" alt="logo" width={300} height={80} />
          <div className="lg:flex hidden w-full max-w-[500px]">
            <input
              className="border-2 border-accent px-6 py-2 w-full"
              type="text"
              placeholder="Buscar Productos..."
            />

            <div className="bg-accent text-white text-[26px] grid place-items-center px-4">
              <BsSearch />
            </div>
          </div>
          <div className="flex gap-4 md:gap-8 items-center">
            <a href="/src/app/admin/dashboard">
              <div className="md:flex hidden gap-3">
                <div className="rounded-full border-2 border-gray-300 text-gray-500 text-[32px] w-[50px] h-[50px] grid place-content-center">
                  <AiOutlineUser />
                </div>

                <div>
                  <p className="text-gray-500">Hola, Inicia Sesión</p>
                  <p className="font-medium">Tu Cuenta</p>
                </div>
              </div>
            </a>

            <div
              className="text-gray-500 text-[32px] relative cursor-pointer"
              onClick={() => setShowCart(true)}
            >
              <AiOutlineShoppingCart />
              <div className="absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center">
                {cartCount}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
