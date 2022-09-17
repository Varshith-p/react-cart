import { Component } from "react";
import DisplayCart from "./DisplayCart";
import FilterCart from "./FilterCart";
import "./styles.css";

class MyCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCart: false,
      displayFilter: false,
    };
  }

  handleClick = (event) => {
    if (event.target.id === "show") {
      this.setState({ displayCart: true, displayFilter: false });
    } else if (event.target.id === "filter") {
      this.setState({ displayCart: false, displayFilter: true });
    }
  };

  render() {
    return (
      <section>
        <h1>My shopping cart</h1>
        <div className="box">
          <button className="myButton" id="show" onClick={this.handleClick}>
            Show cart
          </button>
          <button className="myButton" id="filter" onClick={this.handleClick}>
            Filter
          </button>
          <div className="container">
            {this.state.displayCart && <DisplayCart />}
            {this.state.displayFilter && <FilterCart />}
          </div>
        </div>
      </section>
    );
  }
}

export default MyCart;
