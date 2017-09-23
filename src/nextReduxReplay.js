import { Provider } from "react-redux";

import buildRecordActionMiddleware from "./buildRecordActionMiddleware";

export const cacheKey = "__NEXT_REDUX_REPLAY__";

function nextReduxReplay(makeStore, initStore) {
  const { actions, middleware } = buildRecordActionMiddleware();
  let store;

  const isServer = typeof window === "undefined";
  function memoizedMakeStore() {
    if (isServer) {
      store = makeStore(middleware, isServer);
    } else if (!window[cacheKey]) {
      store = makeStore(middleware, isServer);
      window[cacheKey] = store;
    } else {
      store = window[cacheKey];
    }
  }

  return component => {
    // eslint-disable-next-line no-unused-vars
    function NextReduxWrapper({ actions, ...props }) {
      if (!store) {
        memoizedMakeStore();
        actions.forEach(action => store.dispatch(action));
      }
      return (
        <Provider store={store}>
          <component {...props} />
        </Provider>
      );
    }

    NextReduxWrapper.getInitialProps = async function getInitialProps(context) {
      memoizedMakeStore();
      const result = await initStore({ ...context, store });
      return { ...result, actions };
    };

    return NextReduxWrapper;
  };
}

export default nextReduxReplay;
