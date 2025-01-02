import Link from "next/link";
import { CONTENT_HOMEPAGE } from "src/modules/website/shared/constants";
import {FC} from "react";

type Props = {
  phone?: string | null;
  phoneLink?: string | null;
}

const Phone: FC<Props> = ({phone, phoneLink}) => (
  <Link
    key={phone}
    href={`tel:${phoneLink}`}
    className="hidden text-2xl transition-all hover:text-neutral-800 dark:hover:text-neutral-200 xl:flex align-middle relative py-1 px-2 m-1"
  >
    {phone}
  </Link>
);

export default Phone;
