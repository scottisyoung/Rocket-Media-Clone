import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

// Import Components

import Navbar from './Navbar/navbar.js';
import Home from './Home/home.js';
import Footer from './Footer/footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Navbar/>
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
