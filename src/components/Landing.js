import '../styles/landing.css';
import axios from 'axios';
import React, { useState } from 'react';
import youtube from '../api/youtube';

const Landing = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = async (e) => {
    //Prevent the page from refreshing automatically.
    e.preventDefault();

    try {
      const response = await youtube.get('search', {
        params: {
          q: searchTerm,
        },
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }

    // console.log(response);
  };

  return (
    <section className='landing'>
      <div class='dark-overlay'>
        <div class='landing-inner'>
          {/* search for youtube video */}
          <form onSubmit={handleSubmit}>
            <h1>{searchTerm}</h1>
            <label>
              Name:
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                type='text'
                name='name'
              />
            </label>
            <input type='submit' value='Submit' />
          </form>
          {/* <button type='submit'>search</button> */}
        </div>
      </div>
    </section>
  );
};

export default Landing;
