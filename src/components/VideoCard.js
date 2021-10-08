import React from 'react';
import '../styles/video_card.css';

// video title
// link to the video
// author title
// video year
const VideoCard = (video_id, title, author) => {
  return (
    <div class='video_card'>
      <div>
        <img src='https://picsum.photos/20/20' />
      </div>
      <div>{video_id}</div>
      <div>Humboo</div>
    </div>
  );
};

export default VideoCard;
