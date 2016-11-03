import {connect} from 'react-redux';
import Categories from '../components/Categories';
import {fetchCategories} from '../action-creators/categories';

const mapStateToProps = ({categories}) => ({
  categories
})

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(fetchCategories())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
