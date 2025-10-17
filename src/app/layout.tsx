import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

const rubik = Rubik({
  subsets: ["latin"], // Specify the desired subsets
  weight: ["400", "700"], // Specify desired weights, or omit for variable font
  display: "swap", // Recommended for better performance
});

export const metadata: Metadata = {
  title: "Store",
  description: "We make your wallet cry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="nord">
      <body className={`${rubik.className} antialiased bg-secondary`}>
        <Navbar />
        <main className="p-4 max-w-7xl m-auto min-w-[320] ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
