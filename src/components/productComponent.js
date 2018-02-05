import React, { Component } from 'react';

import ProductsList from '../containers/products-list';
import ProductDetail from '../containers/active-product'; 

export default class ProductComponent extends Component {

  render() {
    return (
      <div>
        <ProductsList />
        <ProductDetail/>
      </div>
    );
  }
}
