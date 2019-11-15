import React from 'react'
import Fade from 'react-reveal/Fade'

class Skills extends React.Component {

    state = {
        skillLang: [],
        skillFrame: [], 
        skillDB: []
    }

    handleClick1 = () => {
        if(this.state.skillLang[0] !== 'Javascript'){
            this.setState({
                skillLang: ['Javascript', 'HTML5', 'CSS', 'Python', 'SQL']
            })
        } else {
            this.setState({
                skillLang: []
            })
        }
    }

    handleClick2 = () => {
        if(this.state.skillFrame[0] !== 'React'){
            this.setState({
                skillFrame: ['React', 'Node.js', 'Express', 'EJS', 'Jinja']
            })
        } else {
            this.setState({
                skillFrame: []
            })
        }
    }

    handleClick3 = () => {
        if(this.state.skillDB[0] !== 'MongoDB'){
            this.setState({
                skillDB: ['MongoDB', 'Mongoose', 'Sequelize', 'PostgreSQL']
            })
        } else {
            this.setState({
                skillDB: []
            })
        }
    }

    render() {
        let skillLanguage = this.state.skillLang.map((skill, idx) => {
            return (
                <Fade>
                    <li className="list-item" key={idx}>{skill}</li>
                </Fade>
            )
        })

        let skillFrame = this.state.skillFrame.map((skill, idx) => {
            return (
                <Fade>
                    <li className="list-item" key={idx}>{skill}</li>
                </Fade>
            )
        })

        let skillDB = this.state.skillDB.map((skill, idx) => {
            return (
                <Fade>
                    <li className="list-item" key={idx}>{skill}</li>
                </Fade>
            )
        })
        return (
            <div className="skills">
                <div className="skill-child">
                    <div className="skills-title">
                        <h4>Languages</h4>
                        <button onClick={this.handleClick1}><strong>+</strong></button>
                    </div>
                    <div className="skill-list">
                        <ul>
                            {skillLanguage}
                        </ul>
                    </div>
                </div>
                <div className="skill-child">
                    <div className="skills-title">
                        <h4>Libraries/Frameworks</h4>
                        <button onClick={this.handleClick2}><strong>+</strong></button>
                    </div>
                        <div className="skill-list">
                            <ul>                      
                                {skillFrame}
                            </ul>
                        </div>
                </div>
                <div className="skill-child">
                    <div className="skills-title">
                        <h4>Databases</h4>
                        <button onClick={this.handleClick3}><strong>+</strong></button>
                    </div>
                    <div className="skill-list">
                        <ul>
                            {skillDB}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills