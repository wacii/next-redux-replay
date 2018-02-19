import React from "react";
import { addCount, serverRenderClock } from "../store/actions";
import makeStore from "../store/makeStore";
import withRedux from "next-redux-replay";

import Counter from "../components/Counter";

function initStore({ store, isServer }) {
  store.dispatch(serverRenderClock(isServer));
  store.dispatch(addCount());
  
  return Promise.resolve({ isServer });
}

export default withRedux(makeStore, initStore)(
  () => <Counter title="Index Page" linkTo="/" />
);
