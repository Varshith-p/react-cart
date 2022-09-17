import React, { Component } from "react";
import { products as data } from "../data/data";
import { findSum } from "./Helper";

class DisplayCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalSum: 0,
      isClicked: false,
    };
  }

  handleClick = () => {
    const total = findSum(data);
    this.setState({ totalSum: total, isClicked: !this.state.isClicked });
  };

  render() {
    return (
      <section>
        <table border={1}>
          <thead>
            <tr>
              <th>Name of Item</th>
              <th>Price of Item</th>
              <th>Quantity </th>
              <th>Total </th>
              <th>Discount Percentage </th>
              <th>Discount Price </th>
            </tr>
          </thead>
          <tbody>
            {data.map((ele) => {
              return (
                <tr key={ele.id}>
                  <td>{ele.title}</td>
                  <td>{ele.price}</td>
                  <td>{ele.quantity}</td>
                  <td>{ele.total}</td>
                  <td>{ele.discountPercentage}</td>
                  <td>{ele.discountedPrice}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button className="myButton" onClick={this.handleClick}>
          Total
        </button>
        {this.state.isClicked && this.state.totalSum}
      </section>
    );
  }
}
export default DisplayCart;
