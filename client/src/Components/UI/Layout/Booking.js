import { HeadingFour } from "../FontStyles/Headings";
import Paragraph, { BodyParagraph } from "../FontStyles/Paragraph";
import RentalDetailIcons from "../Icons/RentalDetailsIcon";
import CarRentalIcon from "@mui/icons-material/CarRental";

const Booking = (props) => {
  return (
    <div className="flex flex-col w-full mt-8">
      <div className="flex flex-col  md:flex-row md:w-4/5 w-5/6 mx-auto rounded-t-lg md:rounded-l-lg  shadow-md mx-auto my-8">
        <div className="bg-blue md:w-2/5 w-full rounded-t-lg md:rounded-t-none md:rounded-l-lg flex py-20 px-10">
          <img
            src={props.image}
            alt={props.title}
            className="w-3/5  h-auto self-center order-first md:order-last"
          />
        </div>

        <div className="flex flex-col self-start w-full">
          <div className="bg-blue-light flex w-full h-1/5 py-4 px-8 space-x-2 align-center">
            <span className="text-blue">
              <CarRentalIcon />
            </span>
            <Paragraph> {props.car}</Paragraph>
          </div>
          <div className="px-8 space-y-4 my-8 flex flex-col">
            <HeadingFour align="text-justify" color="text-blue">
              {props.car}
            </HeadingFour>
            <BodyParagraph>{props.detail}</BodyParagraph>

            <RentalDetailIcons
              passengers={props.passengers}
              location={props.location}
              fuelType={props.fuelType}
            />

            {/* {props.active ? (
              <PrimaryButton>End Booking</PrimaryButton>
            ) : (
              <PrimaryButton>Book Again</PrimaryButton>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
