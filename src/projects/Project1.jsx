import React, { Component } from 'react'
import Rubberband from 'react-reveal/RubberBand'

class Project1 extends Component {
    render() {
        return (
            <div className="single-project">
                <h3>Munch My Lawn</h3>
                <div>
                    <li>
                        <a href="https://munchmylawn.herokuapp.com/">
                            <div id="goat-contain" className="fade">

                            </div>
                        </a>
                    </li>
                </div>
                <div>
              
                <p>MML is a booking/chatting service designed for eco-friendly enthusiasts to 
                    hire goats to munch their lawn! This project is lighthearted and interactive,
                    with users able to not only book goats, but chat with them as well (part of our
                    vetting process). 
                </p>
                <br/>
                <Rubberband>
                <p>
                    Technologies include: Mongoose, Express, React.js, Node.js, Socket.io, Twillio,
                    Mapbox, Axios
                </p>
                </Rubberband>
                </div>
            </div>
        )
    }
}

export default Project1
