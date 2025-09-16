import React from 'react';

const Cart = ({
  user,
  cart,
  subtotal,
  discount,
  discountedTotal,
  decreaseQty,
  increaseQty,
  removeFromCart,
  onCheckout,
}) => (
  <>
    <h3>
      🛍️ {user}'s Cart ({cart.length} items)
    </h3>
    {cart.length > 0 ? (
      <div>
        <ul>
          {cart.map((item) => (
            <li key={item.id} style={{ marginBottom: '15px' }}>
              {item.title} - ${item.price.toFixed(2)} × {item.quantity}
              <div style={{ marginTop: '5px' }}>
                <button
                  onClick={() => decreaseQty(item.id)}
                  style={{ padding: '5px', marginRight: '5px' }}
                >
                  -
                </button>
                <button
                  onClick={() => increaseQty(item.id)}
                  style={{ padding: '5px', marginRight: '5px' }}
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    padding: '5px',
                    backgroundColor: 'red',
                    color: 'white',
                    border: 'none',
                    borderRadius: '3px',
                  }}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
        <h4>Subtotal: ${subtotal.toFixed(2)}</h4>
        {discount > 0 && <h4>Discount Applied: {discount}%</h4>}
        <h3>Final Total: ${discountedTotal}</h3>
        <button
          onClick={onCheckout}
          style={{
            marginTop: '10px',
            padding: '10px',
            backgroundColor: 'blue',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          Proceed to Checkout
        </button>
      </div>
    ) : (
      <p>Your cart is empty.</p>
    )}
  </>
);

export default Cart;
