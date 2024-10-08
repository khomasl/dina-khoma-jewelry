import { FC } from "react";
import clsx from "clsx";

import { CONTENT_HOMEPAGE } from "@/shared/constants";

type Props = {
  promo: typeof CONTENT_HOMEPAGE['footer']['promo'];
  className?: string;
}

const Promo: FC<Props> = ({promo, className}) => {
  return (
    <div className={clsx(
      "flex flex-col lg:flex-row gap-4 items-center justify-between border px-5 py-3", 
      "border-brown rounded-md bg-gradient-to-b from-violet-500 from-20% to-violet-300",
      className
    )}
    >
      <h1 className="max-w-[130px] text-xl font-bold">{promo.title}</h1>
      <div className="flex gap-4 justify-between items-center ">
        <h2 className="text-base xl:text-2xl">{promo.description}</h2>
        <div className="min-w-[120px] md:min-w-[160px] text-lg text-center md:text-2xl border border-gray rounded-md p-2">
          {promo.code}
        </div>
      </div>
    </div>
  );
};

export default Promo;