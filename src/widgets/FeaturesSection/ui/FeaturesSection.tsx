import { FC } from "react";
import Image from "next/image";
import { Manrope } from 'next/font/google';
import clsx from "clsx";

import { Button } from "@/shared/ui";
import { CONTENT_ABOUT } from "@/shared/constants/common";

type Props = {
  section: typeof CONTENT_ABOUT[number] & {type: "features"}
};

const manrope = Manrope({
  subsets: ['latin', "cyrillic"],
});

const FeaturesSection: FC<Props> = ({section}) => {
  return (
    <section 
      className="grid grid-cols-1 lg:grid-cols-2 items-center w-full main-container bg-violet-400 text-white"
    >
      <div className={clsx("lg:px-0 lg:mr-16 pb-10 lg:pb-0", manrope.className)}>
        <p className="font-bold text-center lg:text-left">{section?.header}</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 mt-2 max-w-2/3 lg:px-0 text-center lg:text-left">{section.title}</h1>
        <h2 className="text-center lg:text-left text-xl mb-8">{section.description}</h2>
        <div className="mx-auto w-fit lg:mx-0">
          <Button 
            className="mx-auto w-fit lg:mx-0"
            link={section.button?.link || ''}
            text={section.button?.title || ''} 
          />
        </div>
      </div>
      <div className="lg:px-0 pb-10 lg:pb-0">
        <div className="relative w-full aspect-square overflow-hidden rounded-3xl px-10">
          <Image
              className="absolute top-0 left-0 w-full h-full object-cover"
              alt={section.title || ''}
              title={section.title + '. ' + section.description || ''}
              src={section.src}
              fill
            />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;