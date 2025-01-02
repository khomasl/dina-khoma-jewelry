import {FC, PropsWithChildren} from "react";
import Link from "next/link";
import clsx from "clsx";

type Props = PropsWithChildren & {
  link?: string;
  className?: string;
}

const Button: FC<Props> = ({children, link, className}) => {
  return (
    <Link
      href={link || ''}
    >
      <button
        className={clsx(
          "bg-gray-400 rounded-[8px] py-4 px-8 font-bold text-center text-xl text-white hover:opacity-90 transition-all",
          className
        )}
      >
        {children}
      </button>
    </Link>
  )
}

export default Button;
