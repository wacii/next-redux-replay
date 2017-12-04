import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import { offline } from "@redux-offline/redux-offline";
import defaultConfig from "@redux-offline/redux-offline/lib/defaults";

// ACTIONS

function succeedAlways() {
  return {
    type: "SUCCEED_ALWAYS",
    meta: {
      offline: {
        effect: { url: "/succeed-always" },
        commit: { type: "SUCCEED_ALWAYS_SUCCESS" },
        rollback: { type: "SUCCEED_ALWAYS_FAILURE" }
      }
    }
  };
}

function succeedSometimes() {
  return {
    type: "SUCCEED_SOMETIMES",
    meta: {
      offline: {
        effect: { url: "/succeed-sometimes" },
        commit: { type: "SUCCEED_SOMETIMES_SUCCESS" },
        rollback: { type: "SUCCEED_SOMETIMES_FAILURE" }
      }
    }
  };
}

function failSometimes() {
  return {
    type: "FAIL_SOMETIMES",
    meta: {
      offline: {
        effect: { url: "/fail-sometimes" },
        commit: { type: "FAIL_SOMETIMES_SUCCESS" },
        rollback: { type: "FAIL_SOMETIMES_FAILURE" }
      }
    }
  };
}

export { succeedAlways, succeedSometimes, failSometimes };

// REDUCER

const initialState = {
  timer: 0
};
function reducer(state = initialState, action) {
  if (action.type === "Offline/SCHEDULE_RETRY") {
    return {
      ...state,
      timer: action.payload.delay / 1000
    };
  }
  if (action.type === "TICK") {
    return {
      ...state,
      timer: state.timer === 0 ? 0 : state.timer - 1
    };
  }
  return state;
}

const config = {
  ...defaultConfig,
  retry(_action, retries) {
    return (retries + 1) * 1000;
  }
};

function tickMiddleware(store) {
  return next => action => {
    if (action.type === "Offline/SCHEDULE_RETRY") {
      const intervalId = setInterval(() => {
        store.dispatch({ type: "TICK" });
      }, 1000);
      setTimeout(() => clearInterval(intervalId), action.payload.delay);
    }
    return next(action);
  };
}

export const makeStore = middleware => {
  return createStore(
    reducer,
    composeWithDevTools(
      offline(config),
      applyMiddleware(tickMiddleware, middleware)
    )
  );
};
