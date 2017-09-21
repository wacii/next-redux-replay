import { createElement } from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";

import buildRecordActionMiddleware from "./buildRecordActionMiddleware";

export const cacheKey = "__NEXT_REDUX_REPLAY__";

function nextReduxReplay(callCreateStore, setup) {
  const { actions, middleware } = buildRecordActionMiddleware();
  const enhancedCreateStore = applyMiddleware(middleware)(createStore);
  let store;

  const isServer = typeof window === "undefined";
  function initStore() {
    if (isServer) {
      store = callCreateStore(enhancedCreateStore, isServer);
    } else if (!window[cacheKey]) {
      store = callCreateStore(enhancedCreateStore, isServer);
      window[cacheKey] = store;
    } else {
      store = window[cacheKey];
    }
  }

  return component => {
    // eslint-disable-next-line no-unused-vars
    function NextReduxWrapper({ actions, ...props }) {
      if (!store) {
        initStore();
        actions.forEach(action => store.dispatch(action));
      }
      return createElement(Provider, { store }, component(props));
    }

    NextReduxWrapper.getInitialProps = async function getInitialProps(context) {
      initStore();
      const result = await setup({ ...context, store });
      return { ...result, actions };
    };

    return NextReduxWrapper;
  };
}

export default nextReduxReplay;
