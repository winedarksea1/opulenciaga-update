import { connect } from 'react-redux';
import Category from '../components/Category';
import { getCategory } from '../action-creators/Category';

const mapStateToProps = ({category}) => ({
  category
});

// const mapDispatchToProps = dispatch => ({
//   getProductsByCategory: (category) => dispatch(getCategory(category))
// });

export default connect(mapStateToProps, null)(Category);
