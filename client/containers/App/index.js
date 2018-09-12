import React from 'react';
import { Provider } from 'react-redux';

// Components
import RouteManager from 'components/RouteManager';

// Redux
import store from 'store';

// Styles
import './index.css';

// We export the App without a Provider for tests.
// This pattern allows us to test the component without having to test
// Redux itself.
const App = () => (
  <Provider store={store}>
    <RouteManager />
  </Provider>
);

export default App;
