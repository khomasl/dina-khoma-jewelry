import { FC } from "react";
import Image from "next/image";
import { Manrope } from 'next/font/google';

import { CONTENT } from "@/shared/constants";
import { Button } from "@/shared/ui";
import clsx from "clsx";

type Props = {
  section: typeof CONTENT['main'][number] & {type: "aboutMe"}
}

const manrope = Manrope({
  subsets: ['latin', "cyrillic"],
});
 

const AboutSection: FC<Props> = ({section}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center w-full main-container">
      <div className="relative w-full aspect-square overflow-hidden rounded-3xl">
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt={section.title || ''}
          src={section.src}
          fill
        />
      </div>
      <div className={clsx("row-start-1 lg:col-start-2 lg:pl-20 pb-10 lg:pb-0", manrope.className)}>
        <span className="text-violet-400 font-bold">{section.header}</span>
        <h2 className="text-5xl font-bold mb-6 mt-2 max-w-2/3">{section.title}</h2>
        <p className="text-xl text-gray-900 mb-3 -mx-14 lg:mx-0">{section.description}</p>
        <div className="flex gap-5 justify-between mb-6 -mx-14 lg:mx-0">
          {section.items.map(item => (
            <div className="flex gap-4 items-center">
              <span className="text-4xl font-bold">{item.title}</span>
              <span className="text-gray-800 text-base">{item.description}</span>
            </div>
          ))}
        </div>
        <Button 
          link={section.button?.link || ''}
          text={section.button?.title || ''} 
        />
      </div>
    </div>
  );
};

export default AboutSection;