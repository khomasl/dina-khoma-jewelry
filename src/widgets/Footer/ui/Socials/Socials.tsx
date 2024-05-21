import { CONTENT } from "@/shared/constants";
import Image from "next/image"
import Link from "next/link"
import { FC } from "react";

type Props = {
  socials: typeof CONTENT['footer']['mySocials'];
}

const Socials: FC<Props> = ({socials}) => {
  return (
    <div>
      <h5 className="text-xl font-bold mb-2">{socials.title}</h5>
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