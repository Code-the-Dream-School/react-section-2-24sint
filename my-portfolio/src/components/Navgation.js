import React, {Component} from 'react';
// import About from './components/About';
// import Projects from './components/Projects';
// import Contact from './components/Contact';


import navBarUrl from '../images/headshot.jpg';

class Navigation extends Component {
    state = {  }

    render() { 
        return ( 
            <div className="container-fluid navbar">
                <nav class="navbar navbar-expand-lg">
                    <img src={navBarUrl} alt="navPic" className="navPic"/>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-item nav-link" href="#">About</a>
                            <a class="nav-item nav-link" href="#">Projects</a>
                            <a class="nav-item nav-link" href="#">Contact</a> 
                        </div>
                    </div>
                </nav> 
      </div>
         );
    }
}
 
export default Navigation;