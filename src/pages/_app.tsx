import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Image from "next/image";
import logoImage from "../assets/Logo.svg"
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-start">
      <header className="py-8 w-full max-w-[1180px] mx-auto">
        <Image alt="" src={logoImage} />
      </header>
      <Component {...pageProps} />
    </div>
  );
}
