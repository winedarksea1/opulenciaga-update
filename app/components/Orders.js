import React from 'react';

//get these from this.prop
export default class Orders extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return(
        <div>
          <div className = 'row'>
          {
            this.props.orders && this.props.orders.map(order => (
                <ul key = {order.id} >
                  <li>{order.orderStatus}</li>
                  <li>{order.totalPrice}</li>
                  <li>{order.orderDate}</li>
                </ul>
            ))
          }
          </div>
        </div>
    )
    }

}
