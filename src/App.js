import React, { Component } from 'react';
import './Normalize.css';
import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'page1'
    }
  }

  changePage = (page) => {
    this.setState({
      currentPage: page
    })
  };

  render() {
    return (
      <div className="App">
        <Navbar changePage={this.changePage}></Navbar>
        <Content currentPage={this.state.currentPage}></Content>
      </div>
    );
  }
}

export default App;
