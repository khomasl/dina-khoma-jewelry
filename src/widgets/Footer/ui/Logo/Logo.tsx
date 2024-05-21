import { FC } from "react";

type Props = {
  title: string;
  description: string;
}

const Logo: FC<Props> = ({title, description}) => {
  return (
    <div className="hidden md:block max-w-56">
      <h5 className="text-xl font-bold mb-2">{title}</h5>
      <p>{description}</p>
    </div>
  );
};

export default Logo;