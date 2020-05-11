/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Label, Panel } from 'react-bootstrap';
import ProductTable from './ProductTable';
import ProductAdd from './ProductAdd';
import graphQLFetch from './graphQlFetch';

export default class ProductList extends React.Component {
  constructor() {
    super();
    this.state = { products: [], productCount: 0 };
    this.createProduct = this.createProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.loadData = this.loadData.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const query = `query {
            productList {
            id Name Category Price Image
            }
        }`;
    const productCountQuery = `query {
      productCount
    }`;
    const data = await graphQLFetch(query);
    const count = await graphQLFetch(productCountQuery);
    if (data) {
      this.setState({ products: data.productList });
    }
    if (count) {
      this.setState({ productCount: count.productCount });
    }
  }

  async createProduct(newProduct) {
    const query = `mutation productAdd($newProduct: productInput!) {
            productAdd(product: $newProduct) {
            id
            }
        }`;
    await graphQLFetch(query, { newProduct });
    this.loadData();
  }

  async deleteProduct(index) {
    console.log(index);
    console.log(typeof index);
    const query = `mutation productDelete($id: Int!) {
      productDelete(id: $id)
      }`;
    const data = await graphQLFetch(query, { id: index });
    if (data && data.productDelete) {
      this.loadData();
    }
  }

  render() {
    const allProducts = this.state.products;
    const count = this.state.productCount;
    return (
      <div>
        <Label>My Company MyInventory</Label>
        <Panel>
          <Panel.Heading>
            <Panel.Title toggle>
              Show
              {' '}
              { count }
              {' '}
              available products
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>
            <hr />
            <ProductTable products={allProducts} deleteProduct={this.deleteProduct} />
            <hr />
            <Panel>
              <Panel.Heading>
                <Panel.Title toggle>Add a new Product</Panel.Title>
              </Panel.Heading>
              <Panel.Body collapsible>
                <ProductAdd createProduct={this.createProduct} />
              </Panel.Body>
            </Panel>
          </Panel.Body>
        </Panel>

      </div>
    );
  }
}
