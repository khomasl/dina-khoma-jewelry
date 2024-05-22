"use client";

import { FC, useState } from "react";

import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { CONTENT } from "@/shared/constants";
import { FeedbackCard } from ".";
import Image from "next/image";

type Props = {
  section: typeof CONTENT['main'][number] & {type: 'feedback'};
}

const FeedbackSection: FC<Props> = ({section}) => {
  const [swiper, setSwiper] = useState<SwiperClass>();
  return (
    <div className="flex flex-col items-center main-container bg-violet-400 text-white">
      <span className="font-bold">{section.header}</span>
      <h2 className="text-5xl font-bold mb-10 mt-4 max-w-2/3">{section.title}</h2>
      <div className="w-full flex gap-5">
        <button onClick={() => swiper?.slidePrev()}>
          <Image
            alt={'<'}
            src={'/svg/arrow-left.svg'}
            width={40}
            height={40}
          />
        </button>
        <Swiper
          onInit={e => setSwiper(e)}
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className="w-full"
        >
          {section.items.map(item => (
            <SwiperSlide key={item.src}>
              <FeedbackCard feedback={item}/>
            </SwiperSlide>
          ))}
        </Swiper>
        <button onClick={() => swiper?.slideNext()}>
          <Image
            className="rotate-180"
            alt={'>'}
            src={'/svg/arrow-left.svg'}
            width={40}
            height={40}
          />
        </button>
      </div>
    </div>
  );
};

export default FeedbackSection;