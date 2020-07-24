import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import Header from './Header.js';
import About from './About.js';
import Home from './Home.js';
import {Switch , Route} from 'react-router-dom';
import Projects from './Projects.js';
import Blogs from './Blogs.js';
import RecentProjects from './RecentProjects.js';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/blogs' component={Blogs} />
      </Switch>
    </div>
  );
}

export default App;
