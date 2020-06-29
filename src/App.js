import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link} from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Posts from "./pages/Posts";


// Page d'accueil avec 5 articles (/)
// Page des articles avec TOUS les articles (/posts)
// Page de contact avec un petit formulaire
// Stylisez ça avec Bulma


class App extends Component {
  state = {
  }

  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/posts">Mes articles</Link></li>
            <li><Link to="/services">Mes services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
  
        <Route exact path="/" component={Home} />
        <Route path="/posts" component={Posts} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
      </Router>
    );
  }
}

export default App;
