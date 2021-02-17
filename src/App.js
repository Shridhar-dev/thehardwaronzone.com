import React from 'react';
import './App.css';
import Home from './Home.js';
import {Switch , Route} from 'react-router-dom';
import Projects from './Projects.js';
import Blogs from './Blogs.js';
function App() {
  return (
    <div className="App" style={{position:'relative'}}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/blogs' component={Blogs} />
      </Switch>
    </div>
  );
}

export default App;
