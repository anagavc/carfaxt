import { Fragment } from "react";
import ReactDom from "react-dom";
import PrimaryButton from "../Buttons/PrimaryButton";
import { HeadingFour } from "../FontStyles/Headings";
import classes from "./Modal.module.css";
import successful from "../../../images/successful.gif";
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverLay = (props) => {
  return (
    <div className={classes.modal}>
      <div className="flex flex-col mx-auto space-y-12 py-12">
        <HeadingFour align="text-center" color="text-blue">
          Your booking was successful
        </HeadingFour>
        <img src={successful} alt="successful" className="h-40 w-40 mx-auto" />
        <PrimaryButton width="w-3/5" margin="mx-auto" to="/activeBooking">
          Continue
        </PrimaryButton>
      </div>
    </div>
  );
};
//this is how to get accees to the div that our components should portal to
const portalElement = document.getElementById("overlays");

const Modal = ({ onClose }) => {
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDom.createPortal(<ModalOverLay></ModalOverLay>, portalElement)}
    </Fragment>
  );
};

export default Modal;
