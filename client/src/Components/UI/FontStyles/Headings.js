import classnames from "classnames";
const HeadingOne = (props) => {
  return (
    <h1 className="font-heading text-blue-lighter text-xl  lg:text-5xl font-bold py-30">
      {props.children}
    </h1>
  );
};

export const HeadingParagraph = (props) => {
  const classStr = classnames(
    "font-heading font-bold text-lg text-center md:text-justify",
    props.color || "text-blue"
  );
  return <p className={classStr}>{props.children}</p>;
};

export const HeadingFour = (props) => {
  const classStr = classnames(
    "font-heading font-semibold text-lg",
    props.color,
    props.case,
    props.align
  );
  return <h4 className={classStr}>{props.children}</h4>;
};
export const HeadingFive = (props) => {
  return (
    <h5 className="font-heading font-bold text-left  text-blue">
      {props.children}
    </h5>
  );
};

export const HeadingSix = (props) => {
  const classStr = classnames(
    "font-heading font-medium text-md text-blue text-center",
    props.align
  );
  return <h6 className={classStr}>{props.children}</h6>;
};

export default HeadingOne;
