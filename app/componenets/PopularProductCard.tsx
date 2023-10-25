import { Star } from "../assetsComponents/icons";
const PopularProductCard = ({ imgURL, name, price }: any) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      {imgURL}
      <div className="mt-8 flex justify-start gap-2.5">
        <Star width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 text-2xl leading-normal font-semibold font-montserrat text-coral-red">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
