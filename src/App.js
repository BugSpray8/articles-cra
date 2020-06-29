import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route} from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Posts from "./pages/Posts";
import Post from "./pages/Post";

// Components
import Navbar from "./components/Navbar";




class App extends Component {
  state = {
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
        </div>
  
        <Route exact path="/" component={Home} />

        <Route exact path="/posts" component={Posts} />
        <Route path="/posts/:id" component={Post} />

        <Route path="/services" component={Services} />
        
        <Route path="/contact" component={Contact} />
      </Router>
    );
  }
}

export default App;
