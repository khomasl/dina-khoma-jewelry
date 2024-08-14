import { FC } from "react";
import Link from "next/link";

import { CONTENT_HOMEPAGE } from "@/shared/constants";
import clsx from "clsx";

type Props = {
  info: typeof CONTENT_HOMEPAGE['footer']['info'];
  className?: string;
}

const Info: FC<Props> = ({info, className}) => {
  return (
    <div className={clsx("hidden md:block text-xl max-w-56", className)}>
      <h1 className="text-xl font-bold mb-2">{info.title}</h1>
      <>
        {info.nav.map((item) => (
          <Link
            key={item.title}
            href={item.link}
            className="transition-all hover:text-neutral-300 dark:hover:text-neutral-200 flex align-middle relative py-1 my-1 text-base"
          >
            {item.title}
          </Link>
        ))}
      </>
    </div>
  );
};

export default Info;