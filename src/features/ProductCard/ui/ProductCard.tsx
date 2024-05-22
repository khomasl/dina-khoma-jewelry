import { FC } from "react";
import Image from "next/image";
import Link from "next/link";


type Props = {
  product: {
    title: string;
    description: string;
    price: string;
    src: string;
    link: string
  }
}

const ProductCard: FC<Props> = ({product}) => {
  return (
    <div className="overflow-hidden rounded-xl bg-white product-card">
      <Link
        href={product.link}
      >
        <div className="relative w-full aspect-square">
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover"
            alt={product.title || ''}
            src={product.src}
            fill
          />
        </div>
        <div className="p-4">
          <h4 className="font-semibold text-lg mb-1">{product.title}</h4>
          <p className="text-sm text-gray-900 mb-2">{product.description}</p>
          <div className="font-semibold text-lg text-right">{product.price}</div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
