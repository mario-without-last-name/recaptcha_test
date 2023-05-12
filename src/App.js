import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './App.css';

const App = () => {
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCaptchaChange = () => {
    setCaptchaChecked(true);
    setErrorMessage('');
  };

  const handleContinue = () => {
    if (!captchaChecked) {
      setErrorMessage('Please pass the CAPTCHA test first');
    } else {
      alert('Success!');
    }
  };

  return (
    <div className='container'>
      <div className='card'>
        <h1>Mario's reCAPTCHA Example</h1>
        <div className='reCaptcha'>
          <ReCAPTCHA
            sitekey="6LchrQImAAAAADsDuq4s-VUX_ono_nzkhSLQ3dUW"
            onChange={handleCaptchaChange}
          />
        </div>
        {errorMessage && <p>{errorMessage}</p>}
        <br/>
        <button onClick={handleContinue}>Continue</button>
      </div>
    </div>
  );
};

export default App;