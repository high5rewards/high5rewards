import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

//connect to Moralis server 
import {MoralisProvider} from "react-moralis";
// import reportWebVitals from './reportWebVitals';

// public Moralis credentials 
const appId = 'ryC8CGozs726Y3ZrkjhoOEyg1XnVljeZFD23WuR4';
const serverUrl = 'https://cdkvmuebhnmv.usemoralis.com:2053/server';


console.log(appId, serverUrl)
ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <App />
    </ MoralisProvider >
  </React.StrictMode>,
  document.getElementById('root')
);

// measure app performance
// reportWebVitals(console.log)
