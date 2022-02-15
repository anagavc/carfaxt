import Form from "../Components/UI/Layout/Form";
import { useEffect, useState } from "react";
import updateImg from "../images/updateImg.svg";
import { useDispatch, useSelector } from "react-redux";
import { updateRental, getRental } from "../actions/rentals";
import { useHistory, useParams } from "react-router-dom";
import Loading from "../Components/UI/Loaders/Loading";
const UpdateRental = () => {
  const { id } = useParams();
  const clear = () => {};
  const dispatch = useDispatch();
  const history = useHistory();
  const { isLoading, rental } = useSelector((state) => state.rentals);
  useEffect(() => {
    dispatch(getRental(id));
  }, [id, dispatch]);

  const [rentalData, setRentalData] = useState({
    carName: rental.carName,
    carYear: rental.carYear,
    cost: rental.cost,
    image: rental.image,
    description: rental.description,
    passengers: rental.passengers,
    location: rental.location,
    fuelType: rental.fuelType,
    brand: rental.brand,
  });
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateRental(id, { ...rentalData }, history));
  };

  const details = [
    {
      label: "Car Name",
      type: "text",
      id: "carname",
      placeholder: "Enter the name of the car",
      value: rentalData.carName,
      onChange: (e) =>
        setRentalData({ ...rentalData, carName: e.target.value }),
    },

    {
      label: "Car production year",
      type: "text",
      id: "caryear",
      placeholder: "Enter the car's production year",
      value: rentalData.carYear,

      onChange: (e) =>
        setRentalData({ ...rentalData, carYear: e.target.value }),
    },
    {
      label: "Car brand",
      type: "text",
      id: "carbrand",
      placeholder: "Enter the brand of the car",
      value: rentalData.brand,

      onChange: (e) => setRentalData({ ...rentalData, brand: e.target.value }),
    },
    {
      label: "Cost of car",
      type: "text",
      id: "cost",
      placeholder: "Enter the cost of the car rental",
      value: rentalData.cost,

      onChange: (e) => setRentalData({ ...rentalData, cost: e.target.value }),
    },

    {
      label: "Description",
      type: "text",
      id: "desc",
      placeholder: "Enter the description",
      value: rentalData.description,

      onChange: (e) =>
        setRentalData({ ...rentalData, description: e.target.value }),
    },
    {
      label: "Passengers",
      type: "text",
      id: "passenger",
      placeholder: "Enter the number of passengers",
      value: rentalData.passengers,

      onChange: (e) =>
        setRentalData({ ...rentalData, passengers: e.target.value }),
    },
    {
      label: "Location",
      type: "text",
      id: "location",
      placeholder: "Enter the location",
      value: rentalData.location,

      onChange: (e) =>
        setRentalData({ ...rentalData, location: e.target.value }),
    },
    {
      label: "Fuel type",
      type: "text",
      id: "fuel",
      placeholder: "Type of fuel",
      value: rentalData.fuelType,

      onChange: (e) =>
        setRentalData({ ...rentalData, fuelType: e.target.value }),
    },
  ];

  return isLoading ? (
    <Loading />
  ) : (
    <Form
      radiusLg="md:rounded-b-full"
      heading="Fill in the details to update the rental"
      title="Update the rental details"
      order="order-first"
      bgColor="bg-blue-light"
      textColor="text-gray"
      image={updateImg}
      details={details}
      back="/rent"
      onSubmit={submitHandler}
      onClick={clear}
      onDone={({ base64 }) => setRentalData({ ...rentalData, image: base64 })}
      carImage={rental.image}
    />
  );
};

export default UpdateRental;
