import { FC } from "react";
import Image from "next/image";
import { Manrope } from 'next/font/google';
import clsx from "clsx";

import { Button } from "@/modules/website/shared/ui";
import { AboutSection as AboutSectionType } from "@/modules/admin/payload-types";

type Props = {
  section: AboutSectionType;
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
      <div className="lg:px-0 pb-10 lg:pb-0">
        <div className="relative w-full aspect-square overflow-hidden rounded-3xl px-10 lg:px-0">
          {
            section.image && typeof section.image !== 'number' ? (
              <Image
                className="absolute top-0 left-0 w-full h-full object-cover"
                alt={section.title || ''}
                title={section.title + '. ' + section.description || ''}
                src={section.image.url || '/no-photo.png'}
                fill
              /> ) : null
          }
        </div>
      </div>
      <div className={clsx("row-start-1 lg:col-start-2 lg:px-0 lg:ml-16 pb-10 lg:pb-0", manrope.className)}>
        <p className="text-violet-400 font-bold text-center lg:text-left">{section.header}</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 mt-2 max-w-2/3 lg:px-0 text-center lg:text-left">{section.title}</h1>
        <h2 className="text-xl text-gray-900 mb-4 text-center lg:text-left">{section.description}</h2>
        <div className="flex justify-between mb-8 sx:px-10 lg:px-0 xl:mr-10">
          {section.items?.map(item => (
            <div key={item.title} className="flex gap-2 md:gap-4 items-center">
              <span className="text-2xl md:text-3xl font-bold">{item.title}</span>
              <span className="text-gray-800 text-base">{item.description}</span>
            </div>
          ))}
        </div>
        <div className="w-fit mx-auto lg:mx-0">
          <Button
            link={section.link.url || ''}
            text={section.link.label || ''}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
