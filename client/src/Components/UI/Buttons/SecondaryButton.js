import classnames from "classnames";
import { NavLink } from "react-router-dom";

const SecondaryButton = (props) => {
  const classStr = classnames(
    "flex items-center justify-center border font-medium font-heading text-sm rounded-sm px-10 py-2 transition duration-300",
    props.width,
    props.margin,
    props.hoverColor || "hover:bg-blue",
    props.hoverText || "hover:text-white",
    props.borderColor || "border-blue",
    props.textColor || "text-blue",
    props.top
  );
  return props.to ? (
    <NavLink className={classStr} to={{ pathname: props.to }}>
      {props.children}
    </NavLink>
  ) : (
    <button className={classStr} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
export default SecondaryButton;
