import axios from 'axios';

//https://www.googleapis.com/youtube/v3/search?key={KEY}&type=video&part=snippet&maxResults=3&q=soccer
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 3,
    type: 'video',
    key: process.env.REACT_APP_API_KEY,
  },
});
