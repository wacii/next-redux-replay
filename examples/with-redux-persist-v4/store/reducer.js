import { ADD, TICK } from "./constants";

const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0
};

const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
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
