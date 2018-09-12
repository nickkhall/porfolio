import globalReducer, { initialState as globalIntialState } from 'reducers/Global';
import routesReducer, { initialState as routesIntialState } from 'reducers/Routes';

export const initialStates = {
  globalReducer: globalIntialState,
  routesReduer: routesIntialState
};

const reducers = {
  globalReducer,
  routesReducer
};

export default reducers;
