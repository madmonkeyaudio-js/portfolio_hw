import React from 'react';
import Lightspeed from 'react-reveal/LightSpeed'

class Banner extends React.Component {

  render(){
 
      return (
          <div className="App-header">
              <Lightspeed>
                <div className="header-text">
                    <h2 className="my-name">Jonathan Gross</h2>
                    <h3 className="my-title">Fullstack Developer</h3>
                </div>
              </Lightspeed>
              
          </div>
      )
  }
}

export default Banner;