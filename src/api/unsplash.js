import axios from 'axios';
import config from '../config'
export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization:
      config().token
  }
});