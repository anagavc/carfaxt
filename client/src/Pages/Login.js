import Form from "../Components/UI/Layout/Form";
import loginImg from "../images/loginImg.svg";
import { useDispatch } from "react-redux";
import { signin } from "../actions/auth";
import { useState } from "react";
import { useHistory } from "react-router-dom";
const initialState = {
  email: "",
  password: "",
};
const Login = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signin(formData, history));
  };

  const details = [
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
      label: "Password",
      type: "password",
      name: "password",
      id: "password",
      placeholder: "Enter your Password",
      onChange: (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value }),
    },
  ];
  return (
    <>
      <Form
        title="Login"
        radiusLg="md:rounded-bl-full"
        heading="Making your rental story hassle free."
        boldp="Welcome back estemeed customer,"
        smallp="shall we continue from where we stopped ?(making renting fun!)"
        question="Don’t have an account?"
        action="Register now"
        image={loginImg}
        details={details}
        order="order-first"
        onSubmit={handleSubmit}
        bgColor="bg-blue"
        textColor="text-white"
        back="/"
        path="/register"
      />
    </>
  );
};

export default Login;
