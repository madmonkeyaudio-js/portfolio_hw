import React from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Projects from './pages/Projects'

class Content extends React.Component {

    state = {
        posts: [
            {
                title: 'My first post',
                text: 'This is my first blog post of the year.'
            },
            {
                title: 'My second post',
                text: 'This is my second post of the year.'
            },
            {
                title: 'My third post',
                text: 'This is my third post of the year.'
            }
        ]
    }

    
    render(){
        return (
            <main>
               <Route exact path='/' component={Home} />
               <Route path='/about' component={About} />
               <Route path='/blog' render={ () => 
                   <Blog posts={this.state.posts} />
               } />
               <Route path='/projects' component={Projects} />
            </main>
        )
    }
}
   
export default Content;
