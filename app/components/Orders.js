import React from 'react';

//get these from this.prop
export default class Orders extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      const { orders } = this.props;
      const hasOrders = orders.length > 0;

      const ordersDiv = hasOrders ? (
        orders.map(order => (
                <ul key = {order.id} >
                  <li>{order.orderStatus}</li>
                  <li>{order.totalPrice}</li>
                  <li>{order.orderDate}</li>
                </ul>
            ))
      ): (
        <h3>You don't have any orders</h3>
      )

      return(
        <div>
          <div className = 'row'>
          { ordersDiv }
          </div>
        </div>
    )
    }

}
