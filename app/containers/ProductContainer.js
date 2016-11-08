import { connect } from 'react-redux';
import Product from '../components/Product';
import { getProductById } from '../action-creators/Product';
import { fetchAndAddProductToOrder } from "../action-creators/Order";

const mapStateToProps = ({product}) => ({
  product
})

const mapDispatchToProps = dispatch => ({
  fetchProduct: (category, productId) => dispatch(fetchAndAddProductToOrder(category, productId)),
  findProductById: () => dispatch(getProductById(category, productId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
