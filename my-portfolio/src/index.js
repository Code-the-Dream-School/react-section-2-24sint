import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navgation';


ReactDOM.render(
  <React.StrictMode>
    <Navigation/>,
      <About/>,
      <App/>, 
      <Contact/>
   
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
