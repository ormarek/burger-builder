import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import axios from "../../../axios-orders";

import Classes from "./ContactData.module.scss";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    }
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Mark",
        address: {
          street: "Test",
          zipCode: "12-123",
          country: "Poland"
        },
        email: "test@test.test"
      },
      deliveryMethod: "fastest"
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        console.log(response);
        this.setState({
          loading: false
        });
        this.props.history.push("/");
      })
      .catch(error => {
        console.log(error);
        this.setState({
          loading: false
        });
      });
  };

  render() {
    let form = (
      <form>
        <input
          className={Classes.Input}
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className={Classes.Input}
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          className={Classes.Input}
          type="text"
          name="street"
          placeholder="Street"
        />
        <input
          className={Classes.Input}
          type="text"
          name="postalCode"
          placeholder="Postal Code"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          Order
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={Classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
