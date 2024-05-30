"use client"

import clsx from "clsx";
import Image from "next/image";

const TopButton = () => {
  // console.log(window.scrollY);
  // console.log(document.documentElement.scrollTop);
  // didn't work, both give 0 

  return (
    <button 
      className={clsx(
        "fixed bottom-5 lg:bottom-10 right-5 lg:right-10 rounded-full overflow-hidden rotate-90",
      //  [
      //   {'hidden': document.documentElement.scrollTop < 500},
      //   {'block': window.scrollX >= 500}
      // ] didn't work
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
