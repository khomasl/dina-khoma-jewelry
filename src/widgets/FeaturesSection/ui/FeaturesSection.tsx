import { FC } from "react";
import Image from "next/image";
import { Manrope } from 'next/font/google';
import clsx from "clsx";

import { Button } from "@/shared/ui";
import { CONTENT } from "@/shared/constants";

type Props = {
  section: typeof CONTENT['main'][number] & {type: "features"}
};

const manrope = Manrope({
  subsets: ['latin', "cyrillic"],
});

const FeaturesSection: FC<Props> = ({section}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-full main-container bg-violet-400 text-white">
      <div className={clsx("lg:pr-20 pb-10 lg:pb-0", manrope.className)}>
        <span className="font-bold">{section.header}</span>
        <h2 className="text-5xl font-bold mb-6 mt-2 max-w-2/3">{section.title}</h2>
        <p className="text-xl mb-3 -mx-14 lg:mx-0">{section.description}</p>
        <Button 
          link={section.button?.link || ''}
          text={section.button?.title || ''} 
        />
      </div>
      <div className="relative w-full aspect-square overflow-hidden rounded-3xl">
        <Image
            className="absolute top-0 left-0 w-full h-full object-cover"
            alt={section.title || ''}
            src={section.src}
            fill
          />
      </div>
    </div>
  );
};

export default FeaturesSection;