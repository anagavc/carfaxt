import ShowChartIcon from "@mui/icons-material/ShowChart";
import PrimaryButton from "../Components/UI/Buttons/PrimaryButton";
import { useHistory } from "react-router";
import SecondaryButton from "../Components/UI/Buttons/SecondaryButton";
import { HeadingFive, HeadingFour } from "../Components/UI/FontStyles/Headings";
import { AboutParagraph } from "../Components/UI/FontStyles/Paragraph";
import RentalDetailIcons from "../Components/UI/Icons/RentalDetailsIcon";
import { deleteRental, getRentals } from "../actions/rentals";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Components/UI/Loaders/Loading";
import { useEffect } from "react";
import {
  FadeDownAnimation,
  FadeUpAnimation,
} from "../Components/UI/Animations/Animations";
const Rent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRentals());
  }, [dispatch]);
  const { rentals, isLoading } = useSelector((state) => state.rentals);

  const history = useHistory();
  const backButtonHandler = () => {
    history.push("/");
  };
  const user = JSON.parse(localStorage.getItem("profile"));

  return isLoading ? (
    <Loading />
  ) : (
    <FadeUpAnimation className="flex flex-col w-4/5 mx-auto space-y-12 h-full my-20">
      <HeadingFour color="text-blue">
        <ShowChartIcon />
        All rentals
      </HeadingFour>
      <div className="inline-flex flex-wrap h-full justify-between w-full mb-12">
        {rentals.map((car) => {
          return (
            <FadeUpAnimation
              className="flex flex-col md:w-full lg:w-2/5  mx-auto lg:mx-4 mb-8"
              key={car._id}
            >
              <FadeDownAnimation className="bg-blue  h-3/5 py-6">
                <img src={car.image} alt="a car" />
              </FadeDownAnimation>
              <FadeUpAnimation className="bg-white flex justify-between flex-col filter drop-shadow-md p-8 h-full space-y-4">
                <HeadingFive>{car.carName}</HeadingFive>
                <AboutParagraph
                  color="text-gray"
                  align="text-justify"
                  size="text-sm"
                >
                  {car.description}
                </AboutParagraph>
                <RentalDetailIcons
                  location={car.location}
                  passengers={car.passengers}
                  fuelType={car.fuelType}
                />
                {user?.result.role !== "admin" && (
                  <PrimaryButton
                    width="w-full"
                    onClick={() => history.push(`/rentals/${car._id}`)}
                  >
                    Book Now
                  </PrimaryButton>
                )}

                {user?.result.role === "admin" && (
                  <>
                    <SecondaryButton
                      onClick={() =>
                        history.push(`/rentals/${car._id}/updateRental`)
                      }
                      width="w-full"
                    >
                      Edit rental
                    </SecondaryButton>
                    <PrimaryButton
                      width="w-full"
                      color="bg-red"
                      onClick={() => dispatch(deleteRental(car._id, history))}
                    >
                      Delete Rental
                    </PrimaryButton>
                  </>
                )}
              </FadeUpAnimation>
            </FadeUpAnimation>
          );
        })}
      </div>

      <SecondaryButton
        onClick={backButtonHandler}
        width="w-4/5 md:w-2/5"
        margin="mx-auto"
      >
        Back
      </SecondaryButton>
    </FadeUpAnimation>
  );
};

export default Rent;
