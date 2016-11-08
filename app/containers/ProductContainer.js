import { connect } from 'react-redux';
import Product from '../components/Product';
import { getProductById } from '../action-creators/Product';
import { fetchAndAddProductToOrder, createCartAndAddProductToOrder } from "../action-creators/Order";

const mapStateToProps = ({product}) => ({
  product
})

const mapDispatchToProps = dispatch => ({
  addProductToCart: (userId, productId) => {
    console.log("Are we adding to cart?")
    dispatch(fetchAndAddProductToOrder(userId, productId));
  },
  createCartAndAddProductToCart: (userId, productId) => dispatch(createCartAndAddProductToOrder(userId, productId)),
  findProductById: () => dispatch(getProductById(category, productId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
