import React, {Component} from 'react';

import Navbar from './Navbar';
import ItemList from './ItemList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container main-content">
          <ItemList />
          <button type="button" className="btn btn-primary btn-lg btn-block">
            Bayar
          </button>
        </div>
      </div>
    );
  }
}

export default App;
