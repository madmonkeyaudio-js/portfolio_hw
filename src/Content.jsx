import React from 'react';
import { Route } from 'react-router-dom';



import Home from './pages/Home';
import About from './pages/About';
import Project1 from './projects/Project1'
import Project2 from './projects/Project2'
import Project3 from './projects/Project3'



class Content extends React.Component {
    
    render(){
        return (
            <main>
                <div className = "main-left">
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                </div>
                <div className = "main-right">
                    <Project1 />
                    <Project2 />
                    <Project3 />
                </div>
            
            </main>
        )
    }
}
   
export default Content;
