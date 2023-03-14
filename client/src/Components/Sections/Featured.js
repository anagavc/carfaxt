import React, { useState } from "react";
import { getRentals } from "../../actions/rentals";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper-bundle.css";
import FeaturedButton from "../UI/Buttons/FeaturedButton";
import { HeadingFour, HeadingParagraph } from "../UI/FontStyles/Headings";
import FeaturedItem from "../UI/Placeholders/FeaturedItem";
import SwiperCore, { Navigation } from "swiper";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { FadeDownAnimation } from "../UI/Animations/Animations";

SwiperCore.use([Navigation]);
const Featured = (props) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const dispatch = useDispatch();
  const { rentals } = useSelector((state) => state.rentals);
  const [cars, setCars] = useState([]);
  useEffect(() => {
    dispatch(getRentals());
  }, [dispatch]);

  const categories = ["All", "Toyota", "Honda", "Mercedes", "Audi"];

  const filter = async (category) => {
    if (category === "All") {
      setCars(rentals);
      return;
    }
    const filteredCar = rentals.filter((rental) => rental.brand === category);

    setCars(filteredCar);
  };
  return (
    <FadeDownAnimation className="flex flex-col items-center my-20 py-16">
      <HeadingFour color="text-gray" case="uppercase">
        most popular choices
      </HeadingFour>
      <HeadingParagraph>
        Some of our customers most popular choices
      </HeadingParagraph>
      <div className="flex flex-wrap justify-around md:space-x-4 mt-10">
        {categories.map((category, i) => {
          return (
            <FeaturedButton category={category} filter={filter}>
              {category}
            </FeaturedButton>
          );
        })}
      </div>
      <div className="flex w-4/5 justify-evenly space-x-4">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          loop
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onInit={(swiper) => {
            setTimeout(() => {
              // Override prevEl & nextEl now that refs are defined
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;

              // Re-init navigation
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            991: {
              slidesPerView: 3,
            },
          }}
        >
          {cars.length === 0
            ? rentals.map((rental) => {
                return (
                  <SwiperSlide key={rental._id}>
                    <FeaturedItem
                      image={rental.image}
                      name={rental.carName}
                      year={rental.carYear}
                      cost={rental.cost}
                      description={rental.description}
                      passengers={rental.passengers}
                      location={rental.location}
                      id={rental._id}
                      fuelType={rental.fuelType}
                    />
                  </SwiperSlide>
                );
              })
            : cars.map((rental) => (
                <SwiperSlide key={rental._id}>
                  <FeaturedItem
                    image={rental.image}
                    name={rental.carName}
                    year={rental.carYear}
                    cost={rental.cost}
                    description={rental.description}
                    passengers={rental.passengers}
                    location={rental.location}
                    id={rental._id}
                    fuelType={rental.fuelType}
                  />
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
      <div className="flex justify-between space-x-6">
        <button
          className="rounded-full h-12 w-12 border-2 border-blue text-blue  flex items-center justify-center hover:bg-blue hover:text-white transition ease-in duration-150"
          ref={navigationPrevRef}
        >
          <KeyboardArrowLeft className="fill-current hover:fill-current" />
        </button>
        <button
          className="rounded-full h-12 w-12 border-2 border-blue text-blue  flex items-center justify-center hover:bg-blue hover:text-white transition ease-in duration-100"
          ref={navigationNextRef}
        >
          <KeyboardArrowRight className="fill-current hover:fill-current " />
        </button>
        {/* <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div> */}
      </div>
    </FadeDownAnimation>
  );
};
export default Featured;
