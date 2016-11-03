import React from 'react';

//get these from this.prop
export default class Products extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return(
        <div>

          <div className = 'row'>
          {
            this.props.products && this.props.products.map(product => (
              <ul key = {product.id}>
                <li>{product.name}</li>
                <li>{product.description}</li>
                <li>{product.price}</li>
              </ul>
            ))
          }
          </div>
        </div>
    )
    }

}
