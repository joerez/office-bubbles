import React, { Component } from 'react';
import Game from './Game';
import Start from './menus/Start';

import './game.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {start: true}

    this.escFunction = this.escFunction.bind(this);

  }

  componentDidMount(){
    document.addEventListener("keydown", this.escFunction, false);
  }


  escFunction(event){
    if(event.keyCode === 27) {
      this.setState({start: true})
    }
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
