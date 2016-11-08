import React from 'react';
import { Link } from "react-router";
//const wine = require("../../public/opulenciaga_images/wine");

//get these from this.prop
export default class Category extends React.Component {
   constructor(props) {
     super(props);
   }

   render() {

     const { category } = this.props;

     console.log("CATEGORY: ", category)

     return(


             <div>

                 <div id="sabaiwine" className="sabai">
                     <div className='paragraphtext'>
                       <h2>{category.length && category[0].name}</h2>
                       <p>{category.length && category[0].description}</p>
                       { category.length ? <Link to={`${category[0].category}/${category[0].id}`}><p id="learnMore">Learn More</p></Link> : <div></div> }
                     </div>
                     <img src={category.length && category[0].imgUrl}/>

                 </div>

                 <div id="wineglass" className="wineglass">
                     <img src={category.length && category[1].imgUrl}/>
                     <div className='paragraphtext'>
                       <h2>{category.length && category[1].name}</h2>
                       <p>{category.length && category[1].description}</p>
                       { category.length ? <Link to={`${category[0].category}/${category[0].id}`}><p id="learnMore">Learn More</p></Link> : <div></div> }
                     </div>

                 </div>

                 <div id="handcuffwine" className="second">
                     <div className='paragraphtext'>
                       <h2>{category.length && category[2].name}</h2>
                       <p>{category.length && category[2].description}</p>
                       { category.length ? <Link to={`${category[0].category}/${category[0].id}`}><p id="learnMore">Learn More</p></Link> : <div></div> }
                     </div>
                     <img src={category.length && category[2].imgUrl}/>

                 </div>

             </div>

   )
   }

}





// <div className = 'row'>
// {
//   category && category.map(product => (
//     <div className = "col-sm-6 col-md-4" key = {product.id}>
//     <div className ="thumbnail">
//     <img className = "productImage" src = {product.imgUrl} />
//     <div className = "caption">
//     <ul>
//     <Link to={`/${product.category}/${product.id}`}><li>{product.name}</li></Link>
//     <li>{product.description}</li>
//     <li>{product.price}</li>
//     </ul>
//     </div>
//     </div>
//     </div>
//   ))
// }
// </div>




      //  <div id="intro">
      //      <div class="content">
      //          <img src="img/img_scrollmagic-logo.png" />
      //          <h1>The Basics</h1>
      //          <p>Short and sharp ScrollMagic demos, teaching you the basics of ScrollMagic API.</p>
      //      </div>
      //  </div>

      //
      // <div id="main" className="main-container">
      //
      //     <div id="sabaiwine" className="sabai">
      //         <img id="blue" src={category && category[0].imgUrl}/>
      //         <h2>Sabai Wine</h2>
      //         <p className="info"><------- Move from the right</p>
      //     </div>
      //
      //     <div id="wineglass" className="wineglass">
      //         <img src={category && category[1].imgUrl}/>
      //         <h2>Blue Wine</h2>
      //         <p className="info">Move from left ---></p>
      //     </div>
      //
      //     <div id="project03" className="project">
      //         <img src={category && category[0].imgUrl}/>
      //         <h2>Project Title</h2>
      //         <p className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed.</p>
      //     </div>
      //
      // </div>

































      //
      // <div id="intro">
      // <div className="content">
      // <img src={category.length && category[0].imgUrl} />
      // <h1>The Basics</h1>
      // <p>Short and sharp ScrollMagic demos, teaching you the basics of ScrollMagic API.</p>
      // </div>
      // </div>
      //
      // <div id="main" className="main-container">
      //
      // <div id="project01" className="project">
      // <img src={category.length && category[1].imgUrl} />
      // <h2>Project Title</h2>
      // <p className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed.</p>
      // </div>
      //
      // <div id="project02" className="project">
      // <img src={category.length && category[2].imgUrl} />
      // <h2>Project Title</h2>
      // <p className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed.</p>
      // </div>
      //
      // <div id="project03" className="project">
      // <img src={category.length && category[2].imgUrl} />
      // <h2>Project Title</h2>
      // <p className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed.</p>
      // </div>
      //
      // </div>
