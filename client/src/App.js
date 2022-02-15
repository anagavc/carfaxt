import React, { Suspense } from "react";
import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Services from "./Components/Sections/Services";
import About from "./Components/Sections/About";
import Layout from "./Components/UI/Layout/Layout";
import Loading from "./Components/UI/Loaders/Loading";
const Main = React.lazy(() => import("./Components/Sections/Main"));
const Rent = React.lazy(() => import("./Pages/Rent"));
const RentSearch = React.lazy(() => import("./Pages/RentSearch"));
const Login = React.lazy(() => import("./Pages/Login"));
const Register = React.lazy(() => import("./Pages/Register"));
const Contact = React.lazy(() => import("./Pages/Contact"));
const UpdateAccount = React.lazy(() => import("./Pages/UpdateAccount"));
const ChangePassword = React.lazy(() => import("./Pages/ChangePassword"));
const Payment = React.lazy(() => import("./Pages/Payment"));
const BookingHistory = React.lazy(() => import("./Pages/BookingHistory"));
const ActiveBooking = React.lazy(() => import("./Pages/ActiveBooking"));
const UserDashBoard = React.lazy(() => import("./Pages/UserDashBoard"));
const AdminDashBoard = React.lazy(() => import("./Pages/AdminDashboard"));
const UploadRental = React.lazy(() => import("./Pages/UploadRental"));
const UpdateRental = React.lazy(() => import("./Pages/UpdateRental"));

const NotFoundPage = React.lazy(() => import("./Pages/NotFoundPage"));

function App() {
  const account = JSON.parse(localStorage.getItem("profile"));
  const [user, setUser] = useState(account);
  useEffect(() => {
    setUser(account);
  }, [account, user]);
  return (
    <Suspense fallback={<Loading />}>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/rent" exact>
            <Rent />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/services" exact>
            <Services />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>

          <Route path="/updateAccount/:id" exact>
            <UpdateAccount />
          </Route>

          <Route path="/changePassword" exact>
            {user && <ChangePassword />}
          </Route>
          <Route path="/rentals/search" exact>
            <RentSearch />
          </Route>
          <Route path="/rentals/:id" exact>
            <Payment />
          </Route>

          <Route path="/rentals/:id/updateRental" exact>
            {user && <UpdateRental />}
          </Route>

          <Route path="/bookingHistory" exact>
            {user && <BookingHistory />}
            {!user && <Redirect to="/login" />}
          </Route>
          <Route path="/activeBooking" exact>
            <ActiveBooking />
          </Route>

          <Route path="/userDashboard" exact>
            <UserDashBoard />
          </Route>

          <Route path="/adminDashboard" exact>
            <AdminDashBoard />
          </Route>
          {user?.result.role === "admin" && (
            <Route path="/uploadRental" exact>
              <UploadRental />
            </Route>
          )}
          <Route path="/loading" exact>
            <Loading />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </Layout>
    </Suspense>
  );
}

export default App;
