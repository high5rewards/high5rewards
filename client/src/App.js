import {Router} from '@reach/router'
import Landing from './views/landing';
import React from 'react';
import Marketplace from './views/marketplace';
import Subscriptions from './views/subscriptions';
import Chosen_store from './views/chosen_store';
import Chosen_nft from './views/chosen_nft';


function App() {
  return (
    <div className="App">
    <Router>
      <Landing path="/"/>
      <Marketplace path="/marketplace" />
      <Subscriptions path="/subscriptions"/>
      <Chosen_store path="/store/1"/>
      <Chosen_nft path="/store/nft/1"/>
    </Router>
  </div>
  )

}

export default App;
