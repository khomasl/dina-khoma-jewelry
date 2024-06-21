import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { CONTENT } from "@/shared/constants";

type Props = {
  socials: typeof CONTENT['footer']['mySocials'];
  className?: string
}

const Socials: FC<Props> = ({socials, className}) => {
  return (
    <div className={className}>
      <h1 className="text-xl font-bold mb-2">{socials.title}</h1>
      <div className="flex ">
        {socials.socials.map((social) => (
          <Link
            key={social.title}
            href={social.link}
            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-1"
          >
            <Image
              alt={social.title}
              src={require(`/public/svg/${social.src}?url`)}
              width={50}
              height={50}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Socials;