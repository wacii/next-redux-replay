import React from "react";
import makeStore from "../store/makeStore";
import withRedux from "next-redux-replay";
import Page from "../components/Page";

const PageComponent = () => <Page title="Other Page" linkTo="/" />;

function initStore() {
  return Promise.resolve();
}

export default withRedux(makeStore, initStore)(PageComponent);
