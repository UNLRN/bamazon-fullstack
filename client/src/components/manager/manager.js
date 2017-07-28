import React, { Component } from "react";

class Manager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {
        name: "",
        department: "",
        quantity: 0,
        price: 0.0
      }
    };

    this.onProductNameChange.bind(this);
    this.onProductDepartmentChange.bind(this);
    this.onProductQuantityChange.bind(this);
    this.onProductPriceChange.bind(this);
    this.onClickAdd.bind(this);
  }

  onProductNameChange(event) {
    const product = this.state.product;
    product.name = event.target.value;
    this.setState({ product: product });
  }

  onProductDepartmentChange(event) {
    const product = this.state.product;
    product.department = event.target.value;
    this.setState({ product: product });
  }

  onProductQuantityChange(event) {
    const product = this.state.product;
    product.quantity = event.target.value;
    this.setState({ product: product });
  }

  onProductPriceChange(event) {
    const product = this.state.product;
    product.price = event.target.value;
    this.setState({ product: product });
  }

  onClickAdd() {
    alert(`Adding Product`);
  }

  render() {
    return (
      <div>
        <h1>Manager View</h1>
        <input
          type="text"
          value={this.state.product.name}
          onChange={this.onProductNameChange}
        />
        <input
          type="text"
          value={this.state.product.department}
          onChange={this.onProductDepartmentChange}
        />
        <input
          type="number"
          value={this.state.product.quantity}
          onChange={this.onProductQuantityChange}
        />
        <input
          type="text"
          value={this.state.product.price}
          onChange={this.onProductPriceChange}
        />
        <input type="submit" value="Add Product" onChange={this.onClickAdd} />
      </div>
    );
  }
}

export default Manager;
