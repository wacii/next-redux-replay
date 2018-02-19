import React from "react";
import withRedux from "next-redux-replay";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { autoRehydrate, persistStore } from "redux-persist";

import { addCount, ready, serverRenderClock } from "../store/actions";
import reducer from "../store/reducer";
import Counter from "../components/Counter";

function makeStore(actions, middleware) {
  const store = createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(thunkMiddleware, middleware),
      autoRehydrate({
        stateReconciler(_state, inboundState) {
          return inboundState;
        }
      })
    )
  );
  // do not display loading message
  store.dispatch(ready());
  // apply actions now
  actions.forEach(action => store.dispatch(action));
  // and again after the store has been rehydrated
  persistStore(store, {}, () =>
    actions.forEach(action => store.dispatch(action))
  );
  return store;
};

function initStore({ store, isServer }) {
  store.dispatch(serverRenderClock(isServer));
  store.dispatch(addCount());

  return Promise.resolve({ isServer });
}

export default withRedux(makeStore, initStore)(
  () => <Counter title="Approach #1: Display incomplete data" linkTo="/other" />
);
