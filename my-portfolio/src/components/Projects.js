import React from 'react';
import '../App.css';

const Projects = ({name, description, link}) => (
    
       <div className="container">
              <div class="d-flex">
                  <div class="card">
                      <div class="card-body">
                            <h5 class="card-title">{name}</h5>
                            <p class="card-text">{description}</p>
                            <a href="https://sintu24.com/" target="_blank" rel="Portfolio" class="btn btn-primary">{link}</a>
                        </div>
                  </div>
              </div>
        </div>
)

export default Projects;