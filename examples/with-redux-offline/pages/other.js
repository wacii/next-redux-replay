import React from "react";
import withRedux from "next-redux-replay";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import { offline } from "@redux-offline/redux-offline";
import defaultConfig from "@redux-offline/redux-offline/lib/defaults";

import { ready } from "../store/actions";
import reducer from "../store/reducer";
import tickMiddleware from "../store/tickMiddleware";
import Page from "../components/Page";

const PageComponent = () =>
  <Page title="Approach #2: Show loading indicator" linkTo="/" />;

const makeStore = (actions, middleware) => {
  const offlineConfig = {
    ...defaultConfig,
    persistCalblack() {
      actions.forEach(action => store.dispatch(action));
      store.dispatch(ready());
    },
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

  return store;
};

function initStore() {
  return Promise.resolve();
}

export default withRedux(makeStore, initStore)(PageComponent);
