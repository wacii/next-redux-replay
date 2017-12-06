import React from "react";
import { Provider } from "react-redux";

import buildRecordActionMiddleware from "./buildRecordActionMiddleware";

export const cacheKey = "__NEXT_REDUX_REPLAY__";

function nextReduxReplay(makeStore, initStore, options = {}) {
  let actions, middleware, store;

  if (options.replayAutomatically === undefined)
    options.replayAutomatically = true;

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
      const replayActions = () =>
        actions.forEach(action => store.dispatch(action));
      if (!store) {
        memoizedMakeStore();
        options.replayAutomatically && replayActions();
      }
      const pageProps = options.replayAutomatically
        ? props
        : { ...props, replayActions };
      return (
        <Provider store={store}>
          <Page {...pageProps} />
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
