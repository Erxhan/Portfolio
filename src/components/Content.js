import React from 'react';
import './Content.css';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';

class Content extends React.Component {
  render()  {
    console.log(this.props.currentPage);
    switch (this.props.currentPage) {
      case 'page1':
        return (
          <div className="Content">
            <Page1 className="show"></Page1>
          </div>
        )
      case 'page2':
        return (
          <div className="Content">
            <Page2 className="show"></Page2>
          </div>
        )
      case 'page3':
        return (
          <div className="Content">
            <Page3 className="show"></Page3>
          </div>
        )
      case 'page4':
        return (
          <div className="Content">
            <Page4 className="show"></Page4>
          </div>
        )
      default:
        break;
    }
    // return (
    //   <div className="Content">
    //     <Page1 className={this.props.currentPage === 'page1' ? "show" : "hide"}></Page1>
    //     <Page2 className={this.props.currentPage === 'page2' ? "show" : "hide"}></Page2>
    //     <Page3 className={this.props.currentPage === 'page3' ? "show" : "hide"}></Page3>
    //     <Page4 className={this.props.currentPage === 'page4' ? "show" : "hide"}></Page4>
    //   </div>
    // )
  };
};

export default Content;
