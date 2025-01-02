import { FC } from "react";
import { Manrope } from 'next/font/google';
import clsx from "clsx";
import { CollectionSection as CollectionSectionType } from '@/modules/admin/payload-types'

import { ProductCard } from "src/modules/website/features";

type Props = {
  section:  CollectionSectionType;
};

const manrope = Manrope({
  subsets: ['latin', "cyrillic"],
});


const CollectionSection: FC<Props> = ({section}) => {
  return (
    <section id="collection" className={clsx(manrope.className, "main-container main-wrapper")}>
      <p className="font-bold text-violet-400 text-center lg:text-left">{section.header}</p>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 mt-4 max-w-2/3 text-center lg:text-left">{section.title}</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {section.products?.map(item => <ProductCard key={item?.title} product={item} /> )}
      </div>
    </section>
  );
};

export default CollectionSection;
