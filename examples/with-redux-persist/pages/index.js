import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { makeStore, startClock, addCount, serverRenderClock } from "../store";
import withRedux from "next-redux-replay";
import Page from "../components/Page";

class Counter extends React.Component {
  componentDidMount() {
    this.timer = this.props.startClock();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <Page title="Index Page" linkTo="/other" />;
  }
}

function initStore({ store, isServer }) {
  store.dispatch(serverRenderClock(isServer));
  store.dispatch(addCount());

  return Promise.resolve({ isServer });
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addCount, startClock }, dispatch);
}

export default compose(
  withRedux(makeStore, initStore),
  connect(null, mapDispatchToProps)
)(Counter);
