// Action Types
import { ROUTE_REDIRECT_QUEUED } from 'actions/types';

/**
 * Queues a route change.
 *
 * NOTE: This does NOT actually fire a redirect, but instead stores (via redux)
 * a route to redirect to later.
 *
 * See the RouteMiddleware for the redirection logic.
 */
export const queueRouteChange = route => (dispatch) => {
  if (route) {
    dispatch({
      type: ROUTE_REDIRECT_QUEUED,
      payload: route
    });
  }
};
