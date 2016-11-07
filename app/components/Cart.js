import React from 'react';
import Product from './Product';

//get these from this.prop
export default class Cart extends React.Component {
    constructor(props) {
      super(props);
    }

    const ({products, totalPrice, handleCheckoutClicked }) = this.props;
    const singleOrder = products.length > 0 ? (
      products.map(product =>
        <Product
          id = {product.id}
          imgUrl = {product.imgUrl}
          name = {product.name}
          description = {product.description}
          price = {product.price}
        />
      ) : (
          <b>Please add products to the shopping cart</b>
      )
    )

    render() {
      return(
        <div>
          <div>{singleOrder}</div>
          <p>Total amount: &#36;{totalPrice}</p>
          <button onClick = {handleCheckoutClicked} disabled={products.length > 0 ? '' : 'disabled'}>
          Checkout
          </button>
        </div>
      )
    }

}
