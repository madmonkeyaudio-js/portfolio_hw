import React, { Component } from 'react'
import classnames from 'classnames'
import { Link, animateScroll as scroll} from 'react-scroll'

class Nav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        const { prevScrollpos } = this.state;

        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;

        this.setState({
            prevScrollpos: currentScrollPos,
            visible
        })
    }
    render() {
        return (
            <nav
            className={classnames('nav'), {
                'nav--hidden': !this.state.visible
            }}>
                <ul>
                <Link
                    activeClass="active"
                    to="about-container"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                >About
                </Link>
                <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                >Skills
                </Link>
                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                >Projects
                </Link>
                </ul>
            </nav>
        )
    }
}

export default Nav
