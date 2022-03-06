import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

//connect to Moralis server 
import {MoralisProvider} from "react-moralis";
// import reportWebVitals from './reportWebVitals';

// public Moralis credentials 
// APPID, SERVERURL


console.log(appId, serverUrl)
ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={process.env.APPID} serverUrl={process.env.SERVERURL}>
      <App />
    </ MoralisProvider >
  </React.StrictMode>,
  document.getElementById('root')
);

// measure app performance
// reportWebVitals(console.log)
