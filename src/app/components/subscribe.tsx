'use client';

import { useState, useRef } from 'react';

export default function Subscribe() {
  const [inputValue, setInputValue] = useState('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setIsError(false);
    setIsSuccess(false);
    inputRef.current?.setCustomValidity(''); // clear any custom validation messages
  };

  const handleSubmit = async () => {
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
            email: inputValue,
            field: [345, 0],
            account_name: 'mmerch.activehosted.com',
          }),
        }
      );

      if (response.ok) {
        console.log(`Email sent to: ${inputValue}`);
        setInputValue('');
        setIsSuccess(true);
      } else {
        setInputValue('');
        setIsSuccess(false);
        inputRef.current?.setCustomValidity(response.statusText);
        inputRef.current?.reportValidity();
        console.error('Error response:', response.statusText);
      }
    } catch (error) {
      setInputValue('');
      setIsSuccess(false);
      setIsError(true);
      console.error('Error sending email:', error);
      inputRef.current?.setCustomValidity(
        'An error occurred. Please try again.'
      );
      inputRef.current?.reportValidity();
    }
  };

  return (
    <div className="subscribe">
      <form
        method="post"
        target="_blank"
        action="https://mmerch.activehosted.com/proc.php?jsonp=true"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          id="emailInput"
          type={inputRef}
          name="email"
          min="4"
          pattern="[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}"
          value={inputValue}
          placeholder={isSuccess ? 'Thank you! 🎉' : 'stay in the loop'}
          onChange={handleInputChange}
          required
        />
        <button
          aria-label="Subscribe to our newsletter"
          disabled={!inputValue || isSuccess}
          type="submit"
        >
          <img src="/return.svg" alt="submit" />
        </button>
      </form>
    </div>
  );
}
