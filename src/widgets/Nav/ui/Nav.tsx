"use client";
import { Manrope } from "next/font/google";
import clsx from "clsx";

import { Phone, Logo, Socials, MobileMenu } from ".";
import { Menu } from "@/features";
import { Suspense } from "react";


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
            <Menu className="hidden lg:flex" />
            <Socials />
            <Phone />
            <Suspense>
              <MobileMenu />
            </Suspense>
          </nav>
        </div>
      </aside>
  );
}
