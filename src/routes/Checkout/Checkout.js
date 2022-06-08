import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import { CartContext } from '../../contexts/cart.context';
import './Checkout.styles.scss';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  const subTotal = () => cartItems.reduce(
    (acc, currentVal) => acc + currentVal.quantity * currentVal.price,
    0,
  );

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
        {subTotal()}
      </p>
    </div>
  );
};

export default Checkout;
