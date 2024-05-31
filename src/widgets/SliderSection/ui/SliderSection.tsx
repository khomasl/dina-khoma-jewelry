"use client";

import { CONTENT } from "@/shared/constants";
import clsx from "clsx";
import { Manrope } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";

type Props = {
  section: typeof CONTENT['main'][number] & {type: "slider"},
  className?: string;
};

const manrope = Manrope({
  subsets: ['latin', "cyrillic"],
});

const SliderSection: FC<Props> = ({section, className}) => {
  const [swiper, setSwiper] = useState<SwiperClass>();

  const sliderParams: SwiperOptions = {
    spaceBetween: 50,
    slidesPerView: 2,
    loop: true,
    breakpoints: {
      760: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 6
      }
    }
  };

  return (
    <section 
      className={clsx(
        "main-container w-full flex gap-5", 
        className, 
        manrope.className
        )}
      >
      <button onClick={() => swiper?.slidePrev()}>
        <Image
          alt={'<'}
          src={'/svg/arrow-left.svg'}
          width={40}
          height={40}
        />
      </button>
      <Swiper
        {...sliderParams}
        onInit={e => setSwiper(e)}
        className="w-full"
      >
        {section.items.map(item => (
          <SwiperSlide key={item.src}>
            <div className="relative overflow-hidden rounded-xl w-full aspect-square">
              <Link href={item.link}>
                <Image
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  alt={''}
                  src={item.src || "/no-photo.png"}
                  fill
                />
              </Link>
            </div>
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
    </section>
  );
};

export default SliderSection;