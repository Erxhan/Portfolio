import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIcon: 'icon-1'
    };
  };

  selectIcon = (icon) => {
    this.setState({
      currentIcon: icon
    });
  };

  render() {
    return (
      <div className="Navbar">
        <div className={`icon icon-1 ${this.state.currentIcon === 'icon-1' ? 'iconSelected' : 'notSelected'}`}
          onClick={() => {
            this.props.changePage('page1')
            this.selectIcon('icon-1')
          }
        }>
          <i className="fas fa-align-right"></i>
        </div>
        <div className={`icon icon-2 ${this.state.currentIcon === 'icon-2' ? 'iconSelected' : 'notSelected'}`} 
          onClick={() => {
            this.props.changePage('page2')
            this.selectIcon('icon-2')
          }
        }>
          <i className="fas fa-graduation-cap"></i>
        </div>
        <div className={`icon icon-3 ${this.state.currentIcon === 'icon-3' ? 'iconSelected' : 'notSelected'}`} 
          onClick={() => {
            this.props.changePage('page3')
            this.selectIcon('icon-3')
          }
        }>
          <i className="fas fa-rocket"></i>
        </div>
        <div className={`icon icon-4 ${this.state.currentIcon === 'icon-4' ? 'iconSelected' : 'notSelected'}`} 
          onClick={() => {
            this.props.changePage('page4')
            this.selectIcon('icon-4')
          }
        }>
          <i className="fas fa-search"></i>
        </div>
      </div>
    );
  };
};

export default Navbar;
