import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from 'react-moralis';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MoralisProvider
    serverUrl="https://wtza9eh7huca.usemoralis.com:2053/server"
    appId="iAxM1oK6PvMRPTH9QXa36N5ZPeh2jEH8EHyPMKz9"
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MoralisProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
