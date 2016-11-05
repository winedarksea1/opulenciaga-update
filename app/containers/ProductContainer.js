import { connect } from 'react-redux';
import Product from '../components/Product';
import { getProductById } from '../action-creators/Product';

const mapStateToProps = ({product}) => ({
  product
})

// const mapDispatchToProps = dispatch => ({
//   findProductById: () => dispatch(getProductById(category, productId))
// })

export default connect(
  mapStateToProps,
  null
)(Product);
