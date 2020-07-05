import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Subsidiaries from './pages/Subsidiaries';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route
            exact
            path='/'
            component={() => <Home />} 
          />
          <Route
            exact
            path='/about-us'
            component={() => <Home />} 
          />
          <Route
            path='/subsidiaries'
            component={() => <Subsidiaries />} 
          />
          <Route
            path='/contact-us'
            component={() => <Contact />} 
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
