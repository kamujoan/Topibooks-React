import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from './utils/Store';


ReactDOM.render(
  <StoreProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root')
);


