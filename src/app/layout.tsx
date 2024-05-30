import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/admin-panel/AuthProvider";
import App from "./App";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marte~Tec",
  description: "eCommerce Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <App>{children}</App>
        {/* <AuthProvider>
        <App>{children}</App>
        </AuthProvider> */}
        <Toaster position="bottom-center" reverseOrder={false} />
      </body>
    </html>
  );
}
