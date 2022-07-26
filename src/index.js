import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.scss';
import { Provider } from 'react-redux';
import App from './App';
import { CartProvider } from './contexts/cart.context';
import store from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <CartProvider>
          <App />
        </CartProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
