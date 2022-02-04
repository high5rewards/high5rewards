import {Router} from '@reach/router'
import Login from './views/login';
import React from 'react';

function App() {
  return (
    <div className="App">
    <Router>
      <Login path="/"/>
    </Router>
  </div>
  )

}

export default App;
