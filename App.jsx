import { useState } from 'react';
import { Search, ShoppingBag, X } from 'lucide-react';
import Home from './Home.jsx';
import Category from './Category.jsx';
import Featured from './Featured.jsx';
import Design from './Design.jsx';
import Email from './Email.jsx';
import Footer from './Footer.jsx';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const addToCart = (shoe) => {
    setCartItems((items) => {
      const existingItem = items.find((item) => item.id === shoe.id);
      if (existingItem) {
        return items.map((item) => item.id === shoe.id
          ? { ...item, quantity: item.quantity + 1 }
          : item);
      }
      return [...items, { ...shoe, quantity: 1 }];
    });
  };

  const removeFromCart = (shoeId) => {
    setCartItems((items) => items
      .map((item) => item.id === shoeId ? { ...item, quantity: item.quantity - 1 } : item)
      .filter((item) => item.quantity > 0));
  };

  const totalItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <div className="shop-motion-bg" aria-hidden="true">
        <div className="motion-grid" />
        <div className="motion-scan motion-scan-one" />
        <div className="motion-scan motion-scan-two" />
      </div>
      <header className="navbar">
        <p className="logo"><a href="#home">STRIDE<span>.</span></a></p>
        <nav className="desktop-nav" aria-label="Main navigation">
          <ul>
            <li><a href="#featured">New Arrivals</a></li>
            <li><a href="#category">Categories</a></li>
            <li><a href="#design">Technology</a></li>
            <li><a href="#email">Newsletter</a></li>
          </ul>
        </nav>
        <div className={`mobile-menu ${isMenuOpen ? 'is-open' : ''}`}>
          <button
            className="menu-toggle"
            type="button"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
          {isMenuOpen && (
            <nav className="mobile-menu-links" aria-label="Mobile navigation">
              <a href="#featured" onClick={() => setIsMenuOpen(false)}>New Arrivals</a>
              <a href="#category" onClick={() => setIsMenuOpen(false)}>Categories</a>
              <a href="#design" onClick={() => setIsMenuOpen(false)}>Technology</a>
              <a href="#email" onClick={() => setIsMenuOpen(false)}>Newsletter</a>
            </nav>
          )}
        </div>
        <div className="search-bar">
          <a className="icon-button" href="#featured" aria-label="Search featured sneakers" title="Search featured sneakers">
            <Search size={20} />
          </a>
          <button className="icon-button cart-button" type="button" onClick={() => setIsCartOpen(true)} aria-label={`Shopping bag with ${totalItemCount} items`}>
            <ShoppingBag size={20} />
            {totalItemCount > 0 && <span className="cart-count">{totalItemCount}</span>}
          </button>
        </div>
      </header>

      {isCartOpen && (
        <div className="cart-overlay" onClick={() => setIsCartOpen(false)}>
          <aside className="aside open" onClick={(event) => event.stopPropagation()}>
            <div className="aside-header">
              <h3>Your Shopping Bag</h3>
              <button className="close-btn" type="button" onClick={() => setIsCartOpen(false)} aria-label="Close shopping bag"><X size={20} /></button>
            </div>
            {cartItems.length === 0 ? (
              <p className="aside-body">Your shopping bag is empty.</p>
            ) : (
              <ul className="drawer-items">
                {cartItems.map((item) => (
                  <li key={item.id}>
                    <span>{item.name} <strong>× {item.quantity}</strong></span>
                    <button type="button" onClick={() => removeFromCart(item.id)}>Remove</button>
                  </li>
                ))}
              </ul>
            )}
          </aside>
        </div>
      )}

      <Home />
      <Category />
      <Featured cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />
      <Design />
      <Email />
      <Footer />
    </>
  );
}

export default App;
