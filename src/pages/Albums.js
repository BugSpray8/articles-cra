import React, { Component } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
class Albums extends Component {
    state = {
        albums: [] 
     }
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/albums')
        .then(res => {
          this.setState({
            albums: res.data
          })
        })
    }

    render() { 
        let albumsList = this.state.albums
        .map(album => {
          return <article className="post column is-one-third">
              <Link to="/albums/{id}/photos"><h2 className="post__title">{album.title}</h2></Link>
          </article>  
        })

        return ( 
        <div className="posts container">
            <h1 className="title is-1">Les Albums</h1>
            <div className="columns is-multiline">
              {albumsList}
            </div>
        </div> );
    }
}
 
export default Albums;