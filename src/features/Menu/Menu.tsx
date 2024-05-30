import Link from "next/link";
import { CONTENT } from "@/shared/constants";
import clsx from "clsx";
import { FC } from "react";

const { nav } = CONTENT.header;

type Props = {
  className?: string;
  type?: 'horizontal' | 'vertical';
}

const Menu: FC<Props> = ({className, type = 'horizontal'}) => {
  return (
    <div 
      className={clsx(
        "flex flex-row space-x-1 lg:ml-5", 
        [{'flex-col': type === "vertical"}],
        className
      )}
    >
      {nav.map((navItem) => {
        return (
          <Link
            key={navItem.link}
            href={navItem.link}
            className="text-2xl transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-2"
          >
            {navItem.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
