import React from 'react';
import About from './pages/About';
import Project1 from './projects/Project1'
import Project2 from './projects/Project2'
import Project3 from './projects/Project3'
import Skills from './pages/Skills'
import Fade from 'react-reveal/Fade'

class Content extends React.Component {
    
    render(){
        return (
            <main id="main">
                <div className="profile-container">
                <div className="about">
                <Fade left>
                    <div className="profile">
                        <div className="profile-pic">
                        </div>
                        <a href="https://docs.google.com/document/d/1Pu85JFXAusp7s2IDk34lHqazVChcLbvH6UdJURKxxgI/edit#" download>
                            <div id="resume">Download My Resume Here!</div>
                        </a>
                    </div>
                    </Fade>
                    <Fade right>
                        <div className="about-text">
                            <About />
                            <Skills />
                        </div>
                    </Fade>
                    </div>
                </div>
                <div className="projects-container">
                    <div className="projects-title">
                        <h2>Projects</h2>
                    </div>
                    <div className="projects" id="projects">
                        <Project1 />
                        <Project2 />
                        <Project3 />
                    </div>
                </div>
            </main>
        )
    }
}
   
export default Content;
