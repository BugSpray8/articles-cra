import React, { Component } from 'react';

class Contact extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="contact">
            <h1>Contactez-moi</h1> 
            <form>
                <label htmlFor="name">Nom</label>
                <input type="text" name="" id="name"/>
                <input type="submit" value="Envoyer"/>
            </form>  
        </div> 
        );
    }
}
 
export default Contact;