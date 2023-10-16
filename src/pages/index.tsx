import { GetStaticProps } from "next";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { useKeenSlider } from "keen-slider/react";
import { ProductItem } from "@/components/ProductItem";
import "keen-slider/keen-slider.min.css";

interface Homeprops {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[];
}

export default function Home({ products }: Homeprops) {
  const [sliderRef] = useKeenSlider({
    slides: { perView: 3, spacing: 48 },
  });
  return (
    <main
      ref={sliderRef}
      className="keen-slider flex flex-row min-h-[36rem] w-full max-w-[calc(100vw-(100vw-1080px)/2)] ml-auto"
    >
      {products.map((product) => (
        <ProductItem
          key={product.id}
          className="keen-slider__slide"
          price={product.price}
          title={product.name}
          image={product.imageUrl}
        />
      ))}
    </main>
  );
}
// Usar chamadas assim para pegar informações que são CRUCIAIS para a pagina.
export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format((price.unit_amount as number) / 100),
    };
  });

  return {
    props: {
      products: products,
    },
    revalidate: 60*60*5 //5 hours
  };
};
