import React from 'react';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const Home = (props) =>{
  
        return ( 
              <div>
                  <About/>
                  <Projects projectsData={props.projectsData}/>
                  <Contact/>
              </div>
         );
    }

 
export default Home;