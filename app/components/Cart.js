import React from 'react';
import Product from './Product';
import { Link } from "react-router";
//get these from this.prop
export default class Cart extends React.Component {
    constructor(props) {
      super(props);
    }


    render() {

      const { order, removeProductFromCart } = this.props;

      console.log("CHRIS THIS IS OUR ORDER!!!!!!!!!!!!!!!", order)

      return(
        <div className="container">
        	<table id="cart" className="table table-hover table-condensed">
            				<thead>
                        <tr>
                          <th className="cartProduct">Product</th>
                          <th className="cartPrice">Price</th>
                          <th className="cartQuantity">Quantity</th>
                          <th id="cartSubtotal" className="text-center">Subtotal</th>
                          <th className="cartExtra"></th>
                          <th></th>
                        </tr>
        					</thead>
                { order.currentProducts ? order.currentProducts.map((product, index, array) => {
                  return <tbody>
                  <tr>
                  <td data-th="Product">
                  <div className="row">
                  <div className="col-sm-2 hidden-xs"><img src={order.currentImages[index]} alt="..." className="img-responsive"/></div>
                  <div className="col-sm-10">
                  <h4 className="nomargin">Product {index + 1}</h4>
                  <div>{product}</div>
                  <p>{product}</p>
                  </div>
                  </div>
                  </td>
                  <td data-th="Price">${order.currentPrices[index]}.00</td>
                  <td data-th="Quantity">
                  <input type="number" className="form-control text-center" value="1"/>
                  </td>
                  <td data-th="Subtotal" className="text-center"></td>
                  <td className="actions" data-th="">
                  <button className="btn btn-info btn-sm"><i className="fa fa-refresh"></i></button>
                  <Link to="/cart"><button onClick={() => removeProductFromCart(1, product)}className="btn btn-danger btn-sm"><i className="fa fa-trash-o"></i>Remove</button></Link>
                  </td>
                  </tr>
                  </tbody>

                }) : <tbody>
                        <tr>
                          <td data-th="Product">
                          <h4 className="nomargin">Your shopping bag is empty.</h4>
                          </td>
                        </tr>
                    </tbody>

              }
        					<tfoot>
        						<tr className="visible-xs">
        							<td className="text-center"><strong>Total 1.99</strong></td>
        						</tr>
        						<tr>
        							<td><a href="#" className="btn btn-warning"><i className="fa fa-angle-left"></i> Continue Shopping</a></td>
        							<td colspan="2" className="hidden-xs"></td>
        							<td className="hidden-xs text-center"><strong>Total ${order.currentPrices && order.currentPrices.reduce((a, b) => a + b) || 0}.00</strong></td>
        							<td><a href="#" className="btn btn-success btn-block">Checkout <i className="fa fa-angle-right"></i></a></td>
        						</tr>
        					</tfoot>
        				</table>
        </div>
      )
    }

}



// <p>Total amount: &#36;{totalPrice}</p>

// <button onClick = {handleCheckoutClicked} disabled={products.length > 0 ? '' : 'disabled'}>
// Checkout
//



// const ({products, totalPrice, handleCheckoutClicked }) = this.props;
// const singleOrder = products.length > 0 ? (
//   products.map(product =>
//     <Product
//     id = {product.id}
//     imgUrl = {product.imgUrl}
//     name = {product.name}
//     description = {product.description}
//     price = {product.price}
//     />
//   ) : (
//     <b>Please add products to the shopping cart</b>
//   )
// )
