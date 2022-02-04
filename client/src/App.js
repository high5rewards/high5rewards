import {Router} from '@reach/router'
import Login from './views/login';
import React from 'react';
import Dashboard from './views/dashboard';

function App() {
  return (
    <div className="App">
    <Router>
      <Login path="/"/>
      <Dashboard path="/dashboard" />
    </Router>
  </div>
  )

}

export default App;
