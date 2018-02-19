import React from "react";
import withRedux from "next-redux-replay";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import { offline } from "@redux-offline/redux-offline";
import defaultConfig from "@redux-offline/redux-offline/lib/defaults";
import { createPersistor, getStoredState } from "redux-persist";
import { REHYDRATE } from "redux-persist/lib/constants";

import { ready } from "../store/actions";
import reducer from "../store/reducer";
import tickMiddleware from "../store/tickMiddleware";
import Page from "../components/Page";

const PageComponent = () =>
  <Page title="Approach #1: Show incomplete data" linkTo="/other" />;

const makeStore = (actions, middleware) => {
  const offlineConfig = {
    ...defaultConfig,
    persist: false,
    retry(_action, retries) {
      return (retries + 1) * 1000;
    }
  };
  const store = createStore(
    reducer,
    composeWithDevTools(
      offline(offlineConfig),
      applyMiddleware(tickMiddleware, middleware)
    )
  );
  // do not display loading indicator
  store.dispatch(ready());
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

function initStore() {
  return Promise.resolve();
}

export default withRedux(makeStore, initStore)(PageComponent);
