import React from "react";
import "./Page2.css";

class Page2 extends React.Component {
  render() {
    return (
      <div className={`page ${this.props.className}`} id="page2">
        <h1>
          Under Construction{" "}
          <span role="img" aria-label="construction">
            🚧
          </span>
        </h1>
      </div>
    );
  }
}

export default Page2;
