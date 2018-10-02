import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import Game from './game/game';
import Root from './game/Root';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
              <Route exact path="/" component={Root} />
            </div>
        </BrowserRouter>
    );
  };
};


export default App
