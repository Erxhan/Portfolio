import React from 'react';
import './Page4.css';
import Email from '../../img/email.svg';
import Github from '../../img/github.svg';
import Iphone from '../../img/iphone.svg';
import Linkedin from '../../img/linkedin.svg';

class Page4 extends React.Component {
  render() {
    
    return (
      <div className={`page ${this.props.className}`} id="page4">
        <a className="card card-1" href="mailto:erxhanselmani@icloud.com">  
          <img className="logoStyle" src={Email}></img>
          <span>Email Me</span> 
        </a>
        <a className="card card-2" target="_blank" href="https://github.com/Erxhan">
          <img className="logoStyle" src={Github}></img>
          <span>Github</span>
        </a>
        <a className="card card-3" href="tel:+32484621746">
          <img className="logoStyle" src={Iphone}></img>
          <span>Call Me</span>
        </a>
        <a className="card card-4" target="_blank" href="https://www.linkedin.com/in/erdzan-selmani/">
          <img className="logoStyle" src={Linkedin}></img>
          <span>Visit Me</span>
        </a>
      </div>
    );
  };
}

export default Page4;
