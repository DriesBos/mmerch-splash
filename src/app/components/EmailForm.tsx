'use client';

import { useRef, useState } from 'react';

// custom-typed element to keep the handleSubmit function safe & tidy
interface EmailFormElement extends HTMLFormElement {
  readonly elements: HTMLFormControlsCollection & {
    emailInput: HTMLInputElement;
  };
}

export const EmailForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isError, setIsError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setIsError(false);
    setIsSubscribed(false);
    inputRef.current?.setCustomValidity('');
  };

  function handleSubmit(event: React.FormEvent<EmailFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        // Responses from ActiveCampaign API will return a JSON object with an "action" key and a "data" key.
        // Successful responses will return an empty data.url key.
        // Unsuccessful responses will have an error message in response.data.message
        // example error message from ActivCampaign: "E-mail address is invalid"
        if (response.action === 'redirect' && response.data.url === '') {
          console.log('response: ', response);
          setInputValue('');
          setIsSubscribed(true);
        } else {
          const activeHostedErrorMsg =
            response?.data?.message || 'An error occurred. Please try again.';
          setIsError(true);
          inputRef.current?.setCustomValidity(activeHostedErrorMsg);
          inputRef.current?.reportValidity();
        }
      })
      .catch(() => {
        // TODO: Error reporting to Sentry
        setIsError(true);
        inputRef.current?.setCustomValidity(
          'An error occurred. Please try again.'
        );
        inputRef.current?.reportValidity();
      });
  }

  return (
    <div>
      <div>
        <form
          method="post"
          target="_blank"
          action="https://mmerch.activehosted.com/proc.php?jsonp=true"
          onSubmit={handleSubmit}
        >
          <label htmlFor="emailInput">Email address</label>

          {/* hidden inputs */}
          <input type="hidden" name="u" value="5" />
          <input type="hidden" name="f" value="5" />
          <input type="hidden" name="s" />
          <input type="hidden" name="c" value="0" />
          <input type="hidden" name="m" value="0" />
          <input type="hidden" name="act" value="sub" />
          <input type="hidden" name="v" value="2" />
          <input
            type="hidden"
            name="or"
            value="a56c1d1deb333baf53d00a0b4345a0f7"
          />

          {/* visible input */}
          <input
            type="email"
            ref={inputRef}
            id="emailInput"
            name="email"
            value={inputValue}
            placeholder={isSubscribed ? 'Thank you! 🎉' : 'enter your email'}
            onChange={handleInputChange}
            required
          />
          <button
            aria-label="Subscribe to our newsletter"
            disabled={!inputValue || isSubscribed}
            type="submit"
          >
            submit
          </button>
        </form>
        <p>
          {isError
            ? 'There was an error with either your submission or the network. Please try again.'
            : 'Join our newsletter and be in the know about new drops, exclusive events and more.'}
        </p>
      </div>
    </div>
  );
};
