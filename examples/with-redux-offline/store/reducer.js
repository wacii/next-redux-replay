import { REHYDRATE } from "redux-persist/lib/constants";
import { SCHEDULE_RETRY } from "@redux-offline/redux-offline/lib/constants";

import { READY, TICK } from "./constants";

const initialState = {
  loading: true,
  timer: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case READY:
      return { ...state, loading: false };
    case REHYDRATE:
      return action.payload;
    case SCHEDULE_RETRY:
      return {
        ...state,
        timer: action.payload.delay / 1000
      };
    case TICK:
      return {
        ...state,
        timer: state.timer === 0 ? 0 : state.timer - 1
      };
    default:
      return state;
  }
}

export default reducer;
