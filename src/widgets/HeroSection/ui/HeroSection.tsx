import React, { FC } from "react";

import Image from 'next/image';

import { CONTENT } from "@/shared/constants";
import {Button} from "@/shared/ui";

type Props = {
  section: typeof CONTENT['main'][number] & {type: "hero"}
}

const HeroSection: FC<Props> = ({section}) => {

  return (
    <div className="w-full relative">
      <div className="absolute w-full h-full -z-10 overflow-hidden">
        <Image
          className="w-full h-full oobject-cover"
          alt={section.title || ''}
          src={require(`/public/${section.src}?url`)}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          // unoptimized 
        />
      </div>
      <div className="w-1/2 px-20 py-24 text-white">
        <h1 className="text-5xl font-bold mb-6">{section.title}</h1>
        <p className="text-xl mb-6">{section.description}</p>
        <Button 
          className="w-1/3"
          link={section.button?.link || ''}
          text={section.button?.title || ''} 
        />
      </div>
    </div>
  );
};

export default HeroSection;