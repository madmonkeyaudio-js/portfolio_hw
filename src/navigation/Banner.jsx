import React from 'react';
import Lightspeed from 'react-reveal/LightSpeed'
import Slide from 'react-reveal/Slide'

class Banner extends React.Component {

  render(){
 
      return (
          <div className="App-header">
              
                <div className="header-text">
                <Lightspeed left>
                    <h2 className="my-name">Jonathan Gross</h2>
                </Lightspeed>
                <Slide left>
                    <h2 className="my-title">Fullstack Developer</h2>
                </Slide>
                </div>
             
              
          </div>
      )
  }
}

export default Banner;