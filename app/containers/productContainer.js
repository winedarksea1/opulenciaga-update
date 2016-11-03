import { connect } from 'react-redux';
import Product from '../components/Product';
import { getProductById } from '../action-creators/Product';

const mapStateToProps = ({product}) => ({
  product
})

const mapDispatchToProps = dispatch => ({
  getProductById: () => dispatch(getProductById())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);