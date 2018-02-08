import React from 'react';
import './Page3.css';

class Page3 extends React.Component {
  render() {
    return (
      <div className={`page ${this.props.className}`} id="page3">
        <h1>Under Construction <span role="img" aria-label="construction">🚧</span></h1>
      </div>
    );
  };
}

export default Page3;
