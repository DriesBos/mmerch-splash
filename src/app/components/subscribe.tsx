'use client';
import { useState } from 'react';

export default function Subscribe() {
  const [email, setEmail] = useState('');

  const sendEmail = () => {
    console.log(`Email sent to: ${email}`);
    setEmail('');
  };
  return (
    <div className="subscribe">
      <label htmlFor="email">subscribe to stay in the loop</label>
      <input
        type="email"
        id="email"
        placeholder="your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={sendEmail}>
        <img src="/return.svg" alt="submit" />
      </button>
    </div>
  );
}
