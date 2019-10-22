import React from 'react';
import Lightspeed from 'react-reveal/LightSpeed'

class Banner extends React.Component {

    state = {
        messageArray: ['f','u','l','l','s','t','a','c','k',' ','d','e','v','e','l','o','p','e','r'],
        title: ''
    }

    componentDidMount() {
        this.populatePhrase();
    }

    populatePhrase = () => {
        for (let i = 0;  i < this.state.messageArray; i += 1) {
            (function(i) {
                setInterval(function() {
                    this.setState({
                        title: this.state.messageArray[i]
                    })
                }, 500)
            })(i);
        }
    }

    handleClick = () => {
        let mainContent = document.getElementById('main');
        mainContent.scrollIntoView();
    }

  render(){
 
      return (
          <div className="App-header">
              <Lightspeed>
                <div className="header-text">
                    <h2>Jonathan Gross</h2> 
                    <h3>Fullstack Developer</h3>
                </div>
              </Lightspeed>
              
          </div>
      )
  }
}

export default Banner;