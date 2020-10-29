import React, { Component} from 'react';
import './App.css';
import Navigation from './components/Navigation';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom';


const API_KEY = process.env.REACT_APP_API_KEY
const BASE_ID = process.env.REACT_APP_BASE_ID

class App extends Component {
    state = {
      projectsData: [],
      goBackButton: true
    }
  
  componentDidMount() {
		fetch(`https://api.airtable.com/v0/${ BASE_ID}/Projects?api_key=${API_KEY}`)
			.then(res => res.json())
			.then(res => {
				this.setState({ projectsData: res.records })
			})
			.catch(error => console.log(error))
	}

  render() { 
    return ( 
      <div>
          <Router>
            <Navigation/>
              <Switch>
                    <Route path='/home' exact ><Home projectsData={this.state.projectsData}/></Route>
                    <Route path='/about'><About/></Route>
                    <Route path='/projects'><Projects  projectsData={this.state.projectsData}/></Route>
                    <Route path='/contact'><Contact/></Route>
                 
              </Switch>
              <button className="goBack">
                    <Link exact to='/home' style={{textDecoration: "none", color: "white", fontSize: "1.2rem"}}>Back to Home</Link>
              </button>
                  
          </Router>

          
      </div>
       )
  }
} 
export default App;

