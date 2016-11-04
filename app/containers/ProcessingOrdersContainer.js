import {connect} from 'react-redux';
import Orders from '../components/Orders';
import {fetchOrders} from '../action-creators/Orders';

const mapStateToProps = ({orders}) => ({
  orders
});

const mapDispatchToProps = dispatch => ({
  getOrders: () => dispatch(fetchOrders())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders);
