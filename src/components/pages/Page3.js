import React from "react";
import "./Page3.css";

import AdobeXD from "../../img/adobe-xd.svg";
import Bootstrap4 from "../../img/bootstrap4.svg";
import Css3 from "../../img/css3.svg";
import Electron from "../../img/electron.svg";
import GithubLogo from "../../img/github-logo.svg";
import Graphql from "../../img/graphql.svg";
import Heroku from "../../img/heroku.svg";
import Html5 from "../../img/html5.svg";
import Javascript from "../../img/javascript.svg";
import Json from "../../img/json.svg";
import Laravel from "../../img/laravel.svg";
import Mongodb from "../../img/mongodb.svg";
import Mysql from "../../img/mysql.svg";
import Nodejs from "../../img/nodejs.svg";
import Photoshop from "../../img/photoshop.svg";
import Php from "../../img/php.svg";
import ReactLogo from "../../img/react.svg";
import Redux from "../../img/redux.svg";
import Sass from "../../img/sass.svg";
import Swift from "../../img/swift.svg";
import Symfony from "../../img/symfony.svg";

class Page3 extends React.Component {
  render() {
    return (
      <div className={`page ${this.props.className}`} id="page3">
        <div className="container">
          <figure>
            <img src={Javascript} />
            <span />
          </figure>
          <figure>
            <img src={Html5} />
            <span />
          </figure>
          <figure>
            <img src={Css3} />
            <span />
          </figure>
          <figure>
            <img src={Sass} />
            <span />
          </figure>
          <figure>
            <img src={Bootstrap4} />
            <span />
          </figure>
          <figure>
            <img src={ReactLogo} />
            <span />
          </figure>
          <figure>
            <img src={Redux} />
            <span />
          </figure>
          <figure>
            <img src={Graphql} />
            <span />
          </figure>
          <figure>
            <img src={Json} />
            <span />
          </figure>
          <figure>
            <img src={Nodejs} />
            <span />
          </figure>
          <figure>
            <img src={Electron} />
            <span />
          </figure>
          <figure>
            <img src={Mongodb} />
            <span />
          </figure>
          <figure>
            <img src={Mysql} />
            <span />
          </figure>
          <figure>
            <img src={Php} />
            <span />
          </figure>
          <figure>
            <img src={Laravel} />
            <span />
          </figure>
          <figure>
            <img src={Symfony} />
            <span />
          </figure>
          <figure>
            <img src={Swift} />
            <span />
          </figure>
          <figure>
            <img src={Heroku} />
            <span />
          </figure>
          <figure>
            <img src={AdobeXD} />
            <span />
          </figure>
          <figure>
            <img src={Photoshop} />
            <span />
          </figure>
        </div>
      </div>
    );
  }
}

export default Page3;
