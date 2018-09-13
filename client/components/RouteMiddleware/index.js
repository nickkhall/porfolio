import React from 'react';

// React router
import { Route } from 'react-router-dom';

/**
 * Conditionally renders a route based on the current app/auth state.
 * @param {!React.Component} Component The intended component to render.
 * @param {!Object} props The initial/intended props for the rendered component.
 * @param {boolean} authed Whether the user is authenticated/authorized.
 * @return {!React.Component} The React component that satifies the given
 *    app state.
 */
export const renderRoute = (Component, routeProps) => <Component {...routeProps} />;

const RouteMiddleware = ({
  component: Component,
  redirect,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={() => renderRoute(Component, routeProps, redirect)}
  />
);


export default RouteMiddleware;
