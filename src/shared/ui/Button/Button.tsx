import { FC } from "react";
import Link from "next/link";
import clsx from "clsx";

type Props = {
  text?: string;
  link?: string;
  className?: string;
}

const Button: FC<Props> = ({text, link, className}) => {
  return (
    <Link 
      key={text}
      href={link || ''}
    >
      <button 
        className={clsx(
          "bg-gray-400 rounded-lg py-4 px-8 font-bold text-center text-xl text-white hover:opacity-90 transition-all", 
          className
        )}
      >
        {text}
      </button>
    </Link>
  )
}

export default Button;