import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { CONTENT_HOMEPAGE, EMAIL, PHONE_NUMBER } from "@/shared/constants/common";
import clsx from "clsx";

type Props = {
  contacts: typeof CONTENT_HOMEPAGE['footer']['myContacts'];
  className?: string;
}

const Contacts: FC<Props> = ({contacts, className}) => {
  return (
    <div className={clsx("text-xl max-w-56", className)}>
      <h1 className="text-xl font-bold mb-2">{contacts.title}</h1>
      {contacts.contacts.map((contact) => (
        <Link
          key={contact.title}
          href={
            contact.link === PHONE_NUMBER ? 
              `tel:${contact.link}` :
              contact.link === EMAIL ?
                `mailto:${contact.link}` :
                contact.link
          }
          className="transition-all hover:text-neutral-300 dark:hover:text-neutral-200 flex align-middle relative py-1 my-1 text-base"
        >
          <Image
            alt=""
            src={require(`/public/svg/${contact.src}?url`)}
            width={16}
            height={16}
            style={{
              maxWidth: "100%",
              height: "auto",
              marginRight: 6,
            }}
          />
          {contact.title}
        </Link>
      ))}
    </div>
  );
};

export default Contacts;