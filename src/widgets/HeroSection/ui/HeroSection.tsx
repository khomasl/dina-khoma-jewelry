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
    <section 
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
      <div className=" flex flex-col lg:items-start items-center justify-center lg:w-1/2 max-w-[650px] px-10 py-10 lg:px-20 lg:py-24 text-white">
        <h1 className="text-3xl lg:text-5xl font-bold mb-8 text-center lg:text-left">{section.title}</h1>
        <p className="hidden lg:block text-xl mb-8">{section.description}</p>
        <Button 
          className="mx-auto w-fit lg:mx-0"
          link={section.button?.link || ''}
          text={section.button?.title || ''} 
        />
      </div>
    </section>
  );
};

export default HeroSection;