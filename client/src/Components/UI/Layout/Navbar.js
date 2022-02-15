import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import logo from "../../../images/logo1.png";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import NavItem from "../NavItem/NavItem";
import decode from "jwt-decode";
import PrimaryButton from "../Buttons/PrimaryButton";

const Navbar = () => {
  const links = [
    {
      id: 2,
      name: "Home",
      to: "/",
    },
    {
      id: 3,
      name: "Services",
      to: "/services",
    },
    {
      id: 4,
      name: "About",
      to: "/about",
    },
    {
      id: 5,
      name: "Rent",
      to: "/rent",
    },
  ];
  const [mobileNav, setMobileNav] = useState(false);
  const navHandler = () => {
    setMobileNav((prevState) => {
      const updatedState = !prevState;
      return updatedState;
    });
  };
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };
  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);
  return (
    <header>
      {/* Navbar goes here */}

      <nav className="bg-blue sticky inset-x-0 z-5">
        <div>
          <div className="mx-auto space-x-8">
            <div className="flex justify-between px-2">
              {/* logo */}
              <div key="1">
                <NavLink to="/" className="flex items-center py-2">
                  <img src={logo} alt="carfaxt logo" />
                </NavLink>
              </div>

              {/* primary nav */}
              <div className="hidden md:flex items-center space-x-1 font-heading font-medium">
                {links.map((link) => {
                  return (
                    <NavItem to={link.to} id={link.id} key={link.id}>
                      {link.name}
                    </NavItem>
                  );
                })}
              </div>

              {/* secondary nav */}
              {user ? (
                <div className="hidden md:flex items-center text-white space-x-1">
                  {user.result.role === "admin" ? (
                    <NavLink
                      to="/adminDashboard"
                      key="7"
                      className="py-2 px-5 rounded hover:bg-gray hover:text-blue-light transition duration-300"
                    >
                      Dashboard
                    </NavLink>
                  ) : (
                    <NavLink
                      to="/userDashboard"
                      key="8"
                      className="py-2 px-5 rounded hover:bg-gray hover:text-blue-light transition duration-300"
                    >
                      Dashboard
                    </NavLink>
                  )}

                  <button
                    onClick={logout}
                    className="py-2 px-5 bg-blue-light font-heading font-medium hover:bg-gray text-blue  hover:text-white rounded transition duration-300"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="hidden md:flex items-center text-white space-x-1">
                  <NavLink
                    to="/login"
                    className="py-2 px-5 rounded hover:bg-gray hover:text-blue-light transition duration-300"
                  >
                    Sign In
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="py-2 px-5 bg-blue-light  hover:bg-gray  font-heading text-blue  hover:text-white rounded transition duration-300"
                  >
                    Sign Up
                  </NavLink>
                </div>
              )}

              {/* mobile button goes here */}
              <div className="md:hidden flex items-center transition duration-300">
                <button onClick={navHandler}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {mobileNav && (
            <div
              className={`md:hidden flex w-full flex-col pl-6 py-6 bg-blue border border-blue-light  z-50 ${
                mobileNav
                  ? "transition ease-in-out duration-300"
                  : "translate-y-full"
              }`}
            >
              {links.map((link) => {
                return (
                  <NavItem to={link.to} id={link.id}>
                    {link.name}
                  </NavItem>
                );
              })}
              {user ? (
                <>
                  <button
                    className="px-2 py-2 text-white text-left  font-heading font-medium hover:text-gray transition duration-300"
                    onClick={logout}
                  >
                    Sign out
                  </button>
                  {user.result.role === "admin" ? (
                    <PrimaryButton
                      color="bg-blue-light"
                      width="w-2/5"
                      to="/adminDashboard"
                      textColor="text-blue"
                    >
                      Dashboard
                    </PrimaryButton>
                  ) : (
                    <PrimaryButton
                      color="bg-blue-light"
                      width="w-2/5"
                      to="/userDashboard"
                      textColor="text-blue"
                    >
                      Dashboard
                    </PrimaryButton>
                  )}
                </>
              ) : (
                <>
                  <NavItem to="login">Sign in</NavItem>
                  <PrimaryButton
                    color="bg-blue-light"
                    width="w-2/5"
                    to="/register"
                    textColor="text-blue"
                  >
                    Sign up
                  </PrimaryButton>
                </>
              )}
            </div>
          )}
        </div>
        {/* mobile menu */}
      </nav>

      {/* content goes here */}
    </header>
  );
};
export default Navbar;
