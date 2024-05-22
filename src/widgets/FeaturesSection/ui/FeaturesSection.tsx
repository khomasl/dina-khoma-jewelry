import { FC } from "react";
import Image from "next/image";
import { Manrope } from 'next/font/google';

import { CONTENT } from "@/shared/constants";
import { Button } from "@/shared/ui";
import clsx from "clsx";

type Props = {
  section: typeof CONTENT['main'][number] & {type: "features"}
}

const manrope = Manrope({
  subsets: ['latin', "cyrillic"],
});
 

const FeaturesSection: FC<Props> = ({section}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center w-full lg:max-h-[690px] main-container bg-violet-400 text-white">
      <div className={clsx("lg:pr-10 pb-10 lg:pb-0", manrope.className)}>
        <span className="font-bold">{section.header}</span>
        <h2 className="text-5xl font-bold mb-6 mt-2 max-w-2/3">{section.title}</h2>
        <p className="text-xl mb-3 -mx-14 lg:mx-0">{section.description}</p>
        <Button 
          link={section.button?.link || ''}
          text={section.button?.title || ''} 
        />
      </div>
      <div className="relative h-full w-1/2 overflow-hidden rounded-3xl">
        <Image
          className="w-full aspect-square object-cover"
          alt={section.title || ''}
          src={section.src}
          fill
        />
      </div>
    </div>
  );
};

export default FeaturesSection;