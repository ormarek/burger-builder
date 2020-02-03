import React from "react";
import classes from "./Modal.module.scss";
import Auxiliary from "../../../hoc/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";

const modal = props => (
  <Auxiliary>
    <Backdrop show={props.show} clicked={props.modalClosed}></Backdrop>
    <div className={`${classes.Modal} ${props.show ? classes.Active : ""}`}>
      {props.children}
    </div>
  </Auxiliary>
);

export default modal;
