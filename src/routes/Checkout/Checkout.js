import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './Checkout.styles.scss';

const Checkout = () => {
  const {
    cartItems, addItemToCart, decrementQuantity, removeItem,
  } = useContext(CartContext);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length
            ? cartItems.map((cartItem) => (
              <tr key={cartItem.id}>
                <td>{cartItem.name}</td>
                <td>{cartItem.name}</td>
                <td>
                  <div className="quantity-div">
                    <button type="button" className="less" onClick={() => decrementQuantity(cartItem)}>-</button>
                    <span className="quantity">{cartItem.quantity}</span>
                    <button type="button" className="plus" onClick={() => addItemToCart(cartItem)}>+</button>
                  </div>
                </td>
                <td>{cartItem.price}</td>
                <td><button type="button" onClick={() => removeItem(cartItem)}>X</button></td>
              </tr>
            ))
            : 'no show'}
        </tbody>
      </table>
    </div>
  );
};

export default Checkout;
