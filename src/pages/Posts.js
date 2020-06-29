import React, { Component } from 'react';
import axios from 'axios';
class Posts extends Component {
    state = { 
        posts: []
     }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
          this.setState({
            posts: res.data
          })
        })
    }

    render() { 
        let postsList = this.state.posts
        .map(post => {
          return <article className="post">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
          </article>
        })
        
        return (
        <div className="posts">
            <h1>Les articles</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est beatae porro, in unde iure dignissimos veritatis aliquam incidunt voluptatibus harum.</p>
            
            {postsList}
        </div> 
        );
    }
}
 
export default Posts;