import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { addCount, startClock } from "../store";
import Page from "./Page";

export class Counter extends React.Component {
  componentDidMount() {
    this.timer = this.props.startClock();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <Page {...this.props} />;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addCount, startClock }, dispatch);
}

export default connect(null, mapDispatchToProps)(Counter);
