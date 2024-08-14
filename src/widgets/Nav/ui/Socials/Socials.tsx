import Link from "next/link";
import Image from "next/image";
import { CONTENT_HOMEPAGE } from "@/shared/constants";

const { socials } = CONTENT_HOMEPAGE.header;

const Socials = () => (
  <div className="hidden lg:flex flex-row space-x-1 ml-5">
    {socials.map((social, idx) => {
      return (
        <Link
          key={social.title}
          href={social.link}
          className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative px-1"
        >
          <div className=" w-10 2xl:w-12 overflow-hidden aspect-square">
            <Image
              alt={social.title}
              src={require(`/public/svg/${social.src}?url`)}
              fill
            />
          </div>
        </Link>
      );
    })}
  </div>
);

export default Socials;
