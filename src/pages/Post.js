import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
    state = { 
        post: {}
     }

    componentDidMount() {
        let id = this.props.match.params.id;
        console.log(id);
        axios.get('https://jsonplaceholder.typicode.com/posts'+id)
        .then(res => {
            console.log(res.data);
            this.setState({
                post: res.data
            })
        })
    }

    render() { 
        if(this.state.post) {
            return ( 
                <article className="post">
                    <h1 className="title is-1">{this.state.post.title}</h1>
                    <p>{this.state.post.body}</p>
                </article> );
        }
        else {
           return(<p>Chargement...</p>);
        }
    }
}
 
export default Post;