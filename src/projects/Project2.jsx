import React, { Component } from 'react'

class Project2 extends Component {
    render() {
        return (
            <div className="single-project">
                <h3>Holendary</h3>
                <div>
                    <li>
                        <a href="https://holendary-client-jon.herokuapp.com/">
                            <div id="holendary-contain">

                            </div>
                        </a>
                    </li>
                </div>
               <div>
                <p>
                    Holendary is a holiday setting and planning app. Users
                    select available holidays, or create their own custom Holidays. 
                    Optionally, they may choose to add/remove tasks to their holiday planner. 
                </p>
                <br/>
                <br/>
                <p>
                    Technologies include: Mongoose, Express, React.js, Node.js, 
                </p>
                </div>
            </div>
        )
    }
}

export default Project2
