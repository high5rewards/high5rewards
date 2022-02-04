import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


import {MoralisProvider} from "react-moralis";
import reportWebVitals from './reportWebVitals';

const appId = "zLRtY4Sr9aU8MwX3YkTsb2g4LepZjIruPWlQdyD3"
const serverUrl = "https://s5pfoouebnsf.usemoralis.com:2053/server"


console.log(appId, serverUrl)
ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <App />
    </ MoralisProvider >
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
