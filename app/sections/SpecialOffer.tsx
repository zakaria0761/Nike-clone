import { ArrowRight } from "../assetsComponents/icons";
import { Offer } from "../assetsComponents/images";
import Button from "../componenets/Button";

const SpecialOffer = () => {
  return (
    <section
      id="offer"
      className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container"
    >
      <div className="flex-1">
        <Offer width={773} height={687} className="object-contain w-full" />
      </div>
      <div className=" flex flex-col flex-1">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red ">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journy that redefines your experience with
          unbeatable deals. Form premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
          <p className="mt-6 lg:max-w-lg info-text">
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest experctations. Yor journey with us
            is nothing short of exceptional
          </p>
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={ArrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
