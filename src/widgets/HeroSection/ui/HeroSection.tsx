"use client";

import React, { FC } from "react";

import Image from 'next/image';
import { Poppins } from "next/font/google";

import { CONTENT } from "@/shared/constants";
import {Button} from "@/shared/ui";
import clsx from "clsx";

type Props = {
  section: typeof CONTENT['main'][number] & {type: "hero"}
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400", '700']
});

const HeroSection: FC<Props> = ({section}) => {

  return (
    <div 
      className={
        clsx(
          "flex items-center justify-center md:justify-start md:min-h-[700px]", 
          "h-fit w-full relative aspect-[6/5] md:aspect-auto",
          poppins.className
        )
      }
    >
      <div className="absolute w-full h-full -z-10 overflow-hidden">
        <Image
          className="object-cover"
          alt={section.title || ''}
          src={section.src}
          fill
        />
      </div>
      <div className=" flex flex-col md:items-start items-center justify-center md:w-1/2 max-w-[588px] px-20 py-24 text-white">
        <h1 className="text-2xl xl:text-5xl font-bold mb-6">{section.title}</h1>
        <p className="hidden lg:block text-xl mb-6">{section.description}</p>
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