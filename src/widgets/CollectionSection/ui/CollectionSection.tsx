import { FC } from "react";
import { Manrope } from 'next/font/google';
import clsx from "clsx";

import { ProductCard } from "@/features";
import { CONTENT } from "@/shared/constants";

type Props = {
  section: typeof CONTENT['main'][number] & {type: "currentCollections" | "otherCollections"}
};

const manrope = Manrope({
  subsets: ['latin', "cyrillic"],
});
 

const CollectionSection: FC<Props> = ({section}) => {
  return (
    <div className={clsx(manrope.className, "main-container")}>
      <div className="font-bold text-violet-400 text-center lg:text-left">{section.header}</div>
      <h2 className="text-4xl lg:text-5xl font-bold mb-10 mt-4 max-w-2/3 text-center lg:text-left">{section.title}</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {section.items.map(item => <ProductCard key={item.src} product={item} /> )}
      </div>
    </div>
  );
};

export default CollectionSection;