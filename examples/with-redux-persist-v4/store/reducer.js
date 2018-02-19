import { ADD, READY, TICK } from "./constants";
import { REHYDRATE } from "redux-persist/lib/constants";

const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
  loading: true
};

const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case READY:
      return Object.assign({}, state, {
        loading: false
      });
    case TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      });
    case ADD:
      return Object.assign({}, state, {
        count: state.count + 1
      });
    default:
      return state;
  }
};

export default reducer;
