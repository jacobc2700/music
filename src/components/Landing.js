import '../styles/landing.css';
import axios from 'axios';
import parseVideoResponse from '../modules/parseVideoResponse';
import React, { useState, useEffect } from 'react';
import youtube from '../api/youtube';
import VideoCard from './VideoCard';
import { VideoResponse } from './VideoResponse';

const Landing = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [videos, setVideos] = useState();

  const handleSubmit = async (e) => {
    //Prevent the page from refreshing automatically.
    e.preventDefault();

    try {
      const response = await youtube.get('search', {
        params: {
          q: searchTerm,
        },
      });
      setVideos(parseVideoResponse(response));
      console.log(videos);
      // console.log(parseVideoResponse(response));
    } catch (err) {
      console.log(err);
    }

    // console.log(response);
  };

  return (
    <section className='landing'>
      <div class='dark-overlay'>
        <div class='landing-inner'>
          <div>
            {/* {videos && <p>Hello</p>} */}
            {videos &&
              videos.map((video) => <div key={1}>{video.video_title}</div>)}
          </div>
          <form onSubmit={handleSubmit}>
            <h1>title</h1>
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
          {/* <VideoCard /> */}
          {/* <button type='submit'>search</button> */}
        </div>
      </div>
    </section>
  );
};

export default Landing;
