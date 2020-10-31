import React, {Component} from 'react';
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";

class Contact extends Component {
    state = {  }
    render() { 
        return ( 
           <div className="container-fluid footer">
            <div>
                <p>© Copyright Sintu 2020</p>
            </div>
            <div>
                <a href="https://github.com/24sint" target="_blank" rel="noopener noreferrer"><IoLogoGithub size='2rem'/></a>
                <a href="https://www.linkedin.com/in/sintumekonnen/" target="_blank" rel="noopener noreferrer"><IoLogoLinkedin size='2rem'/></a>
                <a href="https://twitter.com/home?lang=en" target="_blank" rel="noopener noreferrer"><IoLogoTwitter size='2rem'/></a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><IoLogoFacebook size='2rem'/></a>
            </div>
          </div>        
         );
    }
}
 
export default Contact;