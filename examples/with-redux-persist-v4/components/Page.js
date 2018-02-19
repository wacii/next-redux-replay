import React from "react";
import Link from "next/link";
import { connect } from "react-redux";
import Clock from "./Clock";
import AddCount from "./AddCount";

export default connect(
  state => state
)(({ title, linkTo, loading, lastUpdate, light }) => {
  return (
    <div>
      <h1>{title}</h1>
      
      {loading ? <p>Loading...</p> : (
        <div>
          <Clock lastUpdate={lastUpdate} light={light} />
          <AddCount />
        </div>
      )}
      <nav>
        <Link href={linkTo}>
          <a>Navigate</a>
        </Link>
      </nav>
    </div>
  );
});
