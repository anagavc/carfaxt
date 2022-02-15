import { BodyParagraph } from "../FontStyles/Paragraph";
import RentalDetailIcons from "../Icons/RentalDetailsIcon";

import { HeadingFour } from "../FontStyles/Headings";
import { useHistory } from "react-router-dom";
const FeaturedItem = (props) => {
  const history = useHistory();
  return (
    <div
      className="flex flex-col  bg-white justify-between rounded-md h-auto md:h-4/5 shadow-lg my-10 p-6 w-full"
      key={props.id}
      id={props.id}
    >
      <div className="bg-blue-light h-2/5 w-auto rounded-md">
        <img className="h-full" src={props.image} alt="featured" />
      </div>
      <div className="flex flex-col space-y-2 my-4">
        <div className="border border-2 border-blue  my-4 w-1/4">
          <p className="text-blue font-heading font-normal text-md text-center">
            {props.year}
          </p>
        </div>
        <HeadingFour align="text-justify" color="text-blue">
          {props.name}
        </HeadingFour>
        <BodyParagraph>{`$ ${props.cost} Per Hour`}</BodyParagraph>
      </div>

      <RentalDetailIcons
        location={props.location}
        passengers={props.passengers}
        fuelType={props.fuelType}
      />

      <button
        className="bg-blue rounded-md items-center text-white font-heading text-sm py-2 my-2 hover:bg-gray  transition duration-300"
        onClick={() => history.push(`/rentals/${props.id}`)}
      >
        Book Now
      </button>
    </div>
  );
};

export default FeaturedItem;
