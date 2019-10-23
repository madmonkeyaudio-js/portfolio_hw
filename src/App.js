import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import './App.css';

//Add custom components
import Banner from './navigation/Banner';
import Nav from './navigation/Nav'
import Content from './Content';

class App extends React.Component {
  constructor(props){
    super(props)
    this.navElement = React.createRef();
  }

  handleScroll = () => {
    this.navElement.current.handleScroll();
  }

  render(){
    
    return (
      <div className="App" onScroll={this.handleScroll}>
        <Router>
          <Nav ref={this.navElement}/>
          <Banner />
            <div className="main-background">
              <Content />
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
