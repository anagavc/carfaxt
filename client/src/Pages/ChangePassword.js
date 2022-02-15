import updatePassword from "../images/changePassword.svg";
import Form from "../Components/UI/Layout/Form";

const ChangePassword = () => {
  const details = [
    {
      label: "Old Password",
      type: "password",
      id: "oldpassword",
      placeholder: "Enter your Old Password",
    },
    {
      label: "Enter your new password",
      type: "password",
      id: "newpassword1",
      placeholder: "Enter your new password",
    },
    {
      label: "Re-enter your new password",
      type: "password",
      id: "newpassword2",
      placeholder: "Enter your new password",
    },
  ];

  return (
    <Form
      radiusLg="md:rounded-b-full"
      heading="Fill in the appropriate details you neeed to update your password"
      title="Change your password"
      order="order-first"
      bgColor="bg-blue-light"
      textColor="text-gray"
      image={updatePassword}
      details={details}
      back="/userDashboard"
    />
  );
};
export default ChangePassword;
