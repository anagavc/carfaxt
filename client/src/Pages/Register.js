import registerImg from "../images/register.svg";
import Form from "../Components/UI/Layout/Form";
import { useDispatch } from "react-redux";
import { signup } from "../actions/auth";
import { useState } from "react";
import { useHistory } from "react-router-dom";
const initialState = {
  name: "",
  email: "",
  location: "",
  password: "",
  confirmPassword: "",
};
const Register = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(formData, history));
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
    {
      label: "Password",
      type: "password",
      name: "password",
      id: "password",
      placeholder: "Enter your Password",
      onChange: (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value }),
    },
    {
      label: "Confirm password",
      name: "confirmPassword",
      type: "password",
      id: "confirmPassword",
      placeholder: "Enter your Password",
      onChange: (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value }),
    },
  ];
  return (
    <Form
      radiusLg="md:rounded-br-full"
      radiusSm="rounded-br-full"
      title="Register"
      heading="Making your rental story hassle free."
      boldp="Welcome esteemed guest,"
      smallp="shall we get started with making your rental jounrey funfilled?"
      question="Already have an account?"
      action="Sign in"
      bgColor="bg-blue"
      textColor="text-white"
      image={registerImg}
      details={details}
      onSubmit={handleSubmit}
      path="/login"
      onDone={({ base64 }) => setFormData({ ...formData, image: base64 })}
      back="/"
    />
  );
};

export default Register;
