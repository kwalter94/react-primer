import React from 'react';
import ProductItem from './components/ProductItem';
import ProductService from '../Services/ProductService';

export default class Index extends React.Component {

  state = {products: []}

  async componentDidMount() {
    const products = await ProductService.findAll();
    this.setState({products});
  }

  render() {
    return (
      <React.Fragment>
        <h1>Products</h1>
        {this.state.products.map(product => {
          return <ProductItem name={product.name} price={product.price} key={product.id}  />
        })}
      </React.Fragment>
    )
  }

}