import React from 'react';

class Page1 extends React.Component {
  showText = () => {
    
  }
  render() {
    return (
      <div className={`page ${this.props.className}`} id="page1">
        <h1>Erxhan Selmani</h1>
        <h2>Web Application Developer</h2>
        <h3>Front End, Back End, UI & UX</h3>
        <button id="points" onClick={this.showText}>Mais aussi</button>
        <p id="texte">
          Passioné de Technologie et de Design, j'ai décidé de combiné les deux et d'en faire ma vocation.
          <br />
          C'est ainsi qu'aujourd'hui, j'ai mis un pied dans le monde du développemet Web et Mobile en tant que
          développeur Junior.
          <br />
          Toute la stack du développement suscite pour moi un réel intérêt, que ce soit de la logique métier en back-end, en passant
          par la mise en place de SPA en front-end jusqu'aux travaux de design et de conception d'idées. J'ai
          néanmoins un penchant pour tout ce qui a attrait au visuel.
          </p>
      </div>
    );
  };
}

export default Page1;
