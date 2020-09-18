import React, { Component } from "react";
import NavBar from "../NavBar";

class notFound extends Component {
  render() {
    return (
      <div>
        Sorry we couldn't find that page Here's a picture of a dog instead
        <div>
          <img src="" alt="insert cute puppy here :) "></img>
        </div>

        <NavBar />
      </div>
    );
  }
}

export default notFound;
