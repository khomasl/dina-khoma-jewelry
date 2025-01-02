"use client";
import { Manrope } from "next/font/google";
import clsx from "clsx";

import { Phone, Logo, Socials, MobileMenu } from "./index";
import { Menu } from "@/modules/website/features";
import {FC, Suspense} from "react";
import {Header} from "@/modules/admin/payload-types";


const manrope = Manrope({
  subsets: ['latin', "cyrillic"],
});

type Props = {
  header: Header;
}

const Navbar: FC<Props> = ({header})=> {
  console.log('header', header);
  return (
      <aside
        className={clsx(
          "border-b py-4 tracking-tight main-wrapper",
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
            {header.logo && typeof header.logo !== "number" ? (
                <Logo logo={header.logo} />
              ) : null}
            <Menu navItems={header.navItems} className="hidden lg:flex" />
            <Socials socialLinks={header.socialLinks} />
            <Phone phone={header.phone} phoneLink={header.phoneLink} />
            <Suspense>
              <MobileMenu />
            </Suspense>
          </nav>
        </div>
      </aside>
  );
}

export default Navbar;
