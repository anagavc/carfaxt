import AOS from "aos";
import "aos/dist/aos.css";
import classnames from "classnames";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const PrimaryButton = (props) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const classStr = classnames(
    "flex items-center justify-center px-10 text-center font-medium font-heading text-sm rounded-sm md:px-10 py-2 hover:bg-gray hover:text-white transition duration-300",
    props.width,
    props.textColor || "text-white",
    props.color || "bg-blue",
    props.margin
  );
  return props.to ? (
    <NavLink
      className={classStr}
      to={{ pathname: props.to }}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      {props.children}
    </NavLink>
  ) : (
    <button
      className={classStr}
      onClick={props.onClick}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      {props.children}
    </button>
  );
};

export default PrimaryButton;
