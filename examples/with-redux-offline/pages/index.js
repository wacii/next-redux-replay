import React from "react";
import { makeStore } from "../store";
import withRedux from "next-redux-replay";
import Page from "../components/Page";

const PageComponent = () => <Page title="Index Page" linkTo="/other" />;

function initStore() {
  return Promise.resolve();
}

export default withRedux(makeStore, initStore)(PageComponent);
