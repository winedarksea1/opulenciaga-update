import React from 'react';
import { Link } from "react-router";

//get these from this.prop
export default class Category extends React.Component {
   constructor(props) {
     super(props);
   }

   render() {

     const { category } = this.props;

     return(


       <div>
         <div className = 'row'>
         {
           category && category.map(product => (
             <div className = "col-sm-6 col-md-4" key = {product.id}>
               <div className ="thumbnail">
                 <img className = "productImage" src = {product.imgUrl} />
                 <div className = "caption">
                   <ul>
                     <Link to={`/${product.category}/${product.id}`}><li>{product.name}</li></Link>
                     <li>{product.description}</li>
                     <li>{product.price}</li>
                   </ul>
                 </div>
               </div>
             </div>
           ))
         }
         </div>
       </div>
   )
   }

}
