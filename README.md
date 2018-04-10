# Next Redux Replay

Use _Redux_ and friends with _Next.js_.

Differs from [next-redux-wrapper](https://github.com/kirill-konshin/next-redux-wrapper) in how state is transferred to the client. In _next-redux-wrapper_, the whole state is sent and used as the preloaded state in `createStore()`. With _Next Redux Replay_ only the actions responsible for the state are sent, which are then replayed on the client.

## Installation

```bash
yarn install next-redux-replay
```

## Usage

```js
// some-page.js

import withRedux from "next-redux-replay";

const SomePage = () => <div />;

const makeStore = (actions, nextReduxReplayMiddleware, _isServer) => {
  const store = createStore(
    rootReducer,
    applyMiddleware(nextReduxReplayMiddleware)
  );
  actions.forEach(action => store.dispatch(action));
  return store;
};

const initStore = ({ store, isServer }) => {
  store.dispatch(someAction());
  const initialProps = {};
  return Promise.resolve(initialProps);
}

export default withRedux(makeStore, initStore)(SomePage)
```

## `makeStore()`

This function should create the store with the provided middleware then replay the recorded actions on the store. The middleware is responsible for collecting actions to be replayed on the client, so it should be placed in the middleware chain accordingly; i.e. after Redux Thunk.

## `initStore()`

Perform any setup and data fetching required here and return a promise. Whatever the promise resolves to will be merged with the wrapped page component's `props`. This function serves the same purpose as `getInitialProps()`, but receives the `store` in addition to the normal `context' object.

* * *

> Unlike _next-redux-wrapper_, this library does not connect your page components to the Redux store.
