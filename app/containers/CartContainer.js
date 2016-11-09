import {connect} from 'react-redux';
import Cart from '../components/Cart';
import { fetchAndRemoveProductFromOrder } from "../action-creators/Order";
// import {fetchCart} from '../action-creators/categories';
// DON"T TOUCH THIS FILE TONIGHT
const mapStateToProps = ({Cart, order}) => ({
  Cart,
  order
})

const mapDispatchToProps = dispatch => ({
  // getCart: () => dispatch(fetchCart())
  removeProductFromCart: (userId, productName) => {
    console.log("Are we removing?", productName)
    dispatch(fetchAndRemoveProductFromOrder(userId, productName))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)
