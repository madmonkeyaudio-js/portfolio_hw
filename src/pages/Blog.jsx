import React from 'react'

const Blog = props => {
    const blogPostsDisplay = props.posts.map((post, i) => {
        return (
            <li key={i}>
                <div className="blog-post">
                    <h2>{post.title}</h2>
                    <p>{post.text}</p>
                </div>   
            </li>
        )
    })

    return (
        <div>
           
            <ul>
                {blogPostsDisplay}
            </ul>
        </div>
    )
}

export default Blog;