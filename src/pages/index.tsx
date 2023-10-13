import Image from "next/image";

import product1 from"../assets/produtos/1.png"
import product2 from"../assets/produtos/2.png"
import product3 from"../assets/produtos/3.png"
import { ProductItem } from "@/components/ProductItem";

export default function Home() {
  return (
    <main
      className="flex gap-12 min-h-[36rem] w-full max-w-[calc(100vw-(100vw-1080px)/2)] ml-auto"
    >
      <ProductItem image={product1} price="79,99" title="Camisa1" />
      <ProductItem image={product3} price="79,99" title="Camisa2" />
    </main>
  )
}
