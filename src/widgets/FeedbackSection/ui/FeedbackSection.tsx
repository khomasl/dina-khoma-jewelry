"use client";

import { FC, useState } from "react";

import { Swiper, SwiperClass, SwiperProps, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { CONTENT } from "@/shared/constants";
import { FeedbackCard } from ".";
import Image from "next/image";
import { SwiperOptions } from "swiper/types";
import { Manrope } from "next/font/google";
import clsx from "clsx";

type Props = {
  section: typeof CONTENT['main'][number] & {type: 'feedback'};
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
      <div className="font-bold text-center lg:text-left">{section.header}</div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 mt-4 max-w-2/3 text-center lg:text-left">{section.title}</h2>
      <div className="w-full flex gap-5">
        <button onClick={() => swiper?.slidePrev()}>
          <Image
            className="hover:scale-105 transition-all mx-2"
            alt={'<'}
            src={'/svg/arrow-left.svg'}
            width={50}
            height={50}
          />
        </button>
        <Swiper
          {...sliderParams}
          onInit={e => setSwiper(e)}
          className="w-full aspect-[9/10] md:aspect-[1.8] lg:aspect-[2.8]"
        >
          {section.items.map(item => (
            <SwiperSlide key={item.src}>
              <FeedbackCard feedback={item}/>
            </SwiperSlide>
          ))}
        </Swiper>
        <button onClick={() => swiper?.slideNext()}>
          <Image
            className="rotate-180 hover:scale-105 transition-all mx-2"
            alt={'>'}
            src={'/svg/arrow-left.svg'}
            width={50}
            height={50}
          />
        </button>
      </div>
    </section>
  );
};

export default FeedbackSection;