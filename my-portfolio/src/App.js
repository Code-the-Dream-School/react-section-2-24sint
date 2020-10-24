import React, { Component} from 'react';
import Projects from './components/Projects';


// const API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY
// const BASE_ID = process.env.REACT_APP_AIRTABLE_BASE_ID

  const API_KEY = ""
  const BASE_ID = ""


class App extends Component {
  state = {
    projectsData: []
  }
  

  componentDidMount() {
		fetch(`https://api.airtable.com/v0/${ BASE_ID}/Projects?api_key=${API_KEY}`)
			.then(res => res.json())
			.then(res => {
				console.log(res.records)
				this.setState({ projectsData: res.records })
			})
			.catch(error => console.log(error))
	}

  render() { 
    const {projectsData} = this.state
    return ( 
        <div class="container d-flex">
            {projectsData.map(project => (
              <Projects {...project.fields} keys={project.fields.id}/>
          ))}
        </div> 
)
  }
} 
export default App;

