import type { AppProps } from "next/app";

import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";

import "../assets/styles/globals.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
