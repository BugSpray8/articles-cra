import React, { Component } from 'react';

class Post extends Component {
    state = {  }

    componentDidMount() {
        let id = this.props.match.params.id;
        console.log(id); 
    }

    render() { 
        return ( 
        <article className="post">
            Coucou
        </article> );
    }
}
 
export default Post;