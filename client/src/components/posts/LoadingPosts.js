import React from "react";
import Spinner from "react-bootstrap/Spinner";

const LoadingPosts = ({ classes }) => (
  <div>
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  </div>
);

export default (LoadingPosts)