import React from "react";
import { Provider } from "react-redux";

import buildRecordActionMiddleware from "./buildRecordActionMiddleware";

export const cacheKey = "__NEXT_REDUX_REPLAY__";

function nextReduxReplay(makeStore, initStore) {
  let actions, middleware, store;

  const isServer = typeof window === "undefined";
  function memoizedMakeStore() {
    if (isServer) {
      ({ actions, middleware } = buildRecordActionMiddleware());
      store = makeStore(middleware, isServer);
    } else if (!window[cacheKey]) {
      ({ actions, middleware } = buildRecordActionMiddleware());
      store = makeStore(middleware, isServer);
      window[cacheKey] = store;
    } else {
      store = window[cacheKey];
    }
  }

  return Page => {
    // eslint-disable-next-line no-unused-vars
    function NextReduxWrapper({ actions, ...props }) {
      if (!store) {
        memoizedMakeStore();
        actions.forEach(action => store.dispatch(action));
      }
      return (
        <Provider store={store}>
          <Page {...props} />
        </Provider>
      );
    }

    NextReduxWrapper.getInitialProps = function getInitialProps(context) {
      memoizedMakeStore();
      return initStore({ ...context, store }).then(result => ({
        ...result,
        actions
      }));
    };

    return NextReduxWrapper;
  };
}

export default nextReduxReplay;
