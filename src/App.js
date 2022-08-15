/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Home from './routes/Home/Home';
import Navigation from './routes/Navigation/Navigation';
import Shop from './routes/Shop/Shop';
import Authentication from './routes/Authentication/Authentication';
import Checkout from './routes/Checkout/Checkout';
import { checkUserSession } from './store/user/userActions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
