import camry from "../../images/camry.png";
import PeopleIcon from "@mui/icons-material/People";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import PrimaryButton from "../UI/Buttons/PrimaryButton";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import SecondaryButton from "../UI/Buttons/SecondaryButton";
const SearchResult = (props) => {
  return (
    <div className="flex justify-around bg-blue-white mt-4 mb-8 w-full mx-auto h-2/5 items-center content-center">
      {/* car */}
      <div className="w-80 h-auto">
        <img src={camry} alt="camry" />
      </div>
      {/* details */}
      <div className="flex flex-col items-center justify-evenly space-y-4">
        <h4 className="font-heading font-semibold text-lg text-blue">
          Toyota Camry
        </h4>
        <div className="flex space-x-4">
          <div className="flex item-center">
            <PeopleIcon className="fill text-blue" />
            <p className="font-body text-blue font-medium text-sms">5 People</p>
          </div>
          <div className="flex item-center">
            <MyLocationIcon className="fill text-blue" />
            <p className="font-body text-blue font-medium text-sms">AkwaIbom</p>
          </div>
          <div className="flex item-center">
            <LocalGasStationIcon className="fill text-blue" />
            <p className="font-body text-blue font-medium text-sms">Petrol</p>
          </div>
        </div>
        <PrimaryButton width="w-full">Book Now</PrimaryButton>
      </div>
      {/* view more btn */}
      <div>
        <SecondaryButton>View more</SecondaryButton>
      </div>
    </div>
  );
};
export default SearchResult;
