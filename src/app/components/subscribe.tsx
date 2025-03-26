'use client';

import { useEffect, useState, useRef } from 'react';

export default function Subscribe() {
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [buttonActive, setButtonActive] = useState<boolean>(false);

  const sendEmail = async () => {
    try {
      const response = await fetch(
        'https://mmerch.api-us1.com/admin/api.php?api_action=contact_sync',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Api-Token':
              '43df38d9e7423fc060ee9d4ebf88769f649c43e7b9d74a1b9824f9060d218508802bda64',
            api_action: 'contact_sync',
            api_output: 'serialize',
          },
          body: JSON.stringify({
            email: email,
            field: [345, 0],
            account_name: 'mmerch.activehosted.com',
          }),
        }
      );

      if (response.ok) {
        console.log(`Email sent to: ${email}`);
        setEmail('');
        setIsSuccess(true);
        setButtonActive(false);
      } else {
        console.error('Failed to send email');
        setEmail('');
        setIsSuccess(false);
        setButtonActive(true);
      }
    } catch (error) {
      setEmail('');
      setIsSuccess(false);
      setButtonActive(true);
      console.error('Error sending email:', error);
    }
  };

  useEffect(() => {
    if (email.length > 0) {
      setButtonActive(true);
      console.log(`Email is ready: ${email}`);
    } else {
      setButtonActive(false);
      console.log(`Email is not ready: ${email}`);
    }
  }, [email]);

  return (
    <div className="subscribe">
      {!isSuccess && (
        <input
          type="email"
          id="email"
          placeholder="stay in the loop"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      )}
      {isSuccess && <p>Success. Thank you!</p>}
      <button
        className={`${buttonActive === true ? 'active' : null}`}
        onClick={sendEmail}
      >
        <img src="/return.svg" alt="submit" />
      </button>
    </div>
  );
}
