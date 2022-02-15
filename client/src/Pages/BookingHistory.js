import Booking from "../Components/UI/Layout/Booking";
import car1 from "../images/camry.png";
import car2 from "../images/heroCar.png";
import { HeadingFour } from "../Components/UI/FontStyles/Headings";
import { History } from "@mui/icons-material";
import { useHistory } from "react-router-dom";
import SecondaryButton from "../Components/UI/Buttons/SecondaryButton";

const BoookingHistory = (props) => {
  const history = useHistory();
  const backButtonHandler = () => {
    history.push("/userDashBoard");
  };
  const histories = [
    {
      image: car1,
      date: "Saturday, 25/12/2021",
      car: "Toyota Camry 2020",
      detail:
        "The toyota camry highly reputed for its durability and ruggedity ,  is a customer’s favourite when it comes to long distance travels.The toyota camry highly reputed for its durability and ruggedity,is a customer’s favourite when it comes to long distance travels.",
    },
    {
      image: car2,
      date: "Saturday, 06/01/2022",
      car: "Mercedes Benz",
      detail: "Pure definition of luxury",
    },
  ];

  return (
    <div className="flex flex-col w-full mt-8">
      <div className="flex px-4 space-x-4">
        <span className="text-blue">
          <History />
        </span>
        <HeadingFour color="text-blue" align="text-justify">
          Booking History
        </HeadingFour>
      </div>
      {histories.map((history) => {
        return (
          <Booking
            title="Booking History"
            image={history.image}
            date={history.date}
            car={history.car}
            detail={history.detail}
          />
        );
      })}
      <SecondaryButton
        width="md:w-2/5"
        margin="mx-auto"
        top="mt-12"
        onClick={backButtonHandler}
      >
        Back
      </SecondaryButton>
    </div>
  );
};
export default BoookingHistory;
