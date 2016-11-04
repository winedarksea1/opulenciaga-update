import React from 'react';

//get these from this.prop
export default class ProcessingOrders extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return(
        <div>

          <div className = 'row'>
          {
            this.props.orders && this.props.orders.filter(order => (
              <ul key = {order.id}>
                <li>{user_id === user.id ? order : null}</li>
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
