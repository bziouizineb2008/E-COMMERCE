import React from 'react';
import { ArrowRight } from 'lucide-react';
import './App.css';
import categoryRunning from './assets/img1.png';
import categoryLifestyle from './assets/img2.png';
import categoryTrail from './assets/img3.png';
import categoryBasketball from './assets/img4.png';

const CATEGORIES = [
  { id: 1, title: 'Running', count: '48 styles', img: categoryRunning },
  { id: 2, title: 'Lifestyle', count: '72 styles', img: categoryLifestyle },
  { id: 3, title: 'Trail', count: '31 styles', img: categoryTrail },
  { id: 4, title: 'Basketball', count: '26 styles', img: categoryBasketball }
];

function Category() {
  return (
    <section id="category" className="category-section">
      <div className="category-header">
        <p className="subtitle">Categories</p>
        <h2>Find your stride</h2>
        <a href="#featured" className="view-all-link">
          View all <ArrowRight size={18} />
        </a>
      </div>

      <div className="category-grid">
        {CATEGORIES.map((cat) => (
          <a href="#featured" className="category-card" key={cat.id}>
            <img src={cat.img} alt={cat.title} />
            <div className="category-card-info">
              <div>
                <p className="cat-title">{cat.title}</p>
                <span className="cat-count">{cat.count}</span>
              </div>
              <ArrowRight className="icon" size={20} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Category;