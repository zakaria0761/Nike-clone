"use client";
import Image, { StaticImageData } from "next/image";
import { ThumbnailBackground } from "../assetsComponents/images";
import { SetStateAction } from "react";
type propsType = {
  imgURL: React.JSX.Element | any;
  changeBigShoeImage: any;
  bigShoeImg: SetStateAction<StaticImageData>;
};

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }: propsType) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center">
        <ThumbnailBackground className="bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4" />
        {imgURL.thumbnail}
      </div>
    </div>
  );
};

export default ShoeCard;
