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
    const { createProduct } = this.props;
    createProduct({
      Name: this.name.value,
      Price: parseFloat((this.price.value).slice(1)),
      Category: this.category.value,
      Image: this.price.value,

    });
  }

  render() {
    return (
      <div>
        <Form inline name="addProduct">
          <FormGroup>
            <ControlLabel>Name:</ControlLabel>
            {' '}
            <FormControl inputRef={(node) => { this.name = node; }} type="text" name="name" placeholder="Name" />
          </FormGroup>
          {' '}
          <FormGroup>
            <ControlLabel>Price</ControlLabel>
            {' '}
            <FormControl inputRef={(node) => { this.price = node; }} type="text" name="price" defaultValue="$" />
          </FormGroup>
          {' '}
          <hr />
          <FormGroup>
            <ControlLabel>Image URL</ControlLabel>
            {' '}
            <FormControl inputRef={(node) => { this.image = node; }} type="text" name="image" placeholder="Image" />
          </FormGroup>
          {' '}
          <FormGroup>
            <ControlLabel>Category</ControlLabel>
            <FormControl
              inputRef={(node) => { this.category = node; }}
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
