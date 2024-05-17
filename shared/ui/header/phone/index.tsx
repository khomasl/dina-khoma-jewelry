import Link from "next/link";
import { CONTENT } from "../../../../utils/constants";

const { phone } = CONTENT.header;

const Phone = () => (
  <Link
    key={phone.title}
    href={`tel:${phone.link}`}
    className="hidden md:block text-3xl transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
  >
    {phone.title}
  </Link>
);

export default Phone;
