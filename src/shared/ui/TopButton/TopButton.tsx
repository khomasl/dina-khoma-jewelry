"use client"

import clsx from "clsx";
import Image from "next/image";

const TopButton = () => {
  return (
    <button 
      className={clsx(
        "fixed bottom-10 right-10 rounded-full overflow-hidden rotate-90",
       [
        {'hidden': window.scrollY < 500},
        {'block': window.scrollX >= 500}
      ]
      )}
      onClick={() => window.scrollTo({top:0, behavior: 'smooth'})}
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
