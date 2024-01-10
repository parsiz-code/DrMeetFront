import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "@/components/Modules/Navbar/Navbar";
import Footer from "@/components/Modules/Footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
      <Footer />
    </NextUIProvider>
  );
}
