'use strict';

import { connect } from 'react-redux';

import App from '../components/App';

// death by fire

const mapDispatchToProps = function (dispatch) {

  const objectFullOfFunctionsToPassAsProps = {
  };

  return objectFullOfFunctionsToPassAsProps;
};

const statefulComponentCreator = connect(null, mapDispatchToProps);
const AppContainer = statefulComponentCreator(App);
export default AppContainer;
