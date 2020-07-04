import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Subsidiaries from './pages/Subsidiaries';

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
            path='/subsidiaries'
            component={() => <Subsidiaries />} 
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
