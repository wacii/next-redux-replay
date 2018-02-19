import React from "react";
import Link from "next/link";
import { connect } from "react-redux";

import MakeRequests from "./MakeRequests";
import RequestsQueue from "./RequestsQueue";
import SyncStatus from "./SyncStatus";

const Page = ({ loading, title, linkTo }) => {
  return (
    <div>
      <h1>{title}</h1>
      {loading ? <p>Loading...</p> : (
        <div>
          <SyncStatus />
          <RequestsQueue />
          <MakeRequests />
        </div>
      )}
      <nav>
        <Link href={linkTo}>
          <a>Navigate</a>
        </Link>
      </nav>
    </div>
  );
};

function mapStateToProps(state) {
  return { loading: state.loading };
}

const ConnectedComponent = connect(mapStateToProps)(Page);

export { Page as RawComponent };
export default ConnectedComponent;
