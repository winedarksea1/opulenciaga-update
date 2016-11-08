import {connect} from 'react-redux';
import Cart from '../components/Cart';
// import {fetchCart} from '../action-creators/categories';
// DON"T TOUCH THIS FILE TONIGHT
const mapStateToProps = ({Cart, order}) => ({
  Cart,
  order
})

// const mapDispatchToProps = dispatch => ({
//   getCart: () => dispatch(fetchCart())
// })

export default connect(
  mapStateToProps,
  null
)(Cart)
