import Booking from "../Components/UI/Layout/Booking";
import { HeadingFour } from "../Components/UI/FontStyles/Headings";
import { Book } from "@mui/icons-material";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserBookings } from "../actions/rentals";
import { useEffect } from "react";
import SecondaryButton from "../Components/UI/Buttons/SecondaryButton";
import Loading from "../Components/UI/Loaders/Loading";
const ActiveBooking = (props) => {
  const history = useHistory();
  const backButtonHandler = () => {
    history.push("/userDashBoard");
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserBookings());
  }, [dispatch]);
  const { rentals, isLoading } = useSelector((state) => state.rentals);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="flex flex-col w-full mt-8">
      <div className="flex px-4 space-x-4">
        <span className="text-blue">
          <Book />
        </span>
        <HeadingFour color="text-blue" align="text-justify">
          Active Bookings
        </HeadingFour>
      </div>
      {rentals.map((booking) => {
        return (
          <Booking
            title="Booking History"
            key={booking._id}
            image={booking.image}
            date={booking.date}
            car={booking.carName}
            detail={booking.description}
            passengers={booking.passengers}
            location={booking.location}
            fuelType={booking.fuelType}
            active="true"
          />
        );
      })}
      <SecondaryButton
        width="w-4/5 md:w-2/5"
        margin="mx-auto"
        top="my-12"
        onClick={backButtonHandler}
      >
        Back
      </SecondaryButton>
    </div>
  );
};

export default ActiveBooking;
