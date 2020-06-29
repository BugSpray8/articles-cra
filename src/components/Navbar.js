import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
          <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
    </a>

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <NavLink exact to="/" className="navbar-item" activeClassName="is-active">
        Home
      </NavLink>

      <NavLink to="/services" className="navbar-item" activeClassName="is-active">
        Mes services
      </NavLink>

      <NavLink to="/posts" className="navbar-item" activeClassName="is-active">
        Mes articles
      </NavLink>

      <NavLink to="/contact" className="navbar-item" activeClassName="is-active">
        Contact
      </NavLink>
    </div>
  </div>
</nav>
        );
     }
}
 
export default Navbar;