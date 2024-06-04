import { FC } from "react";
import Link from "next/link";

import { CONTENT } from "@/shared/constants";
import clsx from "clsx";

type Props = {
  info: typeof CONTENT['footer']['info'];
  className?: string;
}

const Info: FC<Props> = ({info, className}) => {
  return (
    <div className={clsx("hidden md:block text-xl max-w-56", className)}>
      <h5 className="text-xl font-bold mb-2">{info.title}</h5>
      <>
        {info.nav.map((item) => (
          <Link
            key={item}
            href={"#"}
            className="transition-all hover:text-neutral-300 dark:hover:text-neutral-200 flex align-middle relative py-1 my-1 text-base"
          >
            {item}
          </Link>
        ))}
      </>
    </div>
  );
};

export default Info;