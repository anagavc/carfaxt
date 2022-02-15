import ShowChartIcon from "@mui/icons-material/ShowChart";
import PrimaryButton from "../Components/UI/Buttons/PrimaryButton";
import { useHistory } from "react-router";
import SecondaryButton from "../Components/UI/Buttons/SecondaryButton";
import { HeadingFive, HeadingFour } from "../Components/UI/FontStyles/Headings";
import { AboutParagraph } from "../Components/UI/FontStyles/Paragraph";
import RentalDetailIcons from "../Components/UI/Icons/RentalDetailsIcon";
import { deleteRental } from "../actions/rentals";
import Card from "../Components/UI/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Components/UI/Loaders/Loading";
import {
  FadeDownAnimation,
  FadeUpAnimation,
} from "../Components/UI/Animations/Animations";

const RentSearch = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const backButtonHandler = () => {
    history.push("/");
  };

  const { rentals, isLoading } = useSelector((state) => state.rentals);
  const user = JSON.parse(localStorage.getItem("profile"));
  if (!rentals.length && !isLoading)
    return (
      <Card
        message="There are no available rentals for the option you have chosen."
        onClick={() => history.push("/rent")}
        caption="Go to rentals list"
      />
    );
  return isLoading ? (
    <Loading />
  ) : (
    <FadeUpAnimation className="flex flex-col w-4/5 mx-auto space-y-12 h-full my-20">
      <HeadingFour color="text-blue">
        <ShowChartIcon />
        All rentals
      </HeadingFour>
      <div className="inline-flex flex-wrap justify-between w-full mb-12">
        {rentals.map((car) => {
          return (
            <FadeDownAnimation
              className="flex flex-col md:w-full lg:w-2/5 bg-gray mx-auto lg:mx-4 mb-8"
              key={car._id}
            >
              <div className="bg-blue  py-6">
                <img src={car.image} alt="a car" />
              </div>
              <div className="bg-white flex-flex-col filter drop-shadow-md p-8 space-y-4">
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
                      onClick={() => dispatch(deleteRental(car._id))}
                    >
                      Delete Rental
                    </PrimaryButton>
                  </>
                )}
              </div>
            </FadeDownAnimation>
          );
        })}
      </div>

      <SecondaryButton
        onClick={backButtonHandler}
        width=" w-4/5 md:w-2/5 "
        margin="mx-auto"
      >
        Back
      </SecondaryButton>
    </FadeUpAnimation>
  );
};

export default RentSearch;
