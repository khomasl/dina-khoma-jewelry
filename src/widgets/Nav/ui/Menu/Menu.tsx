import Link from "next/link";
import { CONTENT } from "@/shared/constants";

const { nav } = CONTENT.header;

const navItems = {
  "/about": {
    name: nav[0],
  },
  "/collections": {
    name: nav[1],
  },
  "/contacts": {
    name: nav[2],
  },
};

const Menu = () => (
  <div className="hidden lg:flex flex-row space-x-1 ml-5">
    {Object.entries(navItems).map(([path, { name }]) => {
      return (
        <Link
          key={path}
          href={path}
          className="text-2xl transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-2"
        >
          {name}
        </Link>
      );
    })}
  </div>
);

export default Menu;
