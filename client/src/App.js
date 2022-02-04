import React from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Landing from './routes/Landing/Landing';

import Shared from './routes/Shared/Shared';

import Marketplace from './routes/Marketplace/Marketplace';
import ChosenStore from './routes/ChosenStore/ChosenStore';
import ChosenNFT from './routes/ChosenNFT/ChosenNFT';

import Subscriptions from './routes/Subscriptions/Subscriptions';
import ChosenSubscription from './routes/ChosenSubscription/ChosenSubscription';

import Err from './routes/Err/Err';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>

        {/* Landing page */}
        <Route path='/' element={<Landing/>}/>


        {/* Shared routes with common top navbar */}
        <Route path='app' element={<Shared />}>

          {/* View marketplaces and shop for NFTs */}
          <Route path='marketplace' element={<Marketplace/>}/>
          <Route path='marketplace/store000' element={<ChosenStore/>}/>
          <Route path='marketplace/store000/nft000' element={<ChosenNFT/>}/>

          {/* <Routes to ma>nage subscription NFTs */}
          <Route path='subscriptions' element={<Subscriptions/>}/>
          <Route path='subscriptions/sub00' element={<ChosenSubscription/>}/>

        </Route>
        

        {/* 404 route */}
        <Route path='*' element={<Err />} />

      </Routes>
    </BrowserRouter>
  </div>
  )

}

export default App;
