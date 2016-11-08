import React from 'react';

//get these from this.prop
export default class Product extends React.Component {
  constructor(props) {
    super(props);
  }


   render() {

     const { product, addProductToCart, createCartAndAddProductToCart } = this.props;


     return(
       <div>
         <div className = 'row'>
         {
             <div className = "col-sm-6 col-md-4" key = {product.id}>
               <div className ="thumbnail">
                 <img className = "productImage" src = {product.imgUrl} />
                 <div className = "caption">
                   <ul >
                     <li>{product.name}</li>
                     <li>{product.description}</li>
                     <li>{product.price}</li>
                     <li>{product.quantity}</li>
                     <li><button onClick={() => addProductToCart(1, product.id)}>Add to cart!</button></li>
                     <li><button onClick={() => createCartAndAddProductToCart(1, product.id)}>Create cart!</button></li>
                   </ul>
                 </div>
               </div>
             </div>
         }
         </div>
       </div>
   )
   }

}
