import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { CONTENT, EMAIL, PHONE_NUMBER } from "@/shared/constants/common";
import clsx from "clsx";

type Props = {
  contacts: typeof CONTENT['footer']['myContacts'];
  className?: string;
}

const Contacts: FC<Props> = ({contacts, className}) => {
  return (
    <div className={clsx("text-xl max-w-56", className)}>
      <h5 className="text-xl font-bold mb-2">{contacts.title}</h5>
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
          className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 text-base"
        >
          <Image
            alt={contact.title}
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