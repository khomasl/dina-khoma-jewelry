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
    <div className="flex flex-col-reverse lg:flex-row items-center w-full lg:max-h-[690px] main-container">
      <div className="w-full h-full overflow-hidden rounded-3xl">
        <Image
          className="w-full h-full object-cover"
          alt={section.title || ''}
          src={require(`/public/${section.src}?url`)}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          // unoptimized 
        />
      </div>
      <div className={clsx("lg:pl-20 pb-10 lg:pb-0", manrope.className)}>
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