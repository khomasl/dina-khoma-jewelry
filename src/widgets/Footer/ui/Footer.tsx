"use client";

import { CONTENT } from "@/shared/constants";
import { Ubuntu } from "next/font/google";

import Logo from "./Logo/Logo";
import Info from "./Info/Info";
import Contacts from "./Contacts/Contacts";
import Socials from "./Socials/Socials";
import Promo from "./Promo/Promo";
import clsx from "clsx";

const ubuntu = Ubuntu({
  subsets: ['latin', "cyrillic"],
  weight: ['400', '700']
});

export default function Footer() {
  const { logo, info, myContacts, mySocials, promo } = CONTENT.footer;
  return (
    <footer 
      className={clsx(
        "grid grid-col-1 md:grid-cols-3 gap-6",
        "w-full bg-violet-400 main-container text-white",
        ubuntu.className
      )}
    >
        <Logo title={logo.title} description={logo.description} />
        <Info info={info} />
        <Contacts contacts={myContacts} />
        <Socials socials={mySocials} />
        <Promo className="col-span-2" promo={promo} />
    </footer>
  );
}
