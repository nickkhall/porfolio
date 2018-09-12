// Action Types
import {
  ROUTE_REDIRECT_QUEUED
} from 'actions/types';

export const initialState = {
  redirect: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ROUTE_REDIRECT_QUEUED:
      return { redirect: action.payload };
    default:
      return state;
  }
};
