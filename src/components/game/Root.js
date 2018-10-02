import React, { Component } from 'react';
import Game from './Game';
import Start from './menus/Start';

import './game.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {start: true}
  }

  renderStart() {
    if (this.state.start) {
      return <Start closeFunction={() => this.setState({start: false})}/>
    } else {
      return
    }
  }

  render() {
    return (
      <div>
      <Game />

      {this.renderStart()}


      </div>
    );
  };
};


export default App
