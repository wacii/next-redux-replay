import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { autoRehydrate, persistStore } from "redux-persist";

import reducer from "./reducer";

const makeStore = (actions, middleware) => {
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
  // apply actions now
  actions.forEach(action => store.dispatch(action));
  // and again after the store has been rehydrated
  persistStore(store, {}, () =>
    actions.forEach(action => store.dispatch(action))
  );
  return store;
};

export default makeStore;
