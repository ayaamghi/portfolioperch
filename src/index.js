import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import TagManager from 'react-gtm-module'

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const tagManagerArgs = {
  gtmId: 'GTM-TTQ5JQZ'
}

TagManager.initialize(tagManagerArgs)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
