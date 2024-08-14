import Link from "next/link";
import { CONTENT_HOMEPAGE } from "@/shared/constants";
import clsx from "clsx";
import { FC } from "react";

const { nav } = CONTENT_HOMEPAGE.header;

type Props = {
  className?: string;
  type?: 'horizontal' | 'vertical';
}

const Menu: FC<Props> = ({className, type = 'horizontal'}) => {
  return (
    <div 
      className={clsx(
        "flex flex-row lg:ml-5", 
        [{'flex-col': type === "vertical"}],
        className
      )}
    >
      {nav.map((navItem) => {
        return (
          <Link
            key={navItem.link}
            href={navItem.link}
            className={clsx(
              "text-2xl transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative",
              [
                {'py-1 my-2 font-bold': type === 'vertical'},
                {'py-1 px-2 2xl:m-2': type === 'horizontal'}
              ]
            )}
          >
            {navItem.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
