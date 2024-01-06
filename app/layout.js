import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { cn } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "At a glance",
  description: "Made by Faizan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "dark")}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
