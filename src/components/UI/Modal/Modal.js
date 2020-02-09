import React, { Component } from "react";
import classes from "./Modal.module.scss";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  render() {
    return (
      <Auxiliary>
        <Backdrop
          show={this.props.show}
          clicked={this.props.modalClosed}
        ></Backdrop>
        <div
          className={`${classes.Modal} ${
            this.props.show ? classes.Active : ""
          }`}
        >
          {this.props.children}
        </div>
      </Auxiliary>
    );
  }
}

export default Modal;
