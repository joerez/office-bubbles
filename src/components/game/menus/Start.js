import React, { Component } from 'react';

class Start extends Component {
  render() {
    return (
      <div className="start">
        <h1>Office Bubbles</h1>
        <p>Office Bubbles is the game about nothing with no set goals or accomplishments that you can play at your desk.</p>
        <p>It might even sort of look like you're doing work</p>
        <button onClick={this.props.closeFunction} id="close-btn">Close</button>
      </div>
    );
  };
};

export default Start
