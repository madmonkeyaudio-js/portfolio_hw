import React, { Component } from 'react'
import { Link, animateScroll as scroll} from 'react-scroll'

class Nav extends Component {
    state = {
        navRender: true
    }
    
    handleScroll = () => {
        this.setState({
          navRender: false
        })
      }
    
    render() {
        return (
            <nav className="navbar">
                <ul>
                <Link
                    activeClass="active"
                    to="about-container"
                    spy={true}
                    smooth={true}
                    offset={-210}
                    duration= {500}
                ><li>About</li> 
                </Link>
                <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration= {500}
                ><li>
                    Skills
                </li>
                </Link>
                <Link
                    activeClass="active"
                    to="projects-title"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration= {500}
                ><li>
                    Projects
                </li>
                </Link>
                </ul>
            </nav>
        )
    }
}

export default Nav
