"use client";

import { MdDashboard, MdManageAccounts } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { IoAnalytics, IoSettings } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiLogOut } from "react-icons/fi";
import Image from "next/image";

const menus = [
  {
    title: "Dashboard",
    icon: <MdDashboard />,
    href: "/admin/dashboard",
  },
  {
    title: "Productos",
    icon: <RiShoppingCartLine />,
    href: "/admin/products",
  },
  {
    title: "Cuenta",
    icon: <MdManageAccounts />,
    href: "#",
  },
  {
    title: "Transacciones",
    icon: <GrTransaction />,
    href: "#",
  },
  {
    title: "Analiticas",
    icon: <IoAnalytics />,
    href: "#",
  },
  {
    title: "Configuracion",
    icon: <IoSettings />,
    href: "#",
  },
  {
    title: "Salir",
    icon: <FiLogOut />,
    href: "/",
  },
];

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <div className="bg-white w-[300px] min-h-screen p-4 shrink-0">
      <div className="flex items-center gap-4">
        <Image src="/logo.png" alt="logo" width={350} height={10} />
      </div>
      <ul className="space-y-4 mt-6">
        {menus.map((menu) => (
          <Link
            key={menu.title}
            href={menu.href}
            className={`flex gap-2 items-center p-4 rounded-lg cursor-pointer hover:bg-orange hover:text-white ${
              pathName === menu.href ? "bg-orange text-white" : "bg-grey-200"
            }`}
          >
            <div className="text-[20px]">{menu.icon}</div>
            <p>{menu.title}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
