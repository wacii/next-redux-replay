import { SCHEDULE_RETRY } from "@redux-offline/redux-offline/lib/constants";

import { tick } from "./actions";

function tickMiddleware(store) {
  return next => action => {
    if (action.type === SCHEDULE_RETRY) {
      const intervalId = setInterval(() => {
        store.dispatch(tick());
      }, 1000);
      setTimeout(() => clearInterval(intervalId), action.payload.delay);
    }
    return next(action);
  };
}

export default tickMiddleware;
