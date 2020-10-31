import React, { Fragment } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

const Projects = ({projectsData}) => {

    return(
        <Fragment>
                <h3 className="project">Projects</h3>         
            <div className="container d-flex">
                {projectsData.map((project, index )=> (  
            <div className="col-sm-3" key={index}>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{project.fields.name}</h5>
                        <p className="card-text">{project.fields.description}</p>
                        <a href={project.fields.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Click here for Detail</a>
                    </div>
                </div>
            </div>
                 ))}
                 <button className="goBack">
                    <Link exact to='/home' style={{textDecoration: "none", color: "white", fontSize: "1.2rem"}}>Back to Home</Link>
                </button>
        </div>
                      
     </Fragment> 

)
      
 }

export default Projects;