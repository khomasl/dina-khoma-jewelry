"use client";
import { Manrope } from "next/font/google";
import clsx from "clsx";

import { Phone, Burger, Logo, Menu, Socials } from ".";

const manrope = Manrope({
  subsets: ['latin', "cyrillic"],
});

export default function Navbar() {
  return (
      <aside 
        className={clsx(
          "border-b w-full py-4 px-[15px] lg:px-[120px] tracking-tight", 
          manrope.className
        )}
      >
        <div className="w-full lg:sticky lg:top-20">
          <nav
              className={clsx(
                "w-full h-fit flex flex-row items-center justify-between relative", 
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
