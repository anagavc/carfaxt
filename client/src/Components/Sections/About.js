import PrimaryButton from "../UI/Buttons/PrimaryButton";
import { HeadingFour, HeadingParagraph } from "../UI/FontStyles/Headings";
import { AboutParagraph } from "../UI/FontStyles/Paragraph";
import aboutCar from "../../images/aboutCar.png";
import {
  FadeUpAnimation,
  FadeDownAnimation,
} from "../UI/Animations/Animations";
const About = (props) => {
  return (
    <div className="flex flex-col items-center  bg-blue-light py-36 w-full">
      <FadeUpAnimation className="space-y-2">
        <HeadingFour color="text-gray" align="text-center" case="uppercase">
          About Carfaxt
        </HeadingFour>
        <HeadingParagraph>The story behind the brand</HeadingParagraph>
      </FadeUpAnimation>

      <div className="flex flex-col content-between md:flex-row  w-full md:justify-around mt-10">
        {/* caption */}
        {/* image */}
        <FadeDownAnimation className="w-3/5 md:w-auto self-start">
          <img src={aboutCar} alt="about car" />
        </FadeDownAnimation>
        <div className="flex flex-col content-around px-8 w-full space-y-4 md:w-2/5 md:space-y-10">
          <FadeUpAnimation>
            <AboutParagraph color="text-gray" align="text-justify">
              Carfaxt was established with the sole aim of meeting the rental
              needs of people who have been severally disappointed by mediocre
              rental firms, our goal is to make renting vehicles hitch free for
              you by offering you services that make you come back for more. I
              customized the background on my homepage at
              <a
                className="px-2 text-blue hover:text-gray transition all duration-300"
                href="https://www.svgbackgrounds.com"
              >
                Svg Backgrounds.
              </a>
              The images were sourced from{" "}
              <a
                className="px-2 text-blue hover:text-gray transition all duration-300"
                href="https://www.unsplash.com"
              >
                Unsplash.
              </a>
              Thanks guys.
            </AboutParagraph>
          </FadeUpAnimation>

          <PrimaryButton to="/rent">Explore &rarr;</PrimaryButton>
        </div>
      </div>
    </div>
  );
};
export default About;
