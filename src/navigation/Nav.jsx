import React, { Component } from 'react'
import classnames from 'classnames'

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
                <a href="#">About</a>
                <a href="#">Skills</a>
                <a href="#">Projects</a>
            </nav>
        )
    }
}

export default Nav
