'use client';
import { useEffect, useState } from 'react';

export default function Subscribe() {
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isSendReady, setIsSendReady] = useState<boolean>(false);

  const sendEmail = () => {
    console.log(`Email sent to: ${email}`);
    setEmail('');
    setIsSuccess(true);
    setIsSendReady(false);
  };

  useEffect(() => {
    if (email.length > 0) {
      setIsSendReady(true);
      console.log(`Email is ready: ${email}`);
    } else {
      setIsSendReady(false);
      console.log(`Email is not ready: ${email}`);
    }
  }, [email]);

  return (
    <div className="subscribe">
      {!isSuccess && (
        <input
          type="email"
          id="email"
          placeholder="Stay in the loop"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      )}
      {isSuccess && <p>Success. Thank you!</p>}
      <button
        className={`${isSendReady === true ? 'active' : null}`}
        onClick={sendEmail}
      >
        <img src="/return.svg" alt="submit" />
      </button>
    </div>
  );
}
