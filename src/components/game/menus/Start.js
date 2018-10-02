import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Start extends Component {
  render() {
    return (
      <div>
        <div onClick={this.props.closeFunction} className="dark-overlay"></div>
        <div className="start">
          <h1>Office Bubbles<small>Beta 1.0</small></h1>
          <p>Office Bubbles is a game about nothing and has no set goals or accomplishments. It's designed to keep you mindlessly entertained while at your desk.</p>
          <p>It might even sort of look like you're doing work.</p>
          <p><b>Game Mechanics and Controls</b></p>
          <p>ESC: Bring up this menu.</p>
          <p>Hover over bubbles to increase their size.</p>
          <p>Hit SpaceBar when bubbles are hovered over to change their direction and increase their velocity.</p>
          <p>Click a bubble to clone it.</p>
          <button onClick={this.props.closeFunction} className="close-btn" id="close-btn">Close Menu</button>
          <div className="start-footer">
            <p><b>Office bubbles is ongoing development! Check out the <Link className="design-notes-nav-btn" to="/design-notes">design notes!</Link></b></p>
            <p>Created by <a target="_blank" href="http://www.joerezendes.com/">Joe Rezendes</a></p>
            <p>Inspired by <a target="_blank" href="https://www.skedge.io">Skedge.io's</a> homepage.</p>
          </div>
        </div>
      </div>
    );
  };
};

export default Start
