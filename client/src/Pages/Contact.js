import { ContactPhone, Email, Map } from "@mui/icons-material";
import Form from "../Components/UI/Layout/Form";
const Contact = () => {
  const details = [
    {
      label: "Your Name",
      type: "text",
      id: "name",
      placeholder: "Enter your Name",
    },
    {
      label: "Email Address",
      type: "email",
      id: "email",
      placeholder: "Enter your email address",
    },
    {
      label: "Mobile Number",
      type: "tel",
      id: "mobile",
      placeholder: "Enter your mobile number",
    },
    {
      label: "Your message",
      type: "text",
      id: "message",
      placeholder: "Enter your message",
    },
  ];
  const info = [
    {
      icon: <Map />,
      caption: "No. 25 Osongama Estate,Uyo,AkwaIbom State,Nigeria",
    },
    {
      icon: <ContactPhone />,
      caption: "(+234)-704-9470-843",
    },
    {
      icon: <Email />,
      caption: "info@carfaxt.rent",
    },
  ];
  return (
    <Form
      title="Leave us a message"
      radiusLg="md:rounded-b-full"
      info={info}
      details={details}
      order="order-first"
      bgColor="bg-blue"
      textColor="text-white"
    />
  );
};
export default Contact;
