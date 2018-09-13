import { connect } from 'react-redux';

// React Router
import { withRouter } from 'react-router-dom';

// Actions
import { queueRouteChange } from 'actions/Routes';

// Components
import Main from './main';

const mapStateToProps = (state) => {
  const { routesReducer } = state;
  const { redirect } = routesReducer;

  return ({ redirect });
};

const mapDispatchToProps = dispatch => ({
  queueRouteChange: (...args) => { dispatch(queueRouteChange(...args)); }
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Main)
);
