import {connect} from 'react-redux';
import Cart from '../components/Cart';
import {fetchCart} from '../action-creators/categories';
// DON"T TOUCH THIS FILE TONIGHT
const mapStateToProps = ({Cart}) => ({
  Cart
})

const mapDispatchToProps = dispatch => ({
  getCart: () => dispatch(fetchCart())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)
