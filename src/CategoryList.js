import React, { Component } from "react";
import { ListGroup,ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  render() {
    return (
      <div>
        <h3>
          CategoryList
          <ListGroup>
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Morbi leo risus</ListGroupItem>
            <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
        </h3>
      </div>
    );
  }
}
