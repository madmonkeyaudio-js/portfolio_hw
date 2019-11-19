import React, { Component } from 'react'
import Rubberband from 'react-reveal/RubberBand'

class Project1 extends Component {
    render() {
        return (
            <div className="single-project">
                 <a href="https://munch-my-lawn-jon.herokuapp.com/">
                <h3>Munch My Lawn</h3>
                <div>
                    <li>
                       
                            
                            <div className="bg-video">
                            <video className="bg-video__content" autoPlay muted loop>
                                <source src="/zip_Go-Goat/WEBM/Go-Goat.webm" type="video/mp4" />
                                <source src="/zip_Go-Goat/WEBM/Go-Goat.webm" type="video/webm" />
                                your browser does not support a video tag
                            </video>
                            </div>
                       
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
                </a>
            </div>
        )
    }
}

export default Project1
