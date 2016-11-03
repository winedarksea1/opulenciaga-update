import {connect} from 'react-redux';
import Products from '../components/Products';
import {fetchProducts} from '../action-creators/Products';

const mapStateToProps = ({products}) => ({
  products
})

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(fetchProducts())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);