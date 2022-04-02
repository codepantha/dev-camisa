import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import App from './App';
import { UserProvider } from './contexts/user.context';
import reportWebVitals from './reportWebVitals';
import { ProductsProvider } from './contexts/products.context';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
