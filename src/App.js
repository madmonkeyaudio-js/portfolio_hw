import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import './App.css';

//Add custom components
import Banner from './navigation/Banner';
import Nav from './navigation/Nav'
import Content from './Content';

function App() {

  return (
    <div className="App">
      <Router>
        <Nav />
        <Banner />
          <div className="main-background">
            <Content />
          </div>
      </Router>
    </div>
  );
}

export default App;
