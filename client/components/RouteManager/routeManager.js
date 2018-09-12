import React from 'react';

// React router
import {
  HashRouter,
  Switch
} from 'react-router-dom';

// Components
import Main from 'components/Main';

// Routes config
import ROUTES_CONFIG from 'routes';

const RouteManager = () => (
  <HashRouter>
    <div>
      <Main>
        <Switch>
          { ROUTES_CONFIG.map(routeProps => (
            <RouteMiddleware
              key={routeProps.path || '404'}
              {...routeProps}
            />
          ))}
        </Switch>
      </Main>
    </div>
  </HashRouter>
);

export default RouteManager;
