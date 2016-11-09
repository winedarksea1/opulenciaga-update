import React from 'react';
import { Link } from "react-router";
//get these from this.prop
export default class Product extends React.Component {
  constructor(props) {
    super(props);
  }


   render() {

     const { product, addProductToCart, createCartAndAddProductToCart } = this.props;
     console.log("KENNETH PLEAE: ", product)

     return(
       <div>
         <div className = 'row'>
         {
           <div>
            <div className="col-sm-6 col-md-2"></div>
             <div className="col-sm-6 col-md-6" key = {product.id}>

                 <img className="productImage" src = {product.imgUrl} />


             </div>
              <div id="singleProductText" className="col-sm-6 col-md-4">
              <ul >
                <li id="singleProductName">{product.name}</li>
                <li id="singleProductDescription">{product.description}</li>
                <li>${product.price}.00</li>
                <li>Quantity: {product.quantity}</li>
                <li><Link to="/cart"><button id="addToCartButton" onClick={() => addProductToCart(1, product.id)}>Add to cart!</button></Link></li>
              </ul>
              </div>
            </div>
         }
         </div>
       </div>
   )
   }

}



// <li><button onClick={() => createCartAndAddProductToCart(1, product.id)}>Create cart!</button></li>
