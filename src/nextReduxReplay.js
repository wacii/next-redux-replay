import React from "react";
import { Provider } from "react-redux";

import buildRecordActionMiddleware from "./buildRecordActionMiddleware";

export const cacheKey = "__NEXT_REDUX_REPLAY__";

function nextReduxReplay(makeStore, initStore, options = {}) {
  let actions, middleware, store;

  if (options.replayAutomatically === undefined)
    options.replayAutomatically = true;

  const isServer = typeof window === "undefined";
  function memoizedMakeStore(serverActions = []) {
    if (isServer) {
      ({ actions, middleware } = buildRecordActionMiddleware());
      store = makeStore(serverActions, middleware, isServer);
    } else if (!window[cacheKey]) {
      ({ actions, middleware } = buildRecordActionMiddleware());
      store = makeStore(serverActions, middleware, isServer);
      window[cacheKey] = store;
    } else {
      store = window[cacheKey];
    }
  }

  return Page => {
    // eslint-disable-next-line no-unused-vars
    function NextReduxWrapper({ actions, ...props }) {
      if (!store) {
        if (actions === undefined) {
          throw new TypeError(
            "Actions required. Did you not call `getInitialProps()`?"
          );
        }
        memoizedMakeStore(actions);
      }
      return (
        <Provider store={store}>
          <Page {...props} />
        </Provider>
      );
    }

    NextReduxWrapper.getInitialProps = function getInitialProps(context) {
      memoizedMakeStore();
      return initStore({ ...context, store, isServer }).then(result => ({
        ...result,
        actions
      }));
    };

    return NextReduxWrapper;
  };
}

export default nextReduxReplay;
