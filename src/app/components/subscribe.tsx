'use client';

import { useState, useRef } from 'react';

export default function Subscribe() {
  const [inputValue, setInputValue] = useState('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState(false);
  // const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setIsError(false);
    setIsSuccess(false);
    // inputRef.current?.setCustomValidity(''); // clear any custom validation messages
  };

  const createContact = async () => {
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'Api-Token':
          '43df38d9e7423fc060ee9d4ebf88769f649c43e7b9d74a1b9824f9060d218508802bda64',
      },
      body: JSON.stringify({
        contact: {
          inputValue,
        },
      }),
    };

    try {
      const response = await fetch(
        'https://mmerch.api-us1.com/api/3/contacts',
        options
      );
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.error('Error creating contact:', error);
      throw error;
    }
  };

  const handleSubmit = async () => {
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'Api-Token':
          '43df38d9e7423fc060ee9d4ebf88769f649c43e7b9d74a1b9824f9060d218508802bda64',
      },
      body: JSON.stringify({
        contactList: { sourceid: 0, list: 2, contact: 1, status: 1 },
      }),
    };

    try {
      const response = await fetch(
        'https://mmerch.api-us1.com/api/3/contactLists',
        options
      );
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.error('Error creating contactList item:', error);
      throw error;
    }
  };

  return (
    <div className="subscribe">
      <form method="post" onSubmit={() => handleSubmit()}>
        <input
          type="email"
          id="emailInput"
          // ref={inputRef}
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
