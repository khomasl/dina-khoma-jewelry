import Image from "next/image";
import { FC } from "react";

type Props = {
  feedback: {
    title: string;
    description: string;
    src: string;
  }
}

const FeedbackCard: FC<Props> = ({feedback}) => {
  return (
    <div className="flex flex-col items-center w-full h-full bg-white text-gray-900 px-4 py-6 rounded-xl">
      <div className="relative w-14 aspect-square overflow-hidden rounded-full shrink-0">
        <Image
          className="object-cover"
          alt={feedback.title || ''}
          src={feedback.src || "/no-avatar.png"}
          fill
        />
      </div>
      <h4 className="text-violet-400 text-sm mt-3 mb-3">{feedback.title}</h4>
      <div className="w-full border border-b-violet-400 mb-3" />
      <p className="line-clamp-12 text-center text-sm md:text-base px-3">{feedback.description}</p>
    </div>
  )
};

export default FeedbackCard;
