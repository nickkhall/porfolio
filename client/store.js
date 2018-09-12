import thunk from 'redux-thunk';
import {
  compose,
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';

// App reducers.
import reducers from './reducers';

/* eslint-disable no-underscore-dangle */
const reduxDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
/* eslint-enable */

const combinedReducers = combineReducers({
  ...reducers
});

const rootReducer = (state, action) => combinedReducers(state, action);

const store = createStore(
  rootReducer,
  reduxDevToolsExtension && reduxDevToolsExtension(),
  compose(
    applyMiddleware(
      thunk,
    )
  )
);

export default store;
