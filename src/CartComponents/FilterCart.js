import { Component } from "react";
import { products } from "../data/data";

class FilterCart extends Component {
  render() {
    const filteredData = products.filter((item) => {
      return item.quantity >= 2;
    });
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
            {filteredData.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.total}</td>
                  <td>{item.discountPercentage}</td>
                  <td>{item.discountedPrice}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    );
  }
}

export default FilterCart;
