import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import {Media} from "@/modules/admin/payload-types";


type Props = {
  product: {     title?: string | null | undefined;     description?: string | null | undefined;     price?: string | null | undefined;     link?: string | null | undefined;     image: number | Media;     id?: string | null | undefined; }
}

const ProductCard: FC<Props> = ({product}) => {
  return (
    <div className="overflow-hidden rounded-xl bg-white product-card">
      <Link
        href={product.link || ''}
      >
        <div className="relative w-full aspect-square">
          {typeof product.image !== 'number' ? (
              <Image
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  alt={product.title || ''}
                  title={product.title + '. ' + product.description || ''}
                  src={product.image.url || '/no-photo.png'}
                  fill
              />
          ) : null}

        </div>
        <div className="p-4">
          <h2 className="h-[65px] md:h-[30px] lg:h-[65px] xl:h-[30px] font-semibold text-lg mb-1">{product.title}</h2>
          {product.description ? <h3 className="h-[105px] md:h-[60px] lg:h-[100px] xl:h-[85px] 2xl:h-[65px] text-sm text-gray-900 mb-2 overflow-hidden">{product.description}</h3> : null }
          {product.price ? <p className="font-semibold text-lg text-right">{product.price}</p> : null }
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
