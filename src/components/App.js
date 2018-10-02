import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import Game from './game/Game';
import Root from './game/Root';

import DesignNotes from './blog/DesignNotes';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
              <Route exact path="/" component={Root} />
              <Route exact path="/design-notes" component={DesignNotes} />
            </div>
        </BrowserRouter>
    );
  };
};


export default App
