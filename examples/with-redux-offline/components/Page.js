import React from "react";
import Link from "next/link";
import MakeRequests from "./MakeRequests";
import RequestsQueue from "./RequestsQueue";
import SyncStatus from "./SyncStatus";

const Page = ({ title, linkTo }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>
        <SyncStatus />
        <RequestsQueue />
        <MakeRequests />
      </div>
      <nav>
        <Link href={linkTo}>
          <a>Navigate</a>
        </Link>
      </nav>
    </div>
  );
};

export default Page;
