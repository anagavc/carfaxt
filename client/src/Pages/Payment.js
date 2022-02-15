import {
  AttachMoney,
  LocalGasStation,
  MyLocation,
  People,
} from "@mui/icons-material";
import Form from "../Components/UI/Layout/Form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRental } from "../actions/rentals";
import { makePayment } from "../actions/rentals";
import Loading from "../Components/UI/Loaders/Loading";
import Modal from "../Components/UI/Modal/Modal";
const Payment = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRental(id));
  }, [id]);
  const { rental, isLoading, paymentIsDone } = useSelector(
    (state) => state.rentals
  );
  const initialState = {
    name: "",
    number: "",
    expiration: "",
  };
  const [newPayment, setNewPayment] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(makePayment(newPayment, id));
    setNewPayment(initialState);
  };
  const details = [
    {
      label: "Name",
      type: "text",
      id: "cardname",
      placeholder: "Enter your Card Name",
      name: "name",
      value: newPayment.name,
      onChange: (e) =>
        setNewPayment({ ...newPayment, [e.target.name]: e.target.value }),
    },
    {
      label: "Card Number",
      type: "text",
      id: "cardnumber",
      maxLength: "16",
      placeholder: "Enter your Card Number",
      value: newPayment.number,
      name: "number",
      onChange: (e) =>
        setNewPayment({ ...newPayment, [e.target.name]: e.target.value }),
    },
    {
      label: "Expiration Date ",
      type: "date",
      id: "date",
      name: "expiration",
      value: newPayment.expiration,
      placeholder: "Enter your Card Expiration Date",
      onChange: (e) =>
        setNewPayment({ ...newPayment, [e.target.name]: e.target.value }),
    },
  ];
  const info = {
    carName: rental.carName,
    carImage: rental.image,
    details: [
      {
        caption: rental.location,
        icon: <MyLocation />,
      },
      {
        caption: rental.passengers,
        icon: <People />,
      },
      { caption: rental.fuelType, icon: <LocalGasStation /> },
      {
        caption: rental.cost,
        icon: <AttachMoney />,
      },
    ],
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Form
          title="Make payment"
          bgColor="bg-hero-pattern bg-auto bg-no-repeat bg-cover bg-end "
          textColor="text-white "
          details={details}
          carInfo={info}
          onSubmit={handleSubmit}
          back="/rent"
        />
      )}
      {paymentIsDone && <Modal />}
    </>
  );
};

export default Payment;
