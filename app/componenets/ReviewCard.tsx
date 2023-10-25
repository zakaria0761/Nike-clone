import Image, { StaticImageData } from "next/image";
import { Star } from "../assetsComponents/icons";

type propsType = {
  imgURL: StaticImageData;
  customerName: string;
  rating: number;
  feedback: string;
};
const ReviewCard = ({ imgURL, customerName, rating, feedback }: propsType) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Image
        src={imgURL}
        alt="asfasf"
        className="object-cover rounded-full w-[120px] h-[120px]"
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <Star width={24} height={24} className="object-contain m-0" />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
