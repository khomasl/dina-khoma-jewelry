import { FC } from "react";

type Props = {
  title: string;
  description: string;
}

const Logo: FC<Props> = ({title, description}) => {
  return (
    <div className="hidden md:block max-w-[270px]">
      <h1 className="text-xl font-bold mb-2">{title}</h1>
      <h2>{description}</h2>
    </div>
  );
};

export default Logo;