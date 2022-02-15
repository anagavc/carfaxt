import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PrimaryButton from "../Components/UI/Buttons/PrimaryButton";
import { AboutParagraph } from "../Components/UI/FontStyles/Paragraph";
import { useHistory } from "react-router-dom";
import errorImg from "../images/errorImage.svg";
import { FadeDownAnimation } from "../Components/UI/Animations/Animations";
const NotFoundPage = (props) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const history = useHistory();
  return (
    <FadeDownAnimation className="bg-white my-20 rounded-md w-5/6 lg:w-3/5 mx-auto space-y-6 py-20 px-8  filter drop-shadow flex-col justify-between h-4/5 filter drop-shadow-lg">
      <div className="flex justify-center">
        <h1
          className="text-blue font-heading font-bold text-8xl lg:text-9xl"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          4
        </h1>
        <img
          src={errorImg}
          alt="error"
          className="h-20 w-20 lg:h-40 lg:w-40"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
        />
        <h1
          className="text-blue font-heading font-bold text-8xl lg:text-9xl"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          4
        </h1>
      </div>
      <AboutParagraph
        color="text-blue"
        size="text-sm lg:text-md"
        align="text-center"
      >
        Sorry, the page you requested for could not be found, kindly check the
        address you have entered.
      </AboutParagraph>
      <PrimaryButton
        width="w-4/5 lg:w-2/5"
        margin="mx-auto"
        onClick={() => history.push("/")}
      >
        GO TO HOME
      </PrimaryButton>
    </FadeDownAnimation>
  );
};
export default NotFoundPage;
