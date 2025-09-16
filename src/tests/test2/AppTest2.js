// src/EcommerceApp.js
import React, { useEffect, useState, useRef } from 'react';
import Login from './components/Login';
import SearchCoupon from './components/SearchCoupon';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import CheckoutModal from './components/CheckoutModal';
import useFetch from '../../hooks/useFetch';

function EcommerceApp() {
  // const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [showCheckout, setShowCheckout] = useState(false);
  const [user, setUser] = useState(null);
  const usernameRef = useRef();
  const couponRef = useRef();

  // Fetch products
  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products')
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);

  // Fetch products using custom hook
  const { data: products , loading, error } = useFetch(
    'https://fakestoreapi.com/products'
  );
  // Load cart & discount for logged-in user
  useEffect(() => {
    if (user) {
      const savedCart = JSON.parse(localStorage.getItem(`${user}_cart`)) || [];
      const savedDiscount =
        JSON.parse(localStorage.getItem(`${user}_discount`)) || 0;
      setCart(savedCart);
      setDiscount(savedDiscount);
    }
  }, [user]);

  // Save cart & discount
  useEffect(() => {
    if (user) {
      localStorage.setItem(`${user}_cart`, JSON.stringify(cart));
      localStorage.setItem(`${user}_discount`, JSON.stringify(discount));
    }
  }, [cart, discount, user]);

  // Filtered products
  const filteredProducts = products?.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  // Apply coupon
  const applyCoupon = () => {
    const code = couponRef.current.value.trim().toUpperCase();
    if (code === 'SAVE10') {
      setDiscount(10);
      alert('✅ Coupon applied: 10% OFF');
    } else if (code === 'SAVE20') {
      setDiscount(20);
      alert('✅ Coupon applied: 20% OFF');
    } else {
      setDiscount(0);
      alert('❌ Invalid coupon code');
    }
    couponRef.current.value = '';
  };

  // Cart operations
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Totals
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discountedTotal = (subtotal - (subtotal * discount) / 100).toFixed(2);

  // Confirm order
  const confirmOrder = () => {
    alert(`🎉 Order confirmed for ${user}! Thank you for shopping.`);
    setCart([]);
    setDiscount(0);
    localStorage.removeItem(`${user}_cart`);
    localStorage.removeItem(`${user}_discount`);
    setShowCheckout(false);
  };

  // Login & logout
  const handleLogin = () => {
    const enteredUser = usernameRef.current.value.trim();
    if (enteredUser) {
      setUser(enteredUser);
      usernameRef.current.value = '';
    } else {
      alert('⚠️ Please enter a username to login.');
    }
  };

  const handleLogout = () => {
    setUser(null);
    setCart([]);
    setDiscount(0);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>🛒 E-Commerce Store</h2>

      {/* Login */}
      <Login
        user={user}
        onLogin={handleLogin}
        onLogout={handleLogout}
        usernameRef={usernameRef}
      />

      {/* Search & Coupon */}
      {user && (
        <SearchCoupon
          search={search}
          setSearch={setSearch}
          couponRef={couponRef}
          applyCoupon={applyCoupon}
        />
      )}

      {/* Products */}
      {user && <ProductList products={filteredProducts} addToCart={addToCart} />}

      {/* Cart */}
      {user && (
        <Cart
          user={user}
          cart={cart}
          subtotal={subtotal}
          discount={discount}
          discountedTotal={discountedTotal}
          decreaseQty={decreaseQty}
          increaseQty={increaseQty}
          removeFromCart={removeFromCart}
          onCheckout={() => setShowCheckout(true)}
        />
      )}

      {/* Checkout */}
      {showCheckout && (
        <CheckoutModal
          cart={cart}
          subtotal={subtotal}
          discount={discount}
          discountedTotal={discountedTotal}
          confirmOrder={confirmOrder}
          onClose={() => setShowCheckout(false)}
        />
      )}
    </div>
  );
}

export default EcommerceApp;
