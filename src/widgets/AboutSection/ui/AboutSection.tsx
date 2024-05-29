import { FC } from "react";
import Image from "next/image";
import { Manrope } from 'next/font/google';
import clsx from "clsx";

import { Button } from "@/shared/ui";
import { CONTENT } from "@/shared/constants";

type Props = {
  section: typeof CONTENT['main'][number] & {type: "aboutMe"}
}

const manrope = Manrope({
  subsets: ['latin', "cyrillic"],
});
 

const AboutSection: FC<Props> = ({section}) => {
  return (
    <section 
      id="about"
      className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center w-full main-container"
    >
      <div className="px-10 lg:px-0 pb-10 lg:pb-0">
        <div className="relative w-full aspect-square overflow-hidden rounded-3xl px-10 lg:px-0">
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover"
            alt={section.title || ''}
            src={section.src}
            fill
          />
        </div>
      </div>
      <div className={clsx("row-start-1 lg:col-start-2 lg:pl-20 pb-10 lg:pb-0", manrope.className)}>
        <div className="text-violet-400 font-bold px-10 lg:px-0 text-center lg:text-left">{section.header}</div>
        <h2 className=" text-4xl lg:text-5xl font-bold mb-6 mt-2 max-w-2/3 px-10 lg:px-0 text-center lg:text-left">{section.title}</h2>
        <p className="text-xl text-gray-900 mb-3 text-center lg:text-left">{section.description}</p>
        <div className="flex gap-5 justify-between mb-6">
          {section.items.map(item => (
            <div className="flex gap-2 md:gap-4 items-center">
              <span className="text-3xl md:text-4xl font-bold">{item.title}</span>
              <span className="text-gray-800 text-base">{item.description}</span>
            </div>
          ))}
        </div>
        <div className="w-fit mx-auto lg:mx-0">
          <Button 
            link={section.button?.link || ''}
            text={section.button?.title || ''} 
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;