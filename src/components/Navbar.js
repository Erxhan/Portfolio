import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
  

  render() {
    return (
      <div className="Navbar">
        <div className="icon icon-1" onClick={() => this.props.changePage('page1')}>
          <i className="fas fa-align-right"></i>
        </div>
        <div className="icon icon-2" onClick={() => this.props.changePage('page2')}>
          <i className="fas fa-graduation-cap"></i>
        </div>
        <div className="icon icon-3" onClick={() => this.props.changePage('page3')}>
          <i className="fas fa-rocket"></i>
        </div>
        <div className="icon icon-4" onClick={() => this.props.changePage('page4')}>
          <i className="fas fa-search"></i>
        </div>
      </div>
    );
  };
};

export default Navbar;
