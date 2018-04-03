import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './../pages/Home';
import MovieDetail from './../pages/MovieDetail';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={ Home } />
          <Route exact path="/detalle" component={ MovieDetail } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
