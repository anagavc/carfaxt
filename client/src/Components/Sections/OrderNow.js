// import PrimaryButton from "../UI/Buttons/PrimaryButton";
import Paragraph from "../UI/FontStyles/Paragraph";
import startCar from "../../images/heroCar12.png";
import { NavLink } from "react-router-dom";
const OrderNow = (props) => {
  return (
    <div className="lg:flex w-4/5 hidden  rounded-lg bg-blue-light justify-around shadow-sm  mx-auto px-8 py-16 space-x-6 my-20">
      {/* write-up */}
      <div className="flex flex-col justify-between mx-4 w-2/5 space-y-6">
        <h4 className="font-heading font-bold text-3xl text-blue uppercase">
          Get Started with Carfaxt
        </h4>
        <Paragraph>
          Register with carfaxt today to earn mouth-watering
          <span className="block"> discounts on all your rentals</span>
        </Paragraph>
        <NavLink
          to="/register"
          className="bg-blue rounded-xs items-center text-white text-center font-heading text-sm py-2 mt-8 hover:bg-gray  transition duration-300"
        >
          Get Started &rarr;
        </NavLink>
      </div>
      {/* car image */}
      <div className="bg-hero-pattern bg-auto bg-no-repeat bg-cover bg-center h-2/5 w-2/5 -my-40 rounded-lg">
        <img src={startCar} alt="startCar" className="w-3/5 h-full" />
      </div>
    </div>
  );
};

export default OrderNow;
