import { createElement } from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";

import buildRecordActionMiddleware from "./buildRecordActionMiddleware";

export const cacheKey = "__NEXT_REDUX_REPLAY__";

function nextReduxReplay(callCreateStore, setup) {
  const { actions, middleware } = buildRecordActionMiddleware();
  const enhancedCreateStore = applyMiddleware(middleware)(createStore);
  let store;

  function initStore() {
    if (typeof window === "undefined") {
      store = callCreateStore(enhancedCreateStore);
    } else if (!window[cacheKey]) {
      store = callCreateStore(enhancedCreateStore);
      window[cacheKey] = store;
    } else {
      store = window[cacheKey];
    }
  }

  return component => {
    // eslint-disable-next-line no-unused-vars
    function NextReduxWrapper({ actions, ...props }) {
      if (!store) {
        // TODO: use PropTypes instead or simply remove
        if (!actions) {
          throw new Error(
            "`props.actions` not found, remember to call getInitialProps()"
          );
        }
        initStore();
        actions.forEach(action => store.dispatch(action));
      }
      return createElement(Provider, { store }, component(props));
    }

    NextReduxWrapper.getInitialProps = async function getInitialProps() {
      initStore();
      await setup(store);
      return { actions };
    };

    return NextReduxWrapper;
  };
}

export default nextReduxReplay;
