import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import { offline } from "@redux-offline/redux-offline";
import defaultConfig from "@redux-offline/redux-offline/lib/defaults";
import { createPersistor, getStoredState } from "redux-persist";
import { REHYDRATE } from "redux-persist/lib/constants";

import reducer from "./reducer";
import tickMiddleware from "./tickMiddleware";

const config = {
  ...defaultConfig,
  retry(_action, retries) {
    return (retries + 1) * 1000;
  }
};

const makeStore = (actions, middleware) => {
  const store = createStore(
    reducer,
    composeWithDevTools(
      offline({ ...config, persist: false }),
      applyMiddleware(tickMiddleware, middleware)
    )
  );
  // apply actions now
  actions.forEach(action => store.dispatch(action));
  // and again on the restored state
  const persistConfig = {};
  getStoredState(persistConfig, (error, storedState) => {
    store.dispatch({ type: REHYDRATE, payload: storedState });
    actions.forEach(action => store.dispatch(action));

    createPersistor(store, persistConfig);
  });

  return store;
};

export default makeStore;
