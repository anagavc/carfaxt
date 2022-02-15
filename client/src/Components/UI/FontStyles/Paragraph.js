import classnames from "classnames";
const Paragraph = (props) => {
  return (
    <p className="text-blue font-body text-md font-medium">{props.children}</p>
  );
};

export const BodyParagraph = (props) => {
  return (
    <p className="font-body text-gray text-sm text-left md:text-justify ">
      {props.children}
    </p>
  );
};
export const ServiceParagraph = (props) => {
  return (
    <p className="font-body text-gray text-sm text-center md:text-justify ">
      {props.children}
    </p>
  );
};
export const AboutParagraph = (props) => {
  const classStr = classnames(
    "font-body leading-8",
    props.color,
    props.align,
    props.size,
    props.weight
  );
  return <p className={classStr}>{props.children}</p>;
};
export default Paragraph;
