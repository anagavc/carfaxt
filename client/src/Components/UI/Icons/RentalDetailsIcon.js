import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import PeopleIcon from "@mui/icons-material/People";
import MyLocationIcon from "@mui/icons-material/MyLocation";
const RentalDetailIcons = (props) => {
  return (
    <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-between">
      <div className="flex item-center">
        <PeopleIcon className="fill text-blue text-sm" />
        <p className="font-body text-blue font-normal text-sm">
          {props.passengers} Passengers
        </p>
      </div>
      <div className="flex item-center">
        <MyLocationIcon className="fill text-blue" />
        <p className="font-body text-blue font-medium text-sm">
          {props.location}
        </p>
      </div>
      <div className="flex item-center">
        <LocalGasStationIcon className="fill text-blue" />
        <p className="font-body text-blue font-medium text-sm">
          {props.fuelType}
        </p>
      </div>
    </div>
  );
};
export default RentalDetailIcons;
