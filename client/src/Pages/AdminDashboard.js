import { MyLocation, Book } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { HeadingFour } from "../Components/UI/FontStyles/Headings";
import { AboutParagraph } from "../Components/UI/FontStyles/Paragraph";
import { useSelector } from "react-redux";
import Loading from "../Components/UI/Loaders/Loading";
import { useEffect } from "react";
import { FadeUpAnimation } from "../Components/UI/Animations/Animations";
const AdminDashboard = (props) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const { isLoading } = useSelector((state) => state.auth);
  useEffect(() => {}, [user, isLoading]);
  const bookingLinks = [
    {
      name: "Upload a new rental",
      url: "/uploadRental",
    },
    {
      name: "Active Bookings",
      url: "/activeBooking",
    },
  ];
  // const accountLinks = [
  //   {
  //     name: "Change your password",
  //     url: "/changePassword",
  //   },
  //   {
  //     name: "Update your account",
  //     url: "/updateAccount",
  //   },
  // ];
  return isLoading ? (
    <Loading />
  ) : (
    <FadeUpAnimation className="flex flex-col space-y-12 lg:w-3/5 w-5/6 h-full mx-auto mb-20 lg:mb-0 lg:h-screen lg:justify-center">
      <div className="bg-white p-4 flex flex-col lg:flex-row mx-auto mt-10 w-full h-auto filter rounded-md justify-start space-x-0 space-y-8 lg:space-y-0 lg:space-x-8 p-8 drop-shadow-md">
        <div className="filter drop-shadow-md lg:w-24 lg:h-24 w-full h-full bg-white p-2 rounded-full lg:rounded-md">
          <img
            src={user.result.image}
            alt="user"
            className="h-full w-full object-cover rounded-full lg:rounded-none"
          />
        </div>
        <div className="flex flex-col">
          <HeadingFour color="text-blue">
            Welcome, <span className="font-normal">{user.result.name}</span>
          </HeadingFour>
          <AboutParagraph color="text-blue">
            <MyLocation />
            <span className="ml-2">{user.result.location}</span>
          </AboutParagraph>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-8 ">
        <div className="bg-white p-4 flex flex-col mx-auto mt-10  w-full  h-auto filter rounded-md space-y-8 justify-around p-8 drop-shadow-md divide-y divide-blue-light">
          <div>
            <HeadingFour color="text-blue">
              <Book />
              Bookings
            </HeadingFour>
          </div>
          {bookingLinks.map((bookingLink) => {
            return (
              <div>
                <NavLink
                  to={bookingLink.url}
                  className="text-gray font-body text-sm hover:text-blue"
                >
                  {bookingLink.name}
                </NavLink>
              </div>
            );
          })}
        </div>
        {/* <div className="bg-white p-4 flex flex-col mx-auto mt-10 w-full lg:w-3/5 h-auto filter rounded-md justify-between space-y-4 p-8 drop-shadow-md divide-y divide-blue-light">
          <div>
            <HeadingFour color="text-blue">
              <Settings />
              Account settings
            </HeadingFour>
          </div>
          {accountLinks.map((accountLink) => {
            return (
              <div>
                <NavLink
                  to={accountLink.url}
                  className="text-gray font-body text-sm hover:text-blue mt-12"
                >
                  {accountLink.name}
                </NavLink>
              </div>
            );
          })}
        </div> */}
      </div>
    </FadeUpAnimation>
  );
};

export default AdminDashboard;
