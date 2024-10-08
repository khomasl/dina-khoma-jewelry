import { Menu } from "@/features";
import { CONTENT_HOMEPAGE } from "@/shared/constants";
import Link from "next/link";

const MenuContent = () => {
  const { socials, phone, email} = CONTENT_HOMEPAGE.header;
  return (
    <div className="flex flex-col justify-between h-full pb-6">
      <Menu type="vertical" />
      <div>
        <Link className="block text-4xl mb-2 text-violet-400 font-bold" href={`tel:${phone.link}`}>{phone.title}</Link>
        <Link className="block text-2xl mb-10 text-gray-400 font-bold" href={`mailTo:${email.link}`}>{email.title}</Link>
        <div className="flex justify-start gap-2 text-violet-400 font-bold">
          {socials.map((social) => (
            <div key={social.link}>
              <Link href={social.link}>{social.title}</Link>
              <div className="border border-l last:hidden" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MenuContent;
