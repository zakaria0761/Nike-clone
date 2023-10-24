import { Shoe8 } from "../assetsComponents/images";
import Button from "../componenets/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="w-full flex max-lg:flex-col justify-between items-center gap-10 max-container"
    >
      <div className=" flex flex-col flex-1">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red "> Super</span>
          <span className="text-coral-red "> Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
          <p className="mt-6 lg:max-w-lg info-text">
            Our dedication to detail and excellence ensures your satisfaction
          </p>
        </p>
        <div className="mt-11">
          <Button label="View details"></Button>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Shoe8 width={570} height={522} className="object-contain" />
      </div>
    </section>
  );
};

export default SuperQuality;
