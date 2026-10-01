import React, { useState } from 'react';
import './App.css';

function Email() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="email" className="email-section">
      <div className="email-box">
        <div className="email-p">
          <h4>Get 15% off your first pair</h4>
          <p>Join the Stride Club for early drops, member-only colorways, and training tips.</p>
        </div>
        {submitted ? (
          <p className="success-msg">Thanks for joining the Stride Club!</p>
        ) : (
          <form className="email-border" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Email;