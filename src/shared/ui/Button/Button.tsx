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
    <button className={clsx("bg-gray rounded-lg py-4 px-8 text-center text-xl", className)}>
      <Link 
        key={text}
        href={link || ''}
      >
        {text}
      </Link>
    </button>
  )
}

export default Button;