import { HeadingParagraph, HeadingFour } from "../UI/FontStyles/Headings";
import SpeedIcon from "@mui/icons-material/Speed";
import car from "../../images/servicesCar.png";
import { LabelOff, Update } from "@mui/icons-material";
import ServicesHolder from "../UI/Placeholders/ServicesHolder";
import {
  FadeUpAnimation,
  SlideRightAnimation,
} from "../UI/Animations/Animations";

const Services = () => {
  const details = [
    {
      key: 1,
      heading: "Fast service delivery",
      caption:
        " We offer you services that are fast and effective to you at all times, your satisfaction is our utmost objective.",
      icon: <SpeedIcon />,
    },
    {
      key: 2,
      heading: "Discounted Prices",
      caption:
        "We offer heavily discounted prices that suit your budget and is convenient for your needs.",
      icon: <LabelOff />,
    },
    {
      key: 3,
      heading: "24/7 Customer Support",
      caption:
        "We have a customer service support that reliably attends to all your needs at any given time of the day.",
      icon: <Update />,
    },
  ];
  return (
    <div className="bg-blue bg-auto bg-no-repeat bg-cover bg-center  h-full py-36 flex flex-col items-center w-full px-8">
      <FadeUpAnimation className="space-y-2">
        <HeadingFour color="text-white" case="uppercase" align="text-center">
          services that we offer
        </HeadingFour>
        <HeadingParagraph color="text-blue-lighter">
          Get the best available services in rentals with us
        </HeadingParagraph>
      </FadeUpAnimation>

      <div className="flex justify-between mt-10 w-auto">
        {/* car */}
        <SlideRightAnimation className="h-1/5 w-2/5 hidden md:block">
          <img src={car} alt="services car" />
        </SlideRightAnimation>

        {/* services */}
        <div className="flex flex-col justify-between space-y-8 w-full md:w-2/5">
          {details.map((detail) => {
            return (
              <ServicesHolder
                key={detail.key}
                icon={detail.icon}
                heading={detail.heading}
                caption={detail.caption}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Services;
