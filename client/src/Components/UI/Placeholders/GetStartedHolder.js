import { FadeUpAnimation } from "../Animations/Animations";
import { HeadingFive } from "../FontStyles/Headings";
import { BodyParagraph } from "../FontStyles/Paragraph";
const GetStartedHolder = (props) => {
  return (
    <FadeUpAnimation>
      <div className="flex content-center my-6 px-10" key={props.id}>
        <div className="bg-blue text-white w-auto h-auto  p-4 md:p-6 rounded-sm transition duration-300 ease-out hover:bg-blue-light drop-shadow-xl hover:text-blue animate">
          {props.icon}
        </div>
        <div className="flex flex-col pl-4">
          <HeadingFive>{props.heading}</HeadingFive>
          <BodyParagraph> {props.caption}</BodyParagraph>
        </div>
      </div>
    </FadeUpAnimation>
  );
};
export default GetStartedHolder;
