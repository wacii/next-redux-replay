import React from "react";
import { makeStore, addCount, serverRenderClock } from "../store";
import withRedux from "next-redux-replay";

import Counter from "../components/Counter";

function initStore({ store, isServer }) {
  store.dispatch(serverRenderClock(isServer));
  store.dispatch(addCount());

  return Promise.resolve({ isServer });
}

export default withRedux(makeStore, initStore)(
  () => <Counter title="Other Page" linkTo="/other" />
);
