import Form from "../Components/UI/Layout/Form";
import updateImg from "../images/updateImg.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { updateAccount } from "../actions/auth";
const initialState = {
  name: "",
  email: "",
  location: "",
  password: "",
  confirmPassword: "",
};
const UpdateAccount = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateAccount(id, formData, history));
  };

  const details = [
    {
      label: "Full Name",
      type: "text",
      name: "name",
      id: "name",
      placeholder: "Enter your Full Name",
      onChange: (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value }),
    },
    {
      label: "Email Address",
      type: "email",
      name: "email",
      id: "email",
      placeholder: "Enter your email address",
      onChange: (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value }),
    },
    {
      label: "Location",
      type: "text",
      id: "location",
      name: "location",
      placeholder: "Enter your location",
      onChange: (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value }),
    },
  ];

  return (
    <Form
      radiusLg="md:rounded-b-full"
      heading="Fill in the appropriate details you neeed to update your account"
      title="Update your account"
      order="order-first"
      bgColor="bg-blue-light"
      textColor="text-gray"
      image={updateImg}
      onSubmit={handleSubmit}
      onDone={({ base64 }) => setFormData({ ...formData, image: base64 })}
      details={details}
      back="/userDashboard"
    />
  );
};

export default UpdateAccount;
