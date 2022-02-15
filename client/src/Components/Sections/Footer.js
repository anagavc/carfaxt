import {
  FacebookRounded,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { subscribe } from "../../actions/auth";
import { NavLink } from "react-router-dom";
import ModalSubscribe from "../UI/Modal/ModalSubscribe";
import {
  FadeDownAnimation,
  FadeUpAnimation,
} from "../UI/Animations/Animations";

const Footer = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(subscribe(enteredEmail));
    setEnteredEmail("");
  };
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const { subscribed } = useSelector((state) => state.auth);
  const aboutLink = [
    { id: "1", href: "/about", title: "Company" },
    {
      id: "2",
      href: "/",
      title: "Location",
    },
    {
      id: "3",
      href: "/rent",
      title: "Plans and Pricing",
    },
    {
      id: "4",
      href: "/services",
      title: "Our Services",
    },
  ];

  const helpLink = [
    {
      id: "5",
      href: "/login",
      title: "Sign in",
    },
    {
      id: "6",
      href: "/register",
      title: "Register",
    },
    {
      id: "7",
      href: "/contact",
      title: "Contact us",
    },
    {
      id: "8",
      href: "/rent",
      title: "Book",
    },
  ];
  return (
    <div className="flex flex-col bg-blue w-full p-12">
      <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 justify-between">
        <FadeDownAnimation className="flex flex-col space-y-4">
          <h3 className="font-heading font-bold text-white text-lg">Carfaxt</h3>
          <p className="text-white font-normal text-sm justify">
            Premium car rentals service.
          </p>
          <FadeDownAnimation className="flex space-x-2">
            <NavLink
              to="/"
              key="9"
              className="text-white hover:text-blue-light transition duration-300"
            >
              <FacebookRounded />
            </NavLink>
            <NavLink
              to="/"
              key="10"
              className="text-white hover:text-blue-light transition duration-300"
            >
              <Instagram />
            </NavLink>
            <NavLink
              to="/"
              key="11"
              className="text-white hover:text-blue-light transition duration-300"
            >
              <LinkedIn />
            </NavLink>
            <NavLink
              to="/"
              key="12"
              className="text-white hover:text-blue-light transition duration-300"
            >
              <Twitter />
            </NavLink>
          </FadeDownAnimation>
        </FadeDownAnimation>
        <FadeDownAnimation className="flex flex-col space-y-4">
          <h4 className="font-heading font-bold text-white text-sm">About</h4>
          {aboutLink.map((link) => {
            return (
              <NavLink
                key={link.id}
                to={{ pathname: link.href }}
                className="text-white hover:text-blue-light transition duration-300"
              >
                {link.title}
              </NavLink>
            );
          })}
        </FadeDownAnimation>
        <FadeDownAnimation className="flex flex-col space-y-4">
          <h4 className="font-heading font-bold text-white text-sm">
            Help &amp; Support
          </h4>
          {helpLink.map((link) => {
            return (
              <NavLink
                key={link.id}
                to={{ pathname: link.href }}
                className="text-white hover:text-blue-light transition duration-300"
              >
                {link.title}
              </NavLink>
            );
          })}
        </FadeDownAnimation>
        <FadeUpAnimation className="flex w-full flex-col space-y-4 md:w-1/5">
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="subscribe"
              className="font-heading font-bold text-white text-sm"
            >
              Subscribe to our NewsLetter
            </label>
            <div>
              <input
                className="w-full px-4 py-2 text-blue"
                type="email"
                name="email"
                required
                id="subscribe"
                placeholder="Enter your email address"
                onChange={emailChangeHandler}
                value={enteredEmail}
              />
              <button className="text-white bg-gray mt-4 w-full rounded-sm px-10 py-2 font-medium text-sm font-heading hover:bg-blue-light hover:text-blue transition duration-300">
                Subscribe
              </button>
            </div>
          </form>
          {subscribed && <ModalSubscribe />}
        </FadeUpAnimation>
      </div>
      <div className="bg-white h-px w-full mx-auto my-8"></div>

      <p className="text-white font-normal text-center text-sm md:justify">
        Copyright &copy; Carfaxt 2021-2022
      </p>
    </div>
  );
};
export default Footer;
