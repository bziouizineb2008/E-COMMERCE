import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus, Star } from 'lucide-react';
import './App.css';
import shoeRunning from './assets/shoes1.png';
import shoeBasketball from './assets/shoes2.png';
import shoeTrail from './assets/shoes3.png';
import shoeLifestyle from './assets/shoes4.png';

const PRODUCTS = [
  { id: 1, category: 'Running', name: 'Aero Pulse 2', rating: '4.9', reviews: 412, price: 189, oldPrice: 220, img: shoeRunning },
  { id: 2, category: 'Basketball', name: 'Aero Basketball', rating: '4.7', reviews: 310, price: 800, oldPrice: 900, img: shoeBasketball },
  { id: 3, category: 'Trail', name: 'Aero Terra', rating: '5.0', reviews: 188, price: 109, oldPrice: 300, img: shoeTrail },
  { id: 4, category: 'Lifestyle', name: 'Aero Pulse 8', rating: '4.1', reviews: 95, price: 178, oldPrice: 200, img: shoeLifestyle },
];

function Featured({ cartItems, addToCart, removeFromCart }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const totalItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const filteredProducts = selectedCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section id="featured" className="featured-section">
      <div className="trending">
        <div className="header-bar">
          <span className="badge">FEATURED</span>
          <div className="cart-badge">
            <ShoppingCart size={16} /> Cart ({totalItemCount} {totalItemCount === 1 ? 'item' : 'items'})
          </div>
        </div>

        <h2>Trending this week</h2>
        <p id="p">Hover over cards for an elevated depth effect.</p>

        <div className="filter-buttons">
          {['All', 'Running', 'Lifestyle', 'Trail', 'Basketball'].map((cat) => (
            <button
              key={cat}
              type="button"
              className={selectedCategory === cat ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="products-grid">
        {filteredProducts.map((shoe) => (
          <div className="product-card" key={shoe.id}>
            <div className="img-wrapper">
              <img src={shoe.img} alt={shoe.name} />
            </div>
            <div className="product-info">
              <div className="rate">
                <p className="shoe-cat">{shoe.category}</p>
                <p className="shoe-name">{shoe.name}</p>
                <p className="shoe-rating">
                  <Star size={14} fill="#eab308" color="#eab308" /> {shoe.rating} ({shoe.reviews})
                </p>
              </div>
              <div className="add">
                <p className="price-tag">
                  <span className="current-price">${shoe.price}</span>
                  <del className="old-price">${shoe.oldPrice}</del>
                </p>
                <button type="button" className="add-btn" onClick={() => handleAddShoe(shoe)}>
                  Add to Bag
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="shop-page-section">
        <h3>Shopping Bag ({totalItemCount})</h3>
        {cartItems.length === 0 ? (
          <p className="empty-msg">Your bag is currently empty. Click "Add to Cart" on any item above!</p>
        ) : (
          <div className="cart-summary">
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <strong>{item.name}</strong> ({item.category}) — ${item.price} × {item.quantity}
                  </div>
                  <div className="cart-controls">
                    <button type="button" onClick={() => removeFromCart(item.id)}><Minus size={14} /></button>
                    <span>{item.quantity}</span>
                    <button type="button" onClick={() => addToCart(item)}><Plus size={14} /></button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-total">
              <strong>Total Price:</strong> ${totalPrice}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Featured;