"use client";
import { Manrope } from "next/font/google";

import Burger from "./burger";
import Logo from "./logo";
import Menu from "./nav-menu";
import Phone from "./phone";
import Socials from "./nav-socials";
import clsx from "clsx";

const manrope = Manrope({
  subsets: ['latin', "cyrillic"],
});

export default function Navbar() {
  return (
      <aside 
        className={clsx(
          "border-b w-full py-4 px-[15px] md:px-[120px] tracking-tight", 
          manrope.className
        )}
      >
        <div className="max-w-[1440px] lg:sticky lg:top-20">
          <nav
              className={clsx(
                "w-full flex flex-row items-center justify-between relative", 
                "px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
              )}
              id="nav"
          >
            <Logo />
            <Menu />
            <Socials />
            <Phone />
            <Burger />
          </nav>
        </div>
      </aside>
  );
}
