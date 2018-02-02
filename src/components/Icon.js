import React from 'react';

class Icon extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className={this.props.iconNumber}>
        <i className={this.props.icon}></i>
      </div>
    );
  }
};

export default Icon;
