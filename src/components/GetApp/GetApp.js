import React, { useState } from 'react';
import "./GetApp.css";

const GetApp = () => {
  const [inputType, setInputType] = useState('email');

  return (
    <div className='getapp'>
      <div className='left-side'>
        <img src='https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png' alt='phone' />
      </div>
      <div className='right-side'>
        <h1>Get the Zomato app</h1>
        <p>We will send you a link, open it on your phone to download<br/>the app</p>
        <div className='get-link'>
          <div className='get-link_btn'>
            <input
              type='radio'
              id='email'
              name='contact'
              checked={inputType === 'email'}
              onChange={() => setInputType('email')}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className='get-link_btn'>
            <input
              type='radio'
              id='phone'
              name='contact'
              checked={inputType === 'phone'}
              onChange={() => setInputType('phone')}
            />
            <label htmlFor="phone">Phone</label>
          </div>
        </div>
        <form className='input'>
          {inputType === 'email' ? (
            <input type='email' placeholder='Email' />
          ) : (
            <div className='phone-input'>
              <select>
                <option value="+91">+91</option>
                <option value="+12">+12</option>
                <option value="+44">+44</option>
              </select>
              <input type='tel' placeholder='Type here....' />
            </div>
          )}
          <button type='submit'>Share App Link</button>
        </form>
        <span>Download app from</span>
        <div className='download_img'>
          <img src='https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png' alt='playstore' />
          <img src='https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png' alt='appstore' />
        </div>
      </div>
    </div>
  );
};

export default GetApp;
