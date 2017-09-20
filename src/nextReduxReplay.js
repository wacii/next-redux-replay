import { createElement } from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";

import buildRecordActionMiddleware from "./buildRecordActionMiddleware";

function nextReduxReplay(callCreateStore, setup) {
  const { actions, middleware } = buildRecordActionMiddleware();
  const enhancedCreateStore = applyMiddleware(middleware)(createStore);
  let store;

  return component => {
    // eslint-disable-next-line no-unused-vars
    function NextReduxWrapper({ actions, ...props }) {
      if (!store) {
        if (!actions) {
          throw new Error(
            "`props.actions` not found, remember to call getInitialProps()"
          );
        }
        store = callCreateStore(enhancedCreateStore);
        actions.forEach(action => store.dispatch(action));
      }
      return createElement(Provider, { store }, component(props));
    }

    NextReduxWrapper.getInitialProps = async function getInitialProps() {
      store = callCreateStore(enhancedCreateStore);
      await setup(store);
      return actions;
    };

    return NextReduxWrapper;
  };
}

export default nextReduxReplay;
