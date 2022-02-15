import { ServiceParagraph } from "../FontStyles/Paragraph";
import { HeadingSix } from "../FontStyles/Headings";
import { FadeUpAnimation } from "../Animations/Animations";
const ServicesHolder = (props) => {
  return (
    <FadeUpAnimation>
      <div className="flex  space-x-3 flex-col items-center rounded md:flex-row bg-white md:items-start shadow-sm p-4 ">
        <div className="stroke-current text-blue mb-4">{props.icon}</div>
        <div className="flex flex-col">
          <HeadingSix
            align="sm:text-justify"
            color="text-gray"
            case="uppercase"
          >
            {props.heading}
          </HeadingSix>
          <ServiceParagraph>{props.caption}</ServiceParagraph>
        </div>
      </div>
    </FadeUpAnimation>
  );
};
export default ServicesHolder;
