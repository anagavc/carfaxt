import { FadeUpAnimation } from "../UI/Animations/Animations";
import PrimaryButton from "../UI/Buttons/PrimaryButton";
import Location from "./Location";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import CarType from "./CarType";

import { getRentalsBySearch } from "../../actions/rentals";

const Searchbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [carType, setCarType] = useState("");
  const [location, setLocation] = useState("");

  const searchRental = () => {
    if (carType.trim() || location) {
      //dispatch the fetch search logic
      dispatch(getRentalsBySearch({ carType, location }));
      history.push(
        `/rentals/search?searchQuery=${carType}&location=${location}`
      );
    } else {
      history.push("/");
    }
  };
  return (
    <FadeUpAnimation>
      <div className="mx-auto -mt-12 z-50 bg-white rounded-sm shadow-lg flex justify-around pb-4 pt-2 w-full md:w-4/5 md:py-6 md:-mt-16 items-center">
        <CarType value={carType} onChange={(e) => setCarType(e.target.value)} />
        {/* location */}

        <Location
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        {/* button */}

        <PrimaryButton onClick={searchRental}>Search</PrimaryButton>
      </div>
    </FadeUpAnimation>
  );
};
export default Searchbar;
