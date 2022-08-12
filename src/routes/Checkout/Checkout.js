import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import { selectCartItems, selectCartTotal } from '../../store/cart/cartSelector';
import './Checkout.styles.scss';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartSubTotal = useSelector(selectCartTotal);

  return (
    <div className="checkout-container">
      {cartItems.length ? (
        <table>
          <thead className="checkout-header">
            <tr>
              <th className="header-block">Product</th>
              <th className="header-block">Description</th>
              <th className="header-block">Quantity</th>
              <th className="header-block">Price</th>
              <th className="header-block">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((cartItem) => (
              <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
          </tbody>
        </table>
      ) : (
        <p>
          Your shopping cart is currently empty.
          <Link to="/shop" style={{ fontWeight: 'bold' }}> Add some items</Link>
        </p>
      )}
      <p>
        Sub-total: $
        {cartSubTotal}
      </p>
    </div>
  );
};

export default Checkout;
