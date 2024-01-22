import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { FunctionComponent, HtmlHTMLAttributes } from "react";

interface ProdutItemProps extends HtmlHTMLAttributes<HTMLElement>{
  image: string | StaticImport;
  title: string;
  price: string;
}

export const ProductItem: FunctionComponent<ProdutItemProps> = ({
  image,
  price,
  title,
  className,
  ...rest
}) => {
  return (
    <div className={`group ${className} relative rounded-xl bg-gradient-to-b from-blue-500 to-blue-300 overflow-hidden cursor-pointer` }{...rest}>
      <Image src={image} width={520} height={480} alt="" className="cover" />
      <footer className="absolute bottom-0 p-8 w-full flex flex-row justify-between items-center rounded-b-xl bg-gray-800 bg-opacity-60  transition-all duration-200  translate-y-[100%] group-hover:translate-y-[0%]">
        <strong className="text-lg font-bold"> {title}</strong>
        <span className="text-xl font-bold text-green-300">{price}</span>
      </footer>
    </div>
  );
};
