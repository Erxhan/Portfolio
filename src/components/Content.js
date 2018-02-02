import React from 'react';
import './Content.css';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';

class Content extends React.Component {
  render()  {
    return (
      <div className="Content">
        <Page1></Page1>
        <Page2></Page2>
        <Page3></Page3>
        <Page4></Page4>
      </div>
    )
  };
};

export default Content;
