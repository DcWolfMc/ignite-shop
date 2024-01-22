import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Image from "next/image";
import logoImage from "../assets/Logo.svg";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex min-h-screen flex-col items-start justify-center">
      <header className="mx-auto w-full max-w-[1180px] py-8">
        <Image alt="" src={logoImage} />
      </header>
      <Component {...pageProps} />
    </div>
  );
}
