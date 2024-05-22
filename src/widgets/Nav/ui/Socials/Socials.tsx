import Link from "next/link";
import Image from "next/image";
import { CONTENT } from "@/shared/constants";

const { socials } = CONTENT.header;

const Socials = () => (
  <div className="hidden md:flex flex-row space-x-1 ml-5">
    {socials.map((social, idx) => {
      return (
        <Link
          key={social.title}
          href={social.link}
          className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative px-1"
        >
          <>
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
          </>
        </Link>
      );
    })}
  </div>
);

export default Socials;
