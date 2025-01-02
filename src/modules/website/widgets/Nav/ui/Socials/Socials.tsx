import Link from "next/link";
import Image from "next/image";
import { CONTENT_HOMEPAGE } from "src/modules/website/shared/constants";
import {Header} from "@/modules/admin/payload-types";
import {FC} from "react";

const { socials } = CONTENT_HOMEPAGE.header;

type Props = {
  socialLinks: Header['socialLinks'];
}

const Socials: FC<Props> = ({
  socialLinks,
}) => (
  <div className="hidden lg:flex flex-row space-x-1 ml-5">
    {socialLinks?.map((social, idx) => {
      return social.image && typeof social.image !== 'number' ? (
        <Link
          key={social.link.url || idx}
          href={social.link.url || ''}
          className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative px-1"
        >
          <div className=" w-10 2xl:w-12 overflow-hidden aspect-square">
            <Image
              alt={social.image.alt || 'social'}
              src={social.image.url || ''}
              fill
            />
          </div>
        </Link>
      ) : null;
    })}
  </div>
);

export default Socials;
