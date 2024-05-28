"use client";

import React, { FC } from "react";

import Image from 'next/image';
import { Poppins } from "next/font/google";
import clsx from "clsx";

import { CONTENT } from "@/shared/constants";
import { Button } from "@/shared/ui";

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
          "flex items-center justify-center lg:justify-start", 
          "h-fit w-full relative aspect-[6/5] lg:aspect-auto",
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
      <div className=" flex flex-col lg:items-start items-center justify-center lg:w-1/2 max-w-[588px] px-10 py-10 lg:px-20 lg:py-24 text-white">
        <h1 className="text-2xl lg:text-5xl font-bold mb-6 text-center lg:text-left">{section.title}</h1>
        <p className="hidden lg:block text-xl mb-6">{section.description}</p>
        <Button 
          className="w-full sm:w-1/3"
          link={section.button?.link || ''}
          text={section.button?.title || ''} 
        />
      </div>
    </div>
  );
};

export default HeroSection;