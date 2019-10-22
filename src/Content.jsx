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
                <div className="about">
                    <div className="profile">
                        <Fade left>
                            <div className="profile-pic">
                            </div>
                        </Fade>
                    </div>
                    <Fade right>
                        <div className="about-text">
                               <About />
                        </div>
                    </Fade>
                </div>
                <div>
                    <Skills />
                </div>
                <div className="projects-container">
                    <div className="projects-title">
                        <h2>Projects</h2>
                    </div>
                    <div className = "projects" id="projects">
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
