import Image from "next/image";

import product1 from "../assets/produtos/1.png";
import product2 from "../assets/produtos/2.png";
import product3 from "../assets/produtos/3.png";
import { ProductItem } from "@/components/ProductItem";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: { perView: 3, spacing: 48 },
  });
  return (
    <main
      ref={sliderRef}
      className="keen-slider flex flex-row min-h-[36rem] w-full max-w-[calc(100vw-(100vw-1080px)/2)] ml-auto"
    >
      <ProductItem className={"keen-slider__slide"} image={product1} price="79,99" title="Camisa1" />
      <ProductItem className={"keen-slider__slide"} image={product2} price="79,99" title="Camisa2" />
      <ProductItem className={"keen-slider__slide"} image={product3} price="79,99" title="Camisa3" />
      <ProductItem className={"keen-slider__slide"} image={product1} price="79,99" title="Camisa1" />
      <ProductItem className={"keen-slider__slide"} image={product2} price="79,99" title="Camisa2" />
      <ProductItem className={"keen-slider__slide"} image={product3} price="79,99" title="Camisa3" />
    </main>
  );
}
