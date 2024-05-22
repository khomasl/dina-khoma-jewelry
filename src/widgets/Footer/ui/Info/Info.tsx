import { FC } from "react";
import Link from "next/link";

import { CONTENT } from "@/shared/constants";

type Props = {
  info: typeof CONTENT['footer']['info'];
}

const Info: FC<Props> = ({info}) => {
  return (
    <div className="hidden md:block text-xl max-w-56">
      <h5 className="text-xl font-bold mb-2">{info.title}</h5>
      <>
        {info.nav.map((item) => (
          <Link
            key={item}
            href={"#"}
            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 text-base"
          >
            {item}
          </Link>
        ))}
      </>
    </div>
  );
};

export default Info;