import React from 'react';
import './Navbar.css';
import Icon from './Icon';

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <Icon iconNumber="icon icon-1" icon="fas fa-align-right"></Icon>
        <Icon iconNumber="icon icon-2" icon="fas fa-graduation-cap"></Icon>
        <Icon iconNumber="icon icon-3" icon="fas fa-rocket"></Icon>
        <Icon iconNumber="icon icon-4" icon="fas fa-search"></Icon>
      </div>
    );
  };
};

export default Navbar;
