import Hero from "./Hero";
import Searchbar from "../Searchbar/Searchbar";
import GetStarted from "./GetStarted";

import Services from "./Services";
import About from "./About";
import Featured from "./Featured";
import Reviews from "./Reviews";
import OrderNow from "./OrderNow";
import Team from "./Team";
const Main = () => {
  return (
    <>
      <Hero />
      <Searchbar />
      <GetStarted />
      <Services />
      <About />
      <Team />
      <Featured />
      <Reviews />
      <OrderNow />
    </>
  );
};

export default Main;
