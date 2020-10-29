import React, {Component} from 'react';
import navBarUrl from '../images/headshot.jpg';
import {Link} from 'react-router-dom';

class Navigation extends Component {
  
    render() { 

        return ( 
            <div className="container-fluid">
                <nav id="navigation" className="navbar navbar-expand-lg">
                    <img src={navBarUrl} alt="navPic" className="navPic"/>
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <Link to='/about' className="nav-item nav-link">About</Link>
                            <Link to='/projects' className="nav-item nav-link">Projects</Link>
                            <Link to='/contact' className="nav-item nav-link">Contact</Link>
                   
                        </ul>
                    </div>
                </nav> 
            </div>
        );
    }
}
 
export default Navigation;

        