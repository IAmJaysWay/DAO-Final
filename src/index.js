import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from "react-moralis";
import { BrowserRouter } from "react-router-dom";



ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId="im3JslrNB1dzy56443l2vvogFbIU5QTQD4hWpVQ0" serverUrl="https://qunohyekkqzo.usemoralis.com:2053/server">
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
