import { connect } from 'react-redux';
import Orders from '../components/Orders';
import { fetchAllOrders } from '../action-creators/Orders';

const mapStateToProps = ({orders}) => ({
  orders
})

const mapDispatchToProps = dispatch => ({
  getAllOrders: (userId) => dispatch(fetchAllOrders(uderId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders);