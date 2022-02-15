import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import PeopleIcon from "@mui/icons-material/People";
import MyLocationIcon from "@mui/icons-material/MyLocation";
const RentalDetailIcons = (props) => {
  return (
    <div className="flex flex-wrap  justify-between">
      <div className="flex item-center">
        <PeopleIcon className="fill text-blue text-sm" />
        <p className="font-body text-blue font-normal text-sm">5 People</p>
      </div>
      <div className="flex item-center">
        <MyLocationIcon className="fill text-blue" />
        <p className="font-body text-blue font-medium text-sm">AkwaIbom</p>
      </div>
      <div className="flex item-center">
        <LocalGasStationIcon className="fill text-blue" />
        <p className="font-body text-blue font-medium text-sm">Petrol</p>
      </div>
    </div>
  );
};
export default RentalDetailIcons;
