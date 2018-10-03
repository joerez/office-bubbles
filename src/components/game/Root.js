import React, { Component } from 'react';
import Game from './Game';
import Start from './menus/Start';

import './game.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      start: true,
      background: ["url('https://image.ibb.co/duQSde/Screen_Shot_2018_10_02_at_1_11_14_AM.png')", "url('http://tinaciousdesign.com/wp-content/uploads/2017/03/sublimetext-light-syntax-theme.png')", "url('https://image.ibb.co/kbCOKK/Screen_Shot_2018_10_02_at_4_23_43_PM.png')", "url('https://image.ibb.co/jbPZte/Screen_Shot_2018_10_02_at_5_08_06_PM.png')"],
      backgroundPosition: 0,
      panicMode: false
    }

    this.escFunction = this.escFunction.bind(this);
    this.setBackgroundStyles = this.setBackgroundStyles.bind(this);
    this.panicFunction = this.panicFunction.bind(this);
  }

  componentDidMount(){
    document.addEventListener("keydown", this.escFunction, false);
    document.addEventListener("keydown", this.panicFunction);


    window.addEventListener("keydown", event => {
      if (event.keyCode === 73) {
        if (this.state.backgroundPosition <= this.state.background.length - 2) {
          this.setState({backgroundPosition: this.state.backgroundPosition + 1})
        } else {
          this.setState({backgroundPosition: 0})
        }
        document.querySelector('.background').style.background = this.state.background[this.state.backgroundPosition]
        this.setBackgroundStyles()
      }
    })
  }

  setBackgroundStyles() {
    document.querySelector('.background').style.backgroundSize = 'contain';
    document.querySelector('.background').style.backgroundRepeat = 'no-repeat';
    document.querySelector('.background').style.backgroundPosition = 'center';

  }

  escFunction(event){
    if(event.keyCode === 27) {
        return this.setState({start: true})
    }
  }

  panicFunction(event) {
    if (event.keyCode === 80) {
      console.log("p")
      if (this.state.panicMode) {
        return this.setState({panicMode: false})
      }
      if (!this.state.panicMode) {
        return this.setState({panicMode: true})
      }
    }
  }

  renderStart() {
    if (this.state.start) {
      return <Start closeFunction={() => this.setState({start: false})}/>
    } else {
      return
    }
  }

  renderPanic() {
    if (this.state.panicMode) {
      return  <div className="panic-div"></div>
    } else {
      return
    }
  }

  render() {
    return (
      <div>
      {this.renderPanic()}
      <Game />
      {this.renderStart()}


      </div>
    );
  };
};


export default App
