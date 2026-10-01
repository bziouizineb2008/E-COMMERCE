import React from 'react';
import './App.css';
import shoeImage from './assets/shoes1.png';

function Home() {
  return (
    <>
      <section id="home">
        <div className="section-container">
          <div className="fall">
            <p><span>•</span> Fall 2026 Collection is live</p>
          </div>
          <p id="para1">Sneakers built to <span>move</span> <br /> with you</p>
          <p id="para2">Premium running, trail, and lifestyle sneakers engineered with recycled materials.</p>

          <div className="btns">
            <a href="#featured" className="btn-primary">Shop the Collection</a>
            <a href="#design" className="btn-secondary">Explore the Tech</a>
          </div>

          <div className="shoes">
            <div className="hero-3d" aria-label="Rotating 3D preview of the Nova Knit Low sneaker" role="img">
              <div className="hero-3d-floor" />
              <img src={shoeImage} alt="Nova Knit Low sneaker" className="hero-img" />
            </div>
            <div className="spans">
              <button type="button" className="shoe-tag">Aero Pulse 2</button>
              <button type="button" className="shoe-tag">Terra Flex GTX</button>
              <button type="button" className="shoe-tag active">Nova Knit Low</button>
              <button type="button" className="shoe-tag">Volt Court Hi</button>
            </div>
            <p className="now-showing">Now showing <span>Nova Knit Low · $139</span></p>

            <div className="prices">
              <p><strong>120K+</strong><br />Happy runners</p>
              <p><strong>4.8/5</strong><br />Avg. rating</p>
              <p><strong>45%</strong><br />Recycled content</p>
            </div>
          </div>
        </div>

        <div className="ticker-banner">
          <div className="ticker-text">
            60-day trial runs • Carbon-plate speed • Recycled uppers • New drops every Friday • Free shipping over $75
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;