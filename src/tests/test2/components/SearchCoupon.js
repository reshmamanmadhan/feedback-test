import React from 'react';

const SearchCoupon = ({ search, setSearch, couponRef, applyCoupon }) => (
  <>
    <input
      type="text"
      placeholder="Search products..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{ padding: '8px', marginRight: '10px', width: '200px' }}
    />
    <input
      type="text"
      placeholder="Enter Coupon Code"
      ref={couponRef}
      style={{ padding: '8px', marginRight: '10px', width: '200px' }}
    />
    <button onClick={applyCoupon} style={{ padding: '8px' }}>
      Apply Coupon
    </button>
    <hr />
  </>
);

export default SearchCoupon;
