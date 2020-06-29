import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
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
        .slice(0,5)
        .map(post => {
          return <article className="post">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
          </article>
        })
        
        return (
        <div className="home">
            <h1>Bienvenue sur ma page d'accueil</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est beatae porro, in unde iure dignissimos veritatis aliquam incidunt voluptatibus harum.</p>
            
            {postsList}
        </div> 
        );
    }
}
 
export default Home;