import React from 'react';
import { Zap, Layers, Wind, Shield } from 'lucide-react';
import './App.css';
import designImage from './assets/img5.png';

function Design() {
  return (
    <section id="design" className="design-section">
      <div className="design-banner">
        <div className="design-3d" role="img" aria-label="Rotating 3D sneaker engineering model">
          <div className="design-3d-face design-3d-front" />
          <div className="design-3d-face design-3d-side" />
          <img src={designImage} alt="Sneaker Engineering Breakdown" />
        </div>
      </div>
      <div className="all">
        <p className="tech-tag">Inside every pair</p>
        <h3>Engineered layer by layer</h3>
        <p id="p2">Four technologies, one obsession: making every mile feel lighter than the last.</p>

        <div className="tech-grid">
          <div className="btn-inside">
            <Zap className="tech-icon" size={28} />
            <h4>Carbon Plate</h4>
            <span>Full-length plate snaps you forward for up to 4% more efficiency.</span>
          </div>
          <div className="btn-inside">
            <Layers className="tech-icon" size={28} />
            <h4>Foam Core</h4>
            <span>Supercritical foam returns 87% of your energy every stride.</span>
          </div>
          <div className="btn-inside">
            <Wind className="tech-icon" size={28} />
            <h4>Engineered Knit</h4>
            <span>Zoned breathability keeps feet cool on long efforts.</span>
          </div>
          <div className="btn-inside">
            <Shield className="tech-icon" size={28} />
            <h4>Traction Outsole</h4>
            <span>Multi-directional lugs bite into wet roads and dirt alike.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Design;