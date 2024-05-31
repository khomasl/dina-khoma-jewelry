"use client"

import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button 
      className={clsx(
        "fixed bottom-5 lg:bottom-10 right-5 lg:right-10 rounded-full overflow-hidden rotate-90 transition-all shadow-lg hover:shadow-xl",
        [
          {'opacity-90 translate-x-0': isVisible},
          {'opacity-0 translate-x-10': !isVisible}
        ]
      )}
      onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
    >
      <Image
        className=""
        alt={"TOP"}
        src={`svg/arrow-left.svg`}
        width={50}
        height={50}
      />
    </button>
  );
};

export default TopButton;
