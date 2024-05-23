"use client";

import { Ubuntu } from "next/font/google";
import clsx from "clsx";

import { Contacts, Logo, Info, Socials, Promo } from ".";

import { CONTENT } from "@/shared/constants";

const ubuntu = Ubuntu({
  subsets: ['latin', "cyrillic"],
  weight: ['400', '700']
});

export default function Footer() {
  const { logo, info, myContacts, mySocials, promo } = CONTENT.footer;
  return (
    <footer 
      className={clsx(
        "grid grid-col-1 md:grid-cols-3 gap-6 justify-items-center md:justify-items-stretch",
        "w-full bg-violet-400 main-container text-white",
        ubuntu.className
      )}
    >
        <Logo title={logo.title} description={logo.description} />
        <Info className="" info={info} />
        <Contacts className="md:justify-self-end" contacts={myContacts} />
        <Socials className="" socials={mySocials} />
        <Promo className="md:col-span-2" promo={promo} />
    </footer>
  );
}
