import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";

type Props = {
  className?: string;
  onClick?: () => void;
  direction?: 'left' | 'right';
}

const ArrowButton: FC<Props> = ({className, onClick, direction = 'left'}) => {
  return (
    <button 
      className={clsx("relative h-[50px] aspect-square rounded-full overflow-hidden", className)}
      onClick={onClick}
    >
      <Image
        className={clsx(
          "hover:scale-110 transition-all duration-500",
          [{'rotate-180': direction === 'right'}],
        )}
        alt={'>'}
        src={'/svg/arrow-left.svg'}
        fill
      />
    </button>
  );
};

export default ArrowButton;