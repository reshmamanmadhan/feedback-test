import React from 'react';

const ProductList = ({ products, addToCart }) => (
  <>
    <h3>Products</h3>
    {products.length > 0 ? (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ddd',
              padding: '10px',
              borderRadius: '8px',
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: '100px', height: '100px' }}
            />
            <h4>{product.title}</h4>
            <p>
              <strong>${product.price}</strong>
            </p>
            <button
              onClick={() => addToCart(product)}
              style={{
                padding: '8px',
                backgroundColor: 'green',
                color: 'white',
                border: 'none',
                cursor: "pointer",
                borderRadius: '5px',
                transition: "background 0.2s ease"
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    ) : (
      <p>No products found.</p>
    )}
    <hr />
  </>
);

export default ProductList;
