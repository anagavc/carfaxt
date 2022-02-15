import { Fragment, useEffect } from "react";
import ReactDom from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRentalsBySearch } from "../../../actions/rentals";
import Loading from "../Loaders/Loading";
import classes from "./Modal.module.css";
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverLay = (props) => {
  const { rentals, isLoading } = useSelector((state) => state.rentals);
  console.log(rentals);
  if (!rentals.length && !isLoading) return "No posts";

  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        {rentals.map((rental) => {
          return <h1>{rental.carName}</h1>;
        })}
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
