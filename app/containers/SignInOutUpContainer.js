import { connect } from 'react-redux';
import Account from '../components/Account';
import { setCurrentUser, getOrdersForUser, signup, login } from '../action-creators/User';

const mapStateToProps = ({user}) => ({
  user
})

const mapDispatchToProps = dispatch => ({
  getOrdersForUser: (userId) => dispatch(getOrdersForUser(userId)),
  signup: (credentials) => dispatch(signup(credentials)),
  login: (credentials) => dispatch(login(credentials))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Account);
