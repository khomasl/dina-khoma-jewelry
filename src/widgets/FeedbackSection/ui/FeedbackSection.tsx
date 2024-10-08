"use client";

import { FC, useState } from "react";

import { Swiper, SwiperClass, SwiperProps, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { CONTENT_HOMEPAGE } from "@/shared/constants";
import { FeedbackCard } from ".";
import Image from "next/image";
import { SwiperOptions } from "swiper/types";
import { Manrope } from "next/font/google";
import clsx from "clsx";
import { ArrowButton } from "@/shared/ui";

type Props = {
  section: typeof CONTENT_HOMEPAGE['main'][number] & {type: 'feedback'};
};


const manrope = Manrope({
  subsets: ['latin', "cyrillic"],
});


const FeedbackSection: FC<Props> = ({section}) => {
  const [swiper, setSwiper] = useState<SwiperClass>();

  const sliderParams: SwiperOptions = {
    spaceBetween: 50,
    slidesPerView: 1,
    breakpoints: {
      760: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  }

  return (
    <section 
      id="feedbacks"
      className={clsx(
        "flex flex-col items-center main-container bg-violet-400 text-white", 
        manrope.className
      )}
    >
      <p className="font-bold text-center lg:text-left">{section.header}</p>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 mt-4 max-w-2/3 text-center lg:text-left">{section.title}</h1>
      <div className="w-full flex gap-5 items-center">
        <ArrowButton className="shrink-0" onClick={() => swiper?.slidePrev()} />
        <Swiper
          {...sliderParams}
          onInit={e => setSwiper(e)}
          className="w-full aspect-[0.5] ss:aspect-[0.8] sx:aspect-[1.4] sm:aspect-[2.2] md:aspect-[2.5] xl:aspect-[4]"
        >
          {section.items.map(item => (
            <SwiperSlide key={item.src}>
              <FeedbackCard feedback={item}/>
            </SwiperSlide>
          ))}
        </Swiper>
        <ArrowButton className="shrink-0" onClick={() => swiper?.slideNext()} direction="right" />
      </div>
    </section>
  );
};

export default FeedbackSection;