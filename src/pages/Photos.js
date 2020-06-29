import React, { Component } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
class Photos extends Component {
    state = {
        photos: [] 
     }
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then(res => {
          this.setState({
            posts: res.data
          })
        })
    }

    render() { 
        let Photolist = this.state.photos
        .map(photos => {
          return <article className="post column is-one-third">
              <Link to="/albums/1/photos"><h2 className="post__title">{photos.url}</h2></Link>
          </article>
        })

        return ( 
        <div className="posts container">
            <h1 className="title is-1">Les Photos</h1>
            <div className="columns is-multiline">
              {Photolist}
            </div>
        </div> );
    }
}
 
export default Photos;