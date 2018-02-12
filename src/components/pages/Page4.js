import React from 'react';
import './Page4.css';
import Email from '../../img/email.svg';
import Github from '../../img/github.svg';
import Iphone from '../../img/iphone.svg';
import Linkedin from '../../img/linkedin.svg';

class Page4 extends React.Component {
  render() {
    let logoStyle = {
      width: '70px',
      height: '70px',
      marginBottom: '1em',
    };
    
    return (
      <div className={`page ${this.props.className}`} id="page4">
        <div className="card card-1">  
          <img style={logoStyle} src={Email}></img>
          <a className="linkStyle" href="mailto:erxhanselmani@icloud.com">Email Me</a> 
        </div>
        <div className="card card-2">
          <img style={logoStyle} src={Github}></img>
          <a className="linkStyle" target="_blank" href="https://github.com/Erxhan">Github</a>
        </div>
        <div className="card card-3">
          <img style={logoStyle} src={Iphone}></img>
          <a className="linkStyle" href="tel:+32484621746">Call Me</a>
        </div>
        <div className="card card-4">
          <img style={logoStyle} src={Linkedin}></img>
          <a className="linkStyle" target="_blank" href="https://www.linkedin.com/in/erdzan-selmani/">Visit Me</a>
        </div>
      </div>
    );
  };
}

export default Page4;
