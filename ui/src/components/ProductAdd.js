import React from 'react';
import {
  Form, FormControl, FormGroup, ControlLabel, Button,
} from 'react-bootstrap';

export default class ProductAdd extends React.Component {
  constructor() {
    super();
    this.name = React.createRef();
    this.price = React.createRef();
    this.category = React.createRef();
    this.price = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this);
    console.log(this.name.current.value);
    const { createProduct } = this.props;
    createProduct({
      Name: this.name.current.value,
      Price: this.price.current.value,
      Category: this.category.current.value,
      Image: this.price.current.value,

    });
  }

  render() {
    return (
      <div>
        <Form inline name="addProduct">
          <FormGroup>
            <ControlLabel>Name:</ControlLabel>
            {' '}
            <FormControl ref={this.name} type="text" name="name" placeholder="Name" />
          </FormGroup>
          {' '}
          <FormGroup>
            <ControlLabel>Price</ControlLabel>
            {' '}
            <FormControl ref={this.price} type="text" name="price" defaultValue="$" />
          </FormGroup>
          {' '}
          <hr />
          <FormGroup>
            <ControlLabel>Image URL</ControlLabel>
            {' '}
            <FormControl ref={this.image} type="text" name="image" placeholder="Image" />
          </FormGroup>
          {' '}
          <FormGroup>
            <ControlLabel>Category</ControlLabel>
            <FormControl
              ref={this.category}
              componentClass="select"
            >
              <option value="Shirts">Shirts</option>
              <option value="Jeans">Jeans</option>
              <option value="Jackets">Jackets</option>
              <option value="Sweaters">Sweaters</option>
              <option value="Accessories">Accessories</option>
            </FormControl>
          </FormGroup>
          <hr />
          <Button bsStyle="primary" type="button" onClick={this.handleSubmit}>Add Product</Button>
        </Form>
      </div>
    );
  }
}
