import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import PrimaryButton from "../UI/Buttons/PrimaryButton";
import SecondaryButton from "../UI/Buttons/SecondaryButton";
import HeadingOne from "../UI/FontStyles/Headings";

const Hero = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="bg-hero-pattern bg-no-repeat bg-cover bg-center flex flex-col h-4/5 py-12 pb-40 md:h-screen md:py-0 md:max-w-full md:flex md:flex-row md:justify-evenly md:items-center">
        {/* heroleft */}

        <div
          className="flex flex-col items-start space-y-8 mt-20 p-8 md:py-24 md:px-24 md:flex-grow md:mt-0"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-easing="ease-in-out"
          data-aos-duration="1200"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <HeadingOne>
            Want to rent a ride and <p>save more?</p>
          </HeadingOne>
          <div className="w-4/12 h-2 bg-blue-lighter md:w-2/12"></div>
          <p className="font-body text-white font-normal text-sm md:font-medium md:text-base">
            Discover rental cars at budget friendly prices and flexible
            <span className="inline md:block">terms today.</span>
          </p>
          <div className="flex space-x-3">
            <SecondaryButton
              borderColor="border-white"
              hoverColor="hover:bg-blue-lighter"
              textColor="text-white"
              hoverText="hover:text-blue"
              to="/rent"
            >
              Explore
            </SecondaryButton>
            <PrimaryButton
              onClick="/rent"
              color="bg-blue-lighter"
              textColor="text-blue"
              to="/register"
            >
              Register
            </PrimaryButton>
          </div>
        </div>

        {/* heroright */}

        <div
          className="rounded-b-full flex-grow-0 -mt-40 mx-12 max-w-lg h-4/5 hidden lg:block"
          data-aos="slide-left"
          data-aos-delay="50"
          data-aos-easing="ease-in-out"
          data-aos-duration="1200"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <img
            src="https://res.cloudinary.com/dbi5rixx1/image/upload/v1644855678/carfaxt/heroCar_e5mdmk.png"
            alt="hero"
            className="ml:0  item-center w-full "
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
