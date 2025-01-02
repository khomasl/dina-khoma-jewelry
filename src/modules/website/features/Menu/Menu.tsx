import Link from "next/link";
import { CONTENT_HOMEPAGE } from "@/modules/website/shared/constants";
import clsx from "clsx";
import { FC } from "react";
import {Header} from "@/modules/admin/payload-types";

const { nav } = CONTENT_HOMEPAGE.header;

type Props = {
  className?: string;
  type?: 'horizontal' | 'vertical';
  navItems?: Header['navItems'];
}

const Menu: FC<Props> = ({className, type = 'horizontal', navItems}) => {
  return (
    <div
      className={clsx(
        "flex flex-row lg:ml-5",
        [{'flex-col': type === "vertical"}],
        className
      )}
    >
      {navItems?.map((navItem) => {
        return navItem ? (
          <Link
            key={navItem.link.label}
            href={navItem.link.url || ''}
            className={clsx(
              "text-2xl transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative",
              [
                {'py-1 my-2 font-bold': type === 'vertical'},
                {'py-1 px-2 2xl:m-2': type === 'horizontal'}
              ]
            )}
          >
            {navItem.link.label}
          </Link>
        ) : null;
      })}
    </div>
  );
};

export default Menu;
