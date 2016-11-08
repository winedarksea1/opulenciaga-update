import React from 'react';

//get these from this.prop
export default class Product extends React.Component {
  constructor(props) {
    super(props);
  }


   render() {

     const { product, fetchProduct } = this.props;
     function test() {
       console.log("JUST TO CHECK: ", fetchProduct)
     }
     test()

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
                     <li><button onClick={() => fetchProduct(product.category, product.id)}>Add to cart!</button></li>
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
