'use client';
import { useState } from 'react';

export default function Subscribe() {
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const sendEmail = () => {
    console.log(`Email sent to: ${email}`);
    setEmail('');
    setIsSuccess(true);
  };

  return (
    <div className="subscribe">
      {!isSuccess && (
        <>
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
        </>
      )}
      {isSuccess && (
        <>
          <label>&nbsp;</label>
          <p>Success. Thank you!</p>
        </>
      )}
    </div>
  );
}
