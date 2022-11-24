import React, { Component } from "react";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.info.title}-<h4>{this.props.currentCategory}</h4></h3>
      </div>
    );
  }
}
