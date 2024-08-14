import Link from "next/link";
import { CONTENT_HOMEPAGE } from "@/shared/constants";

const { phone } = CONTENT_HOMEPAGE.header;

const Phone = () => (
  <Link
    key={phone.title}
    href={`tel:${phone.link}`}
    className="hidden text-2xl transition-all hover:text-neutral-800 dark:hover:text-neutral-200 xl:flex align-middle relative py-1 px-2 m-1"
  >
    {phone.title}
  </Link>
);

export default Phone;
